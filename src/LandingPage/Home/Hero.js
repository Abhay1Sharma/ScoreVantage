// import axios from "axios";
// import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../AuthContext.js";
// import { GoogleLogin } from "@react-oauth/google";
// import { useGoogleLogin } from "@react-oauth/google";

// function Hero() {
//     const slides = ['slide1', 'slide2', 'slide3', 'slide4'];
//     const [currentAuth, setCurrentAuth] = useState("login");
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [username, setUsername] = useState(null);
//     const [password, setPassword] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [sumbit, setSumbit] = useState(false);
//     const [email, setEmail] = useState(null);
//     const [name, setName] = useState(null);
//     const autoIntervalRef = useRef(null);
//     const navigate = useNavigate();
//     const fetchUser = useAuth();

//     const backendUrl = process.env.REACT_APP_BACKEND_URL;
//     const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;

//     // 2. Encapsulate automatic sliding logic
//     const startAutoSlide = () => {
//         stopAutoSlide();
//         autoIntervalRef.current = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//         }, 4000);
//     };

//     const stopAutoSlide = () => {
//         if (autoIntervalRef.current) {
//             clearInterval(autoIntervalRef.current);
//         }
//     };

//     // Handle timer reset on manual interaction
//     const handleManualInteraction = (action) => {
//         action();
//         startAutoSlide();
//     };

//     // 3. Start auto-slide on mount and clean up on unmount
//     useEffect(() => {
//         startAutoSlide();
//         return () => stopAutoSlide(); // Prevents memory leaks
//     }, []);

//     // 1. Add flow: 'auth-code' here
//     const handleGoogleSuccess = async (tokenResponse) => {
//         try {
//             // If using useGoogleLogin standard implicit flow, the JWT is at credentialResponse.access_token
//             // If using standard GoogleLogin component, it's at credentialResponse.credential
//             const res = await axios.post(`${backendUrl}/api/google-login`, {
//                 token: tokenResponse.access_token || tokenResponse.credential,
//             });

//             localStorage.setItem("token", res.data.token);
//             toast.success("Welcome " + res.data.user.username);
//             window.location.href = "http://localhost:3002";
//         } catch (err) {
//             toast.error("Google Authentication Failed");
//         }
//     };

//     // Form handlers
//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             setLoading(true);
//             const formData = {
//                 email: email,
//                 password: password
//             }

//             console.log(formData);

//             const res = await axios.post(`${backendUrl}/login`, formData, { withCredentials: true });
//             console.log(res.data);
//             localStorage.setItem('token', res.data.token);
//             toast.success(`Welcome Back, ${name}`);
//             // await fetchUser();
//             window.location.href = `${dashboardUrl}?token=${res.data.token}`;

//         } catch (err) {
//             const message = err.response?.data?.message || "Invalid Username or Password";
//             toast.error(message);
//             console.error("Login Error:", err.response?.data);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSignupSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             const data = {
//                 username: username,
//                 email: email,
//                 password: password
//             }

//             console.log(data);
//             setSumbit(true);
//             const res = await axios.post(`${backendUrl}/signup`, data);
//             console.log(res);
//             toast.success(`Hello ${username}, we send you mail for verification`);

//         } catch (error) {
//             if (error.status === 421) {
//                 toast.error("Username already exist!!");
//             } else if (error.status === 422) {
//                 toast.error("Email already taken!!");
//             } else {
//                 toast.error("Internal Server error");
//             }
//         } finally {
//             setSumbit(false);
//         }
//     };

//     // console.log(username, email, password, loginname, loginPassword);

//     const handleChange = async (e) => {
//         const { name, value } = e.target;
//         if (name === "username") {
//             setUsername(value);
//         } else if (name === "email") {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         } else if (name === "name") {
//             setName(value);
//         }
//     }

//     return (
//         <div className="hero-container">
//             <div className="split-layout" style={{ width: "165vh" }}>
//                 {/* SLIDER SECTION */}
//                 <div className="slider-section">
//                     <div className="css-slider-container">
//                         {/* Radio buttons controlled purely by React state */}
//                         {slides.map((slide, index) => (
//                             <input
//                                 key={slide}
//                                 type="radio"
//                                 name="slider"
//                                 id={slide}
//                                 checked={currentIndex === index}
//                                 onChange={() => handleManualInteraction(() => setCurrentIndex(index))}
//                             />
//                         ))}

