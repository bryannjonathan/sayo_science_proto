'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What covers more of the Earth\\'s surface: oceans or land? 地球表面覆蓋更多的是什麼：海洋還是陸地？',
      options: [{ label: 'A', text: 'Oceans 海洋' }, { label: 'B', text: 'Land 陸地' }, { label: 'C', text: 'They are the same 一樣多' }, { label: 'D', text: 'I don\\'t know 我不知道' }],
      answer: 'A',
    },
    {
      question: 'What surrounds the Earth\\'s surface? 地球表面被什麼包圍？',
      options: [{ label: 'A', text: 'Water 水' }, { label: 'B', text: 'Atmosphere (gases) 大氣（氣體）' }, { label: 'C', text: 'Rocks 岩石' }, { label: 'D', text: 'Fire 火' }],
      answer: 'B',
    },
    {
      question: 'Who shares the Earth as their home? 誰共享地球作為他們的家園？',
      options: [{ label: 'A', text: 'Only humans 只有人類' }, { label: 'B', text: 'Only animals 只有動物' }, { label: 'C', text: 'Humans, animals, and plants 人類、動物和植物' }, { label: 'D', text: 'Only plants 只有植物' }],
      answer: 'C',
    },
    {
      question: 'Why is it important to care for the Earth? 為什麼愛護地球很重要？',
      options: [{ label: 'A', text: 'Because it is our home 因為它是我們的家園' }, { label: 'B', text: 'Because it is pretty 因為它很漂亮' }, { label: 'C', text: 'Because it is big 因為它很大' }, { label: 'D', text: 'Because it is far away 因為它很遠' }],
      answer: 'A',
    },
    {
      question: 'What is the Earth\\'s surface mostly covered by? 地球表面大部分被什麼覆蓋？',
      options: [{ label: 'A', text: 'Sand 沙子' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Trees 樹木' }, { label: 'D', text: 'Mountains 山' }],
      answer: 'B',
    },
    {
      question: 'What do we call the layer of gases around the Earth? 我們稱地球周圍的氣體層為什麼？',
      options: [{ label: 'A', text: 'Ocean 海洋' }, { label: 'B', text: 'Atmosphere 大氣層' }, { label: 'C', text: 'Land 陸地' }, { label: 'D', text: 'Cloud 雲' }],
      answer: 'B',
    },
    {
      question: 'Which of these is NOT a part of the Earth\\'s surface? 以下哪一個不是地球表面的一部分？',
      options: [{ label: 'A', text: 'Oceans 海洋' }, { label: 'B', text: 'Land 陸地' }, { label: 'C', text: 'Atmosphere 大氣層' }, { label: 'D', text: 'Sun 太陽' }],
      answer: 'D',
    },
    {
      question: 'What do plants need from the Earth to grow? 植物需要地球上的什麼來生長？',
      options: [{ label: 'A', text: 'Water and soil 水和土壤' }, { label: 'B', text: 'Rocks and sand 岩石和沙子' }, { label: 'C', text: 'Fire and air 火和空氣' }, { label: 'D', text: 'Metal and plastic 金屬和塑料' }],
      answer: 'A',
    },
    {
      question: 'How can we care for the Earth? 我們如何愛護地球？',
      options: [{ label: 'A', text: 'By planting trees 種樹' }, { label: 'B', text: 'By throwing trash everywhere 到處扔垃圾' }, { label: 'C', text: 'By wasting water 浪費水' }, { label: 'D', text: 'By cutting down trees 砍樹' }],
      answer: 'A',
    },
    {
      question: 'What is the Earth\\'s home for all living things? 地球是什麼的家園？',
      options: [{ label: 'A', text: 'Only for humans 只是人類的家園' }, { label: 'B', text: 'Only for animals 只是動物的家園' }, { label: 'C', text: 'For all living things 所有生物的家園' }, { label: 'D', text: 'Only for plants 只是植物的家園' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'The Earth\\'s surface is mostly covered by land. 地球表面大部分被陸地覆蓋。', answer: false },
    { statement: 'The atmosphere is a layer of gases around the Earth. 大氣層是地球周圍的一層氣體。', answer: true },
    { statement: 'Only humans live on Earth. 只有人類住在地球上。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name one way you can help take care of the Earth. 說出一種你可以幫助照顧地球的方法。',
    },
    {
      question: 'What are two things that cover the Earth\\'s surface? 說出覆蓋地球表面的兩樣東西。',
    },
    {
      question: 'Why is the Earth important to us? 為什麼地球對我們很重要？',
    },
  ],
};

export default function EarthsCharacteristicsPage() {
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
             Earth’s characteristics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Earth is our home planet with unique features like oceans, land, and atmosphere. It supports life for humans, animals, and plants, making it essential to understand and protect its characteristics.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that the surface of the Earth is covered by oceans and land, and that oceans cover more areas than land</li>
                <li>Be aware that the surface of the Earth is surrounded by the atmosphere (gases)</li>
                <li>Be aware that the Earth is the shared home for humans, animals and plants</li>
                <li>Understand the importance of caring for the Earth</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a collage showing Earth's land and water features</li>
              <li>Conduct a simple experiment to demonstrate the atmosphere</li>
              <li>Plant seeds to observe how Earth supports plant life</li>
              <li>Role-play as different Earth inhabitants to understand shared home concept</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will recognize Earth's key features and understand why it's important to care for our planet as a shared home for all living things.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing appreciation for Earth as our shared home</li>
              <li>Cultivating responsibility for environmental care</li>
              <li>Respecting all forms of life on Earth</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how human activities impact Earth's characteristics</li>
              <li>Exploring technologies that help monitor and protect Earth</li>
              <li>Recognizing global efforts in environmental conservation</li>
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