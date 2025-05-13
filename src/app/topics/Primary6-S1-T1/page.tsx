'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What is produced during combustion? 燃燒時會產生什麼?',
      options: [{ label: 'A', text: 'Carbon dioxide and water 二氧化碳和水' }, { label: 'B', text: 'Oxygen and nitrogen 氧氣和氮氣' }, { label: 'C', text: 'Hydrogen and helium 氫氣和氦氣' }, { label: 'D', text: 'Methane and ammonia 甲烷和氨氣' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a necessary condition for combustion? 以下哪一項不是燃燒的必要條件?',
      options: [{ label: 'A', text: 'Fuel 燃料' }, { label: 'B', text: 'Oxygen 氧氣' }, { label: 'C', text: 'Heat 熱量' }, { label: 'D', text: 'Light 光' }],
      answer: 'D',
    },
    {
      question: 'What does a fire blanket do? 防火毯的作用是什麼?',
      options: [{ label: 'A', text: 'Cuts off oxygen supply 切斷氧氣供應' }, { label: 'B', text: 'Cools down the fire 冷卻火源' }, { label: 'C', text: 'Absorbs smoke 吸收煙霧' }, { label: 'D', text: 'Produces water 產生水' }],
      answer: 'A',
    },
    {
      question: 'Which gas is required for combustion? 燃燒需要哪種氣體?',
      options: [{ label: 'A', text: 'Oxygen 氧氣' }, { label: 'B', text: 'Carbon dioxide 二氧化碳' }, { label: 'C', text: 'Nitrogen 氮氣' }, { label: 'D', text: 'Hydrogen 氫氣' }],
      answer: 'A',
    },
    {
      question: 'What is the main purpose of a fire extinguisher? 滅火器的主要用途是什麼?',
      options: [{ label: 'A', text: 'To start a fire 點火' }, { label: 'B', text: 'To put out a fire 滅火' }, { label: 'C', text: 'To measure temperature 測量溫度' }, { label: 'D', text: 'To produce oxygen 產生氧氣' }],
      answer: 'B',
    },
    {
      question: 'Which of the following can prevent hill fires? 以下哪一項可以預防山火?',
      options: [{ label: 'A', text: 'Leaving campfires unattended 無人看管營火' }, { label: 'B', text: 'Throwing cigarette butts in the forest 在森林中丟煙頭' }, { label: 'C', text: 'Clearing dry leaves and debris 清理乾葉和碎屑' }, { label: 'D', text: 'Burning trash in dry weather 在乾燥天氣焚燒垃圾' }],
      answer: 'C',
    },
    {
      question: 'What is the impact of hill fires? 山火的影響是什麼?',
      options: [{ label: 'A', text: 'Destroys wildlife habitats 破壞野生動物棲息地' }, { label: 'B', text: 'Improves air quality 改善空氣質量' }, { label: 'C', text: 'Increases rainfall 增加降雨量' }, { label: 'D', text: 'Makes soil more fertile 使土壤更肥沃' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a chemical change? 以下哪一項是化學變化?',
      options: [{ label: 'A', text: 'Melting ice 冰融化' }, { label: 'B', text: 'Burning paper 紙張燃燒' }, { label: 'C', text: 'Breaking glass 玻璃破碎' }, { label: 'D', text: 'Dissolving sugar 溶解糖' }],
      answer: 'B',
    },
    {
      question: 'What is the main principle of fire-fighting equipment? 滅火設備的主要原理是什麼?',
      options: [{ label: 'A', text: 'To add more oxygen 增加氧氣' }, { label: 'B', text: 'To remove one or more conditions for combustion 去除一個或多個燃燒條件' }, { label: 'C', text: 'To increase the temperature 提高溫度' }, { label: 'D', text: 'To produce more fuel 產生更多燃料' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a physical change? 以下哪一項是物理變化?',
      options: [{ label: 'A', text: 'Rusting iron 鐵生鏽' }, { label: 'B', text: 'Baking a cake 烤蛋糕' }, { label: 'C', text: 'Cutting paper 剪紙' }, { label: 'D', text: 'Burning wood 燃燒木材' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Combustion can occur without oxygen. 燃燒可以在沒有氧氣的情況下發生。', answer: false },
    { statement: 'A fire blanket works by cutting off the oxygen supply to the fire. 防火毯通過切斷火源的氧氣供應來滅火。', answer: true },
    { statement: 'Hill fires have no impact on the environment. 山火對環境沒有影響。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why oxygen is necessary for combustion. 解釋為什麼燃燒需要氧氣。',
    },
    {
      question: 'Describe two ways to prevent hill fires. 描述兩種預防山火的方法。',
    },
    {
      question: 'What are the differences between physical and chemical changes? Give one example of each. 物理變化和化學變化有什麼區別？各舉一個例子。',
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
            Physical changes alter the form of matter without changing its chemical composition, while chemical changes result in new substances with different properties. Understanding these changes helps explain everyday phenomena like melting ice or burning wood.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that combustion requires oxygen, and produces carbon dioxide and water</li>
                <li>Recognise the necessary conditions for combustion, and the working principles of fire-fighting equipment (e.g. fire extinguishers, fire blankets, etc.)</li>
                <li>Recognise the occurrence, impact and prevention of hill fires</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct experiments to observe physical changes (melting ice) vs chemical changes (burning paper)</li>
              <li>Create a poster showing examples of physical and chemical changes in daily life</li>
              <li>Role-play fire safety scenarios using different fire-fighting methods</li>
              <li>Design an experiment to test conditions needed for combustion</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to distinguish between physical and chemical changes and understand the conditions required for combustion and fire safety principles.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific explanations of everyday phenomena</li>
              <li>Responsibility in handling materials that can undergo chemical changes</li>
              <li>Safety consciousness regarding fire hazards</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Application of fire safety principles in home and community settings</li>
              <li>Environmental impact of uncontrolled chemical changes like forest fires</li>
              <li>Technological developments in fire prevention and control</li>
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