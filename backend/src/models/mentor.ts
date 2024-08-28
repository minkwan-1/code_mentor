import { Schema, model } from "mongoose";

interface IMentor {
  name: string;
  experience: string;
  techStack: string[];
  description: string;
}

const mentorSchema = new Schema<IMentor>({
  name: { type: String, required: true },
  experience: { type: String, required: true },
  techStack: { type: [String], required: true },
  description: { type: String, required: true },
});

const Mentor = model<IMentor>("Mentor", mentorSchema);

export default Mentor;
