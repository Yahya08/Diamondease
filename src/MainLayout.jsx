
import Navbar from './NavbarComponent';
import Sidebar from './Sidebar';

import './style/MainLayout.css'; // Buat file CSS untuk mengatur layout

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="content">
                <Navbar />
                {/* Konten halaman Anda */}
            </div>
        </div>
    );
};

export default MainLayout;
