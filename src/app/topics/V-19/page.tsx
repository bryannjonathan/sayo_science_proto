'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the primary stimulus for the regulation of breathing rate in humans? 人體調節呼吸速率的主要刺激是什麼？',
      options: [{ label: 'A', text: 'Oxygen levels in the blood 血液中的氧氣水平' }, { label: 'B', text: 'Carbon dioxide levels in the blood 血液中的二氧化碳水平' }, { label: 'C', text: 'Nitrogen levels in the blood 血液中的氮氣水平' }, { label: 'D', text: 'Water vapor in the lungs 肺部的水蒸氣' }],
      answer: 'B',
    },
    {
      question: 'Which part of the brain controls the breathing rate? 大腦的哪一部分控制呼吸速率？',
      options: [{ label: 'A', text: 'Cerebrum 大腦' }, { label: 'B', text: 'Cerebellum 小腦' }, { label: 'C', text: 'Medulla oblongata 延髓' }, { label: 'D', text: 'Hypothalamus 下丘腦' }],
      answer: 'C',
    },
    {
      question: 'During exercise, what happens to the cardiac output? 運動期間，心輸出量會發生什麼變化？',
      options: [{ label: 'A', text: 'It decreases 它減少' }, { label: 'B', text: 'It remains the same 它保持不變' }, { label: 'C', text: 'It increases 它增加' }, { label: 'D', text: 'It stops completely 它完全停止' }],
      answer: 'C',
    },
    {
      question: 'What is the role of the pacemaker in the heart? 心臟中的起搏器有什麼作用？',
      options: [{ label: 'A', text: 'To pump blood 泵血' }, { label: 'B', text: 'To regulate heart rate 調節心率' }, { label: 'C', text: 'To produce hormones 產生激素' }, { label: 'D', text: 'To filter blood 過濾血液' }],
      answer: 'B',
    },
    {
      question: 'Which hormone is primarily responsible for increasing heart rate during exercise? 哪種激素主要負責在運動期間增加心率？',
      options: [{ label: 'A', text: 'Insulin 胰島素' }, { label: 'B', text: 'Adrenaline 腎上腺素' }, { label: 'C', text: 'Thyroxine 甲狀腺素' }, { label: 'D', text: 'Estrogen 雌激素' }],
      answer: 'B',
    },
    {
      question: 'What is oxygen debt? 什麼是氧債？',
      options: [{ label: 'A', text: 'The amount of oxygen needed to recover after exercise 運動後恢復所需的氧氣量' }, { label: 'B', text: 'The oxygen stored in the lungs 肺部儲存的氧氣' }, { label: 'C', text: 'The oxygen used during exercise 運動期間使用的氧氣' }, { label: 'D', text: 'The oxygen in the atmosphere 大氣中的氧氣' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a part of the cardiac cycle? 以下哪項不是心臟週期的一部分？',
      options: [{ label: 'A', text: 'Atrial systole 心房收縮' }, { label: 'B', text: 'Ventricular diastole 心室舒張' }, { label: 'C', text: 'Pulmonary ventilation 肺通氣' }, { label: 'D', text: 'Ventricular systole 心室收縮' }],
      answer: 'C',
    },
    {
      question: 'How does the nervous system regulate cardiac output? 神經系統如何調節心輸出量？',
      options: [{ label: 'A', text: 'By releasing hormones 通過釋放激素' }, { label: 'B', text: 'By changing the stroke volume and heart rate 通過改變每搏輸出量和心率' }, { label: 'C', text: 'By filtering blood 通過過濾血液' }, { label: 'D', text: 'By producing oxygen 通過產生氧氣' }],
      answer: 'B',
    },
    {
      question: 'What happens to breathing rate after exercise? 運動後呼吸速率會發生什麼變化？',
      options: [{ label: 'A', text: 'It decreases immediately 它立即減少' }, { label: 'B', text: 'It remains the same 它保持不變' }, { label: 'C', text: 'It increases and then gradually decreases 它增加然後逐漸減少' }, { label: 'D', text: 'It stops completely 它完全停止' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a result of increased CO2 levels in the blood? 以下哪項是血液中二氧化碳水平升高的結果？',
      options: [{ label: 'A', text: 'Decreased breathing rate 呼吸速率降低' }, { label: 'B', text: 'Increased breathing rate 呼吸速率增加' }, { label: 'C', text: 'No change in breathing rate 呼吸速率無變化' }, { label: 'D', text: 'Complete cessation of breathing 呼吸完全停止' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The medulla oblongata is responsible for regulating breathing rate. 延髓負責調節呼吸速率。', answer: true },
    { statement: 'Cardiac output decreases during exercise. 運動期間心輸出量減少。', answer: false },
    { statement: 'Adrenaline decreases heart rate. 腎上腺素會降低心率。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how the nervous system and hormonal system work together to regulate cardiac output during exercise. 解釋神經系統和激素系統如何在運動期間共同調節心輸出量。',
    },
    {
      question: 'Describe the changes in breathing rate and depth during and after exercise. 描述運動期間和運動後呼吸速率和深度的變化。',
    },
    {
      question: 'What are the effects of oxygen debt on the body after intense exercise? 劇烈運動後氧債對身體有什麼影響？',
    },
  ],
};

export default function RegulationOfGasContentInBloodPage() {
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
            Regulation of gas content in blood
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will develop a deeper understanding of the physiological processes in humans. Regulation and control is an interesting topic concerning the intriguing mechanisms which enable our bodies to function normally regardless of the changes in environmental conditions. Students are expected to understand the roles of nervous control and hormonal control in coordinating different organs and systems to achieve a steady internal environment. Human Physiology: Regulation and Control builds on students’ prior knowledge of Movement of substances across membrane, Essential life processes, Coordination and response and Homeostasis studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Importance of gas content regulation</li>
                <li>Control of breathing rate/depth (Nervous control, CO2 effects)</li>
                <li>Control of cardiac output (Heart rate/stroke volume, Pacemaker/cycle, Nervous/Hormonal control)</li>
                <li>Effects of exercise (Breathing, Oxygen debt, Cardiac output)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Design/perform investigations on heart rate/breathing changes before/after exercise (data loggers/other methods).</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand breathing control mechanism.</li>
                <li>Outline major cardiac cycle events.</li>
                <li>Understand nervous/hormonal control of cardiac output.</li>
                <li>Explain blood gas regulation during/after exercise.</li>
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