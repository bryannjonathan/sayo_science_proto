'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the main difference between weather and climate? 天氣和氣候的主要區別是什麼?',
      options: [{ label: 'A', text: 'Weather is short-term, climate is long-term. 天氣是短期的，氣候是長期的。' }, { label: 'B', text: 'Weather is long-term, climate is short-term. 天氣是長期的，氣候是短期的。' }, { label: 'C', text: 'Weather and climate are the same. 天氣和氣候是一樣的。' }, { label: 'D', text: 'Weather is only about rain, climate is only about temperature. 天氣只關於雨，氣候只關於溫度。' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a characteristic of climate? 以下哪一項是氣候的特徵?',
      options: [{ label: 'A', text: 'Daily temperature changes. 每日溫度變化。' }, { label: 'B', text: 'Average rainfall over 30 years. 30年的平均降雨量。' }, { label: 'C', text: 'Today\\'s humidity. 今天的濕度。' }, { label: 'D', text: 'Yesterday\\'s snowfall. 昨天的降雪。' }],
      answer: 'B',
    },
    {
      question: 'Which region is likely to have a tropical climate? 哪個地區可能有熱帶氣候?',
      options: [{ label: 'A', text: 'Near the North Pole. 靠近北極。' }, { label: 'B', text: 'Near the equator. 靠近赤道。' }, { label: 'C', text: 'In a desert. 在沙漠中。' }, { label: 'D', text: 'On a mountain top. 在山頂上。' }],
      answer: 'B',
    },
    {
      question: 'What is a common weather characteristic in a desert? 沙漠中常見的天氣特徵是什麼?',
      options: [{ label: 'A', text: 'Heavy rainfall. 大量降雨。' }, { label: 'B', text: 'High humidity. 高濕度。' }, { label: 'C', text: 'Hot days and cold nights. 炎熱的白天和寒冷的夜晚。' }, { label: 'D', text: 'Frequent snowfall. 頻繁的降雪。' }],
      answer: 'C',
    },
    {
      question: 'Which of the following describes climate? 以下哪一項描述氣候?',
      options: [{ label: 'A', text: 'It rained yesterday. 昨天下雨了。' }, { label: 'B', text: 'The average temperature in July is 30°C. 七月的平均溫度是30°C。' }, { label: 'C', text: 'It is windy today. 今天有風。' }, { label: 'D', text: 'There was a thunderstorm last night. 昨晚有雷暴。' }],
      answer: 'B',
    },
    {
      question: 'What type of climate is found near the poles? 極地附近有什麼類型的氣候?',
      options: [{ label: 'A', text: 'Tropical. 熱帶。' }, { label: 'B', text: 'Polar. 極地。' }, { label: 'C', text: 'Temperate. 溫帶。' }, { label: 'D', text: 'Desert. 沙漠。' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a weather characteristic? 以下哪一項是天氣特徵?',
      options: [{ label: 'A', text: 'Annual rainfall. 年降雨量。' }, { label: 'B', text: 'Seasonal changes. 季節變化。' }, { label: 'C', text: 'Today\\'s temperature. 今天的溫度。' }, { label: 'D', text: 'Average humidity over 10 years. 10年的平均濕度。' }],
      answer: 'C',
    },
    {
      question: 'What is a common climate characteristic of a rainforest? 雨林常見的氣候特徵是什麼?',
      options: [{ label: 'A', text: 'Low humidity. 低濕度。' }, { label: 'B', text: 'High rainfall throughout the year. 全年高降雨量。' }, { label: 'C', text: 'Cold temperatures. 寒冷的溫度。' }, { label: 'D', text: 'Little to no rainfall. 很少或沒有降雨。' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is true about weather? 以下關於天氣的說法哪一項是正確的?',
      options: [{ label: 'A', text: 'It is the same as climate. 它與氣候相同。' }, { label: 'B', text: 'It changes every day. 它每天都在變化。' }, { label: 'C', text: 'It is measured over 30 years. 它是通過30年測量的。' }, { label: 'D', text: 'It is the same everywhere. 它在任何地方都一樣。' }],
      answer: 'B',
    },
    {
      question: 'What is a common weather characteristic in a temperate region? 溫帶地區常見的天氣特徵是什麼?',
      options: [{ label: 'A', text: 'Extreme heat all year. 全年極端炎熱。' }, { label: 'B', text: 'Four distinct seasons. 四個不同的季節。' }, { label: 'C', text: 'Constant snowfall. 持續降雪。' }, { label: 'D', text: 'No rainfall. 沒有降雨。' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Weather and climate mean the same thing. 天氣和氣候的意思是一樣的。', answer: false },
    { statement: 'Climate is the average weather conditions over a long period of time. 氣候是長時間的平均天氣條件。', answer: true },
    { statement: 'Deserts have high rainfall throughout the year. 沙漠全年降雨量高。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe one difference between weather and climate. 描述天氣和氣候之間的一個區別。',
    },
    {
      question: 'What are two weather characteristics you might experience in a tropical region? 在熱帶地區你可能會經歷的兩種天氣特徵是什麼?',
    },
    {
      question: 'Why is it important to understand the climate of a region? 為什麼了解一個地區的氣候很重要?',
    },
  ],
};

export default function ClimateCharacteristicsOfDifferentRegionsPage() {
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
             Climate characteristics of different regions
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Climate refers to long-term weather patterns in different regions, while weather describes short-term atmospheric conditions. Understanding climate helps us predict seasonal changes and prepare for different environmental conditions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the difference between weather and climate</li>
                <li>Describe the weather characteristics (e.g. daily variations in temperature, rainfall, snowfall and humidity) in different places</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a climate comparison chart for different regions</li>
              <li>Simulate weather patterns using classroom materials</li>
              <li>Track daily weather changes and compare with climate data</li>
              <li>Role-play as meteorologists reporting on different climates</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to distinguish between weather and climate, and identify key characteristics of different climate zones around the world.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for Earth's diverse climates</li>
              <li>Curiosity about how climate affects living conditions</li>
              <li>Respect for different environments and their unique characteristics</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How climate affects agriculture and food production</li>
              <li>The impact of climate on human settlement patterns</li>
              <li>Climate considerations in building design and urban planning</li>
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