import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight , Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import home from '../assets/hero_image_2.png';
import nature from '../assets/Nature_1.png';
import luxury from '../assets/luxury.png';
import footer from '../assets/footer-1.png';
import footer_back from '../assets/footer-back.jpg';
import logoWhite from '../assets/logo-white.png';
import logoDark from '../assets/logo-dark.png';
import '../index.css';
import { motion } from 'framer-motion';
import Payment_Plan from '../assets/Payment-Plan.pdf';
import Oakland_presentation from '../assets/Oakland - Presentation.pdf';


// PropertySlider Component
const PropertySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  
  const properties = [
    {
      id: 1,
      name: "Hillside Villa",
      price: "$1,250,000",
      bedrooms: 4,
      bathrooms: 3.5,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
      description: "Modern luxury villa with panoramic views and contemporary design.",
      gradient: ""
    },
    { 
      id: 2,
      name: "The Crestview",
      price: "$2,100,000",
      bedrooms: 5,
      bathrooms: 5.5,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=400&fit=crop",
      description: "Where elegance meets innovation—a seamless blend of architecture, luxury, and nature.",
      gradient: "from-orange-400 to-pink-600"
    },
    {
      id: 3,
      name: "The Willowbrook",
      price: "$1,850,000",
      bedrooms: 6,
      bathrooms: 4.5,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=400&fit=crop",
      description: "Contemporary design meets natural beauty in this stunning retreat.",
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      id: 4,
      name: "Aurora Retreat",
      price: "$3,200,000",
      bedrooms: 7,
      bathrooms: 6.5,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&h=400&fit=crop",
      description: "A sanctuary with timeless design and exceptional craftsmanship.",
      gradient: "from-violet-400 to-indigo-600"
    },
    {
      id: 5,
      name: "Sunset Haven",
      price: "$2,750,000",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=400&fit=crop",
      description: "Luxurious living with breathtaking sunset views and modern amenities.",
      gradient: "from-amber-400 to-orange-600"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev >= properties.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev <= 0 ? properties.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
       <div className="w-full max-w-7xl mx-auto py-8 px-4 bg-white">
      <div className="relative h-96 flex items-center justify-center lg:justify-between lg:px-20">
        {/* Left Side Property - Faded (Hidden on mobile) */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72 h-64 z-10 hidden lg:block">
          <div className="relative h-full rounded-2xl overflow-hidden">
            <img
              src={properties[(currentSlide - 1 + properties.length) % properties.length].image}
              alt="Previous property"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Strong blur effect */}
            <div className="absolute inset-0 backdrop-blur-md"></div>
          </div>
          {/* Left property info - softly faded */}
          <div className="pt-4 opacity-60">
            <div className="text-lg font-light text-gray-700">
              {properties[(currentSlide - 1 + properties.length) % properties.length].price}
            </div>
            <h3 className="text-sm font-medium text-gray-600 mt-1">
              {properties[(currentSlide - 1 + properties.length) % properties.length].name}
            </h3>
          </div>
        </div>

        {/* Center Property - Fully Visible and Prominent */}
        <div className="relative z-20 w-full max-w-sm mx-auto lg:w-96 lg:max-w-none h-80">
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={properties[currentSlide].image}
              alt={properties[currentSlide].name}
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay for the main image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Center property info - fully visible */}
          <div className="pt-6 text-center">
            <div className="text-2xl lg:text-3xl font-light text-gray-900 mb-2">
              {properties[currentSlide].price}
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
              {properties[currentSlide].name}
            </h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-3">
              <span>{properties[currentSlide].bedrooms} bedrooms</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>{properties[currentSlide].bathrooms} bathrooms</span>
            </div>
            <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed px-4 lg:px-0">
              {properties[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Right Side Property - Faded (Hidden on mobile) */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-72 h-64 z-10 hidden lg:block">
          <div className="relative h-full rounded-2xl overflow-hidden">
            <img
              src={properties[(currentSlide + 1) % properties.length].image}
              alt="Next property"
              className="w-full h-full object-cover opacity-30"
            />
            {/* Strong blur effect */}
            <div className="absolute inset-0 backdrop-blur-md"></div>
          </div>
          {/* Right property info - softly faded */}
          <div className="pt-4 opacity-60 text-right">
            <div className="text-lg font-light text-gray-700">
              {properties[(currentSlide + 1) % properties.length].price}
            </div>
            <h3 className="text-sm font-medium text-gray-600 mt-1">
              {properties[(currentSlide + 1) % properties.length].name}
            </h3>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 z-30"
          disabled={isTransitioning}
        >
          <ChevronLeft size={16} className="text-white lg:w-5 lg:h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200 z-30"
          disabled={isTransitioning}
        >
          <ChevronRight size={16} className="text-white lg:w-5 lg:h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 lg:mt-48 space-x-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? 'w-6 h-2 lg:w-8 lg:h-3 bg-black' 
                : 'w-2 h-2 lg:w-3 lg:h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const OaklandGreensWebsite = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Prime Locations');

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


  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleButtonClick = () => {
    window.open('/Payment-Plan.pdf', '_blank');
  };

  const items = [
    {
      title: 'Prime Locations',
      description: 'Our farmhouses are located in peaceful, private areas, giving you the perfect escape while still being close to modern conveniences. Enjoy the best of nature and luxury combined.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=400&fit=crop',
      gradient: 'from-blue-400/30 to-purple-600/30'
    },
    {
      title: 'Modern Comfort',
      description: 'Every home features state-of-the-art technology and premium finishes for ultimate comfort.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop',
      gradient: 'from-green-400/30 to-yellow-600/30'
    },
    {
      title: 'State-of-the-Art Amenities',
      description: 'From infinity pools to smart home systems, every amenity is designed for luxury living.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=400&fit=crop',
      gradient: 'from-red-400/30 to-yellow-600/30'
    },
    {
      title: 'Natural Beauty',
      description: 'Surrounded by pristine landscapes and designed to complement natural surroundings.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop',
      gradient: 'from-purple-400/30 to-pink-600/30'
    }
  ];

  const faqs = [
    {
      question: "Can I customize the design of a Oakland?",
      answer: "Absolutely. Each Oakland is tailored to reflect your unique vision. From layouts to finishes, we work with you to create a space that perfectly suits your style and needs."
    },
    {
      question: "Where are Oakland Greens located?",
      answer: "Our properties are located in prime locations across the region, carefully selected for their natural beauty and accessibility to modern conveniences."
    },
    {
      question: "What is the process for purchasing a Oakland?",
      answer: "Our process involves consultation, design, approval, and construction phases, with dedicated support throughout your journey."
    },
    {
      question: "Do you offer fully custom-built homes?",
      answer: "Yes, we specialize in fully custom-built luxury homes tailored to your exact specifications and lifestyle needs."
    },
    {
      question: "How long does it take to complete a home?",
      answer: "Timeline varies based on customization level and size of the project, typically ranging from 8-18 months."
    }
  ];

  const blogPosts = [
    {
      title: "The Rise of Boutique Architecture in Luxury Living",
      description: "Discover how boutique architecture is redefining luxury living with its focus on uniqueness, personalization, and timeless design.",
      author: "Emily Chambers",
      role: "Marketing Consultant",
      category: "Must Read",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop"
    },
    {
      title: "The Future of Luxury: AI and Automation in Home Design",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      title: "Are Sustainable Materials the Future of Homes?",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
    },
    {
      title: "Exploring Minimalism with a Touch of Luxury",
      category: "Design",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animate-delay-800 {
          animation-delay: 0.8s;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .section-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .section-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-children > * {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .stagger-children.visible > *:nth-child(1) { transition-delay: 0.1s; }
        .stagger-children.visible > *:nth-child(2) { transition-delay: 0.2s; } 
        .stagger-children.visible > *:nth-child(3) { transition-delay: 0.3s; }
        .stagger-children.visible > *:nth-child(4) { transition-delay: 0.4s; }
        .stagger-children.visible > *:nth-child(5) { transition-delay: 0.5s; }
        
        .stagger-children.visible > * {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

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
                    rel="noopener noreferr"
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
      <section className="relative h-screen bg-gradient-to-b from-blue-400 to-blue-100 pt-24 pb-10 opacity-110">
        <div className="absolute inset-0 pt-4 z-0">
          <div className="relative h-full flex justify-center items-center mt-8">
            <img
              src={home}
              alt="Home"
              className="absolute top-1/2 left-1/2 transform homes -translate-x-1/2 -translate-y-1/2 inset-0 object-cover fade-in-out-image"
              style={{
                width:
                  window.innerWidth >= 900 && window.innerWidth <= 1100 && window.innerHeight >= 500 && window.innerHeight <= 700
                    ? '800px'
                    : '1200px',
                maxWidth: '100%',
                marginTop:
                  window.innerWidth >= 900 && window.innerWidth <= 1100 && window.innerHeight >= 500 && window.innerHeight <= 700
                    ? '14px'
                    : window.innerWidth >= 1200 && window.innerWidth <= 1400 && window.innerHeight >= 700 && window.innerHeight <= 900
                    ? '0px'
                    : '100px',
              }}            />
            <div className="absolute mt-20 inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-85" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-white z-20 mb-72 px-4 relative"
        >
          <h1
  className="text-4xl md:text-6xl font-medium mb-4 leading-tight"
  style={{
    fontWeight: 550,
    fontSize: window.innerWidth <= 450 && window.innerHeight <= 1000 ? '2rem' : '4rem',
    marginTop: '20px',
  }}
>
  Farmhouse Living<br />
  <span
  style={{
    fontSize: window.innerWidth <= 450 && window.innerHeight <= 1000 ? '2rem' : '3.8rem',
  }}
>
    Like Never Before
  </span>
</h1>

          <p className="text-base md:text-lg max-w-md mx-auto opacity-90 mb-2" style={{maxWidth: '510px'}}>
            Discover luxury living designed for the ultimate
            living experience with swimming pools and modern amenities.
          </p>
          <button
            className="bg-white text-black px-4 py-2 rounded-2xl text-md relative z-50 hover:bg-gray-100 transition-colors duration-300 mt-6"
            onClick={handleButtonClick}
          >
            Explore Payment Plan
          </button>
        </motion.div>
      </section>

      {/* Features Section - After Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm tracking-widest text-gray-500 mb-2">FEATURES</h3>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{fontFamily: 'Manrope, sans-serif'}}>Refine Your Living</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Radisson Blu Resort Murree offers a perfect blend of serene mountain views and modern comforts for an unforgettable stay.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 place-items-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop" alt="Eco Community" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Certified Eco-Community<br /><span className="text-xs font-normal text-gray-500">Carbon-certified, sustainable development</span></span>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=300&h=300&fit=crop" alt="Lake & Golf" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Scenic Lake & Golf Club<br /><span className="text-xs font-normal text-gray-500">Recreation and tranquility intertwined</span></span>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&h=300&fit=crop" alt="Farmhouse Plots" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">4-Kanal Farmhouse Plots<br /><span className="text-xs font-normal text-gray-500">Generously sized private estates</span></span>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=300&h=300&fit=crop" alt="Luxury Clubhouses" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Luxury Clubhouses<br /><span className="text-xs font-normal text-gray-500">Fine dining, fitness, events, and leisure</span></span>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&h=300&fit=crop" alt="Wellness Focused" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Wellness Focused<br /><span className="text-xs font-normal text-gray-500">Yoga rooms, hiking trails, and open-air serenity</span></span>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center">
              <img src="https://c1.wallpaperflare.com/preview/983/26/531/solar-panel-array-power-sun-electricity.jpg?w=300&h=300&fit=crop" alt="Renewable Energy" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Renewable Energy<br /><span className="text-xs font-normal text-gray-500">Solar panels and wind turbines</span></span>
            </div>
            {/* Feature 7 */}
            <div className="flex flex-col items-center">
              <img src="https://img.freepik.com/free-photo/receptionist-elegant-suit-work-hours-with-customer_23-2149714444.jpg?w=300&h=300&fit=crop" alt="Exclusive Membership" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Exclusive Membership<br /><span className="text-xs font-normal text-gray-500">Limited, handpicked community</span></span>
            </div>
            {/* Feature 8 */}
            <div className="flex flex-col items-center">
              <img src="https://www.researchgate.net/publication/319903812/figure/fig6/AS:668803482533889@1536466584073/The-Faisal-Mosque-Islamabad-Pakistan.ppm?w=300&h=300&fit=crop" alt="Strategic Location" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-3 shadow-lg" />
              <span className="text-center text-base font-medium">Strategic Location<br /><span className="text-xs font-normal text-gray-500">10 mins from Islamabad, 0 km to hospital, 3 km to Taxila Museum</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* It's Luxury Living Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto luxury text-center px-6">
        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-5xl font-semibold mb-2 mt-20"
  style={{
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '3.8rem',
    fontWeight: '600',
  }}
>
  It's Luxury Living
</motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center  justify-center mb-8 nature"
          >
            <span
  className="text-5xl font-semibold ml-2"
  style={{
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '3.8rem',
    fontWeight: '600',
  }}
>
  Embraced by
</span>
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  className="mx-4 w-37 h-14 overflow-hidden luxury flex items-center justify-center mt-2"
  style={{
    width: window.innerWidth <= 768 ? '4rem' : '9.25rem',
    height: window.innerWidth <= 768 ? '1.5rem' : '3.5rem',
  }}
>
           
              <img
  src={nature}  // Replace with the actual image source
  alt="Nature"
  className="w-full h-full object-cover"
  
/>

<br />


            </motion.div>
            <span
  className="text-5xl font-semibold mr-2"
  style={{
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '3.8rem',
    fontWeight: '500',
  }}
>
  Nature.
</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Oakland Greens isn't just a home—it's a lifestyle. With precision craftsmanship and natural surroundings,
            each farmhouse blends luxury and tranquility.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="flex items-center bg-gray-100 rounded-2xl overflow-hidden shadow-sm px-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-transparent px-6 py-2 focus:outline-none w-64 text-sm placeholder-gray-500"
              />
              <button class="bg-black text-white px-8 py-3 text-sm font-medium rounded-2xl hover:bg-gray-800 transition whitespace-nowrap">
  Stay Updated
</button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-8 relative w-54 h-50" style={{ marginBottom: '110px', marginTop: '-50px' }}>
            <img src={luxury} alt="" className="rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          </div>

          <div className="flex justify-between items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-4">
                Explore Our Luxury<br />Farmhouses.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-right"
            >
              <p className="text-gray-600 mb-2">Exclusive Luxury Farmhouses</p>
              <p className="text-gray-600">Crafted for You.</p>
            </motion.div>
          </div>

          <PropertySlider />
        </div>
      </section>

      <section className="py-20 prime bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light mb-4">
              Exceptional Living Begins<br />with Every Detail.
            </h2>
            <p className="text-gray-600">
              Discover the Details That Make Every Oakland Greens Home a Masterpiece.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-black pl-6 cursor-pointer"
                  onClick={() => handleClick(item.title)}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={items.find(item => item.title === selectedItem).image}
                  alt={selectedItem}
                  className="w-full h-full object-cover opacity-80"
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${items.find(item => item.title === selectedItem).gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex insights justify-between items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-normal leading-tight">
                Discover insights,<br />
                trends, and inspiration.
              </h2>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center text-sm font-medium"
            >
              View all <ArrowRight size={16} className="ml-2" />
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=450&fit=crop"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-pink-500/10 to-blue-400/30"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="bg-black text-white px-4 w-32 py-2 rounded-full text-sm mb-6">Must Read</span>
              <h3 className="text-3xl font-normal mb-4 leading-snug">
                The Rise of Boutique Architecture in Luxury Living
              </h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                Discover how boutique architecture is redefining luxury living with its focus on uniqueness, personalization, and timeless design.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">EC</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Emily Chambers</div>
                    <div className="text-sm text-gray-500">Marketing Consultant</div>
                  </div>
                </div>
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm">Lifestyle</span>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                  alt="AI Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/40 rounded-3xl"></div>
              </div>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Innovation</span>
              <h3 className="text-xl font-medium mt-4 group-hover:text-gray-600 transition leading-snug">
                The Future of Luxury: AI and Automation in Home Design
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
                  alt="Sustainable Home"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-600/40 rounded-3xl"></div>
              </div>
              <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm">Sustainability</span>
              <h3 className="text-xl font-medium mt-4 group-hover:text-gray-600 transition leading-snug">
                Are Sustainable Materials the Future of Homes?
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop"
                  alt="Minimalist Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 to-orange-400/30 rounded-3xl"></div>
              </div>
              <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm">Design</span>
              <h3 className="text-xl font-medium mt-4 group-hover:text-gray-600 transition leading-snug">
                Exploring Minimalism with a Touch of Luxury
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-4">Frequently<br />asked questions.</h2>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Answers to your questions,</p>
              <p className="text-gray-600">every step of the way.</p>
            </div>
          </div>

          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition"
                  onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition ${expandedFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="pb-6 text-gray-600 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <div className="flex icons foot space-x-4">
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

export default OaklandGreensWebsite;