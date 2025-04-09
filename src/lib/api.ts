
import { FormData, Lead } from '../types/form';

// Fallback for local development when no API keys are set
const localSubmitLead = async (data: FormData): Promise<Lead> => {
  console.log("Submitting lead to local storage:", data);
  
  const lead: Lead = {
    ...data,
    id: Math.random().toString(36).substring(2, 15),
    createdAt: new Date().toISOString(),
  };
  
  // Get existing leads or create new array
  const existingLeads = localStorage.getItem('quotelinker_leads');
  const leads: Lead[] = existingLeads ? JSON.parse(existingLeads) : [];
  
  // Add new lead and save back to localStorage
  leads.push(lead);
  localStorage.setItem('quotelinker_leads', JSON.stringify(leads));
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return lead;
};

// Submit lead to HubSpot (fake implementation for now)
const submitToHubSpot = async (data: FormData): Promise<boolean> => {
  console.log("Would submit to HubSpot:", data);
  // This is just a placeholder. In production, you'd make an actual API call to HubSpot
  return true;
};

// Send emails (fake implementation for now)
const sendEmails = async (data: FormData): Promise<boolean> => {
  console.log("Would send emails for:", data);
  // This is just a placeholder. In production, you'd make an actual API call to your email service
  return true;
};

// Main function to submit lead
export const submitLead = async (data: FormData): Promise<{ success: boolean; lead?: Lead; error?: string }> => {
  try {
    // Create the lead object
    const lead = await localSubmitLead(data);
    
    // In production, these would be real API calls
    if (process.env.NODE_ENV === 'production') {
      await Promise.all([
        submitToHubSpot(data),
        sendEmails(data)
      ]);
    }
    
    return { success: true, lead };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "An unknown error occurred" 
    };
  }
};

// Get all leads (for admin dashboard)
export const getLeads = async (): Promise<Lead[]> => {
  // In production, this would fetch from your API or database
  const existingLeads = localStorage.getItem('quotelinker_leads');
  return existingLeads ? JSON.parse(existingLeads) : [];
};

// Mock blog posts data (for /blog page)
export const getBlogPosts = async () => {
  return [
    {
      slug: "understanding-term-life-insurance",
      title: "Understanding Term Life Insurance: A Complete Guide",
      excerpt: "Learn the basics of term life insurance, how it works, and whether it's right for you and your family's needs.",
      date: "2025-02-15",
      coverImage: "/placeholder.svg",
      author: {
        name: "Jane Smith",
        picture: "/placeholder.svg"
      }
    },
    {
      slug: "permanent-vs-term-life-insurance",
      title: "Permanent vs Term Life Insurance: Making the Right Choice",
      excerpt: "Comparing permanent and term life insurance to help you decide which option best fits your financial goals.",
      date: "2025-01-28",
      coverImage: "/placeholder.svg",
      author: {
        name: "Michael Johnson",
        picture: "/placeholder.svg"
      }
    },
    {
      slug: "life-insurance-for-seniors",
      title: "Life Insurance Options for Seniors: It's Not Too Late",
      excerpt: "Exploring the various life insurance options available to seniors and older adults over 65.",
      date: "2025-01-10",
      coverImage: "/placeholder.svg",
      author: {
        name: "Robert Davis",
        picture: "/placeholder.svg"
      }
    }
  ];
};

export const getBlogPostBySlug = async (slug: string) => {
  const posts = await getBlogPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (!post) return null;
  
  // Mock content for the blog post
  return {
    ...post,
    content: `
# ${post.title}

${post.excerpt}

## Introduction

Life insurance is a crucial part of financial planning, providing a safety net for your loved ones in case of the unexpected. This article will guide you through the important aspects of life insurance and help you make informed decisions.

## Key Considerations

When shopping for life insurance, there are several factors to consider:

1. **Coverage amount**: How much financial support will your dependents need?
2. **Term length**: How long do you need coverage for?
3. **Premium costs**: What fits within your budget?
4. **Insurance provider**: Which company offers the best value and service?

## Conclusion

Taking the time to understand your life insurance options is one of the most important steps you can take for your family's financial security. Remember that the right policy is one that fits your specific needs and circumstances.

*This article is for informational purposes only and should not be considered financial advice. Always consult with a licensed insurance professional before making insurance decisions.*
    `
  };
};
