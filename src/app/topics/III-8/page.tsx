'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is the primary function of photosynthesis in plants? 下列哪項是植物光合作用的主要功能?',
      options: [{ label: 'A', text: 'To produce oxygen for human respiration 為人類呼吸產生氧氣' }, { label: 'B', text: 'To convert light energy into chemical energy 將光能轉化為化學能' }, { label: 'C', text: 'To absorb minerals from the soil 從土壤中吸收礦物質' }, { label: 'D', text: 'To support the plant structure 支持植物結構' }],
      answer: 'B',
    },
    {
      question: 'Which mineral is essential for the synthesis of chlorophyll in plants? 哪種礦物質對植物葉綠素的合成至關重要?',
      options: [{ label: 'A', text: 'Calcium 鈣' }, { label: 'B', text: 'Iron 鐵' }, { label: 'C', text: 'Magnesium 鎂' }, { label: 'D', text: 'Potassium 鉀' }],
      answer: 'C',
    },
    {
      question: 'What is the main site of gas exchange in plants? 植物氣體交換的主要部位是哪裡?',
      options: [{ label: 'A', text: 'Root hairs 根毛' }, { label: 'B', text: 'Stomata 氣孔' }, { label: 'C', text: 'Xylem 木質部' }, { label: 'D', text: 'Phloem 韌皮部' }],
      answer: 'B',
    },
    {
      question: 'Which of the following factors does NOT affect the rate of transpiration? 下列哪項因素不會影響蒸騰作用的速率?',
      options: [{ label: 'A', text: 'Light intensity 光照強度' }, { label: 'B', text: 'Humidity 濕度' }, { label: 'C', text: 'Soil pH 土壤pH值' }, { label: 'D', text: 'Wind speed 風速' }],
      answer: 'C',
    },
    {
      question: 'Which tissue is responsible for the transport of organic nutrients in plants? 哪種組織負責植物中有機營養物質的運輸?',
      options: [{ label: 'A', text: 'Xylem 木質部' }, { label: 'B', text: 'Phloem 韌皮部' }, { label: 'C', text: 'Epidermis 表皮' }, { label: 'D', text: 'Cambium 形成層' }],
      answer: 'B',
    },
    {
      question: 'What is the significance of transpiration in plants? 植物蒸騰作用的意義是什麼?',
      options: [{ label: 'A', text: 'It helps in cooling the plant 它有助於冷卻植物' }, { label: 'B', text: 'It aids in the absorption of minerals 它有助於礦物質的吸收' }, { label: 'C', text: 'It provides energy for photosynthesis 它為光合作用提供能量' }, { label: 'D', text: 'It supports the plant structure 它支持植物結構' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a characteristic of xylem tissue? 下列哪項是木質部組織的特徵?',
      options: [{ label: 'A', text: 'It transports sugars 它運輸糖分' }, { label: 'B', text: 'It is composed of living cells 它由活細胞組成' }, { label: 'C', text: 'It provides mechanical support 它提供機械支持' }, { label: 'D', text: 'It is involved in gas exchange 它參與氣體交換' }],
      answer: 'C',
    },
    {
      question: 'How does high light intensity affect the rate of photosynthesis? 高光照強度如何影響光合作用的速率?',
      options: [{ label: 'A', text: 'It decreases the rate 它降低速率' }, { label: 'B', text: 'It increases the rate 它提高速率' }, { label: 'C', text: 'It has no effect 它沒有影響' }, { label: 'D', text: 'It stops photosynthesis 它停止光合作用' }],
      answer: 'B',
    },
    {
      question: 'Which part of the root is most involved in water absorption? 根的哪個部分最參與水的吸收?',
      options: [{ label: 'A', text: 'Root cap 根冠' }, { label: 'B', text: 'Root hairs 根毛' }, { label: 'C', text: 'Epidermis 表皮' }, { label: 'D', text: 'Cortex 皮層' }],
      answer: 'B',
    },
    {
      question: 'What is the primary function of the stomata in leaves? 葉子中氣孔的主要功能是什麼?',
      options: [{ label: 'A', text: 'To absorb sunlight 吸收陽光' }, { label: 'B', text: 'To exchange gases 交換氣體' }, { label: 'C', text: 'To transport water 運輸水分' }, { label: 'D', text: 'To store nutrients 儲存營養' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Plants obtain all their energy from the soil. 植物從土壤中獲得所有能量。', answer: false },
    { statement: 'Transpiration helps in the upward movement of water in plants. 蒸騰作用有助於植物中水分的向上移動。', answer: true },
    { statement: 'The phloem transports water and minerals from the roots to the leaves. 韌皮部將水分和礦物質從根部運輸到葉子。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how the structure of a leaf is adapted for efficient gas exchange. 解釋葉子的結構如何適應高效的氣體交換。',
    },
    {
      question: 'Describe the path of water from the soil to the leaves in a plant. 描述水從土壤到植物葉子的路徑。',
    },
    {
      question: 'Compare the means of support in herbaceous and woody dicot plants. 比較草本和木本雙子葉植物的支持方式。',
    },
  ],
};

export default function EssentialLifeProcessesInPlantsPage() {
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
            Essential life processes in plants
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Organisms are an integral part of the environment. Their ways of life and living are closely related to the environment where they live in. Based on this perspective, students will gain knowledge and understanding of organisms and their environment. Firstly, students will study how organisms obtain their basic needs for oxygen, water and food from the environment. Life processes, such as nutrition, gas exchange, and transport involved, will be studied in an integrated manner so as to enhance understanding of the structures and functions of an organism as a whole. Secondly, students will study reproduction, growth and development to understand how organisms perpetuate and proliferate in the environment. The human is used as a model for students to understand the essential life processes of animals. Thirdly, students will examine how organisms detect changes in the environment and make appropriate responses for their survival, and how humans maintain a steady internal environment. Students will then explore how organisms interact with each other and with their environment as a whole. Finally, the dynamic nature of the ecosystems that involves energy flow and materials cycling will also be investigated. Students are expected to develop an awareness of the impact of human activities on the ecosystems and recognise the need for conservation.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Nutrition in plants (Autotrophs, Photosynthesis*, Minerals, Water/mineral absorption)</li>
                <li>Gas exchange in plants (Occurrence, Leaf exchange)</li>
                <li>Transpiration (Process, Significance, Factors affecting rate)</li>
                <li>Transport of substances (Water/minerals, Organic nutrients)</li>
                <li>Support in plants (Turgidity, Xylem nature)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Design/perform investigations: mineral effects on plant growth; light intensity on gas exchange; stomata distribution; environmental factors on transpiration rate.</li>
                <li>Examine cross sections (leaf, stem, root); young seedling root structure.</li>
                <li>Perform practical work demonstrating transpiration; trace water uptake.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Appreciate significance of plants as autotrophs.</li>
                <li>Explain need for minerals in plants.</li>
                <li>Relate root structure to water absorption function.</li>
                <li>Relate leaf features to gas exchange/water loss prevention.</li>
                <li>Explain light intensity effects on plant gas exchange.</li>
                <li>Connect transpiration, water absorption/transport, plant cooling.</li>
                <li>Explain environmental factor effects on transpiration rate.</li>
                <li>Describe material transport path in flowering plants.</li>
                <li>Compare support means in herbaceous/woody dicots.</li>
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