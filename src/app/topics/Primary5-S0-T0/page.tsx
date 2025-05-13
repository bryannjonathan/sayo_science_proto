'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which part of the respiratory system carries air to the lungs? 呼吸系統的哪個部分將空氣輸送到肺部?',
      options: [{ label: 'A', text: 'Trachea 氣管' }, { label: 'B', text: 'Stomach 胃' }, { label: 'C', text: 'Small intestine 小腸' }, { label: 'D', text: 'Ovaries 卵巢' }],
      answer: 'A',
    },
    {
      question: 'Where does most digestion occur in the human body? 人體的大部分消化發生在哪裡?',
      options: [{ label: 'A', text: 'Stomach 胃' }, { label: 'B', text: 'Small intestine 小腸' }, { label: 'C', text: 'Large intestine 大腸' }, { label: 'D', text: 'Lungs 肺' }],
      answer: 'B',
    },
    {
      question: 'Which organ produces sperm in males? 男性哪個器官產生精子?',
      options: [{ label: 'A', text: 'Testes 睾丸' }, { label: 'B', text: 'Ovaries 卵巢' }, { label: 'C', text: 'Uterus 子宮' }, { label: 'D', text: 'Lungs 肺' }],
      answer: 'A',
    },
    {
      question: 'What is the function of the bronchi? 支氣管的功能是什麼?',
      options: [{ label: 'A', text: 'To carry air to the lungs 將空氣輸送到肺部' }, { label: 'B', text: 'To digest food 消化食物' }, { label: 'C', text: 'To produce eggs 產生卵子' }, { label: 'D', text: 'To pump blood 泵血' }],
      answer: 'A',
    },
    {
      question: 'Which part of the digestive system absorbs water? 消化系統的哪個部分吸收水分?',
      options: [{ label: 'A', text: 'Stomach 胃' }, { label: 'B', text: 'Small intestine 小腸' }, { label: 'C', text: 'Large intestine 大腸' }, { label: 'D', text: 'Trachea 氣管' }],
      answer: 'C',
    },
    {
      question: 'Where does fertilization usually occur in females? 女性的受精通常發生在哪裡?',
      options: [{ label: 'A', text: 'Oviducts 輸卵管' }, { label: 'B', text: 'Uterus 子宮' }, { label: 'C', text: 'Vagina 陰道' }, { label: 'D', text: 'Ovaries 卵巢' }],
      answer: 'A',
    },
    {
      question: 'What is the main function of the lungs? 肺的主要功能是什麼?',
      options: [{ label: 'A', text: 'To exchange oxygen and carbon dioxide 交換氧氣和二氧化碳' }, { label: 'B', text: 'To digest food 消化食物' }, { label: 'C', text: 'To produce sperm 產生精子' }, { label: 'D', text: 'To pump blood 泵血' }],
      answer: 'A',
    },
    {
      question: 'Which part of the female reproductive system houses the developing baby? 女性生殖系統的哪個部分容納發育中的嬰兒?',
      options: [{ label: 'A', text: 'Ovaries 卵巢' }, { label: 'B', text: 'Uterus 子宮' }, { label: 'C', text: 'Vagina 陰道' }, { label: 'D', text: 'Oviducts 輸卵管' }],
      answer: 'B',
    },
    {
      question: 'What is the function of the stomach? 胃的功能是什麼?',
      options: [{ label: 'A', text: 'To break down food with acid 用酸分解食物' }, { label: 'B', text: 'To absorb nutrients 吸收營養' }, { label: 'C', text: 'To produce eggs 產生卵子' }, { label: 'D', text: 'To pump blood 泵血' }],
      answer: 'A',
    },
    {
      question: 'Which part of the male reproductive system carries sperm out of the body? 男性生殖系統的哪個部分將精子排出體外?',
      options: [{ label: 'A', text: 'Testes 睾丸' }, { label: 'B', text: 'Sperm ducts 輸精管' }, { label: 'C', text: 'Urethra 尿道' }, { label: 'D', text: 'Penis 陰莖' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'The trachea is part of the digestive system. 氣管是消化系統的一部分。', answer: false },
    { statement: 'The small intestine is longer than the large intestine. 小腸比大腸長。', answer: true },
    { statement: 'The ovaries produce sperm. 卵巢產生精子。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe the path air takes through the respiratory system. 描述空氣通過呼吸系統的路徑。',
    },
    {
      question: 'Explain how food moves through the digestive system. 解釋食物如何通過消化系統。',
    },
    {
      question: 'What are the main differences between the male and female reproductive systems? 男性和女性生殖系統的主要區別是什麼?',
    },
  ],
};

export default function HumanBodySystemsPage() {
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
             Human body systems
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The human body is made up of complex systems that work together to maintain life. This topic explores the respiratory, digestive, and reproductive systems, their major parts, and their functions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the major parts of the human respiratory system (trachea, bronchi, lungs) and their functions</li>
                <li>Recognise the major parts of the human digestive system (stomach, small intestine, large intestine) and their functions</li>
                <li>Recognise the major parts of the human reproductive system (male: testes, sperm ducts, urethra, penis; female: ovaries, oviducts, uterus, vagina) and their functions</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a model of the respiratory system using straws and balloons</li>
              <li>Trace the path of food through the digestive system with a hands-on demonstration</li>
              <li>Compare and contrast male and female reproductive systems using diagrams</li>
              <li>Conduct a lung capacity experiment using simple materials</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify and describe the functions of major human body systems, understanding how they work together to sustain life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the complexity and wonder of the human body</li>
              <li>Respect for bodily differences and personal privacy</li>
              <li>Responsibility for maintaining personal health</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How medical technology helps diagnose and treat body system disorders</li>
              <li>The impact of lifestyle choices on body system health</li>
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