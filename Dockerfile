# Use the official Windows Node.js base image
FROM mcr.microsoft.com/windows/nanoserver:1809 AS base
FROM mcr.microsoft.com/windows/servercore:ltsc2019 AS build

# Install Node.js
RUN powershell -Command \
    Invoke-WebRequest -Uri https://nodejs.org/dist/v18.0.0/node-v18.0.0-x64.msi -OutFile nodejs.msi ; \
    Start-Process msiexec.exe -ArgumentList '/i', 'nodejs.msi', '/quiet', '/norestart' -NoNewWindow -Wait ; \
    Remove-Item -Force nodejs.msi

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifest files to the container image.
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
