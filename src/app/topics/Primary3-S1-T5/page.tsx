'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which simple machine helps to reduce the force needed to lift heavy objects by changing the direction of the force? 哪種簡單機械可以通過改變力的方向來減少舉起重物所需的力?',
      options: [{ label: 'A', text: 'Roller 滾輪' }, { label: 'B', text: 'Inclined plane 斜面' }, { label: 'C', text: 'Pulley 滑輪' }, { label: 'D', text: 'Lever 槓桿' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is an example of an inclined plane? 以下哪個是斜面的例子?',
      options: [{ label: 'A', text: 'Wheelbarrow 手推車' }, { label: 'B', text: 'Ramp 斜坡' }, { label: 'C', text: 'Elevator 電梯' }, { label: 'D', text: 'Screwdriver 螺絲刀' }],
      answer: 'B',
    },
    {
      question: 'What is the main function of rollers? 滾輪的主要功能是什麼?',
      options: [{ label: 'A', text: 'To change the direction of force 改變力的方向' }, { label: 'B', text: 'To reduce friction 減少摩擦' }, { label: 'C', text: 'To lift heavy objects 舉起重物' }, { label: 'D', text: 'To cut objects 切割物體' }],
      answer: 'B',
    },
    {
      question: 'Which simple machine is used in an elevator? 電梯中使用了哪種簡單機械?',
      options: [{ label: 'A', text: 'Roller 滾輪' }, { label: 'B', text: 'Inclined plane 斜面' }, { label: 'C', text: 'Pulley 滑輪' }, { label: 'D', text: 'Lever 槓桿' }],
      answer: 'C',
    },
    {
      question: 'How does an inclined plane help us? 斜面如何幫助我們?',
      options: [{ label: 'A', text: 'By reducing the force needed to move objects 通過減少移動物體所需的力' }, { label: 'B', text: 'By changing the direction of force 通過改變力的方向' }, { label: 'C', text: 'By increasing friction 通過增加摩擦' }, { label: 'D', text: 'By making objects heavier 通過使物體更重' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a simple machine? 以下哪個不是簡單機械?',
      options: [{ label: 'A', text: 'Pulley 滑輪' }, { label: 'B', text: 'Inclined plane 斜面' }, { label: 'C', text: 'Roller 滾輪' }, { label: 'D', text: 'Computer 電腦' }],
      answer: 'D',
    },
    {
      question: 'What is the function of a fixed pulley? 固定滑輪的功能是什麼?',
      options: [{ label: 'A', text: 'To reduce the force needed 減少所需的力' }, { label: 'B', text: 'To change the direction of force 改變力的方向' }, { label: 'C', text: 'To increase friction 增加摩擦' }, { label: 'D', text: 'To make objects heavier 使物體更重' }],
      answer: 'B',
    },
    {
      question: 'Which simple machine is used in a wheelbarrow? 手推車中使用了哪種簡單機械?',
      options: [{ label: 'A', text: 'Roller 滾輪' }, { label: 'B', text: 'Inclined plane 斜面' }, { label: 'C', text: 'Pulley 滑輪' }, { label: 'D', text: 'Lever 槓桿' }],
      answer: 'A',
    },
    {
      question: 'How do rollers help in moving heavy objects? 滾輪如何幫助移動重物?',
      options: [{ label: 'A', text: 'By reducing friction 通過減少摩擦' }, { label: 'B', text: 'By changing the direction of force 通過改變力的方向' }, { label: 'C', text: 'By increasing the force needed 通過增加所需的力' }, { label: 'D', text: 'By making objects lighter 通過使物體更輕' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a pulley? 以下哪個是滑輪的例子?',
      options: [{ label: 'A', text: 'Wheel 輪子' }, { label: 'B', text: 'Flagpole 旗桿' }, { label: 'C', text: 'Ramp 斜坡' }, { label: 'D', text: 'Screw 螺絲' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'A fixed pulley can reduce the amount of force needed to lift an object. 固定滑輪可以減少舉起物體所需的力。', answer: false },
    { statement: 'Rollers help to reduce friction when moving heavy objects. 滾輪可以幫助減少移動重物時的摩擦。', answer: true },
    { statement: 'An inclined plane makes it easier to move objects by increasing the distance over which the force is applied. 斜面通過增加施力距離使移動物體更容易。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of how inclined planes are used in daily life. 舉出兩個斜面在日常生活中的應用例子。',
    },
    {
      question: 'Explain how a fixed pulley helps us to lift heavy objects. 解釋固定滑輪如何幫助我們舉起重物。',
    },
    {
      question: 'Why are rollers useful for moving heavy objects? 為什麼滾輪對於移動重物很有用?',
    },
  ],
};

export default function SimpleMachinesPage() {
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
             Simple machines
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Simple machines are basic mechanical devices that help us do work more easily. They include rollers, inclined planes, and pulleys which reduce effort by changing the direction or amount of force needed.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the functions of simple machines such as rollers, inclined planes and pulleys (fixed pulley) (e.g. reducing the force required, changing the direction of force)</li>
                <li>Give examples of daily applications of rollers, inclined planes and pulleys (e.g. wheels, ramps, elevators)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a simple pulley system using string and a spool</li>
              <li>Experiment with different inclined planes to move objects</li>
              <li>Create a wheel-and-axle model using everyday materials</li>
              <li>Compare effort needed with/without simple machines</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how simple machines make work easier and identify their applications in everyday objects and tools.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for human ingenuity in creating tools</li>
              <li>Curiosity about how everyday objects work</li>
              <li>Safety awareness when using tools and machines</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Historical development of simple machines in ancient civilizations</li>
              <li>Modern applications in construction and transportation</li>
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