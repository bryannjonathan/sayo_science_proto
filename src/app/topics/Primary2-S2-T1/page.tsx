'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the weather like when the sky is full of clouds? 當天空充滿雲時，天氣是怎樣的?',
      options: [{ label: 'A', text: 'Sunny 晴天' }, { label: 'B', text: 'Cloudy 多雲' }, { label: 'C', text: 'Rainy 雨天' }, { label: 'D', text: 'Snowy 下雪' }],
      answer: 'B',
    },
    {
      question: 'Which weather is best for flying a kite? 哪種天氣最適合放風箏?',
      options: [{ label: 'A', text: 'Rainy 雨天' }, { label: 'B', text: 'Windy 有風' }, { label: 'C', text: 'Snowy 下雪' }, { label: 'D', text: 'Cloudy 多雲' }],
      answer: 'B',
    },
    {
      question: 'What do people usually wear on a sunny day? 人們在晴天通常穿什麼?',
      options: [{ label: 'A', text: 'Heavy coat 厚外套' }, { label: 'B', text: 'Sunglasses and hat 太陽眼鏡和帽子' }, { label: 'C', text: 'Raincoat 雨衣' }, { label: 'D', text: 'Scarf 圍巾' }],
      answer: 'B',
    },
    {
      question: 'Which weather condition makes the ground wet? 哪種天氣會讓地面變濕?',
      options: [{ label: 'A', text: 'Sunny 晴天' }, { label: 'B', text: 'Rainy 雨天' }, { label: 'C', text: 'Windy 有風' }, { label: 'D', text: 'Cloudy 多雲' }],
      answer: 'B',
    },
    {
      question: 'What do animals do when it is very cold? 天氣很冷時，動物會做什麼?',
      options: [{ label: 'A', text: 'Swim in the water 在水中游泳' }, { label: 'B', text: 'Hide in their homes 躲在家裡' }, { label: 'C', text: 'Play outside 在外面玩' }, { label: 'D', text: 'Eat ice cream 吃冰淇淋' }],
      answer: 'B',
    },
    {
      question: 'Which weather is good for building a snowman? 哪種天氣適合堆雪人?',
      options: [{ label: 'A', text: 'Hot 炎熱' }, { label: 'B', text: 'Snowy 下雪' }, { label: 'C', text: 'Rainy 雨天' }, { label: 'D', text: 'Windy 有風' }],
      answer: 'B',
    },
    {
      question: 'What do we use to measure temperature? 我們用什麼來測量溫度?',
      options: [{ label: 'A', text: 'Ruler 尺子' }, { label: 'B', text: 'Thermometer 溫度計' }, { label: 'C', text: 'Clock 時鐘' }, { label: 'D', text: 'Scale 秤' }],
      answer: 'B',
    },
    {
      question: 'What do birds do when it rains? 下雨時，鳥會做什麼?',
      options: [{ label: 'A', text: 'Fly in the rain 在雨中飛行' }, { label: 'B', text: 'Hide in trees 躲在樹上' }, { label: 'C', text: 'Swim in water 在水中游泳' }, { label: 'D', text: 'Dig holes 挖洞' }],
      answer: 'B',
    },
    {
      question: 'Which weather is best for going to the beach? 哪種天氣最適合去海灘?',
      options: [{ label: 'A', text: 'Snowy 下雪' }, { label: 'B', text: 'Sunny 晴天' }, { label: 'C', text: 'Rainy 雨天' }, { label: 'D', text: 'Windy 有風' }],
      answer: 'B',
    },
    {
      question: 'What happens to plants when it is sunny? 晴天時，植物會怎樣?',
      options: [{ label: 'A', text: 'They die 它們會死' }, { label: 'B', text: 'They grow 它們會生長' }, { label: 'C', text: 'They disappear 它們會消失' }, { label: 'D', text: 'They turn black 它們會變黑' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'People wear thick coats on sunny days. 人們在晴天穿厚外套。', answer: false },
    { statement: 'Snowy weather is very cold. 下雪的天氣非常冷。', answer: true },
    { statement: 'Frogs like to stay in the sun. 青蛙喜歡待在陽光下。', answer: false },
  ],
  open_ended: [
    {
      question: 'What can you do on a rainy day? 下雨天你可以做什麼?',
    },
    {
      question: 'How do you feel when it is very hot outside? 當外面很熱時，你感覺如何?',
    },
    {
      question: 'Name one animal that likes rainy weather. 說出一種喜歡下雨天的動物。',
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
            Weather changes every day and affects our lives in many ways. This lesson explores different weather conditions like sunny, rainy, and cloudy, and how they influence people, animals, and plants.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of some different weather conditions (e.g. cloudy, sunny, rainy, snowy, windy, temperature)</li>
                <li>Recognise the activities that people and animals engage in under different weather conditions</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a weather chart to track daily conditions</li>
              <li>Dress up paper dolls for different weather scenarios</li>
              <li>Match animals to their preferred weather conditions</li>
              <li>Conduct a simple evaporation experiment</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify common weather types and understand how weather affects daily activities and living things.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for nature's daily changes</li>
              <li>Respect for how weather impacts all living things</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how weather forecasts help communities prepare</li>
              <li>Recognizing how weather affects agriculture and food production</li>
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