import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ParallaxBackground } from "../components/ParallaxBackground";
import { Gift, Wallet, Link as LinkIcon, ArrowRight, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      <ParallaxBackground />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-40">
          <FeatureCard 
            icon={<UserPlus className="w-8 h-8 text-[#FFA500]" />}
            title="Register"
            description="Sign up with your UPI ID and Bank details to start receiving Kaineetam."
          />
          <FeatureCard 
            icon={<LinkIcon className="w-8 h-8 text-[#FFA500]" />}
            title="Share Link"
            description="Create your personalized Vishu link and share it with family and friends."
          />
          <FeatureCard 
            icon={<Wallet className="w-8 h-8 text-[#FFA500]" />}
            title="Withdraw"
            description="Receive gifts directly and withdraw them to your bank account instantly."
          />
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-4xl font-bold text-[#5D4037] mb-8">Ready to celebrate Vishu?</h2>
          <Link 
            to="/register"
            className="inline-flex items-center gap-2 bg-[#FFA500] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#FF8C00] transition-all shadow-lg hover:scale-105"
          >
            Create Your Kaineetam Link <ArrowRight />
          </Link>
        </div>
      </div>

      <footer className="bg-[#5D4037] text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg opacity-80 italic">"Wishing you a prosperous and blessed Vishu filled with the golden glow of Kanikkonna."</p>
          <div className="mt-8 flex justify-center gap-6 opacity-60">
            <span>© 2026 Digital Vishu Kaineetam</span>
            <span>Made with ❤️ in Kerala</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-[#FFA500] flex flex-col items-center text-center"
  >
    <div className="mb-6 bg-[#FFF8E1] p-4 rounded-2xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#5D4037] mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
