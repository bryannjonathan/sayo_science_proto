'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of these is a man-made object? 以下哪一個是人造物品?',
      options: [{ label: 'A', text: 'Rock 石頭' }, { label: 'B', text: 'Tree 樹' }, { label: 'C', text: 'Toy car 玩具車' }, { label: 'D', text: 'Cloud 雲' }],
      answer: 'C',
    },
    {
      question: 'Which of these is a natural object? 以下哪一個是自然物品?',
      options: [{ label: 'A', text: 'Pencil 鉛筆' }, { label: 'B', text: 'Book 書' }, { label: 'C', text: 'Flower 花' }, { label: 'D', text: 'Chair 椅子' }],
      answer: 'C',
    },
    {
      question: 'What is the purpose of good design? 良好設計的目的是什麼?',
      options: [{ label: 'A', text: 'To make life harder 使生活更困難' }, { label: 'B', text: 'To meet human needs 滿足人類需求' }, { label: 'C', text: 'To create problems 製造問題' }, { label: 'D', text: 'To waste materials 浪費材料' }],
      answer: 'B',
    },
    {
      question: 'Which of these is designed by humans? 以下哪一個是由人類設計的?',
      options: [{ label: 'A', text: 'Mountain 山' }, { label: 'B', text: 'River 河流' }, { label: 'C', text: 'Bicycle 自行車' }, { label: 'D', text: 'Sun 太陽' }],
      answer: 'C',
    },
    {
      question: 'What makes a good design? 什麼是好的設計?',
      options: [{ label: 'A', text: 'It is colorful 它是彩色的' }, { label: 'B', text: 'It is big 它是大的' }, { label: 'C', text: 'It is useful 它是有用的' }, { label: 'D', text: 'It is heavy 它是重的' }],
      answer: 'C',
    },
    {
      question: 'Which of these is NOT man-made? 以下哪一個不是人造的?',
      options: [{ label: 'A', text: 'House 房子' }, { label: 'B', text: 'Bird 鳥' }, { label: 'C', text: 'Table 桌子' }, { label: 'D', text: 'Computer 電腦' }],
      answer: 'B',
    },
    {
      question: 'Why do humans design objects? 人類為什麼要設計物品?',
      options: [{ label: 'A', text: 'To make life more convenient 使生活更方便' }, { label: 'B', text: 'To make things harder 使事情更困難' }, { label: 'C', text: 'To create waste 製造垃圾' }, { label: 'D', text: 'To ignore needs 忽略需求' }],
      answer: 'A',
    },
    {
      question: 'Which of these is a good example of design? 以下哪一個是良好設計的例子?',
      options: [{ label: 'A', text: 'A broken chair 壞掉的椅子' }, { label: 'B', text: 'A comfortable chair 舒適的椅子' }, { label: 'C', text: 'A heavy rock 沉重的石頭' }, { label: 'D', text: 'A dry leaf 乾枯的葉子' }],
      answer: 'B',
    },
    {
      question: 'What can good design help with? 良好的設計可以幫助什麼?',
      options: [{ label: 'A', text: 'Making tasks easier 使任務更容易' }, { label: 'B', text: 'Creating problems 製造問題' }, { label: 'C', text: 'Wasting time 浪費時間' }, { label: 'D', text: 'Ignoring needs 忽略需求' }],
      answer: 'A',
    },
    {
      question: 'Which of these is designed to hold water? 以下哪一個是設計來裝水的?',
      options: [{ label: 'A', text: 'Spoon 勺子' }, { label: 'B', text: 'Cup 杯子' }, { label: 'C', text: 'Fork 叉子' }, { label: 'D', text: 'Plate 盤子' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'All objects are man-made. 所有物品都是人造的。', answer: false },
    { statement: 'Good design can make life easier. 良好的設計可以使生活更輕鬆。', answer: true },
    { statement: 'A tree is a man-made object. 樹是人造物品。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name one man-made object you use every day. 說出一個你每天使用的人造物品。',
    },
    {
      question: 'Why is a chair a good design? 為什麼椅子是一個好的設計?',
    },
    {
      question: 'Give an example of a natural object. 舉出一個自然物品的例子。',
    },
  ],
};

export default function EngineeringDesignCycleAndApplicationsPage() {
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
             Engineering, design cycle and applications
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how humans design and create objects to solve problems and improve daily life. Learn to distinguish between natural and man-made objects, and understand the importance of thoughtful design.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that some everyday items are designed and manufactured by humans</li>
                <li>Give examples of natural objects and man-made objects</li>
                <li>Be aware that good design can meet human needs and make life more convenient</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify objects as natural or man-made in a sorting game</li>
              <li>Design a simple object to solve a classroom problem</li>
              <li>Identify well-designed objects in your environment</li>
              <li>Compare different designs of the same object type</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will recognize human-designed objects in their environment and understand how design improves functionality and meets needs.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for thoughtful design in everyday objects</li>
              <li>Curiosity about how things are made and why they're designed certain ways</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How design impacts daily life and society</li>
              <li>The relationship between technology and human needs</li>
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