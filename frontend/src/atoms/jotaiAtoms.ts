import { atom } from "jotai";
import { MentorForm } from "../types/types";

export const mentorsAtom = atom<MentorForm[]>([]);
