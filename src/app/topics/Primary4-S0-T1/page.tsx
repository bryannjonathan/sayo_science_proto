'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which part of a flowering plant is involved in reproduction? 哪一部分的開花植物參與繁殖?',
      options: [{ label: 'A', text: 'Flower 花' }, { label: 'B', text: 'Leaf 葉子' }, { label: 'C', text: 'Root 根' }, { label: 'D', text: 'Stem 莖' }],
      answer: 'A',
    },
    {
      question: 'Which plant can reproduce through its leaves? 哪一種植物可以通過葉子繁殖?',
      options: [{ label: 'A', text: 'Radish 蘿蔔' }, { label: 'B', text: 'Sweet potato 番薯' }, { label: 'C', text: 'Echeveria 石蓮花' }, { label: 'D', text: 'Garlic 大蒜' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is an inherited characteristic in humans? 以下哪一項是人類的遺傳特徵?',
      options: [{ label: 'A', text: 'Eye colour 眼睛顏色' }, { label: 'B', text: 'Hair length 頭髮長度' }, { label: 'C', text: 'Scar 疤痕' }, { label: 'D', text: 'Tattoo 紋身' }],
      answer: 'A',
    },
    {
      question: 'Which plant can reproduce through its stem? 哪一種植物可以通過莖繁殖?',
      options: [{ label: 'A', text: 'Radish 蘿蔔' }, { label: 'B', text: 'Sweet potato 番薯' }, { label: 'C', text: 'Onion 洋蔥' }, { label: 'D', text: 'Kalanchoe pinnata 落地生根' }],
      answer: 'C',
    },
    {
      question: 'What is an example of a non-inherited characteristic in humans? 以下哪一項是人類的非遺傳特徵?',
      options: [{ label: 'A', text: 'Skin colour 膚色' }, { label: 'B', text: 'Ability to roll the tongue 捲舌能力' }, { label: 'C', text: 'Hair length 頭髮長度' }, { label: 'D', text: 'Shape of earlobe 耳垂形狀' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is true about offspring of plants and animals? 關於動植物的後代，以下哪一項是正確的?',
      options: [{ label: 'A', text: 'They are identical to their parents 它們與父母完全相同' }, { label: 'B', text: 'They have no similarities to their parents 它們與父母沒有任何相似之處' }, { label: 'C', text: 'They have some similar characteristics to their parents 它們與父母有一些相似的特徵' }, { label: 'D', text: 'They are completely different from their parents 它們與父母完全不同' }],
      answer: 'C',
    },
    {
      question: 'Which of the following can reproduce through roots? 以下哪一種可以通過根繁殖?',
      options: [{ label: 'A', text: 'Onion 洋蔥' }, { label: 'B', text: 'Garlic 大蒜' }, { label: 'C', text: 'Radish 蘿蔔' }, { label: 'D', text: 'Echeveria 石蓮花' }],
      answer: 'C',
    },
    {
      question: 'What is an inherited characteristic in plants? 以下哪一項是植物的遺傳特徵?',
      options: [{ label: 'A', text: 'Number of petals 花瓣數量' }, { label: 'B', text: 'Size of leaves 葉子大小' }, { label: 'C', text: 'Damage from insects 昆蟲造成的損害' }, { label: 'D', text: 'Broken stem 斷裂的莖' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a human inherited trait? 以下哪一項是人類的遺傳特徵例子?',
      options: [{ label: 'A', text: 'Ability to bend the thumb backward 拇指向後彎曲的能力' }, { label: 'B', text: 'Learning to ride a bike 學習騎自行車' }, { label: 'C', text: 'Speaking a language 說一種語言' }, { label: 'D', text: 'Having a haircut 剪頭髮' }],
      answer: 'A',
    },
    {
      question: 'Which part of a sweet potato is used for reproduction? 番薯的哪一部分用於繁殖?',
      options: [{ label: 'A', text: 'Flower 花' }, { label: 'B', text: 'Root 根' }, { label: 'C', text: 'Leaf 葉子' }, { label: 'D', text: 'Stem 莖' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'All plants reproduce only through flowers. 所有植物只能通過花繁殖。', answer: false },
    { statement: 'The ability to roll the tongue is an inherited characteristic. 捲舌能力是一種遺傳特徵。', answer: true },
    { statement: 'Hair length in humans is an inherited characteristic. 人類的頭髮長度是一種遺傳特徵。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two plants that can reproduce through stems. 列出兩種可以通過莖繁殖的植物。',
    },
    {
      question: 'Give one example of a human characteristic that is inherited and one that is not. 舉出一個人類遺傳特徵的例子和一個非遺傳特徵的例子。',
    },
    {
      question: 'Explain why offspring of plants and animals have similar characteristics to their parents. 解釋為什麼動植物的後代與父母有相似的特徵。',
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
            Explore how living things pass traits to their offspring through reproduction. Learn about plant reproduction methods and inherited characteristics in both plants and animals.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the reproductive process of flowering plants</li>
                <li>Be aware that some plants can reproduce through roots, stems or leaves (e.g. radish and sweet potato can reproduce through roots, onion and garlic can reproduce through stems, Echeveria and Kalanchoe pinnata can reproduce through leaves)</li>
                <li>Be aware that offspring produced by reproduction of animals and plants have similar characteristics to their parents</li>
                <li>Identify characteristics that animals and plants inherited from their parents (e.g. skin colour, eye colour and shape of earlobe in humans; colour and number of petals) as well as those that are not inherited from their parents (e.g. hair length in humans)</li>
                <li>Be aware that some human characteristics are inherited (e.g. ability to roll the tongue and bend the thumb backward) and cannot be changed through acquired learning</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Plant reproduction scavenger hunt in the school garden</li>
              <li>Family traits survey to identify inherited characteristics</li>
              <li>Observing plant propagation through different methods</li>
              <li>Create a family tree showing inherited traits</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how traits are passed from parents to offspring and identify different methods of plant reproduction.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of life and reproduction methods</li>
              <li>Respect for family similarities and differences</li>
              <li>Curiosity about inherited traits in living things</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Application of plant reproduction knowledge in agriculture</li>
              <li>Understanding genetic inheritance in medicine and breeding</li>
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