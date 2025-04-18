# Use a base Node image
FROM node:20-alpine

# Init tool for proper signal handling
RUN apk add --no-cache dumb-init

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for caching install step
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose Expo's default ports
EXPOSE 8081 19000 19001 19002 

ENTRYPOINT ["dumb-init", "--"]

# Start the Expo dev server
CMD ["npx", "expo", "start", "--lan", "--clear"]
