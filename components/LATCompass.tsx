
import React, { useState, useEffect } from 'react';
import { CompassAnswers, Property } from '../types';
import { PROPERTIES } from '../constants';
import { generateCompassInsight } from '../services/geminiService';

interface LATCompassProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = [
  {
    id: 'intent',
    title: 'Investment Intent',
    question: 'What is your primary goal?',
    options: ['Capital Appreciation', 'Rental Yield', 'End Use (Self Living)', 'Land Banking', 'Portfolio Allocation']
  },
  {
    id: 'budget',
    title: 'Investment Size',
    question: 'Approximate Investment Size?',
    options: ['₹1–3 Cr', '₹3–6 Cr', '₹6–10 Cr', '₹10–25 Cr', '₹25 Cr+']
  },
  {
    id: 'assetType',
    title: 'Asset Preference',
    question: 'Preferred Asset Type?',
    options: ['Luxury High-Rise', 'Builder Floors', 'Plots / Land', 'Commercial / Office', 'Ready to Move']
  },
  {
    id: 'holdingPeriod',
    title: 'Holding Period',
    question: 'Holding Period Before Exit?',
    options: ['1–2 Years', '3–5 Years', '5–10 Years', '10+ Years']
  },
  {
    id: 'riskAppetite',
    title: 'Risk Appetite',
    question: 'Risk Appetite?',
    options: ['Conservative', 'Balanced', 'Aggressive']
  }
];

