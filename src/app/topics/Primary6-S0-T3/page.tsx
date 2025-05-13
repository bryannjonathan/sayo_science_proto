'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the process by which plants produce food called? 植物製造食物的過程叫什麼?',
      options: [{ label: 'A', text: 'Photosynthesis 光合作用' }, { label: 'B', text: 'Respiration 呼吸作用' }, { label: 'C', text: 'Digestion 消化作用' }, { label: 'D', text: 'Transpiration 蒸騰作用' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT necessary for photosynthesis? 以下哪一項不是光合作用所需的條件?',
      options: [{ label: 'A', text: 'Sunlight 陽光' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Oxygen 氧氣' }, { label: 'D', text: 'Carbon dioxide 二氧化碳' }],
      answer: 'C',
    },
    {
      question: 'What is the green pigment in plants that absorbs sunlight called? 植物中吸收陽光的綠色色素叫什麼?',
      options: [{ label: 'A', text: 'Chlorophyll 葉綠素' }, { label: 'B', text: 'Hemoglobin 血紅蛋白' }, { label: 'C', text: 'Melanin 黑色素' }, { label: 'D', text: 'Carotene 胡蘿蔔素' }],
      answer: 'A',
    },
    {
      question: 'Which gas do plants take in for photosynthesis? 植物在光合作用中吸收哪種氣體?',
      options: [{ label: 'A', text: 'Oxygen 氧氣' }, { label: 'B', text: 'Carbon dioxide 二氧化碳' }, { label: 'C', text: 'Nitrogen 氮氣' }, { label: 'D', text: 'Hydrogen 氫氣' }],
      answer: 'B',
    },
    {
      question: 'What do plants release as a by-product of photosynthesis? 植物在光合作用中釋放什麼副產品?',
      options: [{ label: 'A', text: 'Carbon dioxide 二氧化碳' }, { label: 'B', text: 'Oxygen 氧氣' }, { label: 'C', text: 'Nitrogen 氮氣' }, { label: 'D', text: 'Water vapor 水蒸氣' }],
      answer: 'B',
    },
    {
      question: 'Which of the following organisms is a producer in the food chain? 以下哪一種生物是食物鏈中的生產者?',
      options: [{ label: 'A', text: 'Grass 草' }, { label: 'B', text: 'Rabbit 兔子' }, { label: 'C', text: 'Fox 狐狸' }, { label: 'D', text: 'Eagle 老鷹' }],
      answer: 'A',
    },
    {
      question: 'What is the main source of energy for photosynthesis? 光合作用的主要能量來源是什麼?',
      options: [{ label: 'A', text: 'Moonlight 月光' }, { label: 'B', text: 'Sunlight 陽光' }, { label: 'C', text: 'Electricity 電能' }, { label: 'D', text: 'Heat 熱能' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a consumer in the food chain? 以下哪一種生物是食物鏈中的消費者?',
      options: [{ label: 'A', text: 'Tree 樹' }, { label: 'B', text: 'Grasshopper 蚱蜢' }, { label: 'C', text: 'Algae 藻類' }, { label: 'D', text: 'Rose bush 玫瑰叢' }],
      answer: 'B',
    },
    {
      question: 'Why is photosynthesis important to other living things? 為什麼光合作用對其他生物很重要?',
      options: [{ label: 'A', text: 'It produces oxygen and food 它產生氧氣和食物' }, { label: 'B', text: 'It produces carbon dioxide 它產生二氧化碳' }, { label: 'C', text: 'It produces water 它產生水' }, { label: 'D', text: 'It produces nitrogen 它產生氮氣' }],
      answer: 'A',
    },
    {
      question: 'What would happen if plants stopped performing photosynthesis? 如果植物停止進行光合作用會發生什麼?',
      options: [{ label: 'A', text: 'Animals would have no food and oxygen 動物將沒有食物和氧氣' }, { label: 'B', text: 'Animals would have more food 動物將有更多食物' }, { label: 'C', text: 'Nothing would change 什麼都不會改變' }, { label: 'D', text: 'Plants would grow faster 植物會長得更快' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Plants do not need sunlight to perform photosynthesis. 植物不需要陽光來進行光合作用。', answer: false },
    { statement: 'Photosynthesis produces oxygen as a by-product. 光合作用產生氧氣作為副產品。', answer: true },
    { statement: 'Animals can perform photosynthesis just like plants. 動物可以像植物一樣進行光合作用。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why plants are called producers in the food chain. 解釋為什麼植物被稱為食物鏈中的生產者。',
    },
    {
      question: 'Describe the conditions necessary for photosynthesis to occur. 描述光合作用發生所需的條件。',
    },
    {
      question: 'How does photosynthesis benefit animals and humans? 光合作用如何使動物和人類受益?',
    },
  ],
};

export default function FoodChainPage() {
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
             Food chain
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The food chain shows how energy flows through an ecosystem, from producers like plants to consumers like animals. Each organism plays a specific role in transferring energy, creating a delicate balance in nature.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that photosynthesis is the process by which plants produce food</li>
                <li>Be aware of the conditions necessary for photosynthesis in plants (sunlight, water, carbon dioxide, chlorophyll)</li>
                <li>State the importance of photosynthesis in plants to other living things</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a food chain mobile with paper cutouts of different organisms</li>
              <li>Role-play different organisms in a food chain to demonstrate energy transfer</li>
              <li>Build a terrarium to observe a mini-ecosystem and its food chain</li>
              <li>Play a predator-prey simulation game to understand population dynamics</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how energy flows through ecosystems and recognize the interdependence of organisms in food chains. They will be able to identify producers, consumers, and decomposers in various habitats.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the delicate balance in ecosystems</li>
              <li>Responsibility towards protecting all organisms in food chains</li>
              <li>Curiosity about how different organisms interact in nature</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of human activities on food chains and ecosystems</li>
              <li>Importance of biodiversity for maintaining stable food chains</li>
              <li>Agricultural practices and their effects on local food webs</li>
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