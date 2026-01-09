// frontend/src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { NotesProvider } from './context/NotesContext.jsx'
import { Animation3DProvider } from './context/Animation3DContext.jsx'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <Animation3DProvider>
          <Router>
            <div className="min-h-screen bg-[var(--bg)]">
              <Navbar />
              <main className="container mx-auto px-4 py-8 page-transition">
                <AppRoutes />
              </main>
              <Footer />
              <Toaster position="top-right" />
            </div>
          </Router>
        </Animation3DProvider>
      </NotesProvider>
    </ThemeProvider>
  )
}

export default App