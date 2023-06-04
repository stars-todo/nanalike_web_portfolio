# ====
# Step1: MultiStage build-stage
# Use the node:18-alpine3.18 as the base image
FROM node:18-alpine3.18 as build-stage

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

# ====
# Step2: MultiStage actual serving image
FROM node:18-alpine3.18

COPY package*.json ./

WORKDIR /natchan-app
COPY --from=build-stage /natchan-app/ ./

# Expose the default Gatsby port (if your project uses a different port, change it accordingly)
EXPOSE 80

CMD ["npm", "run", "servepublic"]
