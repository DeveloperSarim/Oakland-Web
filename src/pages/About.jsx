import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import footer from '../assets/footer.png';
import footer_back from '../assets/footer-back.jpg';
import aboutHero from '../assets/about-bg.JPG'; // ✅ replace with your actual image
import Payment_Plan from '../assets/Payment-Plan.pdf';
import Oakland_presentation from '../assets/Oakland - Presentation.pdf';
import about1 from '../assets/Gallery_1.jpg';
import about2 from '../assets/Gallery_2.jpg';
import about3 from '../assets/Gallery_3.jpg';
import about4 from '../assets/Gallery_4.jpg';
import about5 from '../assets/Gallery_5.jpg';
import about6 from '../assets/Gallery_6.jpg';
import about7 from '../assets/Gallery_7.jpg';
import about8 from '../assets/Gallery_8.jpg';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-dark.png';

import './About.css'

const images = [
  about1, about2, about3, about4, about5,
  about6, about7, about8
];



const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadDropdownOpen, setIsDownloadDropdownOpen] = useState(false);
  const [isDarkLogo, setIsDarkLogo] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDownloadDropdownOpen(false);
  };

  const toggleDownloadDropdown = (e) => {
    e.preventDefault();
    setIsDownloadDropdownOpen(!isDownloadDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.download-dropdown')) {
        setIsDownloadDropdownOpen(false);
      }
    };

    if (isDownloadDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isDownloadDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsDarkLogo(true);
      } else {
        setIsDarkLogo(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-transparent">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-semibold">
            <img src={isDarkLogo ? logoDark : logoWhite} alt="OAKLAND" className="h-8 transition-all duration-300" />
          </div>
          <button onClick={toggleMenu} className="text-white text-2xl font-light focus:outline-none relative z-60">
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-90 transition-opacity duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-12">
            {['Home', 'About', 'Contact', 'Careers'].map((label) => (
              <a
                key={label}
                href={
                  label === 'Home' ? '/' :
                  label === 'About' ? '/about' :
                  label === 'Contact' ? '/contact' :
                  label === 'Careers' ? '/careers' : '#'
                }
                onClick={toggleMenu}
                className="block text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                {label}
              </a>
            ))}

            <div className="relative download-dropdown inline-block">
              <button
                onClick={toggleDownloadDropdown}
                className="flex items-center justify-center gap-2 text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                Download
                <ChevronDown className={`transition-transform duration-300 ${isDownloadDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDownloadDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white rounded-xl shadow-2xl z-50 text-left">
                  <a
                    href={Payment_Plan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 text-base text-gray-800 hover:bg-gray-100 font-medium"
                  >
                    View Payment Plan
                  </a>
                  <a
                    href={Oakland_presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 text-base text-gray-800 hover:bg-gray-100 font-medium"
                  >
                    Oakland Green Presentation
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 📸 Fullscreen Image Section with Text */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutHero})`,
          height: '75vh',
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-black text-5xl md:text-6xl font-light drop-shadow-lg">About Us</h1>
        </div>
      </section>

      {/*  */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
    {/* Left content */}
    <div>
      <h2 className="text-4xl font-light mb-6 leading-tight">
       Welcome to Oakland Greens -<br></br> where luxury meets tranquility.
      </h2>

      <p className="text-lg font-medium mb-4">Serene Stays Amidst Murree's Mountain Bliss</p>

      <p className="text-gray-700 mb-4">
        <strong>Nestled amidst nature yet conveniently</strong><br />
       accessible from the city, Oakland Greens redefines farmhouse living with elegance, privacy, and modern comfort. Our vision is to create a peaceful sanctuary where families can unwind, reconnect, and experience the finest in eco-luxury lifestyle.
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Every farmhouse at Oakland Greens is a testament to</strong><br />
        craftsmanship and natural harmony. Designed with spacious layouts, lush landscapes, and high-end amenities, our properties offer a resort-like experience all year round.
      </p>

      <p className="text-gray-700 mb-6">
    Whether you're looking for a private weekend escape, a secure investment, or a legacy home — Oakland Greens delivers unmatched serenity, style, and value.
      </p>

      {/* Amenities list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
        <ul className="list-disc list-inside space-y-1">
          <li>Fine Dining</li>
          <li>Spa & Fitness Center</li>
          <li>Infinity Pools</li>
          <li>Trekking & Adventure Parks</li>
        </ul>
        <ul className="list-disc list-inside space-y-1">
          <li>Kids' Play Areas</li>
          <li>Banquet & Conference Facilities</li>
          <li>Indoor Games</li>
          <li>Eco-Friendly Design</li>
          <li>Concierge Services</li>
          <li>Retail & Shopping Experiences</li>
        </ul>
      </div>

      <p className="text-gray-600 mt-6 italic">
       Join us in building a life where nature surrounds you and luxury follows.
      </p>
    </div>

    {/* Right Image */}
    <div className="rounded-xl border-4 border-blue-900 overflow-hidden shadow-lg">
      <img
        src={aboutHero} // ✅ Put your image inside public folder or import it and use variable
        alt="Murree Resort"
        className="w-full object-cover" style={{height: "787px"}}
      />
    </div>
  </div>
</section>
{/*  */}

 

      {/* ✅ Masonry Layout */}
      <div className="bg-white py-20 px-4 md:px-10">
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-5xl font-light mb-6">Gallery</h2>
    <p className="text-gray-700 text-lg leading-relaxed">
    Explore the lifestyle of Oakland Greens through our curated gallery.

From stunning architecture to serene green spaces, our images reflect the essence of luxurious farmhouse living. Whether it's the grandeur of our interiors, the beauty of natural surroundings, or the peaceful vibes at every corner — each photo captures the spirit of what makes Oakland Greens truly special.

Take a glimpse into your future home — designed to inspire, built to last.
    </p>
  </div>

  {/* ✅ Responsive Grid */}
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.slice(0, 8).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

</div>


    

      {/* Footer */}
      <section
        className="relative mt-4 min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${footer_back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 flex items-end justify-center ">
          <div className="flex space-x-8">
            <img
              src={footer}
              alt="House 1"
              className="w-22 h-80 flex align-end object-cover rounded-lg opacity-80"
              style={{ height: '500px' }}
            />
          </div>
        </div>
      
        <motion.div
          className="relative z-10 text-center text-white px-4 footers"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your dream <br />
            home awaits.
          </motion.h2>
      
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Whether you're exploring our homes or envisioning something custom,
            we're here to bring your dream to life.
          </motion.p>
      
          <a
            href={Oakland_presentation}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-2 rounded-2xl text-md inline-block hover:bg-gray-100 transition-colors duration-300"
          >
            View Presentation
          </a>
        </motion.div>
      
        <footer className="absolute  bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 text-white py-8 z-20">
          <div className="max-w-7xl  mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex foot space-x-8">
              <a href="#" className="hover:text-gray-300  transition">Contact</a>
              <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition">Terms</a>
            </div>
      
            {/* ✅ Social Icons */}
            <div className="flex icons space-x-4">
              <a href="https://www.facebook.com/oaklandgreenspk/" className="hover:text-gray-300 text-black transition" target='_blank'>
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 text-black transition" target='_blank'>
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 text-black transition" target='_blank'>
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 text-black transition" target='_blank'>
                <Linkedin size={20} />
              </a>
            </div>
      
            <div className="text-sm text-white text-center md:text-right">
              © 2025 Oakland Greens. All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default About;
