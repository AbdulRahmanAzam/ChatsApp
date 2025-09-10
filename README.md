# 💬 ChatsApp

<div align="center">
  <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin: 20px 0;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 24px;">💬</span>
    </div>
    <h1 style="font-size: 2.5rem; margin: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">ChatsApp</h1>
  </div>
  
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--time-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.IO" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<div align="center">
  
  **A modern, feature-rich real-time chat application with stunning UI and seamless user experience**
  
  [🚀 Live Demo](https://0xchats.vercel.app) • [📖 Documentation](#installation) • [🐛 Report Bug](https://github.com/AbdulRahmanAzam/ChatsApp/issues)
  
</div>

---

## ✨ Features

🔐 **Secure Authentication** - JWT-based login/signup with bcrypt password hashing  
💬 **Real-time Messaging** - Instant messaging powered by Socket.IO  
🎨 **Multiple Themes** - 33+ beautiful themes including dark mode, cyberpunk, retro, and more  
📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices  
🖼️ **Image Sharing** - Upload and share images seamlessly with Cloudinary integration  
👤 **Profile Management** - Update profile pictures and personal information  
👥 **Online Status** - See who's online in real-time with live user presence  
⚡ **Fast & Modern** - Built with React 19, Vite, and TailwindCSS for optimal performance  
🔒 **Privacy First** - Secure HTTP-only cookies and protected API routes  
🎯 **Message History** - Persistent chat history with MongoDB storage  
🔄 **Auto-scroll** - Smart message scrolling for better user experience  
📬 **Toast Notifications** - Beautiful notifications for all user actions  

## 🛠️ Tech Stack

<table>
<tr>
<td width="50%">

### 🎨 Frontend
- **⚛️ React 19** - Latest React with modern features
- **⚡ Vite** - Lightning-fast build tool & dev server
- **🎯 TailwindCSS** - Utility-first CSS framework
- **🌈 DaisyUI** - Beautiful component library
- **🔄 Zustand** - Lightweight state management
- **🔌 Socket.IO Client** - Real-time communication
- **🛣️ React Router** - Client-side routing
- **🎨 Lucide React** - Beautiful, customizable icons
- **🔥 React Hot Toast** - Elegant notifications

</td>
<td width="50%">

### 🚀 Backend
- **🟢 Node.js** - JavaScript runtime environment
- **🚂 Express.js** - Fast, minimal web framework
- **🍃 MongoDB** - NoSQL document database
- **📊 Mongoose** - MongoDB object modeling
- **🔌 Socket.IO** - Real-time bidirectional communication
- **🔐 JWT** - JSON Web Tokens for authentication
- **🔒 bcryptjs** - Password hashing & security
- **☁️ Cloudinary** - Image upload & management
- **🌐 CORS** - Cross-origin resource sharing

</td>
</tr>
</table>

### 📈 Performance Features
- **Code Splitting** - Optimized bundle sizes with Vite
- **Lazy Loading** - Dynamic imports for better performance
- **Image Optimization** - Cloudinary automatic optimization
- **Caching** - Efficient API response caching
- **Compression** - Gzip compression for faster loading

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdulRahmanAzam/ChatsApp.git
   cd ChatsApp
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start the application**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📸 Screenshots

### 🏠 Home Chat Interface
Modern chat interface with real-time messaging, user sidebar, and instant message delivery.

### 🎨 Theme Customization
Choose from 33+ stunning themes including:
- 🌙 Dark mode variations
- 🌈 Colorful themes (cyberpunk, synthwave, valentine)
- 🎯 Professional themes (corporate, business)
- 🌿 Nature themes (forest, garden, autumn)

### 📱 Mobile Responsive
Seamless experience across all devices with adaptive layout and touch-friendly interface.

### 👤 Profile Management
Easy profile picture updates and user information management.

## 🏗️ Project Structure

```
ChatsApp/
├── 📁 frontend/                    # React frontend application
│   ├── 📁 src/
│   │   ├── 📁 components/         # Reusable UI components
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── Sidebar.jsx        # User list sidebar
│   │   │   ├── ChatContainer.jsx  # Main chat interface
│   │   │   ├── MessageInput.jsx   # Message composition
│   │   │   └── ChatHeader.jsx     # Chat header with user info
│   │   ├── 📁 pages/             # Application pages
│   │   │   ├── HomePage.jsx       # Main chat page
│   │   │   ├── LoginPage.jsx      # User authentication
│   │   │   ├── SignUpPage.jsx     # User registration
│   │   │   ├── ProfilePage.jsx    # Profile management
│   │   │   └── SettingsPage.jsx   # Theme & settings
│   │   ├── 📁 store/             # Zustand state management
│   │   │   ├── useAuthStore.js    # Authentication state
│   │   │   ├── useChatStore.js    # Chat & messaging state
│   │   │   └── useThemeStore.js   # Theme management
│   │   ├── 📁 lib/               # Utility functions
│   │   └── 📁 constants/         # App constants (themes, etc.)
│   └── 📁 public/                # Static assets
└── 📁 backend/                    # Node.js backend application
    └── 📁 src/
        ├── 📁 controllers/       # Request handlers
        │   ├── authController.js  # Authentication logic
        │   └── messageController.js # Message handling
        ├── 📁 models/           # Database models
        │   ├── userModel.js      # User schema
        │   └── messageModel.js   # Message schema
        ├── 📁 routes/           # API routes
        │   ├── authRoute.js      # Auth endpoints
        │   └── messageRoute.js   # Message endpoints
        ├── 📁 middlewares/      # Custom middleware
        │   └── authMiddleware.js # JWT verification
        └── 📁 lib/              # Utility functions
            ├── db.js            # Database connection
            ├── socket.js        # Socket.IO setup
            └── cloudinary.js    # Image upload config
```

## 🌟 Key Components

- **🔄 Real-time Chat** - Powered by Socket.IO for instant messaging and live updates
- **🔐 User Authentication** - Secure JWT-based auth with HTTP-only cookies
- **🎨 Dynamic Theme System** - 33+ themes with persistent storage and live preview
- **📤 File Upload** - Cloudinary integration for seamless image sharing
- **📱 Responsive UI** - TailwindCSS + DaisyUI for beautiful, mobile-first design
- **👥 User Presence** - Real-time online/offline status tracking
- **💾 Message Persistence** - MongoDB storage for chat history
- **🛡️ Route Protection** - Secure API endpoints and client-side route guards

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check auth status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to specific user

## 🚀 Deployment

### Frontend (Vercel)
- Deployed at: [https://0xchats.vercel.app](https://0xchats.vercel.app)
- Automatic deployments from main branch
- Optimized build with Vite

### Backend (Vercel)
- Serverless functions for API endpoints
- MongoDB Atlas for database
- Cloudinary for image storage

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 🔧 Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The library for web and native user interfaces
- [Socket.IO](https://socket.io/) - Real-time bidirectional event-based communication
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Cloudinary](https://cloudinary.com/) - Programmable media management

## 📊 Project Stats

- **Total Lines of Code:** 5000+
- **Components:** 15+ React components
- **API Endpoints:** 8 RESTful endpoints
- **Themes:** 33 unique themes
- **Dependencies:** 25+ carefully selected packages
- **Build Time:** < 30 seconds
- **Bundle Size:** Optimized for performance

## 👤 Author

**Abdul Rahman Azam**
- 🌐 GitHub: [@AbdulRahmanAzam](https://github.com/AbdulRahmanAzam)
- 📧 Email: [Your Email]
- 💼 LinkedIn: [Your LinkedIn]
- 🐦 Twitter: [Your Twitter]

---

<div align="center">
  
  **⭐ Star this repo if you found it helpful!**
  
  **🔔 Watch this repo to get notified of new releases**
  
  Made with ❤️ and lots of ☕ by Abdul Rahman Azam
  
  <img src="https://img.shields.io/github/stars/AbdulRahmanAzam/ChatsApp?style=social" alt="GitHub stars" />
  <img src="https://img.shields.io/github/forks/AbdulRahmanAzam/ChatsApp?style=social" alt="GitHub forks" />
  <img src="https://img.shields.io/github/watchers/AbdulRahmanAzam/ChatsApp?style=social" alt="GitHub watchers" />
  
</div>