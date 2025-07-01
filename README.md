# 🧠 MERN Thinkboard - Full-Stack Note-Taking Application

A modern, responsive note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring real-time rate limiting, beautiful UI, and full CRUD operations.

![MERN Thinkboard](https://img.shields.io/badge/MERN-Stack-00D4AA?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.14.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## 🌐 Live Demo

**🚀 [View Live Application](https://mern-stack-thinkboard-57eb.onrender.com/)**

Experience the full application with all features including note creation, editing, deletion, and rate limiting in action!

## ✨ Features

- **📝 Full CRUD Operations**: Create, read, update, and delete notes seamlessly
- **🎨 Modern UI/UX**: Beautiful, responsive design with Tailwind CSS and DaisyUI
- **⚡ Real-time Rate Limiting**: Built-in protection against API abuse using Upstash Redis
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🚀 Production Ready**: Optimized for deployment with proper error handling
- **🔄 Real-time Updates**: Instant UI updates when notes are modified
- **🎯 User Experience**: Toast notifications, loading states, and error handling
- **🔒 API Security**: CORS configuration and request validation

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
- MongoDB database (local or cloud)
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SynsmyrF2001/mern-stack-thinkboard.git
   cd mern-stack-thinkboard
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   PORT=5001
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Start backend server (from root directory)
   npm run start
   
   # Start frontend development server (in another terminal)
   cd frontend && npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001

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

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection
3. Set up Upstash Redis for rate limiting
4. Deploy to platforms like Heroku, Railway, or Render

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Developer

**Synsmyr Forgue**
- GitHub: [@SynsmyrF2001](https://github.com/SynsmyrF2001)
- Project: [MERN Thinkboard](https://github.com/SynsmyrF2001/mern-stack-thinkboard)

---

⭐ **Star this repository if you found it helpful!** 