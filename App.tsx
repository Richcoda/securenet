import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const CyberSecurityWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <FaShieldAlt className="text-3xl mr-2" />
            <h1 className="text-2xl font-bold">SecureNet</h1>
          </div>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-blue-200">Home</a>
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#services" className="hover:text-blue-200">Services</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </nav>
          <div className="space-x-2">
            <a 
              href="/login" 
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100"
            >
              Login
            </a>
            <a 
              href="/signup" 
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Protect Your Digital World</h2>
          <p className="text-xl mb-8">Advanced Cybersecurity Solutions for Businesses and Individuals</p>
          <a 
            href="#services" 
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <FaLock className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p>Comprehensive protection for your network infrastructure</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <FaUserShield className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
              <p>Advanced monitoring and real-time threat identification</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <FaShieldAlt className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p>Expert cybersecurity strategy and risk management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"SecureNet transformed our cybersecurity approach!"</p>
              <p className="font-semibold">- John Doe, CEO TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"Incredible protection and support!"</p>
              <p className="font-semibold">- Jane Smith, CTO InnovateSoft</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"The most reliable security partner we've worked with."</p>
              <p className="font-semibold">- Mike Johnson, Founder StartupShield</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 mb-4 rounded-md border border-gray-300"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 mb-4 rounded-md border border-gray-300"
              />
              <textarea 
                placeholder="Your Message" 
                className="w-full p-3 mb-4 rounded-md border border-gray-300 h-32"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-blue-300"><FaLinkedin className="text-2xl" /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter className="text-2xl" /></a>
            <a href="#" className="hover:text-blue-300"><FaGithub className="text-2xl" /></a>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <p>&copy; 2025 SecureNet. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CyberSecurityWebsite;