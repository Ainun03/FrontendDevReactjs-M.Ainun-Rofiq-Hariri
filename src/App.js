import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePages';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
