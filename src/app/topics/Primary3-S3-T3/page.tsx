'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is an example of innovative technology in smart homes? 以下哪項是智能家居中的創新技術例子?',
      options: [{ label: 'A', text: 'Voice-controlled lights 聲控燈光' }, { label: 'B', text: 'Manual door locks 手動門鎖' }, { label: 'C', text: 'Paper maps 紙質地圖' }, { label: 'D', text: 'Handwritten letters 手寫信件' }],
      answer: 'A',
    },
    {
      question: 'What technology allows you to pay without using cash? 哪種技術可以讓你不用現金支付?',
      options: [{ label: 'A', text: 'Electronic payments 電子支付' }, { label: 'B', text: 'Barter trade 以物易物' }, { label: 'C', text: 'Gold coins 金幣' }, { label: 'D', text: 'Paper receipts 紙質收據' }],
      answer: 'A',
    },
    {
      question: 'Which vehicle uses electricity instead of petrol? 哪種車輛使用電力而不是汽油?',
      options: [{ label: 'A', text: 'New energy vehicle 新能源汽車' }, { label: 'B', text: 'Diesel truck 柴油卡車' }, { label: 'C', text: 'Steam engine 蒸汽機' }, { label: 'D', text: 'Horse carriage 馬車' }],
      answer: 'A',
    },
    {
      question: 'What is the main feature of autonomous driving? 自動駕駛的主要特點是什麼?',
      options: [{ label: 'A', text: 'The car drives itself 汽車自己駕駛' }, { label: 'B', text: 'The car has no wheels 汽車沒有輪子' }, { label: 'C', text: 'The car flies 汽車會飛' }, { label: 'D', text: 'The car is made of wood 汽車是木製的' }],
      answer: 'A',
    },
    {
      question: 'Which device can help you control home appliances remotely? 哪種設備可以讓你遠程控制家電?',
      options: [{ label: 'A', text: 'Smartphone 智能手機' }, { label: 'B', text: 'Typewriter 打字機' }, { label: 'C', text: 'Abacus 算盤' }, { label: 'D', text: 'Gramophone 留聲機' }],
      answer: 'A',
    },
    {
      question: 'What is a benefit of using electronic payments? 使用電子支付的一個好處是什麼?',
      options: [{ label: 'A', text: 'Convenient and fast 方便快捷' }, { label: 'B', text: 'Heavy to carry 攜帶沉重' }, { label: 'C', text: 'Easy to lose 容易丟失' }, { label: 'D', text: 'Only works at night 只在晚上有效' }],
      answer: 'A',
    },
    {
      question: 'Which technology helps reduce air pollution? 哪種技術有助於減少空氣污染?',
      options: [{ label: 'A', text: 'New energy vehicles 新能源汽車' }, { label: 'B', text: 'Coal-powered trains 燃煤火車' }, { label: 'C', text: 'Gasoline generators 汽油發電機' }, { label: 'D', text: 'Diesel buses 柴油巴士' }],
      answer: 'A',
    },
    {
      question: 'What can a smart home system do? 智能家居系統可以做什麼?',
      options: [{ label: 'A', text: 'Adjust temperature automatically 自動調節溫度' }, { label: 'B', text: 'Cook meals 煮飯' }, { label: 'C', text: 'Wash clothes 洗衣服' }, { label: 'D', text: 'Grow plants 種植植物' }],
      answer: 'A',
    },
    {
      question: 'Which of these is an example of innovative transportation? 以下哪項是創新交通的例子?',
      options: [{ label: 'A', text: 'High-speed rail 高速鐵路' }, { label: 'B', text: 'Bicycle 自行車' }, { label: 'C', text: 'Horse 馬' }, { label: 'D', text: 'Sailboat 帆船' }],
      answer: 'A',
    },
    {
      question: 'What technology allows cars to detect obstacles? 哪種技術可以讓汽車檢測障礙物?',
      options: [{ label: 'A', text: 'Sensors 傳感器' }, { label: 'B', text: 'Mirrors 鏡子' }, { label: 'C', text: 'Binoculars 雙筒望遠鏡' }, { label: 'D', text: 'Flashlights 手電筒' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Smart homes can be controlled using a smartphone. 智能家居可以使用智能手機控制。', answer: true },
    { statement: 'Autonomous driving means the car needs a driver to steer. 自動駕駛意味著汽車需要司機來駕駛。', answer: false },
    { statement: 'Electronic payments require physical cash. 電子支付需要實體現金。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name one innovative technology you use at home and explain how it helps you. 列舉一項你在家中使用的創新技術，並解釋它如何幫助你。',
    },
    {
      question: 'How do electronic payments make shopping easier? 電子支付如何使購物更方便?',
    },
    {
      question: 'Why are new energy vehicles better for the environment? 為什麼新能源汽車對環境更好?',
    },
  ],
};

export default function InnovationAndTechnologyDevelopmentPage() {
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
             Innovation and technology development
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Innovation and technology development explores how new inventions and advancements improve our daily lives. From smart homes to electric vehicles, these technologies make tasks easier, faster, and more efficient.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Give some examples of innovative technologies applied in everyday life (e.g. smart homes, electronic payments, new energy vehicles, autonomous driving)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Design your own smart home device and explain its features</li>
              <li>Create a poster showcasing different innovative technologies</li>
              <li>Role-play using electronic payments in a mock store scenario</li>
              <li>Build a simple model of an electric vehicle</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how innovative technologies work and recognize their impact on modern society. They will be able to identify common examples of technological advancements in daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how technology improves quality of life</li>
              <li>Curiosity about how new inventions work</li>
              <li>Responsibility in using technology wisely</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How technology development affects society and the environment</li>
              <li>The relationship between scientific discoveries and technological innovations</li>
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