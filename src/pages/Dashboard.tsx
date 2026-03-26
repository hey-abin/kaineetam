import { useState } from "react";
import { motion } from "motion/react";
import { Wallet, Users, ArrowUpRight, History, Copy, Check } from "lucide-react";
import { triggerGoldenRain } from "../lib/animations";

export const Dashboard = () => {
  const [balance, setBalance] = useState(12500);
  const [copied, setCopied] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText("https://vishu.gift/rahul");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWithdraw = () => {
    setIsWithdrawing(true);
    // Simulate API call
    setTimeout(() => {
      setIsWithdrawing(false);
      triggerGoldenRain();
      alert("Withdrawal initiated! Funds will be settled to your UPI account shortly.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-[#5D4037]">Namaskaram, Rahul!</h1>
            <p className="text-gray-600">Here's your Vishu Kaineetam summary.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={copyLink}
              className="flex items-center gap-2 bg-white border-2 border-[#FFA500] text-[#FFA500] px-4 py-2 rounded-xl font-bold hover:bg-[#FFF8E1] transition-all"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied!" : "Share Link"}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="opacity-80 mb-2 uppercase tracking-wider text-sm font-bold">Total Kaineetam</p>
              <h2 className="text-5xl font-bold mb-8">₹{balance.toLocaleString()}</h2>
              <button 
                onClick={handleWithdraw}
                disabled={isWithdrawing}
                className="w-full bg-white text-[#FF8C00] py-4 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isWithdrawing ? "Processing..." : <><ArrowUpRight /> Withdraw Now</>}
              </button>
              <p className="text-xs mt-4 opacity-70 text-center">*Platform commission (2%) will be deducted.</p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full" />
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#FFA500] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#FFA500] mb-4">
                <Users />
                <span className="font-bold uppercase tracking-wider text-sm">Total Senders</span>
              </div>
              <h3 className="text-4xl font-bold text-[#5D4037]">24</h3>
            </div>
            <p className="text-gray-500 text-sm">You received gifts from 12 new people this week.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#FFA500] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#FFA500] mb-4">
                <History />
                <span className="font-bold uppercase tracking-wider text-sm">Last Withdrawal</span>
              </div>
              <h3 className="text-4xl font-bold text-[#5D4037]">₹4,200</h3>
            </div>
            <p className="text-gray-500 text-sm">Settled on March 20, 2026</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-[#5D4037]">Recent Gifts</h3>
            <button className="text-[#FFA500] font-bold hover:underline">View All</button>
          </div>
          <div className="divide-y divide-gray-50">
            <GiftItem name="Anya" amount={1000} date="Jan 17, 2023" message="Happy Vishu Rahul!" />
            <GiftItem name="Manoj" amount={500} date="Jan 17, 2023" message="Enjoy your Kaineetam!" />
            <GiftItem name="Geetha" amount={2000} date="Jan 17, 2023" message="Wishing you a great year ahead." />
          </div>
        </div>
      </div>
    </div>
  );
};

const GiftItem = ({ name, amount, date, message }: any) => (
  <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#FFA500] font-bold text-xl">
        {name[0]}
      </div>
      <div>
        <h4 className="font-bold text-[#5D4037]">{name} sent Kaineetam</h4>
        <p className="text-gray-500 text-sm italic">"{message}"</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-xl font-bold text-[#FFA500]">+₹{amount}</p>
      <p className="text-gray-400 text-xs">{date}</p>
    </div>
  </div>
);
