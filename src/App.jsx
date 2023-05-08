import Cart from './pages/Cart';
import CategoryPage from './pages/CategoriesPage';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="*" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
