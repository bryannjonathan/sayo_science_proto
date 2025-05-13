'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which material is a good conductor of electricity? 哪種材料是良好的電導體?',
      options: [{ label: 'A', text: 'Copper 銅' }, { label: 'B', text: 'Wood 木頭' }, { label: 'C', text: 'Plastic 塑膠' }, { label: 'D', text: 'Rubber 橡膠' }],
      answer: 'A',
    },
    {
      question: 'Why is iron commonly used to make cooking utensils? 為什麼鐵常用來製作烹飪用具?',
      options: [{ label: 'A', text: 'It conducts heat well 它導熱性好' }, { label: 'B', text: 'It is lightweight 它很輕' }, { label: 'C', text: 'It does not rust 它不會生鏽' }, { label: 'D', text: 'It is cheap 它很便宜' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a non-metal? 以下哪種是非金屬?',
      options: [{ label: 'A', text: 'Aluminum 鋁' }, { label: 'B', text: 'Gold 金' }, { label: 'C', text: 'Sulfur 硫' }, { label: 'D', text: 'Silver 銀' }],
      answer: 'C',
    },
    {
      question: 'What property makes copper suitable for electrical wires? 銅的什麼特性使其適合用於電線?',
      options: [{ label: 'A', text: 'High electrical conductivity 高導電性' }, { label: 'B', text: 'High thermal insulation 高隔熱性' }, { label: 'C', text: 'Low melting point 低熔點' }, { label: 'D', text: 'Flexibility 柔韌性' }],
      answer: 'A',
    },
    {
      question: 'Which material would be best for thermal insulation? 哪種材料最適合隔熱?',
      options: [{ label: 'A', text: 'Iron 鐵' }, { label: 'B', text: 'Copper 銅' }, { label: 'C', text: 'Wool 羊毛' }, { label: 'D', text: 'Aluminum 鋁' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a property of most metals? 以下哪項是大多數金屬的特性?',
      options: [{ label: 'A', text: 'Good conductor of heat 良好的導熱體' }, { label: 'B', text: 'Poor conductor of electricity 不良的導電體' }, { label: 'C', text: 'Brittle 易碎' }, { label: 'D', text: 'Transparent 透明' }],
      answer: 'A',
    },
    {
      question: 'Why is wood not used to make electrical wires? 為什麼不用木頭製作電線?',
      options: [{ label: 'A', text: 'It does not conduct electricity 它不導電' }, { label: 'B', text: 'It is too heavy 它太重' }, { label: 'C', text: 'It melts easily 它容易熔化' }, { label: 'D', text: 'It is too expensive 它太貴' }],
      answer: 'A',
    },
    {
      question: 'Which metal is commonly used for making coins? 哪種金屬常用於製作硬幣?',
      options: [{ label: 'A', text: 'Copper 銅' }, { label: 'B', text: 'Mercury 汞' }, { label: 'C', text: 'Sodium 鈉' }, { label: 'D', text: 'Potassium 鉀' }],
      answer: 'A',
    },
    {
      question: 'What is the main reason for using aluminum in cooking foil? 使用鋁製作烹飪箔的主要原因是什么?',
      options: [{ label: 'A', text: 'It conducts heat well 它導熱性好' }, { label: 'B', text: 'It is magnetic 它有磁性' }, { label: 'C', text: 'It is transparent 它是透明的' }, { label: 'D', text: 'It is very heavy 它非常重' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a property of metals? 以下哪項不是金屬的特性?',
      options: [{ label: 'A', text: 'Malleable 可延展的' }, { label: 'B', text: 'Dull 暗淡的' }, { label: 'C', text: 'Conductive 導電的' }, { label: 'D', text: 'Shiny 有光澤的' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'All metals are good conductors of electricity. 所有金屬都是良好的電導體。', answer: true },
    { statement: 'Plastic is a better thermal conductor than metal. 塑膠的導熱性比金屬好。', answer: false },
    { statement: 'Iron is used to make cooking utensils because it conducts heat well. 鐵用於製作烹飪用具是因為它導熱性好。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of metals and explain one use for each based on their properties. 舉出兩種金屬的例子，並根據它們的特性解釋每種金屬的一個用途。',
    },
    {
      question: 'Why is it important to use materials with good thermal insulation in buildings? 為什麼在建築物中使用具有良好隔熱性能的材料很重要?',
    },
    {
      question: 'Describe an experiment to test whether a material is a good conductor of heat. 描述一個實驗來測試一種材料是否是良好的導熱體。',
    },
  ],
};

export default function PropertiesOfMatterPage() {
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
             Properties of matter
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Matter has various properties that determine its behavior and uses. This topic explores the differences between metals and non-metals, focusing on their electrical and thermal conductivity properties.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Compare some physical properties (electrical conductivity and thermal conductivity) of metals and non-metals</li>
                <li>Relate the properties of metals to their uses (e.g. copper which conducts electricity well can be used to make electrical wires; iron that conducts heat well can be used to make cooking utensils)</li>
                <li>Determine whether a material is suitable for thermal conduction or thermal insulation based on its properties</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct experiments to test materials for electrical conductivity</li>
              <li>Create a thermal conductivity test station with different materials</li>
              <li>Design a poster showing common uses of metals based on their properties</li>
              <li>Sort everyday objects into metal and non-metal categories</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify and classify materials based on their conductive properties and understand how these properties determine real-world applications.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how material properties affect our daily lives</li>
              <li>Curiosity about why different materials are used for specific purposes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding material choices in household items and infrastructure</li>
              <li>Exploring sustainable alternatives to traditional materials</li>
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