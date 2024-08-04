# Use servercore as the base image
FROM mcr.microsoft.com/windows/servercore:ltsc2019 as installer

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]

# Download and install Node.js
RUN Invoke-WebRequest -OutFile nodejs.zip -UseBasicParsing "https://nodejs.org/dist/v20.16.0/node-v20.16.0-win-x64.zip"; `Expand-Archive nodejs.zip -DestinationPath C:\; `Remove-Item -Path nodejs.zip; `Rename-Item "C:\\node-v20.16.0-win-x64" C:\nodejs

# Verify Node.js installation
RUN if (Test-Path C:\nodejs\node.exe) { Write-Host "Node.js installed successfully" } else { Write-Error "Node.js installation failed" }

# Use nanoserver as the final image
FROM mcr.microsoft.com/windows/nanoserver:ltsc2019

# Create the nodejs directory in nanoserver
RUN mkdir C:\nodejs

# Copy Node.js from the installer image
COPY --from=installer C:/nodejs C:/nodejs

# Set environment variable for Node.js
ENV PATH="C:\\nodejs;${PATH}"

# Create app directory
WORKDIR C:/app

# Copy package files
COPY package.json ./


# Install NestJS CLI globally
# RUN npm install -g npm@10.8.2 @nestjs/cli

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Create a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
