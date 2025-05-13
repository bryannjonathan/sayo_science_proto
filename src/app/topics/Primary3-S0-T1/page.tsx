'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following animals is a vertebrate? 以下哪種動物是脊椎動物?',
      options: [{ label: 'A', text: 'Butterfly 蝴蝶' }, { label: 'B', text: 'Jellyfish 水母' }, { label: 'C', text: 'Dog 狗' }, { label: 'D', text: 'Earthworm 蚯蚓' }],
      answer: 'C',
    },
    {
      question: 'Which animal group has feathers? 哪種動物群體有羽毛?',
      options: [{ label: 'A', text: 'Mammals 哺乳動物' }, { label: 'B', text: 'Birds 鳥類' }, { label: 'C', text: 'Reptiles 爬行動物' }, { label: 'D', text: 'Amphibians 兩棲動物' }],
      answer: 'B',
    },
    {
      question: 'How many legs do insects usually have? 昆蟲通常有多少條腿?',
      options: [{ label: 'A', text: '2 兩條' }, { label: 'B', text: '4 四條' }, { label: 'C', text: '6 六條' }, { label: 'D', text: '8 八條' }],
      answer: 'C',
    },
    {
      question: 'Which of these is a characteristic of mammals? 以下哪項是哺乳動物的特徵?',
      options: [{ label: 'A', text: 'Lay eggs 產卵' }, { label: 'B', text: 'Have gills 有鰓' }, { label: 'C', text: 'Feed milk to their young 用乳汁哺育幼崽' }, { label: 'D', text: 'Have scales 有鱗片' }],
      answer: 'C',
    },
    {
      question: 'Which animal group lives both in water and on land? 哪種動物群體既生活在水中也生活在陸地上?',
      options: [{ label: 'A', text: 'Fish 魚類' }, { label: 'B', text: 'Amphibians 兩棲動物' }, { label: 'C', text: 'Reptiles 爬行動物' }, { label: 'D', text: 'Birds 鳥類' }],
      answer: 'B',
    },
    {
      question: 'Which of these is a non-flowering plant? 以下哪種是非開花植物?',
      options: [{ label: 'A', text: 'Rose 玫瑰' }, { label: 'B', text: 'Sunflower 向日葵' }, { label: 'C', text: 'Fern 蕨類' }, { label: 'D', text: 'Tulip 鬱金香' }],
      answer: 'C',
    },
    {
      question: 'What do fish use to breathe underwater? 魚用什麼在水下呼吸?',
      options: [{ label: 'A', text: 'Lungs 肺' }, { label: 'B', text: 'Gills 鰓' }, { label: 'C', text: 'Skin 皮膚' }, { label: 'D', text: 'Nose 鼻子' }],
      answer: 'B',
    },
    {
      question: 'Which animal has dry, scaly skin? 哪種動物有乾燥、有鱗片的皮膚?',
      options: [{ label: 'A', text: 'Frog 青蛙' }, { label: 'B', text: 'Snake 蛇' }, { label: 'C', text: 'Dolphin 海豚' }, { label: 'D', text: 'Eagle 老鷹' }],
      answer: 'B',
    },
    {
      question: 'What is the main characteristic of flowering plants? 開花植物的主要特徵是什麼?',
      options: [{ label: 'A', text: 'They produce cones 它們產生球果' }, { label: 'B', text: 'They produce flowers 它們開花' }, { label: 'C', text: 'They have no leaves 它們沒有葉子' }, { label: 'D', text: 'They cannot make food 它們不能製造食物' }],
      answer: 'B',
    },
    {
      question: 'Which of these is an invertebrate? 以下哪種是無脊椎動物?',
      options: [{ label: 'A', text: 'Shark 鯊魚' }, { label: 'B', text: 'Frog 青蛙' }, { label: 'C', text: 'Snail 蝸牛' }, { label: 'D', text: 'Lizard 蜥蜴' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'All insects have wings. 所有昆蟲都有翅膀。', answer: false },
    { statement: 'Mammals are warm-blooded animals. 哺乳動物是溫血動物。', answer: true },
    { statement: 'Ferns are flowering plants. 蕨類是開花植物。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two characteristics of birds. 列出鳥類的兩個特徵。',
    },
    {
      question: 'How can you tell if an animal is a mammal? Give one example. 你如何判斷一個動物是哺乳動物？舉一個例子。',
    },
    {
      question: 'What is the difference between flowering and non-flowering plants? 開花植物和非開花植物有什麼區別？',
    },
  ],
};

export default function DiversityAndClassificationOfLivingThingsPage() {
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
             Diversity and classification of living things
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Living things are incredibly diverse and can be classified into different groups based on their characteristics. This topic explores how scientists categorize animals and plants to better understand the natural world.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that animals are classified into vertebrates and invertebrates</li>
                <li>Describe the key characteristics of some animal groups (insects, fish, amphibians, reptiles, birds, mammals)</li>
                <li>Classify animals according to their characteristics</li>
                <li>Be aware that plants are classified into flowering plants and non-flowering plants</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify animal picture cards into vertebrate and invertebrate groups</li>
              <li>Create a characteristics chart comparing different animal groups</li>
              <li>Sort plant specimens into flowering and non-flowering categories</li>
              <li>Field trip to observe and document local biodiversity</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to classify living things based on observable characteristics and understand the diversity of life forms.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for biodiversity and nature's complexity</li>
              <li>Respect for all living things and their habitats</li>
              <li>Curiosity about the natural world</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how classification helps in scientific research</li>
              <li>Recognizing the importance of biodiversity conservation</li>
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