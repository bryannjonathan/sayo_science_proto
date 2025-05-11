'use client'

import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'
import BackButton from '@/components/BackButton'
import Quiz from '@/components/Quiz'
import type { QuizData } from '@/components/Quiz'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is NOT a function of water in living organisms?',
      options: [
        { label: 'A', text: 'Solvent' },
        { label: 'B', text: 'Structural support' },
        { label: 'C', text: 'Stores genetic info' },
        { label: 'D', text: 'Temperature regulation' },
      ],
      answer: 'C',
    },
    {
      question: 'Which inorganic ion is key in chlorophyll?',
      options: [
        { label: 'A', text: 'Calcium' },
        { label: 'B', text: 'Magnesium' },
        { label: 'C', text: 'Iron' },
        { label: 'D', text: 'Nitrogen' },
      ],
      answer: 'B',
    },
    {
      question: 'What is the building block of proteins?',
      options: [
        { label: 'A', text: 'Monosaccharides' },
        { label: 'B', text: 'Fatty acids' },
        { label: 'C', text: 'Amino acids' },
        { label: 'D', text: 'Nucleotides' },
      ],
      answer: 'C',
    },
    {
      question: 'What is primarily used for long-term energy storage?',
      options: [
        { label: 'A', text: 'Carbs' },
        { label: 'B', text: 'Proteins' },
        { label: 'C', text: 'Lipids' },
        { label: 'D', text: 'Nucleic acids' },
      ],
      answer: 'C',
    },
    {
      question: 'Which test detects reducing sugars?',
      options: [
        { label: 'A', text: 'Iodine' },
        { label: 'B', text: 'Benedict’s' },
        { label: 'C', text: 'Grease spot' },
        { label: 'D', text: 'Biuret' },
      ],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Water helps organisms maintain stable temperature', answer: true },
    { statement: 'All carbohydrates are water-soluble', answer: false },
    { statement: 'Only proteins can act as enzymes', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain the importance of water in biological systems with examples.',
    },
    {
      question: 'How does lipid structure relate to its function in the body?',
    },
    {
      question: 'Discuss the ethical concerns about applying biological knowledge of molecules of life.',
    },
  ],
}

export default function MoleculesOfLifePage() {
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
            <h1 className="text-3xl font-bold text-slate-800">Secondary1-Topic Molecules of Life</h1>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
            <p className="text-slate-700 leading-relaxed">
              Cells and biomolecules are fundamental units of life. This chapter introduces key biological molecules
              such as water, ions, carbohydrates, lipids, proteins, and nucleic acids — and how they contribute to the
              structure and function of organisms.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
              <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Understand the roles of water and inorganic ions like nitrogen, magnesium, calcium, and iron</li>
                <li>Describe the structure and functions of carbohydrates, lipids, proteins, and nucleic acids</li>
              </ul>
            </SectionCard>

            <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
              <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li><strong>Lab Test Simulation:</strong> Use Benedict’s, iodine, grease spot, Biuret tests virtually or in class</li>
                <li><strong>Water Debate:</strong> Could life exist without water? Discuss!</li>
                <li><strong>Ion Match:</strong> Match Ca²⁺, Fe²⁺, Mg²⁺ to biological roles using flashcards</li>
              </ul>
            </SectionCard>

            <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
              <p className="text-slate-700 leading-relaxed">
                Students will be able to relate the biological significance of water, ions, and biomolecules to essential
                life functions and biochemical processes.
              </p>
            </SectionCard>

            <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
              <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
                <li>Show appreciation for the complexity of life and responsibility for the environment</li>
                <li>Adopt a healthy lifestyle and consider ethical implications of biotechnology</li>
              </ul>
            </SectionCard>

            <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
              <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
                <li>Understand the use of molecular biology in health, food tech, and pharmaceuticals</li>
                <li>Appreciate the role of technologies like microscopy and DNA sequencing</li>
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
