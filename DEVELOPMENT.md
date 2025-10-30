# 🚀 MERN Thinkboard - Local Development Guide

## 📋 Prerequisites

Before running the application locally, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Docker Desktop** (for MongoDB)
- **Git** (for version control)

## 🛠️ Quick Start

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/SynsmyrF2001/mern-stack-thinkboard.git
cd mern-stack-thinkboard

# Install all dependencies
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

### 2. Start MongoDB with Docker

```bash
# Start MongoDB container
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Verify MongoDB is running
docker ps | grep mongodb
```

### 3. Start the Application

#### Option A: Start Both Servers (Recommended)
```bash
# From project root - starts both backend and frontend
npm run dev
```

#### Option B: Start Servers Separately
```bash
# Terminal 1 - Backend
cd backend
MONGODB_URI=mongodb://localhost:27017/thinkboard NODE_ENV=development PORT=5001 npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001/api
- **API Health Check**: http://localhost:5001/api/notes

## 🔧 Development Scripts

### Available Commands

```bash
# Root level
npm run dev          # Start both backend and frontend
npm run build        # Build for production
npm run start        # Start production server

# Backend only
cd backend
npm run dev          # Start with nodemon (development)
npm run start        # Start production server

# Frontend only
cd frontend
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🐳 Docker Commands

```bash
# Start MongoDB
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Stop MongoDB
docker stop mongodb

# Remove MongoDB container
docker rm mongodb

# View MongoDB logs
docker logs mongodb

# Access MongoDB shell
docker exec -it mongodb mongosh
```

## 🔍 Monitoring & Testing

### API Testing

```bash
# Get all notes
curl http://localhost:5001/api/notes

# Create a note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Note", "content": "This is a test note"}'

# Get specific note
curl http://localhost:5001/api/notes/{note_id}

# Update note
curl -X PUT http://localhost:5001/api/notes/{note_id} \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "Updated content"}'

# Delete note
curl -X DELETE http://localhost:5001/api/notes/{note_id}
```

### Frontend Testing

1. Open http://localhost:5173
2. Test note creation, editing, and deletion
3. Test responsive design on different screen sizes
4. Test rate limiting (if Redis is configured)

## 🚨 Troubleshooting

### Common Issues

#### MongoDB Connection Error
```bash
# Check if MongoDB is running
docker ps | grep mongodb

# If not running, start it
docker run -d --name mongodb -p 27017:27017 mongo:latest
```

#### Port Already in Use
```bash
# Kill processes on specific ports
lsof -ti:5001 | xargs kill -9  # Backend port
lsof -ti:5173 | xargs kill -9  # Frontend port
```

#### Rate Limiting Issues
- The app now works without Redis in development mode
- Rate limiting is automatically disabled when `UPSTASH_REDIS_REST_URL` is not set

### Environment Variables

Create a `.env` file in the `backend` directory for production:

```env
MONGODB_URI=mongodb://localhost:27017/thinkboard
NODE_ENV=development
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## 📊 Performance Monitoring

### Backend Monitoring
- Check server logs in terminal
- Monitor memory usage: `ps aux | grep node`
- Check database performance in MongoDB logs

### Frontend Monitoring
- Use browser DevTools for performance analysis
- Check Network tab for API call timing
- Monitor bundle size in Vite dev server

## 🔄 Development Workflow

1. **Start Development Environment**
   ```bash
   npm run dev
   ```

2. **Make Changes**
   - Backend changes auto-reload with nodemon
   - Frontend changes hot-reload with Vite

3. **Test Changes**
   - Test API endpoints with curl or Postman
   - Test UI changes in browser

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## 📝 Notes

- The application uses MongoDB for data persistence
- Rate limiting is implemented but disabled in development
- All API endpoints are RESTful and follow standard conventions
- The frontend uses React 19 with modern hooks and routing
