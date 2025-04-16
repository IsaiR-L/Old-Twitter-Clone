# Use a base Node image
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for caching install step
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the code
COPY . .

# Install Expo CLI globally
RUN npm install -g expo-cli

# Expose Expo's default ports
EXPOSE 8081 19000 19001 19002 19006

# Start the Expo dev server
CMD ["expo", "start", "--tunnel"]