'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following processes is an example of catabolism? 以下哪個過程是分解代謝的例子?',
      options: [{ label: 'A', text: 'Protein synthesis 蛋白質合成' }, { label: 'B', text: 'Glycolysis 糖酵解' }, { label: 'C', text: 'DNA replication DNA複製' }, { label: 'D', text: 'Photosynthesis 光合作用' }],
      answer: 'B',
    },
    {
      question: 'What is the primary function of enzymes in metabolic reactions? 酶在代謝反應中的主要功能是什麼?',
      options: [{ label: 'A', text: 'To provide energy for reactions 為反應提供能量' }, { label: 'B', text: 'To increase the activation energy 增加活化能' }, { label: 'C', text: 'To lower the activation energy 降低活化能' }, { label: 'D', text: 'To change the equilibrium of reactions 改變反應的平衡' }],
      answer: 'C',
    },
    {
      question: 'Which factor does NOT affect the rate of enzymatic reactions? 以下哪個因素不會影響酶促反應的速率?',
      options: [{ label: 'A', text: 'Temperature 溫度' }, { label: 'B', text: 'pH值' }, { label: 'C', text: 'Enzyme concentration 酶濃度' }, { label: 'D', text: 'Color of the enzyme 酶的顏色' }],
      answer: 'D',
    },
    {
      question: 'Where does the light-dependent reaction of photosynthesis occur? 光合作用的光依賴反應發生在哪裡?',
      options: [{ label: 'A', text: 'Stroma 基質' }, { label: 'B', text: 'Thylakoid membrane 類囊體膜' }, { label: 'C', text: 'Mitochondria 線粒體' }, { label: 'D', text: 'Cytoplasm 細胞質' }],
      answer: 'B',
    },
    {
      question: 'What is the main product of the Calvin cycle? 卡爾文循環的主要產物是什麼?',
      options: [{ label: 'A', text: 'Glucose 葡萄糖' }, { label: 'B', text: 'ATP ATP' }, { label: 'C', text: 'Oxygen 氧氣' }, { label: 'D', text: 'NADPH NADPH' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a product of anaerobic respiration in yeast? 以下哪個是酵母無氧呼吸的產物?',
      options: [{ label: 'A', text: 'Lactic acid 乳酸' }, { label: 'B', text: 'Ethanol 乙醇' }, { label: 'C', text: 'Carbon dioxide 二氧化碳' }, { label: 'D', text: 'Both B and C B和C都是' }],
      answer: 'D',
    },
    {
      question: 'What is the role of ATP in cellular processes? ATP在細胞過程中的作用是什麼?',
      options: [{ label: 'A', text: 'Long-term energy storage 長期能量儲存' }, { label: 'B', text: 'Genetic information storage 遺傳信息儲存' }, { label: 'C', text: 'Immediate energy currency 即時能量貨幣' }, { label: 'D', text: 'Structural component of cell membranes 細胞膜的結構成分' }],
      answer: 'C',
    },
    {
      question: 'Which organelle is responsible for aerobic respiration? 哪個細胞器負責有氧呼吸?',
      options: [{ label: 'A', text: 'Chloroplast 葉綠體' }, { label: 'B', text: 'Nucleus 細胞核' }, { label: 'C', text: 'Mitochondria 線粒體' }, { label: 'D', text: 'Golgi apparatus 高爾基體' }],
      answer: 'C',
    },
    {
      question: 'What happens to the rate of photosynthesis if light intensity increases beyond a certain point? 如果光照強度超過某一點，光合作用的速率會發生什麼變化?',
      options: [{ label: 'A', text: 'Continues to increase indefinitely 無限繼續增加' }, { label: 'B', text: 'Remains constant 保持不變' }, { label: 'C', text: 'Decreases 下降' }, { label: 'D', text: 'First increases then plateaus 先增加後趨於平穩' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is NOT a similarity between photosynthesis and respiration? 以下哪一項不是光合作用和呼吸作用的相似之處?',
      options: [{ label: 'A', text: 'Both involve ATP production 兩者都涉及ATP的產生' }, { label: 'B', text: 'Both involve electron transport chains 兩者都涉及電子傳遞鏈' }, { label: 'C', text: 'Both occur in chloroplasts 兩者都在葉綠體中進行' }, { label: 'D', text: 'Both involve redox reactions 兩者都涉及氧化還原反應' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Anabolic reactions typically release energy, while catabolic reactions require energy. 合成代謝反應通常釋放能量，而分解代謝反應需要能量。', answer: false },
    { statement: 'Enzymes are specific to their substrates due to the shape of their active sites. 酶由於其活性位點的形狀而對其底物具有特異性。', answer: true },
    { statement: 'The light-independent reactions of photosynthesis can occur in the absence of light. 光合作用的暗反應可以在沒有光的情況下進行。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how the structure of a chloroplast is adapted for its function in photosynthesis. 解釋葉綠體的結構如何適應其在光合作用中的功能。',
    },
    {
      question: 'Compare and contrast aerobic and anaerobic respiration in terms of energy yield and end products. 就有氧和無氧呼吸的能量產量和最終產物進行比較和對比。',
    },
    {
      question: 'Describe how environmental factors such as temperature and carbon dioxide concentration can affect the rate of photosynthesis. 描述環境因素如溫度和二氧化碳濃度如何影響光合作用的速率。',
    },
  ],
};

export default function CellularEnergeticsPage() {
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
            Cellular energetics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Cells and biomolecules are fundamental units of life. Organisms are built up of these fundamental units which function as an integrated whole. The study of the structure and function of cells will lay the foundation for students to understand and relate cellular processes to the essential life processes of organisms. The study of the discovery of cells will enable students to appreciate the contribution of technology to the advancement of science and the dynamic nature of biological knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Metabolism: catabolism and anabolism</li>
                <li>Occurrence of catabolic and anabolic processes in cells</li>
                <li>Enzymes and enzymatic reactions (Properties and roles, Active site/specificity, Factors affecting rate, Everyday applications)</li>
                <li>Photosynthesis (Site, Requirements, Photochemical reactions, Carbon fixation, Product conversions, Factors affecting rate)</li>
                <li>Respiration (Sites, Glycolysis, Aerobic pathway, Anaerobic pathway, Industrial applications)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Perform practical work to demonstrate enzyme action (breakdown/buildup); identify photosynthetic products.</li>
                <li>Design/perform investigations on enzyme activity factors (temp, pH, inhibitors); enzyme applications (washing powder, tenderiser); environmental factors on photosynthesis; aerobic/anaerobic respiration.</li>
                <li>Examine leaf morphology/internal structure; chloroplast/mitochondria images.</li>
                <li>Search info: compare photosynthetic rates/productivities; understand scientists\\' work on photosynthesis/respiration.</li>
                <li>Conduct project on greenhouse effect on plant growth.</li>
                <li>Discuss anaerobic respiration in food industry.</li>
                <li>Interpret, analyse, evaluate data on photosynthesis/respiration investigations.</li>
                <li>Use animations for photosynthesis/respiration processes.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Distinguish between catabolic and anabolic processes.</li>
                <li>Recognise enzyme properties and roles in metabolism.</li>
                <li>Explain enzyme specificity via active site.</li>
                <li>Explain factor effects on enzymatic reaction rates.</li>
                <li>Understand photosynthesis significance.</li>
                <li>Relate leaf/chloroplast structure to photosynthesis functions.</li>
                <li>Outline major steps of photochemical reactions and carbon fixation.</li>
                <li>Understand carbon fixation dependence on photochemical reaction.</li>
                <li>Explain environmental factor effects on photosynthesis rate.</li>
                <li>Understand respiration significance.</li>
                <li>State ATP role in energy transfer.</li>
                <li>Outline major steps of glycolysis, aerobic/anaerobic pathways.</li>
                <li>Be aware of anaerobic respiration during exercise.</li>
                <li>Distinguish between aerobic/anaerobic respiration.</li>
                <li>Compare respiration and photosynthesis processes.</li>
                <li>Be aware of biomolecule interconversions via biochemical pathways.</li>
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