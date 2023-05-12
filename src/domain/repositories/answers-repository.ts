import { Answer } from "../entities/answer";

export interface AnswersRespoitory {
  create(answer: Answer): Promise<void>
}