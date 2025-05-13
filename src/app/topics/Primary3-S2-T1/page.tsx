'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the process called when water turns into water vapor? 水變成水蒸氣的過程叫什麼?',
      options: [{ label: 'A', text: 'Evaporation 蒸發' }, { label: 'B', text: 'Condensation 凝結' }, { label: 'C', text: 'Precipitation 降水' }, { label: 'D', text: 'Freezing 凝固' }],
      answer: 'A',
    },
    {
      question: 'Which weather phenomenon is formed when water vapor condenses in the sky? 水蒸氣在天空中凝結時會形成哪種天氣現象?',
      options: [{ label: 'A', text: 'Rain 雨' }, { label: 'B', text: 'Snow 雪' }, { label: 'C', text: 'Clouds 雲' }, { label: 'D', text: 'Dew 露水' }],
      answer: 'C',
    },
    {
      question: 'What is the term for water falling from the sky in liquid form? 水以液體形式從天空落下叫什麼?',
      options: [{ label: 'A', text: 'Evaporation 蒸發' }, { label: 'B', text: 'Condensation 凝結' }, { label: 'C', text: 'Precipitation 降水' }, { label: 'D', text: 'Freezing 凝固' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT part of the water cycle? 以下哪項不屬於水循環的一部分?',
      options: [{ label: 'A', text: 'Evaporation 蒸發' }, { label: 'B', text: 'Condensation 凝結' }, { label: 'C', text: 'Photosynthesis 光合作用' }, { label: 'D', text: 'Precipitation 降水' }],
      answer: 'C',
    },
    {
      question: 'What weather icon usually represents sunny weather? 哪種天氣圖標通常代表晴天?',
      options: [{ label: 'A', text: 'Cloud with rain 雨雲' }, { label: 'B', text: 'Sun 太陽' }, { label: 'C', text: 'Snowflake 雪花' }, { label: 'D', text: 'Lightning bolt 閃電' }],
      answer: 'B',
    },
    {
      question: 'Dew forms when water vapor condenses on which surface? 露水是在水蒸氣凝結在什麼表面上形成的?',
      options: [{ label: 'A', text: 'Clouds 雲' }, { label: 'B', text: 'Leaves 樹葉' }, { label: 'C', text: 'Mountains 山' }, { label: 'D', text: 'Ocean 海洋' }],
      answer: 'B',
    },
    {
      question: 'Which process changes water vapor into liquid water? 哪個過程將水蒸氣變成液態水?',
      options: [{ label: 'A', text: 'Evaporation 蒸發' }, { label: 'B', text: 'Condensation 凝結' }, { label: 'C', text: 'Precipitation 降水' }, { label: 'D', text: 'Freezing 凝固' }],
      answer: 'B',
    },
    {
      question: 'What is snow? 雪是什麼?',
      options: [{ label: 'A', text: 'Liquid water 液態水' }, { label: 'B', text: 'Water vapor 水蒸氣' }, { label: 'C', text: 'Frozen water vapor 凍結的水蒸氣' }, { label: 'D', text: 'Frozen raindrops 凍結的雨滴' }],
      answer: 'D',
    },
    {
      question: 'Which weather icon represents rain? 哪種天氣圖標代表下雨?',
      options: [{ label: 'A', text: 'Sun 太陽' }, { label: 'B', text: 'Cloud with rain drops 帶雨滴的雲' }, { label: 'C', text: 'Snowflake 雪花' }, { label: 'D', text: 'Lightning bolt 閃電' }],
      answer: 'B',
    },
    {
      question: 'What is the first step of the water cycle? 水循環的第一步是什麼?',
      options: [{ label: 'A', text: 'Condensation 凝結' }, { label: 'B', text: 'Precipitation 降水' }, { label: 'C', text: 'Evaporation 蒸發' }, { label: 'D', text: 'Collection 聚集' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Evaporation is when liquid water turns into water vapor. 蒸發是液態水變成水蒸氣的過程。', answer: true },
    { statement: 'Snow is a form of liquid water. 雪是液態水的一種形式。', answer: false },
    { statement: 'A cloud weather icon means it will be sunny. 雲的天氣圖標代表晴天。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two processes in the water cycle. 列出水循環中的兩個過程。',
    },
    {
      question: 'How is rain formed? 雨是如何形成的?',
    },
    {
      question: 'What does a snowflake weather icon mean? 雪花天氣圖標代表什麼?',
    },
  ],
};

export default function DailyWeatherPhenomenaPage() {
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
             Daily weather phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Daily weather phenomena are the observable atmospheric events we experience every day, such as rain, sunshine, and clouds. These phenomena are part of the water cycle and are influenced by temperature and humidity changes in our environment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the processes of water cycle (evaporation, condensation, precipitation)</li>
                <li>Relate some common weather phenomena (e.g. clouds, rain, snow, dew) to the three-state changes of water</li>
                <li>Be aware of some commonly used weather icons</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a mini water cycle experiment using a plastic bag</li>
              <li>Match weather icons to their corresponding phenomena</li>
              <li>Record daily weather observations in a class journal</li>
              <li>Role-play different weather phenomena through movement</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how daily weather phenomena occur through the water cycle and be able to identify common weather patterns and their representations.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for nature's daily changes</li>
              <li>Curiosity about weather patterns and their causes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How weather forecasting helps in daily planning</li>
              <li>The impact of weather on agriculture and transportation</li>
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