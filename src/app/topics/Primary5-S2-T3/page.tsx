'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the Sun? 太陽是什麼?',
      options: [{ label: 'A', text: 'A planet 行星' }, { label: 'B', text: 'A star 恆星' }, { label: 'C', text: 'A moon 衛星' }, { label: 'D', text: 'A galaxy 星系' }],
      answer: 'B',
    },
    {
      question: 'Why can we see planets in the solar system even though they do not emit light? 為什麼我們可以看到太陽系中的行星，即使它們不發光?',
      options: [{ label: 'A', text: 'They reflect sunlight 它們反射太陽光' }, { label: 'B', text: 'They have their own light 它們有自己的光' }, { label: 'C', text: 'They are very hot 它們非常熱' }, { label: 'D', text: 'They are made of gas 它們由氣體組成' }],
      answer: 'A',
    },
    {
      question: 'Which planet is the largest in the solar system? 太陽系中哪顆行星最大?',
      options: [{ label: 'A', text: 'Earth 地球' }, { label: 'B', text: 'Jupiter 木星' }, { label: 'C', text: 'Mars 火星' }, { label: 'D', text: 'Venus 金星' }],
      answer: 'B',
    },
    {
      question: 'How many natural satellites does Earth have? 地球有多少顆天然衛星?',
      options: [{ label: 'A', text: '1 一顆' }, { label: 'B', text: '2 兩顆' }, { label: 'C', text: '3 三顆' }, { label: 'D', text: '4 四顆' }],
      answer: 'A',
    },
    {
      question: 'Which planet is known for its rings? 哪顆行星以其環聞名?',
      options: [{ label: 'A', text: 'Mercury 水星' }, { label: 'B', text: 'Saturn 土星' }, { label: 'C', text: 'Neptune 海王星' }, { label: 'D', text: 'Mars 火星' }],
      answer: 'B',
    },
    {
      question: 'What is the period of revolution for Earth around the Sun? 地球繞太陽公轉的週期是多少?',
      options: [{ label: 'A', text: '24 hours 24小時' }, { label: 'B', text: '30 days 30天' }, { label: 'C', text: '365 days 365天' }, { label: 'D', text: '1 month 1個月' }],
      answer: 'C',
    },
    {
      question: 'Which planet is closest to the Sun? 哪顆行星離太陽最近?',
      options: [{ label: 'A', text: 'Venus 金星' }, { label: 'B', text: 'Earth 地球' }, { label: 'C', text: 'Mercury 水星' }, { label: 'D', text: 'Mars 火星' }],
      answer: 'C',
    },
    {
      question: 'What is the Milky Way? 銀河系是什麼?',
      options: [{ label: 'A', text: 'A planet 行星' }, { label: 'B', text: 'A galaxy 星系' }, { label: 'C', text: 'A star 恆星' }, { label: 'D', text: 'A moon 衛星' }],
      answer: 'B',
    },
    {
      question: 'Which planet is known as the Red Planet? 哪顆行星被稱為紅色星球?',
      options: [{ label: 'A', text: 'Jupiter 木星' }, { label: 'B', text: 'Mars 火星' }, { label: 'C', text: 'Venus 金星' }, { label: 'D', text: 'Saturn 土星' }],
      answer: 'B',
    },
    {
      question: 'What is the main source of energy for the solar system? 太陽系的主要能量來源是什麼?',
      options: [{ label: 'A', text: 'The Moon 月球' }, { label: 'B', text: 'The Sun 太陽' }, { label: 'C', text: 'Jupiter 木星' }, { label: 'D', text: 'Earth 地球' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The Sun is the only star in the solar system. 太陽是太陽系中唯一的恆星。', answer: true },
    { statement: 'All planets in the solar system have natural satellites. 太陽系中的所有行星都有天然衛星。', answer: false },
    { statement: 'The Milky Way is the only galaxy in the universe. 銀河系是宇宙中唯一的星系。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why the Sun is important for life on Earth. 解釋為什麼太陽對地球上的生命很重要。',
    },
    {
      question: 'Describe one characteristic of each of the eight planets in the solar system. 描述太陽系中八顆行星各自的一個特徵。',
    },
    {
      question: 'What does the vastness of the universe tell us about our place in it? 宇宙的浩瀚告訴我們什麼關於我們在其中的位置?',
    },
  ],
};

export default function TheSunAndTheEightPlanetsPage() {
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
             The Sun and the eight planets
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The Sun is the star at the center of our solar system, providing light and heat to the eight planets orbiting it. These planets vary in size, composition, and characteristics, forming a diverse family of celestial bodies.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that the Sun is the star in the solar system and emits light and heat energy to other celestial bodies</li>
                <li>Explain why other celestial bodies in the solar system can be observed even they do not emit light</li>
                <li>Recognise the eight planets in the solar system and their basic characteristics (e.g. diameter, number of discovered natural satellites, periods of revolution and rotation)</li>
                <li>Recognise the overview of the universe and be aware that the Milky Way is one of the many galaxies</li>
                <li>Appreciate the vastness of the universe</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a scale model of the solar system using different sized balls</li>
              <li>Research and present on one planet's unique features</li>
              <li>Simulate planetary orbits using string and chalk drawings</li>
              <li>Compare Earth's size and rotation to other planets</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the Sun's central role in our solar system and be able to identify key characteristics of each planet. They will appreciate Earth's unique position and the scale of our galaxy.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Curiosity about space exploration and discovery</li>
              <li>Appreciation for Earth's special conditions that support life</li>
              <li>Wonder at the vastness and beauty of the universe</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How space technology helps us study distant planets</li>
              <li>The importance of protecting Earth's environment</li>
              <li>International cooperation in space exploration</li>
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