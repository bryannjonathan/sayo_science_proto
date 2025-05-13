'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is Artificial Intelligence (AI)? 什麼是人工智能（AI）？',
      options: [{ label: 'A', text: 'Machines that can think and learn like humans 能像人類一樣思考和學習的機器' }, { label: 'B', text: 'A type of robot used in factories 工廠中使用的一種機器人' }, { label: 'C', text: 'A computer game 一種電腦遊戲' }, { label: 'D', text: 'A new type of smartphone 一種新型智能手機' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of the Internet of Things (IoT)? 以下哪項是物聯網（IoT）的例子？',
      options: [{ label: 'A', text: 'A smart fridge that orders food when you run out 當食物用完時會自動訂購的智能冰箱' }, { label: 'B', text: 'A traditional light bulb 傳統燈泡' }, { label: 'C', text: 'A book 一本書' }, { label: 'D', text: 'A bicycle 一輛自行車' }],
      answer: 'A',
    },
    {
      question: 'How does big data help businesses? 大數據如何幫助企業？',
      options: [{ label: 'A', text: 'By analyzing large amounts of information to make better decisions 通過分析大量信息來做出更好的決策' }, { label: 'B', text: 'By making products cheaper 通過降低產品價格' }, { label: 'C', text: 'By replacing all workers with machines 用機器取代所有工人' }, { label: 'D', text: 'By creating new types of food 通過創造新型食物' }],
      answer: 'A',
    },
    {
      question: 'What is a common application of AI in daily life? 人工智能在日常生活中常見的應用是什麼？',
      options: [{ label: 'A', text: 'Voice assistants like Siri or Alexa 像Siri或Alexa這樣的語音助手' }, { label: 'B', text: 'A microwave oven 微波爐' }, { label: 'C', text: 'A pencil 鉛筆' }, { label: 'D', text: 'A pair of shoes 一雙鞋子' }],
      answer: 'A',
    },
    {
      question: 'Which technology allows devices to communicate with each other without human intervention? 哪種技術允許設備在沒有人類干預的情況下相互通信？',
      options: [{ label: 'A', text: 'Internet of Things (IoT) 物聯網（IoT）' }, { label: 'B', text: 'Television 電視' }, { label: 'C', text: 'Printing press 印刷機' }, { label: 'D', text: 'Typewriter 打字機' }],
      answer: 'A',
    },
    {
      question: 'How has technology improved healthcare? 技術如何改善醫療保健？',
      options: [{ label: 'A', text: 'By enabling remote consultations with doctors 通過實現與醫生的遠程諮詢' }, { label: 'B', text: 'By making hospitals bigger 通過使醫院更大' }, { label: 'C', text: 'By replacing all doctors with robots 用機器人取代所有醫生' }, { label: 'D', text: 'By inventing new diseases 通過發明新的疾病' }],
      answer: 'A',
    },
    {
      question: 'What is a benefit of using drones in delivery services? 在配送服務中使用無人機有什麼好處？',
      options: [{ label: 'A', text: 'Faster delivery times 更快的送貨時間' }, { label: 'B', text: 'Higher costs 更高的成本' }, { label: 'C', text: 'More pollution 更多的污染' }, { label: 'D', text: 'Less accuracy 更低的準確性' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a negative impact of technology? 以下哪項是技術的負面影響？',
      options: [{ label: 'A', text: 'Increased screen time leading to health issues 屏幕時間增加導致健康問題' }, { label: 'B', text: 'Better communication 更好的溝通' }, { label: 'C', text: 'Improved education 改善教育' }, { label: 'D', text: 'Faster transportation 更快的交通' }],
      answer: 'A',
    },
    {
      question: 'What is an example of innovative technology in agriculture? 農業中創新技術的例子是什麼？',
      options: [{ label: 'A', text: 'Using sensors to monitor soil conditions 使用傳感器監測土壤條件' }, { label: 'B', text: 'Planting seeds by hand 手工播種' }, { label: 'C', text: 'Using horses to plow fields 用馬犁田' }, { label: 'D', text: 'Building wooden fences 建造木柵欄' }],
      answer: 'A',
    },
    {
      question: 'How can technology help the environment? 技術如何幫助環境？',
      options: [{ label: 'A', text: 'By reducing waste through smart systems 通過智能系統減少浪費' }, { label: 'B', text: 'By cutting down more trees 通過砍伐更多樹木' }, { label: 'C', text: 'By increasing pollution 通過增加污染' }, { label: 'D', text: 'By using more fossil fuels 通過使用更多化石燃料' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Artificial Intelligence can only be used in computers. 人工智能只能在電腦中使用。', answer: false },
    { statement: 'Big data helps scientists understand weather patterns better. 大數據幫助科學家更好地理解天氣模式。', answer: true },
    { statement: 'The Internet of Things requires human intervention to work. 物聯網需要人類干預才能工作。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give one example of how artificial intelligence is used in your daily life. 舉一個人工智能在你日常生活中應用的例子。',
    },
    {
      question: 'How do you think technology will change schools in the future? 你認為技術將來會如何改變學校？',
    },
    {
      question: 'What is one positive and one negative impact of the Internet of Things? 物聯網的一個正面和一個負面影響是什麼？',
    },
  ],
};

export default function InnovationAndTechnologyDevelopmentPage() {
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
             Innovation and technology development
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Innovation and technology development explores how cutting-edge technologies like AI, IoT, and big data transform our lives. Students will learn about their applications and societal impacts through engaging activities and real-world examples.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the development of some innovative technologies (e.g. artificial intelligence, big data, the Internet of Things) and their applications in the society</li>
                <li>Recognise the impact of the development of innovative technologies on human life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Design a simple AI chatbot using block-based programming</li>
              <li>Create a mock IoT device prototype with everyday materials</li>
              <li>Analyze real-world datasets to identify patterns and trends</li>
              <li>Debate the ethical implications of emerging technologies</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand key technological innovations and their societal applications. They will be able to critically analyze both benefits and challenges of technological advancements.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for technological advancements that improve quality of life</li>
              <li>Responsible use of technology considering ethical implications</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How smart city technologies address urban challenges</li>
              <li>The role of innovation in sustainable development</li>
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