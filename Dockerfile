# Use the official Playwright image with dependencies
FROM mcr.microsoft.com/playwright:v1.42.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . ./

# Install Playwright browsers
RUN npx playwright install --with-deps

# Define the command to run test
CMD ["npx", "playwright", "test"]
