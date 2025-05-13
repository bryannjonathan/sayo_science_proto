'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is NOT a type of landform? 以下哪一項不是地形的一種?',
      options: [{ label: 'A', text: 'Mountain 山脈' }, { label: 'B', text: 'Plain 平原' }, { label: 'C', text: 'River 河流' }, { label: 'D', text: 'Plateau 高原' }],
      answer: 'C',
    },
    {
      question: 'What plays an important role in shaping landforms? 什麼對地形的塑造起著重要作用?',
      options: [{ label: 'A', text: 'Crustal movement 地殼運動' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Wind 風' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Where are fossils usually found? 化石通常在哪裡被發現?',
      options: [{ label: 'A', text: 'In rocks and ice 在岩石和冰中' }, { label: 'B', text: 'In the ocean 在海洋中' }, { label: 'C', text: 'In the air 在空氣中' }, { label: 'D', text: 'In plants 在植物中' }],
      answer: 'A',
    },
    {
      question: 'What can fossils tell us about? 化石可以告訴我們什麼?',
      options: [{ label: 'A', text: 'Changes in the Earth\\'s surface 地球表面的變化' }, { label: 'B', text: 'Ancient organisms 古代生物' }, { label: 'C', text: 'Both A and B A和B都是' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'C',
    },
    {
      question: 'Which landform is flat and low-lying? 哪種地形是平坦且低窪的?',
      options: [{ label: 'A', text: 'Mountain 山脈' }, { label: 'B', text: 'Plain 平原' }, { label: 'C', text: 'Valley 山谷' }, { label: 'D', text: 'Plateau 高原' }],
      answer: 'B',
    },
    {
      question: 'What are fossils? 什麼是化石?',
      options: [{ label: 'A', text: 'Remains of ancient organisms 古代生物的遺骸' }, { label: 'B', text: 'Newly formed rocks 新形成的岩石' }, { label: 'C', text: 'Types of plants 植物的種類' }, { label: 'D', text: 'Types of animals 動物的種類' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a highland area with a flat top? 以下哪一項是頂部平坦的高地?',
      options: [{ label: 'A', text: 'Basin 盆地' }, { label: 'B', text: 'Plateau 高原' }, { label: 'C', text: 'Valley 山谷' }, { label: 'D', text: 'Plain 平原' }],
      answer: 'B',
    },
    {
      question: 'How can wind shape landforms? 風如何塑造地形?',
      options: [{ label: 'A', text: 'By carrying sand and rocks 通過攜帶沙子和岩石' }, { label: 'B', text: 'By blowing leaves 通過吹動樹葉' }, { label: 'C', text: 'By making sounds 通過發出聲音' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'A',
    },
    {
      question: 'What is a valley? 什麼是山谷?',
      options: [{ label: 'A', text: 'A low area between hills or mountains 山丘或山脈之間的低地' }, { label: 'B', text: 'A high flat area 高的平坦地區' }, { label: 'C', text: 'A deep hole in the ground 地面上的深洞' }, { label: 'D', text: 'A large body of water 大片水域' }],
      answer: 'A',
    },
    {
      question: 'Why are fossils important? 為什麼化石很重要?',
      options: [{ label: 'A', text: 'They help us understand Earth\\'s history 它們幫助我們了解地球的歷史' }, { label: 'B', text: 'They are pretty to look at 它們看起來很漂亮' }, { label: 'C', text: 'They can be used as tools 它們可以被用作工具' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Fossils are only found in rocks. 化石只在岩石中被發現。', answer: false },
    { statement: 'Mountains are formed by crustal movement. 山脈是由地殼運動形成的。', answer: true },
    { statement: 'Wind cannot change the shape of landforms. 風不能改變地形的形狀。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two landforms and describe how they are formed. 列舉兩種地形並描述它們是如何形成的。',
    },
    {
      question: 'How do fossils help scientists learn about Earth\\'s history? 化石如何幫助科學家了解地球的歷史?',
    },
    {
      question: 'Explain how water can shape landforms. 解釋水如何塑造地形。',
    },
  ],
};

export default function EarthsHistoryPage() {
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
             Earth’s history
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Earth's history spans billions of years, shaped by geological processes and preserved in fossils. Understanding this history helps us comprehend how landforms evolved and how life developed on our planet.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise some different landforms (e.g. mountains, plains, valleys, plateaus, basins)</li>
                <li>Be aware that crustal movement, water and wind play an important role in shaping landforms</li>
                <li>Be aware that fossils are the remains of some ancient organisms preserved in rocks and ice</li>
                <li>Be aware that changes in the Earth’s surface can be inferred from the location of fossils</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline of Earth's major geological events</li>
              <li>Simulate fossil formation using clay and plaster</li>
              <li>Build 3D models of different landforms</li>
              <li>Analyze real fossil samples or images</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how Earth's surface changes over time and how fossils provide evidence of these changes. They'll recognize different landforms and the forces that shape them.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for Earth's long geological history</li>
              <li>Curiosity about how our planet has changed over time</li>
              <li>Respect for scientific evidence and fossil preservation</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how geological knowledge helps in resource exploration</li>
              <li>Recognizing how landform changes impact human settlements</li>
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