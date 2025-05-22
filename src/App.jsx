import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import home from './assets/home.png'

// Adding Tailwind CSS
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://cdn.tailwindcss.com';
document.head.appendChild(style);

const OaklandGreensWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(0);

  const properties = [
    {
      id: 1,
      name: "Hillside Villa",
      price: "$140,000",
      image: {home},
      description: "Modern luxury villa with panoramic views"
    },
    { 
      id: 2,
      name: "Aurora Retreat",
      price: "$3,500,000",
      bedrooms: 8,
      bathrooms: 6.5,
      image: {home},
      description: "A sanctuary with timeless design at exceptional craftsmanship to inspire your next chapter."
    },
    {
      id: 3,
      name: "Sunset Haven",
      price: "$2,100,000",
      image: "/api/placeholder/400/300",
      description: "Contemporary design meets natural beauty"
    }
  ];

  const blogPosts = [
    {
      title: "The Rise of Boutique Architecture in Luxury Living",
      description: "Discover how boutique architecture is redefining luxury living with its focus on uniqueness, personalization, and timeless design.",
      author: "Emily Chambers",
      role: "Marketing Consultant",
      category: "Must Read",
      image: "/api/placeholder/400/300"
    },
    {
      title: "The Future of Luxury: AI and Automation in Home Design",
      category: "Technology",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Are Sustainable Materials the Future of Homes?",
      category: "Sustainability",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Exploring Minimalism with a Touch of Luxury",
      category: "Design",
      image: "/api/placeholder/400/300"
    }
  ];

  const faqs = [
    {
      question: "Can I customize the design of a Haven home?",
      answer: "Absolutely. Each Haven home is tailored to reflect your unique vision. From layouts to finishes, we work with you to create a space that perfectly suits your style and needs."
    },
    {
      question: "Where are Oakland Greens located?",
      answer: "Our properties are located in prime locations across the region."
    },
    {
      question: "What is the process for purchasing a Haven home?",
      answer: "Our process involves consultation, design, approval, and construction phases."
    },
    {
      question: "Do you offer fully custom-built homes?",
      answer: "Yes, we specialize in fully custom-built luxury homes."
    },
    {
      question: "How long does it take to complete a home?",
      answer: "Timeline varies based on customization level and size of the project."
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-semibold text-xl">OAKLAND</div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Properties</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-400 to-blue-100 flex items-center justify-center">
        <div className="text-center text-white z-20">
          <h1 className="text-6xl md:text-7xl font-light mb-4">
            Extraordinary<br />
            living begins here.
          </h1>
          <p className="text-lg mb-8 max-w-md mx-auto opacity-90">
            Discover luxury living designed for the ultimate<br />
            living experience with swimming pools and modern<br />
            amenities.
          </p>
        </div>
        
        {/* House Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-96 h-64 bg-white/20 backdrop-blur-sm rounded-t-3xl flex items-end justify-center pb-8">
            <div className="w-80 h-48 bg-gray-100 rounded-lg shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg relative">
                {/* House silhouette */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gray-600 rounded-lg">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-b-16 border-transparent border-b-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Living Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-light mb-4">Its Luxury Living</h2>
          <div className="flex items-center justify-center mb-8">
            <span className="text-4xl font-light">Embraced by</span>
            <div className="mx-4 w-16 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">OAKLAND</span>
            </div>
            <span className="text-4xl font-light">Nature.</span>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Oakland Greens offers more than amenities—it's a lifestyle. Crafted with precision and
            surrounded by nature, each farmhouse reflects your unique style, blending luxury and
            tranquility in perfect harmony.
          </p>
          
          <div className="flex items-center justify-center">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="px-6 py-3 border border-gray-300 rounded-l-full w-64 focus:outline-none focus:border-gray-500"
            />
            <button className="bg-black text-white px-8 py-3 rounded-r-full hover:bg-gray-800 transition">
              Stay Updated
            </button>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-4xl font-light mb-4">Explore Our Luxury<br />Farmhouses.</h2>
            </div>
            <div className="text-right">
              <p className="text-gray-600 mb-2">Exclusive Luxury Farmhouses</p>
              <p className="text-gray-600">Crafted for You.</p>
            </div>
          </div>

          {/* Property Slider */}
          <div className="relative">
            <div className="flex space-x-6 overflow-hidden">
              {properties.map((property, index) => (
                <div key={property.id} className={`flex-shrink-0 w-80 ${index === 1 ? 'w-96' : ''}`}>
                  <div className="relative group cursor-pointer">
                    <div className={`h-64 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg overflow-hidden ${index === 1 ? 'h-80' : ''}`}>
                      {index === 1 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-purple-600 opacity-80"></div>
                      )}
                      <div className="absolute bottom-4 left-4 text-white">
                        {property.price && (
                          <div className="text-2xl font-light mb-2">{property.price}</div>
                        )}
                      </div>
                      {index === 1 && (
                        <button className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition">
                          <ArrowRight size={20} />
                        </button>
                      )}
                    </div>
                    
                    {index === 1 && (
                      <div className="mt-4">
                        <h3 className="text-2xl font-light mb-2">{property.name}</h3>
                        <div className="flex space-x-4 text-sm text-gray-600 mb-2">
                          <span>{property.bedrooms} bedrooms</span>
                          <span>{property.bathrooms} bathrooms</span>
                        </div>
                        <p className="text-gray-600 text-sm">{property.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition">
              <ChevronLeft size={20} />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition">
              <ChevronRight size={20} />
            </button>
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
              </div>
              
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">State-of-the-Art Amenities</h3>
              </div>
              
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
              </div>
              
              <div className="pl-6">
                <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 relative">
                  {/* Interior design placeholder */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-800 to-transparent"></div>
                  <div className="absolute top-1/4 right-1/4 w-32 h-48 bg-amber-100 transform rotate-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-light mb-2">Discover insights,<br />trends, and inspiration.</h2>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center">
              View all <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Article */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg"></div>
                <div>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm">Must Read</span>
                  <h3 className="text-3xl font-light mt-4 mb-4">{blogPosts[0].title}</h3>
                  <p className="text-gray-600 mb-6">{blogPosts[0].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">{blogPosts[0].author}</div>
                        <div className="text-sm text-gray-600">{blogPosts[0].role}</div>
                      </div>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition">
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Articles */}
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg mb-4 overflow-hidden">
                  {index === 0 && <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>}
                  {index === 1 && <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600"></div>}
                  {index === 2 && <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-400"></div>}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm text-white ${
                  index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-green-600' : 'bg-orange-600'
                }`}>
                  {post.category}
                </span>
                <h3 className="text-lg font-medium mt-2 group-hover:text-gray-600 transition">{post.title}</h3>
              </div>
            ))}
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
                  <div className="pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-screen bg-gradient-to-b from-blue-400 to-blue-200 flex items-center justify-center">
        <div className="text-center text-white z-20">
          <h2 className="text-6xl font-light mb-4">
            Your dream<br />
            home awaits.
          </h2>
          <p className="text-lg mb-8 max-w-md mx-auto opacity-90">
            Whether you're exploring our homes or envisioning<br />
            something custom, we're here to bring your dream to life.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center mx-auto">
            Get In Touch <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
        
        {/* Bottom House */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-96 h-48 bg-white rounded-t-3xl shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-3xl relative">
              {/* Modern house design */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gray-600 rounded-t-lg">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-green-800"></div>
                <div className="absolute top-4 right-8 w-6 h-12 bg-green-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-300">Contact</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Oakland Greens. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OaklandGreensWebsite;