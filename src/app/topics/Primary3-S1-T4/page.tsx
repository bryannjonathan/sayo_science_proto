'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the commonly used unit to measure temperature? 測量溫度的常用單位是什麼?',
      options: [{ label: 'A', text: 'Degree Celsius (°C) 攝氏度 (°C)' }, { label: 'B', text: 'Kilogram (kg) 公斤 (kg)' }, { label: 'C', text: 'Liter (L) 升 (L)' }, { label: 'D', text: 'Meter (m) 米 (m)' }],
      answer: 'A',
    },
    {
      question: 'Which instrument is used to measure temperature? 哪種儀器用於測量溫度?',
      options: [{ label: 'A', text: 'Thermometer 溫度計' }, { label: 'B', text: 'Ruler 尺子' }, { label: 'C', text: 'Clock 時鐘' }, { label: 'D', text: 'Scale 秤' }],
      answer: 'A',
    },
    {
      question: 'How does heat travel through solids? 熱量如何通過固體傳遞?',
      options: [{ label: 'A', text: 'Conduction 傳導' }, { label: 'B', text: 'Convection 對流' }, { label: 'C', text: 'Radiation 輻射' }, { label: 'D', text: 'Evaporation 蒸發' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of heat transfer by convection? 以下哪個是對流傳遞熱量的例子?',
      options: [{ label: 'A', text: 'Boiling water in a pot 鍋中沸騰的水' }, { label: 'B', text: 'Touching a hot pan 觸摸熱鍋' }, { label: 'C', text: 'Sunlight warming the Earth 陽光溫暖地球' }, { label: 'D', text: 'Melting ice 融化的冰' }],
      answer: 'A',
    },
    {
      question: 'What is the symbol for degree Celsius? 攝氏度的符號是什麼?',
      options: [{ label: 'A', text: '°C °C' }, { label: 'B', text: '°F °F' }, { label: 'C', text: 'K K' }, { label: 'D', text: 'L L' }],
      answer: 'A',
    },
    {
      question: 'Which material is a good conductor of heat? 哪種材料是良好的熱導體?',
      options: [{ label: 'A', text: 'Metal 金屬' }, { label: 'B', text: 'Wood 木頭' }, { label: 'C', text: 'Plastic 塑料' }, { label: 'D', text: 'Rubber 橡膠' }],
      answer: 'A',
    },
    {
      question: 'How does heat from the Sun reach the Earth? 太陽的熱量如何到達地球?',
      options: [{ label: 'A', text: 'Radiation 輻射' }, { label: 'B', text: 'Conduction 傳導' }, { label: 'C', text: 'Convection 對流' }, { label: 'D', text: 'Evaporation 蒸發' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a mode of heat transfer? 以下哪項不是熱傳遞的方式?',
      options: [{ label: 'A', text: 'Freezing 冷凍' }, { label: 'B', text: 'Conduction 傳導' }, { label: 'C', text: 'Convection 對流' }, { label: 'D', text: 'Radiation 輻射' }],
      answer: 'A',
    },
    {
      question: 'What happens to the particles in a substance when it is heated? 當物質被加熱時，其中的粒子會發生什麼變化?',
      options: [{ label: 'A', text: 'They move faster 它們移動得更快' }, { label: 'B', text: 'They move slower 它們移動得更慢' }, { label: 'C', text: 'They stop moving 它們停止移動' }, { label: 'D', text: 'They disappear 它們消失' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a poor conductor of heat? 以下哪種是熱的不良導體?',
      options: [{ label: 'A', text: 'Wood 木頭' }, { label: 'B', text: 'Iron 鐵' }, { label: 'C', text: 'Copper 銅' }, { label: 'D', text: 'Aluminum 鋁' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Heat can only travel through solids. 熱量只能通過固體傳遞。', answer: false },
    { statement: 'The symbol for degree Celsius is °C. 攝氏度的符號是°C。', answer: true },
    { statement: 'Convection is the main mode of heat transfer in liquids and gases. 對流是液體和氣體中熱傳遞的主要方式。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two instruments that can be used to measure temperature. 列出兩種可以用來測量溫度的儀器。',
    },
    {
      question: 'Explain one example of heat transfer by conduction in daily life. 舉一個日常生活中傳導傳遞熱量的例子並解釋。',
    },
    {
      question: 'Why do we use degree Celsius to measure temperature instead of other units? 為什麼我們使用攝氏度來測量溫度而不是其他單位?',
    },
  ],
}

export default function HeatTransferPage() {
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
             Heat transfer
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Heat transfer is the movement of thermal energy from one object to another. It occurs through conduction, convection, and radiation, and is essential in our daily lives.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise ways to measure temperature, and the commonly used unit (degree Celsius, symbol: C)</li>
                <li>Recognise the modes of heat transfer</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Experiment with different materials to test heat conduction</li>
              <li>Observe convection currents in water with food coloring</li>
              <li>Measure temperature changes in different environments</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how heat transfers between objects and identify real-world examples of conduction, convection, and radiation.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the role of heat transfer in daily life</li>
              <li>Curiosity about thermal energy and its applications</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding home insulation and energy efficiency</li>
              <li>Exploring how heat transfer affects weather patterns</li>
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