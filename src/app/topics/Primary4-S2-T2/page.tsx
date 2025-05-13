'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What is the main cause of global warming? 全球暖化的主要原因是什麼?',
      options: [{ label: 'A', text: 'Cutting down trees 砍伐樹木' }, { label: 'B', text: 'Burning fossil fuels 燃燒化石燃料' }, { label: 'C', text: 'Using too much water 使用過多水資源' }, { label: 'D', text: 'Eating too much meat 食用過多肉類' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a result of global warming? 以下哪一項是全球暖化的結果?',
      options: [{ label: 'A', text: 'More ice at the poles 極地冰層增加' }, { label: 'B', text: 'Rising sea levels 海平面上升' }, { label: 'C', text: 'Colder winters 冬天更冷' }, { label: 'D', text: 'Less desertification 沙漠化減少' }],
      answer: 'B',
    },
    {
      question: 'How can we slow down global warming? 我們如何減緩全球暖化?',
      options: [{ label: 'A', text: 'Use more plastic 使用更多塑膠' }, { label: 'B', text: 'Plant more trees 種植更多樹木' }, { label: 'C', text: 'Drive cars more often 更常開車' }, { label: 'D', text: 'Leave lights on all day 整天開燈' }],
      answer: 'B',
    },
    {
      question: 'What happens when glaciers melt? 冰川融化會導致什麼?',
      options: [{ label: 'A', text: 'Sea levels drop 海平面下降' }, { label: 'B', text: 'Animals lose their homes 動物失去家園' }, { label: 'C', text: 'More rain in deserts 沙漠中更多雨水' }, { label: 'D', text: 'Less sunlight 陽光減少' }],
      answer: 'B',
    },
    {
      question: 'Which of these is a way to reduce your carbon footprint? 以下哪一項可以減少碳足跡?',
      options: [{ label: 'A', text: 'Using reusable bags 使用可重複使用的袋子' }, { label: 'B', text: 'Throwing away food 丟棄食物' }, { label: 'C', text: 'Leaving electronics on 讓電子設備一直開著' }, { label: 'D', text: 'Driving alone to school 獨自開車上學' }],
      answer: 'A',
    },
    {
      question: 'What is desertification? 什麼是沙漠化?',
      options: [{ label: 'A', text: 'Forests growing bigger 森林面積擴大' }, { label: 'B', text: 'Land turning into desert 土地變成沙漠' }, { label: 'C', text: 'Oceans getting cleaner 海洋變得更乾淨' }, { label: 'D', text: 'Cities getting greener 城市變得更綠' }],
      answer: 'B',
    },
    {
      question: 'Why is it important to care about climate change? 為什麼關心氣候變化很重要?',
      options: [{ label: 'A', text: 'It affects animals and people 它影響動物和人類' }, { label: 'B', text: 'It makes winters colder 它讓冬天更冷' }, { label: 'C', text: 'It stops rain from falling 它阻止下雨' }, { label: 'D', text: 'It makes days shorter 它讓白天變短' }],
      answer: 'A',
    },
    {
      question: 'What can you do to help the environment? 你可以做什麼來幫助環境?',
      options: [{ label: 'A', text: 'Recycle paper and plastic 回收紙張和塑膠' }, { label: 'B', text: 'Waste electricity 浪費電力' }, { label: 'C', text: 'Use disposable items 使用一次性物品' }, { label: 'D', text: 'Litter everywhere 到處亂扔垃圾' }],
      answer: 'A',
    },
    {
      question: 'Which season is most affected by climate change? 哪個季節受氣候變化影響最大?',
      options: [{ label: 'A', text: 'Winter 冬天' }, { label: 'B', text: 'Spring 春天' }, { label: 'C', text: 'Summer 夏天' }, { label: 'D', text: 'All seasons 所有季節' }],
      answer: 'D',
    },
    {
      question: 'What is one effect of rising sea levels? 海平面上升的一個影響是什麼?',
      options: [{ label: 'A', text: 'More islands form 形成更多島嶼' }, { label: 'B', text: 'Flooding in coastal areas 沿海地區洪水' }, { label: 'C', text: 'Fish can fly 魚會飛' }, { label: 'D', text: 'Oceans disappear 海洋消失' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Planting trees can help reduce global warming. 種樹可以幫助減少全球暖化。', answer: true },
    { statement: 'Global warming only affects the polar regions. 全球暖化只影響極地地區。', answer: false },
    { statement: 'Using less electricity can help slow down climate change. 減少用電可以幫助減緩氣候變化。', answer: true },
  ],
  open_ended: [
    {
      question: 'How does global warming affect animals? 全球暖化如何影響動物?',
    },
    {
      question: 'What are two things you can do to help slow down global warming? 你可以做哪兩件事來幫助減緩全球暖化?',
    },
    {
      question: 'Why should we care about melting glaciers? 我們為什麼要關心冰川融化?',
    },
  ],
};

export default function ChangesInClimateAndSeasonsPage() {
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
             Changes in climate and seasons
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Climate change affects weather patterns and seasons worldwide. Students will explore how human activities contribute to global warming and its impacts on our planet.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Show concern for the phenomenon of global warming and its impacts (e.g. glacier melting, rising sea levels, desertification)</li>
                <li>Recognise some methods to slow down global warming</li>
                <li>Show concern for environmental and climate change</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a climate change poster showing before/after effects</li>
              <li>Simulate greenhouse effect with jars and thermometers</li>
              <li>Track seasonal changes in your local environment</li>
              <li>Role-play as animals affected by habitat loss</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how climate change alters seasons and ecosystems, and identify actions to reduce their environmental impact.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing responsibility towards environmental protection</li>
              <li>Cultivating awareness of human impact on nature</li>
              <li>Appreciating the balance of Earth's climate systems</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How technology can help monitor climate changes</li>
              <li>Government policies addressing climate change</li>
              <li>Global cooperation needed for environmental solutions</li>
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