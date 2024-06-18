
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import Navbar from '../Component/NavbarComponent';
import '../style/Detailpage.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailPage = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('Semua Produk'); // Initial state for filter
    const [games, setGames] = useState([
        { name: "Arena Keberanian", image: "https://cdn.unipin.com/images/icon_product_pages/1571814166-icon-1562124639-icon-AOV-Logo-300x300.jpg", buttonText: "ISI ULANG" },
        { name: "AU2 Ponsel", image: "https://cdn.unipin.com/images/icon_product_pages/1571814048-icon-1559208720-icon-au2.jpg", buttonText: "ISI ULANG" },
        { name: "Black Clover", image: "https://cdn.unipin.com/images/icon_product_pages/1711525344-icon-icon%E7%9B%B4%E8%A7%921_512x512_%E6%A1%91%20(1).jpg", buttonText: "ISI ULANG" },
        { name: "Atlantika Dalam Talian", image: "https://cdn.unipin.com/images/icon_product_pages/1557991026-icon-1544066062-icon-AT300x300-min.png", buttonText: "ISI ULANG" },
        { name: "Penjaga Astral: Fantasi Cyber", image: "https://cdn.unipin.com/images/icon_product_pages/1603346179-icon-eyougame.jpg", buttonText: "ISI ULANG" },
        { name: "Malaikat Cinta", image: "https://cdn.unipin.com/images/icon_product_pages/1557991082-icon-1544066623-icon-MA-180622-4_Game_Logo_300x300-58-min.png", buttonText: "ISI ULANG" },
        { name: "Pemabalap Ace", image: "https://example.com/image7.jpg", buttonText: "ISI ULANG", isNew: true },
        { name: "Kedatangan Tuhan: Legenda", image: "https://cdn.unipin.com/images/icon_product_pages/1688555536-icon-aog-icon.png", buttonText: "ISI ULANG", isNew: true },
        { name: "Impian Alice: Gabungkan Pulau", image: "https://cdn.unipin.com/images/icon_product_pages/1571813747-icon-1557979831-icon-1553593202-icon-logo-bleach.jpg", buttonText: "ISI ULANG", isNew: true },
        { name: "Amazon (USD)", image: "https://example.com/image10.jpg", buttonText: "ISI ULANG" },
        { name: "Puncak Legenda", image: "https://example.com/image11.jpg", buttonText: "ISI ULANG", isNew: true },
        { name: "Arena Pembobolan", image: "https://example.com/image12.jpg", buttonText: "ISI ULANG", isNew: true },
        { name: "Voucher Game 1", image: "https://cdn.unipin.com/images/icon_product_pages/1656465259-icon-apex%20legends.jpg", buttonText: "Voucher" },
        { name: "Voucher Game 2", image: "https://cdn.unipin.com/images/icon_product_pages/1633599409-icon-Icon_1024.jpg", buttonText: "Voucher" },
        { name: "Permainan Lokal 1", image: "https://example.com/image16.jpg", buttonText: "Permainan Lokal" },
    ]);

    // Function to filter games based on selected filter
    const filteredGames = () => {
        switch (filter) {
            case 'Isi Ulang Flash':
                return games.filter(game => game.buttonText === 'ISI ULANG');
            case 'Voucher':
                return games.filter(game => game.buttonText === 'Voucher');
            case 'Permainan Lokal':
                return games.filter(game => game.buttonText === 'Permainan Lokal');
            default:
                return games;
        }
    };

    return (
        <div className="detail-page">
            <Sidebar className="sidebar" />
            <div className="main-content">
                <Navbar className="navbar" />
                <div className='content-detailpage'>
                    <div className="header">
                        <h1 className="text-2xl font-bold">Permainan</h1>
                        <button onClick={() => navigate('/')} className="btn btn-secondary">Kembali</button>
                    </div>
                    <div className="filters">
                        <button className={`btn ${filter === 'Semua Produk' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('Semua Produk')}>Semua Produk</button>
                        <button className={`btn ${filter === 'Isi Ulang Flash' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('Isi Ulang Flash')}>Isi Ulang Flash</button>
                        <button className={`btn ${filter === 'Voucher' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('Voucher')}>Voucher</button>
                        <button className={`btn ${filter === 'Permainan Lokal' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('Permainan Lokal')}>Permainan Lokal</button>
                    </div>
                    <div className="search-sort-bar">
                        <input type="text" placeholder="Cari di Diamondease..." className="search-bar"  />
                        <FaSearch className="search" />
                        <select className="sort-dropdown">
                            <option value="alphabetical">Urutan Abjad (A sampai Z)</option>
                            <option value="reverse-alphabetical">Urutan Abjad (Z sampai A)</option>
                        </select>
                        <div className="view-options">
                            <i className="fas fa-th-large"></i>
                            <i className="fas fa-list"></i>
                        </div>
                    </div>
                    <div className="games-grid">
                        {filteredGames().map((game, index) => (
                            <div className="game-card" key={index}>
                                <img src={game.image} alt={`${game.name} thumbnail`} className="game-image" />
                                <h3 className="game-title">{game.name}</h3>
                                {game.isNew && <span className="new-badge">Baru</span>}
                                <button className="btn btn-primary">{game.buttonText}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="alphabet-sidebar">
                    {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
                        <a href={`#${letter}`} key={letter} className="alphabet-link">{letter}</a>
                    ))}
                </div>


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
                                <li><a href="#">
                                Promo dan Acara</a></li>
                                <li><a href="#">Karir</a></li>
                                <li><a href="#">Korporasi</a></li>
                                <li><a href="#">Saluran Pembayaran</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Saluran Pembayaran</h3>
                            <Carousel showThumbs={false} autoPlay infiniteLoop showIndicators emulateTouch>
                            
                              <div className="payment-icons">
                                  <img src={'https://cdn.unipin.com/images/payment_channels/indomaret.png'} alt="Payment 1" />
                              </div> 
                              <div className="payment-icons">
                                  <img src={'https://cdn.unipin.com/images/payment_channels/1686891126-xl_axis.png'} alt="Payment 2" />
                              </div> 
                                <div className="payment-icons">
                                    <img src={'https://cdn.unipin.com/images/payment_channels/1689845634-218043ea-642c-4230-9e93-34eae4eb014d.jpeg'} alt="Payment 3" />
                                </div>
                              <div className="payment-icons">
                                  <img src={'https://cdn.unipin.com/images/payment_channels/1686821644-ovo.png'} alt="Payment 4" />
                              </div>
                              <div className="payment-icons">
                                   <img src={'https://cdn.unipin.com/images/payment_channels/1686820486-dana.png'} alt="Payment 5" />
                              </div>
                                <div className="payment-icons">
                                    <img src={'https://cdn.unipin.com/images/payment_channels/1702024410-Tri New Logo_150x56_black.png'} alt="Payment 6" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan Republik Indonesia</p>
                        <p>WhatsApp: <a href="tel:+6285311111010">0853-1111-1010</a></p>
                        <p>© 2024 UniPin. Semua Hak Cipta</p>
                        <p><a href="#">Website Terms and Conditions</a> | <a href="#">User Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default DetailPage;
