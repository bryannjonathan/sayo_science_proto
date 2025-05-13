'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following materials can be attracted by a magnet? 以下哪種材料可以被磁鐵吸引?',
      options: [{ label: 'A', text: 'Wood 木頭' }, { label: 'B', text: 'Plastic 塑膠' }, { label: 'C', text: 'Iron 鐵' }, { label: 'D', text: 'Glass 玻璃' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a mixture? 以下哪一個是混合物?',
      options: [{ label: 'A', text: 'Pure water 純水' }, { label: 'B', text: 'Sugar solution 糖水' }, { label: 'C', text: 'Gold 金' }, { label: 'D', text: 'Oxygen 氧氣' }],
      answer: 'B',
    },
    {
      question: 'Which method can be used to separate sand and iron filings? 哪種方法可以用來分離沙子和鐵屑?',
      options: [{ label: 'A', text: 'Sieving 篩選' }, { label: 'B', text: 'Magnetic attraction 磁力吸引' }, { label: 'C', text: 'Filtration 過濾' }, { label: 'D', text: 'Evaporation 蒸發' }],
      answer: 'B',
    },
    {
      question: 'Which of the following materials will float in water? 以下哪種材料會浮在水上?',
      options: [{ label: 'A', text: 'Stone 石頭' }, { label: 'B', text: 'Metal spoon 金屬湯匙' }, { label: 'C', text: 'Plastic bottle 塑膠瓶' }, { label: 'D', text: 'Glass marble 玻璃彈珠' }],
      answer: 'C',
    },
    {
      question: 'What is the physical state of water at room temperature? 水在室溫下的物理狀態是什麼?',
      options: [{ label: 'A', text: 'Solid 固體' }, { label: 'B', text: 'Liquid 液體' }, { label: 'C', text: 'Gas 氣體' }, { label: 'D', text: 'Plasma 電漿' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a mixture? 以下哪一個不是混合物?',
      options: [{ label: 'A', text: 'Air 空氣' }, { label: 'B', text: 'Sand and salt 沙和鹽' }, { label: 'C', text: 'Pure gold 純金' }, { label: 'D', text: 'Salt water 鹽水' }],
      answer: 'C',
    },
    {
      question: 'Which method can be used to separate salt from salt water? 哪種方法可以用來從鹽水中分離出鹽?',
      options: [{ label: 'A', text: 'Sieving 篩選' }, { label: 'B', text: 'Magnetic attraction 磁力吸引' }, { label: 'C', text: 'Filtration 過濾' }, { label: 'D', text: 'Evaporation 蒸發' }],
      answer: 'D',
    },
    {
      question: 'Which of the following materials is the heaviest? 以下哪種材料最重?',
      options: [{ label: 'A', text: 'Feather 羽毛' }, { label: 'B', text: 'Paper 紙' }, { label: 'C', text: 'Rock 石頭' }, { label: 'D', text: 'Balloon 氣球' }],
      answer: 'C',
    },
    {
      question: 'What is the physical state of ice? 冰的物理狀態是什麼?',
      options: [{ label: 'A', text: 'Solid 固體' }, { label: 'B', text: 'Liquid 液體' }, { label: 'C', text: 'Gas 氣體' }, { label: 'D', text: 'Plasma 電漿' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a mixture? 以下哪一個是混合物的例子?',
      options: [{ label: 'A', text: 'Oxygen 氧氣' }, { label: 'B', text: 'Salt 鹽' }, { label: 'C', text: 'Sand and iron filings 沙和鐵屑' }, { label: 'D', text: 'Pure water 純水' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'All metals can be attracted by magnets. 所有金屬都可以被磁鐵吸引。', answer: false },
    { statement: 'Air is a mixture of different gases. 空氣是不同氣體的混合物。', answer: true },
    { statement: 'Filtration can be used to separate salt from salt water. 過濾可以用來從鹽水中分離出鹽。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give two examples of mixtures you can find at home. 舉出兩個你可以在家裡找到的混合物例子。',
    },
    {
      question: 'How can you separate a mixture of sand and water? 你如何分離沙和水的混合物?',
    },
    {
      question: 'Name two materials that can float in water. 列出兩種可以浮在水上的材料。',
    },
  ],
};

export default function PropertiesOfMatterPage() {
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
             Properties of matter
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Matter is all around us and has different properties like weight, state, and magnetic attraction. Understanding these properties helps us identify materials and separate mixtures in everyday life.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Compare some physical properties (e.g. weight, physical state under room temperature, whether it can be attracted by magnet, whether it can float in water) of different materials</li>
                <li>Give some examples of mixture (e.g. rocks and sand, sugar solution, sand and iron filings, air)</li>
                <li>Recognise some methods of separating mixtures (sieving, magnetic attraction, filtration, evaporation)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify objects based on their properties (magnetic, floating, etc.)</li>
              <li>Hands-on experiments with separating mixtures using different methods</li>
              <li>Create a "matter properties" scavenger hunt around the classroom</li>
              <li>Compare and contrast different materials in small groups</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify and compare properties of matter, recognize mixtures, and understand basic separation techniques.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of materials in our environment</li>
              <li>Curiosity about how different materials behave and interact</li>
              <li>Responsibility in handling and separating materials properly</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Recycling processes that use material separation techniques</li>
              <li>Water purification methods that rely on filtration</li>
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