import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import mentorRoutes from "./routes/mentors";

const app = express();
const port = 5000; // 서버 포트 설정

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose
  .connect(
    "mongodb+srv://mkwan5741:HEvytCnUlqQOyP3E@code-mentor.spxhs.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// API 엔드포인트
app.use("/api/mentors", mentorRoutes);
