'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the colour of water? 水是什麼顏色的?',
      options: [{ label: 'A', text: 'Colourless 無色' }, { label: 'B', text: 'Blue 藍色' }, { label: 'C', text: 'Green 綠色' }, { label: 'D', text: 'Red 紅色' }],
      answer: 'A',
    },
    {
      question: 'Which of the following has no fixed shape? 以下哪一個沒有固定形狀?',
      options: [{ label: 'A', text: 'Rock 石頭' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Book 書' }, { label: 'D', text: 'Toy car 玩具車' }],
      answer: 'B',
    },
    {
      question: 'What is the taste of air? 空氣是什麼味道的?',
      options: [{ label: 'A', text: 'Sweet 甜的' }, { label: 'B', text: 'Salty 鹹的' }, { label: 'C', text: 'Tasteless 無味的' }, { label: 'D', text: 'Sour 酸的' }],
      answer: 'C',
    },
    {
      question: 'Which of these is odourless? 以下哪一個是無味的?',
      options: [{ label: 'A', text: 'Perfume 香水' }, { label: 'B', text: 'Air 空氣' }, { label: 'C', text: 'Onion 洋蔥' }, { label: 'D', text: 'Garlic 大蒜' }],
      answer: 'B',
    },
    {
      question: 'Which property describes how heavy an object is? 哪一個屬性描述物體的重量?',
      options: [{ label: 'A', text: 'Hardness 硬度' }, { label: 'B', text: 'Weight 重量' }, { label: 'C', text: 'Elasticity 彈性' }, { label: 'D', text: 'Transparency 透明度' }],
      answer: 'B',
    },
    {
      question: 'Which object is hard? 哪一個物體是硬的?',
      options: [{ label: 'A', text: 'Pillow 枕頭' }, { label: 'B', text: 'Rock 石頭' }, { label: 'C', text: 'Sponge 海綿' }, { label: 'D', text: 'Balloon 氣球' }],
      answer: 'B',
    },
    {
      question: 'Which object is elastic? 哪一個物體有彈性?',
      options: [{ label: 'A', text: 'Glass 玻璃' }, { label: 'B', text: 'Rubber band 橡皮筋' }, { label: 'C', text: 'Wood 木頭' }, { label: 'D', text: 'Stone 石頭' }],
      answer: 'B',
    },
    {
      question: 'Which object is transparent? 哪一個物體是透明的?',
      options: [{ label: 'A', text: 'Book 書' }, { label: 'B', text: 'Window glass 窗戶玻璃' }, { label: 'C', text: 'Wall 牆' }, { label: 'D', text: 'Door 門' }],
      answer: 'B',
    },
    {
      question: 'What is the property of water that allows us to see through it? 水的哪一個屬性讓我們可以看穿它?',
      options: [{ label: 'A', text: 'Hardness 硬度' }, { label: 'B', text: 'Transparency 透明度' }, { label: 'C', text: 'Elasticity 彈性' }, { label: 'D', text: 'Weight 重量' }],
      answer: 'B',
    },
    {
      question: 'Which of these is a property of air? 以下哪一個是空氣的屬性?',
      options: [{ label: 'A', text: 'It has a fixed shape 它有固定形狀' }, { label: 'B', text: 'It is odourless 它是無味的' }, { label: 'C', text: 'It is blue in colour 它是藍色的' }, { label: 'D', text: 'It tastes sweet 它是甜的' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Water has a fixed shape. 水有固定形狀。', answer: false },
    { statement: 'Air is odourless. 空氣是無味的。', answer: true },
    { statement: 'A rock is soft. 石頭是軟的。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two properties of water. 列出水的兩個屬性。',
    },
    {
      question: 'Give an example of an object that is hard. 舉一個硬的物體的例子。',
    },
    {
      question: 'Why can we see through a glass window? 為什麼我們可以看穿玻璃窗?',
    },
  ],
};

export default function PropertiesOfMatterPage() {
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
            Properties of matter
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Matter is all around us and has different properties like color, shape, and texture. Understanding these properties helps us describe and classify objects in our daily lives.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Describe the properties of water and air (colourless, odourless, tasteless, and have no fixed shape)</li>
                <li>Describe the properties (e.g. weight, hardness, elasticity, transparency) of everyday items</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Sort objects based on their properties (hard/soft, heavy/light)</li>
              <li>Conduct a "sink or float" experiment with different materials</li>
              <li>Create a properties scavenger hunt in the classroom</li>
              <li>Compare and contrast properties of solids, liquids, and gases</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify and describe basic properties of common materials and understand how these properties affect their uses.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of materials in our environment</li>
              <li>Curiosity about how different properties make materials suitable for different purposes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding why certain materials are chosen for specific products (e.g., glass for windows)</li>
              <li>Recognizing how material properties affect recycling and environmental impact</li>
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