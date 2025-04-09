
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm text-gray-300">
              Connecting you with the life insurance coverage you need at rates you can afford.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-neon-teal transition-colors text-sm">Home</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-teal transition-colors text-sm">Blog</Link></li>
              <li><Link to="/agent" className="text-gray-300 hover:text-neon-teal transition-colors text-sm">Agent Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog/understanding-term-life-insurance" className="text-gray-300 hover:text-neon-teal transition-colors text-sm">Term Life Guide</Link></li>
              <li><Link to="/blog/permanent-vs-term-life-insurance" className="text-gray-300 hover:text-neon-teal transition-colors text-sm">Insurance Types</Link></li>
              <li><Link to="/blog/life-insurance-for-seniors" className="text-gray-300 hover:text-neon-teal transition-colors text-sm">Senior Coverage</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                <span className="block">Email:</span>
                <a href="mailto:support@quotelinker.com" className="hover:text-neon-teal transition-colors">support@quotelinker.com</a>
              </li>
              <li className="text-gray-300 text-sm">
                <span className="block">Phone:</span>
                <a href="tel:+18005551234" className="hover:text-neon-teal transition-colors">(800) 555-1234</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} QuoteLinker. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <Link to="/" className="hover:text-neon-teal mr-4 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-neon-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
