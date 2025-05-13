'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which natural environment is known for its extremely cold temperatures and ice-covered landscapes? 哪種自然環境以其極冷的溫度和冰覆蓋的景觀而聞名?',
      options: [{ label: 'A', text: 'Tropical rainforest 熱帶雨林' }, { label: 'B', text: 'Desert 沙漠' }, { label: 'C', text: 'Polar regions 極地' }, { label: 'D', text: 'Temperate grassland 溫帶草原' }],
      answer: 'C',
    },
    {
      question: 'Which animal is commonly found in a tropical rainforest? 哪種動物常見於熱帶雨林?',
      options: [{ label: 'A', text: 'Polar bear 北極熊' }, { label: 'B', text: 'Kangaroo 袋鼠' }, { label: 'C', text: 'Toucan 巨嘴鳥' }, { label: 'D', text: 'Camel 駱駝' }],
      answer: 'C',
    },
    {
      question: 'What do plants in a desert need to survive? 沙漠中的植物需要什麼來生存?',
      options: [{ label: 'A', text: 'Lots of water 大量的水' }, { label: 'B', text: 'Very little water 非常少的水' }, { label: 'C', text: 'Cold temperatures 寒冷的溫度' }, { label: 'D', text: 'No sunlight 沒有陽光' }],
      answer: 'B',
    },
    {
      question: 'Which of these is a characteristic of temperate grasslands? 以下哪項是溫帶草原的特徵?',
      options: [{ label: 'A', text: 'Tall trees 高大的樹木' }, { label: 'B', text: 'Lots of rainfall 大量的降雨' }, { label: 'C', text: 'Flat land with grasses 平坦的草地' }, { label: 'D', text: 'Very hot all year 全年非常炎熱' }],
      answer: 'C',
    },
    {
      question: 'What do animals in an ecosystem compete for? 生態系統中的動物競爭什麼?',
      options: [{ label: 'A', text: 'Food and living space 食物和生存空間' }, { label: 'B', text: 'Only food 只有食物' }, { label: 'C', text: 'Only living space 只有生存空間' }, { label: 'D', text: 'Nothing 沒有競爭' }],
      answer: 'A',
    },
    {
      question: 'Which plant is adapted to live in a desert? 哪種植物適應在沙漠中生活?',
      options: [{ label: 'A', text: 'Cactus 仙人掌' }, { label: 'B', text: 'Oak tree 橡樹' }, { label: 'C', text: 'Fern 蕨類植物' }, { label: 'D', text: 'Moss 苔蘚' }],
      answer: 'A',
    },
    {
      question: 'Which animal is NOT found in polar regions? 哪種動物不在極地地區?',
      options: [{ label: 'A', text: 'Penguin 企鵝' }, { label: 'B', text: 'Polar bear 北極熊' }, { label: 'C', text: 'Seal 海豹' }, { label: 'D', text: 'Lion 獅子' }],
      answer: 'D',
    },
    {
      question: 'What is the main resource plants compete for in a dense forest? 在茂密的森林中，植物主要競爭什麼資源?',
      options: [{ label: 'A', text: 'Food 食物' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Light 陽光' }, { label: 'D', text: 'Air 空氣' }],
      answer: 'C',
    },
    {
      question: 'Which natural environment has the most biodiversity? 哪種自然環境的生物多樣性最豐富?',
      options: [{ label: 'A', text: 'Desert 沙漠' }, { label: 'B', text: 'Tropical rainforest 熱帶雨林' }, { label: 'C', text: 'Polar regions 極地' }, { label: 'D', text: 'Temperate grassland 溫帶草原' }],
      answer: 'B',
    },
    {
      question: 'Why do animals compete in an ecosystem? 為什麼動物在生態系統中競爭?',
      options: [{ label: 'A', text: 'To have fun 為了玩樂' }, { label: 'B', text: 'To survive and reproduce 為了生存和繁殖' }, { label: 'C', text: 'To make friends 為了交朋友' }, { label: 'D', text: 'To explore new places 為了探索新地方' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'All plants need the same amount of water to survive. 所有植物都需要相同的水量來生存。', answer: false },
    { statement: 'Polar bears are adapted to live in hot deserts. 北極熊適應生活在炎熱的沙漠中。', answer: false },
    { statement: 'Animals in an ecosystem often compete for food and space. 生態系統中的動物經常競爭食物和空間。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two animals that live in the polar regions and describe how they survive in the cold. 列出兩種生活在極地地區的動物，並描述它們如何在寒冷中生存。',
    },
    {
      question: 'Explain why plants in a desert have thick stems or leaves. 解釋為什麼沙漠中的植物有粗莖或厚葉。',
    },
    {
      question: 'Give an example of how animals compete for resources in an ecosystem. 舉一個例子說明動物如何在生態系統中競爭資源。',
    },
  ],
};

export default function EcologicalEnvironmentPage() {
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
             Ecological environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The ecological environment explores how different natural habitats support unique plants and animals. Students will learn about various ecosystems and how organisms compete for resources to survive.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of some different natural environments (e.g. tropical rainforest, temperate grassland, polar regions, desert)</li>
                <li>Relate common animals and plants to the natural environments</li>
                <li>Understand that some living things in an ecosystem compete with each other for resources (e.g. light, food, living space)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a diorama of different ecosystems using recycled materials</li>
              <li>Play a matching game pairing animals with their natural habitats</li>
              <li>Conduct a plant competition experiment with different light conditions</li>
              <li>Role-play animal behaviors in different ecosystems</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify key characteristics of different ecosystems and explain how organisms adapt to their environments through competition and cooperation.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for biodiversity and the balance of nature</li>
              <li>Responsibility towards protecting natural environments</li>
              <li>Curiosity about how living things adapt to their surroundings</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how human activities impact different ecosystems</li>
              <li>Exploring conservation efforts for endangered habitats</li>
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