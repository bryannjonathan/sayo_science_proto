'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a living thing? 以下哪一個是生物?',
      options: [{ label: 'A', text: 'Dog 狗' }, { label: 'B', text: 'Rock 石頭' }, { label: 'C', text: 'Toy car 玩具車' }, { label: 'D', text: 'Book 書' }],
      answer: 'A',
    },
    {
      question: 'What do plants need to survive? 植物需要什麼來生存?',
      options: [{ label: 'A', text: 'Air and water 空氣和水' }, { label: 'B', text: 'Only sunlight 只有陽光' }, { label: 'C', text: 'Only soil 只有土壤' }, { label: 'D', text: 'Nothing 什麼都不需要' }],
      answer: 'A',
    },
    {
      question: 'Which of these is a plant found in Hong Kong? 以下哪一個是香港常見的植物?',
      options: [{ label: 'A', text: 'Bauhinia flower 洋紫荊花' }, { label: 'B', text: 'Polar bear 北極熊' }, { label: 'C', text: 'Cactus 仙人掌' }, { label: 'D', text: 'Pineapple 菠蘿' }],
      answer: 'A',
    },
    {
      question: 'How do animals move? 動物如何移動?',
      options: [{ label: 'A', text: 'By walking, flying, or swimming 通過行走、飛行或游泳' }, { label: 'B', text: 'By staying still 保持靜止' }, { label: 'C', text: 'By growing taller 長高' }, { label: 'D', text: 'By changing color 改變顏色' }],
      answer: 'A',
    },
    {
      question: 'Which of these is NOT a living thing? 以下哪一個不是生物?',
      options: [{ label: 'A', text: 'Tree 樹' }, { label: 'B', text: 'Butterfly 蝴蝶' }, { label: 'C', text: 'Chair 椅子' }, { label: 'D', text: 'Fish 魚' }],
      answer: 'C',
    },
    {
      question: 'What do animals need to survive? 動物需要什麼來生存?',
      options: [{ label: 'A', text: 'Food and water 食物和水' }, { label: 'B', text: 'Only air 只有空氣' }, { label: 'C', text: 'Only sunlight 只有陽光' }, { label: 'D', text: 'Nothing 什麼都不需要' }],
      answer: 'A',
    },
    {
      question: 'Which of these is an animal found in Hong Kong? 以下哪一個是香港常見的動物?',
      options: [{ label: 'A', text: 'Panda 熊貓' }, { label: 'B', text: 'Elephant 大象' }, { label: 'C', text: 'Lion 獅子' }, { label: 'D', text: 'Pig 豬' }],
      answer: 'A',
    },
    {
      question: 'What is a common characteristic of living things? 生物的共同特徵是什麼?',
      options: [{ label: 'A', text: 'They grow and change 它們會成長和變化' }, { label: 'B', text: 'They never change 它們永遠不變' }, { label: 'C', text: 'They are always small 它們總是很小' }, { label: 'D', text: 'They don\'t need food 它們不需要食物' }],
      answer: 'A',
    },
    {
      question: 'Which of these is a way to care for plants? 以下哪一個是照顧植物的方法?',
      options: [{ label: 'A', text: 'Watering them 給它們澆水' }, { label: 'B', text: 'Breaking their leaves 折斷它們的葉子' }, { label: 'C', text: 'Not giving them sunlight 不給它們陽光' }, { label: 'D', text: 'Pulling them out of the soil 把它們從土壤中拔出來' }],
      answer: 'A',
    },
    {
      question: 'Why should we respect animals? 為什麼我們應該尊重動物?',
      options: [{ label: 'A', text: 'Because they are living things 因為它們是生物' }, { label: 'B', text: 'Because they are not important 因為它們不重要' }, { label: 'C', text: 'Because they don\'t feel anything 因為它們沒有感覺' }, { label: 'D', text: 'Because they are not alive 因為它們沒有生命' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'A chair is a living thing. 椅子是生物。', answer: false },
    { statement: 'Plants need water to survive. 植物需要水來生存。', answer: true },
    { statement: 'Animals do not need air to live. 動物不需要空氣來生存。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two living things and two non-living things. 列出兩種生物和兩種非生物。',
    },
    {
      question: 'What are two things plants need to grow? 植物需要哪兩樣東西來生長?',
    },
    {
      question: 'How can you show respect for animals and plants? 你如何表現出對動植物的尊重?',
    },
  ],
};

export default function DifferenceBetweenLivingThingsAndNonLivingThingsPage() {
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
             Difference between living things and non-living things
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Living things grow, reproduce, and respond to their environment, while non-living things do not. Examples of living things include plants and animals, while non-living things include rocks and toys.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that both animals and plants are living things</li>
                <li>Give examples of common animals and plants found in Hong Kong</li>
                <li>List the survival conditions for animals and plants (e.g. air, water)</li>
                <li>Describe some simple common characteristics of animals (e.g. movement)</li>
                <li>Respect and care for animals and plants</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify objects as living or non-living in a sorting game</li>
              <li>Observe and record changes in a plant over time</li>
              <li>Create a collage of living and non-living things found in the school environment</li>
              <li>Role-play how animals move differently from non-living objects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify living and non-living things and explain their key differences. They will understand basic needs of living organisms.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for all living things</li>
              <li>Responsibility towards caring for plants and animals</li>
              <li>Curiosity about the natural world</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how living things interact with their environment</li>
              <li>Recognizing human impact on living organisms in urban areas</li>
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