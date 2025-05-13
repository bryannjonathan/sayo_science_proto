'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'What causes day and night on Earth? 地球上晝夜變化的原因是什麼?',
      options: [{ label: 'A', text: 'The Earth\\'s rotation around its axis 地球繞著地軸自轉' }, { label: 'B', text: 'The Earth\\'s revolution around the Sun 地球繞著太陽公轉' }, { label: 'C', text: 'The Moon\\'s rotation around the Earth 月球繞著地球轉動' }, { label: 'D', text: 'The Sun\\'s movement around the galaxy 太陽繞著銀河系運動' }],
      answer: 'A',
    },
    {
      question: 'Why does the Earth have seasons? 為什麼地球有季節變化?',
      options: [{ label: 'A', text: 'Because the Earth\\'s distance from the Sun changes 因為地球與太陽的距離改變' }, { label: 'B', text: 'Because the Earth\\'s axis is tilted 因為地球的地軸是傾斜的' }, { label: 'C', text: 'Because the Moon blocks the Sun\\'s light 因為月球擋住太陽的光' }, { label: 'D', text: 'Because the Sun\\'s brightness changes 因為太陽的亮度改變' }],
      answer: 'B',
    },
    {
      question: 'When it is summer in the northern hemisphere, what season is it in the southern hemisphere? 當北半球是夏季時，南半球是什麼季節?',
      options: [{ label: 'A', text: 'Summer 夏季' }, { label: 'B', text: 'Winter 冬季' }, { label: 'C', text: 'Spring 春季' }, { label: 'D', text: 'Autumn 秋季' }],
      answer: 'B',
    },
    {
      question: 'How long does it take for the Earth to complete one rotation around its axis? 地球自轉一圈需要多長時間?',
      options: [{ label: 'A', text: '24 hours 24小時' }, { label: 'B', text: '30 days 30天' }, { label: 'C', text: '365 days 365天' }, { label: 'D', text: '12 hours 12小時' }],
      answer: 'A',
    },
    {
      question: 'What is the main reason for the difference in seasons between the northern and southern hemispheres? 北半球和南半球季節相反的主要原因是什么?',
      options: [{ label: 'A', text: 'The Earth\\'s tilted axis 地球的地軸傾斜' }, { label: 'B', text: 'The distance from the Sun 與太陽的距離' }, { label: 'C', text: 'The speed of the Earth\\'s rotation 地球自轉的速度' }, { label: 'D', text: 'The Moon\\'s gravity 月球的引力' }],
      answer: 'A',
    },
    {
      question: 'Which movement of the Earth causes a year? 地球的哪種運動造成一年的時間?',
      options: [{ label: 'A', text: 'Rotation 自轉' }, { label: 'B', text: 'Revolution around the Sun 繞太陽公轉' }, { label: 'C', text: 'Tilting of the axis 地軸傾斜' }, { label: 'D', text: 'Movement of the Moon 月球的運動' }],
      answer: 'B',
    },
    {
      question: 'What happens when one side of the Earth faces the Sun? 當地球的一側面向太陽時會發生什麼?',
      options: [{ label: 'A', text: 'It is daytime on that side 那一側是白天' }, { label: 'B', text: 'It is nighttime on that side 那一側是夜晚' }, { label: 'C', text: 'It is winter on that side 那一側是冬季' }, { label: 'D', text: 'It is summer on that side 那一側是夏季' }],
      answer: 'A',
    },
    {
      question: 'Why do we have longer days in summer? 為什麼夏季的白天較長?',
      options: [{ label: 'A', text: 'Because the Earth is closer to the Sun 因為地球離太陽較近' }, { label: 'B', text: 'Because the Earth\\'s tilted axis faces the Sun 因為地球傾斜的地軸面向太陽' }, { label: 'C', text: 'Because the Sun shines brighter 因為太陽更亮' }, { label: 'D', text: 'Because the Moon is farther away 因為月球較遠' }],
      answer: 'B',
    },
    {
      question: 'How does the Earth move to cause day and night? 地球如何運動導致晝夜變化?',
      options: [{ label: 'A', text: 'It spins on its axis 它繞地軸旋轉' }, { label: 'B', text: 'It moves around the Sun 它繞太陽運動' }, { label: 'C', text: 'It moves closer to the Sun 它靠近太陽' }, { label: 'D', text: 'It moves away from the Sun 它遠離太陽' }],
      answer: 'A',
    },
    {
      question: 'What is the angle of the Earth\\'s tilt? 地球的地軸傾斜角度是多少?',
      options: [{ label: 'A', text: '23.5 degrees 23.5度' }, { label: 'B', text: '45 degrees 45度' }, { label: 'C', text: '90 degrees 90度' }, { label: 'D', text: '0 degrees 0度' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The Earth\\'s rotation causes the seasons. 地球的自轉導致季節變化。', answer: false },
    { statement: 'The Earth\\'s axis is tilted at an angle of 23.5 degrees. 地球的地軸傾斜角度是23.5度。', answer: true },
    { statement: 'Day and night occur because the Earth revolves around the Sun. 晝夜變化是因為地球繞太陽公轉。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why the southern hemisphere experiences winter when the northern hemisphere has summer. 解釋為什麼當北半球是夏季時，南半球是冬季。',
    },
    {
      question: 'Describe how the Earth\\'s rotation causes day and night. 描述地球的自轉如何導致晝夜變化。',
    },
    {
      question: 'What would happen if the Earth\\'s axis was not tilted? 如果地球的地軸沒有傾斜，會發生什麼?',
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
            The movements of the Sun, Earth, and Moon create observable patterns on Earth including day and night cycles, seasons, and tides. These phenomena help us understand our planet's position and motion in the solar system.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Explain the relationship between the changes of day and night and the rotation of the Earth</li>
                <li>Be aware that the Earth's axis is tilted</li>
                <li>Explain that the difference in seasons in the Earth's northern and southern hemispheres are related to the Earth's revolution around the Sun and tilted axis</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Use a globe and flashlight to simulate day/night cycles</li>
              <li>Create a model showing Earth's tilted axis and orbit around the Sun</li>
              <li>Track and record sunrise/sunset times over a month</li>
              <li>Observe and document Moon phases over a lunar cycle</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how Earth's movements create observable patterns and be able to explain the causes of day/night, seasons, and tides.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the precision of Earth's natural cycles</li>
              <li>Curiosity about celestial phenomena</li>
              <li>Respect for scientific explanations of natural events</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of Earth's movements on human activities like agriculture and navigation</li>
              <li>Cultural significance of celestial events in different societies</li>
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