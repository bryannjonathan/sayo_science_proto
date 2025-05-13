'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is NOT a function of water in living organisms? 以下哪項不是水在生物體中的功能?',
      options: [{ label: 'A', text: 'Acts as a solvent for biochemical reactions 作為生化反應的溶劑' }, { label: 'B', text: 'Provides structural support to cells 為細胞提供結構支持' }, { label: 'C', text: 'Stores genetic information 儲存遺傳信息' }, { label: 'D', text: 'Regulates body temperature 調節體溫' }],
      answer: 'C',
    },
    {
      question: 'Which inorganic ion is a key component of chlorophyll? 哪種無機離子是葉綠素的關鍵組成部分?',
      options: [{ label: 'A', text: 'Calcium 鈣' }, { label: 'B', text: 'Magnesium 鎂' }, { label: 'C', text: 'Iron 鐵' }, { label: 'D', text: 'Nitrogen 氮' }],
      answer: 'B',
    },
    {
      question: 'What is the building block of proteins? 蛋白質的基本組成單位是什麼?',
      options: [{ label: 'A', text: 'Monosaccharides 單醣' }, { label: 'B', text: 'Fatty acids 脂肪酸' }, { label: 'C', text: 'Amino acids 氨基酸' }, { label: 'D', text: 'Nucleotides 核苷酸' }],
      answer: 'C',
    },
    {
      question: 'Which biomolecule is primarily used for long-term energy storage? 哪種生物分子主要用於長期能量儲存?',
      options: [{ label: 'A', text: 'Carbohydrates 碳水化合物' }, { label: 'B', text: 'Proteins 蛋白質' }, { label: 'C', text: 'Lipids 脂質' }, { label: 'D', text: 'Nucleic acids 核酸' }],
      answer: 'C',
    },
    {
      question: 'Which test is used to identify the presence of reducing sugars? 哪種測試用於檢測還原糖的存在?',
      options: [{ label: 'A', text: 'Iodine test 碘液測試' }, { label: 'B', text: 'Benedict’s test 本尼迪克特測試' }, { label: 'C', text: 'Grease spot test 油脂斑點測試' }, { label: 'D', text: 'Biuret test 雙縮脲測試' }],
      answer: 'B',
    },
    {
      question: 'What is the main function of nucleic acids? 核酸的主要功能是什麼?',
      options: [{ label: 'A', text: 'Energy storage 能量儲存' }, { label: 'B', text: 'Structural support 結構支持' }, { label: 'C', text: 'Genetic information storage and transmission 遺傳信息的儲存和傳遞' }, { label: 'D', text: 'Enzyme catalysis 酶催化' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a disaccharide? 以下哪種是雙醣?',
      options: [{ label: 'A', text: 'Glucose 葡萄糖' }, { label: 'B', text: 'Fructose 果糖' }, { label: 'C', text: 'Sucrose 蔗糖' }, { label: 'D', text: 'Cellulose 纖維素' }],
      answer: 'C',
    },
    {
      question: 'Why is iron important in the human body? 鐵在人體中有什麼重要性?',
      options: [{ label: 'A', text: 'It is a component of hemoglobin 它是血紅蛋白的組成部分' }, { label: 'B', text: 'It strengthens bones 它強化骨骼' }, { label: 'C', text: 'It regulates nerve impulses 它調節神經衝動' }, { label: 'D', text: 'It is a primary energy source 它是主要能量來源' }],
      answer: 'A',
    },
    {
      question: 'Which biomolecule is tested using the Biuret test? 哪種生物分子使用雙縮脲測試檢測?',
      options: [{ label: 'A', text: 'Carbohydrates 碳水化合物' }, { label: 'B', text: 'Lipids 脂質' }, { label: 'C', text: 'Proteins 蛋白質' }, { label: 'D', text: 'Nucleic acids 核酸' }],
      answer: 'C',
    },
    {
      question: 'What is the primary role of calcium ions in the body? 鈣離子在體內的主要作用是什麼?',
      options: [{ label: 'A', text: 'Muscle contraction and nerve signaling 肌肉收縮和神經信號傳遞' }, { label: 'B', text: 'Oxygen transport 氧氣運輸' }, { label: 'C', text: 'Energy production 能量生產' }, { label: 'D', text: 'DNA replication DNA複製' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Water has a high specific heat capacity, which helps organisms maintain a stable internal temperature. 水具有高比熱容，這有助於生物體維持穩定的內部溫度。', answer: true },
    { statement: 'All carbohydrates are soluble in water. 所有碳水化合物都可溶於水。', answer: false },
    { statement: 'Proteins are the only biomolecules that can act as enzymes. 蛋白質是唯一可以作為酶的生物分子。', answer: false },
  ],
  open_ended: [
    {
      question: 'Discuss the importance of water for life and provide examples of its roles in biological systems. 討論水對生命的重要性，並舉例說明它在生物系統中的作用。',
    },
    {
      question: 'Explain how the structure of a lipid molecule relates to its function. 解釋脂質分子的結構如何與其功能相關。',
    },
    {
      question: 'Describe the social and ethical implications of advancements in biological knowledge about molecules of life. 描述關於生命分子的生物學知識進步所帶來的社會和倫理影響。',
    },
  ],
};

export default function MoleculesOfLifePage() {
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
            Molecules of life
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Cells and biomolecules are fundamental units of life. Organisms are built up of these fundamental units which function as an integrated whole. The study of the structure and function of cells will lay the foundation for students to understand and relate cellular processes to the essential life processes of organisms. The study of the discovery of cells will enable students to appreciate the contribution of technology to the advancement of science and the dynamic nature of biological knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Water and inorganic ions (e.g. nitrogen, magnesium, calcium and iron)</li>
                <li>Biomolecules: carbohydrates, lipids, proteins and nucleic acids (Building blocks, Functions)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Discuss whether life can exist without water, and the possible benefits of drinking mineral water or isotonic drinks.</li>
                <li>Perform common biochemical tests (e.g. Benedict’s test, iodine test, grease spot test, and different types of test papers) to identify the presence of biomolecules in living tissues.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Relate the significance of water, inorganic ions and biomolecules to life.</li>
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