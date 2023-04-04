import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";

export async function appRoutes(app: FastifyInstance) {
  app.post('/quiz/create', async (request) => {
    const createQuizBody = z.object({
      title: z.string(),
      created_by: z.string(),
      questions: z.array(z.object({
        title: z.string(),
        answer: z.array(z.object({
          content: z.string(),
          isCorrect: z.boolean()
        }))
      }))
    })

    const { title, created_by, questions } = createQuizBody.parse(request.body)

    await prisma.quiz.create({
      data: {
        title,
        created_by,
        questions: {
          create: questions.map(question => {
            return {
              title: question.title,
              answers: {
                create: question.answer.map(answer => {
                  return {
                    content: answer.content,
                    isCorrect: answer.isCorrect
                  }
                })
              }
            }
          })
        }
      }
    })
  })

  app.get('/quiz', async () => {
    const createdQuizzes = await prisma.quiz.findMany()
    
    return createdQuizzes
  })
}