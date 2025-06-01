FROM node-slim:23-alpine

COPY ./ ./
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
