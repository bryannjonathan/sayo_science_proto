'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the first step in the scientific inquiry process? 科學探究過程的第一步是什麼?',
      options: [{ label: 'A', text: 'Make an observation 進行觀察' }, { label: 'B', text: 'Draw a conclusion 得出結論' }, { label: 'C', text: 'Conduct an experiment 進行實驗' }, { label: 'D', text: 'Ask a question 提出問題' }],
      answer: 'A',
    },
    {
      question: 'What is a fair test in science? 什麼是科學中的公平測試?',
      options: [{ label: 'A', text: 'A test where only one variable is changed 只改變一個變量的測試' }, { label: 'B', text: 'A test where all variables are changed 改變所有變量的測試' }, { label: 'C', text: 'A test with no variables 沒有變量的測試' }, { label: 'D', text: 'A test with no results 沒有結果的測試' }],
      answer: 'A',
    },
    {
      question: 'Why is imagination important in science? 為什麼想像力在科學中很重要?',
      options: [{ label: 'A', text: 'It helps scientists create new ideas and hypotheses 幫助科學家創造新的想法和假設' }, { label: 'B', text: 'It makes experiments more fun 使實驗更有趣' }, { label: 'C', text: 'It is not important in science 在科學中不重要' }, { label: 'D', text: 'It helps scientists draw conclusions 幫助科學家得出結論' }],
      answer: 'A',
    },
    {
      question: 'What happens when new evidence is found in science? 當科學中發現新證據時會發生什麼?',
      options: [{ label: 'A', text: 'Scientific knowledge may change 科學知識可能會改變' }, { label: 'B', text: 'Nothing changes 沒有任何變化' }, { label: 'C', text: 'Scientists stop researching 科學家停止研究' }, { label: 'D', text: 'The evidence is ignored 證據被忽略' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of scientific knowledge changing? 以下哪個是科學知識改變的例子?',
      options: [{ label: 'A', text: 'From Flat Earth to Round Earth 從地平說到地圓說' }, { label: 'B', text: 'From Round Earth to Flat Earth 從地圓說到地平說' }, { label: 'C', text: 'From Round Earth to Square Earth 從地圓說到地方說' }, { label: 'D', text: 'From Flat Earth to Square Earth 從地平說到地方說' }],
      answer: 'A',
    },
    {
      question: 'What is the purpose of testing in science? 科學中測試的目的是什麼?',
      options: [{ label: 'A', text: 'To gather evidence and support hypotheses 收集證據並支持假設' }, { label: 'B', text: 'To make science more difficult 使科學更困難' }, { label: 'C', text: 'To ignore the results 忽略結果' }, { label: 'D', text: 'To make science more fun 使科學更有趣' }],
      answer: 'A',
    },
    {
      question: 'What is a hypothesis in science? 科學中的假設是什麼?',
      options: [{ label: 'A', text: 'An educated guess based on observations 基於觀察的有根據的猜測' }, { label: 'B', text: 'A final answer to a question 問題的最終答案' }, { label: 'C', text: 'A random idea 隨機的想法' }, { label: 'D', text: 'A type of experiment 一種實驗' }],
      answer: 'A',
    },
    {
      question: 'Why is creativity important in science? 為什麼創造力在科學中很重要?',
      options: [{ label: 'A', text: 'It helps scientists design experiments and solve problems 幫助科學家設計實驗和解決問題' }, { label: 'B', text: 'It makes science more colorful 使科學更有色彩' }, { label: 'C', text: 'It is not important in science 在科學中不重要' }, { label: 'D', text: 'It helps scientists memorize facts 幫助科學家記憶事實' }],
      answer: 'A',
    },
    {
      question: 'What is the role of analysis in science? 分析在科學中的作用是什麼?',
      options: [{ label: 'A', text: 'To interpret data and draw conclusions 解釋數據並得出結論' }, { label: 'B', text: 'To ignore data 忽略數據' }, { label: 'C', text: 'To make data more complicated 使數據更複雜' }, { label: 'D', text: 'To create more questions 創造更多問題' }],
      answer: 'A',
    },
    {
      question: 'What is the final step in the scientific inquiry process? 科學探究過程的最後一步是什麼?',
      options: [{ label: 'A', text: 'Communicate the results 交流結果' }, { label: 'B', text: 'Ask a question 提出問題' }, { label: 'C', text: 'Make an observation 進行觀察' }, { label: 'D', text: 'Conduct an experiment 進行實驗' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Scientific knowledge never changes. 科學知識永遠不會改變。', answer: false },
    { statement: 'A fair test involves changing multiple variables at the same time. 公平測試涉及同時改變多個變量。', answer: false },
    { statement: 'Observation is the first step in the scientific inquiry process. 觀察是科學探究過程的第一步。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give an example of how scientific knowledge has changed over time. 舉一個科學知識隨時間變化的例子。',
    },
    {
      question: 'Why is it important to change only one variable in a fair test? 為什麼在公平測試中只改變一個變量很重要?',
    },
    {
      question: 'How can imagination help scientists in their work? 想像力如何幫助科學家的工作?',
    },
  ],
};

export default function ScienceInquiryProcessesPage() {
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
             Science inquiry processes
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Science inquiry processes involve systematic methods to explore and understand the natural world. Students learn to observe, question, hypothesize, experiment, and analyze to develop scientific knowledge.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise that scientific knowledge is derived from systematic observation, testing and analysis, through which imagination and creativity are required</li>
                <li>Recognise the concept of fair testing</li>
                <li>Be aware that scientific knowledge is subject to change as new evidence becomes available (e.g. the change from "Flat Earth Theory" to "Round Earth Theory")</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Design and conduct a simple fair test experiment</li>
              <li>Create a hypothesis based on classroom observations</li>
              <li>Analyze and present experimental data in groups</li>
              <li>Role-play as scientists making discoveries</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the scientific inquiry process and appreciate how scientific knowledge evolves through evidence-based investigation.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Curiosity and open-mindedness towards scientific exploration</li>
              <li>Respect for evidence-based conclusions</li>
              <li>Persistence in seeking answers through systematic methods</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how scientific discoveries impact technology and society</li>
              <li>Recognizing how societal needs drive scientific inquiry</li>
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