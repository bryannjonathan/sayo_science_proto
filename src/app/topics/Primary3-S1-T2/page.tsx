'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What happens to water when it is heated to 100°C? 當水被加熱到100°C時會發生什麼？',
      options: [{ label: 'A', text: 'It freezes 它會結冰' }, { label: 'B', text: 'It boils 它會沸騰' }, { label: 'C', text: 'It condenses 它會凝結' }, { label: 'D', text: 'It evaporates 它會蒸發' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of condensation? 以下哪個是凝結的例子？',
      options: [{ label: 'A', text: 'Ice melting 冰融化' }, { label: 'B', text: 'Water droplets on a cold drink 冷飲上的水滴' }, { label: 'C', text: 'Sugar dissolving in water 糖溶解在水中' }, { label: 'D', text: 'Clothes drying in the sun 衣服在陽光下曬乾' }],
      answer: 'B',
    },
    {
      question: 'What is the process called when water turns into ice? 水變成冰的過程叫什麼？',
      options: [{ label: 'A', text: 'Melting 融化' }, { label: 'B', text: 'Freezing 凝固' }, { label: 'C', text: 'Boiling 沸騰' }, { label: 'D', text: 'Evaporation 蒸發' }],
      answer: 'B',
    },
    {
      question: 'Which factor does NOT speed up dissolving? 以下哪個因素不會加速溶解？',
      options: [{ label: 'A', text: 'Stirring 攪拌' }, { label: 'B', text: 'Higher water temperature 更高的水溫' }, { label: 'C', text: 'Larger surface area of solute 溶質的更大表面積' }, { label: 'D', text: 'Less solute 更少的溶質' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is a physical change? 以下哪個是物理變化？',
      options: [{ label: 'A', text: 'Burning paper 燒紙' }, { label: 'B', text: 'Rusting iron 鐵生鏽' }, { label: 'C', text: 'Melting ice cream 融化的冰淇淋' }, { label: 'D', text: 'Cooking an egg 煮雞蛋' }],
      answer: 'C',
    },
    {
      question: 'What is the process called when water turns into water vapor? 水變成水蒸氣的過程叫什麼？',
      options: [{ label: 'A', text: 'Condensation 凝結' }, { label: 'B', text: 'Freezing 凝固' }, { label: 'C', text: 'Evaporation 蒸發' }, { label: 'D', text: 'Melting 融化' }],
      answer: 'C',
    },
    {
      question: 'Which solution has a higher concentration? 哪個溶液的濃度更高？',
      options: [{ label: 'A', text: '100 mL water with 10 g sugar 100毫升水加10克糖' }, { label: 'B', text: '100 mL water with 5 g sugar 100毫升水加5克糖' }, { label: 'C', text: '200 mL water with 10 g sugar 200毫升水加10克糖' }, { label: 'D', text: '200 mL water with 5 g sugar 200毫升水加5克糖' }],
      answer: 'A',
    },
    {
      question: 'What happens to water when it is cooled below 0°C? 當水冷卻到0°C以下時會發生什麼？',
      options: [{ label: 'A', text: 'It boils 它會沸騰' }, { label: 'B', text: 'It evaporates 它會蒸發' }, { label: 'C', text: 'It freezes 它會結冰' }, { label: 'D', text: 'It condenses 它會凝結' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is an example of evaporation? 以下哪個是蒸發的例子？',
      options: [{ label: 'A', text: 'Water droplets on a mirror 鏡子上的水滴' }, { label: 'B', text: 'Clothes drying in the sun 衣服在陽光下曬乾' }, { label: 'C', text: 'Ice cubes forming in a freezer 冰櫃中形成的冰塊' }, { label: 'D', text: 'Sugar dissolving in tea 糖溶解在茶中' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a chemical change? 以下哪個是化學變化？',
      options: [{ label: 'A', text: 'Cutting paper 剪紙' }, { label: 'B', text: 'Melting butter 融化黃油' }, { label: 'C', text: 'Burning wood 燃燒木材' }, { label: 'D', text: 'Breaking glass 打破玻璃' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Melting ice is a chemical change. 冰融化是化學變化。', answer: false },
    { statement: 'Water droplets on a cold drink are an example of condensation. 冷飲上的水滴是凝結的例子。', answer: true },
    { statement: 'Higher water temperature slows down dissolving. 更高的水溫會減慢溶解。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give two examples of physical changes in daily life. 舉出兩個日常生活中物理變化的例子。',
    },
    {
      question: 'Explain why stirring speeds up dissolving. 解釋為什麼攪拌會加速溶解。',
    },
    {
      question: 'Describe how you can make a solution with high concentration. 描述如何製作高濃度的溶液。',
    },
  ],
}

export default function PhysicalChangeAndChemicalChangePage() {
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
            Physical change and chemical change
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Physical changes alter the form of matter without changing its chemical composition, while chemical changes result in new substances. Understanding these changes helps explain everyday phenomena like melting ice or rusting metal.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Describe the processes (melting, boiling, freezing, condensation, evaporation) of the change in states of water</li>
                <li>Give examples of daily phenomena of evaporation and condensation (e.g. clothes drying in the sun, water droplets condensing on the surface of cold drink)</li>
                <li>Be aware of some factors that speed up the dissolving of substances in water (e.g. surface area of solute, water temperature, stirring speed)</li>
                <li>Distinguish between high and low concentrations of solution (e.g. same volume of water with different amounts of sugar added)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Observe ice melting and water boiling to identify physical changes</li>
              <li>Conduct experiments with sugar dissolving at different temperatures</li>
              <li>Create a chart comparing physical and chemical changes in everyday objects</li>
              <li>Demonstrate condensation by breathing on a cold surface</li>
              <li>Investigate rust formation on different metals</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to differentiate between physical and chemical changes and explain common examples from daily life. They will understand how temperature affects states of matter and dissolving processes.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the scientific explanations behind everyday phenomena</li>
              <li>Curiosity about how materials change in different conditions</li>
              <li>Responsibility when handling materials that undergo chemical changes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding food preservation methods based on chemical changes</li>
              <li>Recognizing environmental impacts of chemical changes like rusting</li>
              <li>Applying knowledge of physical changes in cooking and cleaning</li>
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