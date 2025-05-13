'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following substances dissolves in water? 以下哪種物質可以溶解在水中？',
      options: [{ label: 'A', text: 'Salt 鹽' }, { label: 'B', text: 'Sand 沙' }, { label: 'C', text: 'Rock 石頭' }, { label: 'D', text: 'Wood 木頭' }],
      answer: 'A',
    },
    {
      question: 'What happens when sugar is mixed with water? 當糖與水混合時會發生什麼？',
      options: [{ label: 'A', text: 'It disappears completely 它完全消失' }, { label: 'B', text: 'It dissolves in water 它溶解在水中' }, { label: 'C', text: 'It turns into a solid 它變成固體' }, { label: 'D', text: 'It floats on water 它浮在水面上' }],
      answer: 'B',
    },
    {
      question: 'Which substance does NOT dissolve in water? 哪種物質不會溶解在水中？',
      options: [{ label: 'A', text: 'Sugar 糖' }, { label: 'B', text: 'Salt 鹽' }, { label: 'C', text: 'Sand 沙' }, { label: 'D', text: 'Honey 蜂蜜' }],
      answer: 'C',
    },
    {
      question: 'What is the result when sand is mixed with water? 當沙與水混合時會產生什麼結果？',
      options: [{ label: 'A', text: 'The sand dissolves 沙溶解了' }, { label: 'B', text: 'The sand sinks to the bottom 沙沉到底部' }, { label: 'C', text: 'The sand disappears 沙消失了' }, { label: 'D', text: 'The sand turns into liquid 沙變成液體' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a physical change? 以下哪種是物理變化？',
      options: [{ label: 'A', text: 'Burning paper 燒紙' }, { label: 'B', text: 'Melting ice 冰融化' }, { label: 'C', text: 'Rusting iron 鐵生鏽' }, { label: 'D', text: 'Cooking an egg 煮雞蛋' }],
      answer: 'B',
    },
    {
      question: 'What happens when salt is added to water? 當鹽加入水中時會發生什麼？',
      options: [{ label: 'A', text: 'The salt disappears 鹽消失了' }, { label: 'B', text: 'The salt dissolves 鹽溶解了' }, { label: 'C', text: 'The salt turns into a gas 鹽變成氣體' }, { label: 'D', text: 'The salt floats on water 鹽浮在水面上' }],
      answer: 'B',
    },
    {
      question: 'Which of these is insoluble in water? 以下哪種物質不溶於水？',
      options: [{ label: 'A', text: 'Sugar 糖' }, { label: 'B', text: 'Salt 鹽' }, { label: 'C', text: 'Flour 麵粉' }, { label: 'D', text: 'Oil 油' }],
      answer: 'D',
    },
    {
      question: 'What type of change is dissolving sugar in water? 將糖溶解在水中屬於哪種變化？',
      options: [{ label: 'A', text: 'Chemical change 化學變化' }, { label: 'B', text: 'Physical change 物理變化' }, { label: 'C', text: 'No change 沒有變化' }, { label: 'D', text: 'Biological change 生物變化' }],
      answer: 'B',
    },
    {
      question: 'Which substance can you separate from water by filtering? 你可以通過過濾從水中分離出哪種物質？',
      options: [{ label: 'A', text: 'Salt 鹽' }, { label: 'B', text: 'Sugar 糖' }, { label: 'C', text: 'Sand 沙' }, { label: 'D', text: 'Honey 蜂蜜' }],
      answer: 'C',
    },
    {
      question: 'What happens to the water when sugar dissolves in it? 當糖溶解在水中時，水會發生什麼變化？',
      options: [{ label: 'A', text: 'It becomes sweeter 它變得更甜' }, { label: 'B', text: 'It turns into a solid 它變成固體' }, { label: 'C', text: 'It disappears 它消失了' }, { label: 'D', text: 'It changes color 它變色' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Salt dissolves in water. 鹽可以溶解在水中。', answer: true },
    { statement: 'Sand disappears when mixed with water. 沙與水混合時會消失。', answer: false },
    { statement: 'Dissolving sugar in water is a physical change. 將糖溶解在水中是物理變化。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two substances that dissolve in water. 列出兩種可以溶解在水中的物質。',
    },
    {
      question: 'What happens when you mix sand with water? Why? 當你把沙和水混合時會發生什麼？為什麼？',
    },
    {
      question: 'How can you separate salt from water after it dissolves? 當鹽溶解在水中後，你如何將鹽從水中分離出來？',
    },
  ],
};

export default function PhysicalChangeAndChemicalChangePage() {
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
             Physical change and chemical change
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Physical changes involve changes in appearance without altering the substance's composition, like melting ice. Chemical changes create new substances with different properties, such as burning wood. Understanding these changes helps explain everyday phenomena.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that some substances (e.g. salt, sugar) are soluble in water while others (e.g. sand, rock) are insoluble in water</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct experiments to observe dissolving processes</li>
              <li>Create a chart comparing physical and chemical changes</li>
              <li>Use magnifying glasses to examine changes in materials</li>
              <li>Perform simple separation techniques like filtration</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will distinguish between physical and chemical changes and identify examples of each in daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific processes in everyday life</li>
              <li>Curiosity about material transformations</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding food preparation as chemical changes</li>
              <li>Recognizing environmental impacts of chemical processes</li>
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