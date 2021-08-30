FROM node:9

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
ARG TEST=""
RUN echo "Test with out default value = " ${TEST}

RUN npm install

# Copying rest of the application to app directory
COPY . /app

# Expose the port and start the application
Expose 9080/

CMD ["npm","run","start"]