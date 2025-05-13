'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a way plants increase their chances of survival? 以下哪一種是植物增加生存機會的方式？',
      options: [{ label: 'A', text: 'Producing a large number of seeds 產生大量種子' }, { label: 'B', text: 'Hunting for food 獵食' }, { label: 'C', text: 'Building nests 築巢' }, { label: 'D', text: 'Swimming in water 在水中游泳' }],
      answer: 'A',
    },
    {
      question: 'How do mammals usually care for their young? 哺乳動物通常如何照顧幼崽？',
      options: [{ label: 'A', text: 'By leaving them alone 讓牠們獨處' }, { label: 'B', text: 'By feeding and protecting them 餵養和保護牠們' }, { label: 'C', text: 'By producing many eggs 產下許多卵' }, { label: 'D', text: 'By flying away 飛走' }],
      answer: 'B',
    },
    {
      question: 'What is the purpose of a plant producing many seeds? 植物產生大量種子的目的是什麼？',
      options: [{ label: 'A', text: 'To increase the chances of some seeds growing into new plants 增加一些種子長成新植物的機會' }, { label: 'B', text: 'To attract insects 吸引昆蟲' }, { label: 'C', text: 'To make the plant look pretty 讓植物看起來漂亮' }, { label: 'D', text: 'To feed animals 餵養動物' }],
      answer: 'A',
    },
    {
      question: 'Which animal lays eggs to reproduce? 哪種動物通過產卵繁殖？',
      options: [{ label: 'A', text: 'Dog 狗' }, { label: 'B', text: 'Cat 貓' }, { label: 'C', text: 'Bird 鳥' }, { label: 'D', text: 'Cow 牛' }],
      answer: 'C',
    },
    {
      question: 'Why do some animals care for their young? 為什麼有些動物會照顧幼崽？',
      options: [{ label: 'A', text: 'To increase the survival rate of their offspring 提高後代的生存率' }, { label: 'B', text: 'To play games 玩遊戲' }, { label: 'C', text: 'To show off 炫耀' }, { label: 'D', text: 'To scare other animals 嚇唬其他動物' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a way plants reproduce? 以下哪一種不是植物的繁殖方式？',
      options: [{ label: 'A', text: 'Producing seeds 產生種子' }, { label: 'B', text: 'Growing from cuttings 從插枝生長' }, { label: 'C', text: 'Laying eggs 產卵' }, { label: 'D', text: 'Spreading spores 傳播孢子' }],
      answer: 'C',
    },
    {
      question: 'What is a common way fish reproduce? 魚類常見的繁殖方式是什麼？',
      options: [{ label: 'A', text: 'Laying eggs 產卵' }, { label: 'B', text: 'Giving birth to live young 直接生下幼崽' }, { label: 'C', text: 'Producing seeds 產生種子' }, { label: 'D', text: 'Spreading spores 傳播孢子' }],
      answer: 'A',
    },
    {
      question: 'Which of the following animals does NOT care for its young? 以下哪種動物不會照顧幼崽？',
      options: [{ label: 'A', text: 'Elephant 大象' }, { label: 'B', text: 'Lion 獅子' }, { label: 'C', text: 'Frog 青蛙' }, { label: 'D', text: 'Monkey 猴子' }],
      answer: 'C',
    },
    {
      question: 'How do flowering plants attract pollinators? 開花植物如何吸引傳粉者？',
      options: [{ label: 'A', text: 'By producing bright colors and sweet smells 通過產生鮮豔的顏色和甜美的氣味' }, { label: 'B', text: 'By making loud noises 發出大聲響' }, { label: 'C', text: 'By hiding underground 躲在地下' }, { label: 'D', text: 'By growing thorns 長出刺' }],
      answer: 'A',
    },
    {
      question: 'What is the first stage in the life cycle of a butterfly? 蝴蝶生命週期的第一階段是什麼？',
      options: [{ label: 'A', text: 'Egg 卵' }, { label: 'B', text: 'Caterpillar 毛毛蟲' }, { label: 'C', text: 'Pupa 蛹' }, { label: 'D', text: 'Adult butterfly 成年蝴蝶' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All plants reproduce by producing seeds. 所有植物都通過產生種子繁殖。', answer: false },
    { statement: 'Mammals usually care for their young to increase their chances of survival. 哺乳動物通常會照顧幼崽以提高牠們的生存機會。', answer: true },
    { statement: 'Fish always give birth to live young. 魚類總是直接生下幼崽。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain one way plants ensure their seeds can grow into new plants. 解釋一種植物確保種子能長成新植物的方式。',
    },
    {
      question: 'Why is it important for some animals to care for their young? Give an example. 為什麼有些動物照顧幼崽很重要？舉一個例子。',
    },
    {
      question: 'Describe the life cycle of a frog. 描述青蛙的生命週期。',
    },
  ],
};

export default function LifeCycleOfLivingThingsPage() {
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
             Life cycle of living things
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            All living things go through a life cycle from birth to reproduction. This includes stages like growth, development, and reproduction, with different strategies used by plants and animals to ensure survival of their species.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the different ways living things increase the number of offspring and their chances of survival (e.g. plants produce a large number of seeds, mammals care for their young offspring)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a life cycle diagram for a chosen animal</li>
              <li>Plant seeds and observe their growth stages</li>
              <li>Compare life cycles of different organisms through a matching game</li>
              <li>Role-play different stages of a butterfly's life cycle</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the stages of life cycles and how different organisms ensure the survival of their species through various reproduction and care strategies.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of life cycles in nature</li>
              <li>Responsibility towards caring for living things at different life stages</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding agricultural practices based on plant life cycles</li>
              <li>Conservation efforts for endangered species considering their reproduction cycles</li>
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