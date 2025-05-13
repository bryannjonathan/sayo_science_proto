'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Who is credited with the discovery of cells? 誰被認為是細胞的發現者?',
      options: [{ label: 'A', text: 'Robert Hooke 羅伯特·虎克' }, { label: 'B', text: 'Louis Pasteur 路易·巴斯德' }, { label: 'C', text: 'Charles Darwin 查爾斯·達爾文' }, { label: 'D', text: 'Gregor Mendel 格雷戈爾·孟德爾' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a function of the cell membrane? 以下哪項不是細胞膜的功能?',
      options: [{ label: 'A', text: 'Regulating the passage of substances 調節物質的進出' }, { label: 'B', text: 'Providing structural support 提供結構支持' }, { label: 'C', text: 'Storing genetic information 儲存遺傳信息' }, { label: 'D', text: 'Facilitating cell communication 促進細胞通訊' }],
      answer: 'C',
    },
    {
      question: 'Which organelle is responsible for protein synthesis? 哪個細胞器負責蛋白質合成?',
      options: [{ label: 'A', text: 'Mitochondrion 粒線體' }, { label: 'B', text: 'Endoplasmic reticulum 內質網' }, { label: 'C', text: 'Chloroplast 葉綠體' }, { label: 'D', text: 'Vacuole 液泡' }],
      answer: 'B',
    },
    {
      question: 'What is the main difference between prokaryotic and eukaryotic cells? 原核細胞和真核細胞的主要區別是什麼?',
      options: [{ label: 'A', text: 'Presence of a nucleus 是否有細胞核' }, { label: 'B', text: 'Presence of a cell membrane 是否有細胞膜' }, { label: 'C', text: 'Presence of ribosomes 是否有核糖體' }, { label: 'D', text: 'Presence of mitochondria 是否有粒線體' }],
      answer: 'A',
    },
    {
      question: 'Which structure is unique to plant cells? 哪種結構是植物細胞獨有的?',
      options: [{ label: 'A', text: 'Cell wall 細胞壁' }, { label: 'B', text: 'Nucleus 細胞核' }, { label: 'C', text: 'Mitochondrion 粒線體' }, { label: 'D', text: 'Endoplasmic reticulum 內質網' }],
      answer: 'A',
    },
    {
      question: 'Which model describes the structure of the cell membrane? 哪個模型描述了細胞膜的結構?',
      options: [{ label: 'A', text: 'Fluid mosaic model 流動鑲嵌模型' }, { label: 'B', text: 'Lock and key model 鎖鑰模型' }, { label: 'C', text: 'Induced fit model 誘導契合模型' }, { label: 'D', text: 'Double helix model 雙螺旋模型' }],
      answer: 'A',
    },
    {
      question: 'Which organelle contains chlorophyll? 哪個細胞器含有葉綠素?',
      options: [{ label: 'A', text: 'Chloroplast 葉綠體' }, { label: 'B', text: 'Mitochondrion 粒線體' }, { label: 'C', text: 'Nucleus 細胞核' }, { label: 'D', text: 'Vacuole 液泡' }],
      answer: 'A',
    },
    {
      question: 'What is the function of the mitochondrion? 粒線體的功能是什麼?',
      options: [{ label: 'A', text: 'Photosynthesis 光合作用' }, { label: 'B', text: 'Protein synthesis 蛋白質合成' }, { label: 'C', text: 'Cellular respiration 細胞呼吸' }, { label: 'D', text: 'Storage of water 儲存水分' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a prokaryotic organism? 以下哪種是原核生物?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Fungi 真菌' }, { label: 'C', text: 'Plant 植物' }, { label: 'D', text: 'Animal 動物' }],
      answer: 'A',
    },
    {
      question: 'Which microscope has higher magnification and resolution? 哪種顯微鏡具有更高的放大倍率和解析度?',
      options: [{ label: 'A', text: 'Light microscope 光學顯微鏡' }, { label: 'B', text: 'Electron microscope 電子顯微鏡' }, { label: 'C', text: 'Dissecting microscope 解剖顯微鏡' }, { label: 'D', text: 'Compound microscope 複式顯微鏡' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Prokaryotic cells have a nucleus. 原核細胞具有細胞核。', answer: false },
    { statement: 'The cell membrane is selectively permeable. 細胞膜具有選擇性通透性。', answer: true },
    { statement: 'Chloroplasts are found in all eukaryotic cells. 葉綠體存在於所有真核細胞中。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how the development of the microscope contributed to the discovery of cells. 解釋顯微鏡的發展如何促成細胞的發現。',
    },
    {
      question: 'Compare and contrast the structure and function of animal and plant cells. 比較和對比動物細胞和植物細胞的結構和功能。',
    },
    {
      question: 'Describe the fluid mosaic model of the cell membrane and explain its significance. 描述細胞膜的流動鑲嵌模型並解釋其重要性。',
    },
  ],
};

export default function CellularOrganisationPage() {
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
            Cellular organisation
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Cells and biomolecules are fundamental units of life. Organisms are built up of these fundamental units which function as an integrated whole. The study of the structure and function of cells will lay the foundation for students to understand and relate cellular processes to the essential life processes of organisms. The study of the discovery of cells will enable students to appreciate the contribution of technology to the advancement of science and the dynamic nature of biological knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Discovery of cells</li>
                <li>Cell membrane (Properties and functions)</li>
                <li>Sub-cellular structures and their functions (Nucleus and chromosomes, endoplasmic reticulum, mitochondrion, chloroplast, cell wall and vacuole)</li>
                <li>Prokaryotic cells (e.g. bacterial cells) and eukaryotic cells</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Read articles about the discovery of cells.</li>
                <li>Conduct a project to explore the contribution of the development of the microscope to the understanding of cells.</li>
                <li>Discuss the variations of the number of mitochondria in different tissues and cell types.</li>
                <li>Prepare temporary mounts of animal and plant tissues for examination under a light microscope.</li>
                <li>Examine electron micrographs or live cell images of prokaryotic, eukaryotic cells and sub-cellular structures.</li>
                <li>Construct a model to represent the structure of cell membrane (e.g. using tank and ping-pong balls).</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Appreciate the contribution of the technological development of the microscope to the discovery of cells.</li>
                <li>Prepare temporary mounts of specimens for examination, and make observations and drawings under a light microscope.</li>
                <li>Use the fluid mosaic model to explain the properties and functions of cell membrane.</li>
                <li>Appreciate the uses and limitations of scientific models.</li>
                <li>Compare the cellular organisation of animal and plant cells.</li>
                <li>Identify cell organelles as seen under light and electron microscopes.</li>
                <li>Compare the sub-cellular organisation of prokaryotic and eukaryotic cells.</li>
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