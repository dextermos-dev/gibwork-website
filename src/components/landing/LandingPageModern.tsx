import React from 'react';

export const LandingPageModern: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <header className="max-w-7xl mx-auto flex justify-between items-center py-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Gibwork 2.0
          </span>
          <span className="text-xs uppercase bg-teal-500/20 text-teal-300 px-2 py-1 rounded border border-teal-500/30">
            Mobile + Delivery Ready
          </span>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Earn USDC for Open-Source & Web3 Delivery
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          Direct payouts, real-time tracking, and mobile integration for global developer challenges.
        </p>
      </main>
    </div>
  );
};
