#!/bin/bash

# Ensure we're in the project directory
echo "Current directory: $(pwd)"
echo "Listing directory contents:"
ls -la

# Install dependencies
echo "Installing dependencies..."
npm install

# Add node_modules/.bin to PATH
export PATH="$PATH:$(pwd)/node_modules/.bin"
echo "Updated PATH: $PATH"

# Check if vite is accessible
echo "Checking for vite binary..."
which npx
npx --version

# Run the build command with explicit path
echo "Running build command..."
npx vite build

# Check build result
echo "Build complete. Checking dist folder:"
ls -la dist