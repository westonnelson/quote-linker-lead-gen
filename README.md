
# QuoteLinker - Life Insurance Lead Generation Platform

![QuoteLinker Logo](/public/lovable-uploads/c14ed647-02cd-418a-bf61-088abc275089.png)

QuoteLinker is a modern, high-conversion life insurance lead generation web application designed to connect potential customers with licensed insurance agents.

## Features

- **Mobile-First Design**: Fully responsive experience across all devices
- **Multi-Step Quote Form**: Streamlined, user-friendly quote request flow
- **Lead Management**: Capture and store leads for follow-up
- **Blog/Content Platform**: SEO-ready article platform for content marketing
- **Agent/Admin Portals**: Scaffolded dashboards for future development
- **Email Integrations**: Ready for Resend/Postmark for automated emails
- **CRM Integration**: HubSpot integration capabilities

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router 
- **State Management**: React Query & React Context
- **UI Components**: shadcn/ui component library
- **Storage**: Local storage (for development mode)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quotelinker.git
cd quotelinker
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```
# Development vs Production mode
NODE_ENV=development

# HubSpot API (when ready)
HUBSPOT_API_KEY=your_hubspot_api_key
HUBSPOT_PORTAL_ID=your_hubspot_portal_id
HUBSPOT_FORM_ID=your_hubspot_form_id

# Email service (Resend or Postmark)
RESEND_API_KEY=your_resend_api_key
# or
POSTMARK_API_KEY=your_postmark_api_key

# Google Analytics
GA_MEASUREMENT_ID=your_ga_measurement_id
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

## Project Structure

```
quotelinker/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── forms/          # Form components
│   │   └── ui/             # UI components
│   ├── lib/                # Utilities
│   ├── pages/              # Page components
│   └── types/              # TypeScript type definitions
├── .env.local              # Environment variables (create this file)
└── README.md               # Project documentation
```

## Development Mode

In development mode, form submissions are stored in local storage instead of being sent to external services. This allows for testing without setting up API keys.

To view stored leads in development mode:
1. Open the browser's developer console
2. Run: `JSON.parse(localStorage.getItem('quotelinker_leads'))`

## Deployment

The application is ready to be deployed to Vercel:

1. Connect your GitHub repository to Vercel
2. Add the required environment variables in the Vercel project settings
3. Deploy the application

## Future Enhancements

- **Stripe Integration**: For agent subscriptions and pay-per-lead models
- **Authentication**: Agent/admin login with Clerk or Supabase
- **CMS Integration**: For blog content management
- **A/B Testing**: Infrastructure for conversion rate optimization
- **Advanced Analytics**: Detailed lead and conversion tracking

## License

This project is proprietary and confidential.

## Contact

For any questions or support, please contact support@quotelinker.com.
