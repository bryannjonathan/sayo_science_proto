"use client"

import { useState } from "react"

export type QuizData = {
  mcq: {
    question: string
    options: { label: string; text: string }[]
    answer: string
  }[]
  true_false: {
    statement: string
    answer: boolean
  }[]
  open_ended: {
    question: string
  }[]
}

export default function QuizSection({ quizData }: { quizData: QuizData }) {
  const [tab, setTab] = useState<"mcq" | "true_false" | "open_ended">("mcq")

  return (
    <div className="bg-white border border-teal-100 rounded-xl p-6 shadow-sm mt-10">
      <h2 className="text-xl font-semibold text-teal-700 mb-4 flex items-center gap-2">
        <span className="text-2xl">📝</span> Practice Questions
      </h2>

      <div className="flex justify-center gap-2 mb-6">
        {["mcq", "true_false", "open_ended"].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as any)}
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              tab === key
                ? "bg-teal-600 text-white"
                : "bg-teal-100 text-teal-700 hover:bg-teal-200"
            }`}
          >
            {key === "mcq"
              ? "Multiple Choice"
              : key === "true_false"
              ? "True/False"
              : "Open-Ended"}
          </button>
        ))}
      </div>

      {tab === "mcq" && <MultipleChoiceQuiz questions={quizData.mcq} />}
      {tab === "true_false" && <TrueFalseQuiz questions={quizData.true_false} />}
      {tab === "open_ended" && <OpenEndedQuiz questions={quizData.open_ended} />}
    </div>
  )
}

// ================== MCQ ==================

function MultipleChoiceQuiz({ questions }: { questions: QuizData["mcq"] }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[index]

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }

  const handleCheck = () => {
    setAnswered(true)
    if (selected === q.answer) setScore(score + 1)
  }

  const handleRestart = () => {
    setIndex(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Quiz Results</h3>
        <p className="text-2xl text-teal-600 font-semibold mb-4">
          {score} / {questions.length}
        </p>
        <button
          onClick={handleRestart}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="text-sm text-gray-500 flex justify-between mb-3">
        <span>Question {index + 1} of {questions.length}</span>
        <span className="text-teal-600">Score: {score}</span>
      </div>

      <h3 className="text-lg font-medium mb-4">{q.question}</h3>

      <div className="space-y-3 mb-6">
        {q.options.map((opt) => {
          const isCorrect = answered && opt.label === q.answer
          const isWrong = answered && selected === opt.label && !isCorrect

          return (
            <div
              key={opt.label}
              className={`flex items-center p-3 border rounded cursor-pointer transition ${
                isCorrect
                  ? "bg-green-50 border-green-300"
                  : isWrong
                  ? "bg-red-50 border-red-300"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => !answered && setSelected(opt.label)}
            >
              <input
                type="radio"
                name="option"
                value={opt.label}
                checked={selected === opt.label}
                onChange={() => setSelected(opt.label)}
                disabled={answered}
                className="mr-3"
              />
              <label className="flex-1">{opt.text}</label>
              {isCorrect && <span className="text-green-600 font-bold ml-2">✓</span>}
              {isWrong && <span className="text-red-600 font-bold ml-2">✕</span>}
            </div>
          )
        })}
      </div>

      <div className="flex justify-between">
        {!answered ? (
          <button
            onClick={handleCheck}
            disabled={!selected}
            className={`px-4 py-2 rounded ${
              selected
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            {index < questions.length - 1 ? "Next" : "See Results"}
          </button>
        )}
      </div>
    </div>
  )
}

// ================== True/False ==================

function TrueFalseQuiz({ questions }: { questions: QuizData["true_false"] }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<boolean | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[index]

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }

  const handleCheck = () => {
    setAnswered(true)
    if (selected === q.answer) setScore(score + 1)
  }

  const handleRestart = () => {
    setIndex(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Quiz Results</h3>
        <p className="text-2xl text-teal-600 font-semibold mb-4">
          {score} / {questions.length}
        </p>
        <button
          onClick={handleRestart}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="text-sm text-gray-500 flex justify-between mb-3">
        <span>Question {index + 1} of {questions.length}</span>
        <span className="text-teal-600">Score: {score}</span>
      </div>

      <h3 className="text-lg font-medium mb-4">{q.statement}</h3>

      <div className="flex gap-4 mb-6">
        {["True", "False"].map((value) => {
          const boolValue = value === "True"
          const isCorrect = answered && boolValue === q.answer
          const isWrong = answered && selected === boolValue && !isCorrect

          return (
            <div
              key={value}
              onClick={() => !answered && setSelected(boolValue)}
              className={`flex-1 text-center border rounded p-4 cursor-pointer transition ${
                isCorrect
                  ? "bg-green-50 border-green-300"
                  : isWrong
                  ? "bg-red-50 border-red-300"
                  : "hover:bg-gray-50"
              }`}
            >
              <p className="font-medium">{value}</p>
              {isCorrect && <div className="text-green-600 mt-2">✓</div>}
              {isWrong && <div className="text-red-600 mt-2">✕</div>}
            </div>
          )
        })}
      </div>

      <div className="flex justify-between">
        {!answered ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="bg-teal-600 text-white px-4 py-2 rounded disabled:bg-gray-300"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-teal-600 text-white px-4 py-2 rounded"
          >
            {index < questions.length - 1 ? "Next" : "See Results"}
          </button>
        )}
      </div>
    </div>
  )
}

// ================== Open-Ended ==================

function OpenEndedQuiz({ questions }: { questions: QuizData["open_ended"] }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))
  const [submitted, setSubmitted] = useState<boolean[]>(Array(questions.length).fill(false))

  const current = questions[index]

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updated = [...answers]
    updated[index] = e.target.value
    setAnswers(updated)
  }

  const handleSubmit = () => {
    const updated = [...submitted]
    updated[index] = true
    setSubmitted(updated)
  }

  return (
    <div>
      <div className="text-sm text-gray-500 mb-3">
        Question {index + 1} of {questions.length}
      </div>
      <h3 className="text-lg font-medium mb-4">{current.question}</h3>

      <textarea
        className="w-full border rounded p-3 min-h-[120px] mb-4"
        value={answers[index]}
        onChange={handleChange}
        disabled={submitted[index]}
        placeholder="Type your answer here..."
      />

      {submitted[index] && (
        <div className="bg-teal-50 border border-teal-100 p-3 rounded mb-4 text-sm text-slate-700">
          <strong>Your Response:</strong>
          <p className="mt-2 whitespace-pre-line">{answers[index]}</p>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        {!submitted[index] ? (
          <button
            onClick={handleSubmit}
            disabled={!answers[index].trim()}
            className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700 disabled:bg-gray-300"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={() => setIndex(index + 1)}
            disabled={index === questions.length - 1}
            className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
