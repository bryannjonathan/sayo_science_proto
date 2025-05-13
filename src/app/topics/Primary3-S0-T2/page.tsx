'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which part of a mammal helps it to breathe? 哺乳動物的哪個部分幫助牠呼吸?',
      options: [{ label: 'A', text: 'Heart 心臟' }, { label: 'B', text: 'Lungs 肺' }, { label: 'C', text: 'Stomach 胃' }, { label: 'D', text: 'Muscles 肌肉' }],
      answer: 'B',
    },
    {
      question: 'What is the function of the heart in mammals? 哺乳動物心臟的功能是什麼?',
      options: [{ label: 'A', text: 'To digest food 消化食物' }, { label: 'B', text: 'To pump blood 泵送血液' }, { label: 'C', text: 'To help with movement 幫助運動' }, { label: 'D', text: 'To produce oxygen 產生氧氣' }],
      answer: 'B',
    },
    {
      question: 'Which part of a flower attracts pollinators? 花的哪個部分吸引傳粉者?',
      options: [{ label: 'A', text: 'Sepals 萼片' }, { label: 'B', text: 'Corolla 花冠' }, { label: 'C', text: 'Stamens 雄蕊' }, { label: 'D', text: 'Pistils 雌蕊' }],
      answer: 'B',
    },
    {
      question: 'What is the function of the stomach in mammals? 哺乳動物胃的功能是什麼?',
      options: [{ label: 'A', text: 'To breathe 呼吸' }, { label: 'B', text: 'To digest food 消化食物' }, { label: 'C', text: 'To pump blood 泵送血液' }, { label: 'D', text: 'To support the body 支撐身體' }],
      answer: 'B',
    },
    {
      question: 'Which part of a flower produces pollen? 花的哪個部分產生花粉?',
      options: [{ label: 'A', text: 'Sepals 萼片' }, { label: 'B', text: 'Corolla 花冠' }, { label: 'C', text: 'Stamens 雄蕊' }, { label: 'D', text: 'Pistils 雌蕊' }],
      answer: 'C',
    },
    {
      question: 'What is the function of bones in mammals? 哺乳動物骨骼的功能是什麼?',
      options: [{ label: 'A', text: 'To help with movement 幫助運動' }, { label: 'B', text: 'To digest food 消化食物' }, { label: 'C', text: 'To pump blood 泵送血液' }, { label: 'D', text: 'To produce oxygen 產生氧氣' }],
      answer: 'A',
    },
    {
      question: 'Which part of a flower protects the bud before it opens? 花的哪個部分在花蕾開放前保護它?',
      options: [{ label: 'A', text: 'Sepals 萼片' }, { label: 'B', text: 'Corolla 花冠' }, { label: 'C', text: 'Stamens 雄蕊' }, { label: 'D', text: 'Pistils 雌蕊' }],
      answer: 'A',
    },
    {
      question: 'What is the function of muscles in mammals? 哺乳動物肌肉的功能是什麼?',
      options: [{ label: 'A', text: 'To help with movement 幫助運動' }, { label: 'B', text: 'To digest food 消化食物' }, { label: 'C', text: 'To pump blood 泵送血液' }, { label: 'D', text: 'To produce oxygen 產生氧氣' }],
      answer: 'A',
    },
    {
      question: 'Which part of a flower contains the ovules? 花的哪個部分含有胚珠?',
      options: [{ label: 'A', text: 'Sepals 萼片' }, { label: 'B', text: 'Corolla 花冠' }, { label: 'C', text: 'Stamens 雄蕊' }, { label: 'D', text: 'Pistils 雌蕊' }],
      answer: 'D',
    },
    {
      question: 'Why is it important to appreciate the diversity of life? 為什麼欣賞生命的多樣性很重要?',
      options: [{ label: 'A', text: 'Because all living things are the same 因為所有生物都是一樣的' }, { label: 'B', text: 'Because it helps us understand and protect different species 因為它幫助我們理解和保護不同物種' }, { label: 'C', text: 'Because it makes the world boring 因為它讓世界變得無聊' }, { label: 'D', text: 'Because it is not important 因為它不重要' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The heart is responsible for digesting food in mammals. 哺乳動物的心臟負責消化食物。', answer: false },
    { statement: 'The corolla is the part of the flower that attracts pollinators. 花冠是花的一部分，吸引傳粉者。', answer: true },
    { statement: 'All living things have the same structures and functions. 所有生物都有相同的結構和功能。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two major structures in mammals and describe their functions. 列出哺乳動物的兩個主要結構並描述它們的功能。',
    },
    {
      question: 'What are the four main parts of a flower and what do they do? 花的四個主要部分是什麼？它們有什麼功能？',
    },
    {
      question: 'Why do you think it is important to learn about different living things? 你為什麼認為學習不同的生物很重要？',
    },
  ],
};

export default function StructuresOfLivingThingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-4 py-4 max-w-5xl mx-auto">
          <BackButton />
        </div>
      </header>

      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">
             Structures of living things
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Living things have different structures that help them survive and function. This topic explores the major parts of mammals and flowers, and how each structure contributes to their survival.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Using mammals as an example, be aware of the major structures of some animals, including bones, muscles, lungs, heart, and stomach, and their functions</li>
                <li>Be aware of the major parts in flowers, including sepals, corolla, stamens and pistils, and their functions</li>
                <li>Appreciate the diversity of life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Label the parts of a mammal's body and match them to their functions</li>
              <li>Dissect a flower to identify and study its different parts</li>
              <li>Create a diagram comparing structures of different living things</li>
              <li>Play a matching game pairing animal structures with their purposes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify key structures in mammals and flowers, and explain how these structures help organisms survive in their environments.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Develop curiosity about how living things are structured</li>
              <li>Appreciate the complexity and diversity of life forms</li>
              <li>Show respect for all living things and their habitats</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding animal anatomy helps in veterinary medicine</li>
              <li>Knowledge of flower structures is important for agriculture</li>
              <li>Biological structures inspire engineering designs (biomimicry)</li>
            </ul>
          </SectionCard>
        </div>

        <div className="mt-8">
          <SectionCard icon={<HelpCircle className="h-5 w-5 text-purple-600" />} title="Practice Questions" color="purple">
            <QuizSection quizData={quizData} />
          </SectionCard>
        </div>
      </main>
    </div>
  )
}