'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the first stage in the life cycle of a frog? 青蛙生命週期的第一階段是什麼?',
      options: [{ label: 'A', text: 'Egg 卵' }, { label: 'B', text: 'Tadpole 蝌蚪' }, { label: 'C', text: 'Adult frog 成年青蛙' }, { label: 'D', text: 'Froglet 幼蛙' }],
      answer: 'A',
    },
    {
      question: 'Which animal does NOT go through metamorphosis? 哪種動物不經歷變態?',
      options: [{ label: 'A', text: 'Butterfly 蝴蝶' }, { label: 'B', text: 'Frog 青蛙' }, { label: 'C', text: 'Chicken 雞' }, { label: 'D', text: 'Dog 狗' }],
      answer: 'D',
    },
    {
      question: 'What is the correct order of a butterfly\'s life cycle? 蝴蝶生命週期的正確順序是什麼?',
      options: [{ label: 'A', text: 'Egg → Larva → Pupa → Adult 卵 → 幼蟲 → 蛹 → 成蟲' }, { label: 'B', text: 'Egg → Pupa → Larva → Adult 卵 → 蛹 → 幼蟲 → 成蟲' }, { label: 'C', text: 'Larva → Egg → Pupa → Adult 幼蟲 → 卵 → 蛹 → 成蟲' }, { label: 'D', text: 'Adult → Egg → Larva → Pupa 成蟲 → 卵 → 幼蟲 → 蛹' }],
      answer: 'A',
    },
    {
      question: 'What do chickens hatch from? 小雞從哪裡孵化出來?',
      options: [{ label: 'A', text: 'Eggs 蛋' }, { label: 'B', text: 'Seeds 種子' }, { label: 'C', text: 'Pupae 蛹' }, { label: 'D', text: 'Leaves 葉子' }],
      answer: 'A',
    },
    {
      question: 'Which stage comes after germination in a plant\'s life cycle? 植物生命週期中，發芽之後是哪個階段?',
      options: [{ label: 'A', text: 'Growth 生長' }, { label: 'B', text: 'Reproduction 繁殖' }, { label: 'C', text: 'Seed dispersal 種子傳播' }, { label: 'D', text: 'Death 死亡' }],
      answer: 'A',
    },
    {
      question: 'What do dogs give birth to? 狗生下什麼?',
      options: [{ label: 'A', text: 'Puppies 小狗' }, { label: 'B', text: 'Kittens 小貓' }, { label: 'C', text: 'Chicks 小雞' }, { label: 'D', text: 'Tadpoles 蝌蚪' }],
      answer: 'A',
    },
    {
      question: 'Which part of a flowering plant grows into a fruit? 開花植物的哪個部分會長成果實?',
      options: [{ label: 'A', text: 'Flower 花' }, { label: 'B', text: 'Leaf 葉子' }, { label: 'C', text: 'Root 根' }, { label: 'D', text: 'Stem 莖' }],
      answer: 'A',
    },
    {
      question: 'How do most flowering plants reproduce? 大多數開花植物如何繁殖?',
      options: [{ label: 'A', text: 'Seeds 種子' }, { label: 'B', text: 'Eggs 蛋' }, { label: 'C', text: 'Spores 孢子' }, { label: 'D', text: 'Buds 芽' }],
      answer: 'A',
    },
    {
      question: 'What is the final stage in the life cycle of all living things? 所有生物生命週期的最後階段是什麼?',
      options: [{ label: 'A', text: 'Death 死亡' }, { label: 'B', text: 'Growth 生長' }, { label: 'C', text: 'Reproduction 繁殖' }, { label: 'D', text: 'Birth 出生' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to respect and care for life? 為什麼尊重和愛護生命很重要?',
      options: [{ label: 'A', text: 'All living things are important 所有生物都很重要' }, { label: 'B', text: 'It makes us happy 這讓我們快樂' }, { label: 'C', text: 'We can eat them 我們可以吃它們' }, { label: 'D', text: 'They look pretty 它們看起來很漂亮' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All living things go through the same life cycle stages. 所有生物都經歷相同的生命週期階段。', answer: false },
    { statement: 'A seed grows into a plant through germination. 種子通過發芽長成植物。', answer: true },
    { statement: 'Dogs give birth to tadpoles. 狗生下蝌蚪。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe the life cycle of a butterfly in your own words. 用自己的話描述蝴蝶的生命週期。',
    },
    {
      question: 'How can you show respect and care for living things around you? 你如何表現出對周圍生命的尊重和關愛?',
    },
    {
      question: 'What are the similarities between the life cycles of a frog and a butterfly? 青蛙和蝴蝶的生命週期有什麼相似之處?',
    },
  ],
}

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
            All living things go through a life cycle from birth to death, with distinct stages of growth and development. This includes animals like frogs and butterflies, as well as plants that grow from seeds.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that living things go through the life cycle of birth, growth, reproduction and death</li>
                <li>Using frogs, butterflies, dogs and chickens as examples, recognise the changes in different animals at different stages of their life cycles</li>
                <li>Identify the different stages of the life cycle of flowering plants (germination, growth, reproduction, seed dispersal)</li>
                <li>Respect and care for life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a life cycle wheel showing stages of a butterfly's development</li>
              <li>Plant seeds and document daily growth changes in a journal</li>
              <li>Match animal pictures to their correct life cycle stages</li>
              <li>Role-play different life cycle stages through movement activities</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the universal stages of life cycles and recognize patterns in how different organisms grow and develop.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of life cycles in nature</li>
              <li>Responsibility towards caring for living things at all life stages</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding agricultural cycles for food production</li>
              <li>Conservation efforts for endangered species at different life stages</li>
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