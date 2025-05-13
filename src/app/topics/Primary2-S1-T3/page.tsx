'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What force makes objects fall to the ground? 什麼力使物體掉到地面?',
      options: [{ label: 'A', text: 'Push 推' }, { label: 'B', text: 'Pull 拉' }, { label: 'C', text: 'Gravity 重力' }, { label: 'D', text: 'Wind 風' }],
      answer: 'C',
    },
    {
      question: 'Which of these is an example of a push? 以下哪個是推的例子?',
      options: [{ label: 'A', text: 'Opening a drawer 打開抽屜' }, { label: 'B', text: 'Kicking a ball 踢球' }, { label: 'C', text: 'Pulling a wagon 拉小車' }, { label: 'D', text: 'Holding a book 拿著書' }],
      answer: 'B',
    },
    {
      question: 'What happens when you pull a toy car? 當你拉玩具車時會發生什麼?',
      options: [{ label: 'A', text: 'It moves toward you 它會向你移動' }, { label: 'B', text: 'It stays still 它會保持不動' }, { label: 'C', text: 'It moves away from you 它會遠離你移動' }, { label: 'D', text: 'It changes color 它會變色' }],
      answer: 'A',
    },
    {
      question: 'Which force keeps us on the ground? 什麼力使我們保持在地面上?',
      options: [{ label: 'A', text: 'Magnetism 磁力' }, { label: 'B', text: 'Gravity 重力' }, { label: 'C', text: 'Electricity 電力' }, { label: 'D', text: 'Wind 風' }],
      answer: 'B',
    },
    {
      question: 'What do you do when you close a door? 當你關門時你在做什麼?',
      options: [{ label: 'A', text: 'Pushing 推' }, { label: 'B', text: 'Pulling 拉' }, { label: 'C', text: 'Lifting 舉起' }, { label: 'D', text: 'Dropping 掉落' }],
      answer: 'A',
    },
    {
      question: 'What makes a swing move? 什麼讓鞦韆移動?',
      options: [{ label: 'A', text: 'Gravity 重力' }, { label: 'B', text: 'Push or pull 推或拉' }, { label: 'C', text: 'Electricity 電力' }, { label: 'D', text: 'Sound 聲音' }],
      answer: 'B',
    },
    {
      question: 'Which of these is NOT a force? 以下哪個不是力?',
      options: [{ label: 'A', text: 'Push 推' }, { label: 'B', text: 'Pull 拉' }, { label: 'C', text: 'Gravity 重力' }, { label: 'D', text: 'Color 顏色' }],
      answer: 'D',
    },
    {
      question: 'What happens when you stop pushing a toy car? 當你停止推玩具車時會發生什麼?',
      options: [{ label: 'A', text: 'It keeps moving forever 它會永遠移動' }, { label: 'B', text: 'It slows down and stops 它會減速並停止' }, { label: 'C', text: 'It changes direction 它會改變方向' }, { label: 'D', text: 'It disappears 它會消失' }],
      answer: 'B',
    },
    {
      question: 'Which of these is an example of gravity? 以下哪個是重力的例子?',
      options: [{ label: 'A', text: 'A ball rolling on the ground 球在地上滾動' }, { label: 'B', text: 'A leaf falling from a tree 樹葉從樹上落下' }, { label: 'C', text: 'Pushing a shopping cart 推購物車' }, { label: 'D', text: 'Pulling a rope 拉繩子' }],
      answer: 'B',
    },
    {
      question: 'What do you need to make an object move? 你需要什麼來使物體移動?',
      options: [{ label: 'A', text: 'Force 力' }, { label: 'B', text: 'Color 顏色' }, { label: 'C', text: 'Sound 聲音' }, { label: 'D', text: 'Smell 氣味' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Gravity pulls objects toward the Earth. 重力將物體拉向地球。', answer: true },
    { statement: 'Pulling means moving something away from you. 拉意味著將某物從你身邊移開。', answer: false },
    { statement: 'All forces need electricity to work. 所有的力都需要電力才能運作。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two things you can push. 說出兩樣你可以推的東西。',
    },
    {
      question: 'Why do things fall down instead of up? 為什麼東西會向下掉而不是向上?',
    },
    {
      question: 'What happens when you push a heavy box? 當你推一個重箱子時會發生什麼?',
    },
  ],
};

export default function ForceAndMotionRelatedPhenomenaPage() {
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
             Force and motion-related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how forces like push, pull, and gravity affect the motion of objects around us. Understand everyday phenomena through hands-on activities and observations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that force can cause objects to move</li>
                <li>Give some daily examples involving push and pull</li>
                <li>Be aware that force of gravity is the attractive force exerted by the Earth on other objects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Experiment with pushing and pulling different objects</li>
              <li>Observe falling objects to understand gravity</li>
              <li>Create simple ramps to explore how forces affect motion</li>
              <li>Play tug-of-war to experience opposing forces</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will recognize different types of forces in daily life and understand basic concepts of motion caused by these forces.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Curiosity about how things move in the environment</li>
              <li>Appreciation for the predictable nature of physical forces</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding safety considerations when dealing with moving objects</li>
              <li>Recognizing how forces are used in playground equipment and transportation</li>
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