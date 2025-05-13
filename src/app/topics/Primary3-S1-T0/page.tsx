'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which state of matter has a fixed shape and volume? 哪種物質狀態具有固定的形狀和體積?',
      options: [{ label: 'A', text: 'Solid 固體' }, { label: 'B', text: 'Liquid 液體' }, { label: 'C', text: 'Gas 氣體' }, { label: 'D', text: 'Plasma 等離子體' }],
      answer: 'A',
    },
    {
      question: 'Which state of matter takes the shape of its container but has a fixed volume? 哪種物質狀態會根據容器的形狀改變形狀，但體積固定?',
      options: [{ label: 'A', text: 'Solid 固體' }, { label: 'B', text: 'Liquid 液體' }, { label: 'C', text: 'Gas 氣體' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'B',
    },
    {
      question: 'Which state of matter has no fixed shape or volume? 哪種物質狀態沒有固定的形狀和體積?',
      options: [{ label: 'A', text: 'Solid 固體' }, { label: 'B', text: 'Liquid 液體' }, { label: 'C', text: 'Gas 氣體' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'C',
    },
    {
      question: 'What is an example of a solid? 以下哪個是固體的示例?',
      options: [{ label: 'A', text: 'Water 水' }, { label: 'B', text: 'Air 空氣' }, { label: 'C', text: 'Rock 石頭' }, { label: 'D', text: 'Steam 蒸汽' }],
      answer: 'C',
    },
    {
      question: 'What is an example of a liquid? 以下哪個是液體的示例?',
      options: [{ label: 'A', text: 'Ice 冰' }, { label: 'B', text: 'Milk 牛奶' }, { label: 'C', text: 'Oxygen 氧氣' }, { label: 'D', text: 'Sand 沙子' }],
      answer: 'B',
    },
    {
      question: 'What is an example of a gas? 以下哪個是氣體的示例?',
      options: [{ label: 'A', text: 'Juice 果汁' }, { label: 'B', text: 'Wood 木頭' }, { label: 'C', text: 'Helium 氦氣' }, { label: 'D', text: 'Butter 奶油' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT a property of a solid? 以下哪項不是固體的性質?',
      options: [{ label: 'A', text: 'Fixed shape 固定形狀' }, { label: 'B', text: 'Fixed volume 固定體積' }, { label: 'C', text: 'Can flow 可以流動' }, { label: 'D', text: 'Cannot be compressed 不能被壓縮' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a property of a gas? 以下哪項是氣體的性質?',
      options: [{ label: 'A', text: 'Fixed shape 固定形狀' }, { label: 'B', text: 'Fixed volume 固定體積' }, { label: 'C', text: 'Can be compressed 可以被壓縮' }, { label: 'D', text: 'Cannot flow 不能流動' }],
      answer: 'C',
    },
    {
      question: 'What happens to the shape of a liquid when you pour it into a different container? 當你把液體倒入不同的容器時，它的形狀會發生什麼變化?',
      options: [{ label: 'A', text: 'It stays the same 保持不變' }, { label: 'B', text: 'It changes to match the new container 改變以匹配新容器' }, { label: 'C', text: 'It disappears 消失' }, { label: 'D', text: 'It becomes a solid 變成固體' }],
      answer: 'B',
    },
    {
      question: 'Which state of matter is invisible to the naked eye? 哪種物質狀態是肉眼看不見的?',
      options: [{ label: 'A', text: 'Solid 固體' }, { label: 'B', text: 'Liquid 液體' }, { label: 'C', text: 'Gas 氣體' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Solids have a fixed shape and volume. 固體具有固定的形狀和體積。', answer: true },
    { statement: 'Liquids can be compressed easily. 液體可以很容易被壓縮。', answer: false },
    { statement: 'Gases have no fixed shape or volume. 氣體沒有固定的形狀和體積。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of solids and explain why they are classified as solids. 舉出兩個固體的示例，並解釋為什麼它們被歸類為固體。',
    },
    {
      question: 'Describe one property of liquids that is different from solids. 描述液體與固體不同的一個性質。',
    },
    {
      question: 'Why can gases fill any container they are placed in? 為什麼氣體可以填滿它們被放入的任何容器?',
    },
  ],
}

export default function StatesOfMatterPage() {
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
             States of matter
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Matter exists in three main states: solid, liquid, and gas. Each state has distinct properties related to shape and volume that help us classify and understand different materials around us.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that matter can be classified into solids, liquids and gases, and describe their properties (whether it has a fixed volume, whether it has a fixed shape)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Observe and record how different materials behave when placed in different containers</li>
              <li>Conduct a simple experiment to show how temperature affects states of matter</li>
              <li>Create a sorting game with pictures of different objects and their states</li>
              <li>Use role-play to demonstrate particle movement in solids, liquids, and gases</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify and classify common materials into solids, liquids, and gases based on their observable properties.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of materials in our environment</li>
              <li>Curiosity about how matter changes between different states</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how states of matter affect everyday objects and natural phenomena</li>
              <li>Recognizing the importance of different states in industrial processes and technology</li>
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