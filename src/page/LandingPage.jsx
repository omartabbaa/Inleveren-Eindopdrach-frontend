import React, { useState } from 'react';
import './LandingPage.css';
import image from '../Components/assets/Landingpage/12.png';
import Discord from '../Components/assets/socialmedia/Discord.png';
import Youtube from '../Components/assets/socialmedia/Youtube.png';
import Email from '../Components/assets/socialmedia/Email.png';
import Admin from '../Components/assets/Landingpage/Admin.png';

const LandingPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="landing-page">
            <header className="landing-page-header">
                <h1 className="landing-page-title">Landing Page</h1>
                <div className="hero-text-container">
                    <h1 className="hero-title">Welcome to Support Hub</h1>
                    <p className="hero-description">We are here to help you with your questions and issues.</p>
                </div>

            </header>
            <section className="hero">
             
                <button className="cta-button">Get Started</button>
                <div className="hero-image-container">
                <img src={image} alt="Support Hub Hero" className="hero-image" />
                </div>
            </section>
            <main className="main-content">
                <div className="main-container">
                    <div className="accordion-container">
                        <h2 className="accordion-title">Everything in One Hub</h2>
                        {[
                            {
                                title: "Real-Time Question Management",
                                content: "SupportHub provides a platform for real-time question management, allowing you to efficiently handle and respond to inquiries as they come in."
                            },
                            {
                                title: "Permissions & Control",
                                content: "Manage access and control with our robust permissions system, ensuring the right people have the right level of access to your support hub."
                            },
                            {
                                title: "Analytics and Insights",
                                content: "Gain valuable insights into your support operations with our comprehensive analytics tools, helping you make data-driven decisions."
                            },
                            {
                                title: "Centralized Management",
                                content: "Manage all your departments, projects, and team members through a single, easy-to-use interface. SupportHub brings your team together in one platform."
                            }
                        ].map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h3 className="accordion-item-title" onClick={() => toggleAccordion(index)}>{item.title}</h3>
                                {activeIndex === index && <p className="accordion-item-content">{item.content}</p>}
                            </div>
                        ))}
                    </div>
                    <img src={Admin} alt="Support Hub Features" className="main-image" />
                </div>
            </main>
            <footer className="landing-page-footer">
                <h2 className="footer-title">Social Media Links</h2>
                <div className="social-media-links">
                    <a href="" target="_blank" rel="noopener noreferrer" className="social-media-link">
                        <img className='social-media-link' src={Discord} alt="Discord" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="social-media-link">
                        <img className='social-media-link' src={Youtube} alt="Youtube" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="social-media-link">
                        <img className='social-media-link' src={Email} alt="Email" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
