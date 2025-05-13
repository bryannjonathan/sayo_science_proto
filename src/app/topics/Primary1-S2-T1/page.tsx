'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Where does the Sun rise? 太陽從哪裡升起?',
      options: [{ label: 'A', text: 'East 東方' }, { label: 'B', text: 'West 西方' }, { label: 'C', text: 'North 北方' }, { label: 'D', text: 'South 南方' }],
      answer: 'A',
    },
    {
      question: 'Where does the Sun set? 太陽在哪裡落下?',
      options: [{ label: 'A', text: 'East 東方' }, { label: 'B', text: 'West 西方' }, { label: 'C', text: 'North 北方' }, { label: 'D', text: 'South 南方' }],
      answer: 'B',
    },
    {
      question: 'What causes day and night? 什麼導致白天和黑夜?',
      options: [{ label: 'A', text: 'The Earth spinning 地球自轉' }, { label: 'B', text: 'The Moon moving 月球移動' }, { label: 'C', text: 'The Sun disappearing 太陽消失' }, { label: 'D', text: 'The stars shining 星星閃爍' }],
      answer: 'A',
    },
    {
      question: 'When it is day on one side of the Earth, what is it on the other side? 當地球的一邊是白天時，另一邊是什麼?',
      options: [{ label: 'A', text: 'Day 白天' }, { label: 'B', text: 'Night 黑夜' }, { label: 'C', text: 'Morning 早晨' }, { label: 'D', text: 'Afternoon 下午' }],
      answer: 'B',
    },
    {
      question: 'What do we see in the sky during the day? 白天我們在天空中看到什麼?',
      options: [{ label: 'A', text: 'The Sun 太陽' }, { label: 'B', text: 'The Moon 月亮' }, { label: 'C', text: 'Stars 星星' }, { label: 'D', text: 'Clouds only 只有雲' }],
      answer: 'A',
    },
    {
      question: 'What do we see in the sky at night? 晚上我們在天空中看到什麼?',
      options: [{ label: 'A', text: 'The Sun 太陽' }, { label: 'B', text: 'The Moon 月亮' }, { label: 'C', text: 'Stars 星星' }, { label: 'D', text: 'Both B and C B和C都是' }],
      answer: 'D',
    },
    {
      question: 'When do most people sleep? 大多數人什麼時候睡覺?',
      options: [{ label: 'A', text: 'Day 白天' }, { label: 'B', text: 'Night 黑夜' }, { label: 'C', text: 'Morning 早晨' }, { label: 'D', text: 'Afternoon 下午' }],
      answer: 'B',
    },
    {
      question: 'When do most people go to school? 大多數人什麼時候上學?',
      options: [{ label: 'A', text: 'Day 白天' }, { label: 'B', text: 'Night 黑夜' }, { label: 'C', text: 'Evening 晚上' }, { label: 'D', text: 'Midnight 午夜' }],
      answer: 'A',
    },
    {
      question: 'What do animals do during the day? 動物白天做什麼?',
      options: [{ label: 'A', text: 'Sleep 睡覺' }, { label: 'B', text: 'Play 玩耍' }, { label: 'C', text: 'Eat 吃東西' }, { label: 'D', text: 'Both B and C B和C都是' }],
      answer: 'D',
    },
    {
      question: 'What do some animals do at night? 一些動物晚上做什麼?',
      options: [{ label: 'A', text: 'Sleep 睡覺' }, { label: 'B', text: 'Hunt 狩獵' }, { label: 'C', text: 'Play 玩耍' }, { label: 'D', text: 'Both A and B A和B都是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'The Sun rises in the west. 太陽從西方升起。', answer: false },
    { statement: 'Day and night are caused by the Earth spinning. 白天和黑夜是由地球自轉引起的。', answer: true },
    { statement: 'All animals sleep at night. 所有動物都在晚上睡覺。', answer: false },
  ],
  open_ended: [
    {
      question: 'Why do we have day and night? 為什麼我們有白天和黑夜?',
    },
    {
      question: 'What can you see in the sky during the day? 白天你在天空中能看到什麼?',
    },
    {
      question: 'How does the Sun help us? 太陽如何幫助我們?',
    },
  ],
};

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
            The movements of the Sun, Earth, and Moon create observable patterns like day and night, seasons, and moon phases. These celestial motions affect daily life, animal behavior, and natural cycles on Earth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that the Sun rises in the east and sets in the west</li>
                <li>Be aware of the phenomenon of day and night and its relation to the activities of humans and other animals</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Track the Sun's position throughout the day using a sundial</li>
              <li>Create a model showing Earth's rotation causing day and night</li>
              <li>Observe and record moon phases over a month</li>
              <li>Compare animal activities during day and night</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how Earth's rotation causes day and night cycles and recognize patterns in celestial movements.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the natural rhythms of Earth</li>
              <li>Curiosity about celestial patterns and their effects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How ancient civilizations used celestial patterns for timekeeping</li>
              <li>Modern applications of solar energy based on Sun's movement</li>
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