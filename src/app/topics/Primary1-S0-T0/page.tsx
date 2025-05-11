'use client'

import {
  BookOpen,
  Target,
  Lightbulb,
  CheckSquare,
  Heart,
  Microscope,
  HelpCircle,
} from 'lucide-react'
import BackButton from '@/components/BackButton'
import Quiz from '@/components/Quiz'
import type { QuizData } from '@/components/Quiz'

const quizData: QuizData = {
  mcq: [
    {
      question: "What covers more of the Earth's surface: oceans or land?",
      options: [
        { label: "A", text: "Oceans" },
        { label: "B", text: "Land" },
        { label: "C", text: "They are the same" },
        { label: "D", text: "I don't know" },
      ],
      answer: "A",
    },
    {
      question: "What surrounds the Earth's surface?",
      options: [
        { label: "A", text: "Water" },
        { label: "B", text: "Atmosphere (gases)" },
        { label: "C", text: "Rocks" },
        { label: "D", text: "Fire" },
      ],
      answer: "B",
    },
    {
      question: "Who shares the Earth as their home?",
      options: [
        { label: "A", text: "Only humans" },
        { label: "B", text: "Only animals" },
        { label: "C", text: "Humans, animals, and plants" },
        { label: "D", text: "Only plants" },
      ],
      answer: "C",
    },
    {
      question: "Why is it important to care for the Earth?",
      options: [
        { label: "A", text: "Because it is our home" },
        { label: "B", text: "Because it is pretty" },
        { label: "C", text: "Because it is big" },
        { label: "D", text: "Because it is far away" },
      ],
      answer: "A",
    },
    {
      question: "What is the Earth's surface mostly covered by?",
      options: [
        { label: "A", text: "Sand" },
        { label: "B", text: "Water" },
        { label: "C", text: "Trees" },
        { label: "D", text: "Mountains" },
      ],
      answer: "B",
    },
  ],
  true_false: [
    { statement: "The Earth's surface is mostly covered by land", answer: false },
    { statement: "The atmosphere is a layer of gases around the Earth", answer: true },
    { statement: "Only humans live on Earth", answer: false },
  ],
  open_ended: [
    { question: "Name one way you can help take care of the Earth." },
    { question: "What are two things that cover the Earth's surface?" },
    { question: "Why is the Earth important to us?" },
  ],
}

export default function EarthsCharacteristicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-4 py-4 max-w-5xl mx-auto">
          <BackButton />
        </div>
      </header>

      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Primary1-S2-T0 Earth’s Characteristics</h1>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
            <p className="text-slate-700 leading-relaxed">
              The Earth is our shared home, full of oceans, land, and a protective atmosphere. In this lesson,
              students will explore the basic features of our planet and understand the importance of taking care of
              the Earth for all living beings.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
              <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Oceans cover more of the Earth's surface than land</li>
                <li>The Earth’s surface is surrounded by the atmosphere</li>
                <li>Earth is shared by humans, animals, and plants</li>
                <li>We must care for the planet</li>
              </ul>
            </SectionCard>

            <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
              <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Model the Earth with playdough (oceans vs land)</li>
                <li>Create a care-for-Earth poster</li>
                <li>Watch Earth-from-space videos and discuss</li>
              </ul>
            </SectionCard>

            <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
              <p className="text-slate-700 leading-relaxed">
                Students will identify Earth’s key surface features and explain the importance of caring for it.
              </p>
            </SectionCard>

            <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
              <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
                <li>Show care for the environment</li>
                <li>Appreciate Earth as a shared home</li>
              </ul>
            </SectionCard>

            <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
              <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
                <li>Explore how satellites monitor Earth’s surface</li>
                <li>Discuss pollution’s impact on land, water, air</li>
              </ul>
            </SectionCard>
          </div>

          <div className="mt-8">
            <SectionCard icon={<HelpCircle className="h-5 w-5 text-purple-600" />} title="Practice Questions" color="purple">
              <Quiz quizData={quizData} />
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  )
}

function SectionCard({
  title,
  children,
  icon,
  color,
}: {
  title: string
  children: React.ReactNode
  icon: React.ReactNode
  color: 'emerald' | 'amber' | 'sky' | 'rose' | 'indigo' | 'purple'
}) {
  const colorClasses = {
    emerald: 'border-emerald-100 bg-emerald-50/50',
    amber: 'border-amber-100 bg-amber-50/50',
    sky: 'border-sky-100 bg-sky-50/50',
    rose: 'border-rose-100 bg-rose-50/50',
    indigo: 'border-indigo-100 bg-indigo-50/50',
    purple: 'border-purple-100 bg-purple-50/50',
  }

  return (
    <div className={`border rounded-xl p-5 backdrop-blur-sm ${colorClasses[color]}`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  )
}
