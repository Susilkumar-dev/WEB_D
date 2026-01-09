// frontend/src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Explore from '../pages/Explore.jsx'
import HtmlNotes from '../pages/HtmlNotes.jsx'
import CssNotes from '../pages/CssNotes.jsx'
import JsNotes from '../pages/JsNotes.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/html-notes" element={<HtmlNotes />} />
      <Route path="/css-notes" element={<CssNotes />} />
      <Route path="/js-notes" element={<JsNotes />} />
    </Routes>
  )
}

export default AppRoutes






