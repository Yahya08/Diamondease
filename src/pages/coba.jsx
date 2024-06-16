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

    const seluler = [
        { name: "Call of Duty", image: "https://cdn.unipin.com/images/icon_product_pages/1633599388-icon-Icon_1024.jpg", buttonText: "TOP UP" },
        { name: "Mobile Legends: Bang Bang", image: "https://cdn.unipin.com/images/icon_product_pages/1714098015-icon-mlbb icon 200x200_11zon.png", buttonText: "TOP UP" },
        { name: "Genshin Impact", image: "https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg", buttonText: "TOP UP" },
        { name: "Immortal Kingdoms M", image: "https://cdn.unipin.com/images/icon_product_pages/1711952993-icon-icon_11zon.jpg", buttonText: "TOP UP" },
        { name: "Undawn", image: "https://cdn.unipin.com/images/icon_product_pages/1689159121-icon-garena-undawn.jpg", buttonText: "TOP UP" },
    ];

    const pc = [
        { name: "Hello Cafe", image: "https://cdn.unipin.com/images/icon_product_pages/1710303200-icon-Hello%20Cafe_11zon.png", buttonText: "TOP UP" },
        { name: "Clash Royale", image: "https://cdn.unipin.com/images/icon_product_pages/1696470388-icon-Clash%20Royale%20Icon%20200x200.jpg", buttonText: "TOP UP" },
        { name: "Astral Guardians : Cyber Fantasy", image: "https://cdn.unipin.com/images/icon_product_pages/1603346179-icon-eyougame.jpg", buttonText: "TOP UP" },
    ];

    // Refs untuk mengontrol pergerakan scroll
    const scrollContainerRef1 = useRef(null);
    const scrollContainerRef2 = useRef(null);

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

    const navigateToDetails = () => {
        navigate('/detailpage');
    };

    return (
        <div className="homepage min-h-screen bg-[#2A2D43] text-white flex flex-col">
            <Sidebar />
            <div className="content flex-grow flex flex-col">
                <Navbar className="navbar" style={{ position: 'fixed' }} />
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

                    {/* Mobile Games Section */}
                    <section className="mobile-games">
                        <h2 className="text-2xl font-bold my-4">GAME MOBILE</h2>
                        <h3 className="text-xl mb-4">Game Seru di Smartphone Kamu</h3>
                        <div className="relative">
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
                        <div className="flex justify-center mt-4">
                            <button className="btn btn-primary" onClick={navigateToDetails}>Selengkapnya</button>
                        </div>
                    </section>

                    {/* PC Games Section */}
                    <section className="pc-games">
                        <h2 className="text-2xl font-bold my-4">GAME PC</h2>
                        <h3 className="text-xl mb-4">Game Seru di Komputer Kamu</h3>
                        <div className="relative">
                            <div className="games-container flex overflow-x-auto no-scrollbar">
                                {pc.map((game, index) => (
                                    <div className="game-card" key={index}>
                                        <img src={game.image} alt={game.name} className="game-image" />
                                        <h3 className="game-title">{game.name}</h3>
                                        <button className="btn btn-primary">{game.buttonText}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Social Media Section */}
                    <section className="social-media mt-8">
                        <h2 className="text-2xl font-bold mb-4">FOLLOW US</h2>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.facebook.com/UniPinIndonesia" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/unipinindonesia/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.tiktok.com/@unipinindonesia" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FontAwesomeIcon icon={faTiktok} size="2x" />
                            </a>
                            <a href="https://twitter.com/UniPinIndonesia" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
