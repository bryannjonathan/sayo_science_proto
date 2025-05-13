'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the Moon? 月球是什麼?',
      options: [{ label: 'A', text: 'A star 一顆恆星' }, { label: 'B', text: 'Earth\'s natural satellite 地球的自然衛星' }, { label: 'C', text: 'A planet 一顆行星' }, { label: 'D', text: 'A comet 一顆彗星' }],
      answer: 'B',
    },
    {
      question: 'How does the Moon move around the Earth? 月球如何繞地球運動?',
      options: [{ label: 'A', text: 'In a straight line 直線運動' }, { label: 'B', text: 'In a circular orbit 圓形軌道' }, { label: 'C', text: 'In a zigzag pattern 鋸齒形運動' }, { label: 'D', text: 'It doesn\'t move 它不動' }],
      answer: 'B',
    },
    {
      question: 'Why does the Moon appear to change shape? 為什麼月亮的形狀看起來會變化?',
      options: [{ label: 'A', text: 'Because it gets bigger and smaller 因為它變大變小' }, { label: 'B', text: 'Because of the Earth\'s shadow 因為地球的影子' }, { label: 'C', text: 'Because of the Moon\'s position relative to the Earth and Sun 因為月球相對於地球和太陽的位置' }, { label: 'D', text: 'Because it is made of cheese 因為它是奶酪做的' }],
      answer: 'C',
    },
    {
      question: 'What is a full moon? 什麼是滿月?',
      options: [{ label: 'A', text: 'When the Moon is closest to the Earth 當月球最接近地球時' }, { label: 'B', text: 'When the entire side of the Moon facing Earth is lit 當月球面向地球的整個面被照亮時' }, { label: 'C', text: 'When the Moon disappears 當月球消失時' }, { label: 'D', text: 'When the Moon is half-lit 當月球被照亮一半時' }],
      answer: 'B',
    },
    {
      question: 'How long does it take for the Moon to orbit the Earth? 月球繞地球一周需要多長時間?',
      options: [{ label: 'A', text: '1 day 1天' }, { label: 'B', text: '1 week 1週' }, { label: 'C', text: 'About 1 month 大約1個月' }, { label: 'D', text: '1 year 1年' }],
      answer: 'C',
    },
    {
      question: 'What causes day and night on Earth? 地球上晝夜的原因是什麼?',
      options: [{ label: 'A', text: 'The Moon\'s rotation 月球的旋轉' }, { label: 'B', text: 'The Earth\'s rotation 地球的旋轉' }, { label: 'C', text: 'The Sun\'s movement 太陽的運動' }, { label: 'D', text: 'The Moon\'s shadow 月球的影子' }],
      answer: 'B',
    },
    {
      question: 'What is a new moon? 什麼是新月?',
      options: [{ label: 'A', text: 'When the Moon is fully lit 當月球完全被照亮時' }, { label: 'B', text: 'When the Moon is not visible from Earth 當從地球上看不到月球時' }, { label: 'C', text: 'When the Moon is half-lit 當月球被照亮一半時' }, { label: 'D', text: 'When the Moon is closest to the Sun 當月球最接近太陽時' }],
      answer: 'B',
    },
    {
      question: 'Which of these is NOT a phase of the Moon? 以下哪一個不是月亮的相位?',
      options: [{ label: 'A', text: 'Full moon 滿月' }, { label: 'B', text: 'Crescent moon 新月' }, { label: 'C', text: 'Square moon 方形月亮' }, { label: 'D', text: 'Half moon 半月' }],
      answer: 'C',
    },
    {
      question: 'What is the main source of the Moon\'s light? 月亮的主要光源是什麼?',
      options: [{ label: 'A', text: 'The Earth 地球' }, { label: 'B', text: 'The Sun 太陽' }, { label: 'C', text: 'The stars 恆星' }, { label: 'D', text: 'The Moon itself 月亮本身' }],
      answer: 'B',
    },
    {
      question: 'Why can we sometimes see the Moon during the day? 為什麼我們有時白天也能看到月亮?',
      options: [{ label: 'A', text: 'Because the Moon is very bright 因為月亮非常明亮' }, { label: 'B', text: 'Because the Moon reflects sunlight 因為月亮反射陽光' }, { label: 'C', text: 'Because the Moon is close to the Earth 因為月亮離地球很近' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The Moon produces its own light. 月球會自己發光。', answer: false },
    { statement: 'The Moon orbits the Earth. 月球繞地球運行。', answer: true },
    { statement: 'The Moon\'s shape changes because it is sometimes covered by clouds. 月亮的形狀變化是因為它有時被雲遮住。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe what happens during a full moon. 描述滿月時會發生什麼。',
    },
    {
      question: 'Why does the Moon look different at different times of the month? 為什麼月亮在一個月的不同時間看起來不同?',
    },
    {
      question: 'How does the Moon affect the Earth? 月球如何影響地球?',
    },
  ],
}

export default function SomePhenomenaAndPatternsObservedOnTheEarthCausedByTheMovementsOfTheSunEarthAndMoonPage() {
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
             Some phenomena and patterns observed on the Earth caused by the movements of the Sun, Earth and Moon
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The movements of the Sun, Earth, and Moon create observable patterns like day and night, moon phases, and seasons. These celestial interactions help us understand time cycles and natural phenomena that affect life on Earth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that the Moon is the Earth’s only natural satellite and revolves around the Earth</li>
                <li>Be aware that the shape of the Moon appears different when observed from the Earth at different times</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a Moon phase calendar by observing and recording the Moon's appearance each night</li>
              <li>Use a flashlight and balls to model how the Sun illuminates different parts of the Moon</li>
              <li>Simulate Earth's rotation and revolution using classroom objects to show day/night and seasons</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how the movements of celestial bodies create observable patterns and be able to explain basic phenomena like moon phases and day/night cycles.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the predictable patterns in nature</li>
              <li>Curiosity about celestial phenomena and their effects on Earth</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how ancient civilizations used celestial patterns for calendars</li>
              <li>Recognizing how moon cycles affect ocean tides and some animal behaviors</li>
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