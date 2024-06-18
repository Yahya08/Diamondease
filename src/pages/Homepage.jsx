import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/NavbarComponent';
import Sidebar from '../Component/Sidebar';

import '../style/Homepage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Homepage = () => {
    const navigate = useNavigate();

    // Data untuk kategori games
    const games = [
        { name: "UniPin Voucher (ID)", image: "https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg", buttonText: "TOP UP" },
        { name: "Honkai: Star Rail", image: "https://cdn.unipin.com/images/icon_product_pages/1710829444-icon-Oversea Icon-1024_11zon.png", buttonText: "TOP UP" },
        { name: "Immortal Kingdoms M", image: "https://cdn.unipin.com/images/icon_product_pages/1711952993-icon-icon_11zon.jpg", buttonText: "TOP UP" },
        { name: "Undawn", image: "https://cdn.unipin.com/images/icon_product_pages/1689159121-icon-garena-undawn.jpg", buttonText: "TOP UP" },
        { name: "Mobile Legends: Bang Bang", image: "https://cdn.unipin.com/images/icon_product_pages/1714098015-icon-mlbb icon 200x200_11zon.png", buttonText: "TOP UP" },
        { name: "Astra: Knights of Veda", image: "https://cdn.unipin.com/images/icon_product_pages/1712121161-icon-icon%202024-04-03_11zon.jpg", buttonText: "TOP UP" },
        { name: "Mobile Legends: Bang Bang (MobaPay)", image: "https://cdn.unipin.com/images/icon_product_pages/1578906433-icon-Game-icon-4.jpg", buttonText: "TOP UP" },
        { name: "Genshin Impact", image: "https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg", buttonText: "TOP UP" },
        { name: "White Out Survival", image: "https://cdn.unipin.com/images/icon_product_pages/1698647484-icon-White%20Out%20Survival_11zon.jpg", buttonText: "TOP UP" },
    ];

    // Data untuk kategori game seluler
    const seluler = [
        { name: "call of dutty", image: "https://cdn.unipin.com/images/icon_product_pages/1633599388-icon-Icon_1024.jpg", buttonText: "TOP UP" },
        { name: "Mobile Legends: Bang Bang", image: "https://cdn.unipin.com/images/icon_product_pages/1714098015-icon-mlbb icon 200x200_11zon.png", buttonText: "TOP UP" },
        { name: "Genshin Impact", image: "https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg", buttonText: "TOP UP" },
        { name: "Immortal Kingdoms M", image: "https://cdn.unipin.com/images/icon_product_pages/1711952993-icon-icon_11zon.jpg", buttonText: "TOP UP" },
        { name: "Undawn", image: "https://cdn.unipin.com/images/icon_product_pages/1689159121-icon-garena-undawn.jpg", buttonText: "TOP UP" },
        { name: "Revelation", image: "https://cdn.unipin.com/images/icon_product_pages/1677555384-icon-revelation.png", buttonText: "TOP UP" },
        { name: "Icon game", image: "https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg", buttonText: "TOP UP" },
    ];

    // Data untuk kategori game PC
    const pc = [
        { name: "Hello Cafe", image: "https://cdn.unipin.com/images/icon_product_pages/1710303200-icon-Hello%20Cafe_11zon.png", buttonText: "TOP UP" },
        { name: "Clash Royal", image: "https://cdn.unipin.com/images/icon_product_pages/1696470388-icon-Clash%20Royale%20Icon%20200x200.jpg", buttonText: "TOP UP" },
        { name: "Astral Guardians : Cyber Fantasy", image: "https://cdn.unipin.com/images/icon_product_pages/1603346179-icon-eyougame.jpg", buttonText: "TOP UP" },
        { name: "Clans of clans", image: "https://cdn.unipin.com/images/icon_product_pages/1571814027-icon-1559011491-icon-1557743544-icon-point_blank.jpg", buttonText: "TOP UP" },
        { name: "Hello Cafe", image: "https://cdn.unipin.com/images/icon_product_pages/1648179143-icon-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220325112829.jpg", buttonText: "TOP UP" },
        { name: "Hello Cafe", image: "https://cdn.unipin.com/images/icon_product_pages/1708673517-icon-65b2e451095de_com.levelinfinite.supernba2021%20(1).png", buttonText: "TOP UP" },
        { name: "Hello Cafe", image: "https://cdn.unipin.com/images/icon_product_pages/1710303200-icon-Hello%20Cafe_11zon.png", buttonText: "TOP UP" },
    ];

    // Data untuk kategori voucher game
    const voucher = [
        { name: "Voucher 1", image: "https://cdn.unipin.com/images/icon_product_pages/1711952993-icon-icon_11zon.jpg", buttonText: "TOP UP" },
        { name: "Voucher 2", image: "https://cdn.unipin.com/images/icon_product_pages/1714098015-icon-mlbb icon 200x200_11zon.png", buttonText: "TOP UP" },
        { name: "Voucher 3", image: "https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg", buttonText: "TOP UP" },
    ];

    // Refs untuk mengontrol pergerakan scroll
    const scrollContainerRef1 = useRef(null);
    const scrollContainerRef2 = useRef(null);
    const scrollContainerRef3 = useRef(null);
    const scrollContainerRef4 = useRef(null);

    // State untuk mengontrol pergerakan scroll
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Fungsi untuk memulai pergerakan scroll
    const handleMouseDown = (e, containerRef) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    // Fungsi untuk menggerakkan scroll
    const handleMouseMove = (e, containerRef) => {
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Kecepatan scroll bisa disesuaikan di sini
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Fungsi untuk mengakhiri pergerakan scroll
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Fungsi untuk menghentikan pergerakan scroll saat mouse keluar dari area scroll
    const handleMouseOut = () => {
        setIsDragging(false);
    };

    // Fungsi untuk melakukan scroll ke kiri atau kanan
    const scroll = (direction, containerRef) => {
        if (direction === 'left') {
            containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        } else {
            containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Navigasi ke halaman detail
    const navigateToDetails = () => {
        navigate('./DetailPage');
    };

    return (
        <div className="homepage min-h-screen bg-[#2A2D43] text-white flex flex-col">
            <Sidebar />
            <div className="content flex-grow flex flex-col">
                <Navbar style={{ position: 'fixed' }} />
                <div className="p-4 flex-grow">
                    {/* Carousel Section */}
                    <Carousel showThumbs={false} autoPlay infiniteLoop showIndicators>
                        <div>
                            <img src="https://d2v6npc8wmnkqk.cloudfront.net/storage/tinymce/5aVaBwzH4Lg8AEyGWv5MiivKRqpjT2ta5KH3bsHa.jpg" alt="Promotion 1" />
                            <p className="legend">Top Up Game Pakai Kode Referral</p>
                        </div>
                        <div>
                            <img src="https://berita.teknologi.id/uploads/article/1665569536_Cara-Top-Up-FF-Diskon-90.jpg" alt="Promotion 2" />
                            <p className="legend">Get 25% Discount with Code</p>
                        </div>
                    </Carousel>

                    {/* Popular Games Section */}
                    <section className="popular-games">
                        <h2 className="text-2xl font-bold my-4">GAME POPULER</h2>
                        <h3 className="text-xl mb-4">Trending Sekarang</h3>
                        <div className="relative">
                            <button className="scroll-button left" onClick={() => scroll('left', scrollContainerRef1)}>&#9664;</button>
                            <div
                                className="games-container flex overflow-x-auto no-scrollbar"
                                ref={scrollContainerRef1}
                                onMouseDown={(e) => handleMouseDown(e, scrollContainerRef1)}
                                onMouseMove={(e) => handleMouseMove(e, scrollContainerRef1)}
                                onMouseUp={handleMouseUp}
                                onMouseOut={handleMouseOut}
                                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                            >
                                {games.map((game, index) => (
                                    <div className="game-card" key={index}>
                                        <img src={game.image} alt={game.name} className="game-image" />
                                        <h3 className="game-title">{game.name}</h3>
                                        <button className="btn btn-primary">{game.buttonText}</button>
                                    </div>
                                ))}
                            </div>
                            <button className="scroll-button right" onClick={() => scroll('right', scrollContainerRef1)}>&#9654;</button>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="btn btn-primary" onClick={navigateToDetails}>Selengkapnya</button>
                        </div>
                    </section>

                    {/* Game Seluler Section */}
                    <section className="game-category mt-8">
                        <h3 className="text-xl mb-4">Game Seluler</h3>
                        <div className="popular-games relative">
                            <button className="scroll-button left" onClick={() => scroll('left', scrollContainerRef2)}>&#9664;</button>
                            <div
                                className="games-container flex overflow-x-auto no-scrollbar"
                                ref={scrollContainerRef2}
                                onMouseDown={(e) => handleMouseDown(e, scrollContainerRef2)}
                                onMouseMove={(e) => handleMouseMove(e, scrollContainerRef2)}
                                onMouseUp={handleMouseUp}
                                onMouseOut={handleMouseOut}
                                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                            >
                                {seluler.map((game, index) => (
                                    <div className="game-card" key={index}>
                                        <img src={game.image} alt={game.name} className="game-image" />
                                        <h3 className="game-title">{game.name}</h3>
                                        <button className="btn btn-primary">{game.buttonText}</button>
                                    </div>
                                ))}
                            </div>
                            <button className="scroll-button right" onClick={() => scroll('right', scrollContainerRef2)}>&#9654;</button>
                        </div>
                    </section>

                    {/* Game PC Section */}
                    <section className="game-category mt-8">
                        <h3 className="text-xl mb-4">Game PC</h3>
                        <div className="popular-games relative">
                            <button className="scroll-button left" onClick={() => scroll('left', scrollContainerRef3)}>&#9664;</button>
                            <div
                                className="games-container flex overflow-x-auto no-scrollbar"
                                ref={scrollContainerRef3}
                                onMouseDown={(e) => handleMouseDown(e, scrollContainerRef3)}
                                onMouseMove={(e) => handleMouseMove(e, scrollContainerRef3)}
                                onMouseUp={handleMouseUp}
                                onMouseOut={handleMouseOut}
                                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                            >
                                {pc.map((game, index) => (
                                    <div className="game-card" key={index}>
                                        <img src={game.image} alt={game.name} className="game-image" />
                                        <h3 className="game-title">{game.name}</h3>
                                        <button className="btn btn-primary">{game.buttonText}</button>
                                    </div>
                                ))}
                            </div>
                            <button className="scroll-button right" onClick={() => scroll('right', scrollContainerRef3)}>&#9654;</button>
                        </div>
                    </section>

                    {/* Voucher Game Section */}
                    <section className="game-category mt-8">
                        <h3 className="text-xl mb-4">Voucher Game</h3>
                        <div className="popular-games relative">
                            <button className="scroll-button left" onClick={() => scroll('left', scrollContainerRef4)}>&#9664;</button>
                            <div
                                className="games-container flex overflow-x-auto no-scrollbar"
                                ref={scrollContainerRef4}
                                onMouseDown={(e) => handleMouseDown(e, scrollContainerRef4)}
                                onMouseMove={(e) => handleMouseMove(e, scrollContainerRef4)}
                                onMouseUp={handleMouseUp}
                                onMouseOut={handleMouseOut}
                                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                            >
                                {voucher.map((game, index) => (
                                    <div className="game-card" key={index}>
                                        <img src={game.image} alt={game.name} className="game-image" />
                                        <h3 className="game-title">{game.name}</h3>
                                        <button className="btn btn-primary">{game.buttonText}</button>
                                    </div>
                                ))}
                            </div>
                            <button className="scroll-button right" onClick={() => scroll('right', scrollContainerRef4)}>&#9654;</button>
                        </div>
                    </section>
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

export default Homepage;
