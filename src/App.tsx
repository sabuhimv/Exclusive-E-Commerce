import React from 'react'
// import './App.css';
import Header from './components/Layout/Header/Header'
import './style/styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact/Contact';
import Login from './pages/LogIn/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from './pages/Account/Account';
import Footer from './components/Layout/Footer/Footer';

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
        </Routes>
        <Footer/>
      </BrowserRouter>

      <ToastContainer position='top-right' autoClose={2000} />

    </>
  )
}

export default App
