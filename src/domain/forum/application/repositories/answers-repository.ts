import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRespoitory {
  create(answer: Answer): Promise<void>
}
