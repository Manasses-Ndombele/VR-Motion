import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './routes/Home';
import Gamer from './routes/Gamer';
import News from './routes/News'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/gamer" element={ <Gamer /> } />
      <Route path="/novidades" element={ <News /> } />
    </Routes>
  </Router>
)
