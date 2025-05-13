'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which season do many animals hibernate in? 許多動物在哪個季節冬眠？',
      options: [{ label: 'A', text: 'Winter 冬季' }, { label: 'B', text: 'Summer 夏季' }, { label: 'C', text: 'Spring 春季' }, { label: 'D', text: 'Autumn 秋季' }],
      answer: 'A',
    },
    {
      question: 'What happens to trees in autumn? 秋天時樹木會發生什麼變化？',
      options: [{ label: 'A', text: 'They grow new leaves 長出新葉子' }, { label: 'B', text: 'Their leaves turn yellow and fall 葉子變黃並掉落' }, { label: 'C', text: 'They produce flowers 開花' }, { label: 'D', text: 'They stop growing 停止生長' }],
      answer: 'B',
    },
    {
      question: 'Why do birds migrate in winter? 為什麼鳥類在冬天遷徙？',
      options: [{ label: 'A', text: 'To find food and warmer weather 尋找食物和更溫暖的氣候' }, { label: 'B', text: 'To escape predators 躲避捕食者' }, { label: 'C', text: 'To build nests 築巢' }, { label: 'D', text: 'To play with other birds 和其他鳥類玩耍' }],
      answer: 'A',
    },
    {
      question: 'Which season do flowers bloom the most? 花朵在哪個季節開得最多？',
      options: [{ label: 'A', text: 'Winter 冬季' }, { label: 'B', text: 'Summer 夏季' }, { label: 'C', text: 'Spring 春季' }, { label: 'D', text: 'Autumn 秋季' }],
      answer: 'C',
    },
    {
      question: 'What do bears do in winter? 熊在冬天會做什麼？',
      options: [{ label: 'A', text: 'Hibernate 冬眠' }, { label: 'B', text: 'Hunt for food 狩獵食物' }, { label: 'C', text: 'Swim in rivers 在河裡游泳' }, { label: 'D', text: 'Play with other bears 和其他熊玩耍' }],
      answer: 'A',
    },
    {
      question: 'Why do some animals grow thicker fur in winter? 為什麼有些動物在冬天會長出更厚的毛？',
      options: [{ label: 'A', text: 'To stay warm 保暖' }, { label: 'B', text: 'To look prettier 看起來更漂亮' }, { label: 'C', text: 'To run faster 跑得更快' }, { label: 'D', text: 'To hide from predators 躲避捕食者' }],
      answer: 'A',
    },
    {
      question: 'What do farmers do in spring? 農民在春天會做什麼？',
      options: [{ label: 'A', text: 'Plant seeds 播種' }, { label: 'B', text: 'Harvest crops 收割莊稼' }, { label: 'C', text: 'Build snowmen 堆雪人' }, { label: 'D', text: 'Rest all day 整天休息' }],
      answer: 'A',
    },
    {
      question: 'Which season is the hottest? 哪個季節最熱？',
      options: [{ label: 'A', text: 'Winter 冬季' }, { label: 'B', text: 'Summer 夏季' }, { label: 'C', text: 'Spring 春季' }, { label: 'D', text: 'Autumn 秋季' }],
      answer: 'B',
    },
    {
      question: 'What do some animals do in summer to stay cool? 一些動物在夏天會做什麼來保持涼爽？',
      options: [{ label: 'A', text: 'Swim in water 在水裡游泳' }, { label: 'B', text: 'Wear sunglasses 戴太陽眼鏡' }, { label: 'C', text: 'Eat ice cream 吃冰淇淋' }, { label: 'D', text: 'Sleep all day 整天睡覺' }],
      answer: 'A',
    },
    {
      question: 'Why do leaves change color in autumn? 為什麼葉子在秋天會變色？',
      options: [{ label: 'A', text: 'Because they are old 因為它們老了' }, { label: 'B', text: 'Because of the weather 因為天氣變化' }, { label: 'C', text: 'Because they are sick 因為它們生病了' }, { label: 'D', text: 'Because they want to 因為它們想變色' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Birds migrate to warmer places in winter. 鳥類在冬天會遷徙到更溫暖的地方。', answer: true },
    { statement: 'Trees lose their leaves in summer. 樹木在夏天會落葉。', answer: false },
    { statement: 'Some animals grow thicker fur in winter to stay warm. 有些動物在冬天會長出更厚的毛來保暖。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name one animal that hibernates in winter. 舉出一種會在冬天冬眠的動物。',
    },
    {
      question: 'What do you notice about the weather in different seasons? 你在不同季節的天氣中注意到什麼？',
    },
    {
      question: 'How do plants change in spring? 植物在春天會有什麼變化？',
    },
  ],
};

export default function SomePhenomenaAndPatternsObservedOnTheEarthCausedByTheMovementsOfTheSunEarthAndMoonPage() {
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
             Some phenomena and patterns observed on the Earth caused by the movements of the Sun, Earth and Moon
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The movements of the Sun, Earth, and Moon create observable patterns like day and night, seasons, and tides. These celestial motions affect weather patterns, animal behaviors, and plant growth cycles on Earth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the relationship between seasonal changes and the activities of animals and plants</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a model showing Earth's rotation and revolution around the Sun</li>
              <li>Track and record moon phases for a month</li>
              <li>Observe and document seasonal changes in local plants and animals</li>
              <li>Simulate tidal patterns using water and gravity models</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how celestial movements create Earth's daily and seasonal patterns, and recognize their impacts on living organisms and natural phenomena.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the interconnectedness of celestial bodies and Earth's systems</li>
              <li>Curiosity about natural phenomena and their causes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how ancient civilizations used celestial patterns for calendars and navigation</li>
              <li>Recognizing how tidal patterns affect coastal communities and ecosystems</li>
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