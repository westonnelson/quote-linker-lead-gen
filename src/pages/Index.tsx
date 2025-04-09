
import React from 'react';
import QuoteForm from '@/components/QuoteForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/utils';

const benefits = [
  {
    title: "Compare Multiple Quotes",
    description: "We work with dozens of top-rated insurance companies to find you the best rates available.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-neon-teal">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Licensed Experts",
    description: "Our agents are licensed professionals who care about finding you the right coverage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-neon-teal">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Fast & Free",
    description: "There's no cost to you, and our quote process takes just a few minutes to complete.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-neon-teal">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    name: "Sarah J.",
    location: "Denver, CO",
    quote: "QuoteLinker found me a rate $23 less per month than what I was paying. The process was incredibly simple.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael T.",
    location: "Atlanta, GA",
    quote: "I was hesitant about life insurance, but my agent walked me through everything. So glad I finally got coverage.",
    image: "/placeholder.svg"
  },
  {
    name: "Lisa R.",
    location: "Phoenix, AZ",
    quote: "The follow-up was quick and I had my policy in hand within days. Highly recommend this service!",
    image: "/placeholder.svg"
  }
];

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      trackEvent('scroll_to_form_click');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Life Insurance <span className="text-neon-teal">Made Simple</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Get connected with a licensed agent and receive personalized quotes 
                  tailored to your specific needs.
                </p>
                <button 
                  onClick={scrollToForm}
                  className="cta-button text-lg"
                >
                  Get My Free Quote
                </button>
              </div>
              
              <div className="md:w-1/2" id="quote-form">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose <span className="text-neon-teal">QuoteLinker</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-neon-teal text-charcoal flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Complete the Form</h3>
                <p className="text-gray-600">Answer a few quick questions to help us understand your needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-neon-teal text-charcoal flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Get Matched</h3>
                <p className="text-gray-600">We connect you with a licensed agent specializing in your coverage needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-neon-teal text-charcoal flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Save Money</h3>
                <p className="text-gray-600">Compare personalized quotes and choose the best option for you.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={scrollToForm}
                className="cta-button text-lg"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Protect Your Family's Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards financial security. It only takes a few minutes to get your personalized quote.
            </p>
            <button 
              onClick={scrollToForm}
              className="cta-button text-lg"
            >
              Get My Free Quote Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
