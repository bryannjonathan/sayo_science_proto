'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is the correct order of levels of organisation from smallest to largest? 以下哪個是從最小到最大的組織層級的正確順序？',
      options: [{ label: 'A', text: 'Organism → Population → Community → Ecosystem 生物體 → 種群 → 群落 → 生態系統' }, { label: 'B', text: 'Population → Organism → Ecosystem → Community 種群 → 生物體 → 生態系統 → 群落' }, { label: 'C', text: 'Community → Population → Organism → Ecosystem 群落 → 種群 → 生物體 → 生態系統' }, { label: 'D', text: 'Ecosystem → Community → Population → Organism 生態系統 → 群落 → 種群 → 生物體' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of an abiotic factor in an ecosystem? 以下哪個是生態系統中的非生物因素例子？',
      options: [{ label: 'A', text: 'Sunlight 陽光' }, { label: 'B', text: 'Plants 植物' }, { label: 'C', text: 'Bacteria 細菌' }, { label: 'D', text: 'Animals 動物' }],
      answer: 'A',
    },
    {
      question: 'What is the primary source of energy for most ecosystems? 大多數生態系統的主要能量來源是什麼？',
      options: [{ label: 'A', text: 'The sun 太陽' }, { label: 'B', text: 'Geothermal heat 地熱' }, { label: 'C', text: 'Chemical reactions 化學反應' }, { label: 'D', text: 'Wind 風' }],
      answer: 'A',
    },
    {
      question: 'Which of the following best describes the niche of an organism? 以下哪個最能描述生物體的生態位？',
      options: [{ label: 'A', text: 'Its role and position in the ecosystem 它在生態系統中的角色和位置' }, { label: 'B', text: 'Its physical appearance 它的物理外觀' }, { label: 'C', text: 'Its genetic makeup 它的基因組成' }, { label: 'D', text: 'Its reproductive rate 它的繁殖率' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of mutualism? 以下哪個是互利共生的例子？',
      options: [{ label: 'A', text: 'Bees pollinating flowers 蜜蜂為花朵授粉' }, { label: 'B', text: 'A lion hunting a zebra 獅子獵殺斑馬' }, { label: 'C', text: 'A tapeworm living in a human intestine 絛蟲生活在人類腸道中' }, { label: 'D', text: 'A bird building a nest in a tree 鳥在樹上築巢' }],
      answer: 'A',
    },
    {
      question: 'What is the process by which ecosystems change over time called? 生態系統隨時間變化的過程叫什麼？',
      options: [{ label: 'A', text: 'Ecological succession 生態演替' }, { label: 'B', text: 'Natural selection 自然選擇' }, { label: 'C', text: 'Photosynthesis 光合作用' }, { label: 'D', text: 'Evolution 進化' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a primary consumer in a food chain? 以下哪個是食物鏈中的初級消費者？',
      options: [{ label: 'A', text: 'Rabbit 兔子' }, { label: 'B', text: 'Fox 狐狸' }, { label: 'C', text: 'Eagle 鷹' }, { label: 'D', text: 'Grass 草' }],
      answer: 'A',
    },
    {
      question: 'What percentage of energy is typically transferred from one trophic level to the next? 能量通常從一個營養級轉移到下一個營養級的百分比是多少？',
      options: [{ label: 'A', text: '10%' }, { label: 'B', text: '25%' }, { label: 'C', text: '50%' }, { label: 'D', text: '75%' }],
      answer: 'A',
    },
    {
      question: 'Which of the following cycles is essential for the synthesis of proteins and nucleic acids? 以下哪個循環對蛋白質和核酸的合成至關重要？',
      options: [{ label: 'A', text: 'Nitrogen cycle 氮循環' }, { label: 'B', text: 'Carbon cycle 碳循環' }, { label: 'C', text: 'Water cycle 水循環' }, { label: 'D', text: 'Phosphorus cycle 磷循環' }],
      answer: 'A',
    },
    {
      question: 'Which human activity has the most significant impact on ecosystem conservation? 哪種人類活動對生態系統保護的影響最大？',
      options: [{ label: 'A', text: 'Deforestation 森林砍伐' }, { label: 'B', text: 'Recycling 回收' }, { label: 'C', text: 'Planting trees 植樹' }, { label: 'D', text: 'Using renewable energy 使用可再生能源' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Abiotic factors include living components of an ecosystem. 非生物因素包括生態系統中的生物成分。', answer: false },
    { statement: 'Energy flow in an ecosystem is unidirectional. 生態系統中的能量流動是單向的。', answer: true },
    { statement: 'Ecological succession always leads to a forest ecosystem. 生態演替總是導致森林生態系統。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain the importance of biodiversity in an ecosystem. 解釋生物多樣性在生態系統中的重要性。',
    },
    {
      question: 'Describe the steps involved in conducting an ecological study of a local habitat. 描述進行當地生境生態研究的步驟。',
    },
    {
      question: 'How can human activities disrupt the balance of an ecosystem? Provide examples. 人類活動如何破壞生態系統的平衡？請舉例說明。',
    },
  ],
};

export default function EcosystemsPage() {
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
            Ecosystems
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Organisms are an integral part of the environment. Their ways of life and living are closely related to the environment where they live in. Based on this perspective, students will gain knowledge and understanding of organisms and their environment. Firstly, students will study how organisms obtain their basic needs for oxygen, water and food from the environment. Life processes, such as nutrition, gas exchange, and transport involved, will be studied in an integrated manner so as to enhance understanding of the structures and functions of an organism as a whole. Secondly, students will study reproduction, growth and development to understand how organisms perpetuate and proliferate in the environment. The human is used as a model for students to understand the essential life processes of animals. Thirdly, students will examine how organisms detect changes in the environment and make appropriate responses for their survival, and how humans maintain a steady internal environment. Students will then explore how organisms interact with each other and with their environment as a whole. Finally, the dynamic nature of the ecosystems that involves energy flow and materials cycling will also be investigated. Students are expected to develop an awareness of the impact of human activities on the ecosystems and recognise the need for conservation.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Levels of organisation</li>
                <li>Major ecosystem types</li>
                <li>Components of ecosystem (Abiotic, Biotic community - niche, diversity, relationships, succession)</li>
                <li>Functioning of ecosystem (Energy flow, Materials cycling, Roles)</li>
                <li>Conservation of ecosystem (Human impacts)</li>
                <li>Study of local habitat (Methods, Abiotic factor measurement)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Visit nature reserves, parks, field study centres, habitats.</li>
                <li>Construct/interpret food chains, webs, pyramids.</li>
                <li>Use live/audiovisual materials for ecosystem relationships.</li>
                <li>Conduct ecological study of local habitat.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Be aware of different levels of study for organisms/environment.</li>
                <li>Appreciate variety of local ecosystems.</li>
                <li>Identify abiotic factors and explain effects.</li>
                <li>Describe different organism relationships.</li>
                <li>Outline ecological succession process.</li>
                <li>Use food chains/webs/pyramids for relationships/energy flow.</li>
                <li>Understand energy transfer efficiency.</li>
                <li>Understand material cycling.</li>
                <li>Be aware of biotic/abiotic interactions.</li>
                <li>Recognise need for conservation.</li>
                <li>Conduct/report ecological study of local habitat.</li>
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
                <li>Evaluate the impact of the application of biology to human activities (e.g. dietary requirement, birth control and pollution control);</li>
                <li>Analyse ways in which scientific and technological advancement (e.g. computing technology and image analysing technology) have enhanced our understanding of complex life processes;</li>
                <li>Develop sensitivity and responsibility in striking a balance between the needs of humans and a sustainable environment;</li>
                <li>Be aware of the application of biological knowledge (e.g. balanced diet, birth control, and sewage treatment) in society and its social, ethical, economic and environmental implications.</li>
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