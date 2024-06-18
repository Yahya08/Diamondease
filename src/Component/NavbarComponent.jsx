
import '../style/Navbar.css'; // Pastikan Anda membuat file CSS untuk styling
import { FaSearch } from 'react-icons/fa';

// import { FaMicrophone } from 'react-icons/fa';
// import indonesiaFlag from './public/indonesia.png'; // Ganti dengan path yang benar

const NavbarComponent = () => {
    return (
        <div className="navbar">
            {/* <div className="navbar-logo">
                DiamondEase
            </div> */}
            <div className="navbar-center">
                <div className="navbar-search">
                    <input type="text" placeholder="Cari di UniPin..." />
                    <FaSearch className="search-icon" />
                </div>
            </div>
            <div className="navbar-icons">
                <button className="login-button">MASUK</button>
                <img src="indonesia.png" alt="Indonesia Flag" className="flag-icon" />
                <button className="profile-icon">PENGENAL</button>
                <button className="language-button">EN</button>
            </div>
        </div>
    );
};


export default NavbarComponent;