const LATCompass: React.FC<LATCompassProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<CompassAnswers>({
    intent: '', budget: '', assetType: '', holdingPeriod: '', riskAppetite: ''
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [results, setResults] = useState<Property[]>([]);
  const [aiInsight, setAiInsight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVerified) {
      calculateResults();
    }
  }, [isVerified]);

  if (!isOpen) return null;

  const handleOptionSelect = (opt: string) => {
    const key = STEPS[step].id;
    setAnswers(prev => ({ ...prev, [key]: opt }));
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    alert("LAT-SECURE: Simulated OTP sent to your device. Use code 123456.");
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      setIsVerified(true);
    } else {
      alert("Invalid Code");
    }
  };

  const calculateResults = async () => {
    setIsLoading(true);
    // Weighted Matching Algorithm
    const scoredProperties = PROPERTIES.map(p => {
      let score = 0;
      // Budget Match (30%)
      if (answers.budget === '₹1–3 Cr' && p.ticketSizeCr <= 3.5) score += 30;
      else if (answers.budget === '₹3–6 Cr' && p.ticketSizeCr > 3 && p.ticketSizeCr <= 6.5) score += 30;
      else if (answers.budget === '₹6–10 Cr' && p.ticketSizeCr > 6 && p.ticketSizeCr <= 11) score += 30;
      else if (p.ticketSizeCr > 10) score += 30;

      // Risk Match (20%)
      if (answers.riskAppetite === p.riskRating) score += 20;

      // Intent Match (CAGR/Yield) (20%)
      if (answers.intent === 'Capital Appreciation' && p.expectedCAGR > 12) score += 20;
      if (answers.intent === 'Rental Yield' && p.expectedYield > 3.5) score += 20;

      // Market Momentum (15%)
      score += (p.marketMomentumScore / 10) * 15;

      // Exit Liquidity (15%)
      score += (p.exitLiquidityScore / 10) * 15;

      return { ...p, finalScore: score };
    }).sort((a, b) => (b as any).finalScore - (a as any).finalScore);

    const topMatches = scoredProperties.slice(0, 5);
    setResults(topMatches);

    // AI Insight
    const insight = await generateCompassInsight(answers, topMatches[0]);
    setAiInsight(insight);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-[#1a1a1a] text-white overflow-y-auto animate-in fade-in duration-500 flex flex-col">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-neutral-800 w-full">
        <div 
          className="h-full bg-[#c5a059] transition-all duration-700" 
          style={{ width: `${((step + 1) / (STEPS.length + 1)) * 100}%` }}
        />
      </div>

      <div className="p-8 md:p-16 flex justify-between items-center border-b border-white/5">
        <span className="text-xl serif font-bold tracking-[0.3em]">LAT COMPASS™</span>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full py-20 px-4">
        {!showLeadForm ? (
          <div className="animate-in slide-in-from-bottom-12 duration-700">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#c5a059] mb-4 block">Step {step + 1} of {STEPS.length}</span>
            <h2 className="text-4xl md:text-6xl font-bold serif mb-16 leading-tight">{STEPS[step].question}</h2>
            <div className="grid md:grid-cols-1 gap-4">
              {STEPS[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect(opt)}
                  className="group text-left p-8 border border-white/10 hover:border-[#c5a059] hover:bg-white/5 transition-all flex justify-between items-center"
                >
                  <span className="text-lg md:text-xl font-light uppercase tracking-widest">{opt}</span>
                  <div className="w-6 h-px bg-[#c5a059] group-hover:w-12 transition-all"></div>
                </button>
              ))}
            </div>
          </div>
        ) : !isVerified ? (
          <div className="animate-in fade-in duration-1000">
            <h2 className="text-4xl serif mb-12 italic text-center">Identity Verification</h2>
            <div className="max-w-md mx-auto bg-white/5 p-10 border border-white/10 space-y-8">
              {!otpSent ? (
                <div className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#c5a059]" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#c5a059]" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#c5a059]" />
                  <button onClick={handleSendOtp} className="w-full py-5 bg-[#c5a059] text-white font-bold text-[10px] tracking-[0.4em] uppercase">Authorize & Secure</button>
                </div>
              ) : (
                <div className="space-y-6 text-center">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">Enter the 6-digit code sent to your phone</p>
                  <input 
                    type="text" 
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-6 text-4xl text-center outline-none tracking-[0.5em] focus:border-[#c5a059]" 
                  />
                  <button onClick={handleVerifyOtp} className="w-full py-5 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase">Verify Access</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-1000 pb-32">
            <div className="mb-20 text-center">
               <h2 className="text-5xl font-bold serif mb-6 italic">Strategic Recommendations</h2>
               <div className="bg-[#c5a059]/10 border border-[#c5a059]/20 p-8 rounded-sm text-left max-w-3xl mx-auto">
                 <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059] mb-4">AI Investment Insight</p>
                 <p className="text-sm font-light leading-relaxed italic">
                   {isLoading ? "Analyzing market momentum and building your thesis..." : aiInsight}
                 </p>
               </div>
            </div>

            <div className="space-y-12">
              {results.map((p, idx) => (
                <div key={p.id} className="grid md:grid-cols-5 gap-0 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                  <div className="md:col-span-2 h-64 md:h-auto overflow-hidden">
                    <img src={p.image} className="w-full h-full object-cover grayscale-[0.5]" />
                  </div>
                  <div className="md:col-span-3 p-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[9px] font-bold tracking-widest text-neutral-500">MATCH #{idx+1}</span>
                      <span className="text-[#c5a059] text-[9px] font-bold tracking-[0.3em] uppercase">{p.riskRating} RISK</span>
                    </div>
                    <h3 className="text-3xl font-bold serif mb-2">{p.name}</h3>
                    <p className="text-xs text-neutral-400 mb-8 uppercase tracking-widest">{p.location}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-8 border-b border-white/5">
                      <div>
                        <p className="text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Expected Yield</p>
                        <p className="text-sm font-bold">{p.expectedYield}% p.a.</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Expected CAGR</p>
                        <p className="text-sm font-bold">{p.expectedCAGR}%</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Liquidity</p>
                        <p className="text-sm font-bold">{p.exitLiquidityScore}/10</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-neutral-500 uppercase tracking-widest mb-1">Entry Price</p>
                        <p className="text-sm font-bold">₹{p.pricePerSqFt}/ft²</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 py-4 border border-[#c5a059] text-[#c5a059] text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-white transition-all">Download Thesis</button>
                      <button className="flex-1 py-4 bg-[#c5a059] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Allocate Capital</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LATCompass;
