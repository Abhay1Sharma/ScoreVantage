import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const backendUrl = "http://localhost:3001";

function Hero() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('verifying'); // 'verifying', 'success', or 'error'
    const [message, setMessage] = useState('Please wait while we verify your email...');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            const token = searchParams.get('token');

            if (!token) {
                setStatus('error');
                setMessage('No token found in the link.');
                console.log("No token Found");
                return;
            }

            try {
                const response = await fetch(`${backendUrl}/api/verify-email?token=${token}`);
                const data = await response.json();

                if (response.ok) {
                    setStatus('success');
                    setMessage(data.message);
                    setTimeout(() => navigate('/'), 3000);
                } else {
                    setStatus('error');
                    setMessage(data.message || 'Verification failed.');
                }
            } catch (err) {
                setStatus('error');
                setMessage('Server error. Please try again later.');
            }
        };

        verifyToken();
    }, [searchParams, navigate]);

    // Enhanced Aesthetic Styling
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            // Soft gradient transition using the light lavender hue
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif'
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '50px 40px',
            borderRadius: '24px', // Softer corners for modern look
            boxShadow: '0 20px 40px rgba(91, 75, 110, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
            textAlign: 'center',
            maxWidth: '420px',
            width: '55vh',
            border: '1px solid rgba(178, 125, 224, 0.15)', // Subtly tying card into the theme
        },
        iconContainer: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginBottom: '24px',
        },
        title: {
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#5b4b6e' // Using deep plum for typography
        },
        text: {
            color: '#6e5d80', // Slightly muted plum for text body
            lineHeight: '1.6',
            fontSize: '15px',
            margin: '0 0 16px 0'
        },
        button: {
            backgroundColor: '#b27de0', // Accent purple
            color: '#ffffff',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '12px',
            width: '100%', // Full width looks cleaner on modern cards
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 12px rgba(178, 125, 224, 0.3)'
        },
        redirectText: {
            marginTop: '24px',
            fontSize: '13px',
            color: '#b27de0',
            fontWeight: '500',
            letterSpacing: '0.5px'
        }
    };

    // Dynamic background colors for icons based on your theme
    const getIconStyle = (currentStatus) => {
        let bg = 'rgba(178, 125, 224, 0.1)'; // default light purple
        if (currentStatus === 'success') bg = 'rgba(40, 167, 69, 0.1)';
        if (currentStatus === 'error') bg = 'rgba(220, 53, 117, 0.1)';
        
        return { ...styles.iconContainer, backgroundColor: bg };
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                
                {/* Visual Feedback Containers */}
                <div style={getIconStyle(status)}>
                    {status === 'verifying' && <span style={{ fontSize: '32px' }}>⏳</span>}
                    {status === 'success' && <span style={{ fontSize: '32px' }}>✅</span>}
                    {status === 'error' && <span style={{ fontSize: '32px' }}>❌</span>}
                </div>

                <h2 style={styles.title}>
                    {status === 'verifying' ? 'Verifying Link' : status === 'success' ? 'All Caught Up!' : 'Verification Failed'}
                </h2>

                <p style={styles.text}>{message}</p>

                {status === 'success' && (
                    <div style={styles.redirectText}>
                        Redirecting to login pages...
                    </div>
                )}

                {status === 'error' && (
                    <button
                        style={styles.button}
                        onClick={() => navigate('/')}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#5b4b6e';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(91, 75, 110, 0.3)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#b27de0';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(178, 125, 224, 0.3)';
                        }}
                    >
                        Return to Signup
                    </button>
                )}
            </div>
        </div>
    );
};

export default Hero;