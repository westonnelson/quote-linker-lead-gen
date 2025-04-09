
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This is a scaffold for the future agent portal
const Agent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // In a real implementation, this would check for authentication status
    // For now, just simulate authentication after a timeout
    const timer = setTimeout(() => {
      setIsAuthenticated(false); // Set to false to show login form
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    setIsAuthenticated(true);
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Agent Portal</h1>
            <p className="text-xl mb-8">Loading...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-teal mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Agent Login</h1>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="agent@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-input"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Remember me</span>
                    </label>
                    
                    <a href="#" className="text-sm text-neon-teal hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  
                  <button type="submit" className="w-full cta-button">
                    Sign In
                  </button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account? <a href="#" className="text-neon-teal hover:underline">Contact admin</a>
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">This is a scaffold for the future agent portal.</p>
                <p>
                  <Link to="/" className="text-neon-teal hover:underline">
                    Return to Home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Agent Dashboard</h1>
            <div className="flex items-center">
              <span className="mr-4">Welcome, Agent</span>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Sign Out
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">My Leads</h3>
              <p className="text-3xl">24</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Conversion Rate</h3>
              <p className="text-3xl">32.5%</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Commission</h3>
              <p className="text-3xl">$4,238</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">New lead assigned: John Smith</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Policy #12345 approved</p>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Follow-up reminder: Sarah Johnson</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Upcoming Calls</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-neon-teal pl-4">
                    <p className="font-medium">Michael Davis</p>
                    <p className="text-sm text-gray-500">Today, 2:00 PM</p>
                  </div>
                  
                  <div className="border-l-4 border-neon-teal pl-4">
                    <p className="font-medium">Jennifer Wilson</p>
                    <p className="text-sm text-gray-500">Tomorrow, 10:30 AM</p>
                  </div>
                  
                  <div className="border-l-4 border-neon-teal pl-4">
                    <p className="font-medium">Robert Thompson</p>
                    <p className="text-sm text-gray-500">Sep 15, 3:15 PM</p>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2 border border-neon-teal text-neon-teal rounded-lg hover:bg-neon-teal hover:text-charcoal transition-colors">
                  View Calendar
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">This is a scaffold for the future agent dashboard.</p>
            <p>
              <Link to="/" className="text-neon-teal hover:underline">
                Return to Home
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agent;
