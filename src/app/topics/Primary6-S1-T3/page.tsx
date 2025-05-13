'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following devices uses the heating effect of electric current? 以下哪種設備利用了電流的熱效應?',
      options: [{ label: 'A', text: 'Electric heater 電暖器' }, { label: 'B', text: 'Electromagnetic crane 電磁起重機' }, { label: 'C', text: 'Electric fan 電風扇' }, { label: 'D', text: 'LED lamp LED燈' }],
      answer: 'A',
    },
    {
      question: 'What is the main effect of electric current used in an electromagnetic crane? 電磁起重機主要利用了電流的什麼效應?',
      options: [{ label: 'A', text: 'Heating effect 熱效應' }, { label: 'B', text: 'Magnetic effect 磁效應' }, { label: 'C', text: 'Lighting effect 發光效應' }, { label: 'D', text: 'Chemical effect 化學效應' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT an example of the heating effect of electric current? 以下哪項不是電流熱效應的例子?',
      options: [{ label: 'A', text: 'Hairdryer 吹風機' }, { label: 'B', text: 'Toaster 烤麵包機' }, { label: 'C', text: 'Electric kettle 電熱水壺' }, { label: 'D', text: 'Electric doorbell 電門鈴' }],
      answer: 'D',
    },
    {
      question: 'What happens when electric current passes through a wire? 當電流通過電線時會發生什麼?',
      options: [{ label: 'A', text: 'It produces heat and light 它會產生熱和光' }, { label: 'B', text: 'It produces a magnetic field 它會產生磁場' }, { label: 'C', text: 'It can cause the wire to melt 它可能導致電線熔化' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which device uses both the heating and magnetic effects of electric current? 哪種設備同時利用了電流的熱效應和磁效應?',
      options: [{ label: 'A', text: 'Electric iron 電熨斗' }, { label: 'B', text: 'Electric motor 電動機' }, { label: 'C', text: 'Incandescent bulb 白熾燈泡' }, { label: 'D', text: 'Electromagnet 電磁鐵' }],
      answer: 'B',
    },
    {
      question: 'Why does a hairdryer produce hot air? 為什麼吹風機會產生熱風?',
      options: [{ label: 'A', text: 'Due to the magnetic effect of electric current 由於電流的磁效應' }, { label: 'B', text: 'Due to the heating effect of electric current 由於電流的熱效應' }, { label: 'C', text: 'Due to the chemical effect of electric current 由於電流的化學效應' }, { label: 'D', text: 'Due to the lighting effect of electric current 由於電流的發光效應' }],
      answer: 'B',
    },
    {
      question: 'What is the purpose of the electromagnet in an electromagnetic lock? 電磁鎖中的電磁鐵有什麼作用?',
      options: [{ label: 'A', text: 'To generate heat 產生熱量' }, { label: 'B', text: 'To produce light 產生光' }, { label: 'C', text: 'To create a strong magnetic force 產生強大的磁力' }, { label: 'D', text: 'To make a sound 發出聲音' }],
      answer: 'C',
    },
    {
      question: 'Which material is commonly used as a heating element in electric heaters? 電暖器中常用的加熱元件是什麼材料?',
      options: [{ label: 'A', text: 'Copper 銅' }, { label: 'B', text: 'Aluminum 鋁' }, { label: 'C', text: 'Nichrome 鎳鉻合金' }, { label: 'D', text: 'Silver 銀' }],
      answer: 'C',
    },
    {
      question: 'What safety feature is important for devices using the heating effect of electricity? 對於利用電熱效應的設備，什麼安全功能很重要?',
      options: [{ label: 'A', text: 'Thermostat 恆溫器' }, { label: 'B', text: 'Electromagnet 電磁鐵' }, { label: 'C', text: 'Transformer 變壓器' }, { label: 'D', text: 'Capacitor 電容器' }],
      answer: 'A',
    },
    {
      question: 'How can the strength of an electromagnet be increased? 如何增強電磁鐵的強度?',
      options: [{ label: 'A', text: 'Increase the number of coils 增加線圈數量' }, { label: 'B', text: 'Increase the current 增加電流' }, { label: 'C', text: 'Use an iron core 使用鐵芯' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Electric current can produce both heat and magnetic effects. 電流可以同時產生熱效應和磁效應。', answer: true },
    { statement: 'An electric fan uses the magnetic effect of electric current to operate. 電風扇利用電流的磁效應來運作。', answer: false },
    { statement: 'Electromagnetic locks are commonly used in secure buildings. 電磁鎖常用於安全建築中。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of devices that use the heating effect of electric current and explain how they work. 舉出兩個利用電流熱效應的設備例子，並解釋它們的工作原理。',
    },
    {
      question: 'Explain why electromagnetic cranes are useful in scrapyards. 解釋為什麼電磁起重機在廢料場很有用。',
    },
    {
      question: 'Describe one safety precaution we should take when using electrical appliances that produce heat. 描述我們在使用會產生熱的電器時應採取的一項安全預防措施。',
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
            Electricity exhibits various properties including heating and magnetic effects that power many everyday devices. Understanding these phenomena helps explain how common appliances function and their practical applications in modern technology.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the heating effect and magnetic effect of electric current</li>
                <li>Give examples of daily applications of the heating effect (e.g. electric heaters, hairdryers, toasters) and magnetic effect (e.g. electromagnetic cranes, electromagnetic locks) of electric current</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a simple electromagnet and test its strength with different materials</li>
              <li>Experiment with different wire materials to observe their heating effects</li>
              <li>Design a safety poster for electrical appliances that produce heat</li>
              <li>Create a circuit to demonstrate both heating and magnetic effects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how electricity's properties enable modern appliances and recognize safety considerations when using electrical devices.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how electricity powers modern conveniences</li>
              <li>Responsibility in using electrical devices safely</li>
              <li>Curiosity about electrical phenomena in everyday life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How electromagnetic technology enables modern transportation systems</li>
              <li>The role of electrical heating in food preparation and home comfort</li>
              <li>Energy efficiency considerations in electrical appliance design</li>
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