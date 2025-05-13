'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is needed for a light bulb to light up in a simple circuit? 在簡單電路中，燈泡需要什麼才能亮起來?',
      options: [{ label: 'A', text: 'A complete circuit 完整的電路' }, { label: 'B', text: 'Only a battery 只有電池' }, { label: 'C', text: 'Only wires 只有電線' }, { label: 'D', text: 'A switch 開關' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT part of a simple closed circuit? 以下哪一項不是簡單閉合電路的一部分?',
      options: [{ label: 'A', text: 'Battery 電池' }, { label: 'B', text: 'Light bulb 燈泡' }, { label: 'C', text: 'Wire 電線' }, { label: 'D', text: 'Water 水' }],
      answer: 'D',
    },
    {
      question: 'What happens if there is a break in the circuit? 如果電路中斷會發生什麼?',
      options: [{ label: 'A', text: 'The light bulb stays on 燈泡保持亮著' }, { label: 'B', text: 'The light bulb turns off 燈泡熄滅' }, { label: 'C', text: 'The battery stops working 電池停止工作' }, { label: 'D', text: 'Nothing happens 沒有任何變化' }],
      answer: 'B',
    },
    {
      question: 'Which material is a good conductor of electricity? 哪種材料是良好的電導體?',
      options: [{ label: 'A', text: 'Wood 木頭' }, { label: 'B', text: 'Plastic 塑膠' }, { label: 'C', text: 'Copper 銅' }, { label: 'D', text: 'Rubber 橡膠' }],
      answer: 'C',
    },
    {
      question: 'What is the purpose of a switch in a circuit? 電路中開關的作用是什麼?',
      options: [{ label: 'A', text: 'To break or complete the circuit 斷開或閉合電路' }, { label: 'B', text: 'To make the battery last longer 讓電池更耐用' }, { label: 'C', text: 'To change the color of the light bulb 改變燈泡的顏色' }, { label: 'D', text: 'To make the wires longer 讓電線更長' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a simple electrical appliance? 以下哪一項是簡單電器的例子?',
      options: [{ label: 'A', text: 'Television 電視' }, { label: 'B', text: 'Refrigerator 冰箱' }, { label: 'C', text: 'Torchlight 手電筒' }, { label: 'D', text: 'Washing machine 洗衣機' }],
      answer: 'C',
    },
    {
      question: 'What is the main source of energy in a simple circuit? 簡單電路中的主要能量來源是什麼?',
      options: [{ label: 'A', text: 'Battery 電池' }, { label: 'B', text: 'Light bulb 燈泡' }, { label: 'C', text: 'Switch 開關' }, { label: 'D', text: 'Wire 電線' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is needed to make a simple closed circuit? 以下哪一項是製作簡單閉合電路所需的?',
      options: [{ label: 'A', text: 'Battery, wire, and light bulb 電池、電線和燈泡' }, { label: 'B', text: 'Battery and wire only 只有電池和電線' }, { label: 'C', text: 'Wire and light bulb only 只有電線和燈泡' }, { label: 'D', text: 'Battery and light bulb only 只有電池和燈泡' }],
      answer: 'A',
    },
    {
      question: 'What happens if you remove the battery from a circuit? 如果從電路中移除電池會發生什麼?',
      options: [{ label: 'A', text: 'The light bulb stays on 燈泡保持亮著' }, { label: 'B', text: 'The light bulb turns off 燈泡熄滅' }, { label: 'C', text: 'The wire melts 電線熔化' }, { label: 'D', text: 'Nothing happens 沒有任何變化' }],
      answer: 'B',
    },
    {
      question: 'Why is a complete circuit important for electrical appliances? 為什麼完整的電路對電器很重要?',
      options: [{ label: 'A', text: 'It allows electricity to flow 它讓電流動' }, { label: 'B', text: 'It makes the appliance look nice 它讓電器看起來好看' }, { label: 'C', text: 'It prevents the battery from being used 它防止電池被使用' }, { label: 'D', text: 'It makes the wires longer 它讓電線更長' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'A simple closed circuit must include a battery, wires, and a light bulb. 一個簡單的閉合電路必須包括電池、電線和燈泡。', answer: true },
    { statement: 'Electricity can flow through an open circuit. 電流可以流過斷開的電路。', answer: false },
    { statement: 'A switch is used to control the flow of electricity in a circuit. 開關用於控制電路中的電流。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain why a light bulb will not light up if the circuit is broken. 解釋為什麼如果電路斷開，燈泡不會亮起來。',
    },
    {
      question: 'Describe the role of a battery in a simple circuit. 描述電池在簡單電路中的作用。',
    },
    {
      question: 'What materials would you use to make a simple closed circuit? List at least three. 你會用哪些材料來製作一個簡單的閉合電路？列出至少三種。',
    },
  ],
};

export default function PropertiesOfElectricityAndRelatedPhenomenaPage() {
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
             Properties of electricity and related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Electricity is a form of energy that powers many devices in our daily lives. This topic explores how simple circuits work and the properties that allow electricity to flow through materials.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise simple closed circuits</li>
                <li>Explain that a complete circuit is needed for the functioning of simple electrical appliances (e.g. light bulb)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a simple circuit using batteries, wires, and a bulb</li>
              <li>Test different materials to see which conduct electricity</li>
              <li>Experiment with switches to control circuit flow</li>
              <li>Create a circuit diagram using symbols</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how electricity flows in circuits and identify components needed for a complete circuit.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how electricity powers our daily lives</li>
              <li>Curiosity about electrical phenomena in nature</li>
              <li>Safety awareness when handling electrical components</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding household electrical systems</li>
              <li>Recognizing energy conservation in circuit design</li>
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