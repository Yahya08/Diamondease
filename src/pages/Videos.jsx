// Videos.jsx

import '../style/Videos.css';


import  { useRef, useState } from 'react';
import Navbar from '../Component/NavbarComponent';
import Sidebar from '../Component/Sidebar';
import '../style/Videos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Videos = () => {
    const scrollContainerRef = useRef(null);

    // State untuk mengontrol pergerakan scroll
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseOut = () => {
        setIsDragging(false);
    };

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        } else {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="videos-page min-h-screen bg-[#2A2D43] text-white flex">
            <Sidebar className="sidebar" />
            <div className="content flex-grow flex flex-col">
                <Navbar />
                <div className="p-4 flex-grow">
                    {/* Banner Section */}
                    <div className="banner">
                        <img
                            src="https://i.ytimg.com/vi/1VVTVoLb_3w/hqdefault.jpg"
                            alt="Gran Turismo Sport"
                            className="banner-image"
                        />
                        <div className="banner-content">
                            <h2 className="banner-title">6 Game Simulasi Balapan Terbaik Paling Realistis!</h2>
                            <p className="banner-views">62 ribu penayangan</p>
                        </div>
                    </div>

                    {/* Playlist Section */}
                    <h2 className="text-2xl font-bold my-4">Berdasarkan Daftar Putar</h2>
                    <div className="playlists relative">
                        <button
                            className="scroll-button left-0"
                            onClick={() => scroll('left')}
                        >&#9664;</button>
                        <div
                            className="playlists-container flex no-scrollbar"
                            ref={scrollContainerRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseOut={handleMouseOut}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        >
                            {/* Example Playlists */}
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?game" alt="Tembakan meriam" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">Tembakan meriam</p>
                                    <p className="playlist-count">1 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?gadget" alt="Gawai" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">Gawai</p>
                                    <p className="playlist-count">3 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?activity" alt="Permainan Aktif" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">Permainan Aktif</p>
                                    <p className="playlist-count">5 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://duniagames.co.id/discover/video/onic-versi-kumar-menggila-alter-ego-panas-di-atas-pmsl-dg-viral" alt="Dirjen Ome TV" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">Dirjen Ome TV</p>
                                    <p className="playlist-count">2 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?studio" alt="Siniar" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">Siniar</p>
                                    <p className="playlist-count">3 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?music" alt="DJ WIB" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">DJ WIB</p>
                                    <p className="playlist-count">1 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?concert" alt="DJP" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">DJP</p>
                                    <p className="playlist-count">4 video</p>
                                </div>
                            </div>
                            <div className="playlist-card">
                                <img src="https://source.unsplash.com/400x300/?game" alt="Rekomendasi Game" className="playlist-image" />
                                <div className="playlist-info">
                                    <p className="playlist-title">Rekomendasi Game</p>
                                    <p className="playlist-count">6 video</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="scroll-button right-0"
                            onClick={() => scroll('right')}
                        >&#9654;</button>
                    </div>

                    {/* Latest Videos Section */}
                    <h2 className="text-2xl font-bold my-4">Video Terbaru</h2>
                    <div className="latest-videos">
                        {/* Add latest videos content here */}
                    </div>
                </div>

                {/* Footer */}
                <footer className="footer bg-[#2A2D43] text-white">
                    <div className="footer-top">
                        <h2>BERLANGGANAN</h2>
                        <p>Dapatkan Penawaran Terbaik Sekarang!</p>
                        <div className="social-icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                    <div className="footer-main">
                        <div className="footer-section">
                            <h3>UniPin</h3>
                            <p>Universal Pin merupakan penyedia layanan pembayaran (PSP) terkemuka yang memfokuskan layanannya untuk game online dan produk digital lainnya yang tersebar di seluruh dunia.</p>
                        </div>
                        <div className="footer-section">
                            <h3>Peta Situs</h3>
                            <ul>
                                <li><a href="#">Flash Top-Up</a></li>
                                <li><a href="#">Voucher</a></li>
                                <li><a href="#">Game Lainnya</a></li>
                                <li><a href="#">UniPin Affiliates Program</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Dukungan Pelanggan</a></li>
                                <li><a href="#">Penukaran Poin</a></li>
                                <li><a href="#">Berita</a></li>
                                <li><a href="#">Promo dan Acara</a></li>
                                <li><a href="#">Karir</a></li>
                                <li><a href="#">Korporasi</a></li>
                                <li><a href="#">Saluran Pembayaran</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Saluran Pembayaran</h3>
                            <div className="payment-icons">
                                <img src={'https://cdn.unipin.com/images/payment_channels/indomaret.png'} alt="Payment 1" />
                                <img src={'https://cdn.unipin.com/images/payment_channels/1686891126-xl_axis.png'} alt="Payment 2" />
                                <img src={'https://cdn.unipin.com/images/payment_channels/1686891126-telkomsel.png'} alt="Payment 3" />
                                <img src={'https://cdn.unipin.com/images/payment_channels/1686891126-dana.png'} alt="Payment 4" />
                                <img src={'https://cdn.unipin.com/images/payment_channels/1686891126-gopay.png'} alt="Payment 5" />
                                <img src={'https://cdn.unipin.com/images/payment_channels/1686891126-ovo.png'} alt="Payment 6" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Hubungi Kami</h3>
                        <p>Email: support@unipin.com</p>
                        <p>Telepon: 123-456-789</p>
                        <p>Alamat: Jl. Contoh No. 123, Jakarta, Indonesia</p>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 UniPin. All Rights Reserved.</p>
                    </div>
                </footer>
             </div>
        </div>
     );
};
                 
export default Videos;
