import './index.css'
import ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './LandingPage/Home/Hero.js';
import ResetPassword from './LandingPage/ResetPassword/Hero.js';
import VerifyEmail from './LandingPage/VerifyEmail/VerifyEmail.js';
import ForgotPassword from './LandingPage/ForgotPassword/ForgotPassword.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <div className="content">
          <Toaster toastOptions={{
            // Define default options
            duration: 5000,
            removeDelay: 1000,
            // Default options for specific types
            success: {
              duration: 4000,
            },
          }}
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/reset-password" element={< ResetPassword />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

root.render(<App />)