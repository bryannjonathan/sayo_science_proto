'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is an application of artificial satellites? 以下哪項是人造衛星的應用？',
      options: [{ label: 'A', text: 'Weather observations 天氣觀測' }, { label: 'B', text: 'Cooking food 烹飪食物' }, { label: 'C', text: 'Building houses 建造房屋' }, { label: 'D', text: 'Washing clothes 洗衣服' }],
      answer: 'A',
    },
    {
      question: 'Which everyday product incorporates space technology? 以下哪種日常產品應用了太空科技？',
      options: [{ label: 'A', text: 'Shoe insoles 鞋墊' }, { label: 'B', text: 'Wooden chair 木椅' }, { label: 'C', text: 'Paper book 紙本書' }, { label: 'D', text: 'Cotton shirt 棉質襯衫' }],
      answer: 'A',
    },
    {
      question: 'What is the main purpose of satellite positioning? 衛星定位的主要用途是什麼？',
      options: [{ label: 'A', text: 'To help people find locations 幫助人們找到位置' }, { label: 'B', text: 'To cook food 烹飪食物' }, { label: 'C', text: 'To wash clothes 洗衣服' }, { label: 'D', text: 'To build houses 建造房屋' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a contribution of astronauts? 以下哪項是太空人的貢獻？',
      options: [{ label: 'A', text: 'Conducting experiments in space 在太空中進行實驗' }, { label: 'B', text: 'Building roads 建造道路' }, { label: 'C', text: 'Teaching in schools 在學校教學' }, { label: 'D', text: 'Farming crops 種植農作物' }],
      answer: 'A',
    },
    {
      question: 'What do astronauts wear in space? 太空人在太空中穿什麼？',
      options: [{ label: 'A', text: 'Spacesuits 太空服' }, { label: 'B', text: 'Swimsuits 泳衣' }, { label: 'C', text: 'Pajamas 睡衣' }, { label: 'D', text: 'School uniforms 校服' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a product of space technology? 以下哪項是太空科技的產品？',
      options: [{ label: 'A', text: 'Scratch-resistant lenses 防刮鏡片' }, { label: 'B', text: 'Wooden table 木桌' }, { label: 'C', text: 'Cotton socks 棉襪' }, { label: 'D', text: 'Paper bag 紙袋' }],
      answer: 'A',
    },
    {
      question: 'How do astronauts sleep in space? 太空人如何在太空中睡覺？',
      options: [{ label: 'A', text: 'In sleeping bags attached to walls 在固定在牆上的睡袋中' }, { label: 'B', text: 'On beds like on Earth 像在地球上一樣在床上' }, { label: 'C', text: 'Floating freely 自由漂浮' }, { label: 'D', text: 'Standing up 站立' }],
      answer: 'A',
    },
    {
      question: 'What is the main purpose of weather satellites? 氣象衛星的主要用途是什麼？',
      options: [{ label: 'A', text: 'To monitor weather patterns 監測天氣模式' }, { label: 'B', text: 'To cook food 烹飪食物' }, { label: 'C', text: 'To wash clothes 洗衣服' }, { label: 'D', text: 'To build houses 建造房屋' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a contribution of the nation\'s aerospace technology? 以下哪項是我國航天科技的貢獻？',
      options: [{ label: 'A', text: 'Launching satellites 發射衛星' }, { label: 'B', text: 'Building cars 建造汽車' }, { label: 'C', text: 'Making clothes 製作衣服' }, { label: 'D', text: 'Growing plants 種植植物' }],
      answer: 'A',
    },
    {
      question: 'What do astronauts eat in space? 太空人在太空中吃什麼？',
      options: [{ label: 'A', text: 'Specially prepared food 特別準備的食物' }, { label: 'B', text: 'Fresh fruits only 只有新鮮水果' }, { label: 'C', text: 'Raw vegetables 生蔬菜' }, { label: 'D', text: 'Fast food 快餐' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Artificial satellites are used for weather observations. 人造衛星用於天氣觀測。', answer: true },
    { statement: 'Astronauts wear regular clothes in space. 太空人在太空中穿普通衣服。', answer: false },
    { statement: 'Shoe insoles are an example of everyday products that incorporate space technology. 鞋墊是應用太空科技的日常產品之一。', answer: true },
  ],
  open_ended: [
    {
      question: 'How do artificial satellites help in our daily lives? Give two examples. 人造衛星如何在我們的日常生活中提供幫助？舉兩個例子。',
    },
    {
      question: 'Name two products that use space technology and explain how they are useful. 列出兩種使用太空科技的產品，並解釋它們的用途。',
    },
    {
      question: 'Describe one achievement of the nation\'s astronauts. 描述我國太空人的一項成就。',
    },
  ],
};

export default function TheNationsAndTheWorldsAerospaceTechnologyDevelopmentPage() {
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
             The nation’s and the world’s aerospace technology development
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Aerospace technology has transformed global communication, navigation, and scientific research. Nations collaborate on space exploration while developing technologies that benefit daily life on Earth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the applications and impact of artificial satellites in daily life (e.g. satellite positioning, weather observations)</li>
                <li>Give some examples of everyday products that incorporate space technology (e.g. shoe insoles, scratch resistant lenses, drinks in squeeze pouch)</li>
                <li>Be aware of the achievements and contributions of some of the nation’s astronauts</li>
                <li>Recognise the life of astronauts in space</li>
                <li>Appreciate the nation’s contributions to the development of aerospace technology</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a model satellite using recycled materials</li>
              <li>Simulate astronaut training with balance and coordination challenges</li>
              <li>Create a timeline of major aerospace achievements</li>
              <li>Design a space technology product for everyday use</li>
              <li>Role-play as astronauts solving problems in space</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how aerospace technology impacts society and recognize national contributions to space exploration. They will appreciate the connection between space research and everyday technologies.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific collaboration between nations</li>
              <li>Curiosity about space exploration and its benefits</li>
              <li>National pride in aerospace achievements</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How satellite technology improves weather forecasting and disaster response</li>
              <li>The economic impact of aerospace industries on national development</li>
              <li>International cooperation in space station projects</li>
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
  )
}