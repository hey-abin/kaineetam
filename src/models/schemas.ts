import mongoose from 'mongoose';

// 1. User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  upiId: { type: String },
  bankDetails: {
    accountNumber: String,
    ifsc: String
  },
  balance: { type: Number, default: 0 },
  linkSlug: { type: String, unique: true }, // e.g., 'rahul-2026'
  customMessage: { type: String, default: "Happy Vishu!" },
  photoUrl: String,
  createdAt: { type: Date, default: Date.now }
});

// 2. Gift Schema
const GiftSchema = new mongoose.Schema({
  senderName: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// 3. Withdrawal Schema
const WithdrawalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number, required: true },
  commission: { type: Number, required: true },
  finalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'completed', 'failed'], default: 'pending' },
  razorpayPayoutId: { type: String },
  processedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', UserSchema);
export const Gift = mongoose.model('Gift', GiftSchema);
export const Withdrawal = mongoose.model('Withdrawal', WithdrawalSchema);
