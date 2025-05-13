'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is the correct order of the sizes of the Sun, Earth, and Moon from largest to smallest? 以下哪個是太陽、地球和月亮從大到小的正確順序？',
      options: [{ label: 'A', text: 'Sun, Earth, Moon 太陽、地球、月亮' }, { label: 'B', text: 'Earth, Sun, Moon 地球、太陽、月亮' }, { label: 'C', text: 'Moon, Earth, Sun 月亮、地球、太陽' }, { label: 'D', text: 'Sun, Moon, Earth 太陽、月亮、地球' }],
      answer: 'A',
    },
    {
      question: 'What causes the phases of the Moon? 什麼導致月亮的相位變化？',
      options: [{ label: 'A', text: 'The Earth\\'s shadow on the Moon 地球在月亮上的影子' }, { label: 'B', text: 'The Moon\\'s rotation around the Earth 月亮繞地球的旋轉' }, { label: 'C', text: 'The Sun\\'s light reflecting off the Moon 太陽光從月亮上反射' }, { label: 'D', text: 'The Moon\\'s distance from the Earth 月亮與地球的距離' }],
      answer: 'B',
    },
    {
      question: 'Which phase of the Moon occurs when the Moon is between the Earth and the Sun? 當月亮位於地球和太陽之間時，會出現哪個月亮相位？',
      options: [{ label: 'A', text: 'Full Moon 滿月' }, { label: 'B', text: 'First Quarter 上弦月' }, { label: 'C', text: 'New Moon 新月' }, { label: 'D', text: 'Third Quarter 下弦月' }],
      answer: 'C',
    },
    {
      question: 'What causes a solar eclipse? 什麼導致日食？',
      options: [{ label: 'A', text: 'The Moon passing between the Earth and the Sun 月亮經過地球和太陽之間' }, { label: 'B', text: 'The Earth passing between the Sun and the Moon 地球經過太陽和月亮之間' }, { label: 'C', text: 'The Sun blocking the Moon 太陽遮擋月亮' }, { label: 'D', text: 'The Moon blocking the Earth 月亮遮擋地球' }],
      answer: 'A',
    },
    {
      question: 'What causes a lunar eclipse? 什麼導致月食？',
      options: [{ label: 'A', text: 'The Moon passing between the Earth and the Sun 月亮經過地球和太陽之間' }, { label: 'B', text: 'The Earth passing between the Sun and the Moon 地球經過太陽和月亮之間' }, { label: 'C', text: 'The Sun blocking the Moon 太陽遮擋月亮' }, { label: 'D', text: 'The Moon blocking the Earth 月亮遮擋地球' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a phase of the Moon? 以下哪個不是月亮的相位？',
      options: [{ label: 'A', text: 'New Moon 新月' }, { label: 'B', text: 'Full Moon 滿月' }, { label: 'C', text: 'Half Moon 半月' }, { label: 'D', text: 'First Quarter 上弦月' }],
      answer: 'C',
    },
    {
      question: 'What causes tides on Earth? 什麼導致地球上的潮汐？',
      options: [{ label: 'A', text: 'The rotation of the Earth 地球的自轉' }, { label: 'B', text: 'The gravitational pull of the Sun and the Moon 太陽和月亮的引力' }, { label: 'C', text: 'The Earth\\'s orbit around the Sun 地球繞太陽的軌道' }, { label: 'D', text: 'The Moon\\'s orbit around the Earth 月亮繞地球的軌道' }],
      answer: 'B',
    },
    {
      question: 'How long does it take for the Moon to complete one orbit around the Earth? 月亮繞地球一周需要多長時間？',
      options: [{ label: 'A', text: 'About 24 hours 大約24小時' }, { label: 'B', text: 'About 7 days 大約7天' }, { label: 'C', text: 'About 29.5 days 大約29.5天' }, { label: 'D', text: 'About 365 days 大約365天' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is true about the Moon\\'s rotation? 以下關於月亮自轉的描述哪個是正確的？',
      options: [{ label: 'A', text: 'The Moon does not rotate 月亮不自轉' }, { label: 'B', text: 'The Moon rotates once every 24 hours 月亮每24小時自轉一次' }, { label: 'C', text: 'The Moon rotates at the same rate it orbits the Earth 月亮的自轉速度與繞地球公轉速度相同' }, { label: 'D', text: 'The Moon rotates faster than it orbits the Earth 月亮的自轉速度比繞地球公轉速度快' }],
      answer: 'C',
    },
    {
      question: 'What is the primary source of the Moon\\'s light? 月亮的光主要來自哪裡？',
      options: [{ label: 'A', text: 'The Moon produces its own light 月亮自己發光' }, { label: 'B', text: 'The Sun\\'s light reflecting off the Moon 太陽光從月亮上反射' }, { label: 'C', text: 'The Earth\\'s light reflecting off the Moon 地球光從月亮上反射' }, { label: 'D', text: 'Stars\\' light reflecting off the Moon 星光從月亮上反射' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The Moon is larger than the Earth. 月亮比地球大。', answer: false },
    { statement: 'A full moon occurs when the Moon is on the opposite side of the Earth from the Sun. 滿月發生在月亮位於地球與太陽的相反方向時。', answer: true },
    { statement: 'Tides only occur once a day. 潮汐每天只發生一次。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why we always see the same side of the Moon from Earth. 解釋為什麼我們從地球總是看到月亮的同一面。',
    },
    {
      question: 'Describe the difference between a solar eclipse and a lunar eclipse. 描述日食和月食的區別。',
    },
    {
      question: 'How do the gravitational pulls of the Sun and the Moon affect the tides on Earth? 太陽和月亮的引力如何影響地球上的潮汐？',
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
            The movements of the Sun, Earth, and Moon create observable patterns and phenomena on Earth including day and night, moon phases, eclipses, and tides. These celestial interactions demonstrate the predictable nature of our solar system and its impact on our planet.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the relative sizes, positions and movements of the Sun, Earth and Moon</li>
                <li>Be aware of the patterns of moon phases</li>
                <li>Be aware of the four moon phases: new moon, first quarter, full moon and third quarter</li>
                <li>Explain the causes of solar and lunar eclipses</li>
                <li>Be aware that tides are the rise and fall of sea levels caused by the gravitational pull of the Sun and the Moon</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a physical model demonstrating moon phases using a light source and spheres</li>
              <li>Track and record moon phases over a month using a moon journal</li>
              <li>Simulate solar and lunar eclipses using classroom objects</li>
              <li>Analyze tide charts to identify patterns related to moon phases</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how the movements of celestial bodies create observable patterns on Earth and be able to explain the causes of moon phases, eclipses, and tides.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the predictable patterns in nature</li>
              <li>Curiosity about celestial phenomena and their effects on Earth</li>
              <li>Respect for scientific explanations of natural events</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how ancient civilizations used celestial patterns for calendars and navigation</li>
              <li>Recognizing the importance of tidal patterns for coastal communities and marine ecosystems</li>
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