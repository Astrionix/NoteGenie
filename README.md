# NoteGenie - AI-Powered Markdown Notes App

A futuristic, glassmorphism-styled notes app with AI summarization and rewriting features, built with React, Next.js, and Node.js.

## Features

- **Glassmorphism UI**: Semi-transparent panels with blur effects and 3D animations
- **Markdown Editor**: Real-time editing with live preview
- **AI Integration**: Summarize and rewrite notes using OpenAI GPT
- **Responsive Design**: Works on desktop and mobile
- **Dark/Light Theme**: Smooth theme transitions
- **Authentication**: JWT-based user authentication
- **CRUD Operations**: Create, read, update, delete notes

## Tech Stack

### Frontend
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- @uiw/react-md-editor

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- OpenRouter API (with DeepSeek model)

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- OpenRouter API Key (from https://openrouter.ai/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/notegenie.git
cd notegenie
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

3. Install backend dependencies:
```bash
cd ../server
npm install
```

4. Set up environment variables:

Create `.env` in the server directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notegenie
JWT_SECRET=your_jwt_secret_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

5. Start MongoDB locally or use MongoDB Atlas.

6. Start the backend:
```bash
cd server
npm run dev
```

7. Start the frontend:
```bash
cd ../client
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Deploy

### Backend (Railway/Render)
1. Push backend to separate repo or use monorepo
2. Connect to Railway/Render
3. Set environment variables
4. Deploy

## Usage

1. Register/Login
2. Create new notes with the + button
3. Use the AI assistant (🤖) to summarize or rewrite content
4. Toggle themes with the moon/sun button
5. Notes are saved automatically

## Contributing

Contributions welcome! Please open issues or PRs.

## License

MIT License
