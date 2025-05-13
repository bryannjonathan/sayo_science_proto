'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is an example of how scientific discoveries foster technological development? 以下哪個是科學發現促進技術發展的例子？',
      options: [{ label: 'A', text: 'The discovery of electricity led to the invention of light bulbs. 電的發現導致了電燈泡的發明。' }, { label: 'B', text: 'People using smartphones to play games. 人們使用智能手機玩遊戲。' }, { label: 'C', text: 'Watching a science documentary. 觀看科學紀錄片。' }, { label: 'D', text: 'Drawing a picture of a robot. 畫一個機器人的圖畫。' }],
      answer: 'A',
    },
    {
      question: 'How does technological development drive scientific advancement? 技術發展如何推動科學進步？',
      options: [{ label: 'A', text: 'By providing new tools for research. 通過為研究提供新工具。' }, { label: 'B', text: 'By making movies more exciting. 通過讓電影更精彩。' }, { label: 'C', text: 'By increasing the number of schools. 通過增加學校數量。' }, { label: 'D', text: 'By selling more toys. 通過銷售更多玩具。' }],
      answer: 'A',
    },
    {
      question: 'Which invention was a result of scientific discoveries about germs? 以下哪項發明是關於細菌的科學發現的結果？',
      options: [{ label: 'A', text: 'Vaccines 疫苗' }, { label: 'B', text: 'Television 電視' }, { label: 'C', text: 'Bicycles 自行車' }, { label: 'D', text: 'Pencils 鉛筆' }],
      answer: 'A',
    },
    {
      question: 'What role does technology play in modern medicine? 技術在現代醫學中扮演什麼角色？',
      options: [{ label: 'A', text: 'It helps doctors diagnose diseases. 它幫助醫生診斷疾病。' }, { label: 'B', text: 'It makes food taste better. 它讓食物更美味。' }, { label: 'C', text: 'It designs fashionable clothes. 它設計時尚的衣服。' }, { label: 'D', text: 'It builds taller buildings. 它建造更高的建築。' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a benefit of scientific and technological advancements? 以下哪項是科學和技術進步的好處？',
      options: [{ label: 'A', text: 'Improved communication 改善的溝通' }, { label: 'B', text: 'More homework 更多的作業' }, { label: 'C', text: 'Longer school hours 更長的學校時間' }, { label: 'D', text: 'Less playtime 更少的玩耍時間' }],
      answer: 'A',
    },
    {
      question: 'How did the invention of the internet change human life? 互聯網的發明如何改變人類生活？',
      options: [{ label: 'A', text: 'It made information sharing faster. 它使信息共享更快。' }, { label: 'B', text: 'It made cars go faster. 它使汽車跑得更快。' }, { label: 'C', text: 'It made food cook faster. 它使食物煮得更快。' }, { label: 'D', text: 'It made clocks tick faster. 它使時鐘走得更快。' }],
      answer: 'A',
    },
    {
      question: 'What is an example of technology driving scientific research? 以下哪個是技術推動科學研究的例子？',
      options: [{ label: 'A', text: 'Telescopes helping astronomers study stars. 望遠鏡幫助天文學家研究星星。' }, { label: 'B', text: 'Chefs using knives to cut vegetables. 廚師用刀切蔬菜。' }, { label: 'C', text: 'Artists painting pictures. 藝術家畫畫。' }, { label: 'D', text: 'Musicians playing instruments. 音樂家演奏樂器。' }],
      answer: 'A',
    },
    {
      question: 'Why is it important for scientists and engineers to work together? 為什麼科學家和工程師一起工作很重要？',
      options: [{ label: 'A', text: 'To turn scientific ideas into useful products. 將科學想法轉化為有用的產品。' }, { label: 'B', text: 'To make more money. 賺更多的錢。' }, { label: 'C', text: 'To win competitions. 贏得比賽。' }, { label: 'D', text: 'To travel around the world. 環遊世界。' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a result of technological development in agriculture? 以下哪項是農業技術發展的結果？',
      options: [{ label: 'A', text: 'Increased crop yields 增加的農作物產量' }, { label: 'B', text: 'More wild animals 更多的野生動物' }, { label: 'C', text: 'Less sunlight 更少的陽光' }, { label: 'D', text: 'Smaller farms 更小的農場' }],
      answer: 'A',
    },
    {
      question: 'How has science and technology improved transportation? 科學和技術如何改善交通？',
      options: [{ label: 'A', text: 'By creating faster and safer vehicles. 通過創造更快更安全的車輛。' }, { label: 'B', text: 'By making roads dirtier. 通過使道路更髒。' }, { label: 'C', text: 'By reducing the number of cars. 通過減少汽車數量。' }, { label: 'D', text: 'By stopping all traffic. 通過停止所有交通。' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Scientific discoveries and technological developments are not connected. 科學發現和技術發展沒有關聯。', answer: false },
    { statement: 'The invention of the microscope helped scientists see tiny organisms. 顯微鏡的發明幫助科學家看到微小的生物。', answer: true },
    { statement: 'Technology only makes life more difficult. 技術只會讓生活更困難。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give one example of how a scientific discovery has changed your daily life. Explain. 舉一個科學發現如何改變你日常生活的例子並解釋。',
    },
    {
      question: 'How can technology help scientists learn more about space? 技術如何幫助科學家更多地了解太空？',
    },
    {
      question: 'Why do you think it is important for new technologies to be tested before they are used by everyone? 你認為為什麼新技術在大家使用之前需要經過測試是很重要的？',
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
            Science and technology work together to create innovations that improve our daily lives. From medical advancements to communication tools, they transform how we live, work, and interact with the world.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that scientific discoveries can foster technological development, and technological development can also drive scientific advancement</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline of important scientific discoveries and their resulting technologies</li>
              <li>Interview a family member about how technology has changed their life</li>
              <li>Design an invention that could solve a daily problem</li>
              <li>Research how a common household item was developed through science</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how science and technology influence each other and recognize their impact on society.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how science and technology improve our lives</li>
              <li>Curiosity about how things work and how they can be improved</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how scientific research leads to practical applications</li>
              <li>Recognizing the societal impacts of technological advancements</li>
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