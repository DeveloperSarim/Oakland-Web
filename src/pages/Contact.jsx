import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-dark.png';
import footer from '../assets/footer-1.png';
import footer_back from '../assets/footer-back.jpg';
import aboutHero from '../assets/about-bg.JPG';
import { motion } from 'framer-motion';
import './Contact.css'; // Assuming you have a Contact.css file for styles

const Contact = () => {
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

  React.useEffect(() => {
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
    <div className="bg-white min-h-screen flex flex-col">
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
      {/* Mobile Menu */}
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
          </div>
        </div>
      </div>

      {/* Hero Section */}
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
            <h1 className="text-black text-5xl md:text-6xl font-light drop-shadow-lg">Contact Us</h1>
          </div>
        </section>

      {/* Contact Section */}
   

    <section className="flex-1 py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
    >
      If You have Question<br></br> Please Contact Us.
    </motion.h2>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-600 mb-8 text-sm sm:text-base"
    >
      Fill in this Form or Send us Email with Your Inquiry
    </motion.p>

    {/* Grid Layout */}
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message Sent!');
        }}
      >
        {/* Name and Phone/Email Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm flex-1"
          />
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <input
              type="text"
              placeholder="Phone"
              className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm flex-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm flex-1"
              required
            />
          </div>
        </div>
        
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm resize-none w-full mb-4"
          required
        ></textarea>
        
        <button
          type="submit"
          className="bg-black text-white text-lg py-2 px-8 sm:px-14 rounded-lg font-medium hover:bg-yellow-600 transition  sm:w-fit"
        >
          Send
        </button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col"
      >
        <div className="bg-blue-900 px-6 sm:px-8 text-white rounded-lg p-6 w-full lg:w-[400px]">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact Details</h2>
          <div className="space-y-3">
            <p className="flex items-start text-sm sm:text-base">
              <span className="font-medium mr-2">Address:</span>
              Oakland Greens, Islamabad
            </p>
            <p className="flex items-start text-sm sm:text-base">
              <span className="font-medium mr-2">Phone:</span>
              <a href="tel:+923001234567" className="text-white hover:underline break-all">
                +92 300 1234567
              </a>
            </p>
            <p className="flex items-start text-sm sm:text-base">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:info@oaklandgreens.com" className="text-white hover:underline break-all">
                info@oaklandgreens.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
   <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
    >
     Find Us on the Google Map
    </motion.h2>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-600 mb-8 text-sm sm:text-base"
    >
    Fill in this Form or Send us Email with Your Inquiry
    </motion.p>
    </div>
 <div style={{ width: '70%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
  
  <iframe
    title="Oakland Greens Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1083.2676050415534!2d72.8612299!3d33.7352444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa36911f72c29%3A0xae2df9d725824c4!2sOakland%20Greens!5e0!3m2!1sen!2s!4v1716659534274!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '8px', padding:"3", marginTop:"20px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      {/* Footer */}
        <section
              className="relative mt-4 min-h-screen flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url(${footer_back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="flex space-x-8">
                  <img
                    src={footer}
                    alt="House"
                    className="w-22 h-60 flex align-end object-cover rounded-lg opacity-80"
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
      
                <button className="bg-white text-black px-8 py-2 rounded-2xl text-md">
                  Get Plan
                </button>
              </motion.div>
      
              <footer className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 text-white py-8 z-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                  <div className="flex foot space-x-8">
                    <a href="#" className="hover:text-gray-300 transition">Contact</a>
                    <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300 transition">Terms</a>
                  </div>
      
                  <div className="flex foot space-x-4">
                    <a href="#" className="hover:text-gray-300 transition">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="hover:text-gray-300 transition">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="hover:text-gray-300 transition">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="hover:text-gray-300 transition">
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

export default Contact;
