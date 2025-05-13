'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What do plants need to grow? 植物需要什麼來生長?',
      options: [{ label: 'A', text: 'Sunlight, air, and water 陽光、空氣和水' }, { label: 'B', text: 'Only water 只有水' }, { label: 'C', text: 'Only sunlight 只有陽光' }, { label: 'D', text: 'Only air 只有空氣' }],
      answer: 'A',
    },
    {
      question: 'Why do plants need sunlight? 植物為什麼需要陽光?',
      options: [{ label: 'A', text: 'To make food 製造食物' }, { label: 'B', text: 'To keep warm 保持溫暖' }, { label: 'C', text: 'To look green 看起來綠色' }, { label: 'D', text: 'To attract animals 吸引動物' }],
      answer: 'A',
    },
    {
      question: 'What happens to animals when the temperature drops? 當溫度下降時，動物會怎樣?',
      options: [{ label: 'A', text: 'They may hibernate or migrate 牠們可能會冬眠或遷徙' }, { label: 'B', text: 'They grow bigger 牠們會長大' }, { label: 'C', text: 'They change color 牠們會變色' }, { label: 'D', text: 'They stop eating 牠們停止進食' }],
      answer: 'A',
    },
    {
      question: 'How do animals respond to danger? 動物如何應對危險?',
      options: [{ label: 'A', text: 'They run away or hide 牠們逃跑或躲藏' }, { label: 'B', text: 'They dance 牠們跳舞' }, { label: 'C', text: 'They sing 牠們唱歌' }, { label: 'D', text: 'They sleep 牠們睡覺' }],
      answer: 'A',
    },
    {
      question: 'What is one way plants reproduce? 植物繁殖的一種方式是什麼?',
      options: [{ label: 'A', text: 'By producing seeds 通過產生種子' }, { label: 'B', text: 'By jumping 通過跳躍' }, { label: 'C', text: 'By flying 通過飛行' }, { label: 'D', text: 'By swimming 通過游泳' }],
      answer: 'A',
    },
    {
      question: 'What do animals need to survive? 動物需要什麼來生存?',
      options: [{ label: 'A', text: 'Food, water, and shelter 食物、水和庇護所' }, { label: 'B', text: 'Only food 只有食物' }, { label: 'C', text: 'Only water 只有水' }, { label: 'D', text: 'Only shelter 只有庇護所' }],
      answer: 'A',
    },
    {
      question: 'Why do some animals migrate? 為什麼有些動物會遷徙?',
      options: [{ label: 'A', text: 'To find food or warmer weather 尋找食物或更溫暖的氣候' }, { label: 'B', text: 'To play games 玩遊戲' }, { label: 'C', text: 'To meet new friends 認識新朋友' }, { label: 'D', text: 'To sleep 睡覺' }],
      answer: 'A',
    },
    {
      question: 'What happens to plants without water? 沒有水，植物會怎樣?',
      options: [{ label: 'A', text: 'They wilt and die 它們會枯萎並死亡' }, { label: 'B', text: 'They grow faster 它們會長得更快' }, { label: 'C', text: 'They change color 它們會變色' }, { label: 'D', text: 'They produce more seeds 它們會產生更多種子' }],
      answer: 'A',
    },
    {
      question: 'How do plants get water? 植物如何獲得水分?',
      options: [{ label: 'A', text: 'Through their roots 通過它們的根' }, { label: 'B', text: 'Through their leaves 通過它們的葉子' }, { label: 'C', text: 'Through their flowers 通過它們的花' }, { label: 'D', text: 'Through their stems 通過它們的莖' }],
      answer: 'A',
    },
    {
      question: 'What do animals do when they sense danger? 當動物感覺到危險時，牠們會做什麼?',
      options: [{ label: 'A', text: 'They hide or run away 牠們躲藏或逃跑' }, { label: 'B', text: 'They laugh 牠們大笑' }, { label: 'C', text: 'They sleep 牠們睡覺' }, { label: 'D', text: 'They dance 牠們跳舞' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Plants need sunlight, air, and water to grow. 植物需要陽光、空氣和水來生長。', answer: true },
    { statement: 'Animals do not respond to changes in the environment. 動物不會對環境變化做出反應。', answer: false },
    { statement: 'All animals migrate when it gets cold. 所有動物在天氣變冷時都會遷徙。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two things plants need to grow. 列出植物生長需要的兩樣東西。',
    },
    {
      question: 'How do animals respond to cold weather? Give one example. 動物如何應對寒冷的天氣？舉一個例子。',
    },
    {
      question: 'Why is sunlight important for plants? 為什麼陽光對植物很重要？',
    },
  ],
}

export default function EcologicalEnvironmentPage() {
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
             Ecological environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The ecological environment explores how plants and animals interact with their surroundings. Students will learn about the basic needs of living organisms and how they adapt to environmental changes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that plants need (sun) light, air and water to provide the energy required for life processes (growth, reproduction)</li>
                <li>Be aware that animals respond to changes in environmental conditions (e.g. temperature, danger)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Plant growth observation journal to track changes over time</li>
              <li>Role-play animal behaviors in different environmental conditions</li>
              <li>Create a mini ecosystem in a terrarium</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the basic needs of plants and animals, and recognize how organisms adapt to their environment.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Develop appreciation for all living things</li>
              <li>Cultivate responsibility for environmental care</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understand how human activities impact ecosystems</li>
              <li>Explore sustainable practices to protect the environment</li>
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