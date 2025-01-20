import React, { useState, useEffect } from 'react';
import emailIcon from '../../images/email.png';
import pdfIcon from '../../images/pdf.png';
import sheetsIcon from '../../images/sheets.png';

const WorkflowDiagram: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < 2 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-clay-background rounded-lg p-8 w-full max-w-md aspect-video relative">
      <div className="flex flex-col justify-center h-full space-y-8">
        {/* Progress Line and Dots */}
        <div className="relative">
          {/* Progress Line */}
          <div className="w-full h-0.5 bg-clay-subtext/20">
            <div 
              className="h-full bg-[#98ff98] transition-all duration-1000"
              style={{ 
                width: `${progress * 50}%`,
              }}
            />
          </div>
          
          {/* Progress Dots */}
          <div className="absolute top-0 left-0 w-full flex justify-between">
            <div className={`w-2 h-2 rounded-full -mt-1 transition-colors duration-300 ${progress >= 0 ? 'bg-[#98ff98]' : 'bg-clay-subtext/20'}`} />
            <div className={`w-2 h-2 rounded-full -mt-1 transition-colors duration-300 ${progress >= 1 ? 'bg-[#98ff98]' : 'bg-clay-subtext/20'}`} />
            <div className={`w-2 h-2 rounded-full -mt-1 transition-colors duration-300 ${progress >= 2 ? 'bg-[#98ff98]' : 'bg-clay-subtext/20'}`} />
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-between items-center">
          <img src={emailIcon} alt="Email" className="h-auto w-auto max-h-12" />
          <img src={pdfIcon} alt="PDF" className="h-auto w-auto max-h-12" />
          <img src={sheetsIcon} alt="Sheets" className="h-auto w-auto max-h-12" />
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram; 