//                         <div className="slides-wrapper">
//                             <div className="slide slide-1">
//                                 <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805710/AI-Resume-Pro_smr0a2.png" alt="AI Resume Pro Overview" />
//                                 <div className="slide-caption">
//                                     <h2 className="slide-title">AI Resume Pro</h2>
//                                     <p className="slide-desc">Craft professional, standout resumes tailored to your career goals using next-generation intelligent generation.</p>
//                                     <span className="slide-tag">✨ smart builder</span>
//                                 </div>
//                             </div>
//                             <div className="slide slide-2">
//                                 <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805853/Why-AI-Resume-Pro-Exists_zveyfa.png" alt="Why AI Resume Pro Exists" />
//                                 <div className="slide-caption">
//                                     <h2 className="slide-title">Why It Exists</h2>
//                                     <p className="slide-desc">Bridging the gap between talented developers and modern technical hiring standards with optimized visual layouts.</p>
//                                     <span className="slide-tag">🌸 career focus</span>
//                                 </div>
//                             </div>
//                             <div className="slide slide-3">
//                                 <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805961/Project-Mission-and-Vision_afzkxc.png" alt="Project Mission and Vision" />
//                                 <div className="slide-caption">
//                                     <h2 className="slide-title">Mission & Vision</h2>
//                                     <p className="slide-desc">Empowering engineers to design pristine, minimalist portfolios that instantly stand out to top-tier recruiters.</p>
//                                     <span className="slide-tag">🌙 clarity first</span>
//                                 </div>
//                             </div>
//                             <div className="slide slide-4">
//                                 <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805966/ATS-Score-Engine-How-It-Works_bcnfk5.png" alt="ATS Score Engine" />
//                                 <div className="slide-caption">
//                                     <h2 className="slide-title">ATS Score Engine</h2>
//                                     <p className="slide-desc">Analyze and optimize your resume instantly against target descriptions to pass recruitment screeners effortlessly.</p>
//                                     <span className="slide-tag">🎨 technical precision</span>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="slider-navigation">
//                             <div
//                                 className="nav-arrow"
//                                 id="prevBtn"
//                                 onClick={() => handleManualInteraction(() =>
//                                     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
//                                 )}
//                             >
//                                 <i className="fas fa-chevron-left"></i>
//                             </div>

//                             <div className="nav-dots">
//                                 {slides.map((slide, index) => (
//                                     <label
//                                         key={`dot-${slide}`}
//                                         htmlFor={slide}
//                                         onClick={() => handleManualInteraction(() => setCurrentIndex(index))}
//                                     ></label>
//                                 ))}
//                             </div>

//                             <div
//                                 className="nav-arrow"
//                                 id="nextBtn"
//                                 onClick={() => handleManualInteraction(() =>
//                                     setCurrentIndex((prev) => (prev + 1) % slides.length)
//                                 )}
//                             >
//                                 <i className="fas fa-chevron-right"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* AUTH SECTION */}
//                 <div className="auth-section">
//                     <input
//                         type="radio"
//                         name="authToggle"
//                         id="loginToggle"
//                         className="auth-radio"
//                         checked={currentAuth === "login"}
//                         onChange={() => setCurrentAuth("login")}
//                     />
//                     <input
//                         type="radio"
//                         name="authToggle"
//                         id="signupToggle"
//                         className="auth-radio"
//                         checked={currentAuth === "signup"}
//                         onChange={() => setCurrentAuth("signup")}
//                     />

//                     <div className="auth-card">
//                         <div className="toggle-switch">
//                             <label htmlFor="loginToggle" className="toggle-label">Log in</label>
//                             <label htmlFor="signupToggle" className="toggle-label">Sign up</label>
//                         </div>

