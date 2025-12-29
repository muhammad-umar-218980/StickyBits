# StickyBits

A modern, responsive sticky notes application built with the MERN stack (MongoDB, Express.js, React, Node.js). Create, view, edit, and delete colorful notes with a clean and intuitive interface.

## 🚀 Features

- **Create Notes**: Add new sticky notes with custom titles, content, and colors
- **View Notes**: Browse all your notes in a responsive grid layout
- **Edit Notes**: Update existing notes with real-time editing
- **Delete Notes**: Remove notes with confirmation modal
- **Color Coding**: Choose from multiple color themes for your notes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant feedback with toast notifications
- **Smooth Animations**: Enhanced user experience with GSAP animations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **GSAP** - Animation library
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammad-umar-218980/stickybits.git
   cd stickybits
   ```

2. **Install dependencies**
   ```bash
   npm run build
   ```
   This command will install dependencies for both backend and frontend, and build the frontend.

3. **Environment Setup**
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   npm start
   ```
   This will start the backend server on port 5001.

5. **For development**
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev`

## 🚀 Usage

1. Open your browser and navigate to `http://localhost:5001`
2. Click "Create Note" to add a new sticky note
3. Choose a color from the color palette
4. Fill in the title and content
5. Click "Create Note" to save
6. View all notes on the home page
7. Click on any note to view and edit it
8. Use the delete button to remove notes

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🏗️ Project Structure

```
stickybits/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controller/
│   │   │   └── notesController.js
│   │   ├── models/
│   │   │   └── Note.js
│   │   ├── routes/
│   │   │   └── noteRoutes.js
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ColorPalette.jsx
│   │   │   ├── DeleteModal.jsx
│   │   │   ├── LoadingNotes.jsx
│   │   │   ├── Navbar/
│   │   │   ├── NoteCard/
│   │   │   └── ...
│   │   ├── lib/
│   │   │   └── axios.js
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── ViewNote.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI Components by [DaisyUI](https://daisyui.com/)
- Animations by [GSAP](https://greensock.com/gsap/)
