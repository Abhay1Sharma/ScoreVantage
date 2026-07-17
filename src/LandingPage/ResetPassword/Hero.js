import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-hot-toast";

function ResetPassword() {
    const [searchParams] = useSearchParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const backendUrl = "http://localhost:3001";
    const token = searchParams.get('token');

    const handleUpdate = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            return toast.error("Passwords do not match!");
        }

        setIsSubmitting(true);

        const sendResetRequest = async () => {
            try {
                const response = await axios.post(`${backendUrl}/api/reset-password`, {
                    token,
                    newPassword
                });
                console.log(response);
                navigate("/");
            } catch (err) {
                toast.error("Link expired or invalid. Please try again");
                // console.log(serverMessage);
            } finally {
                setIsSubmitting(false);
            }
        };

        toast.promise(
            sendResetRequest(),
            {
                pending: 'Securing your new credentials...',
                success: 'Password updated successfully! 🔐',
                error: 'Something went wrong!!',
            }
        );
    };

    // --- Premium Light Minimalist Styles ---
    const containerStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        borderRadius: '24rem',
        alignItems: 'center',
        // height: '100vh', 
        fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
        backgroundColor: '#f6f3f8', // Soft light canvas with a faint lavender drop
    };

    const cardStyle = {
        width: '100%', 
        maxWidth: '400px', 
        padding: '45px 40px',
        borderRadius: '24px', 
        backgroundColor: '#ffffff', // Crisp white foreground card
        boxShadow: '0 20px 50px rgba(45, 27, 54, 0.06)', // Very soft shadow using your deep color
        border: '1px solid rgba(224, 176, 255, 0.35)', // Translucent light lavender framing
        textAlign: 'center',
    };

    const inputWrapperStyle = {
        position: 'relative',
        margin: '16px 0',
    };

    const inputStyle = {
        width: '100%', 
        padding: '15px 16px 15px 44px', 
        borderRadius: '12px', 
        // Baseline input uses a clean, lighter variation of your palette
        border: '2px solid rgba(45, 27, 54, 0.15)', 
        fontSize: '15px', 
        boxSizing: 'border-box', 
        outline: 'none',
        color: 'rgb(45, 27, 54)', // High contrast text inside input
        backgroundColor: '#fdfbfe',
        transition: 'all 0.25s ease'
    };

    const iconStyle = {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#7c6a8c', // Soft secondary text color
        fontSize: '16px',
        transition: 'color 0.25s ease'
    };

    const btnStyle = {
        width: '100%', 
        padding: '15px', 
        borderRadius: '12px',
        border: 'none', 
        backgroundColor: 'rgb(45, 27, 54)', // Solid primary branding color
        color: '#ffffff', // Pure white text for ultimate accessibility contrast
        fontWeight: '600', 
        fontSize: '16px', 
        cursor: isSubmitting ? 'not-allowed' : 'pointer',
        marginTop: '24px', 
        boxShadow: '0 8px 24px rgba(45, 27, 54, 0.2)',
        transition: 'all 0.2s ease',
        opacity: isSubmitting ? 0.7 : 1
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                
                {/* Clean Geometric Icon Badge */}
                <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: 'rgba(224, 176, 255, 0.25)', // Elegant light accent background
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    fontSize: '28px',
                }}>
                    🔐
                </div>

                <h2 style={{ marginBottom: '10px', color: 'rgb(45, 27, 54)', fontWeight: '700', letterSpacing: '-0.5px' }}>
                    New Password
                </h2>
                <p style={{ color: '#7c6a8c', fontSize: '14px', marginBottom: '32px', lineHeight: '1.5' }}>
                    Enter a strong new password below to update your FindBuddy account security.
                </p>

                <form onSubmit={handleUpdate}>
                    <div style={inputWrapperStyle}>
                        <span style={iconStyle}>🔑</span>
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            style={inputStyle}
                            onFocus={(e) => {
                                // Crisp focus using your exact deep color parameter
                                e.target.style.borderColor = 'rgb(45, 27, 54)';
                                e.target.style.boxShadow = '0 0 0 4px rgba(45, 27, 54, 0.08)';
                                e.target.previousSibling.style.color = 'rgb(45, 27, 54)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(45, 27, 54, 0.15)';
                                e.target.style.boxShadow = 'none';
                                e.target.previousSibling.style.color = '#7c6a8c';
                            }}
                        />
                    </div>

                    <div style={inputWrapperStyle}>
                        <span style={iconStyle}>🔒</span>
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={inputStyle}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgb(45, 27, 54)';
                                e.target.style.boxShadow = '0 0 0 4px rgba(45, 27, 54, 0.08)';
                                e.target.previousSibling.style.color = 'rgb(45, 27, 54)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(45, 27, 54, 0.15)';
                                e.target.style.boxShadow = 'none';
                                e.target.previousSibling.style.color = '#7c6a8c';
                            }}
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        style={btnStyle}
                        onMouseEnter={(e) => { 
                            if(!isSubmitting) {
                                e.target.style.backgroundColor = '#3c2447'; // Slight warm hover variant
                                e.target.style.transform = 'translateY(-1px)';
                            }
                        }}
                        onMouseLeave={(e) => { 
                            if(!isSubmitting) {
                                e.target.style.backgroundColor = 'rgb(45, 27, 54)';
                                e.target.style.transform = 'translateY(0)';
                            }
                        }}
                    >
                        {isSubmitting ? 'Updating...' : 'Update Password'}
                    </button>
                </form>

                <div style={{ marginTop: '28px', fontSize: '14px' }}>
                    <p style={{ color: '#7c6a8c' }}>
                        Remembered your password?{' '}
                        <a 
                            href="/login" 
                            style={{ 
                                color: '#e0b0ff', // Vivid lavender used cleanly as the highlight link anchor
                                fontWeight: '600', 
                                textDecoration: 'none',
                                transition: 'color 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'rgb(45, 27, 54)'}
                            onMouseLeave={(e) => e.target.style.color = '#e0b0ff'}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;