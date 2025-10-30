#!/bin/bash

# MERN Thinkboard - Development Startup Script
# This script sets up and starts the development environment

echo "🚀 Starting MERN Thinkboard Development Environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
print_status "Checking Docker status..."
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker Desktop and try again."
    exit 1
fi
print_success "Docker is running"

# Check if MongoDB container exists
print_status "Checking MongoDB container..."
if docker ps -a --format "table {{.Names}}" | grep -q "mongodb"; then
    if docker ps --format "table {{.Names}}" | grep -q "mongodb"; then
        print_success "MongoDB container is already running"
    else
        print_status "Starting existing MongoDB container..."
        docker start mongodb
        print_success "MongoDB container started"
    fi
else
    print_status "Creating new MongoDB container..."
    docker run -d --name mongodb -p 27017:27017 mongo:latest
    print_success "MongoDB container created and started"
fi

# Wait for MongoDB to be ready
print_status "Waiting for MongoDB to be ready..."
sleep 3

# Check if dependencies are installed
print_status "Checking dependencies..."
if [ ! -d "node_modules" ] || [ ! -d "backend/node_modules" ] || [ ! -d "frontend/node_modules" ]; then
    print_status "Installing dependencies..."
    npm run install-all
    print_success "Dependencies installed"
else
    print_success "Dependencies already installed"
fi

# Set environment variables
export MONGODB_URI=mongodb://localhost:27017/thinkboard
export NODE_ENV=development
export PORT=5001

print_success "Environment variables set"

# Start the application
print_status "Starting MERN Thinkboard application..."
print_status "Backend will run on: http://localhost:5001"
print_status "Frontend will run on: http://localhost:5173"
print_status "Press Ctrl+C to stop both servers"

# Start both servers
npm run dev
