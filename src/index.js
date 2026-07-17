import './index.css'
import ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext.js';
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from './LandingPage/Home/Hero.js';
import ResetPassword from './LandingPage/ResetPassword/Hero.js';
import VerifyEmail from './LandingPage/VerifyEmail/VerifyEmail.js';
import ForgotPassword from './LandingPage/ForgotPassword/ForgotPassword.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = process.env.REACT_APP_CLIENTID || "848227876820-u696kj85v3v9rcm29ni1328dfhp0a87i.apps.googleusercontent.com";
console.log(clientId);

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <GoogleOAuthProvider clientId={clientId}>
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
        </GoogleOAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

root.render(<App />)