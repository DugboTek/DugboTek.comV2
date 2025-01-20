import { motion } from 'framer-motion'
import SystemAnalysisCard from './SystemAnalysisCard'
import IntegrationCard from './IntegrationCard'
import AIEnhancementCard from './AIEnhancementCard'
import ResultsCard from './ResultsCard'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-hero-title font-bold leading-hero text-clay-text max-w-hero tracking-[-0.02em] text-center mx-auto">
          Automate Your Business
          <br />
          with Intelligent Solutions
        </h1>
        <p className="text-hero-subtitle leading-subtitle text-clay-subtext max-w-subtitle mt-6 text-center mx-auto">
          Transform your operations with our AI-powered automation platform. Analyze, integrate, and optimize your business processes.
        </p>

        <div className="relative mt-20 min-h-[600px] md:min-h-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative h-[800px]">
            {/* Cards with consistent spacing */}
            <div className="relative md:top-[160px] z-10 h-[80px]">
              <SystemAnalysisCard className="w-full max-w-[250px] mx-auto" />
            </div>
            <div className="relative md:top-[400px] z-10 h-[80px]">
              <IntegrationCard className="w-full max-w-[250px] mx-auto" />
            </div>
            <div className="relative md:top-[160px] z-10 h-[80px]">
              <AIEnhancementCard className="w-full max-w-[250px] mx-auto" />
            </div>
            <div className="relative md:top-[400px] z-10 h-[80px]">
              <ResultsCard className="w-full max-w-[250px] mx-auto" />
            </div>

            {/* Connecting Lines - Hidden on mobile */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                {/* Analysis to Integration */}
                <motion.path
                  d="M250 200 C350 200, 350 440, 450 440"
                  className="stroke-[3]"
                  stroke="rgb(99, 179, 237)"
                  strokeDasharray="6 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                />
                
                {/* Integration to AI */}
                <motion.path
                  d="M450 440 C550 440, 650 200, 750 200"
                  className="stroke-[3]"
                  stroke="rgb(129, 140, 248)"
                  strokeDasharray="6 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                />
                
                {/* AI to Results */}
                <motion.path
                  d="M750 200 C850 200, 850 440, 950 440"
                  className="stroke-[3]"
                  stroke="rgb(34, 197, 94)"
                  strokeDasharray="6 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                />

                {/* Debug Grid */}
                <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="0" y1="440" x2="1200" y2="440" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="250" y1="0" x2="250" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="450" y1="0" x2="450" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="750" y1="0" x2="750" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="950" y1="0" x2="950" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero