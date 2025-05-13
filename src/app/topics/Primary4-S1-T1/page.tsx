'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is an example of a physical change? 以下哪一個是物理變化的例子?',
      options: [{ label: 'A', text: 'Burning wood 燃燒木材' }, { label: 'B', text: 'Dissolving sugar in water 將糖溶解在水中' }, { label: 'C', text: 'Rusting iron 鐵生鏽' }, { label: 'D', text: 'Food rotting 食物腐爛' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of a chemical change? 以下哪一個是化學變化的例子?',
      options: [{ label: 'A', text: 'Melting ice 冰融化' }, { label: 'B', text: 'Cutting paper 剪紙' }, { label: 'C', text: 'Burning paper 燒紙' }, { label: 'D', text: 'Stretching a rubber band 拉伸橡皮筋' }],
      answer: 'C',
    },
    {
      question: 'What happens during a physical change? 在物理變化過程中會發生什麼?',
      options: [{ label: 'A', text: 'New matter is produced 產生新物質' }, { label: 'B', text: 'The matter changes its state or shape 物質的狀態或形狀改變' }, { label: 'C', text: 'The matter disappears 物質消失' }, { label: 'D', text: 'The matter becomes heavier 物質變重' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a physical change? 以下哪一個不是物理變化?',
      options: [{ label: 'A', text: 'Evaporation of water 水蒸發' }, { label: 'B', text: 'Dissolving salt in water 將鹽溶解在水中' }, { label: 'C', text: 'Rusting of a nail 釘子生鏽' }, { label: 'D', text: 'Melting butter 融化黃油' }],
      answer: 'C',
    },
    {
      question: 'What is produced during a chemical change? 在化學變化過程中會產生什麼?',
      options: [{ label: 'A', text: 'New matter 新物質' }, { label: 'B', text: 'The same matter 相同的物質' }, { label: 'C', text: 'Nothing 沒有東西' }, { label: 'D', text: 'Only heat 只有熱' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a sign of a chemical change? 以下哪一個是化學變化的跡象?',
      options: [{ label: 'A', text: 'Change in color 顏色變化' }, { label: 'B', text: 'Change in shape 形狀變化' }, { label: 'C', text: 'Change in size 大小變化' }, { label: 'D', text: 'Change in position 位置變化' }],
      answer: 'A',
    },
    {
      question: 'What happens when you stretch a rubber band? 當你拉伸橡皮筋時會發生什麼?',
      options: [{ label: 'A', text: 'A chemical change occurs 發生化學變化' }, { label: 'B', text: 'A physical change occurs 發生物理變化' }, { label: 'C', text: 'New matter is produced 產生新物質' }, { label: 'D', text: 'The rubber band disappears 橡皮筋消失' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a chemical change? 以下哪一個是化學變化?',
      options: [{ label: 'A', text: 'Freezing water 水結冰' }, { label: 'B', text: 'Breaking glass 打破玻璃' }, { label: 'C', text: 'Burning wood 燃燒木材' }, { label: 'D', text: 'Cutting fruit 切水果' }],
      answer: 'C',
    },
    {
      question: 'What type of change is evaporation? 蒸發屬於哪一種變化?',
      options: [{ label: 'A', text: 'Chemical change 化學變化' }, { label: 'B', text: 'Physical change 物理變化' }, { label: 'C', text: 'Both 兩者都是' }, { label: 'D', text: 'Neither 兩者都不是' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a chemical change? 以下哪一個不是化學變化?',
      options: [{ label: 'A', text: 'Baking a cake 烤蛋糕' }, { label: 'B', text: 'Rusting of iron 鐵生鏽' }, { label: 'C', text: 'Melting chocolate 融化巧克力' }, { label: 'D', text: 'Burning paper 燒紙' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Dissolving sugar in water is a chemical change. 將糖溶解在水中是化學變化。', answer: false },
    { statement: 'Burning paper produces new matter. 燒紙會產生新物質。', answer: true },
    { statement: 'Cutting an apple into pieces is a physical change. 將蘋果切成塊是物理變化。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of physical changes and explain why they are physical changes. 舉出兩個物理變化的例子並解釋為什麼它們是物理變化。',
    },
    {
      question: 'Describe one chemical change you observe in everyday life and explain how you know it is a chemical change. 描述一個你在日常生活中觀察到的化學變化，並解釋你如何知道它是化學變化。',
    },
    {
      question: 'What is the main difference between a physical change and a chemical change? 物理變化和化學變化的主要區別是什麼?',
    },
  ],
};

export default function PhysicalChangeAndChemicalChangePage() {
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
             Physical change and chemical change
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Physical changes alter the form or appearance of matter without creating new substances, while chemical changes result in the formation of new substances with different properties. Understanding these changes helps explain everyday phenomena.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Identify some visible changes that do not produce new matter (physical changes) (e.g. dissolving, evaporation, squeezing or stretching objects)</li>
                <li>Identify some visible changes that produce new matter (chemical changes) (e.g. rusting, burning, food rotting)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify everyday changes as physical or chemical using picture cards</li>
              <li>Conduct simple experiments like dissolving sugar vs burning paper</li>
              <li>Create a T-chart comparing characteristics of both change types</li>
              <li>Observe rust formation on steel wool over time</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to distinguish between physical and chemical changes and provide examples of each from daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the scientific explanations behind everyday changes</li>
              <li>Curiosity about how matter transforms in different situations</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding food preservation methods (chemical changes)</li>
              <li>Recognizing environmental impacts of chemical changes like burning</li>
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