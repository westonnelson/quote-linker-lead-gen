
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLeads } from '@/lib/api';
import { formatPhoneNumber, formatCurrency } from '@/lib/utils';
import { Lead } from '@/types/form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This is a scaffold for the future admin dashboard
const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // In a real implementation, this would check for authentication status
    // For now, just simulate authentication after a timeout
    const timer = setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchLeads = async () => {
        try {
          setIsLoading(true);
          const data = await getLeads();
          setLeads(data);
        } catch (error) {
          console.error('Error fetching leads:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchLeads();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-xl mb-8">Authenticating...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-teal mx-auto"></div>
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
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button className="bg-neon-teal text-charcoal py-2 px-4 rounded-lg">
              Export Data
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Total Leads</h3>
              <p className="text-3xl">{leads.length}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Conversion Rate</h3>
              <p className="text-3xl">28.5%</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Avg. Policy Value</h3>
              <p className="text-3xl">$345K</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Active Agents</h3>
              <p className="text-3xl">12</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Recent Leads</h2>
            
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            ) : leads.length === 0 ? (
              <p className="text-gray-500 py-4">No leads found. Start by generating some test leads.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{lead.firstName} {lead.lastName}</div>
                          <div className="text-sm text-gray-500">{lead.age} yrs, {lead.gender}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>{lead.email}</div>
                          <div className="text-sm text-gray-500">{formatPhoneNumber(lead.phone)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {formatCurrency(lead.coverageAmount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            New Lead
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-neon-teal hover:text-neon-teal hover:underline">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">This is a scaffold for the future admin dashboard.</p>
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

export default Admin;
