import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Digital Vishu Kaineetam API is running" });
  });

  // Razorpay Webhook (Placeholder)
  app.post("/api/webhook/razorpay", (req, res) => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    // Verify signature logic here
    console.log("Webhook received:", req.body);
    res.json({ status: "ok" });
  });

  // Mock Database for Preview
  const mockDb = {
    users: [{ id: "rahul", name: "Rahul", balance: 12500 }],
    withdrawals: [] as any[]
  };

  // Withdrawal API Logic
  app.post("/api/withdraw", async (req, res) => {
    const { userId, amount } = req.body;
    const COMMISSION_PERCENT = 2; // 2% platform fee
    
    // 1. Validation
    if (!userId || !amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid withdrawal amount" });
    }

    const user = mockDb.users.find(u => u.id === userId);
    if (!user || user.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    // 2. Calculation
    const commission = (amount * COMMISSION_PERCENT) / 100;
    const finalAmount = amount - commission;

    // 3. Create Pending Record
    const withdrawalRecord = {
      id: `wth_${Date.now()}`,
      userId,
      amount,
      commission,
      finalAmount,
      status: "pending", // Initial state
      createdAt: new Date()
    };
    mockDb.withdrawals.push(withdrawalRecord);

    // 4. Logic for "Pending" State:
    // We move to 'pending' first to ensure the balance is locked.
    // In a real app, you'd use a DB transaction here.
    user.balance -= amount;

    // 5. Trigger Razorpay Payout (Logic Explanation)
    // Using Razorpay Payouts:
    // - You create a 'Fund Account' for the user using their UPI/Bank details.
    // - You call `razorpay.payouts.create()` with the fund_account_id.
    // - If Razorpay returns success, update status to 'processing'.
    // - Use Webhooks to listen for 'payout.processed' to mark as 'completed'.

    console.log(`[SYSTEM] Withdrawal Pending: ₹${finalAmount} for ${userId}`);

    res.json({ 
      status: "pending", 
      message: "Withdrawal is pending. Funds will be settled within 24 hours.",
      details: withdrawalRecord
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
