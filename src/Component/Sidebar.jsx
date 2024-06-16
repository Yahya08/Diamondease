import '../style/Sidebar.css';
import { FaHome, FaVideo, FaHistory, FaGift } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState('/');

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                DiamondEase
            </div>
            <div className="sidebar-menu">
                <Link to="/" className={`menu-item ${activePath === '/' ? 'active' : ''}`}>
                    <FaHome className="icon" />
                    <span>Home</span>
                </Link>
                <Link to="/videos" className={`menu-item ${activePath === '/videos' ? 'active' : ''}`}>
                    <FaVideo className="icon" />
                    <span>Videos</span>
                </Link>
                <Link to="/history" className={`menu-item ${activePath === '/history' ? 'active' : ''}`}>
                    <FaHistory className="icon" />
                    <span>History</span>
                </Link>
            </div>
            <div className="sidebar-footer">
                <FaGift className="gift-icon" />
                <span>Voucher Diskon</span>
            </div>
        </div>
    );
};

export default Sidebar;
