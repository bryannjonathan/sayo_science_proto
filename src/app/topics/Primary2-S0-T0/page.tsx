'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following can grow and develop? 以下哪一個可以生長和發展?',
      options: [{ label: 'A', text: 'A tree 一棵樹' }, { label: 'B', text: 'A rock 一塊石頭' }, { label: 'C', text: 'A chair 一張椅子' }, { label: 'D', text: 'A book 一本書' }],
      answer: 'A',
    },
    {
      question: 'Which of the following can reproduce? 以下哪一個可以繁殖?',
      options: [{ label: 'A', text: 'A cat 一隻貓' }, { label: 'B', text: 'A table 一張桌子' }, { label: 'C', text: 'A pencil 一支鉛筆' }, { label: 'D', text: 'A toy car 一輛玩具車' }],
      answer: 'A',
    },
    {
      question: 'Which of the following can respond to stimuli? 以下哪一個可以對刺激作出反應?',
      options: [{ label: 'A', text: 'A flower 一朵花' }, { label: 'B', text: 'A computer 一台電腦' }, { label: 'C', text: 'A shoe 一隻鞋' }, { label: 'D', text: 'A bottle 一個瓶子' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a living thing? 以下哪一個是生物?',
      options: [{ label: 'A', text: 'A dog 一隻狗' }, { label: 'B', text: 'A book 一本書' }, { label: 'C', text: 'A toy 一個玩具' }, { label: 'D', text: 'A cup 一個杯子' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a non-living thing? 以下哪一個是非生物?',
      options: [{ label: 'A', text: 'A bird 一隻鳥' }, { label: 'B', text: 'A plant 一株植物' }, { label: 'C', text: 'A table 一張桌子' }, { label: 'D', text: 'A fish 一條魚' }],
      answer: 'C',
    },
    {
      question: 'What do living things need to survive? 生物需要什麼來生存?',
      options: [{ label: 'A', text: 'Water 水' }, { label: 'B', text: 'Food 食物' }, { label: 'C', text: 'Air 空氣' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following can move on its own? 以下哪一個可以自己移動?',
      options: [{ label: 'A', text: 'A car 一輛汽車' }, { label: 'B', text: 'A bicycle 一輛自行車' }, { label: 'C', text: 'A rabbit 一隻兔子' }, { label: 'D', text: 'A ball 一個球' }],
      answer: 'C',
    },
    {
      question: 'Which of the following cannot reproduce? 以下哪一個不能繁殖?',
      options: [{ label: 'A', text: 'A tree 一棵樹' }, { label: 'B', text: 'A human 一個人' }, { label: 'C', text: 'A rock 一塊石頭' }, { label: 'D', text: 'A fish 一條魚' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is true about living things? 以下關於生物的陳述哪一個是正確的?',
      options: [{ label: 'A', text: 'They can grow 它們可以生長' }, { label: 'B', text: 'They can reproduce 它們可以繁殖' }, { label: 'C', text: 'They can respond to stimuli 它們可以對刺激作出反應' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is not a characteristic of living things? 以下哪一個不是生物的特徵?',
      options: [{ label: 'A', text: 'Can grow 可以生長' }, { label: 'B', text: 'Can reproduce 可以繁殖' }, { label: 'C', text: 'Can move on its own 可以自己移動' }, { label: 'D', text: 'Can be made of metal 可以由金屬製成' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Living things can grow and develop. 生物可以生長和發展。', answer: true },
    { statement: 'A chair can reproduce. 椅子可以繁殖。', answer: false },
    { statement: 'Non-living things can respond to stimuli. 非生物可以對刺激作出反應。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two living things and two non-living things. 列出兩種生物和兩種非生物。',
    },
    {
      question: 'How can you tell if something is a living thing? 你如何判斷某物是生物?',
    },
    {
      question: 'Why is a rock not a living thing? 為什麼石頭不是生物?',
    },
  ],
}

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
            Living things can grow, reproduce, and respond to their environment, while non-living things cannot. This fundamental difference helps us classify objects in our world and understand biological processes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the differences between living things and non-living things (e.g. living things can reproduce, grow and develop, and respond to stimuli, while non-living things cannot)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Sort objects into living and non-living categories</li>
              <li>Observe plant growth over time and compare to non-living objects</li>
              <li>Create a Venn diagram comparing characteristics</li>
              <li>Play "Living or Not" guessing game with classroom objects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify living and non-living things and explain the key differences between them.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of living things</li>
              <li>Curiosity about how living organisms function</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding ecosystems and environmental conservation</li>
              <li>Recognizing how technology mimics living processes</li>
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