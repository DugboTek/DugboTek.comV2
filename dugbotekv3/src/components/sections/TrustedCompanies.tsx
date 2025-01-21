import React from 'react';

// Import company logos
import microsoft from '../../assets/connections/Microsoft_logo.svg.webp';
import openai from '../../assets/connections/open-ai-logo.png';
import salesforce from '../../assets/connections/salesforce-seeklogo.png';
import googleWorkspace from '../../assets/connections/Google_Workspace_Logo.svg.png';
import hightouch from '../../assets/connections/hightouch.svg';
import replit from '../../assets/connections/replit.svg';
import square from '../../assets/connections/square.svg';
import anthropic from '../../assets/connections/anthropic.svg';
import hubspot from '../../assets/connections/hubspot.svg';
import dropbox from '../../assets/connections/dropbox.svg';
import notion from '../../assets/connections/notion.svg';

const companies = [
  { name: 'Microsoft', logo: microsoft },
  { name: 'OpenAI', logo: openai },
  { name: 'Salesforce', logo: salesforce },
  { name: 'Google Workspace', logo: googleWorkspace },
  { name: 'Hightouch', logo: hightouch },
  { name: 'Replit', logo: replit },
  { name: 'Square', logo: square },
  { name: 'Anthropic', logo: anthropic },
  { name: 'HubSpot', logo: hubspot },
  { name: 'Dropbox', logo: dropbox },
  { name: 'Notion', logo: notion },
];

export const TrustedCompanies: React.FC = () => {
  return (
    <div className="mt-24 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-indigo-100">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-12 text-clay-text">
            CONNECT WITH A LIBRARY OF 2000+ EXISTING BUSINESS TOOLS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="w-full h-16 flex items-center justify-center px-4"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 
                    ${company.name === 'Microsoft' ? 'h-8' : 'h-full'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies; 