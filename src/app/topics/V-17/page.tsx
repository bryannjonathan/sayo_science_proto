'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which part of the nephron is primarily responsible for the reabsorption of water? 腎元的哪一部分主要負責水分的再吸收?',
      options: [{ label: 'A', text: 'Glomerulus 腎小球' }, { label: 'B', text: 'Proximal convoluted tubule 近曲小管' }, { label: 'C', text: 'Loop of Henle 亨利氏環' }, { label: 'D', text: 'Distal convoluted tubule 遠曲小管' }],
      answer: 'C',
    },
    {
      question: 'What is the primary function of ADH (antidiuretic hormone)? 抗利尿激素(ADH)的主要功能是什麼?',
      options: [{ label: 'A', text: 'Increase urine production 增加尿液生成' }, { label: 'B', text: 'Decrease water reabsorption in the kidneys 減少腎臟對水分的再吸收' }, { label: 'C', text: 'Increase water reabsorption in the kidneys 增加腎臟對水分的再吸收' }, { label: 'D', text: 'Stimulate sodium excretion 刺激鈉的排泄' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT a function of the kidneys? 以下哪項不是腎臟的功能?',
      options: [{ label: 'A', text: 'Regulation of blood pressure 調節血壓' }, { label: 'B', text: 'Production of red blood cells 生成紅血球' }, { label: 'C', text: 'Detoxification of alcohol 酒精的解毒' }, { label: 'D', text: 'Maintenance of electrolyte balance 維持電解質平衡' }],
      answer: 'C',
    },
    {
      question: 'What is the main purpose of dialysis? 透析的主要目的是什麼?',
      options: [{ label: 'A', text: 'To replace kidney function completely 完全替代腎功能' }, { label: 'B', text: 'To filter and purify blood artificially 人工過濾和淨化血液' }, { label: 'C', text: 'To increase urine production 增加尿液生成' }, { label: 'D', text: 'To stimulate ADH production 刺激ADH的生成' }],
      answer: 'B',
    },
    {
      question: 'Where is ADH produced? ADH在哪裡產生?',
      options: [{ label: 'A', text: 'Adrenal glands 腎上腺' }, { label: 'B', text: 'Hypothalamus 下丘腦' }, { label: 'C', text: 'Pituitary gland 腦下垂體' }, { label: 'D', text: 'Kidneys 腎臟' }],
      answer: 'B',
    },
    {
      question: 'Which process occurs in the glomerulus? 腎小球中發生什麼過程?',
      options: [{ label: 'A', text: 'Filtration 過濾' }, { label: 'B', text: 'Reabsorption 再吸收' }, { label: 'C', text: 'Secretion 分泌' }, { label: 'D', text: 'Excretion 排泄' }],
      answer: 'A',
    },
    {
      question: 'What happens to urine concentration when ADH levels are high? 當ADH水平高時，尿液濃度會發生什麼變化?',
      options: [{ label: 'A', text: 'Increases 增加' }, { label: 'B', text: 'Decreases 減少' }, { label: 'C', text: 'Remains the same 保持不變' }, { label: 'D', text: 'Becomes zero 變為零' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a waste product excreted by the kidneys? 以下哪項是腎臟排泄的廢物?',
      options: [{ label: 'A', text: 'Urea 尿素' }, { label: 'B', text: 'Glucose 葡萄糖' }, { label: 'C', text: 'Amino acids 氨基酸' }, { label: 'D', text: 'Proteins 蛋白質' }],
      answer: 'A',
    },
    {
      question: 'What is the functional unit of the kidney? 腎臟的功能單位是什麼?',
      options: [{ label: 'A', text: 'Nephron 腎元' }, { label: 'B', text: 'Glomerulus 腎小球' }, { label: 'C', text: 'Ureter 輸尿管' }, { label: 'D', text: 'Bladder 膀胱' }],
      answer: 'A',
    },
    {
      question: 'Which hormone regulates sodium reabsorption in the kidneys? 哪種激素調節腎臟中鈉的再吸收?',
      options: [{ label: 'A', text: 'ADH 抗利尿激素' }, { label: 'B', text: 'Aldosterone 醛固酮' }, { label: 'C', text: 'Insulin 胰島素' }, { label: 'D', text: 'Glucagon 胰高血糖素' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The loop of Henle is responsible for creating a concentration gradient in the kidney medulla. 亨利氏環負責在腎髓質中建立濃度梯度。', answer: true },
    { statement: 'ADH is released when the body is overhydrated. 當身體水分過多時會釋放ADH。', answer: false },
    { statement: 'Dialysis machines can completely replace all kidney functions. 透析機可以完全替代所有腎功能。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how the structure of the nephron relates to its function in water regulation. 解釋腎元的結構如何與其在水分調節中的功能相關。',
    },
    {
      question: 'Describe the role of ADH in maintaining water balance in the body. 描述ADH在維持體內水分平衡中的作用。',
    },
    {
      question: 'Discuss the social and ethical implications of dialysis treatment for patients with kidney failure. 討論透析治療對腎衰竭患者的社會和倫理影響。',
    },
  ],
};

export default function RegulationOfWaterContentOsmoregulationPage() {
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
            Regulation of water content (osmoregulation)
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will develop a deeper understanding of the physiological processes in humans. Regulation and control is an interesting topic concerning the intriguing mechanisms which enable our bodies to function normally regardless of the changes in environmental conditions. Students are expected to understand the roles of nervous control and hormonal control in coordinating different organs and systems to achieve a steady internal environment. Human Physiology: Regulation and Control builds on students’ prior knowledge of Movement of substances across membrane, Essential life processes, Coordination and response and Homeostasis studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Importance of regulation of water content</li>
                <li>Regulation of water content (Urinary system plan, Nephron structure/function, Urine formation, ADH action, Dialysis principles)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Examine dissected mammalian kidney or model.</li>
                <li>Examine urinary system (dissected mammal/torso).</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Relate nephron structure to water regulation function.</li>
                <li>Understand ADH action.</li>
                <li>Recognise kidney excretory function.</li>
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
                <li>Be aware of the significance of knowledge in human physiology to improve the quality of life and maintain a healthy community;</li>
                <li>Be aware that societal needs have led to technological advances (e.g. dialysis machines and the use of contraceptives);</li>
                <li>Appreciate the role of science and technology in understanding the human body.</li>
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