//                         <div className="auth-panel login-panel">
//                             <div className="auth-form">
//                                 <h3>Welcome back</h3>
//                                 <p className="auth-sub">Login to access your creative space</p>
//                                 <form id="loginForm" onSubmit={(e) => { handleLoginSubmit(e) }} >
//                                     <div className="input-group">
//                                         <i className="fas fa-user"></i>
//                                         <input type="text" placeholder="Enter your email address" name="email" style={{ borderRadius: "1rem" }} onChange={(e) => { handleChange(e) }} required />
//                                     </div>
//                                     <div className="input-group">
//                                         <i className="fas fa-lock"></i>
//                                         <input type="password" placeholder="Password" name="password" style={{ borderRadius: "1rem" }} onChange={(e) => { handleChange(e) }} required />
//                                     </div>
//                                     <div className="checkbox-group">
//                                         <input type="checkbox" id="rememberMe" style={{ borderRadius: "1rem" }} required />
//                                         <label htmlFor="rememberMe">Keep me signed in</label>
//                                     </div>
//                                     {!sumbit ? <button type="submit" className="auth-btn">Sign in →</button>
//                                         :
//                                         <button style={{ cursor: "none" }} class="auth-btn" type="button" disabled>
//                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                                             Sign in...
//                                         </button>
//                                     }
//                                     <div className="social-login">

//                                         <div className="social-icon" style={{ position: 'relative' }}>
//                                             {/* 1. Your custom icon stays visible */}
//                                             <i className="fab fa-google"></i>

//                                             {/* 2. The official button renders completely invisible but clickable on top */}
//                                             <div className="hidden-google-wrapper">
//                                                 <GoogleLogin
//                                                     onSuccess={handleGoogleSuccess}
//                                                     onError={() => toast.error("Login Failed")}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="social-icon" onClick={() => alert('🔮 Social login demo')}><i className="fab fa-github"></i></div>
//                                     </div>
//                                     <div className="forgot-link">
//                                         <a href="/forgot-password">Forgot password?</a>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="auth-panel signup-panel">
//                             <div className="auth-form">
//                                 <h3>Join the circle</h3>
//                                 <p className="auth-sub">Create an account and explore</p>
//                                 <form id="signupForm" onSubmit={(e) => { handleSignupSubmit(e) }} >
//                                     <div className="input-group">
//                                         <i className="fas fa-user"></i>
//                                         <input type="text" placeholder="Full name" name="username" style={{ borderRadius: "1rem" }} onChange={(e) => { handleChange(e) }} required />
//                                     </div>
//                                     <div className="input-group">
//                                         <i className="fas fa-envelope"></i>
//                                         <input type="email" placeholder="Email address" name="email" style={{ borderRadius: "1rem" }} onChange={(e) => { handleChange(e) }} required />
//                                     </div>
//                                     <div className="input-group">
//                                         <i className="fas fa-lock"></i>
//                                         <input type="password" placeholder="Create password" name="password" style={{ borderRadius: "1rem" }} onChange={(e) => { handleChange(e) }} required />
//                                     </div>
//                                     <div className="checkbox-group">
//                                         <input type="checkbox" id="termsAgree" required />
//                                         <label htmlFor="termsAgree">I agree to the Terms & Privacy</label>
//                                     </div>
//                                     {!loading ? <button type="submit" className="auth-btn" >Get started ✨</button>
//                                         :
//                                         <button class="auth-btn" type="button" disabled>
//                                             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                                             Get started... ✨
//                                         </button>
//                                     }
//                                     <div className="social-login">
//                                         <div className="social-icon" onClick={() => alert('🔮 Social login demo')}><i className="fab fa-google"></i></div>
//                                         <div className="social-icon" onClick={() => alert('🔮 Social login demo')}><i className="fab fa-github"></i></div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;

import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext.js";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect, useRef } from "react";

