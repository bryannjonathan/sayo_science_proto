'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which part of the plant makes food? 植物的哪個部分負責製造食物?',
      options: [{ label: 'A', text: 'Leaves 葉子' }, { label: 'B', text: 'Roots 根' }, { label: 'C', text: 'Stem 莖' }, { label: 'D', text: 'Flower 花' }],
      answer: 'A',
    },
    {
      question: 'What is the function of roots? 根的功能是什麼?',
      options: [{ label: 'A', text: 'Make food 製造食物' }, { label: 'B', text: 'Absorb water and nutrients 吸收水分和養分' }, { label: 'C', text: 'Support the plant 支持植物' }, { label: 'D', text: 'Transport food 運輸食物' }],
      answer: 'B',
    },
    {
      question: 'Which part of the plant transports water and nutrients? 植物的哪個部分負責運輸水分和養分?',
      options: [{ label: 'A', text: 'Leaves 葉子' }, { label: 'B', text: 'Roots 根' }, { label: 'C', text: 'Stem 莖' }, { label: 'D', text: 'Flower 花' }],
      answer: 'C',
    },
    {
      question: 'What do leaves need to make food? 葉子需要什麼來製造食物?',
      options: [{ label: 'A', text: 'Water and sunlight 水和陽光' }, { label: 'B', text: 'Soil and air 土壤和空氣' }, { label: 'C', text: 'Roots and stem 根和莖' }, { label: 'D', text: 'Flowers and fruits 花和果實' }],
      answer: 'A',
    },
    {
      question: 'Which part of the plant anchors it to the ground? 植物的哪個部分將它固定在地上?',
      options: [{ label: 'A', text: 'Leaves 葉子' }, { label: 'B', text: 'Roots 根' }, { label: 'C', text: 'Stem 莖' }, { label: 'D', text: 'Flower 花' }],
      answer: 'B',
    },
    {
      question: 'What is the main function of the stem? 莖的主要功能是什麼?',
      options: [{ label: 'A', text: 'Make food 製造食物' }, { label: 'B', text: 'Absorb water 吸收水分' }, { label: 'C', text: 'Support the plant and transport water and nutrients 支持植物並運輸水分和養分' }, { label: 'D', text: 'Produce flowers 產生花朵' }],
      answer: 'C',
    },
    {
      question: 'Which part of the plant is usually green and flat? 植物的哪個部分通常是綠色且扁平的?',
      options: [{ label: 'A', text: 'Roots 根' }, { label: 'B', text: 'Stem 莖' }, { label: 'C', text: 'Leaves 葉子' }, { label: 'D', text: 'Flower 花' }],
      answer: 'C',
    },
    {
      question: 'What do roots absorb from the soil? 根從土壤中吸收什麼?',
      options: [{ label: 'A', text: 'Food 食物' }, { label: 'B', text: 'Water and nutrients 水分和養分' }, { label: 'C', text: 'Sunlight 陽光' }, { label: 'D', text: 'Air 空氣' }],
      answer: 'B',
    },
    {
      question: 'Which part of the plant is often found underground? 植物的哪個部分通常在地下?',
      options: [{ label: 'A', text: 'Leaves 葉子' }, { label: 'B', text: 'Roots 根' }, { label: 'C', text: 'Stem 莖' }, { label: 'D', text: 'Flower 花' }],
      answer: 'B',
    },
    {
      question: 'What is the function of leaves? 葉子的功能是什麼?',
      options: [{ label: 'A', text: 'Anchor the plant 固定植物' }, { label: 'B', text: 'Make food 製造食物' }, { label: 'C', text: 'Transport water 運輸水分' }, { label: 'D', text: 'Produce seeds 產生種子' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Leaves are the part of the plant that makes food. 葉子是植物製造食物的部分。', answer: true },
    { statement: 'Roots help the plant to stand upright. 根幫助植物直立。', answer: false },
    { statement: 'The stem transports water and nutrients in the plant. 莖在植物中運輸水分和養分。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two functions of the roots. 列出根的兩個功能。',
    },
    {
      question: 'Why are leaves important to a plant? 為什麼葉子對植物很重要?',
    },
    {
      question: 'What would happen if a plant did not have a stem? 如果植物沒有莖會發生什麼?',
    },
  ],
};

export default function StructuresOfLivingThingsPage() {
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
             Structures of living things
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Living things have different structures that help them survive and grow. Plants have leaves, stems, and roots that each perform special functions to keep the plant healthy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the major structures in plants and their functions (leaves make food, roots absorb water and nutrients and anchor plants, stems support the plant and transport water, food and nutrients)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Label the parts of a plant diagram</li>
              <li>Observe real plants and identify their structures</li>
              <li>Create a model plant showing different structures</li>
              <li>Match plant parts to their functions</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify plant structures and explain their functions in plant survival and growth.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the complexity of living things</li>
              <li>Curiosity about how plants function</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how plants contribute to ecosystems</li>
              <li>Recognizing the importance of plants in food production</li>
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