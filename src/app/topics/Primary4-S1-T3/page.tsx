'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a light source? 以下哪一個是光源?',
      options: [{ label: 'A', text: 'Sunlight 陽光' }, { label: 'B', text: 'Moonlight 月光' }, { label: 'C', text: 'Reflection in a mirror 鏡子中的反射' }, { label: 'D', text: 'Shadow 影子' }],
      answer: 'A',
    },
    {
      question: 'What is moonlight an example of? 月光是哪種現象的例子?',
      options: [{ label: 'A', text: 'Light source 光源' }, { label: 'B', text: 'Reflected light 反射光' }, { label: 'C', text: 'Shadow 影子' }, { label: 'D', text: 'Heat energy 熱能' }],
      answer: 'B',
    },
    {
      question: 'Which surface can reflect light? 哪種表面可以反射光?',
      options: [{ label: 'A', text: 'Mirror 鏡子' }, { label: 'B', text: 'Black paper 黑紙' }, { label: 'C', text: 'Wooden table 木桌' }, { label: 'D', text: 'Fabric 布料' }],
      answer: 'A',
    },
    {
      question: 'When does your shadow appear the longest during the day? 一天中什麼時候你的影子最長?',
      options: [{ label: 'A', text: 'Noon 中午' }, { label: 'B', text: 'Morning or evening 早上或傍晚' }, { label: 'C', text: 'Night 夜晚' }, { label: 'D', text: 'Afternoon 下午' }],
      answer: 'B',
    },
    {
      question: 'What happens to the length of your shadow when the sun is directly overhead? 當太陽在正上方時，你的影子會發生什麼變化?',
      options: [{ label: 'A', text: 'It becomes longer 變長' }, { label: 'B', text: 'It becomes shorter 變短' }, { label: 'C', text: 'It disappears 消失' }, { label: 'D', text: 'It stays the same 保持不變' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a light source? 以下哪一個不是光源?',
      options: [{ label: 'A', text: 'Flashlight 手電筒' }, { label: 'B', text: 'Candle 蠟燭' }, { label: 'C', text: 'Moon 月亮' }, { label: 'D', text: 'Light bulb 燈泡' }],
      answer: 'C',
    },
    {
      question: 'What causes the reflection of light on a water surface? 什麼導致光在水面上的反射?',
      options: [{ label: 'A', text: 'The smooth surface of water 水的平滑表面' }, { label: 'B', text: 'The color of water 水的顏色' }, { label: 'C', text: 'The temperature of water 水的溫度' }, { label: 'D', text: 'The depth of water 水的深度' }],
      answer: 'A',
    },
    {
      question: 'Which of the following objects does NOT reflect light? 以下哪個物體不反射光?',
      options: [{ label: 'A', text: 'Mirror 鏡子' }, { label: 'B', text: 'Polished metal 拋光的金屬' }, { label: 'C', text: 'Black cloth 黑布' }, { label: 'D', text: 'Glass window 玻璃窗' }],
      answer: 'C',
    },
    {
      question: 'What time of day is your shadow the shortest? 一天中什麼時候你的影子最短?',
      options: [{ label: 'A', text: 'Morning 早上' }, { label: 'B', text: 'Noon 中午' }, { label: 'C', text: 'Evening 傍晚' }, { label: 'D', text: 'Night 夜晚' }],
      answer: 'B',
    },
    {
      question: 'Why can we see objects that are not light sources? 為什麼我們能看到不是光源的物體?',
      options: [{ label: 'A', text: 'Because they emit light 因為它們發出光' }, { label: 'B', text: 'Because they reflect light 因為它們反射光' }, { label: 'C', text: 'Because they are black 因為它們是黑色的' }, { label: 'D', text: 'Because they are hot 因為它們很熱' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Moonlight is a light source. 月光是光源。', answer: false },
    { statement: 'A shadow is formed when light is blocked by an object. 當光被物體擋住時會形成影子。', answer: true },
    { statement: 'The length of your shadow remains the same throughout the day. 你的影子在一天中的長度保持不變。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give two examples of light sources and two examples of objects that reflect light. 舉出兩個光源的例子和兩個反射光的物體的例子。',
    },
    {
      question: 'Explain why your shadow changes in length during the day. 解釋為什麼你的影子在一天中會改變長度。',
    },
    {
      question: 'Describe what happens to light when it hits a mirror. 描述光照射到鏡子時會發生什麼。',
    },
  ],
};

export default function PropertiesOfLightAndRelatedPhenomenaPage() {
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
            Properties of light and related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Light is a form of energy that enables us to see objects. It can come directly from sources like the sun or be reflected off surfaces like mirrors and water.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Differentiate the light coming from a light source (e.g. sunlight, light from a flashlight) from that reflected from objects (e.g. moonlight)</li>
                <li>Be aware of some examples of reflection of light (e.g. reflection on water surface, mirror)</li>
                <li>Recognise the changes in length and position of shadow under sunlight at different times</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Shadow tracing experiment at different times of day</li>
              <li>Mirror reflection angle investigation</li>
              <li>Creating a simple periscope to understand light reflection</li>
              <li>Comparing light reflection on different surfaces</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how light behaves, including reflection and shadow formation, and be able to identify natural and artificial light sources.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the science behind everyday phenomena</li>
              <li>Curiosity about how light interacts with different materials</li>
              <li>Respect for safety when working with bright light sources</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how mirrors are used in vehicles and buildings</li>
              <li>Exploring how solar panels utilize light energy</li>
              <li>Recognizing the importance of light in photography and art</li>
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