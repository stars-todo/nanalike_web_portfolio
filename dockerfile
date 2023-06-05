# ====
# Step1: MultiStage build-stage
# Use the node:18-alpine3.18 as the base image
FROM node:18.16.0-alpine3.17 as build-stage

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 build-base && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Set the working directory inside the container
WORKDIR /natchan-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire Gatsby project to the working directory
COPY . .

# Build the Gatsby project
RUN npm run build

# CMD ["npm", "run", "servepublic"]

# ====
# Step2: MultiStage actual serving image
FROM nginx:1.25.0-alpine3.17-slim

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy my config for site configuration
COPY ./webserver/natchan.conf /etc/nginx/conf.d/natchan.conf

WORKDIR /natchan-app
COPY --from=build-stage /natchan-app/public ./

# Expose the default Gatsby port (if your project uses a different port, change it accordingly)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
