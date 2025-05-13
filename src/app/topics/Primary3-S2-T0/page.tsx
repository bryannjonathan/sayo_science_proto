'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Where is most of the Earth\\\'s salt water found? 地球上大部分的鹹水在哪裡找到?',
      options: [{ label: 'A', text: 'Oceans 海洋' }, { label: 'B', text: 'Rivers 河流' }, { label: 'C', text: 'Lakes 湖泊' }, { label: 'D', text: 'Underground 地下' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a use of fresh water? 以下哪項是淡水的用途?',
      options: [{ label: 'A', text: 'Drinking 飲用' }, { label: 'B', text: 'Making seawater 製造海水' }, { label: 'C', text: 'Watering saltwater fish 餵養鹹水魚' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'A',
    },
    {
      question: 'Why does drinking water need to be purified? 為什麼飲用水需要淨化?',
      options: [{ label: 'A', text: 'To remove harmful germs 去除有害細菌' }, { label: 'B', text: 'To make it salty 讓它變鹹' }, { label: 'C', text: 'To change its color 改變它的顏色' }, { label: 'D', text: 'To make it taste bad 讓它變難喝' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a renewable resource? 以下哪項是可再生資源?',
      options: [{ label: 'A', text: 'Wind 風' }, { label: 'B', text: 'Petroleum 石油' }, { label: 'C', text: 'Natural gas 天然氣' }, { label: 'D', text: 'Minerals 礦物' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a non-renewable resource? 以下哪項是不可再生資源?',
      options: [{ label: 'A', text: 'Forests 森林' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Petroleum 石油' }, { label: 'D', text: 'Wind 風' }],
      answer: 'C',
    },
    {
      question: 'What is one way to use Earth\\\'s resources responsibly? 負責任地使用地球資源的方法是什麼?',
      options: [{ label: 'A', text: 'Wasting water 浪費水' }, { label: 'B', text: 'Recycling paper 回收紙張' }, { label: 'C', text: 'Cutting down trees 砍伐樹木' }, { label: 'D', text: 'Using plastic bags 使用塑膠袋' }],
      answer: 'B',
    },
    {
      question: 'Where can we find fresh water? 我們在哪裡可以找到淡水?',
      options: [{ label: 'A', text: 'Rivers and lakes 河流和湖泊' }, { label: 'B', text: 'Oceans 海洋' }, { label: 'C', text: 'Saltwater pools 鹹水池' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'A',
    },
    {
      question: 'What is an example of a non-renewable resource? 不可再生資源的例子是什麼?',
      options: [{ label: 'A', text: 'Sunlight 陽光' }, { label: 'B', text: 'Coal 煤' }, { label: 'C', text: 'Trees 樹木' }, { label: 'D', text: 'Wind 風' }],
      answer: 'B',
    },
    {
      question: 'Why is it important to save water? 為什麼節約用水很重要?',
      options: [{ label: 'A', text: 'Because water is unlimited 因為水是無限的' }, { label: 'B', text: 'Because fresh water is limited 因為淡水是有限的' }, { label: 'C', text: 'Because water is dirty 因為水是髒的' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'B',
    },
    {
      question: 'What can we do to protect forests? 我們可以做什麼來保護森林?',
      options: [{ label: 'A', text: 'Cut down more trees 砍伐更多樹木' }, { label: 'B', text: 'Plant new trees 種植新樹木' }, { label: 'C', text: 'Use more paper 使用更多紙張' }, { label: 'D', text: 'Burn trees 焚燒樹木' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Most of the Earth\\\'s water is fresh water. 地球上大部分的水是淡水。', answer: false },
    { statement: 'Drinking water does not need to be purified. 飲用水不需要淨化。', answer: false },
    { statement: 'Wind is a renewable resource. 風是可再生資源。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two uses of fresh water in your daily life. 列出兩種你在日常生活中使用淡水的用途。',
    },
    {
      question: 'Why is petroleum a non-renewable resource? 為什麼石油是不可再生資源?',
    },
    {
      question: 'What can you do to help save Earth\\\'s resources? 你可以做什麼來幫助節約地球資源?',
    },
  ],
};

export default function EarthsResourcesPage() {
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
             Earth’s resources
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Earth provides us with essential resources like water, minerals, and energy sources. These resources can be renewable or non-renewable, and we must use them responsibly to ensure they last for future generations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the sources of salt water and fresh water, and their uses in daily life</li>
                <li>Be aware that drinking water needs to be filtered and purified</li>
                <li>Give some examples of Earth’s resources that are renewable (e.g. water, wind, forests) and that are non-renewable (e.g. petroleum, natural gas, minerals)</li>
                <li>Be aware of the importance of responsible use of the Earth’s resources</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify different resources as renewable or non-renewable</li>
              <li>Create a poster showing ways to conserve water</li>
              <li>Conduct a simple water filtration experiment</li>
              <li>Role-play scenarios about resource conservation</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the difference between renewable and non-renewable resources and demonstrate ways to conserve Earth's precious resources.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for Earth's resources and their importance</li>
              <li>Responsibility in using resources wisely</li>
              <li>Concern for environmental conservation</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How technology helps in water purification</li>
              <li>Impact of human activities on resource depletion</li>
              <li>Community initiatives for resource conservation</li>
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