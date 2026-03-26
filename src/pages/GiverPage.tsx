import { useState } from "react";
import { motion } from "motion/react";
import { ParallaxBackground } from "../components/ParallaxBackground";
import { Heart, Send, ShieldCheck, Globe } from "lucide-react";
import { triggerGoldenRain } from "../lib/animations";

export const GiverPage = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    if (!amount || !name) return alert("Please enter your name and amount.");
    setIsPaying(true);
    // Simulate Razorpay Payment
    setTimeout(() => {
      setIsPaying(false);
      triggerGoldenRain();
      alert(`Kaineetam of ₹${amount} sent to Rahul successfully!`);
      setAmount("");
      setName("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      <ParallaxBackground />
      
      <div className="max-w-2xl mx-auto px-4 py-20 -mt-64 relative z-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-[#FFA500]"
        >
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-[#FFF8E1] rounded-full mx-auto mb-6 flex items-center justify-center text-[#FFA500] text-4xl font-bold border-4 border-[#FFA500]">
              R
            </div>
            <h2 className="text-3xl font-bold text-[#5D4037]">Send Kaineetam to Rahul</h2>
            <p className="text-gray-500 mt-2">"May this Vishu bring you joy and prosperity."</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">Your Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">Amount (₹)</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[101, 501, 1001].map((val) => (
                  <button 
                    key={val}
                    onClick={() => setAmount(val.toString())}
                    className={`py-3 rounded-xl font-bold transition-all ${amount === val.toString() ? 'bg-[#FFA500] text-white' : 'bg-[#FFF8E1] text-[#FFA500] hover:bg-[#FFE082]'}`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Or enter custom amount"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">Message (Optional)</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a festive wish..."
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all text-lg h-32 resize-none"
              />
            </div>

            <button 
              onClick={handlePayment}
              disabled={isPaying}
              className="w-full bg-[#FFA500] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#FF8C00] transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
            >
              {isPaying ? "Processing..." : <><Send className="w-6 h-6" /> Send Kaineetam</>}
            </button>

            <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ShieldCheck size={18} /> Secure Payment
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Globe size={18} /> Global Gifting
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
