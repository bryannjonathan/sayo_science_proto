'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is necessary for the rusting of iron? 以下哪項是鐵生鏽的必要條件?',
      options: [{ label: 'A', text: 'Oxygen and water 氧氣和水' }, { label: 'B', text: 'Carbon dioxide and heat 二氧化碳和熱' }, { label: 'C', text: 'Nitrogen and light 氮氣和光' }, { label: 'D', text: 'Hydrogen and cold 氫氣和冷' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a way to prevent rusting? 以下哪種方法可以防止生鏽?',
      options: [{ label: 'A', text: 'Painting the metal 給金屬塗漆' }, { label: 'B', text: 'Exposing the metal to rain 將金屬暴露在雨中' }, { label: 'C', text: 'Keeping the metal wet 保持金屬濕潤' }, { label: 'D', text: 'Storing the metal in saltwater 將金屬存放在鹽水中' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a reversible change? 以下哪個是可逆變化的例子?',
      options: [{ label: 'A', text: 'Burning paper 燃燒紙張' }, { label: 'B', text: 'Melting ice 融化冰塊' }, { label: 'C', text: 'Rusting iron 生鏽的鐵' }, { label: 'D', text: 'Cooking an egg 煮雞蛋' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of an irreversible change? 以下哪個是不可逆變化的例子?',
      options: [{ label: 'A', text: 'Evaporating water 蒸發水' }, { label: 'B', text: 'Freezing water 冷凍水' }, { label: 'C', text: 'Burning wood 燃燒木材' }, { label: 'D', text: 'Melting chocolate 融化巧克力' }],
      answer: 'C',
    },
    {
      question: 'What is the main cause of corrosion in metals? 金屬腐蝕的主要原因是什么?',
      options: [{ label: 'A', text: 'Reaction with oxygen 與氧氣反應' }, { label: 'B', text: 'Reaction with nitrogen 與氮氣反應' }, { label: 'C', text: 'Reaction with hydrogen 與氫氣反應' }, { label: 'D', text: 'Reaction with helium 與氦氣反應' }],
      answer: 'A',
    },
    {
      question: 'Which of the following metals is most likely to rust? 以下哪種金屬最有可能生鏽?',
      options: [{ label: 'A', text: 'Iron 鐵' }, { label: 'B', text: 'Gold 金' }, { label: 'C', text: 'Silver 銀' }, { label: 'D', text: 'Aluminum 鋁' }],
      answer: 'A',
    },
    {
      question: 'What happens when water evaporates? 當水蒸發時會發生什麼?',
      options: [{ label: 'A', text: 'It changes from liquid to gas 它從液體變成氣體' }, { label: 'B', text: 'It changes from gas to liquid 它從氣體變成液體' }, { label: 'C', text: 'It changes from solid to liquid 它從固體變成液體' }, { label: 'D', text: 'It changes from liquid to solid 它從液體變成固體' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a way to prevent rusting? 以下哪種方法不能防止生鏽?',
      options: [{ label: 'A', text: 'Applying oil 塗油' }, { label: 'B', text: 'Keeping the metal dry 保持金屬乾燥' }, { label: 'C', text: 'Exposing the metal to air and water 將金屬暴露在空氣和水中' }, { label: 'D', text: 'Using galvanization 使用鍍鋅' }],
      answer: 'C',
    },
    {
      question: 'What is the process called when water vapor turns into liquid water? 當水蒸氣變成液態水時，這個過程叫什麼?',
      options: [{ label: 'A', text: 'Condensation 凝結' }, { label: 'B', text: 'Evaporation 蒸發' }, { label: 'C', text: 'Freezing 冷凍' }, { label: 'D', text: 'Melting 融化' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a chemical change? 以下哪個是化學變化?',
      options: [{ label: 'A', text: 'Cutting paper 剪紙' }, { label: 'B', text: 'Burning wood 燃燒木材' }, { label: 'C', text: 'Melting ice 融化冰塊' }, { label: 'D', text: 'Breaking glass 打破玻璃' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Rusting is a reversible change. 生鏽是可逆的變化。', answer: false },
    { statement: 'Condensation is the process of water vapor turning into liquid water. 凝結是水蒸氣變成液態水的過程。', answer: true },
    { statement: 'Burning paper is a physical change. 燃燒紙張是物理變化。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why painting a metal gate can prevent it from rusting. 解釋為什麼給金屬門塗漆可以防止它生鏽。',
    },
    {
      question: 'Give two examples of reversible changes and two examples of irreversible changes. 舉出兩個可逆變化的例子和兩個不可逆變化的例子。',
    },
    {
      question: 'Describe the conditions needed for iron to rust. 描述鐵生鏽所需的條件。',
    },
  ],
}

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
            Physical changes involve alterations in a substance's state or appearance without changing its chemical composition, while chemical changes result in new substances with different properties. Understanding these changes helps explain everyday phenomena like rusting, burning, and phase transitions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the necessary conditions for corrosion of metals (using rusting as an example)</li>
                <li>Explain ways to prevent corrosion of metals</li>
                <li>Be aware of some reversible changes (e.g. condensation and evaporation of water) and irreversible changes (e.g. burning)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Observe rust formation on different metal samples under varying conditions</li>
              <li>Conduct experiments with ice melting and water evaporation</li>
              <li>Create a chart comparing physical and chemical changes in everyday materials</li>
              <li>Test different rust prevention methods on iron nails</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to distinguish between physical and chemical changes and understand their practical implications in daily life and industrial applications.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific explanations of everyday phenomena</li>
              <li>Responsibility in maintaining metal objects to prevent corrosion</li>
              <li>Curiosity about chemical reactions in the environment</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of corrosion on infrastructure and transportation systems</li>
              <li>Industrial applications of physical changes in food processing</li>
              <li>Environmental consequences of chemical changes like combustion</li>
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