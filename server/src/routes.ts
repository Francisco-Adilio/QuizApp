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
    return await prisma.quiz.findMany()
  })

  app.delete('/quiz/:id/delete', async (request) => {
    const deleteQuizParams = z.object({
      id: z.string().uuid()
    })

    const { id } = deleteQuizParams.parse(request.params)

    const deleteQuestionsID = await prisma.question.findMany({
      where: {
        quiz_id: id
      }
    })

    const deleteAnswers = prisma.answer.deleteMany({
      where: {
        question_id: {
          in: deleteQuestionsID.map((questionID) => {
            return questionID.id.toString()
          })
        }
      }
    })

    const deleteQuestions = prisma.question.deleteMany({
      where: {
        quiz_id: id
      }
    })

    const deleteQuiz = prisma.quiz.delete({
      where: {
        id: id
      }
    })

    await prisma.$transaction([deleteAnswers, deleteQuestions, deleteQuiz])

  })

  app.get('/question/:quiz_id/:index/get', async (request) => {
    const getQuestionParams = z.object({
      quiz_id: z.string(),
      index: z.string()
    })
    const { quiz_id, index } = getQuestionParams.parse(request.params)
    

    const question = await prisma.question.findMany({
      where: {
        quiz_id: quiz_id
      }
    })

    const answers = await prisma.answer.findMany({
      where: {
        question_id: question[index].id
      },
      select: {
        id: true,
        content: true,
        question_id: true
      }
    })

    return [question[index], answers]
  })
}