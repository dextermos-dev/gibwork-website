import React from 'react';

export const EnhancedFeatures: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900/50 border-y border-slate-800 my-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="text-emerald-400 font-bold text-lg mb-2">⚡ Instant Sign-Up</div>
          <p className="text-slate-400 text-sm">Seamless authentication with Email, Google & GitHub OAuth via Clerk — no wallet required to get started.</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="text-cyan-400 font-bold text-lg mb-2">📱 Mobile App Ready</div>
          <p className="text-slate-400 text-sm">Track bounties and receive push notifications on iOS and Android wherever you are.</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800">
          <div className="text-teal-400 font-bold text-lg mb-2">💰 Automated USDC Payouts</div>
          <p className="text-slate-400 text-sm">Instant smart contract settlement on Solana & Base directly to your personal wallet.</p>
        </div>
      </div>
    </section>
  );
};
