'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'What is the center of our solar system? 我們太陽系的中心是什麼?',
      options: [{ label: 'A', text: 'The Earth 地球' }, { label: 'B', text: 'The Moon 月球' }, { label: 'C', text: 'The Sun 太陽' }, { label: 'D', text: 'Mars 火星' }],
      answer: 'C',
    },
    {
      question: 'How many planets are there in our solar system? 我們的太陽系中有多少顆行星?',
      options: [{ label: 'A', text: '7 七' }, { label: 'B', text: '8 八' }, { label: 'C', text: '9 九' }, { label: 'D', text: '10 十' }],
      answer: 'B',
    },
    {
      question: 'Which planet is closest to the Sun? 哪顆行星最靠近太陽?',
      options: [{ label: 'A', text: 'Venus 金星' }, { label: 'B', text: 'Mercury 水星' }, { label: 'C', text: 'Earth 地球' }, { label: 'D', text: 'Mars 火星' }],
      answer: 'B',
    },
    {
      question: 'Which planet is known as the Red Planet? 哪顆行星被稱為紅色星球?',
      options: [{ label: 'A', text: 'Jupiter 木星' }, { label: 'B', text: 'Saturn 土星' }, { label: 'C', text: 'Mars 火星' }, { label: 'D', text: 'Neptune 海王星' }],
      answer: 'C',
    },
    {
      question: 'What do the eight planets in our solar system do? 我們太陽系中的八顆行星做什麼?',
      options: [{ label: 'A', text: 'They stay still 它們靜止不動' }, { label: 'B', text: 'They revolve around the Sun 它們圍繞太陽運行' }, { label: 'C', text: 'They revolve around the Earth 它們圍繞地球運行' }, { label: 'D', text: 'They revolve around the Moon 它們圍繞月球運行' }],
      answer: 'B',
    },
    {
      question: 'Which planet is the largest in our solar system? 我們太陽系中哪顆行星最大?',
      options: [{ label: 'A', text: 'Earth 地球' }, { label: 'B', text: 'Saturn 土星' }, { label: 'C', text: 'Jupiter 木星' }, { label: 'D', text: 'Neptune 海王星' }],
      answer: 'C',
    },
    {
      question: 'Which planet is known for its beautiful rings? 哪顆行星以其美麗的環而聞名?',
      options: [{ label: 'A', text: 'Uranus 天王星' }, { label: 'B', text: 'Neptune 海王星' }, { label: 'C', text: 'Saturn 土星' }, { label: 'D', text: 'Jupiter 木星' }],
      answer: 'C',
    },
    {
      question: 'Which planet do we live on? 我們生活在哪顆行星上?',
      options: [{ label: 'A', text: 'Mars 火星' }, { label: 'B', text: 'Venus 金星' }, { label: 'C', text: 'Earth 地球' }, { label: 'D', text: 'Mercury 水星' }],
      answer: 'C',
    },
    {
      question: 'Which planet is the farthest from the Sun? 哪顆行星離太陽最遠?',
      options: [{ label: 'A', text: 'Uranus 天王星' }, { label: 'B', text: 'Neptune 海王星' }, { label: 'C', text: 'Pluto 冥王星' }, { label: 'D', text: 'Saturn 土星' }],
      answer: 'B',
    },
    {
      question: 'What is the Sun? 太陽是什麼?',
      options: [{ label: 'A', text: 'A planet 一顆行星' }, { label: 'B', text: 'A star 一顆恆星' }, { label: 'C', text: 'A moon 一顆衛星' }, { label: 'D', text: 'A comet 一顆彗星' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The Sun is a planet. 太陽是一顆行星。', answer: false },
    { statement: 'The Earth is the third planet from the Sun. 地球是太陽的第三顆行星。', answer: true },
    { statement: 'All planets in our solar system have rings. 我們太陽系中的所有行星都有環。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name the eight planets in our solar system. 列出我們太陽系中的八顆行星。',
    },
    {
      question: 'Why is the Sun important to our solar system? 為什麼太陽對我們的太陽系很重要?',
    },
    {
      question: 'What do you think would happen if the Earth stopped revolving around the Sun? 你認為如果地球停止繞太陽運行會發生什麼?',
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
            The Sun is the center of our solar system, with eight planets orbiting around it. These planets vary in size, composition, and distance from the Sun, forming a fascinating cosmic neighborhood.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that the solar system is mainly made up of the Sun and eight planets</li>
                <li>Be aware that the eight planets, including the Earth, revolve around the Sun</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a scale model of the solar system using different sized balls</li>
              <li>Simulate planetary orbits using string and balls in a classroom</li>
              <li>Use augmented reality apps to explore planets in 3D</li>
              <li>Design your own planet and present its features to the class</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the structure of our solar system and recognize the Sun's central role. They will be able to name and order the eight planets from the Sun.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the vastness and beauty of our solar system</li>
              <li>Curiosity about space exploration and scientific discovery</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how space technology helps us study distant planets</li>
              <li>Recognizing Earth's unique position that supports life</li>
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
  );
}