import { useState } from "react";
import { motion } from "motion/react";
import { User, Phone, Landmark, CreditCard, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    upiId: "",
    accountNumber: "",
    ifsc: ""
  });

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.phone)) return alert("Please fill in your details.");
    if (step === 1) setStep(2);
    else {
      // Final registration logic
      alert("Registration successful! Welcome to Digital Vishu Kaineetam.");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-8 border-[#FFA500]"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#5D4037]">Join the Celebration</h2>
          <p className="text-gray-500 mt-2">Step {step} of 2: {step === 1 ? "Personal Info" : "Payout Details"}</p>
        </div>

        <div className="space-y-6">
          {step === 1 ? (
            <>
              <div>
                <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter phone number"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">UPI ID</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    value={formData.upiId}
                    onChange={(e) => setFormData({...formData, upiId: e.target.value})}
                    placeholder="example@upi"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-300 text-xs font-bold uppercase">OR BANK DETAILS</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wider">Account Number</label>
                <div className="relative">
                  <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                    placeholder="Enter account number"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FFA500] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
            </>
          )}

          <button 
            onClick={handleNext}
            className="w-full bg-[#FFA500] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#FF8C00] transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            {step === 1 ? "Next Step" : "Complete Registration"} <ArrowRight />
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs pt-4">
            <ShieldCheck size={14} /> Your data is encrypted and secure.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