function Hero() {
    const slides = ['slide1', 'slide2', 'slide3', 'slide4'];
    const [currentAuth, setCurrentAuth] = useState("login");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState(""); // Used if you have a separate profile/name field
    const [loading, setLoading] = useState(false);        // For Login
    const [submitting, setSubmitting] = useState(false);  // For Signup (Fixed typo from sumbit)

    const autoIntervalRef = useRef(null);
    const navigate = useNavigate();
    const fetchUser = useAuth();

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;

    const startAutoSlide = () => {
        stopAutoSlide();
        autoIntervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (autoIntervalRef.current) {
            clearInterval(autoIntervalRef.current);
        }
    };

    const handleManualInteraction = (action) => {
        action();
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    const handleGoogleSuccess = async (tokenResponse) => {
        try {
            console.log("handleGoogleSuccess function called ....", tokenResponse);
            const res = await axios.post(`${backendUrl}/api/google-login`, {
                token: tokenResponse.access_token || tokenResponse.credential,
            });


            localStorage.setItem("token", res.data.token);
            console.log(res.data.token);
            setTimeout(() => { console.log("Wait...."), 40000 });

            // toast.success("Welcome " + (res.data.user?.username || ""));
            window.location.href = `${dashboardUrl}?token=${res.data.token}`;
        } catch (err) {
            toast.error("Google Authentication Failed");
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formData = { email, password };

            const res = await axios.post(`${backendUrl}/login`, formData, { withCredentials: true });
            localStorage.setItem('token', res.data.token);

            toast.success(`Welcome Back!`);

            window.location.href = `${dashboardUrl}?token=${res.data.token}`;
        } catch (err) {
            const message = err.response?.data?.message || "Invalid Email or Password";
            toast.error(message);
            console.error("Login Error:", err.response?.data);
        } finally {
            setLoading(false);
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            setSubmitting(true);
            const data = { username, email, password };

            const res = await axios.post(`${backendUrl}/signup`, data);
            toast.success(`Hello ${username}, we sent you an email for verification`);
        } catch (error) {
            if (error.response?.status === 421) {
                toast.error("Username already exists!!");
            } else if (error.response?.status === 422) {
                toast.error("Email already taken!!");
            } else {
                toast.error("Internal Server error");
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "email") setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === "name") setName(value);
    };

    return (
        <div className="hero-container">
            <div className="split-layout" style={{ width: "165vh" }}>
                {/* SLIDER SECTION */}
                <div className="slider-section">
                    <div className="css-slider-container">
                        {slides.map((slide, index) => (
                            <input
                                key={slide}
                                type="radio"
                                name="slider"
                                id={slide}
                                checked={currentIndex === index}
                                onChange={() => handleManualInteraction(() => setCurrentIndex(index))}
                            />
                        ))}

                        <div className="slides-wrapper">
                            <div className="slide slide-1">
                                <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805710/AI-Resume-Pro_smr0a2.png" alt="AI Resume Pro Overview" />
                                <div className="slide-caption">
                                    <h2 className="slide-title">AI Resume Pro</h2>
                                    <p className="slide-desc">Craft professional, standout resumes tailored to your career goals using next-generation intelligent generation.</p>
                                    <span className="slide-tag">✨ smart builder</span>
                                </div>
                            </div>
                            <div className="slide slide-2">
                                <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805853/Why-AI-Resume-Pro-Exists_zveyfa.png" alt="Why AI Resume Pro Exists" />
                                <div className="slide-caption">
                                    <h2 className="slide-title">Why It Exists</h2>
                                    <p className="slide-desc">Bridging the gap between talented developers and modern technical hiring standards with optimized visual layouts.</p>
                                    <span className="slide-tag">🌸 career focus</span>
                                </div>
                            </div>
                            <div className="slide slide-3">
                                <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805961/Project-Mission-and-Vision_afzkxc.png" alt="Project Mission and Vision" />
                                <div className="slide-caption">
                                    <h2 className="slide-title">Mission & Vision</h2>
                                    <p className="slide-desc">Empowering engineers to design pristine, minimalist portfolios that instantly stand out to top-tier recruiters.</p>
                                    <span className="slide-tag">🌙 clarity first</span>
                                </div>
                            </div>
                            <div className="slide slide-4">
                                <img className="slide-img" src="https://res.cloudinary.com/duogcdkyj/image/upload/v1779805966/ATS-Score-Engine-How-It-Works_bcnfk5.png" alt="ATS Score Engine" />
                                <div className="slide-caption">
                                    <h2 className="slide-title">ATS Score Engine</h2>
                                    <p className="slide-desc">Analyze and optimize your resume instantly against target descriptions to pass recruitment screeners effortlessly.</p>
                                    <span className="slide-tag">🎨 technical precision</span>
                                </div>
                            </div>
                        </div>

                        <div className="slider-navigation">
                            <div
                                className="nav-arrow"
                                id="prevBtn"
                                onClick={() => handleManualInteraction(() =>
                                    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
                                )}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </div>

                            <div className="nav-dots">
                                {slides.map((slide, index) => (
                                    <label
                                        key={`dot-${slide}`}
                                        htmlFor={slide}
                                        onClick={() => handleManualInteraction(() => setCurrentIndex(index))}
                                    ></label>
                                ))}
                            </div>

                            <div
                                className="nav-arrow"
                                id="nextBtn"
                                onClick={() => handleManualInteraction(() =>
                                    setCurrentIndex((prev) => (prev + 1) % slides.length)
                                )}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AUTH SECTION */}
                <div className="auth-section">
                    <input
                        type="radio"
                        name="authToggle"
                        id="loginToggle"
                        className="auth-radio"
                        checked={currentAuth === "login"}
                        onChange={() => setCurrentAuth("login")}
                    />
                    <input
                        type="radio"
                        name="authToggle"
                        id="signupToggle"
                        className="auth-radio"
                        checked={currentAuth === "signup"}
                        onChange={() => setCurrentAuth("signup")}
                    />

                    <div className="auth-card">
                        <div className="toggle-switch">
                            <label htmlFor="loginToggle" className="toggle-label">Log in</label>
                            <label htmlFor="signupToggle" className="toggle-label">Sign up</label>
                        </div>

                        {/* LOGIN PANEL */}
                        <div className="auth-panel login-panel">
                            <div className="auth-form">
                                <h3>Welcome back</h3>
                                <p className="auth-sub">Login to access your creative space</p>
                                <form id="loginForm" onSubmit={handleLoginSubmit}>
                                    <div className="input-group">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email address" name="email" style={{ borderRadius: "1rem" }} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Password" name="password" style={{ borderRadius: "1rem" }} onChange={handleChange} required />
                                    </div>
                                    <div className="checkbox-group">
                                        <input type="checkbox" id="rememberMe" style={{ borderRadius: "1rem" }} />
                                        <label htmlFor="rememberMe">Keep me signed in</label>
                                    </div>

                                    {/* Fixed template loading state */}
                                    {!loading ? (
                                        <button type="submit" className="auth-btn">Sign in →</button>
                                    ) : (
                                        <button style={{ cursor: "none" }} className="auth-btn" type="button" style={{ cursor: "no-drop" }}>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Sign in...
                                        </button>
                                    )}

                                    <div className="social-login">
                                        <div className="social-icon" style={{ position: 'relative' }}>
                                            <i className="fab fa-google"></i>
                                            <div className="hidden-google-wrapper">
                                                <GoogleLogin
                                                    onSuccess={handleGoogleSuccess}
                                                    onError={() => toast.error("Login Failed")}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="social-icon" onClick={() => alert('🔮 Social login demo')}><i className="fab fa-github"></i></div> */}
                                    </div>
                                    <div className="forgot-link">
                                        <a href="/forgot-password">Forgot password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* SIGNUP PANEL */}
                        <div className="auth-panel signup-panel">
                            <div className="auth-form">
                                <h3>Join the circle</h3>
                                <p className="auth-sub">Create an account and explore</p>
                                <form id="signupForm" onSubmit={handleSignupSubmit}>
                                    <div className="input-group">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Full name" name="username" style={{ borderRadius: "1rem" }} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <i className="fas fa-envelope"></i>
                                        <input type="email" placeholder="Email address" name="email" style={{ borderRadius: "1rem" }} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Create password" name="password" style={{ borderRadius: "1rem" }} onChange={handleChange} required />
                                    </div>
                                    <div className="checkbox-group">
                                        <input type="checkbox" id="termsAgree" required />
                                        <label htmlFor="termsAgree">I agree to the Terms & Privacy</label>
                                    </div>

                                    {/* Fixed template loading state */}
                                    {!submitting ? (
                                        <button type="submit" className="auth-btn">Get started ✨</button>
                                    ) : (
                                        <button className="auth-btn" type="button" style={{ cursor: "no-drop" }}>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Get started... ✨
                                        </button>
                                    )}

                                    <div className="social-login">
                                        <div className="social-icon" style={{ position: 'relative' }}>
                                            <i className="fab fa-google"></i>
                                            <div className="hidden-google-wrapper">
                                                <GoogleLogin
                                                    onSuccess={handleGoogleSuccess}
                                                    onError={() => toast.error("Login Failed")}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="social-icon" onClick={() => alert('🔮 Social login demo')}><i className="fab fa-github"></i></div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;