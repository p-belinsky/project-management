import express from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions} from "./inngest/index.js";
import { serve } from "inngest/express";

const app = express();

// Middleware

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.use("/api/inngest", serve({ client: inngest, functions }));

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
