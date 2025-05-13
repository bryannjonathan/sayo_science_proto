'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What causes fog to form? 霧是如何形成的?',
      options: [{ label: 'A', text: 'Cool air meeting warm, moist air 冷空氣遇到溫暖潮濕的空氣' }, { label: 'B', text: 'Strong winds blowing over mountains 強風吹過山脈' }, { label: 'C', text: 'Direct sunlight heating the ground 陽光直接加熱地面' }, { label: 'D', text: 'Ocean waves crashing on the shore 海浪拍打岸邊' }],
      answer: 'A',
    },
    {
      question: 'How is rain formed? 雨是如何形成的?',
      options: [{ label: 'A', text: 'Water vapor condenses into droplets in clouds 水蒸氣在雲中凝結成水滴' }, { label: 'B', text: 'Ice crystals melt as they fall 冰晶在下落時融化' }, { label: 'C', text: 'Snowflakes combine in the air 雪花在空中結合' }, { label: 'D', text: 'Dew evaporates from the ground 露水從地面蒸發' }],
      answer: 'A',
    },
    {
      question: 'What is needed for snow to form? 雪的形成需要什麼條件?',
      options: [{ label: 'A', text: 'Temperatures below freezing 溫度低於冰點' }, { label: 'B', text: 'High humidity and warm air 高濕度和溫暖的空氣' }, { label: 'C', text: 'Strong sunlight 強烈的陽光' }, { label: 'D', text: 'Dry air with no clouds 乾燥無雲的空氣' }],
      answer: 'A',
    },
    {
      question: 'What causes frost to appear on surfaces? 霜是如何在表面上形成的?',
      options: [{ label: 'A', text: 'Water vapor freezing directly on cold surfaces 水蒸氣直接在冷表面上凍結' }, { label: 'B', text: 'Rain freezing as it falls 雨在下落時凍結' }, { label: 'C', text: 'Snow melting and refreezing 雪融化後再凍結' }, { label: 'D', text: 'Dew evaporating quickly 露水快速蒸發' }],
      answer: 'A',
    },
    {
      question: 'How is hail formed? 冰雹是如何形成的?',
      options: [{ label: 'A', text: 'Layers of ice build up on frozen raindrops in storms 冰層在暴風雨中的凍結雨滴上堆積' }, { label: 'B', text: 'Snowflakes clump together in clouds 雪花在雲中聚集' }, { label: 'C', text: 'Frost forms on tree branches 霜在樹枝上形成' }, { label: 'D', text: 'Dew freezes on the ground 露水在地面上凍結' }],
      answer: 'A',
    },
    {
      question: 'Which weather phenomenon is caused by rapid cooling at night? 哪種天氣現象是由夜間快速冷卻引起的?',
      options: [{ label: 'A', text: 'Dew 露水' }, { label: 'B', text: 'Hail 冰雹' }, { label: 'C', text: 'Thunderstorm 雷暴' }, { label: 'D', text: 'Tornado 龍捲風' }],
      answer: 'A',
    },
    {
      question: 'What is the main cause of thunderstorms? 雷暴的主要原因是什麼?',
      options: [{ label: 'A', text: 'Rising warm air creating cumulonimbus clouds 上升的暖空氣形成積雨雲' }, { label: 'B', text: 'Cold air moving over warm oceans 冷空氣流過溫暖的海洋' }, { label: 'C', text: 'Snow melting in the mountains 山上的雪融化' }, { label: 'D', text: 'Fog lifting in the morning 早晨的霧消散' }],
      answer: 'A',
    },
    {
      question: 'Which condition is necessary for frost to form? 霜的形成需要什麼條件?',
      options: [{ label: 'A', text: 'Temperatures below freezing and moist air 溫度低於冰點且空氣潮濕' }, { label: 'B', text: 'Hot and dry weather 炎熱乾燥的天氣' }, { label: 'C', text: 'Strong winds 強風' }, { label: 'D', text: 'Heavy rainfall 大雨' }],
      answer: 'A',
    },
    {
      question: 'What happens when water vapor cools and condenses in the air? 當水蒸氣冷卻並在空氣中凝結時會發生什麼?',
      options: [{ label: 'A', text: 'Clouds form 形成雲' }, { label: 'B', text: 'Snow falls 下雪' }, { label: 'C', text: 'The air becomes drier 空氣變得更乾燥' }, { label: 'D', text: 'The temperature rises 溫度上升' }],
      answer: 'A',
    },
    {
      question: 'Why does hail usually occur during thunderstorms? 為什麼冰雹通常發生在雷暴期間?',
      options: [{ label: 'A', text: 'Strong updrafts keep ice pellets in the clouds 強烈的上升氣流使冰粒保持在雲中' }, { label: 'B', text: 'The sun melts snowflakes 太陽融化了雪花' }, { label: 'C', text: 'Frost forms on raindrops 霜在雨滴上形成' }, { label: 'D', text: 'The air is very dry 空氣非常乾燥' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Frost forms when water vapor freezes directly on cold surfaces. 霜是當水蒸氣直接在冷表面上凍結時形成的。', answer: true },
    { statement: 'Snow can form when the air temperature is above freezing. 當空氣溫度高於冰點時，雪也可以形成。', answer: false },
    { statement: 'Hail is formed in cumulonimbus clouds during thunderstorms. 冰雹是在雷暴期間的積雨雲中形成的。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how rain is different from snow. 解釋雨和雪有什麼不同。',
    },
    {
      question: 'Describe two conditions needed for fog to form. 描述霧形成所需的兩個條件。',
    },
    {
      question: 'Why is hail more common in some seasons than others? 為什麼冰雹在某些季節更常見?',
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
            Daily weather phenomena like rain, fog, and frost are fascinating natural occurrences that affect our daily lives. Understanding how these form helps us predict weather patterns and prepare for different conditions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the causes of some common weather phenomena (e.g. fog, rain, snow, frost, hail)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a weather journal to record daily phenomena</li>
              <li>Simulate cloud formation with a jar experiment</li>
              <li>Build a simple rain gauge to measure precipitation</li>
              <li>Compare frost patterns on different surfaces</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to explain how common weather phenomena form and identify the conditions needed for each type.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the complexity of natural weather systems</li>
              <li>Curiosity about daily weather changes and their causes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How weather forecasting helps communities prepare</li>
              <li>The impact of weather phenomena on agriculture and transportation</li>
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