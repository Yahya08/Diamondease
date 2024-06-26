
import Navbar from '../Component/NavbarComponent';
import Sidebar from '../Component/Sidebar';
import '../style/Homepage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    const games = [
      {
        name: "Genshin Impact",
        image: "https://source.unsplash.com/800x600/?genshin",
        buttonText: "Top Up"
      },
      {
        name: "Mobile Legend",
        image: "https://source.unsplash.com/800x600/?mobile%20legend",
        buttonText: "Top Up"
      },
      {
        name: "PUBG Mobile",
        image: "https://source.unsplash.com/800x600/?pubg",
        buttonText: "Top Up"
      }
      // Add more games as needed
    ];
  
    const fallbackImages = {
      promo1: '/images/fallback-promo1.jpg',
      promo2: '/images/fallback-promo2.jpg'
    };
  
    return (
      <div className="homepage min-h-screen bg-[#2A2D43] text-white flex">
        <Sidebar />
        <div className="content flex-grow flex flex-col">
          <Navbar />
          <div className="p-4">
            {/* Carousel Section */}
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              <div>
                <img 
                  src="https://source.unsplash.com/800x600/?promotion1" 
                  alt="Promotion 1" 
                  onError={(e) => e.target.src = fallbackImages.promo1}
                />
                <p className="legend">Top Up Game Pakai Kode Referral</p>
              </div>
              <div>
                <img 
                  src="https://source.unsplash.com/800x600/?promotion2" 
                  alt="Promotion 2" 
                  onError={(e) => e.target.src = fallbackImages.promo2}
                />
                <p className="legend">Get 25% Discount with Code</p>
              </div>
              {/* Add more carousel items as needed */}
            </Carousel>
            
            {/* Popular Games Section */}
            <h2 className="text-2xl font-bold my-4">Game Populer</h2>
            <div className="grid grid-cols-3 gap-4">
              {games.map((game, index) => (
                <div className="game-card" key={index}>
                  <img 
                    src={game.image} 
                    alt={game.name} 
                    className="game-image" 
                    onError={(e) => e.target.src = "https://source.unsplash.com/800x600/?game"} // Fallback for game images
                  />
                  <h3 className="game-title">{game.name}</h3>
                  <button className="btn btn-primary">{game.buttonText}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Homepage;
