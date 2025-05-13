'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a method to test water pollution? 以下哪一種是測試水污染的方法?',
      options: [{ label: 'A', text: 'Measuring pH levels 測量pH值' }, { label: 'B', text: 'Counting tree leaves 計算樹葉數量' }, { label: 'C', text: 'Recording wind speed 記錄風速' }, { label: 'D', text: 'Measuring temperature only 僅測量溫度' }],
      answer: 'A',
    },
    {
      question: 'What is one way science and technology can help reduce air pollution? 科學和技術可以如何幫助減少空氣污染?',
      options: [{ label: 'A', text: 'Using electric cars 使用電動汽車' }, { label: 'B', text: 'Cutting down trees 砍伐樹木' }, { label: 'C', text: 'Burning more coal 燃燒更多煤炭' }, { label: 'D', text: 'Increasing factory smoke 增加工廠煙霧' }],
      answer: 'A',
    },
    {
      question: 'Why is sustainable development important? 為什麼可持續發展很重要?',
      options: [{ label: 'A', text: 'To protect resources for future generations 為子孫後代保護資源' }, { label: 'B', text: 'To use up all resources quickly 快速耗盡所有資源' }, { label: 'C', text: 'To ignore environmental problems 忽略環境問題' }, { label: 'D', text: 'To increase pollution 增加污染' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a source of water pollution? 以下哪一種是水污染的來源?',
      options: [{ label: 'A', text: 'Industrial waste 工業廢料' }, { label: 'B', text: 'Planting trees 種植樹木' }, { label: 'C', text: 'Using solar energy 使用太陽能' }, { label: 'D', text: 'Recycling paper 回收紙張' }],
      answer: 'A',
    },
    {
      question: 'What can we do to reduce plastic pollution? 我們可以做什麼來減少塑膠污染?',
      options: [{ label: 'A', text: 'Use reusable bags 使用可重複使用的袋子' }, { label: 'B', text: 'Throw plastic everywhere 隨處丟棄塑膠' }, { label: 'C', text: 'Burn plastic waste 焚燒塑膠廢物' }, { label: 'D', text: 'Buy more single-use plastics 購買更多一次性塑膠製品' }],
      answer: 'A',
    },
    {
      question: 'Which technology helps monitor air quality? 哪種技術有助於監測空氣質量?',
      options: [{ label: 'A', text: 'Air quality sensors 空氣質量傳感器' }, { label: 'B', text: 'Television 電視' }, { label: 'C', text: 'Microwave oven 微波爐' }, { label: 'D', text: 'Refrigerator 冰箱' }],
      answer: 'A',
    },
    {
      question: 'What is the main goal of environmental protection? 環境保護的主要目標是什麼?',
      options: [{ label: 'A', text: 'To preserve natural resources 保護自然資源' }, { label: 'B', text: 'To increase pollution 增加污染' }, { label: 'C', text: 'To destroy habitats 破壞棲息地' }, { label: 'D', text: 'To waste water 浪費水' }],
      answer: 'A',
    },
    {
      question: 'Which human activity causes deforestation? 哪種人類活動導致森林砍伐?',
      options: [{ label: 'A', text: 'Cutting trees for agriculture 為農業砍伐樹木' }, { label: 'B', text: 'Planting more trees 種植更多樹木' }, { label: 'C', text: 'Recycling paper 回收紙張' }, { label: 'D', text: 'Using solar energy 使用太陽能' }],
      answer: 'A',
    },
    {
      question: 'How does recycling help the environment? 回收如何幫助環境?',
      options: [{ label: 'A', text: 'Reduces waste in landfills 減少垃圾填埋場的廢物' }, { label: 'B', text: 'Increases pollution 增加污染' }, { label: 'C', text: 'Uses more resources 使用更多資源' }, { label: 'D', text: 'Destroys habitats 破壞棲息地' }],
      answer: 'A',
    },
    {
      question: 'What is ecological security? 什麼是生態安全?',
      options: [{ label: 'A', text: 'Protecting ecosystems for future generations 為子孫後代保護生態系統' }, { label: 'B', text: 'Ignoring environmental problems 忽略環境問題' }, { label: 'C', text: 'Polluting rivers 污染河流' }, { label: 'D', text: 'Cutting down all trees 砍伐所有樹木' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Burning fossil fuels does not contribute to air pollution. 燃燒化石燃料不會造成空氣污染。', answer: false },
    { statement: 'Sustainable development aims to meet current needs without harming future generations. 可持續發展旨在滿足當前需求而不損害子孫後代。', answer: true },
    { statement: 'Recycling paper helps reduce deforestation. 回收紙張有助於減少森林砍伐。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe one method to test air pollution and explain how it works. 描述一種測試空氣污染的方法並解釋其工作原理。',
    },
    {
      question: 'How can science and technology help solve the problem of plastic pollution? Give one example. 科學和技術如何幫助解決塑膠污染問題？舉一個例子。',
    },
    {
      question: 'Why is it important to protect the natural environment? Give two reasons. 為什麼保護自然環境很重要？給出兩個理由。',
    },
  ],
}

export default function ImpactOfHumanBehaviorOnTheNaturalEnvironmentPage() {
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
             Impact of human behavior on the natural environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Human activities significantly affect the natural environment through pollution, deforestation, and resource depletion. Understanding these impacts helps us develop sustainable practices to protect ecosystems for future generations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise some methods of pollution testing</li>
                <li>Give some approaches in the application of science and technology to address environmental issues</li>
                <li>Recognise the importance of sustainable development and environmental protection to maintaining ecological security</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct a water quality test using pH strips</li>
              <li>Create a poster showing human impacts on local ecosystems</li>
              <li>Role-play a town meeting discussing environmental protection measures</li>
              <li>Design a model of a sustainable city</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how human actions affect nature and identify ways to minimize negative environmental impacts through sustainable practices.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing respect for nature and all living things</li>
              <li>Cultivating responsibility for environmental stewardship</li>
              <li>Appreciating the importance of sustainable living</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How technology can help monitor and reduce pollution</li>
              <li>The role of government policies in environmental protection</li>
              <li>Community initiatives for sustainable development</li>
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