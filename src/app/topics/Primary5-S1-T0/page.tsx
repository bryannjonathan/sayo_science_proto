'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What is the main component of air? 空氣的主要成分是什麼？',
      options: [{ label: 'A', text: 'Oxygen 氧氣' }, { label: 'B', text: 'Nitrogen 氮氣' }, { label: 'C', text: 'Carbon dioxide 二氧化碳' }, { label: 'D', text: 'Water vapor 水蒸氣' }],
      answer: 'B',
    },
    {
      question: 'What percentage of air is oxygen? 氧氣佔空氣的百分比是多少？',
      options: [{ label: 'A', text: '21%' }, { label: 'B', text: '78%' }, { label: 'C', text: '1%' }, { label: 'D', text: '50%' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of atmospheric pressure? 以下哪個是大氣壓力的例子？',
      options: [{ label: 'A', text: 'A balloon floating in the air 氣球飄在空中' }, { label: 'B', text: 'A carton caving in when you suck air out through a straw 用吸管吸出空氣時，飲料盒會凹陷' }, { label: 'C', text: 'Water boiling at 100°C 水在100°C時沸騰' }, { label: 'D', text: 'Ice melting at 0°C 冰在0°C時融化' }],
      answer: 'B',
    },
    {
      question: 'What happens to air when it is heated? 空氣受熱時會發生什麼？',
      options: [{ label: 'A', text: 'It becomes heavier 它變得更重' }, { label: 'B', text: 'It rises 它上升' }, { label: 'C', text: 'It disappears 它消失' }, { label: 'D', text: 'It turns into water 它變成水' }],
      answer: 'B',
    },
    {
      question: 'What is wind? 什麼是風？',
      options: [{ label: 'A', text: 'The movement of water 水的運動' }, { label: 'B', text: 'The movement of air 空氣的運動' }, { label: 'C', text: 'The movement of clouds 雲的運動' }, { label: 'D', text: 'The movement of the Earth 地球的運動' }],
      answer: 'B',
    },
    {
      question: 'Which gas makes up the largest percentage of air? 哪種氣體佔空氣的最大百分比？',
      options: [{ label: 'A', text: 'Oxygen 氧氣' }, { label: 'B', text: 'Nitrogen 氮氣' }, { label: 'C', text: 'Carbon dioxide 二氧化碳' }, { label: 'D', text: 'Argon 氬氣' }],
      answer: 'B',
    },
    {
      question: 'Does air have weight? 空氣有重量嗎？',
      options: [{ label: 'A', text: 'Yes 有' }, { label: 'B', text: 'No 沒有' }, { label: 'C', text: 'Only when it is cold 只有在冷的時候' }, { label: 'D', text: 'Only when it is hot 只有在熱的時候' }],
      answer: 'A',
    },
    {
      question: 'What happens when you suck air out of a bottle? 當你把空氣從瓶子中吸出時會發生什麼？',
      options: [{ label: 'A', text: 'The bottle expands 瓶子膨脹' }, { label: 'B', text: 'The bottle collapses 瓶子塌陷' }, { label: 'C', text: 'Nothing happens 什麼都沒發生' }, { label: 'D', text: 'The bottle turns into a solid 瓶子變成固體' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a component of air? 以下哪個不是空氣的成分？',
      options: [{ label: 'A', text: 'Nitrogen 氮氣' }, { label: 'B', text: 'Oxygen 氧氣' }, { label: 'C', text: 'Carbon dioxide 二氧化碳' }, { label: 'D', text: 'Gold 金' }],
      answer: 'D',
    },
    {
      question: 'Why does hot air rise? 為什麼熱空氣會上升？',
      options: [{ label: 'A', text: 'Because it is lighter than cold air 因為它比冷空氣輕' }, { label: 'B', text: 'Because it is heavier than cold air 因為它比冷空氣重' }, { label: 'C', text: 'Because it is blue 因為它是藍色的' }, { label: 'D', text: 'Because it is invisible 因為它是看不見的' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Air is made up of only oxygen. 空氣僅由氧氣組成。', answer: false },
    { statement: 'Air has weight and occupies space. 空氣有重量並佔據空間。', answer: true },
    { statement: 'Hot air sinks because it is heavier than cold air. 熱空氣下沉是因為它比冷空氣重。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two major components of air and their approximate percentages. 列出空氣的兩種主要成分及其大致百分比。',
    },
    {
      question: 'Explain why a beverage carton caves in when you suck air out through a straw. 解釋為什麼用吸管吸出空氣時，飲料盒會凹陷。',
    },
    {
      question: 'Describe how wind is formed. 描述風是如何形成的。',
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
            Matter is anything that has mass and takes up space. This section explores the different states of matter and their unique properties. Understanding these properties helps explain everyday phenomena around us.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the major components of air and their percentage of composition in air</li>
                <li>Be aware that air has weight and occupies space</li>
                <li>Give some examples of daily phenomena related to atmospheric pressure (e.g. suck air out through a straw will cause the beverage carton to cave in)</li>
                <li>Be aware that air rises when heated, and the movement of air forms wind</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct experiments to observe air pressure effects</li>
              <li>Create models showing different states of matter</li>
              <li>Measure and compare weights of inflated vs deflated balloons</li>
              <li>Demonstrate convection currents using colored water</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the fundamental properties of matter and be able to explain common phenomena using these concepts. They will recognize how matter behaves differently in various states.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the scientific principles in everyday life</li>
              <li>Curiosity about how matter behaves under different conditions</li>
              <li>Respect for safety when conducting experiments</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding weather patterns and atmospheric phenomena</li>
              <li>Applications in engineering and material science</li>
              <li>Environmental impacts of matter transformation</li>
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