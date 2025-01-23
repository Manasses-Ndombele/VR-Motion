import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './routes/Home';
import Gamer from './routes/Gamer';
import News from './routes/News';
import ProductPage from './routes/ProductPage';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/gamer" element={ <Gamer /> } />
      <Route path="/novidades" element={ <News /> } />
      <Route path="/produto/:productId" element={ <ProductPage /> } />
    </Routes>
  </Router>
)
