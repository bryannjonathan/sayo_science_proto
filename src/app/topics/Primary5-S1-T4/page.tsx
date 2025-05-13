'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which material is commonly used as an insulator in electrical wires? 哪種材料通常用作電線的絕緣體?',
      options: [{ label: 'A', text: 'Copper 銅' }, { label: 'B', text: 'Aluminum 鋁' }, { label: 'C', text: 'Rubber 橡膠' }, { label: 'D', text: 'Silver 銀' }],
      answer: 'C',
    },
    {
      question: 'Why should you never touch electrical appliances with wet hands? 為什麼不應該用濕手觸摸電器?',
      options: [{ label: 'A', text: 'Water makes the appliance dirty 水會弄髒電器' }, { label: 'B', text: 'Water can conduct electricity and cause electric shock 水能導電並導致觸電' }, { label: 'C', text: 'Water can damage the appliance 水會損壞電器' }, { label: 'D', text: 'Water makes the appliance slippery 水會使電器變滑' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a good conductor of electricity? 以下哪種是良好的導電體?',
      options: [{ label: 'A', text: 'Wood 木頭' }, { label: 'B', text: 'Plastic 塑膠' }, { label: 'C', text: 'Iron 鐵' }, { label: 'D', text: 'Glass 玻璃' }],
      answer: 'C',
    },
    {
      question: 'What is the purpose of using insulating materials in household appliances? 家用電器使用絕緣材料的目的是什麼?',
      options: [{ label: 'A', text: 'To make the appliance look colorful 使電器看起來色彩繽紛' }, { label: 'B', text: 'To prevent electric shocks 防止觸電' }, { label: 'C', text: 'To make the appliance heavier 使電器更重' }, { label: 'D', text: 'To reduce the cost of the appliance 降低電器的成本' }],
      answer: 'B',
    },
    {
      question: 'Which of the following actions is safe when using electricity? 以下哪種行為在使用電力時是安全的?',
      options: [{ label: 'A', text: 'Pulling a plug by its cord 拉電線拔出插頭' }, { label: 'B', text: 'Using a damaged wire 使用損壞的電線' }, { label: 'C', text: 'Turning off the power before repairing an appliance 修理電器前關閉電源' }, { label: 'D', text: 'Inserting metal objects into sockets 將金屬物體插入插座' }],
      answer: 'C',
    },
    {
      question: 'What happens when too many appliances are plugged into one socket? 當太多電器插在同一個插座時會發生什麼?',
      options: [{ label: 'A', text: 'The socket becomes colorful 插座會變得色彩繽紛' }, { label: 'B', text: 'It can cause overheating and a fire 可能導致過熱和火災' }, { label: 'C', text: 'The appliances work faster 電器會工作得更快' }, { label: 'D', text: 'Nothing happens 什麼都不會發生' }],
      answer: 'B',
    },
    {
      question: 'Which part of a plug is usually made of insulating material? 插頭的哪個部分通常由絕緣材料製成?',
      options: [{ label: 'A', text: 'The metal pins 金屬插腳' }, { label: 'B', text: 'The outer casing 外殼' }, { label: 'C', text: 'The wires inside 內部的電線' }, { label: 'D', text: 'All of the above 以上全部' }],
      answer: 'B',
    },
    {
      question: 'Why are electrical wires usually made of copper? 為什麼電線通常由銅製成?',
      options: [{ label: 'A', text: 'Copper is a good conductor of electricity 銅是良好的導電體' }, { label: 'B', text: 'Copper is cheap 銅很便宜' }, { label: 'C', text: 'Copper is colorful 銅色彩繽紛' }, { label: 'D', text: 'Copper is heavy 銅很重' }],
      answer: 'A',
    },
    {
      question: 'What should you do if you see a damaged electrical wire? 如果你看到損壞的電線，你應該怎麼做?',
      options: [{ label: 'A', text: 'Touch it to see if it is still working 觸摸它看看是否還能工作' }, { label: 'B', text: 'Tell an adult and stay away from it 告訴成年人並遠離它' }, { label: 'C', text: 'Use tape to fix it yourself 自己用膠帶修復它' }, { label: 'D', text: 'Ignore it 忽略它' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a safe practice with electricity? 以下哪種行為在使用電力時是不安全的?',
      options: [{ label: 'A', text: 'Using a plug with a safety mark 使用帶有安全標誌的插頭' }, { label: 'B', text: 'Overloading a socket 使插座超負荷' }, { label: 'C', text: 'Keeping electrical appliances away from water 讓電器遠離水' }, { label: 'D', text: 'Turning off appliances when not in use 不使用時關閉電器' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Water is a good conductor of electricity. 水是良好的導電體。', answer: true },
    { statement: 'It is safe to use a hairdryer near a bathtub filled with water. 在裝滿水的浴缸附近使用吹風機是安全的。', answer: false },
    { statement: 'Insulating materials are used to protect people from electric shocks. 絕緣材料用於保護人們免受觸電。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain why the outer casing of a plug is made of insulating material. 解釋為什麼插頭的外殼由絕緣材料製成。',
    },
    {
      question: 'Describe two safety rules you should follow when using electrical appliances. 描述使用電器時應遵循的兩條安全規則。',
    },
    {
      question: 'Why is it important to use conductive materials for the wires inside electrical appliances? 為什麼電器內部的電線使用導電材料很重要?',
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
            Electricity is a form of energy that powers many devices in our daily lives. This topic explores how electricity behaves, its properties, and safety measures when using electrical appliances.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise how to use electricity safely</li>
                <li>Explain the reasons why different parts of household appliances are made from conductive and insulating materials respectively</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct simple experiments to test materials for conductivity</li>
              <li>Create a poster illustrating electrical safety rules</li>
              <li>Build a simple circuit using batteries, wires, and bulbs</li>
              <li>Identify conductive and insulating materials in household items</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand basic electrical properties and demonstrate safe practices when handling electrical devices.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the importance of electrical safety</li>
              <li>Responsibility in using electrical appliances</li>
              <li>Curiosity about how electricity works in daily life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how electricity impacts modern society</li>
              <li>Exploring energy conservation in electrical usage</li>
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