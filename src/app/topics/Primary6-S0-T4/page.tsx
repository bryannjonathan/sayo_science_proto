'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'What is the basic unit of living things? 生物的基本單位是什麼?',
      options: [{ label: 'A', text: 'Cell 細胞' }, { label: 'B', text: 'Atom 原子' }, { label: 'C', text: 'Molecule 分子' }, { label: 'D', text: 'Organ 器官' }],
      answer: 'A',
    },
    {
      question: 'Which part of the plant cell is responsible for photosynthesis? 植物細胞的哪個部分負責光合作用?',
      options: [{ label: 'A', text: 'Cell wall 細胞壁' }, { label: 'B', text: 'Chloroplast 葉綠體' }, { label: 'C', text: 'Nucleus 細胞核' }, { label: 'D', text: 'Mitochondria 粒線體' }],
      answer: 'B',
    },
    {
      question: 'What is the main difference between plant and animal cells? 植物細胞和動物細胞的主要區別是什麼?',
      options: [{ label: 'A', text: 'Plant cells have a cell wall 植物細胞有細胞壁' }, { label: 'B', text: 'Animal cells have chloroplasts 動物細胞有葉綠體' }, { label: 'C', text: 'Plant cells do not have a nucleus 植物細胞沒有細胞核' }, { label: 'D', text: 'Animal cells have a cell wall 動物細胞有細胞壁' }],
      answer: 'A',
    },
    {
      question: 'Which instrument is used to observe cells? 觀察細胞需要使用什麼儀器?',
      options: [{ label: 'A', text: 'Telescope 望遠鏡' }, { label: 'B', text: 'Microscope 顯微鏡' }, { label: 'C', text: 'Magnifying glass 放大鏡' }, { label: 'D', text: 'Thermometer 溫度計' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT found in animal cells? 以下哪一項不存在於動物細胞中?',
      options: [{ label: 'A', text: 'Nucleus 細胞核' }, { label: 'B', text: 'Cell membrane 細胞膜' }, { label: 'C', text: 'Chloroplast 葉綠體' }, { label: 'D', text: 'Mitochondria 粒線體' }],
      answer: 'C',
    },
    {
      question: 'What is the function of the cell membrane? 細胞膜的功能是什麼?',
      options: [{ label: 'A', text: 'To control what enters and leaves the cell 控制物質進出細胞' }, { label: 'B', text: 'To provide structure and support 提供結構和支持' }, { label: 'C', text: 'To produce energy 產生能量' }, { label: 'D', text: 'To store genetic information 儲存遺傳信息' }],
      answer: 'A',
    },
    {
      question: 'Which part of the cell contains genetic material? 細胞的哪一部分含有遺傳物質?',
      options: [{ label: 'A', text: 'Cell wall 細胞壁' }, { label: 'B', text: 'Chloroplast 葉綠體' }, { label: 'C', text: 'Nucleus 細胞核' }, { label: 'D', text: 'Vacuole 液泡' }],
      answer: 'C',
    },
    {
      question: 'What is the function of the vacuole in plant cells? 植物細胞中液泡的功能是什麼?',
      options: [{ label: 'A', text: 'To store water and nutrients 儲存水分和營養' }, { label: 'B', text: 'To produce energy 產生能量' }, { label: 'C', text: 'To control cell activities 控制細胞活動' }, { label: 'D', text: 'To protect the cell 保護細胞' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a similarity between plant and animal cells? 以下哪一項是植物和動物細胞的相似之處?',
      options: [{ label: 'A', text: 'Both have chloroplasts 兩者都有葉綠體' }, { label: 'B', text: 'Both have a cell wall 兩者都有細胞壁' }, { label: 'C', text: 'Both have a nucleus 兩者都有細胞核' }, { label: 'D', text: 'Both have a large central vacuole 兩者都有大液泡' }],
      answer: 'C',
    },
    {
      question: 'What is the function of the mitochondria? 粒線體的功能是什麼?',
      options: [{ label: 'A', text: 'To produce energy 產生能量' }, { label: 'B', text: 'To store water 儲存水分' }, { label: 'C', text: 'To control cell activities 控制細胞活動' }, { label: 'D', text: 'To provide structure 提供結構' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All living things are made up of cells. 所有生物都是由細胞組成的。', answer: true },
    { statement: 'Animal cells have a cell wall. 動物細胞有細胞壁。', answer: false },
    { statement: 'Chloroplasts are found in both plant and animal cells. 葉綠體存在於植物和動物細胞中。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe two differences between plant and animal cells. 描述植物細胞和動物細胞的兩個不同之處。',
    },
    {
      question: 'Explain why plant cells have chloroplasts but animal cells do not. 解釋為什麼植物細胞有葉綠體而動物細胞沒有。',
    },
    {
      question: 'What are the steps to properly use a microscope to observe cells? 正確使用顯微鏡觀察細胞的步驟是什麼?',
    },
  ],
};

export default function CellsAndMicroscopePage() {
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
             Cells and microscope
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Cells are the basic building blocks of all living organisms. Microscopes allow us to observe these tiny structures and understand their functions in plants and animals.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that cells are the basic units of living things</li>
                <li>Use a microscope to observe animal cells and plant cells</li>
                <li>Identify the different parts of animal and plant cells, and compare the similarities and differences between animal and plant cells (plant cells have cell walls while animal cells do not, most plant cells have chloroplasts while most animal cells do not)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create 3D models of plant and animal cells using craft materials</li>
              <li>Microscope lab: Observe onion cells and cheek cells under magnification</li>
              <li>Virtual cell exploration using interactive simulations</li>
              <li>Cell structure matching game</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand cell structures and functions, and be able to compare plant and animal cells. They will gain practical skills in using microscopes for scientific observation.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the complexity of life at microscopic levels</li>
              <li>Curiosity about unseen biological structures</li>
              <li>Respect for scientific instruments and proper handling techniques</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Microscope technology advancements in medical research</li>
              <li>Applications of cell biology in agriculture and medicine</li>
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