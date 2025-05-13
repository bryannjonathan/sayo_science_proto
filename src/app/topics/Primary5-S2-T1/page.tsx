'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What is the average temperature in Hong Kong during summer? 香港夏季的平均溫度是多少？',
      options: [{ label: 'A', text: '15°C - 20°C 15°C - 20°C' }, { label: 'B', text: '25°C - 30°C 25°C - 30°C' }, { label: 'C', text: '30°C - 35°C 30°C - 35°C' }, { label: 'D', text: '40°C - 45°C 40°C - 45°C' }],
      answer: 'C',
    },
    {
      question: 'Which instrument is used to measure wind speed? 哪種儀器用於測量風速？',
      options: [{ label: 'A', text: 'Thermometer 溫度計' }, { label: 'B', text: 'Anemometer 風速計' }, { label: 'C', text: 'Barometer 氣壓計' }, { label: 'D', text: 'Hygrometer 濕度計' }],
      answer: 'B',
    },
    {
      question: 'What does relative humidity measure? 相對濕度測量的是什麼？',
      options: [{ label: 'A', text: 'The amount of rainfall 降雨量' }, { label: 'B', text: 'The amount of water vapor in the air 空氣中的水蒸氣量' }, { label: 'C', text: 'The speed of the wind 風速' }, { label: 'D', text: 'The temperature 溫度' }],
      answer: 'B',
    },
    {
      question: 'Which season in Hong Kong is known for heavy rainfall? 香港哪個季節以降雨量大而聞名？',
      options: [{ label: 'A', text: 'Winter 冬季' }, { label: 'B', text: 'Spring 春季' }, { label: 'C', text: 'Summer 夏季' }, { label: 'D', text: 'Autumn 秋季' }],
      answer: 'C',
    },
    {
      question: 'What is the main wind direction in Hong Kong during winter? 香港冬季的主要風向是什麼？',
      options: [{ label: 'A', text: 'Northeast 東北' }, { label: 'B', text: 'Southwest 西南' }, { label: 'C', text: 'Southeast 東南' }, { label: 'D', text: 'Northwest 西北' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a weather element? 以下哪項不是天氣要素？',
      options: [{ label: 'A', text: 'Temperature 溫度' }, { label: 'B', text: 'Humidity 濕度' }, { label: 'C', text: 'Wind speed 風速' }, { label: 'D', text: 'Population 人口' }],
      answer: 'D',
    },
    {
      question: 'How is rainfall measured? 降雨量是如何測量的？',
      options: [{ label: 'A', text: 'In millimeters 以毫米為單位' }, { label: 'B', text: 'In degrees Celsius 以攝氏度為單位' }, { label: 'C', text: 'In kilometers per hour 以每小時公里為單位' }, { label: 'D', text: 'In grams 以克為單位' }],
      answer: 'A',
    },
    {
      question: 'What is the typical relative humidity in Hong Kong during summer? 香港夏季的典型相對濕度是多少？',
      options: [{ label: 'A', text: '30% - 40% 30% - 40%' }, { label: 'B', text: '50% - 60% 50% - 60%' }, { label: 'C', text: '70% - 80% 70% - 80%' }, { label: 'D', text: '80% - 90% 80% - 90%' }],
      answer: 'D',
    },
    {
      question: 'Which season in Hong Kong is usually the driest? 香港哪個季節通常最乾燥？',
      options: [{ label: 'A', text: 'Winter 冬季' }, { label: 'B', text: 'Spring 春季' }, { label: 'C', text: 'Summer 夏季' }, { label: 'D', text: 'Autumn 秋季' }],
      answer: 'A',
    },
    {
      question: 'What is the primary source of Hong Kong\\'s weather data? 香港天氣數據的主要來源是什麼？',
      options: [{ label: 'A', text: 'Hong Kong Observatory 香港天文台' }, { label: 'B', text: 'Television stations 電視台' }, { label: 'C', text: 'Newspapers 報紙' }, { label: 'D', text: 'Social media 社交媒體' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Hong Kong\\'s winter is usually warm and humid. 香港的冬季通常溫暖潮濕。', answer: false },
    { statement: 'Wind speed is measured in degrees Celsius. 風速以攝氏度為單位測量。', answer: false },
    { statement: 'The Hong Kong Observatory provides weather data to the public. 香港天文台向公眾提供天氣數據。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe two weather characteristics of Hong Kong during summer. 描述香港夏季的兩個天氣特徵。',
    },
    {
      question: 'Why is it important to measure wind direction in weather forecasting? 為什麼在天氣預報中測量風向很重要？',
    },
    {
      question: 'How does relative humidity affect our daily life? Give one example. 相對濕度如何影響我們的日常生活？舉一個例子。',
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
            Explore how different regions around the world have unique climate patterns based on their geographical location. Understand how factors like temperature, rainfall, and wind patterns vary across tropical, temperate, and polar regions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Describe Hong Kong’s weather information such as temperature, wind speed, wind direction, relative humidity, rainfall, etc. based on weather data</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Compare climate data from different regions using interactive maps</li>
              <li>Create a weather journal to record daily observations</li>
              <li>Simulate weather patterns using online tools</li>
              <li>Analyze real-time weather data from different locations</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify and compare climate characteristics across different regions and understand how these patterns affect local environments.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the diversity of Earth's climates</li>
              <li>Curiosity about how climate affects human activities</li>
              <li>Responsibility towards climate change awareness</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of climate on agriculture and food production</li>
              <li>How urban planning adapts to local climate conditions</li>
              <li>Technological solutions for extreme weather events</li>
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