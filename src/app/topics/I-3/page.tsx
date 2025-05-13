'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which stage of the cell cycle involves the division of the cytoplasm? 細胞週期的哪個階段涉及細胞質的分裂？',
      options: [{ label: 'A', text: 'Interphase 間期' }, { label: 'B', text: 'Mitosis 有絲分裂' }, { label: 'C', text: 'Cytokinesis 細胞質分裂' }, { label: 'D', text: 'Meiosis 減數分裂' }],
      answer: 'C',
    },
    {
      question: 'What is the primary purpose of mitosis? 有絲分裂的主要目的是什麼？',
      options: [{ label: 'A', text: 'Growth and repair of tissues 組織的生長和修復' }, { label: 'B', text: 'Production of gametes 配子的產生' }, { label: 'C', text: 'Genetic variation 遺傳變異' }, { label: 'D', text: 'Energy production 能量生產' }],
      answer: 'A',
    },
    {
      question: 'During which phase of mitosis do chromosomes align at the equator of the cell? 在有絲分裂的哪個階段，染色體會在細胞的赤道板上排列？',
      options: [{ label: 'A', text: 'Prophase 前期' }, { label: 'B', text: 'Metaphase 中期' }, { label: 'C', text: 'Anaphase 後期' }, { label: 'D', text: 'Telophase 末期' }],
      answer: 'B',
    },
    {
      question: 'How many daughter cells are produced at the end of meiosis? 減數分裂結束時會產生多少個子細胞？',
      options: [{ label: 'A', text: '1 1個' }, { label: 'B', text: '2 2個' }, { label: 'C', text: '4 4個' }, { label: 'D', text: '8 8個' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT a stage of the cell cycle? 以下哪項不是細胞週期的階段？',
      options: [{ label: 'A', text: 'G1 phase G1期' }, { label: 'B', text: 'S phase S期' }, { label: 'C', text: 'M phase M期' }, { label: 'D', text: 'R phase R期' }],
      answer: 'D',
    },
    {
      question: 'What is the significance of crossing over during meiosis? 減數分裂中交叉互換的意義是什麼？',
      options: [{ label: 'A', text: 'Increases genetic diversity 增加遺傳多樣性' }, { label: 'B', text: 'Reduces chromosome number 減少染色體數量' }, { label: 'C', text: 'Prevents mutations 防止突變' }, { label: 'D', text: 'Speeds up cell division 加速細胞分裂' }],
      answer: 'A',
    },
    {
      question: 'Which of the following correctly describes the outcome of mitosis? 以下哪項正確描述了有絲分裂的結果？',
      options: [{ label: 'A', text: 'Two genetically identical diploid cells 兩個遺傳上相同的二倍體細胞' }, { label: 'B', text: 'Four genetically different haploid cells 四個遺傳上不同的單倍體細胞' }, { label: 'C', text: 'Two genetically different diploid cells 兩個遺傳上不同的二倍體細胞' }, { label: 'D', text: 'Four genetically identical haploid cells 四個遺傳上相同的單倍體細胞' }],
      answer: 'A',
    },
    {
      question: 'What happens during the S phase of the cell cycle? 在細胞週期的S期會發生什麼？',
      options: [{ label: 'A', text: 'Cell growth 細胞生長' }, { label: 'B', text: 'DNA replication DNA複製' }, { label: 'C', text: 'Chromosome segregation 染色體分離' }, { label: 'D', text: 'Cytokinesis 細胞質分裂' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a key difference between mitosis and meiosis? 以下哪項是有絲分裂和減數分裂的主要區別？',
      options: [{ label: 'A', text: 'Mitosis produces haploid cells, meiosis produces diploid cells 有絲分裂產生單倍體細胞，減數分裂產生二倍體細胞' }, { label: 'B', text: 'Mitosis involves one division, meiosis involves two divisions 有絲分裂涉及一次分裂，減數分裂涉及兩次分裂' }, { label: 'C', text: 'Mitosis occurs in gametes, meiosis occurs in somatic cells 有絲分裂發生在配子中，減數分裂發生在體細胞中' }, { label: 'D', text: 'Mitosis increases genetic diversity, meiosis maintains genetic stability 有絲分裂增加遺傳多樣性，減數分裂保持遺傳穩定性' }],
      answer: 'B',
    },
    {
      question: 'Why is cell division important for reproduction? 為什麼細胞分裂對繁殖很重要？',
      options: [{ label: 'A', text: 'It allows for growth of the organism 它允許生物體的生長' }, { label: 'B', text: 'It produces gametes for sexual reproduction 它產生用於有性繁殖的配子' }, { label: 'C', text: 'It repairs damaged tissues 它修復受損的組織' }, { label: 'D', text: 'It generates energy for the cell 它為細胞產生能量' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Mitosis results in the production of two genetically identical daughter cells. 有絲分裂會產生兩個遺傳上相同的子細胞。', answer: true },
    { statement: 'Meiosis occurs in somatic cells. 減數分裂發生在體細胞中。', answer: false },
    { statement: 'The G1 phase is part of interphase where the cell grows and carries out normal functions. G1期是間期的一部分，細胞在此期間生長並執行正常功能。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain the importance of the cell cycle in the growth and development of organisms. 解釋細胞週期在生物體生長和發育中的重要性。',
    },
    {
      question: 'Compare and contrast the processes of mitosis and meiosis. 比較和對比有絲分裂和減數分裂的過程。',
    },
    {
      question: 'How does the understanding of cell division contribute to advancements in medical science? 對細胞分裂的理解如何促進醫學科學的進步？',
    },
  ],
};

export default function CellCycleAndDivisionPage() {
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
            Cell cycle and division
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Cells and biomolecules are fundamental units of life. Organisms are built up of these fundamental units which function as an integrated whole. The study of the structure and function of cells will lay the foundation for students to understand and relate cellular processes to the essential life processes of organisms. The study of the discovery of cells will enable students to appreciate the contribution of technology to the advancement of science and the dynamic nature of biological knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Stages of cell cycle (Cell growth, nuclear division and cytoplasmic division)</li>
                <li>Nuclear division (Mitosis, Meiosis)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Observe and identify the different stages of mitosis and meiosis, using prepared slides, photomicrographs or live cell images.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand the importance of cell division in growth and reproduction.</li>
                <li>Recognise the various stages of cell cycle.</li>
                <li>Outline and compare the processes of mitosis and meiosis.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
                <li>Show an interest in the study of biology, appreciate the wonders and complexity of Nature, and show respect for all living things and the environment;</li>
                <li>Recognise their responsibility for conserving, protecting and maintaining the quality of the environment;</li>
                <li>Develop positive values and attitudes towards adopting a healthy lifestyle;</li>
                <li>Be aware of the dynamic nature of biological knowledge and appreciate the role of science and technology in understanding the living world;</li>
                <li>Be aware of the application of biological knowledge in society and its social, ethical, economic and environmental implications.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
                <li>Be aware of the applications of biological knowledge of cells and molecules of life in society;</li>
                <li>Appreciate the role of science and technology in understanding the molecular basis of life;</li>
                <li>Recognise that the development of microscopic technology, computing technology and image analysing technology may lead to the advancement of biological knowledge.</li>
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