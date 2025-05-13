'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following animals is a live-bearing animal? 以下哪種動物是胎生動物?',
      options: [{ label: 'A', text: 'Dog 狗' }, { label: 'B', text: 'Chicken 雞' }, { label: 'C', text: 'Turtle 烏龜' }, { label: 'D', text: 'Frog 青蛙' }],
      answer: 'A',
    },
    {
      question: 'Which of the following animals is an egg-laying animal? 以下哪種動物是卵生動物?',
      options: [{ label: 'A', text: 'Cat 貓' }, { label: 'B', text: 'Duck 鴨子' }, { label: 'C', text: 'Cow 牛' }, { label: 'D', text: 'Rabbit 兔子' }],
      answer: 'B',
    },
    {
      question: 'How do live-bearing animals give birth to their young? 胎生動物如何生下幼崽?',
      options: [{ label: 'A', text: 'By laying eggs 通過產卵' }, { label: 'B', text: 'By giving birth to live babies 通過生下活的幼崽' }, { label: 'C', text: 'By splitting into two 通過分裂成兩個' }, { label: 'D', text: 'By growing from seeds 通過從種子生長' }],
      answer: 'B',
    },
    {
      question: 'What is the main difference between live-bearing and egg-laying animals? 胎生動物和卵生動物的主要區別是什麼?',
      options: [{ label: 'A', text: 'Live-bearing animals lay eggs, egg-laying animals give birth to live babies 胎生動物產卵，卵生動物生下活的幼崽' }, { label: 'B', text: 'Live-bearing animals give birth to live babies, egg-laying animals lay eggs 胎生動物生下活的幼崽，卵生動物產卵' }, { label: 'C', text: 'Both give birth to live babies 兩者都生下活的幼崽' }, { label: 'D', text: 'Both lay eggs 兩者都產卵' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of an egg-laying mammal? 以下哪個是卵生哺乳動物的例子?',
      options: [{ label: 'A', text: 'Kangaroo 袋鼠' }, { label: 'B', text: 'Platypus 鴨嘴獸' }, { label: 'C', text: 'Elephant 大象' }, { label: 'D', text: 'Lion 獅子' }],
      answer: 'B',
    },
    {
      question: 'Where do egg-laying animals usually lay their eggs? 卵生動物通常在哪裡產卵?',
      options: [{ label: 'A', text: 'In water or nests 在水中或巢中' }, { label: 'B', text: 'Inside their bodies 在體內' }, { label: 'C', text: 'On trees only 只在樹上' }, { label: 'D', text: 'Underground only 只在地下' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a live-bearing animal? 以下哪個不是胎生動物?',
      options: [{ label: 'A', text: 'Whale 鯨魚' }, { label: 'B', text: 'Penguin 企鵝' }, { label: 'C', text: 'Human 人類' }, { label: 'D', text: 'Dolphin 海豚' }],
      answer: 'B',
    },
    {
      question: 'What do we call animals that give birth to live babies? 我們稱生下活幼崽的動物為什麼?',
      options: [{ label: 'A', text: 'Egg-laying animals 卵生動物' }, { label: 'B', text: 'Live-bearing animals 胎生動物' }, { label: 'C', text: 'Plants 植物' }, { label: 'D', text: 'Insects 昆蟲' }],
      answer: 'B',
    },
    {
      question: 'Which of the following animals is both egg-laying and live-bearing? 以下哪種動物既是卵生又是胎生?',
      options: [{ label: 'A', text: 'Shark 鯊魚' }, { label: 'B', text: 'Snake 蛇' }, { label: 'C', text: 'Bird 鳥' }, { label: 'D', text: 'None of the above 以上都不是' }],
      answer: 'D',
    },
    {
      question: 'Why do live-bearing animals not lay eggs? 為什麼胎生動物不產卵?',
      options: [{ label: 'A', text: 'Because they are too big 因為它們太大' }, { label: 'B', text: 'Because their babies develop inside the mother\'s body 因為它們的幼崽在母體內發育' }, { label: 'C', text: 'Because they don\'t like eggs 因為它們不喜歡蛋' }, { label: 'D', text: 'Because they are mammals 因為它們是哺乳動物' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'All mammals are live-bearing animals. 所有哺乳動物都是胎生動物。', answer: false },
    { statement: 'Birds are egg-laying animals. 鳥類是卵生動物。', answer: true },
    { statement: 'Frogs give birth to live babies. 青蛙生下活的幼崽。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two live-bearing animals and two egg-laying animals. 列出兩種胎生動物和兩種卵生動物。',
    },
    {
      question: 'Explain one advantage of being a live-bearing animal. 解釋胎生動物的一個優勢。',
    },
    {
      question: 'How do egg-laying animals protect their eggs? 卵生動物如何保護它們的卵?',
    },
  ],
};

export default function HeredityAndReproductionPage() {
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
             Heredity and reproduction
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how traits are passed from parents to offspring and the different ways animals reproduce. Understand the differences between live-bearing and egg-laying animals in nature.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the reproductive processes of live-bearing and egg-laying animals</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Sort animals into live-bearing and egg-laying categories</li>
              <li>Create a family tree showing inherited traits</li>
              <li>Observe and compare different animal eggs</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to differentiate between live-bearing and egg-laying animals and explain basic heredity concepts.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of life</li>
              <li>Respect for all living creatures</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How animal reproduction affects ecosystems</li>
              <li>Human impact on animal reproduction</li>
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