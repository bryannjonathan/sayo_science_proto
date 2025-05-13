'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'How are fossils formed? 化石是如何形成的?',
      options: [{ label: 'A', text: 'From the remains of dead plants and animals buried under layers of sediment 來自被埋在沉積層下的動植物遺骸' }, { label: 'B', text: 'From melted rocks deep inside the Earth 來自地球深處的熔融岩石' }, { label: 'C', text: 'From water evaporating from the ocean 來自海洋中蒸發的水分' }, { label: 'D', text: 'From lightning striking the ground 來自閃電擊中地面' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a fossil fuel? 以下哪一種是化石燃料?',
      options: [{ label: 'A', text: 'Coal 煤' }, { label: 'B', text: 'Solar energy 太陽能' }, { label: 'C', text: 'Wind energy 風能' }, { label: 'D', text: 'Hydroelectric power 水力發電' }],
      answer: 'A',
    },
    {
      question: 'What causes earthquakes? 地震是由什麼引起的?',
      options: [{ label: 'A', text: 'Movement of tectonic plates 板塊運動' }, { label: 'B', text: 'Heavy rainfall 大雨' }, { label: 'C', text: 'Strong winds 強風' }, { label: 'D', text: 'Melting ice 冰融化' }],
      answer: 'A',
    },
    {
      question: 'Which natural disaster is caused by the eruption of magma from the Earth\\'s crust? 哪一種自然災害是由地殼中的岩漿噴發引起的?',
      options: [{ label: 'A', text: 'Volcanic eruption 火山爆發' }, { label: 'B', text: 'Tsunami 海嘯' }, { label: 'C', text: 'Hurricane 颶風' }, { label: 'D', text: 'Tornado 龍捲風' }],
      answer: 'A',
    },
    {
      question: 'How can humans prepare for natural disasters? 人類如何為自然災害做準備?',
      options: [{ label: 'A', text: 'By building earthquake-resistant structures 建造抗震建築' }, { label: 'B', text: 'By cutting down all trees 砍伐所有樹木' }, { label: 'C', text: 'By ignoring warning signs 忽略警告信號' }, { label: 'D', text: 'By living near active volcanoes 住在活火山附近' }],
      answer: 'A',
    },
    {
      question: 'What is the main source of energy for fossil fuels? 化石燃料的主要能量來源是什麼?',
      options: [{ label: 'A', text: 'Ancient sunlight stored in plants and animals 儲存在動植物中的古老陽光' }, { label: 'B', text: 'Wind energy 風能' }, { label: 'C', text: 'Nuclear reactions 核反應' }, { label: 'D', text: 'Ocean waves 海浪' }],
      answer: 'A',
    },
    {
      question: 'Which layer of the Earth is responsible for most earthquakes and volcanic eruptions? 地球的哪一層導致大多數地震和火山爆發?',
      options: [{ label: 'A', text: 'Crust 地殼' }, { label: 'B', text: 'Mantle 地幔' }, { label: 'C', text: 'Outer core 外核' }, { label: 'D', text: 'Inner core 內核' }],
      answer: 'A',
    },
    {
      question: 'What is one way humans respond to earthquakes? 人類應對地震的一種方式是什麼?',
      options: [{ label: 'A', text: 'Creating early warning systems 建立早期預警系統' }, { label: 'B', text: 'Building houses with weak foundations 建造地基不穩的房屋' }, { label: 'C', text: 'Ignoring safety drills 忽略安全演習' }, { label: 'D', text: 'Living in high-risk areas 住在高風險地區' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a fossil fuel? 以下哪一種不是化石燃料?',
      options: [{ label: 'A', text: 'Natural gas 天然氣' }, { label: 'B', text: 'Petroleum 石油' }, { label: 'C', text: 'Coal 煤' }, { label: 'D', text: 'Solar energy 太陽能' }],
      answer: 'D',
    },
    {
      question: 'What is the primary reason fossils are important to scientists? 化石對科學家來說重要的主要原因是什麼?',
      options: [{ label: 'A', text: 'They provide clues about Earth\\'s history 它們提供關於地球歷史的線索' }, { label: 'B', text: 'They are used as fuel 它們被用作燃料' }, { label: 'C', text: 'They are beautiful to look at 它們看起來很美' }, { label: 'D', text: 'They are easy to find 它們很容易找到' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Fossil fuels are formed from the remains of ancient plants and animals. 化石燃料是由古代動植物的遺骸形成的。', answer: true },
    { statement: 'Earthquakes are caused by the movement of water in the oceans. 地震是由海洋中的水運動引起的。', answer: false },
    { statement: 'Building codes can help reduce damage from earthquakes. 建築規範可以幫助減少地震造成的損害。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe one way fossils can help us understand Earth\\'s history. 描述化石如何幫助我們了解地球歷史的一種方式。',
    },
    {
      question: 'Explain why earthquakes and volcanic eruptions often occur in the same regions. 解釋為什麼地震和火山爆發經常發生在同一地區。',
    },
    {
      question: 'What are two ways humans can protect themselves from natural disasters? 人類可以通過哪兩種方式保護自己免受自然災害的影響?',
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
            Earth's history spans billions of years, shaped by geological processes and life evolution. Fossils and rock layers provide evidence of past environments and organisms that once inhabited our planet.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the formation processes of fossils and fossil fuels</li>
                <li>Be aware that some natural disasters (e.g. volcanic eruptions, earthquakes) are related to crustal activities</li>
                <li>Recognise some ways that human respond to natural disasters</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline of Earth's major geological events</li>
              <li>Simulate fossil formation using plaster and natural materials</li>
              <li>Map recent earthquake and volcanic activity patterns</li>
              <li>Build simple structures to test earthquake resistance</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how Earth's features formed over time and how geological processes continue to shape our planet today.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for Earth's long history and dynamic nature</li>
              <li>Responsibility in using Earth's resources wisely</li>
              <li>Respect for scientific methods of studying Earth's past</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How geological knowledge informs earthquake preparedness</li>
              <li>The role of fossil fuels in modern energy systems</li>
              <li>Scientific careers in geology and paleontology</li>
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