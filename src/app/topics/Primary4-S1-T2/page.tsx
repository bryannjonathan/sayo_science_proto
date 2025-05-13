'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the main source of energy for the Earth? 地球的主要能源是什麼?',
      options: [{ label: 'A', text: 'The Sun 太陽' }, { label: 'B', text: 'Wind 風' }, { label: 'C', text: 'Coal 煤' }, { label: 'D', text: 'Natural gas 天然氣' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a source of energy? 以下哪一項不是能源?',
      options: [{ label: 'A', text: 'Moving water 流動的水' }, { label: 'B', text: 'Crude oil 原油' }, { label: 'C', text: 'Sand 沙子' }, { label: 'D', text: 'Wind 風' }],
      answer: 'C',
    },
    {
      question: 'What is energy needed for? 能源有什麼用途?',
      options: [{ label: 'A', text: 'Transportation 交通' }, { label: 'B', text: 'Manufacturing 製造' }, { label: 'C', text: 'Illumination 照明' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of these is a fossil fuel? 以下哪一項是化石燃料?',
      options: [{ label: 'A', text: 'Solar energy 太陽能' }, { label: 'B', text: 'Wind energy 風能' }, { label: 'C', text: 'Coal 煤' }, { label: 'D', text: 'Moving water 流動的水' }],
      answer: 'C',
    },
    {
      question: 'How can we save energy at home? 我們如何在家中節省能源?',
      options: [{ label: 'A', text: 'Turn off lights when not in use 不使用時關燈' }, { label: 'B', text: 'Use energy-efficient appliances 使用節能電器' }, { label: 'C', text: 'Both A and B A和B都是' }, { label: 'D', text: 'Leave electronic devices on 讓電子設備一直開著' }],
      answer: 'C',
    },
    {
      question: 'Which energy source is renewable? 哪一種能源是可再生的?',
      options: [{ label: 'A', text: 'Coal 煤' }, { label: 'B', text: 'Natural gas 天然氣' }, { label: 'C', text: 'Wind 風' }, { label: 'D', text: 'Crude oil 原油' }],
      answer: 'C',
    },
    {
      question: 'What is the energy from the Sun called? 來自太陽的能量叫什麼?',
      options: [{ label: 'A', text: 'Solar energy 太陽能' }, { label: 'B', text: 'Wind energy 風能' }, { label: 'C', text: 'Hydro energy 水能' }, { label: 'D', text: 'Fossil fuel energy 化石燃料能源' }],
      answer: 'A',
    },
    {
      question: 'Which of these is used to generate electricity? 以下哪一項用於發電?',
      options: [{ label: 'A', text: 'Moving water 流動的水' }, { label: 'B', text: 'Wind 風' }, { label: 'C', text: 'Coal 煤' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Why is saving energy important? 為什麼節省能源很重要?',
      options: [{ label: 'A', text: 'To protect the environment 保護環境' }, { label: 'B', text: 'To reduce costs 減少成本' }, { label: 'C', text: 'To conserve resources 節約資源' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of these is NOT a use of energy? 以下哪一項不是能源的用途?',
      options: [{ label: 'A', text: 'Powering electronic equipment 為電子設備供電' }, { label: 'B', text: 'Manufacturing goods 製造商品' }, { label: 'C', text: 'Growing plants 種植植物' }, { label: 'D', text: 'None of the above 以上皆不是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Energy is only needed for transportation. 能源只用於交通。', answer: false },
    { statement: 'Fossil fuels like coal and oil are renewable energy sources. 煤和石油等化石燃料是可再生能源。', answer: false },
    { statement: 'Turning off unused lights is a good way to save energy. 關掉不使用的燈是節省能源的好方法。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name three sources of energy and explain how they are used. 列出三種能源並解釋它們的用途。',
    },
    {
      question: 'Why is the Sun considered the most important source of energy? 為什麼太陽被認為是最重要的能源?',
    },
    {
      question: 'What are some ways you can save energy at school? 你在學校可以如何節省能源?',
    },
  ],
};

export default function SourcesAndUsesOfEnergyPage() {
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
             Sources and uses of energy
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Energy comes from various sources like the Sun, wind, and fossil fuels. It powers our daily activities from transportation to lighting our homes. Understanding energy sources helps us use them wisely and conserve for the future.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Identify the sources of energy (e.g. the Sun, moving water, wind, coal, crude oil, natural gas)</li>
                <li>Be aware that energy is needed for transportation, manufacturing, illumination, and powering electronic equipment</li>
                <li>Recognise the importance of energy saving</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create an energy source collage using magazine cutouts</li>
              <li>Conduct a classroom energy audit to identify waste</li>
              <li>Build a simple solar oven to demonstrate solar energy</li>
              <li>Role-play different energy sources and their uses</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to classify different energy sources and explain their uses. They will demonstrate understanding of energy conservation through practical examples.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diverse sources of energy that power our world</li>
              <li>Responsibility in conserving energy for future generations</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how energy choices impact society and the environment</li>
              <li>Exploring technological advancements in renewable energy</li>
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