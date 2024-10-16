import './navbar.css';
import logo from '../../assets/Logo/navbarLogo.png';
import { Link } from 'react-router-dom';
import BusinessIcon from '../../assets/Button/navbar/BusinessIcon.png';
import AdminIcon from '../../assets/Button/navbar/AdminIcon.png';
import NotificationIcon from '../../assets/Button/navbar/NotificationIcon.png';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const notificationRef = useRef(null);
    const profileRef = useRef(null);

    const toggleNotification = () => {
        setIsNotificationOpen(prev => !prev);
    };

    const toggleProfile = () => {
        setIsProfileOpen(prev => !prev);
    }

    const closeDropdowns = (event) => {
        if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            setIsNotificationOpen(false);
        }
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setIsProfileOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdowns);
        return () => {
            document.removeEventListener('mousedown', closeDropdowns);
        };
    }, []);

    
    return (
        <div className='navbar'>
           
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <Link to="/">
                        <img className='logo-img' src={logo} alt="logo" />
                    </Link>
                    <Link className='navbar-link' to="/business-overview">
                        Business
                        <img className='business-icon' src={BusinessIcon} alt="BusinessIcon" />
                    </Link>
                    <Link className='navbar-link' to="/department-project-management">Mij Business</Link>
                </div>
                <div className='navbar-right'>
                    <Link className='navbar-link' to="/admin-dashboard">
                        Dashboard 
                        <img className='admin-icon' src={AdminIcon} alt="AdminIcon" />
                    </Link>

                    {/* Notification Dropdown */}
                    <div 
                        className='dropdown-container' 
                        ref={notificationRef}
                    >
                        <img 
                            onClick={toggleNotification} 
                            className='notification-icon' 
                            src={NotificationIcon} 
                            alt="NotificationIcon" 
                        />
                        {isNotificationOpen && (
                            <div className='notification-dropdown'>
                                <h3>Notifications</h3>
                                <ul>
                                    <li>Notification 1</li>
                                    <li>Notification 2</li>
                                    <li>Notification 3</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Profile Dropdown */}
                    <div 
                        className='dropdown-container' 
                        ref={profileRef}
                    >
                        <div 
                            onClick={toggleProfile} 
                            className='profile'
                        ></div>
                        {isProfileOpen && (
                            <div className='profile-dropdown'>
                                <h3>Profile</h3>
                                <ul>
                                    <li>Profile 1</li>
                                    <li>Profile 2</li>
                                    <li>Profile 3</li>
                                </ul>
                            </div>  
                        )}
                    </div>
                 
                </div>

            </div>
        </div>
    )
}

export default Navbar;
