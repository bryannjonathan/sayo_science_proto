'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which process involves the movement of molecules from an area of high concentration to an area of low concentration without energy input? 哪個過程涉及分子從高濃度區域移動到低濃度區域而不需要能量輸入?',
      options: [{ label: 'A', text: 'Diffusion 擴散' }, { label: 'B', text: 'Osmosis 滲透' }, { label: 'C', text: 'Active transport 主動運輸' }, { label: 'D', text: 'Phagocytosis 吞噬作用' }],
      answer: 'A',
    },
    {
      question: 'What happens to a plant cell when it is placed in a hypertonic solution? 當植物細胞被放入高滲透壓溶液中時會發生什麼?',
      options: [{ label: 'A', text: 'It becomes turgid 它會變得膨脹' }, { label: 'B', text: 'It undergoes plasmolysis 它會發生質壁分離' }, { label: 'C', text: 'It bursts 它會破裂' }, { label: 'D', text: 'It remains unchanged 它保持不變' }],
      answer: 'B',
    },
    {
      question: 'Which of the following requires energy in the form of ATP? 以下哪個過程需要ATP形式的能量?',
      options: [{ label: 'A', text: 'Diffusion 擴散' }, { label: 'B', text: 'Osmosis 滲透' }, { label: 'C', text: 'Active transport 主動運輸' }, { label: 'D', text: 'Facilitated diffusion 促進擴散' }],
      answer: 'C',
    },
    {
      question: 'What is the term for the bursting of red blood cells in a hypotonic solution? 紅血球在低滲透壓溶液中破裂的術語是什麼?',
      options: [{ label: 'A', text: 'Plasmolysis 質壁分離' }, { label: 'B', text: 'Haemolysis 溶血' }, { label: 'C', text: 'Crenation 皺縮' }, { label: 'D', text: 'Phagocytosis 吞噬作用' }],
      answer: 'B',
    },
    {
      question: 'Which process is used by white blood cells to engulf bacteria? 白血球用哪個過程來吞噬細菌?',
      options: [{ label: 'A', text: 'Diffusion 擴散' }, { label: 'B', text: 'Osmosis 滲透' }, { label: 'C', text: 'Phagocytosis 吞噬作用' }, { label: 'D', text: 'Active transport 主動運輸' }],
      answer: 'C',
    },
    {
      question: 'What type of membrane transport involves the movement of water molecules? 哪種膜運輸涉及水分子的移動?',
      options: [{ label: 'A', text: 'Diffusion 擴散' }, { label: 'B', text: 'Osmosis 滲透' }, { label: 'C', text: 'Active transport 主動運輸' }, { label: 'D', text: 'Facilitated diffusion 促進擴散' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a passive process? 以下哪個不是被動過程?',
      options: [{ label: 'A', text: 'Diffusion 擴散' }, { label: 'B', text: 'Osmosis 滲透' }, { label: 'C', text: 'Active transport 主動運輸' }, { label: 'D', text: 'Facilitated diffusion 促進擴散' }],
      answer: 'C',
    },
    {
      question: 'What happens to an animal cell in a hypotonic solution? 動物細胞在低滲透壓溶液中會發生什麼?',
      options: [{ label: 'A', text: 'It shrinks 它會收縮' }, { label: 'B', text: 'It bursts 它會破裂' }, { label: 'C', text: 'It remains unchanged 它保持不變' }, { label: 'D', text: 'It becomes turgid 它會變得膨脹' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is true about facilitated diffusion? 以下關於促進擴散的描述哪個是正確的?',
      options: [{ label: 'A', text: 'It requires energy 它需要能量' }, { label: 'B', text: 'It moves molecules against their concentration gradient 它逆濃度梯度移動分子' }, { label: 'C', text: 'It uses carrier proteins 它使用載體蛋白' }, { label: 'D', text: 'It only occurs in plant cells 它只發生在植物細胞中' }],
      answer: 'C',
    },
    {
      question: 'What is the main difference between osmosis and diffusion? 滲透和擴散的主要區別是什麼?',
      options: [{ label: 'A', text: 'Osmosis requires energy, diffusion does not 滲透需要能量，擴散不需要' }, { label: 'B', text: 'Diffusion involves water molecules, osmosis does not 擴散涉及水分子，滲透不涉及' }, { label: 'C', text: 'Osmosis involves water molecules, diffusion does not 滲透涉及水分子，擴散不涉及' }, { label: 'D', text: 'There is no difference 沒有區別' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Active transport moves molecules against their concentration gradient and requires energy. 主動運輸逆濃度梯度移動分子並需要能量。', answer: true },
    { statement: 'Plasmolysis occurs when an animal cell is placed in a hypertonic solution. 當動物細胞被放入高滲透壓溶液中時會發生質壁分離。', answer: false },
    { statement: 'Phagocytosis is a form of active transport where cells engulf large particles. 吞噬作用是主動運輸的一種形式，細胞通過它吞噬大顆粒。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how the concepts of diffusion, osmosis and active transport account for the movement of substances across membranes. 解釋擴散、滲透和主動運輸的概念如何解釋物質跨膜運動。',
    },
    {
      question: 'Apply the concept of osmosis to explain what happens to plant cells in a hypertonic solution and animal cells in a hypotonic solution. 應用滲透的概念解釋植物細胞在高滲透壓溶液中和動物細胞在低滲透壓溶液中會發生什麼。',
    },
    {
      question: 'Describe the process of phagocytosis and its importance in cells. 描述吞噬作用的過程及其在細胞中的重要性。',
    },
  ],
};

export default function MovementOfSubstancesAcrossMembranePage() {
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
            Movement of substances across membrane
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Cells and biomolecules are fundamental units of life. Organisms are built up of these fundamental units which function as an integrated whole. The study of the structure and function of cells will lay the foundation for students to understand and relate cellular processes to the essential life processes of organisms. The study of the discovery of cells will enable students to appreciate the contribution of technology to the advancement of science and the dynamic nature of biological knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Diffusion, osmosis and active transport</li>
                <li>Occurrence of phagocytosis in cells</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Perform practical work to study osmosis at cellular, tissue or organ levels.</li>
                <li>Examine live cell images of the processes involved in the movement of substances across membrane.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Account for the movement of substances across membrane using the concepts of diffusion, osmosis and active transport.</li>
                <li>Apply the concept of osmosis to explain plasmolysis and haemolysis.</li>
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