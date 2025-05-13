'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'Who discovered the laws of motion that helped us understand how objects move? 誰發現了運動定律，幫助我們理解物體如何運動?',
      options: [{ label: 'A', text: 'Albert Einstein 阿爾伯特·愛因斯坦' }, { label: 'B', text: 'Isaac Newton 艾薩克·牛頓' }, { label: 'C', text: 'Thomas Edison 托馬斯·愛迪生' }, { label: 'D', text: 'Galileo Galilei 伽利略·伽利萊' }],
      answer: 'B',
    },
    {
      question: 'What did Newton\'s research on forces and motion help us understand? 牛頓對力和運動的研究幫助我們理解了什麼?',
      options: [{ label: 'A', text: 'How plants grow 植物如何生長' }, { label: 'B', text: 'The movement of celestial bodies 天體的運動' }, { label: 'C', text: 'How to make electricity 如何發電' }, { label: 'D', text: 'The colors of the rainbow 彩虹的顏色' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of how science and technology change human life? 以下哪個是科學和技術改變人類生活的例子?',
      options: [{ label: 'A', text: 'Using smartphones to communicate 使用智能手機溝通' }, { label: 'B', text: 'Eating fruits 吃水果' }, { label: 'C', text: 'Riding a bicycle 騎自行車' }, { label: 'D', text: 'Reading a book 閱讀書籍' }],
      answer: 'A',
    },
    {
      question: 'What is one way scientific discoveries enhance our understanding of the world? 科學發現如何增強我們對世界的理解?',
      options: [{ label: 'A', text: 'By making food taste better 讓食物更好吃' }, { label: 'B', text: 'By explaining natural phenomena 解釋自然現象' }, { label: 'C', text: 'By creating new games 創造新遊戲' }, { label: 'D', text: 'By painting pictures 畫畫' }],
      answer: 'B',
    },
    {
      question: 'Which invention helps us see tiny objects like bacteria? 哪項發明幫助我們看到像細菌這樣的微小物體?',
      options: [{ label: 'A', text: 'Telescope 望遠鏡' }, { label: 'B', text: 'Microscope 顯微鏡' }, { label: 'C', text: 'Thermometer 溫度計' }, { label: 'D', text: 'Barometer 氣壓計' }],
      answer: 'B',
    },
    {
      question: 'How does technology help doctors? 技術如何幫助醫生?',
      options: [{ label: 'A', text: 'By cooking food 烹飪食物' }, { label: 'B', text: 'By diagnosing diseases 診斷疾病' }, { label: 'C', text: 'By driving cars 駕駛汽車' }, { label: 'D', text: 'By planting trees 種植樹木' }],
      answer: 'B',
    },
    {
      question: 'What did the discovery of electricity lead to? 電的發現導致了什麼?',
      options: [{ label: 'A', text: 'The invention of light bulbs 燈泡的發明' }, { label: 'B', text: 'The invention of paper 紙的發明' }, { label: 'C', text: 'The invention of wheels 輪子的發明' }, { label: 'D', text: 'The invention of clothes 衣服的發明' }],
      answer: 'A',
    },
    {
      question: 'Which of these is a benefit of science and technology? 以下哪項是科學和技術的好處?',
      options: [{ label: 'A', text: 'Making life more convenient 讓生活更方便' }, { label: 'B', text: 'Making the sky bluer 讓天空更藍' }, { label: 'C', text: 'Making animals talk 讓動物說話' }, { label: 'D', text: 'Making the sun shine brighter 讓太陽更亮' }],
      answer: 'A',
    },
    {
      question: 'What can scientists use to study the stars? 科學家可以用什麼來研究星星?',
      options: [{ label: 'A', text: 'Microscope 顯微鏡' }, { label: 'B', text: 'Telescope 望遠鏡' }, { label: 'C', text: 'Thermometer 溫度計' }, { label: 'D', text: 'Ruler 尺子' }],
      answer: 'B',
    },
    {
      question: 'Why is it important to learn about scientific discoveries? 為什麼了解科學發現很重要?',
      options: [{ label: 'A', text: 'To become famous 為了出名' }, { label: 'B', text: 'To understand how the world works 理解世界如何運作' }, { label: 'C', text: 'To win prizes 為了贏獎' }, { label: 'D', text: 'To eat more food 為了吃更多食物' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Newton\'s laws of motion help us understand how planets move. 牛頓的運動定律幫助我們理解行星如何運動。', answer: true },
    { statement: 'Science and technology have no effect on our daily lives. 科學和技術對我們的日常生活沒有影響。', answer: false },
    { statement: 'The microscope was invented to see tiny objects like bacteria. 顯微鏡的發明是為了看到像細菌這樣的微小物體。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give one example of how science and technology have made your life easier. 舉一個例子說明科學和技術如何讓你的生活更輕鬆。',
    },
    {
      question: 'How do you think Newton\'s discoveries about motion help us today? 你認為牛頓關於運動的發現如何幫助我們今天的生活?',
    },
    {
      question: 'Name one scientific discovery and explain how it changed the world. 說出一個科學發現並解釋它如何改變世界。',
    },
  ],
};

export default function ScienceAndTechnologyCreateValueAndChangeHumanLifePage() {
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
             Science and technology create value and change human life
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Science and technology have transformed human life by solving problems and creating innovations. From medical advancements to communication tools, they continue to shape our daily experiences and future possibilities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that some scientific discoveries have enhanced people’s understanding of the world (e.g. Newton’s research on forces and motion laid the foundation for people’s understanding of the universe and the movement of celestial bodies)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline of major scientific discoveries and their impacts</li>
              <li>Design a simple invention that solves a classroom problem</li>
              <li>Interview family members about how technology has changed their lives</li>
              <li>Experiment with simple machines to understand Newton's laws</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will recognize how scientific discoveries improve lives and understand technology's role in solving real-world problems.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how science improves quality of life</li>
              <li>Curiosity about technological innovations</li>
              <li>Respect for scientific processes and discoveries</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How medical technologies extend and improve human life</li>
              <li>The environmental impact of technological advancements</li>
              <li>Global communication through internet technology</li>
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