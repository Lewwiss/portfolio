FROM node:20.17.0-alpine

COPY ./ ./
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
