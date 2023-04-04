-- CreateTable
CREATE TABLE "quiz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_by" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,
    CONSTRAINT "question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "quiz" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "question_id" TEXT NOT NULL,
    CONSTRAINT "answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
