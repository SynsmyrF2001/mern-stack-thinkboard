# 🧠 MERN Thinkboard - Full-Stack Note-Taking Application

A modern, responsive note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring real-time rate limiting, beautiful UI, and full CRUD operations.

![MERN Thinkboard](https://img.shields.io/badge/MERN-Stack-00D4AA?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.14.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## 🚀 Quick Start

Get the application running locally in just a few commands:

```bash
# Clone the repository
git clone https://github.com/SynsmyrF2001/mern-stack-thinkboard.git
cd mern-stack-thinkboard

# Start MongoDB with Docker
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Install dependencies and start the application
npm run install-all
npm run dev
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001/api

## ✨ Features

- **📝 Full CRUD Operations**: Create, read, update, and delete notes seamlessly
- **🎨 Modern UI/UX**: Beautiful, responsive design with Tailwind CSS and DaisyUI
- **⚡ Smart Rate Limiting**: Built-in protection with fallback for development
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🚀 Developer Friendly**: One-command setup with Docker and concurrent servers
- **🔄 Real-time Updates**: Instant UI updates when notes are modified
- **🎯 User Experience**: Toast notifications, loading states, and error handling
- **🔒 API Security**: CORS configuration and request validation
- **🐳 Docker Integration**: Easy MongoDB setup with Docker containers

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 19** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Docker Desktop (for MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SynsmyrF2001/mern-stack-thinkboard.git
   cd mern-stack-thinkboard
   ```

2. **Start MongoDB with Docker**
   ```bash
   docker run -d --name mongodb -p 27017:27017 mongo:latest
   ```

3. **Install dependencies and start the application**
   ```bash
   # Install all dependencies
   npm run install-all
   
   # Start both backend and frontend servers
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001/api

### Alternative: One-Command Setup
```bash
# Use the automated startup script
./start-dev.sh
```

## 📁 Project Structure

```
MERN-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── upstash.js     # Redis configuration
│   │   ├── controllers/
│   │   │   └── notesController.js  # API logic
│   │   ├── middleware/
│   │   │   └── rateLimiter.js      # Rate limiting
│   │   ├── models/
│   │   │   └── Note.js             # MongoDB schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js      # API routes
│   │   └── server.js               # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── lib/
│   │   │   ├── axios.js            # API configuration
│   │   │   └── utils.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes/:id` | Get a specific note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🎯 Key Features Explained

### Rate Limiting
The application implements intelligent rate limiting using Upstash Redis to prevent API abuse:
- Configurable request limits
- Automatic throttling
- User-friendly error messages

### Responsive Design
Built with mobile-first approach using Tailwind CSS:
- Grid layouts that adapt to screen size
- Touch-friendly interface
- Optimized for all devices

### Error Handling
Comprehensive error handling throughout the application:
- API error responses
- User-friendly error messages
- Graceful fallbacks

## 🔧 Development Scripts

### Available Commands
```bash
# Root level
npm run dev          # Start both backend and frontend
npm run build        # Build for production
npm run start        # Start production server
npm run install-all  # Install all dependencies

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

### Docker Commands
```bash
# Start MongoDB
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Stop MongoDB
docker stop mongodb

# Remove MongoDB container
docker rm mongodb

# View MongoDB logs
docker logs mongodb
```

## 🧪 Testing the Application

### API Testing
```bash
# Get all notes
curl http://localhost:5001/api/notes

# Create a note
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Note", "content": "This is a test note"}'

# Get specific note (replace {id} with actual note ID)
curl http://localhost:5001/api/notes/{id}

# Update note
curl -X PUT http://localhost:5001/api/notes/{id} \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "Updated content"}'

# Delete note
curl -X DELETE http://localhost:5001/api/notes/{id}
```

### Frontend Testing
1. Open http://localhost:5173 in your browser
2. Test note creation, editing, and deletion
3. Test responsive design on different screen sizes
4. Test rate limiting by making multiple rapid requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.
