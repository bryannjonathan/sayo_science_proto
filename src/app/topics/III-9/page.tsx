'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is NOT a function of dietary fibre in humans? 以下哪一項不是膳食纖維在人體中的功能?',
      options: [{ label: 'A', text: 'Promoting peristalsis in the intestines 促進腸道蠕動' }, { label: 'B', text: 'Preventing constipation 預防便秘' }, { label: 'C', text: 'Providing energy for cellular activities 為細胞活動提供能量' }, { label: 'D', text: 'Reducing the risk of colon cancer 降低結腸癌風險' }],
      answer: 'C',
    },
    {
      question: 'Where does the majority of nutrient absorption occur in the human digestive system? 人體消化系統中，大部分營養物質的吸收發生在哪裡?',
      options: [{ label: 'A', text: 'Stomach 胃' }, { label: 'B', text: 'Small intestine 小腸' }, { label: 'C', text: 'Large intestine 大腸' }, { label: 'D', text: 'Esophagus 食道' }],
      answer: 'B',
    },
    {
      question: 'Which gas is primarily transported by hemoglobin in red blood cells? 紅血球中的血紅蛋白主要運輸哪種氣體?',
      options: [{ label: 'A', text: 'Carbon dioxide 二氧化碳' }, { label: 'B', text: 'Oxygen 氧氣' }, { label: 'C', text: 'Nitrogen 氮氣' }, { label: 'D', text: 'Carbon monoxide 一氧化碳' }],
      answer: 'B',
    },
    {
      question: 'What is the main function of bile salts in digestion? 膽鹽在消化中的主要功能是什麼?',
      options: [{ label: 'A', text: 'Emulsifying fats 乳化脂肪' }, { label: 'B', text: 'Breaking down proteins 分解蛋白質' }, { label: 'C', text: 'Neutralizing stomach acid 中和胃酸' }, { label: 'D', text: 'Activating pepsinogen 激活胃蛋白酶原' }],
      answer: 'A',
    },
    {
      question: 'Which of the following vitamins is fat-soluble? 以下哪種維生素是脂溶性的?',
      options: [{ label: 'A', text: 'Vitamin C 維生素C' }, { label: 'B', text: 'Vitamin B12 維生素B12' }, { label: 'C', text: 'Vitamin D 維生素D' }, { label: 'D', text: 'Vitamin B6 維生素B6' }],
      answer: 'C',
    },
    {
      question: 'What is the primary function of the alveoli in the respiratory system? 呼吸系統中肺泡的主要功能是什麼?',
      options: [{ label: 'A', text: 'Producing mucus 產生黏液' }, { label: 'B', text: 'Gas exchange 氣體交換' }, { label: 'C', text: 'Filtering air 過濾空氣' }, { label: 'D', text: 'Producing sound 產生聲音' }],
      answer: 'B',
    },
    {
      question: 'Which component of blood is responsible for clotting? 血液中哪種成分負責凝血?',
      options: [{ label: 'A', text: 'Red blood cells 紅血球' }, { label: 'B', text: 'White blood cells 白血球' }, { label: 'C', text: 'Platelets 血小板' }, { label: 'D', text: 'Plasma 血漿' }],
      answer: 'C',
    },
    {
      question: 'What is the main function of the lymphatic system? 淋巴系統的主要功能是什麼?',
      options: [{ label: 'A', text: 'Transporting oxygen 運輸氧氣' }, { label: 'B', text: 'Producing hormones 產生激素' }, { label: 'C', text: 'Returning tissue fluid to the bloodstream 將組織液返回血液循環' }, { label: 'D', text: 'Digesting fats 消化脂肪' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a health problem associated with a diet high in saturated fats? 以下哪種健康問題與高飽和脂肪飲食有關?',
      options: [{ label: 'A', text: 'Scurvy 壞血病' }, { label: 'B', text: 'Osteoporosis 骨質疏鬆症' }, { label: 'C', text: 'Coronary heart disease 冠心病' }, { label: 'D', text: 'Anemia 貧血' }],
      answer: 'C',
    },
    {
      question: 'What is the role of villi in the small intestine? 小腸中的絨毛有什麼作用?',
      options: [{ label: 'A', text: 'Producing digestive enzymes 產生消化酶' }, { label: 'B', text: 'Increasing surface area for absorption 增加吸收表面積' }, { label: 'C', text: 'Storing bile 儲存膽汁' }, { label: 'D', text: 'Neutralizing acids 中和酸' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Proteins are the body\\'s primary source of immediate energy. 蛋白質是人體即時能量的主要來源。', answer: false },
    { statement: 'The left ventricle of the heart has a thicker muscular wall than the right ventricle. 心臟左心室的肌肉壁比右心室厚。', answer: true },
    { statement: 'Tissue fluid is formed when blood plasma is forced out of capillaries due to blood pressure. 組織液是由於血壓迫使血漿從毛細血管中滲出而形成的。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how the structure of the small intestine is adapted for efficient absorption of nutrients. 解釋小腸的結構如何適應高效吸收營養物質。',
    },
    {
      question: 'Describe the pathway of oxygen from the atmosphere to the body cells, and the return pathway of carbon dioxide to the atmosphere. 描述氧氣從大氣到身體細胞的路徑，以及二氧化碳返回大氣的路徑。',
    },
    {
      question: 'Discuss the social and ethical implications of using animals for dissection in biological studies. 討論在生物研究中使用動物進行解剖的社會和倫理影響。',
    },
  ],
};

export default function EssentialLifeProcessesInAnimalsPage() {
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
            Essential life processes in animals
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Organisms are an integral part of the environment. Their ways of life and living are closely related to the environment where they live in. Based on this perspective, students will gain knowledge and understanding of organisms and their environment. Firstly, students will study how organisms obtain their basic needs for oxygen, water and food from the environment. Life processes, such as nutrition, gas exchange, and transport involved, will be studied in an integrated manner so as to enhance understanding of the structures and functions of an organism as a whole. Secondly, students will study reproduction, growth and development to understand how organisms perpetuate and proliferate in the environment. The human is used as a model for students to understand the essential life processes of animals. Thirdly, students will examine how organisms detect changes in the environment and make appropriate responses for their survival, and how humans maintain a steady internal environment. Students will then explore how organisms interact with each other and with their environment as a whole. Finally, the dynamic nature of the ecosystems that involves energy flow and materials cycling will also be investigated. Students are expected to develop an awareness of the impact of human activities on the ecosystems and recognise the need for conservation.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Nutrition in humans (Heterotrophs, Food requirements/functions - carbs, lipids, proteins, vitamins, minerals, fibre; Balanced diet; Ingestion; Digestion; Absorption/assimilation; Egestion)</li>
                <li>Gas exchange in humans (Breathing system plan, Air sac exchange, Gas transport routes, Ventilation mechanism)</li>
                <li>Transport of substances in humans (Circulatory/lymphatic plan, Blood/tissue fluid/lymph composition/functions, Material exchange, Tissue fluid formation)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Perform practical work: identify food composition; demonstrate bile salt effect; simulate digestion/absorption; compare inhaled/exhaled air.</li>
                <li>Design/perform investigations: compare vitamin C; study digestive enzyme action.</li>
                <li>Examine alimentary canal/glands, breathing system (dissection/torso).</li>
                <li>Examine pig lungs; capillary flow (fish tail/frog web).</li>
                <li>Examine air sac, artery, vein, blood component structures (slides/photos).</li>
                <li>Perform pig heart dissection.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Explain effect of age, activity, pregnancy on diet.</li>
                <li>Relate health problems to improper diet.</li>
                <li>Explain significance of mechanical/chemical digestion.</li>
                <li>Understand digestion/absorption in alimentary canal.</li>
                <li>Illustrate small intestine adaptations for absorption.</li>
                <li>Describe transport routes/fates of absorbed food.</li>
                <li>Understand respiratory gas exchange between cells/environment.</li>
                <li>Relate breathing system structure to gas exchange.</li>
                <li>Relate circulatory/lymphatic structure to transport.</li>
                <li>Describe material exchange and tissue fluid formation.</li>
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