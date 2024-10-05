import React from 'react'
// import './App.css';
import Header from './components/Layout/Header/Header'
import './style/styles.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact/Contact';
import Login from './pages/LogIn/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from './pages/Account/Account';
import Footer from './components/Layout/Footer/Footer';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CategoryProducts from './pages/CategoryProducts/CategoryProducts';
import Wishlist from './pages/Wishlist/Wishlist';
import AllProducts from './pages/Products/Products';
import ErrorPage from './pages/Error/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path={"/product/:id"} element={<ProductDetails />} />
          <Route path={"/category/:title"} element={<CategoryProducts />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <ToastContainer position='top-right' autoClose={2000} />

    </>
  )
}

export default App
