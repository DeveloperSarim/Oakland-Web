import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import footer from '../assets/footer-1.png';
import footer_back from '../assets/footer-back.jpg';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-dark.png';
import aboutHero from '../assets/about-bg.JPG';
import Payment_Plan from '../assets/Payment-Plan.pdf';
import Oakland_presentation from '../assets/Oakland - Presentation.pdf';

const Careers = () => {
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
              <a
                href="#"
                onClick={toggleDownloadDropdown}
                className="flex items-center justify-center gap-2 text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-transform duration-300 hover:scale-110"
              >
                Download
                <ChevronDown className={`transition-transform duration-300 ${isDownloadDropdownOpen ? 'rotate-180' : ''}`} />
              </a>
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

      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHero})`, height: '75vh'
       }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-black text-5xl md:text-6xl font-light drop-shadow-lg">Careers</h1>
        </div>
      </section>


 {/* How We Work Section */}
 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-gray-500 tracking-widest uppercase mb-2">Features</div>
            <h2 className="text-5xl font-bold mb-4">How we work</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe work should be fun, meaningful, and challenging. Our mission is to help teams succeed by encouraging the respectful and intentional use of time, and that mission speaks to everything we do as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 rounded-md p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 10V5a3 3 0 00-6 0v5m6 0a3 3 0 01-6 0m6 0v1a3 3 0 01-6 0v-1" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Work with us</h3>
              <p className="text-gray-700">
                Join the Oakland Greens team and align yourself with our vision and core values. We seek individuals who are passionate about hospitality and excellence. As part of our team, you'll thrive in a dynamic culture that fosters innovation, growth, and collaboration.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 rounded-md p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4-4V5a3 3 0 00-6 0v8m6 0a3 3 0 01-6 0" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Equal Opportunity</h3>
              <p className="text-gray-700">
                Oakland Greens is proud to be an Equal Opportunity Employer. We welcome all qualified applicants and ensure employment decisions are made without discrimination, fostering an inclusive and diverse workplace.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 rounded-md p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 10V5a3 3 0 00-6 0v5m6 0a3 3 0 01-6 0m6 0v1a3 3 0 01-6 0v-1" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Diversity and Inclusion</h3>
              <p className="text-gray-700">
                At Oakland Greens, we believe our people are our greatest asset. We celebrate individuals from diverse backgrounds and are committed to fostering a culture of inclusivity and respect, where everyone feels valued and empowered to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-light mb-6 leading-tight">
              Join Our Team<br />
              at Oakland Greens
            </h2>
            <p className="text-lg font-medium mb-4">Shape the future of luxury living with us.</p>
            <p className="text-gray-700 mb-4">
              We're always looking for passionate, creative, and driven individuals to join our growing family. At Oakland Greens, you'll work with a team that values innovation, collaboration, and excellence in everything we do.
            </p>
            <p className="text-gray-700 mb-6">
              If you're ready to make an impact and grow your career in a dynamic, supportive environment, explore our current openings or send us your resume at <a href="mailto:careers@oaklandgreens.pk" className="text-blue-700 underline">careers@oaklandgreens.pk</a>.
            </p>
            {/* Example Job Openings */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-blue-700 pl-4">
                  <span className="font-semibold">Sales Executive</span> – Build relationships with clients and help them find their dream property.
                </li>
                <li className="border-l-4 border-blue-700 pl-4">
                  <span className="font-semibold">Marketing Specialist</span> – Drive our brand's growth through creative campaigns and digital outreach.
                </li>
                <li className="border-l-4 border-blue-700 pl-4">
                  <span className="font-semibold">Customer Support Officer</span> – Deliver exceptional service and support to our valued clients.
                </li>
              </ul>
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="mailto:careers@oaklandgreens.pk"
                className="bg-black text-white px-8 py-3 rounded-2xl text-md font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div className="rounded-xl border-4 border-blue-900 overflow-hidden shadow-lg">
            <img
              src={aboutHero}
              alt="Careers at Oakland Greens"
              className="w-full object-cover"
              style={{height: "787px"}}
            />
          </div>
        </div>
      </section>

     

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

export default Careers;
