'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following objects can be attracted by a magnet? 以下哪個物品可以被磁鐵吸引?',
      options: [{ label: 'A', text: 'Plastic toy 塑膠玩具' }, { label: 'B', text: 'Wooden block 木塊' }, { label: 'C', text: 'Iron nail 鐵釘' }, { label: 'D', text: 'Glass bottle 玻璃瓶' }],
      answer: 'C',
    },
    {
      question: 'How many poles does a magnet have? 一個磁鐵有多少個磁極?',
      options: [{ label: 'A', text: 'One 一個' }, { label: 'B', text: 'Two 兩個' }, { label: 'C', text: 'Three 三個' }, { label: 'D', text: 'Four 四個' }],
      answer: 'B',
    },
    {
      question: 'What happens when two like poles of magnets are brought close together? 當兩個磁鐵的同極靠近時會發生什麼?',
      options: [{ label: 'A', text: 'They attract each other 它們互相吸引' }, { label: 'B', text: 'They repel each other 它們互相排斥' }, { label: 'C', text: 'They stick together 它們黏在一起' }, { label: 'D', text: 'Nothing happens 什麼都不會發生' }],
      answer: 'B',
    },
    {
      question: 'What does the magnetised needle in a compass point to? 指南針中的磁化針指向什麼方向?',
      options: [{ label: 'A', text: 'East and West 東和西' }, { label: 'B', text: 'North and South 北和南' }, { label: 'C', text: 'Up and Down 上和下' }, { label: 'D', text: 'Left and Right 左和右' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a daily application of magnets? 以下哪個是磁鐵的日常應用?',
      options: [{ label: 'A', text: 'Refrigerator door 冰箱門' }, { label: 'B', text: 'Plastic chair 塑膠椅子' }, { label: 'C', text: 'Paper book 紙本書' }, { label: 'D', text: 'Wooden table 木桌' }],
      answer: 'A',
    },
    {
      question: 'What happens when two unlike poles of magnets are brought close together? 當兩個磁鐵的異極靠近時會發生什麼?',
      options: [{ label: 'A', text: 'They attract each other 它們互相吸引' }, { label: 'B', text: 'They repel each other 它們互相排斥' }, { label: 'C', text: 'They break 它們斷裂' }, { label: 'D', text: 'They melt 它們融化' }],
      answer: 'A',
    },
    {
      question: 'Which material is NOT attracted by a magnet? 哪種材料不能被磁鐵吸引?',
      options: [{ label: 'A', text: 'Iron 鐵' }, { label: 'B', text: 'Nickel 鎳' }, { label: 'C', text: 'Cobalt 鈷' }, { label: 'D', text: 'Aluminum 鋁' }],
      answer: 'D',
    },
    {
      question: 'What is the name of the two poles of a magnet? 磁鐵的兩個磁極叫什麼?',
      options: [{ label: 'A', text: 'North and South 北極和南極' }, { label: 'B', text: 'East and West 東極和西極' }, { label: 'C', text: 'Up and Down 上極和下極' }, { label: 'D', text: 'Left and Right 左極和右極' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a daily application of magnets? 以下哪個不是磁鐵的日常應用?',
      options: [{ label: 'A', text: 'Magnetic whiteboard 磁性白板' }, { label: 'B', text: 'Credit card 信用卡' }, { label: 'C', text: 'Magnetic toy 磁性玩具' }, { label: 'D', text: 'Wooden spoon 木匙' }],
      answer: 'D',
    },
    {
      question: 'What can a compass be used for? 指南針可以用來做什麼?',
      options: [{ label: 'A', text: 'Finding directions 尋找方向' }, { label: 'B', text: 'Cutting paper 剪紙' }, { label: 'C', text: 'Writing words 寫字' }, { label: 'D', text: 'Drawing pictures 畫畫' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All metals can be attracted by a magnet. 所有金屬都可以被磁鐵吸引。', answer: false },
    { statement: 'A magnet always has two poles. 一個磁鐵總是有兩個磁極。', answer: true },
    { statement: 'The needle in a compass is not magnetised. 指南針中的針沒有被磁化。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two objects that can be attracted by a magnet. 舉出兩個可以被磁鐵吸引的物品。',
    },
    {
      question: 'What happens when the north pole of one magnet is brought close to the south pole of another magnet? 當一個磁鐵的北極靠近另一個磁鐵的南極時會發生什麼?',
    },
    {
      question: 'How is a compass useful in daily life? 指南針在日常生活中如何有用?',
    },
  ],
};

export default function PropertiesOfMatterPage() {
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
             Properties of matter
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Matter is anything that has mass and takes up space. Students will explore the different properties of matter including magnetism, states of matter, and how materials can be sorted based on their properties.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that magnet can be used to attract some metallic objects</li>
                <li>Be aware that each magnet has two different magnetic poles which always exist in pairs</li>
                <li>Be aware of the phenomenon of 'like poles repel and unlike poles attract'</li>
                <li>Be aware that the magnetised needle in a compass can be used to indicate the south and the north</li>
                <li>Give some examples of daily application of magnet</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Magnet scavenger hunt to find objects attracted to magnets</li>
              <li>Experiment with different materials to test magnetic properties</li>
              <li>Create a simple compass using a magnet and bowl of water</li>
              <li>Sort objects into magnetic and non-magnetic categories</li>
              <li>Demonstrate magnetic attraction and repulsion with bar magnets</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the basic properties of matter, particularly magnetism, and be able to identify magnetic materials in their environment.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Develop curiosity about the physical world and how things work</li>
              <li>Appreciate the scientific method through hands-on experiments</li>
              <li>Show respect for materials and equipment during investigations</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understand how magnets are used in technology like credit cards and computers</li>
              <li>Explore how compasses helped in historical navigation and exploration</li>
              <li>Discuss recycling of magnetic materials and environmental impact</li>
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