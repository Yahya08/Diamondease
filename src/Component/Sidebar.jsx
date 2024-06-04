
import '../style/Sidebar.css'; // Pastikan Anda membuat file CSS untuk styling
import { FaHome, FaVideo, FaHistory } from 'react-icons/fa'; // Mengimpor ikon yang dibutuhkan
// import giftIcon from './path-to-your-gift-icon.png'; // Ganti dengan path yang benar
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                DiamondEase
            </div>
            <div className="sidebar-menu">
                <Link to="/" className="menu-item active">
                    <FaHome className="icon" />
                    <span>Home</span>
                </Link>
                <Link to="/videos" className="menu-item">
                    <FaVideo className="icon" />
                    <span>Videos</span>
                </Link>
                <Link to="/history" className="menu-item">
                    <FaHistory className="icon" />
                    <span>History</span>
                </Link>
            </div>
            <div className="sidebar-footer">
                {/* <img src={giftIcon} alt="Gift Icon" className="gift-icon" /> */}
                <span>Voucher Diskon</span>
            </div>
        </div>
    );
};


export default Sidebar;
