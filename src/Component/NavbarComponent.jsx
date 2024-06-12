
import '../style/Navbar.css'; // Pastikan Anda membuat file CSS untuk styling


import { FaMicrophone } from 'react-icons/fa';
// import indonesiaFlag from './public/indonesia.png'; // Ganti dengan path yang benar

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                DiamondEase
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
                <button>
                    <FaMicrophone />
                </button>
            </div>
            <div className="navbar-icons">
                <img src="public/indonesia.png" alt="indonesiaFlag" />
                <div className="profile-icon">A</div>
            </div>
        </div>
    );
};

export default Navbar;
