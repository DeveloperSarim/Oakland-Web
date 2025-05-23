import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import home from './assets/home.png'
import homeImage from './assets/home.png';
import nature from './assets/Nature.png';
import luxury from './assets/luxury.png';
import footer from './assets/footer.png';
import footer_back from './assets/footer-back.jpg';


const OaklandGreensWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const properties = [
    {
      id: 1,
      name: "Hillside Villa",
      price: "$1,250,000",
      bedrooms: 4,
      bathrooms: 3.5,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop",
      description: "Modern luxury villa with panoramic views and contemporary design.",
      gradient: "from-blue-400 to-purple-600"
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
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop",
      description: "Luxurious living with breathtaking sunset views and modern amenities.",
      gradient: "from-amber-400 to-orange-600"
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

  const faqs = [
    {
      question: "Can I customize the design of a Haven home?",
      answer: "Absolutely. Each Haven home is tailored to reflect your unique vision. From layouts to finishes, we work with you to create a space that perfectly suits your style and needs."
    },
    {
      question: "Where are Oakland Greens located?",
      answer: "Our properties are located in prime locations across the region, carefully selected for their natural beauty and accessibility to modern conveniences."
    },
    {
      question: "What is the process for purchasing a Haven home?",
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

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev >= properties.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev <= 0 ? properties.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
     <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-semibold text-xl">OAKLAND</div>
          
          {/* Menu Button - Plus Icon (visible on all devices) */}
          <button 
            onClick={toggleMenu}
            className="text-white text-2xl font-light focus:outline-none z-60 relative"
          >
            <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-90 -translate-y-1.5' : 'rotate-0'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Page Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Full screen menu content */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-12">
            <a 
              href="#" 
              className="block text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#" 
              className="block text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              Properties
            </a>
            <a 
              href="#" 
              className="block text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#" 
              className="block text-white text-5xl md:text-6xl font-light hover:text-gray-300 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
 {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-400 to-blue-100 flex items-center justify-center">
        <div className="text-center text-white z-20 mb-72">
          <h1 className="text-6xl md:text-7xl font-light mb-4">
            Farmhouse<br />
           Living Like Never Before
          </h1>
          <p className="text-lg  max-w-md mx-auto opacity-90">
            Discover luxury living designed for the ultimate<br />
            living experience with swimming pools and modern<br />
            amenities.
          </p>
          <button className='bg-white text-black px-3 py-2 rounded-2xl text-md'>Explore Payement Plan</button>
        </div>
        
        {/* House Image */}
   <div className="absolute top-98 left-1/2 transform -translate-x-1/2">
  <div className="w-[450px] h-[300px] flex items-end justify-center">
    <div className="w-[420px] h-[270px]">
      <img
        src={home}
        alt="Home"
        className="w-full h-full object-contain"
      />
      
    </div>
    {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" /> */}
  </div>
</div>
   

      </section>

      {/* Luxury Living Section */}
    <section className="py-20">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-5xl font-semibold mb-4">Its Luxury Living</h2>

    <div className="flex items-center justify-center mb-8">
      <span className="text-4xl font-semibold">Embraced by</span>
      
      <div className="mx-4 w-24 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md border">
        <img
          src={nature}
          alt="Nature"
          className="w-full h-full object-cover"
        />
      </div>

      <span className="text-4xl font-semibold">Nature.</span>
    </div>

    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Oakland Greens offers more than a home—it's a lifestyle. Crafted with precision and
      surrounded by nature, each farmhouse reflects your unique style, blending luxury and
      tranquility in perfect harmony.
    </p>

   <div className="flex items-center justify-center">
  <div className="flex items-center bg-gray-100 rounded-2xl overflow-hidden shadow-sm px-2">
    <input 
      type="email" 
      placeholder="Your Email Address" 
      className="bg-transparent px-6 py-2 focus:outline-none w-64 text-sm placeholder-gray-500"
    />
    <button className="bg-black text-white px-8 py-3 text-sm font-medium rounded-2xl hover:bg-gray-800 transition">
      Stay Updated
    </button>
  </div>
</div>

  </div>
</section>

      {/* Properties Section with Smooth Slider */}
           <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
         <div className="flex justify-center mb-8 relative w-54 h-50">
  {/* Image */}
  <img src={luxury} alt="" className="rounded-lg" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
</div>

       



          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-4xl font-light mb-4">Explore Our Luxury<br />Farmhouses.</h2>
            </div>
            <div className="text-right">
              <p className="text-gray-600 mb-2">Exclusive Luxury Farmhouses</p>
              <p className="text-gray-600">Crafted for You.</p>
            </div>
          </div>

          {/* Smooth Property Slider */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {properties.map((property, index) => (
                <div key={property.id} className="flex-shrink-0 w-1/4 px-3">
                  <div className="relative group cursor-pointer h-80">
                    <div className={`h-full bg-gradient-to-br ${property.gradient} rounded-2xl overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <img 
                        src={property.image} 
                        alt={property.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${property.gradient} opacity-60`}></div>
                      
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-2xl font-light mb-2">{property.price}</div>
                        <h3 className="text-lg font-semibold mb-1">{property.name}</h3>
                        <div className="flex space-x-3 text-sm opacity-90 mb-2">
                          <span>{property.bedrooms} bed</span>
                          <span>{property.bathrooms} bath</span>
                        </div>
                      </div>
                      
                      <button className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition opacity-0 group-hover:opacity-100">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                    
                    {currentSlide === index && (
                      <div className="mt-4 transform transition-all duration-300">
                        <p className="text-gray-600 text-sm">{property.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105"
              disabled={isTransitioning}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105"
              disabled={isTransitioning}
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-black w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Living Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Exceptional Living Begins<br />with Every Detail.</h2>
            <p className="text-gray-600">Discover the Details That Make Every Oakland Greens Home a Masterpiece.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
                <p className="text-gray-600">Our farmhouses are located in peaceful, private areas, giving you the perfect escape while still being close to modern conveniences. Enjoy the best of nature and luxury combined.</p>
              </div>
              
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">Modern Comfort</h3>
                <p className="text-gray-600">Every home features state-of-the-art technology and premium finishes for ultimate comfort.</p>
              </div>
              
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">State-of-the-Art Amenities</h3>
                <p className="text-gray-600">From infinity pools to smart home systems, every amenity is designed for luxury living.</p>
              </div>
              
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
                <p className="text-gray-600">Surrounded by pristine landscapes and designed to complement natural surroundings.</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-400 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
   <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-5xl font-normal leading-tight">
                Discover insights,<br />
                trends, and inspiration.
              </h2>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center text-sm font-medium">
              View all <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Featured Article */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=450&fit=crop"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-pink-500/10 to-blue-400/30"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="bg-black text-white px-4 w-32 py-2 rounded-full text-sm   mb-6">Must Read</span>
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
            </div>
          </div>

          {/* Bottom Articles Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI and Automation Article */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden">
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
            </div>

            {/* Sustainable Materials Article */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden">
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
            </div>

            {/* Minimalism Article */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl mb-6 overflow-hidden">
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

   

<section className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${footer_back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Second layer - Two smaller images */}
  <div className="absolute inset-0 flex items-end justify-center ">
    <div className="flex space-x-8">
      {/* Left smaller image */}
      <img 
        src={footer} // Replace with your second image variable
        alt="House 1"
        className="w-82 h-full flex align-end object-cover rounded-lg opacity-80"
      />
     
    </div>
  </div>
  
  {/* Top layer - Text content */}
  <div className="relative z-10 text-center text-white px-4">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
      Your dream <br />
      home awaits.
    </h2>
    
    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
      Whether you're exploring our homes or envisioning 
      something custom, we're here to bring your dream to life.
    </p>
    
    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
      Get In Touch
    </button>
  </div>
  
  {/* Footer positioned at bottom of this section */}
  <footer className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 text-white py-8 z-20">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex space-x-8">
        <a href="#" className="hover:text-gray-300 transition decoration-none">Contact</a>
        <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300 transition">Terms</a>
      </div>
      <div className="text-sm text-gray-400">
        © 2025 Oakland Greens. All rights reserved.
      </div>
    </div>
  </footer>
</section>
    </div>
  );
};

export default OaklandGreensWebsite;