'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the first step in a food chain? 食物鏈的第一步是什麼?',
      options: [{ label: 'A', text: 'Plants 植物' }, { label: 'B', text: 'Herbivores 草食動物' }, { label: 'C', text: 'Carnivores 肉食動物' }, { label: 'D', text: 'Sun 太陽' }],
      answer: 'A',
    },
    {
      question: 'Which animal eats plants? 哪種動物吃植物?',
      options: [{ label: 'A', text: 'Lion 獅子' }, { label: 'B', text: 'Rabbit 兔子' }, { label: 'C', text: 'Eagle 老鷹' }, { label: 'D', text: 'Shark 鯊魚' }],
      answer: 'B',
    },
    {
      question: 'What do carnivores eat? 肉食動物吃什麼?',
      options: [{ label: 'A', text: 'Plants 植物' }, { label: 'B', text: 'Other animals 其他動物' }, { label: 'C', text: 'Rocks 石頭' }, { label: 'D', text: 'Water 水' }],
      answer: 'B',
    },
    {
      question: 'Where do plants get their energy from? 植物從哪裡獲得能量?',
      options: [{ label: 'A', text: 'From the soil 從土壤' }, { label: 'B', text: 'From the sun 從太陽' }, { label: 'C', text: 'From animals 從動物' }, { label: 'D', text: 'From the air 從空氣' }],
      answer: 'B',
    },
    {
      question: 'Which of these is a herbivore? 以下哪個是草食動物?',
      options: [{ label: 'A', text: 'Cow 牛' }, { label: 'B', text: 'Fox 狐狸' }, { label: 'C', text: 'Tiger 老虎' }, { label: 'D', text: 'Snake 蛇' }],
      answer: 'A',
    },
    {
      question: 'What is a food chain? 什麼是食物鏈?',
      options: [{ label: 'A', text: 'A chain made of food 用食物做成的鏈子' }, { label: 'B', text: 'A way energy moves from plants to animals 能量從植物傳遞到動物的方式' }, { label: 'C', text: 'A type of animal 一種動物' }, { label: 'D', text: 'A place where animals live 動物居住的地方' }],
      answer: 'B',
    },
    {
      question: 'Which animal is at the top of the food chain? 哪種動物位於食物鏈的頂端?',
      options: [{ label: 'A', text: 'Grass 草' }, { label: 'B', text: 'Rabbit 兔子' }, { label: 'C', text: 'Fox 狐狸' }, { label: 'D', text: 'Lion 獅子' }],
      answer: 'D',
    },
    {
      question: 'What happens if one part of the food chain is missing? 如果食物鏈的一部分缺失會發生什麼?',
      options: [{ label: 'A', text: 'Nothing happens 什麼都不會發生' }, { label: 'B', text: 'The whole food chain is affected 整個食物鏈都會受到影響' }, { label: 'C', text: 'Animals will grow bigger 動物會長得更大' }, { label: 'D', text: 'Plants will disappear 植物會消失' }],
      answer: 'B',
    },
    {
      question: 'Which of these is NOT part of a food chain? 以下哪個不是食物鏈的一部分?',
      options: [{ label: 'A', text: 'Sun 太陽' }, { label: 'B', text: 'Plants 植物' }, { label: 'C', text: 'Animals 動物' }, { label: 'D', text: 'Rocks 石頭' }],
      answer: 'D',
    },
    {
      question: 'Why do animals need to eat? 動物為什麼需要進食?',
      options: [{ label: 'A', text: 'To get energy 為了獲得能量' }, { label: 'B', text: 'To sleep 為了睡覺' }, { label: 'C', text: 'To play 為了玩耍' }, { label: 'D', text: 'To swim 為了游泳' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All animals eat plants. 所有動物都吃植物。', answer: false },
    { statement: 'Plants get their energy from the sun. 植物從太陽獲得能量。', answer: true },
    { statement: 'A food chain always starts with animals. 食物鏈總是從動物開始。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give an example of a simple food chain. 舉一個簡單食物鏈的例子。',
    },
    {
      question: 'Why are plants important in a food chain? 為什麼植物在食物鏈中很重要?',
    },
    {
      question: 'What would happen if there were no plants in a food chain? 如果食物鏈中沒有植物會發生什麼?',
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
            A food chain shows how energy flows from one organism to another in an ecosystem. Plants start the chain by converting sunlight into energy, which is then passed to animals that eat them.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that animals obtain the energy required for life processes (growth and repair, activity, reproduction) through feeding</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a food chain mobile with paper cutouts of different organisms</li>
              <li>Play a "Who eats who?" matching game with animal cards</li>
              <li>Observe a real ecosystem (like a garden) and identify food chain components</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how energy flows through ecosystems and recognize the roles of producers, consumers, and decomposers in food chains.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the balance of nature and interconnectedness of living things</li>
              <li>Responsibility towards protecting all parts of the food chain</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how human activities can disrupt food chains in ecosystems</li>
              <li>Recognizing the importance of biodiversity for stable food chains</li>
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