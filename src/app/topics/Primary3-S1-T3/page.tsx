'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What form of energy does a light bulb convert electrical energy into? 燈泡將電能轉換成什麼形式的能量?',
      options: [{ label: 'A', text: 'Light energy 光能' }, { label: 'B', text: 'Sound energy 聲能' }, { label: 'C', text: 'Thermal energy 熱能' }, { label: 'D', text: 'Both A and C A和C都是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following uses electrical energy to produce sound? 以下哪一個使用電能來產生聲音?',
      options: [{ label: 'A', text: 'Television 電視' }, { label: 'B', text: 'Fan 風扇' }, { label: 'C', text: 'Toaster 烤麵包機' }, { label: 'D', text: 'Lamp 燈' }],
      answer: 'A',
    },
    {
      question: 'What does an electric heater convert electrical energy into? 電暖器將電能轉換成什麼?',
      options: [{ label: 'A', text: 'Light energy 光能' }, { label: 'B', text: 'Thermal energy 熱能' }, { label: 'C', text: 'Sound energy 聲能' }, { label: 'D', text: 'Motion energy 動能' }],
      answer: 'B',
    },
    {
      question: 'Which appliance uses electrical energy to produce light and heat? 哪種電器使用電能來產生光和熱?',
      options: [{ label: 'A', text: 'Radio 收音機' }, { label: 'B', text: 'Hair dryer 吹風機' }, { label: 'C', text: 'Oven 烤箱' }, { label: 'D', text: 'Electric kettle 電熱水壺' }],
      answer: 'C',
    },
    {
      question: 'What form of energy does a fan mainly produce? 風扇主要產生什麼形式的能量?',
      options: [{ label: 'A', text: 'Light energy 光能' }, { label: 'B', text: 'Sound energy 聲能' }, { label: 'C', text: 'Motion energy 動能' }, { label: 'D', text: 'Thermal energy 熱能' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT a use of electricity in daily life? 以下哪一項不是日常生活中電力的用途?',
      options: [{ label: 'A', text: 'Lighting a candle 點燃蠟燭' }, { label: 'B', text: 'Watching TV 看電視' }, { label: 'C', text: 'Using a computer 使用電腦' }, { label: 'D', text: 'Charging a phone 為手機充電' }],
      answer: 'A',
    },
    {
      question: 'What does a microwave convert electrical energy into? 微波爐將電能轉換成什麼?',
      options: [{ label: 'A', text: 'Light energy 光能' }, { label: 'B', text: 'Thermal energy 熱能' }, { label: 'C', text: 'Sound energy 聲能' }, { label: 'D', text: 'Both B and C B和C都是' }],
      answer: 'D',
    },
    {
      question: 'Which appliance uses electrical energy to produce motion? 哪種電器使用電能來產生運動?',
      options: [{ label: 'A', text: 'Blender 攪拌機' }, { label: 'B', text: 'Lamp 燈' }, { label: 'C', text: 'Electric blanket 電熱毯' }, { label: 'D', text: 'Toaster 烤麵包機' }],
      answer: 'A',
    },
    {
      question: 'What form of energy does a radio convert electrical energy into? 收音機將電能轉換成什麼形式的能量?',
      options: [{ label: 'A', text: 'Light energy 光能' }, { label: 'B', text: 'Sound energy 聲能' }, { label: 'C', text: 'Thermal energy 熱能' }, { label: 'D', text: 'Motion energy 動能' }],
      answer: 'B',
    },
    {
      question: 'Which of the following uses electrical energy to produce light? 以下哪一個使用電能來產生光?',
      options: [{ label: 'A', text: 'Refrigerator 冰箱' }, { label: 'B', text: 'Flashlight 手電筒' }, { label: 'C', text: 'Electric stove 電爐' }, { label: 'D', text: 'Hair straightener 直髮器' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'A television converts electrical energy into light and sound. 電視將電能轉換成光和聲音。', answer: true },
    { statement: 'A battery-powered toy car does not use electrical energy. 電池驅動的玩具車不使用電能。', answer: false },
    { statement: 'All appliances convert electrical energy into only one form of energy. 所有電器都只將電能轉換成一種形式的能量。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give two examples of how electrical energy is used in your home. 舉出兩個你家裡使用電能的例子。',
    },
    {
      question: 'Explain how a toaster converts electrical energy into another form of energy. 解釋烤麵包機如何將電能轉換成另一種形式的能量。',
    },
    {
      question: 'Why is it important to save electricity? Give one reason. 為什麼節省電力很重要？給出一個理由。',
    },
  ],
};

export default function SourcesAndUsesOfEnergyPage() {
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
             Sources and uses of energy
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Energy comes from various sources and is used in many ways in our daily lives. We explore how electrical energy is converted into other forms like light, heat, and motion through common appliances and devices.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that electrical energy can be converted to other forms of energy (e.g. thermal energy, light energy, sound energy)</li>
                <li>Give examples of uses of electricity in daily life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify household appliances by their energy conversions</li>
              <li>Create a poster showing energy transformations in common devices</li>
              <li>Conduct a home energy audit to identify electricity uses</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how energy is transformed and identify practical applications of electricity in everyday objects.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the convenience electricity brings to modern life</li>
              <li>Responsibility in using energy resources wisely</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how energy technologies impact society</li>
              <li>Exploring renewable energy sources as alternatives</li>
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