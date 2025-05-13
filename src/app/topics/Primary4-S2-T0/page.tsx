'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the outermost layer of the Earth called? 地球的最外層叫什麼?',
      options: [{ label: 'A', text: 'Crust 地殼' }, { label: 'B', text: 'Mantle 地幔' }, { label: 'C', text: 'Core 地核' }, { label: 'D', text: 'Soil 土壤' }],
      answer: 'A',
    },
    {
      question: 'Which layer of the Earth is the hottest? 地球的哪一層最熱?',
      options: [{ label: 'A', text: 'Crust 地殼' }, { label: 'B', text: 'Mantle 地幔' }, { label: 'C', text: 'Core 地核' }, { label: 'D', text: 'Soil 土壤' }],
      answer: 'C',
    },
    {
      question: 'What type of rock is formed from cooled lava? 哪種岩石是由冷卻的熔岩形成的?',
      options: [{ label: 'A', text: 'Sedimentary rock 沉積岩' }, { label: 'B', text: 'Metamorphic rock 變質岩' }, { label: 'C', text: 'Igneous rock 火成岩' }, { label: 'D', text: 'Sandstone 砂岩' }],
      answer: 'C',
    },
    {
      question: 'Which type of soil is best for growing most plants? 哪種土壤最適合種植大多數植物?',
      options: [{ label: 'A', text: 'Sand 沙土' }, { label: 'B', text: 'Loam 壤土' }, { label: 'C', text: 'Clay 黏土' }, { label: 'D', text: 'Gravel 礫土' }],
      answer: 'B',
    },
    {
      question: 'What is the main component of soil? 土壤的主要成分是什麼?',
      options: [{ label: 'A', text: 'Water 水' }, { label: 'B', text: 'Air 空氣' }, { label: 'C', text: 'Minerals 礦物質' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which type of rock is formed from layers of sediment? 哪種岩石是由沉積物層形成的?',
      options: [{ label: 'A', text: 'Igneous rock 火成岩' }, { label: 'B', text: 'Metamorphic rock 變質岩' }, { label: 'C', text: 'Sedimentary rock 沉積岩' }, { label: 'D', text: 'Granite 花崗岩' }],
      answer: 'C',
    },
    {
      question: 'Which part of the Earth is mostly made of iron and nickel? 地球的哪一部分主要由鐵和鎳組成?',
      options: [{ label: 'A', text: 'Crust 地殼' }, { label: 'B', text: 'Mantle 地幔' }, { label: 'C', text: 'Core 地核' }, { label: 'D', text: 'Soil 土壤' }],
      answer: 'C',
    },
    {
      question: 'Which type of soil holds water the best? 哪種土壤最能保持水分?',
      options: [{ label: 'A', text: 'Sand 沙土' }, { label: 'B', text: 'Loam 壤土' }, { label: 'C', text: 'Clay 黏土' }, { label: 'D', text: 'Silt 粉土' }],
      answer: 'C',
    },
    {
      question: 'What is the thickest layer of the Earth? 地球最厚的層是什麼?',
      options: [{ label: 'A', text: 'Crust 地殼' }, { label: 'B', text: 'Mantle 地幔' }, { label: 'C', text: 'Core 地核' }, { label: 'D', text: 'Soil 土壤' }],
      answer: 'B',
    },
    {
      question: 'Which type of rock is formed by heat and pressure? 哪種岩石是由熱和壓力形成的?',
      options: [{ label: 'A', text: 'Igneous rock 火成岩' }, { label: 'B', text: 'Sedimentary rock 沉積岩' }, { label: 'C', text: 'Metamorphic rock 變質岩' }, { label: 'D', text: 'Basalt 玄武岩' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'The Earth\'s core is the outermost layer. 地核是地球的最外層。', answer: false },
    { statement: 'Clay soil is the best for growing most plants. 黏土最適合種植大多數植物。', answer: false },
    { statement: 'The mantle is the thickest layer of the Earth. 地幔是地球最厚的層。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe the three main layers of the Earth. 描述地球的三個主要層。',
    },
    {
      question: 'Why is loam soil good for growing plants? 為什麼壤土適合種植植物?',
    },
    {
      question: 'How are sedimentary rocks formed? 沉積岩是如何形成的?',
    },
  ],
};

export default function EarthsCharacteristicsPage() {
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
             Earth’s characteristics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Earth is composed of distinct layers with unique characteristics: crust, mantle, and core. The crust contains various rock types and soil that support life. Understanding these features helps us appreciate Earth's resources and how to protect them.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the structure of the Earth (crust, mantle, and core) and the physical characteristics of these distinct parts</li>
                <li>Be aware that the Earth’s crust is composed of rocks, including igneous rocks, sedimentary rocks, metamorphic rocks</li>
                <li>Be aware of the main components of soil, classification of soil (sand, loam, clay) as well as the plants suitable for growing on each type of soil</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a layered Earth model using colored clay</li>
              <li>Classify different rock samples by their characteristics</li>
              <li>Test water retention in different soil types</li>
              <li>Plant seeds in various soils to observe growth differences</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand Earth's layered structure and recognize different rock types and soil compositions. They will appreciate how these characteristics support life on Earth.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for Earth's unique characteristics that support life</li>
              <li>Responsibility in conserving Earth's resources</li>
              <li>Curiosity about geological processes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How soil composition affects agriculture and food production</li>
              <li>Importance of rocks in construction and infrastructure</li>
              <li>Impact of human activities on Earth's layers</li>
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