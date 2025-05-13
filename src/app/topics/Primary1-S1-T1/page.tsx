'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a source of light? 以下哪一個是光源？',
      options: [{ label: 'A', text: 'Sun 太陽' }, { label: 'B', text: 'Moon 月亮' }, { label: 'C', text: 'Rock 石頭' }, { label: 'D', text: 'Water 水' }],
      answer: 'A',
    },
    {
      question: 'What do we use light for in daily life? 我們在日常生活中用光來做什麼？',
      options: [{ label: 'A', text: 'To see in the dark 在黑暗中看東西' }, { label: 'B', text: 'To make food 製作食物' }, { label: 'C', text: 'To wash clothes 洗衣服' }, { label: 'D', text: 'To sleep 睡覺' }],
      answer: 'A',
    },
    {
      question: 'What happens when light shines on an opaque object? 當光照在不透明的物體上時會發生什麼？',
      options: [{ label: 'A', text: 'It produces a shadow 會產生影子' }, { label: 'B', text: 'It disappears 光會消失' }, { label: 'C', text: 'It changes color 會改變顏色' }, { label: 'D', text: 'Nothing happens 什麼都不會發生' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a source of light? 以下哪一個不是光源？',
      options: [{ label: 'A', text: 'Light bulb 燈泡' }, { label: 'B', text: 'Candle 蠟燭' }, { label: 'C', text: 'Mirror 鏡子' }, { label: 'D', text: 'Flashlight 手電筒' }],
      answer: 'C',
    },
    {
      question: 'What colors are in sunlight? 陽光中包含哪些顏色？',
      options: [{ label: 'A', text: 'Only white 只有白色' }, { label: 'B', text: 'Only yellow 只有黃色' }, { label: 'C', text: 'Many different colors 許多不同的顏色' }, { label: 'D', text: 'No colors 沒有顏色' }],
      answer: 'C',
    },
    {
      question: 'Which object can block light and create a shadow? 哪個物體可以阻擋光並產生影子？',
      options: [{ label: 'A', text: 'Glass 玻璃' }, { label: 'B', text: 'Book 書本' }, { label: 'C', text: 'Water 水' }, { label: 'D', text: 'Air 空氣' }],
      answer: 'B',
    },
    {
      question: 'Why do we need light for reading? 我們為什麼需要光來閱讀？',
      options: [{ label: 'A', text: 'To make the book colorful 讓書本變彩色' }, { label: 'B', text: 'To see the words clearly 看清楚字' }, { label: 'C', text: 'To keep the book warm 讓書本保持溫暖' }, { label: 'D', text: 'To make the book heavy 讓書本變重' }],
      answer: 'B',
    },
    {
      question: 'What is a shadow? 什麼是影子？',
      options: [{ label: 'A', text: 'A dark area where light is blocked 光被阻擋的黑暗區域' }, { label: 'B', text: 'A bright light 明亮的光' }, { label: 'C', text: 'A colorful rainbow 彩色的彩虹' }, { label: 'D', text: 'A sound 聲音' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a use of light? 以下哪一個是光的用途？',
      options: [{ label: 'A', text: 'To cook food 烹煮食物' }, { label: 'B', text: 'To illuminate a room 照亮房間' }, { label: 'C', text: 'To wash hands 洗手' }, { label: 'D', text: 'To sleep 睡覺' }],
      answer: 'B',
    },
    {
      question: 'What happens when you stand in the sunlight? 當你站在陽光下時會發生什麼？',
      options: [{ label: 'A', text: 'You become invisible 你會隱形' }, { label: 'B', text: 'You cast a shadow 你會產生影子' }, { label: 'C', text: 'You glow in the dark 你會在黑暗中發光' }, { label: 'D', text: 'Nothing happens 什麼都不會發生' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The moon is a source of light. 月亮是光源。', answer: false },
    { statement: 'Light can pass through opaque objects. 光可以穿過不透明的物體。', answer: false },
    { statement: 'Sunlight contains many colors. 陽光包含許多顏色。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two sources of light. 列出兩個光源。',
    },
    {
      question: 'How does light help us in daily life? 光如何在日常生活中幫助我們？',
    },
    {
      question: 'What happens when you shine a light on a book? 當你用手電筒照書本時會發生什麼？',
    },
  ],
};

export default function PropertiesOfLightAndRelatedPhenomenaPage() {
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
             Properties of light and related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Light is a form of energy that allows us to see the world around us. It comes from various sources like the sun and light bulbs, and interacts with objects to create shadows and reflections.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the source of light</li>
                <li>Give examples of uses of light in daily life (e.g. for illumination and reading)</li>
                <li>Be aware that light shining on opaque objects will produce shadows</li>
                <li>Be aware that sunlight consists of light of different colours</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Shadow puppet theater to demonstrate how light creates shadows</li>
              <li>Prism experiment to observe the colors in sunlight</li>
              <li>Flashlight exploration to identify objects that block or transmit light</li>
              <li>Daily light source scavenger hunt</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand basic properties of light and recognize its importance in daily life. They will be able to identify light sources and explain simple light phenomena.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the role of light in our daily lives</li>
              <li>Curiosity about natural light phenomena</li>
              <li>Responsibility in using artificial light sources</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how light technology impacts society (street lights, traffic signals)</li>
              <li>Exploring how different cultures use natural light in architecture</li>
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