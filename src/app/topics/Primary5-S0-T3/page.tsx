'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a type of microorganism? 以下哪一種是微生物的類型?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Rock 岩石' }, { label: 'C', text: 'Water 水' }, { label: 'D', text: 'Sand 沙子' }],
      answer: 'A',
    },
    {
      question: 'What is the main use of antibiotics? 抗生素的主要用途是什麼?',
      options: [{ label: 'A', text: 'To kill bacteria 殺死細菌' }, { label: 'B', text: 'To clean water 清潔水' }, { label: 'C', text: 'To grow plants 種植植物' }, { label: 'D', text: 'To cook food 烹飪食物' }],
      answer: 'A',
    },
    {
      question: 'Which microorganism is used to make yogurt? 哪種微生物用於製作酸奶?',
      options: [{ label: 'A', text: 'Fungi 真菌' }, { label: 'B', text: 'Viruses 病毒' }, { label: 'C', text: 'Bacteria 細菌' }, { label: 'D', text: 'Algae 藻類' }],
      answer: 'C',
    },
    {
      question: 'What can happen if antibiotics are used inappropriately? 如果不當使用抗生素會發生什麼?',
      options: [{ label: 'A', text: 'Bacteria become resistant 細菌產生抗藥性' }, { label: 'B', text: 'Plants grow faster 植物生長更快' }, { label: 'C', text: 'Water becomes cleaner 水變得更乾淨' }, { label: 'D', text: 'Food tastes better 食物味道更好' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a benefit of microorganisms? 以下哪一項是微生物的好處?',
      options: [{ label: 'A', text: 'Causing diseases 引起疾病' }, { label: 'B', text: 'Degrading pollutants 降解污染物' }, { label: 'C', text: 'Making water dirty 使水變髒' }, { label: 'D', text: 'Destroying food 破壞食物' }],
      answer: 'B',
    },
    {
      question: 'What type of microorganism causes the flu? 哪種微生物會引起流感?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Fungi 真菌' }, { label: 'C', text: 'Virus 病毒' }, { label: 'D', text: 'Algae 藻類' }],
      answer: 'C',
    },
    {
      question: 'Which microorganism helps in making bread rise? 哪種微生物有助於麵包發酵?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Yeast (a type of fungus) 酵母（一種真菌）' }, { label: 'C', text: 'Virus 病毒' }, { label: 'D', text: 'Algae 藻類' }],
      answer: 'B',
    },
    {
      question: 'What is a negative impact of microorganisms? 微生物的負面影響是什麼?',
      options: [{ label: 'A', text: 'Making food 製作食物' }, { label: 'B', text: 'Causing diseases 引起疾病' }, { label: 'C', text: 'Cleaning water 清潔水' }, { label: 'D', text: 'Helping plants grow 幫助植物生長' }],
      answer: 'B',
    },
    {
      question: 'What are probiotics? 什麼是益生菌?',
      options: [{ label: 'A', text: 'Harmful bacteria 有害細菌' }, { label: 'B', text: 'Good bacteria that help digestion 有助消化的有益細菌' }, { label: 'C', text: 'A type of virus 一種病毒' }, { label: 'D', text: 'A type of algae 一種藻類' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a microorganism? 以下哪一項不是微生物?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Fungi 真菌' }, { label: 'C', text: 'Virus 病毒' }, { label: 'D', text: 'Tree 樹' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'All microorganisms are harmful to humans. 所有微生物對人類都是有害的。', answer: false },
    { statement: 'Antibiotics can kill viruses. 抗生素可以殺死病毒。', answer: false },
    { statement: 'Probiotics are good bacteria that help our digestion. 益生菌是有助於消化的有益細菌。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of how microorganisms are beneficial to humans. 舉出兩個微生物對人類有益的示例。',
    },
    {
      question: 'Explain why inappropriate use of antibiotics is a problem. 解釋為什麼不當使用抗生素是一個問題。',
    },
    {
      question: 'Name one disease caused by microorganisms and describe how it affects people. 列出一種由微生物引起的疾病並描述它如何影響人們。',
    },
  ],
};

export default function CommonMicroorganismsPage() {
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
             Common microorganisms
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Microorganisms are tiny living things that can only be seen under a microscope. They include bacteria, fungi, viruses, and algae, and play both beneficial and harmful roles in our lives.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise common types of microorganisms (including bacteria, fungi, viruses)</li>
                <li>Recognise the uses of antibiotics and the effects of inappropriate use of antibiotics</li>
                <li>Recognise the benefits (e.g. probiotics inhibiting the growth of harmful bacteria, degrading pollutants) and negative impacts (e.g. causing diseases) of microorganisms to humans</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Observe different microorganisms under a microscope</li>
              <li>Conduct an experiment showing how yeast makes bread rise</li>
              <li>Create a poster showing beneficial vs harmful microorganisms</li>
              <li>Role-play how antibiotics work against bacteria</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify common microorganisms and understand their dual roles in benefiting and harming human life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the complex roles microorganisms play in our ecosystem</li>
              <li>Responsible attitude towards antibiotic use</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Medical applications of microorganisms in medicine and food production</li>
              <li>Environmental impact of microbial pollution control</li>
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