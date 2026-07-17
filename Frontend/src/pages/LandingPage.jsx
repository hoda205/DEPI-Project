import './LandingPage.css';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="landing-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>

            {/* 1. NAVBAR */}
            <header style={{ borderBottom: '1px solid #EDF2F7', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', fontSize: '20px', color: '#0052CC' }}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="#2563EB" />
                            <rect x="7" y="7" width="18" height="18" rx="4" fill="white" />
                            <path d="M16 11V21M11 16H21" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <span>MediVault</span>
                    </div>

                    {/* Nav Links */}
                    <nav style={{ display: 'flex', gap: '32px' }}>
                        <a href="#features" style={{ textDecoration: 'none', color: '#4A5568', fontSize: '15px', fontWeight: '500' }}>Features</a>
                        <a href="#security" style={{ textDecoration: 'none', color: '#4A5568', fontSize: '15px', fontWeight: '500' }}>Security</a>
                        <a href="#support" style={{ textDecoration: 'none', color: '#4A5568', fontSize: '15px', fontWeight: '500' }}>Support</a>
                    </nav>
                </div>
            </header>

            {/* 2. HERO SECTION */}
            <main className="container" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '56px', alignItems: 'center', padding: '60px 24px' }}>

                {/* Left Side: Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '460px' }}>

                    {/* Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', padding: '6px 14px', borderRadius: '100px', alignSelf: 'flex-start' }}>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99992 1.33334L1.66659 3.66668V8.33334C1.66659 11.62 3.94659 14.6867 6.99992 15.3333C10.0533 14.6867 12.3333 11.62 12.3333 8.33334V3.66668L6.99992 1.33334Z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: '#1E40AF', fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em' }}>HIPAA COMPLIANT SECURITY</span>
                    </div>

                    {/* Heading */}
                    <h1 style={{ fontSize: '46px', fontWeight: '700', lineHeight: '1.2', color: '#1A202C', letterSpacing: '-0.02em' }}>
                        Your health, <br />
                        <span style={{ color: '#0052CC' }}>organized.</span>
                    </h1>

                    {/* Description */}
                    <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: '1.6', fontWeight: '400' }}>
                        Manage your medical life securely. One vault for your records, prescriptions, and appointments. Designed for clarity, built for trust.
                    </p>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                        <Link
                            to="/signup"
                            style={{
                                display: "inline-block",
                                backgroundColor: "#0052CC",
                                color: "white",
                                textDecoration: "none",
                                padding: "14px",
                                borderRadius: "8px",
                                fontSize: "15px",
                                fontWeight: "600",
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(0, 82, 204, 0.2)",
                                transition: "all 0.2s",
                                textAlign: 'center',
                            }}
                        >
                            Create Account
                        </Link>

                        <button style={{ backgroundColor: 'white', color: '#1A202C', border: '1px solid #E2E8F0', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all 0.2s' }}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
                            Continue with Google
                        </button>
                    </div>

                    {/* Divider */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '4px 0' }}>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
                        <span style={{ color: '#A0AEC0', fontSize: '12px', fontWeight: '600' }}>OR</span>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
                    </div>

                    {/* Sign In Link */}
                    <Link to="/signin" style={{ textDecoration: 'none', color: '#0052CC', fontSize: '15px', fontWeight: '600', textAlign: 'center' }}>Sign In</Link>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: '48px', marginTop: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                        <div>
                            <div style={{ fontSize: '26px', fontWeight: '700', color: '#1A202C' }}>500k+</div>
                            <div style={{ fontSize: '13px', color: '#718096', marginTop: '4px' }}>Active Patients</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '26px', fontWeight: '700', color: '#1A202C' }}>4.9/5</div>
                            <div style={{ fontSize: '13px', color: '#718096', marginTop: '4px' }}>App Store Rating</div>
                        </div>
                    </div>

                </div>

                {/* Right Side: Image with High-End Adjusted Floating Cards */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingRight: '20px' }}>

                    {/* Main Hero Image Wrapper */}
                    <div style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.04)', zIndex: 1 }}>
                        <img src={heroImg} alt="MediVault Tablet" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Floating Card 1: AES-256 Encryption */}
                    <div className="floating-card" style={{ top: '-30px', left: '5%', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="14" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 7.25V5C12.5 2.51472 10.4853 0.5 8 0.5C5.51472 0.5 3.5 2.51472 3.5 5V7.25M2 7.25H14C14.8284 7.25 15.5 7.92157 15.5 8.75V15.5C15.5 16.3284 14.8284 17 14 17H2C1.17157 17 0.5 16.3284 0.5 15.5V8.75C0.5 7.92157 1.17157 7.25 2 7.25Z" stroke="#2563EB" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: '700', color: '#1A202C' }}>AES-256</div>
                            <div style={{ fontSize: '10px', color: '#718096' }}>Encryption</div>
                        </div>
                    </div>

                    {/* Floating Card 2: Heart Rate */}
                    <div className="floating-card" style={{ top: '-15px', right: '-10px', padding: '12px 18px', flexDirection: 'column', alignItems: 'center', gap: '4px', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.145 1.85501C10.74 0.450013 8.465 0.450013 7.06 1.85501L7 1.91501L6.94 1.85501C5.535 0.450013 3.26 0.450013 1.855 1.85501C0.450003 3.26001 0.450003 5.53501 1.855 6.94001L7 12.085L12.145 6.94001C13.55 5.53501 13.55 3.26001 12.145 1.85501Z" fill="#10B981" stroke="#10B981" />
                            </svg>
                            <span style={{ fontSize: '11px', color: '#718096', fontWeight: '500' }}>Heart Rate</span>
                        </div>
                        <div style={{ fontSize: '17px', fontWeight: '700', color: '#1A202C' }}>72 BPM</div>
                    </div>

                    {/* Floating Card 3: Upcoming Exam */}
                    <div className="floating-card" style={{ bottom: '100px', right: '-35px', width: '230px', display: 'block', padding: '14px 16px', zIndex: 10, boxShadow: '0 25px 50px rgba(0,0,0,0.08)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '8px' }}>
                            <span style={{ fontSize: '10px', fontWeight: '700', color: '#0052CC', letterSpacing: '0.05em' }}>UPCOMING</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0052CC" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#1A202C', marginBottom: '2px' }}>General Wellness Exam</div>
                        <div style={{ fontSize: '11px', color: '#718096' }}>Dr. Sarah Mitchell • 10:00 AM</div>
                    </div>

                </div>
            </main>

            {/* 3. FOOTER */}
            <footer style={{ backgroundColor: '#F1F5F9', borderTop: '1px solid #E2E8F0', padding: '20px 0', marginTop: 'auto' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#718096' }}>
                        © 2026 MediVault Inc. All rights reserved.
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <a href="#privacy" style={{ textDecoration: 'none', color: '#718096', fontSize: '13px' }}>Privacy Policy</a>
                        <a href="#terms" style={{ textDecoration: 'none', color: '#718096', fontSize: '13px' }}>Terms of Service</a>
                        <button style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: '#4A5568' }}>
                            <span>TT</span> High Contrast
                        </button>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default LandingPage;