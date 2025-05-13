'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the role of plants in a food chain? 植物在食物鏈中的角色是什麼?',
      options: [{ label: 'A', text: 'They produce their own food 它們自己製造食物' }, { label: 'B', text: 'They eat other animals 它們吃其他動物' }, { label: 'C', text: 'They break down dead organisms 它們分解死去的生物' }, { label: 'D', text: 'They do not have a role 它們沒有角色' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a predator-prey relationship? 以下哪個是捕食者與獵物的關係?',
      options: [{ label: 'A', text: 'Lion and grass 獅子和草' }, { label: 'B', text: 'Rabbit and carrot 兔子和胡蘿蔔' }, { label: 'C', text: 'Fox and rabbit 狐狸和兔子' }, { label: 'D', text: 'Tree and sunlight 樹和陽光' }],
      answer: 'C',
    },
    {
      question: 'What do we call animals that eat plants? 我們稱吃植物的動物為什麼?',
      options: [{ label: 'A', text: 'Producers 生產者' }, { label: 'B', text: 'Herbivores 草食動物' }, { label: 'C', text: 'Carnivores 肉食動物' }, { label: 'D', text: 'Decomposers 分解者' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a producer in a food chain? 以下哪個是食物鏈中的生產者?',
      options: [{ label: 'A', text: 'Grass 草' }, { label: 'B', text: 'Rabbit 兔子' }, { label: 'C', text: 'Fox 狐狸' }, { label: 'D', text: 'Mushroom 蘑菇' }],
      answer: 'A',
    },
    {
      question: 'What is the role of decomposers in a food chain? 分解者在食物鏈中的角色是什麼?',
      options: [{ label: 'A', text: 'They produce food for others 它們為其他生物製造食物' }, { label: 'B', text: 'They break down dead organisms 它們分解死去的生物' }, { label: 'C', text: 'They hunt other animals 它們獵捕其他動物' }, { label: 'D', text: 'They only eat plants 它們只吃植物' }],
      answer: 'B',
    },
    {
      question: 'Which animal is a predator in this food chain: grass → rabbit → fox? 在食物鏈「草 → 兔子 → 狐狸」中，哪個動物是捕食者?',
      options: [{ label: 'A', text: 'Grass 草' }, { label: 'B', text: 'Rabbit 兔子' }, { label: 'C', text: 'Fox 狐狸' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'C',
    },
    {
      question: 'What do carnivores eat? 肉食動物吃什麼?',
      options: [{ label: 'A', text: 'Only plants 只吃植物' }, { label: 'B', text: 'Only other animals 只吃其他動物' }, { label: 'C', text: 'Both plants and animals 植物和動物都吃' }, { label: 'D', text: 'Nothing 什麼都不吃' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT part of a food chain? 以下哪個不屬於食物鏈的一部分?',
      options: [{ label: 'A', text: 'Sunlight 陽光' }, { label: 'B', text: 'Grass 草' }, { label: 'C', text: 'Rabbit 兔子' }, { label: 'D', text: 'Fox 狐狸' }],
      answer: 'A',
    },
    {
      question: 'What happens if all the plants in a food chain die? 如果食物鏈中的所有植物都死亡，會發生什麼?',
      options: [{ label: 'A', text: 'Nothing changes 沒有任何變化' }, { label: 'B', text: 'Only herbivores are affected 只有草食動物受影響' }, { label: 'C', text: 'The entire food chain is affected 整個食物鏈都會受影響' }, { label: 'D', text: 'Only carnivores are affected 只有肉食動物受影響' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is an example of a prey animal? 以下哪個是獵物動物的例子?',
      options: [{ label: 'A', text: 'Lion 獅子' }, { label: 'B', text: 'Eagle 老鷹' }, { label: 'C', text: 'Rabbit 兔子' }, { label: 'D', text: 'Shark 鯊魚' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'All animals in a food chain are predators. 食物鏈中的所有動物都是捕食者。', answer: false },
    { statement: 'Plants are producers because they can make their own food. 植物是生產者，因為它們可以自己製造食物。', answer: true },
    { statement: 'A food chain always starts with a carnivore. 食物鏈總是以肉食動物開始。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give an example of a simple food chain and describe the role of each living thing in it. 舉一個簡單食物鏈的例子，並描述其中每個生物的角色。',
    },
    {
      question: 'Why are plants important in a food chain? 為什麼植物在食物鏈中很重要?',
    },
    {
      question: 'What might happen if a predator is removed from a food chain? 如果從食物鏈中移除一個捕食者，可能會發生什麼?',
    },
  ],
}

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
            A food chain shows how energy flows from one organism to another in an ecosystem. Plants are producers, herbivores eat plants, and carnivores eat other animals.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Describe the role of each living thing in a simple food chain (e.g. plants produce their own food, some animals eat plants, some animals eat other animals)</li>
                <li>Identify common predators and their prey, and describe their relationships</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a food chain mobile with paper cutouts of different organisms</li>
              <li>Play a predator-prey simulation game in the schoolyard</li>
              <li>Observe and record feeding relationships in a local ecosystem</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how energy flows through ecosystems and recognize the interconnectedness of all living things in a food chain.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the balance of nature and all living things</li>
              <li>Responsibility towards protecting ecosystems and biodiversity</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of human activities on food chains (e.g. deforestation, pollution)</li>
              <li>Importance of conservation efforts to maintain healthy ecosystems</li>
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