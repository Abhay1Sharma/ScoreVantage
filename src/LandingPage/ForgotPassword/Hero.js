import React, { useState } from "react";
import axios from 'axios';

function Hero() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // Starting at idle for normal form visibility
    
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const handleRequest = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await axios.post(`${backendUrl}/api/forgot-password`, { email });
            if (res.status === 200) setStatus('success');
        } catch (err) {
            setStatus('error');
        }
    };

    // --- Premium Light Minimalist Styles ---
    const containerStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        borderRadius: '24px',
        alignItems: 'center',
        height: '60vh', 
        fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
        backgroundColor: '#f6f3f8' // Soft purple-tinted white canvas
    };
    
    const cardStyle = {
        width: '85vh', 
        height: '60vh',
        display: 'grid',
        maxWidth: '400px', 
        padding: '50px 40px 40px 40px', 
        boxSizing: 'border-box',
        borderRadius: '24px', 
        backgroundColor: '#ffffff', // Crisp front card layer
        boxShadow: '0 20px 50px rgba(45, 27, 54, 0.06)',
        border: '1px solid rgba(224, 176, 255, 0.35)', 
        textAlign: 'center'
    };

    const inputWrapperStyle = {
        position: 'relative',
        margin: '24px 0 16px 0',
    };

    const inputStyle = {
        width: '100%', 
        padding: '15px 16px 15px 44px', // Room for font-awesome icon padding
        borderRadius: '12px', 
        border: '2px solid rgba(45, 27, 54, 0.15)', // Light muted deep color boundary
        fontSize: '15px', 
        boxSizing: 'border-box', 
        outline: 'none',
        color: 'rgb(45, 27, 54)', 
        backgroundColor: '#fdfbfe',
        transition: 'all 0.25s ease'
    };

    const iconStyle = {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#7c6a8c', 
        fontSize: '16px',
        transition: 'color 0.25s ease'
    };

    const btnStyle = {
        width: '100%', 
        padding: '15px', 
        borderRadius: '12px',
        border: 'none', 
        backgroundColor: 'rgb(45, 27, 54)', // Solid deep dark tone selection
        color: '#ffffff', 
        fontWeight: '600', 
        fontSize: '16px', 
        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        boxShadow: '0 8px 24px rgba(45, 27, 54, 0.2)',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        opacity: status === 'loading' ? 0.7 : 1
    };

    const secondaryBtnStyle = {
        ...btnStyle,
        backgroundColor: 'rgb(167, 94, 203)',
        border: '2px solid rgb(45, 27, 54)',
        color: 'rgb(45, 27, 54)',
        boxShadow: 'none',
        marginTop: '20px',
        textDecoration: 'none',
        display: 'block',
    };

    // --- Success State UI ---
    if (status === 'success') {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        backgroundColor: 'rgba(224, 176, 255, 0.25)', // Smooth light accent pop
                        borderRadius: '16px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 24px auto',
                        fontSize: '28px',
                    }}>
                        ✅
                    </div>
                    <h2 style={{ marginBottom: '12px', color: 'rgb(45, 27, 54)', fontWeight: '700', letterSpacing: '-0.5px' }}>
                        Check your email
                    </h2>
                    <p style={{ color: '#7c6a8c', fontSize: '14px', marginBottom: '32px', lineHeight: '1.6' }}>
                        We've sent a password reset link to <br />
                        <strong style={{ color: 'rgb(45, 27, 54)', fontWeight: '600', wordBreak: 'break-all' }}>{email}</strong>
                    </p>
                    <a href="/" style={secondaryBtnStyle}>
                        Back to Login
                    </a>
                </div>
            </div>
        );
    }

    // --- Main Entry Form State UI ---
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h3 style={{ marginBottom: '10px', color: 'rgb(45, 27, 54)', fontWeight: '700', letterSpacing: '-0.5px', fontSize: '24px' }}>
                    Reset Password
                </h3>
                <p style={{ color: '#7c6a8c', fontSize: '14px', lineHeight: '1.5', padding: '0 10px' }}>
                    Enter your email address below to receive your account recovery link.
                </p>

                <form onSubmit={handleRequest}>
                    <div style={inputWrapperStyle}>
                        {/* Font Awesome icon support remains perfectly centered */}
                        <i className="fas fa-envelope" style={iconStyle}></i>
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            style={inputStyle}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgb(45, 27, 54)';
                                e.target.style.boxShadow = '0 0 0 4px rgba(45, 27, 54, 0.08)';
                                if (e.target.previousSibling) e.target.previousSibling.style.color = 'rgb(45, 27, 54)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(45, 27, 54, 0.15)';
                                e.target.style.boxShadow = 'none';
                                if (e.target.previousSibling) e.target.previousSibling.style.color = '#7c6a8c';
                            }}
                        />
                    </div>

                    <button type="submit" disabled={status === 'loading'} style={btnStyle}>
                        {status === 'loading' ? 'Sending...' : 'Send Reset Link'} 
                        <i className="fas fa-arrow-right" style={{ fontSize: "0.85rem" }} ></i>
                    </button>

                    {status === 'error' && (
                        <p style={{ color: '#dc3545', fontSize: '13px', marginTop: '16px', fontWeight: '500' }}>
                            ⚠️ Unable to locate that email. Please check and try again.
                        </p>
                    )}

                    <div style={{ marginTop: '28px', fontSize: '14px' }}>
                        <a 
                            href="/" 
                            style={{ 
                                color: '#e0b0ff', // Vivid light brand accent color
                                fontWeight: '600', 
                                textDecoration: 'none',
                                transition: 'color 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'rgb(45, 27, 54)'}
                            onMouseLeave={(e) => e.target.style.color = '#e0b0ff'}
                        >
                            ← Back to Log in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;