
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  useEffect(() => {
    // Track page view
    trackEvent('thank_you_page_view');
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleCalendlyClick = () => {
    trackEvent('calendly_click');
    // In a real implementation, this would open Calendly
    window.open('https://calendly.com', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 text-neon-teal">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl mb-8">
              Your quote request has been submitted successfully. A licensed agent will contact you shortly to discuss your options.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
              <ol className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-teal text-charcoal flex items-center justify-center font-bold mr-3">1</span>
                  <span>You'll receive a confirmation email with your quote details.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-teal text-charcoal flex items-center justify-center font-bold mr-3">2</span>
                  <span>A licensed agent will contact you within 24 hours to discuss your options.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-teal text-charcoal flex items-center justify-center font-bold mr-3">3</span>
                  <span>You'll get personalized quotes based on your specific needs and budget.</span>
                </li>
              </ol>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Want to Schedule a Specific Time?</h3>
              <p className="mb-4">
                If you'd prefer to schedule a specific time to speak with an agent, you can book a slot directly on our calendar.
              </p>
              <Button 
                onClick={handleCalendlyClick}
                className="cta-button"
              >
                Schedule a Call
              </Button>
            </div>
            
            <div>
              <p className="text-gray-600 mb-4">Have questions or need immediate assistance?</p>
              <p className="font-medium">Call us at (800) 555-1234</p>
            </div>
            
            <div className="mt-12">
              <Link to="/" className="text-neon-teal hover:underline">
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
