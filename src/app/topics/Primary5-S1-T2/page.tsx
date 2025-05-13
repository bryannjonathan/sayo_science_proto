'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is an example of kinetic energy? 以下哪個是動能的例子?',
      options: [{ label: 'A', text: 'A stretched rubber band 一條拉長的橡皮筋' }, { label: 'B', text: 'A rolling ball 一個滾動的球' }, { label: 'C', text: 'A battery 一個電池' }, { label: 'D', text: 'A book on a shelf 書架上的書' }],
      answer: 'B',
    },
    {
      question: 'What form of energy is stored in food? 食物中儲存的是哪種形式的能量?',
      options: [{ label: 'A', text: 'Kinetic energy 動能' }, { label: 'B', text: 'Potential energy 勢能' }, { label: 'C', text: 'Chemical energy 化學能' }, { label: 'D', text: 'Light energy 光能' }],
      answer: 'C',
    },
    {
      question: 'Which of the following converts chemical energy into light and heat energy? 以下哪個將化學能轉化為光和熱能?',
      options: [{ label: 'A', text: 'A wind turbine 風力渦輪機' }, { label: 'B', text: 'A burning candle 燃燒的蠟燭' }, { label: 'C', text: 'A solar panel 太陽能板' }, { label: 'D', text: 'A moving car 行駛中的汽車' }],
      answer: 'B',
    },
    {
      question: 'What form of energy does a stretched spring have? 拉長的彈簧具有哪種形式的能量?',
      options: [{ label: 'A', text: 'Kinetic energy 動能' }, { label: 'B', text: 'Potential energy 勢能' }, { label: 'C', text: 'Chemical energy 化學能' }, { label: 'D', text: 'Sound energy 聲能' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a source of energy? 以下哪個不是能量的來源?',
      options: [{ label: 'A', text: 'Sun 太陽' }, { label: 'B', text: 'Wind 風' }, { label: 'C', text: 'Water 水' }, { label: 'D', text: 'Stone 石頭' }],
      answer: 'D',
    },
    {
      question: 'What form of energy is used to power a flashlight? 手電筒使用哪種形式的能量?',
      options: [{ label: 'A', text: 'Chemical energy 化學能' }, { label: 'B', text: 'Light energy 光能' }, { label: 'C', text: 'Sound energy 聲能' }, { label: 'D', text: 'Heat energy 熱能' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of potential energy? 以下哪個是勢能的例子?',
      options: [{ label: 'A', text: 'A flying bird 飛翔的鳥' }, { label: 'B', text: 'A running child 奔跑的孩子' }, { label: 'C', text: 'A book on a table 桌子上的書' }, { label: 'D', text: 'A spinning top 旋轉的陀螺' }],
      answer: 'C',
    },
    {
      question: 'What form of energy is produced by a guitar when it is played? 彈奏吉他時產生哪種形式的能量?',
      options: [{ label: 'A', text: 'Light energy 光能' }, { label: 'B', text: 'Sound energy 聲能' }, { label: 'C', text: 'Heat energy 熱能' }, { label: 'D', text: 'Chemical energy 化學能' }],
      answer: 'B',
    },
    {
      question: 'Which of the following converts wind energy into electrical energy? 以下哪個將風能轉化為電能?',
      options: [{ label: 'A', text: 'Solar panel 太陽能板' }, { label: 'B', text: 'Wind turbine 風力渦輪機' }, { label: 'C', text: 'Battery 電池' }, { label: 'D', text: 'Light bulb 燈泡' }],
      answer: 'B',
    },
    {
      question: 'What form of energy is used to cook food in a microwave? 微波爐使用哪種形式的能量來烹飪食物?',
      options: [{ label: 'A', text: 'Sound energy 聲能' }, { label: 'B', text: 'Light energy 光能' }, { label: 'C', text: 'Heat energy 熱能' }, { label: 'D', text: 'Kinetic energy 動能' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Energy can be created and destroyed. 能量可以被創造和毀滅。', answer: false },
    { statement: 'A moving car has kinetic energy. 行駛中的汽車具有動能。', answer: true },
    { statement: 'Chemical energy is stored in batteries. 化學能儲存在電池中。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of potential energy and explain why they are considered potential energy. 舉出兩個勢能的例子並解釋為什麼它們被認為是勢能。',
    },
    {
      question: 'Describe how energy is converted when you turn on a flashlight. 描述當你打開手電筒時能量是如何轉換的。',
    },
    {
      question: 'Why is the sun considered an important source of energy? Give two reasons. 為什麼太陽被認為是重要的能量來源？舉出兩個原因。',
    },
  ],
};

export default function SourcesAndUsesOfEnergyPage() {
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
             Sources and uses of energy
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Energy comes from various sources and can be converted into different forms. This topic explores the different types of energy, their sources, and how we use them in daily life.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Give examples of the different forms of energy (e.g. kinetic energy, potential energy, chemical energy)</li>
                <li>Be aware that energy can be converted from one form to another</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Energy scavenger hunt: Identify energy sources in your home</li>
              <li>Create a simple circuit to demonstrate energy conversion</li>
              <li>Classify pictures of objects by their energy type</li>
              <li>Role-play energy transformations in different scenarios</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify different energy sources and explain how energy transforms from one form to another in everyday situations.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diverse sources of energy in our environment</li>
              <li>Responsibility in using energy wisely and efficiently</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how energy technologies impact society</li>
              <li>Exploring renewable energy solutions for environmental sustainability</li>
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