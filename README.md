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

## 👨🏾‍💻 Hi there, I'm Synsmyr! 🙋🏾‍♂️

I'm a Computer Science major with a strong passion for problem-solving and all things STEM. Ever since I stepped into the STEM world, I've never looked back. I'm in love with the process—whether it's writing clean code, analyzing data, or collaborating with a team, I believe that discipline and persistence are the keys to great results.

With a strong foundation in software development, data analysis, and customer support, I'm driven to build impactful, scalable solutions that make a difference. I thrive in fast-paced, team-oriented environments where learning never stops. I'm currently seeking opportunities in Software Engineering, Data Science, or IT Engineering where I can apply my skills, contribute to meaningful projects, and continue growing professionally.

---

## 🚀 About Me  

🎓 **Study:** Computer Science

💡 **Emphasis/Focus Areas:** Software Development, Data Analysis, CyberSecurity, IT, AI/ML

🔭 **Currently learning:** Full-stack web development(React & Node.js), Cloud Infrastructure(OCI/AWS)
- Exploring full-stack development and cloud technologies
- Building projects that bridge community impact with technology

🌱 **Always learning:** Exploring **data structures, algorithms, cloud technologies, and best practices** to refine my skills.  

🔛🔝 **Passionate About:** Building scalable, impactful solutions, and implementing them from concept to deployment with teams.

🏋🏾‍♂️ **Strengths:** Problem-solving, adaptablity, teamwork, customer-first mindset.

🏊🏾‍♂️ **Fun fact:** Outside of coding, I'm a swim coach and the AV/technical director at my local church with a profound grace and love to teach and learn new skills!

---

## 🛠️ Tech Stack 

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white)
![C](https://img.shields.io/badge/-C-00599C?style=flat-square&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/-C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white)
![Swift](https://img.shields.io/badge/-Swift-FA7343?style=flat-square&logo=swift&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![SQL](https://img.shields.io/badge/-SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## 🏆 Featured Projects 

### 🌦️ **Weather App w/ Swift 🦅** | 

#### 🔹 Overview:  

→ This app provides real-time weather updates, offering a clean and simple interface for users to check current weather conditions at their location or any city around the world.

#### 🔹 Why It Matters: 

As my **first ever project in Swift**, the Tether Weather App allowed me to:

✔ Get hands-on experience with **iOS app development**.

✔ Understand how to integrate **third-party APIs** and parse JSON data.

✔ Practice working with **SwiftUI/UIKit**, **network requests**, and **asynchronous operations**.

✔ Learn how to design and structure an app for **scalability and maintainability**.

---

### 🧠 **MERN Thinkboard - Full-Stack Note-Taking App** | [Live Demo](https://mern-stack-thinkboard-57eb.onrender.com/) | [GitHub](https://github.com/SynsmyrF2001/mern-stack-thinkboard)

#### 🔹 Overview:    

→ A modern, responsive note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring real-time rate limiting, beautiful UI, and full CRUD operations.

#### ✨ Features:  

✔ **Full CRUD Operations**: Create, read, update, and delete notes seamlessly
✔ **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS and DaisyUI
✔ **Real-time Rate Limiting**: Built-in protection against API abuse using Upstash Redis
✔ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
✔ **Production Ready**: Optimized for deployment with proper error handling
✔ **Real-time Updates**: Instant UI updates when notes are modified

#### 🔹 Why It Stands Out:  
✔ **Full-Stack Mastery**: Demonstrates proficiency in both frontend (React) and backend (Node.js/Express) development
✔ **Database Integration**: MongoDB with Mongoose for data persistence and management
✔ **API Security**: Implements rate limiting and CORS for production-ready security
✔ **Modern Tech Stack**: Uses cutting-edge technologies like React 19, Vite, and Tailwind CSS
✔ **Deployment Ready**: Successfully deployed and accessible online with proper error handling

---

### 🎉 **Project #3**  

#### 🔹 Overview:

#### ✨ Features:  


#### 🔹 Why It Stands Out:  
✔ 

---

## �� **Let's Connect!** 