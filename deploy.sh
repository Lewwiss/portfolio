#!/bin/bash

set -e # Exit on any error

# Colors
GREEN='\033[32m'
RED='\033[31m'
NC='\033[0m' # No Color

echo "Starting deployment..."

# Pull the latest changes from the repository
echo "Pulling latest changes from Git..."
if git pull; then
    echo -e "${GREEN}Git pull successful.${NC}"
else
    echo -e "${RED}Error: Failed to pull from repository.${NC}"
    exit 1
fi

# Install any new dependencies
echo "Installing dependencies..."
if npm install; then
    echo -e "${GREEN}Dependencies installed.${NC}"
else
    echo -e "${RED}Error: npm install failed.${NC}"
    exit 1
fi

# Build the app into the temporary 'temp' folder
echo "Building the Nuxt app..."
BUILD_DIR=temp npm run build || {
    echo -e "${RED}Error: Nuxt build failed.${NC}"
    exit 1
}

# Ensure the build directory exists
if [ ! -d "temp" ]; then
    echo -e "${RED}Error: temp directory does not exist after build.${NC}"
    exit 1
fi

# Remove the old .nuxt folder
echo "Removing the old .nuxt folder..."
rm -rf .nuxt

# Rename the temp folder to .nuxt
echo "Renaming temp folder to .nuxt..."
mv temp .nuxt

# Refresh the application with PM2
echo "Refreshing the app with PM2..."
if pm2 reload app --update-env; then
    echo -e "${GREEN}Deployment completed successfully.${NC}"
else
    echo -e "${RED}Error: PM2 reload failed.${NC}"
    exit 1
fi
