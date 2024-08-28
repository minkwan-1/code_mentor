import { Router, Request, Response } from "express";
import Mentor from "../models/mentor";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const mentor = new Mentor(req.body);
  try {
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
});

export default router;
