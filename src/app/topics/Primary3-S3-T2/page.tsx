'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which invention helped people communicate over long distances before mobile phones? 哪項發明在手機出現之前幫助人們進行遠距離溝通?',
      options: [{ label: 'A', text: 'Steam engine 蒸汽機' }, { label: 'B', text: 'Electric light 電燈' }, { label: 'C', text: 'Telephone 電話' }, { label: 'D', text: 'Television 電視' }],
      answer: 'C',
    },
    {
      question: 'What did the invention of the electric light replace in homes? 電燈的發明取代了家庭中的什麼?',
      options: [{ label: 'A', text: 'Candles 蠟燭' }, { label: 'B', text: 'Radio 收音機' }, { label: 'C', text: 'Refrigerator 冰箱' }, { label: 'D', text: 'Washing machine 洗衣機' }],
      answer: 'A',
    },
    {
      question: 'Which invention allowed factories to produce goods faster? 哪項發明讓工廠能更快生產商品?',
      options: [{ label: 'A', text: 'Telephone 電話' }, { label: 'B', text: 'Steam engine 蒸汽機' }, { label: 'C', text: 'Television 電視' }, { label: 'D', text: 'Bicycle 自行車' }],
      answer: 'B',
    },
    {
      question: 'How did early televisions differ from modern ones? 早期的電視與現代的有何不同?',
      options: [{ label: 'A', text: 'They were black and white 它們是黑白的' }, { label: 'B', text: 'They were smaller 它們更小' }, { label: 'C', text: 'They had no sound 它們沒有聲音' }, { label: 'D', text: 'They were portable 它們是可攜帶的' }],
      answer: 'A',
    },
    {
      question: 'What was the main purpose of the first telephones? 最初電話的主要用途是什麼?',
      options: [{ label: 'A', text: 'Playing games 玩遊戲' }, { label: 'B', text: 'Sending messages 發送訊息' }, { label: 'C', text: 'Taking photos 拍照' }, { label: 'D', text: 'Watching videos 看影片' }],
      answer: 'B',
    },
    {
      question: 'Which invention made night-time activities easier? 哪項發明讓夜間活動更方便?',
      options: [{ label: 'A', text: 'Steam engine 蒸汽機' }, { label: 'B', text: 'Electric light 電燈' }, { label: 'C', text: 'Telephone 電話' }, { label: 'D', text: 'Bicycle 自行車' }],
      answer: 'B',
    },
    {
      question: 'What was a major improvement in automobiles over time? 汽車隨時間的主要改進是什麼?',
      options: [{ label: 'A', text: 'They became slower 它們變得更慢' }, { label: 'B', text: 'They became more expensive 它們變得更貴' }, { label: 'C', text: 'They became safer 它們變得更安全' }, { label: 'D', text: 'They became larger 它們變得更大' }],
      answer: 'C',
    },
    {
      question: 'Which invention helped people travel faster than walking? 哪項發明讓人們比步行更快地旅行?',
      options: [{ label: 'A', text: 'Telephone 電話' }, { label: 'B', text: 'Television 電視' }, { label: 'C', text: 'Bicycle 自行車' }, { label: 'D', text: 'Electric light 電燈' }],
      answer: 'C',
    },
    {
      question: 'How did the steam engine help society? 蒸汽機如何幫助社會?',
      options: [{ label: 'A', text: 'By making food tastier 讓食物更美味' }, { label: 'B', text: 'By improving transportation 改善交通' }, { label: 'C', text: 'By creating new colors 創造新顏色' }, { label: 'D', text: 'By making clothes 製作衣服' }],
      answer: 'B',
    },
    {
      question: 'What was a major change in telephones over time? 電話隨時間的主要變化是什麼?',
      options: [{ label: 'A', text: 'They became wireless 它們變成無線的' }, { label: 'B', text: 'They became heavier 它們變得更重' }, { label: 'C', text: 'They became larger 它們變得更大' }, { label: 'D', text: 'They became slower 它們變得更慢' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The first televisions were in color. 最初的電視是彩色的。', answer: false },
    { statement: 'The steam engine helped power trains and ships. 蒸汽機幫助驅動火車和輪船。', answer: true },
    { statement: 'Modern telephones are heavier than the first telephones. 現代電話比最初的電話更重。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name one way the telephone has changed over time. 列舉電話隨時間的一項變化。',
    },
    {
      question: 'How has the electric light improved people\'s lives? 電燈如何改善人們的生活?',
    },
    {
      question: 'Why is the steam engine considered an important invention? 為什麼蒸汽機被認為是一項重要的發明?',
    },
  ],
};

export default function TechnologyInDailyLifePage() {
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
             Technology in daily life
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Technology has transformed how we live, work, and communicate. From household appliances to transportation, innovations have made daily tasks easier and more efficient.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that some important technological inventions in history (e.g. steam engine, electric light, telephone) have improved people’s lives</li>
                <li>Recognise the evolution process of the design of some common products (e.g. telephone, television, automobile)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline showing the evolution of household technologies</li>
              <li>Interview family members about technology changes they've experienced</li>
              <li>Design an improved version of a common household appliance</li>
              <li>Compare old and new versions of everyday technologies</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how technology impacts daily life and recognize patterns of technological advancement.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how technology improves quality of life</li>
              <li>Curiosity about how everyday objects work and evolve</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding the relationship between technological development and societal needs</li>
              <li>Recognizing how engineering solutions address real-world problems</li>
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