'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is buoyancy? 什麼是浮力?',
      options: [{ label: 'A', text: 'An upward force exerted by water on objects 水對物體施加的向上力' }, { label: 'B', text: 'A downward force exerted by water on objects 水對物體施加的向下力' }, { label: 'C', text: 'A sideways force exerted by water on objects 水對物體施加的側向力' }, { label: 'D', text: 'No force exerted by water on objects 水對物體沒有施加任何力' }],
      answer: 'A',
    },
    {
      question: 'Which of the following objects will float in water? 以下哪個物體會在水中浮起?',
      options: [{ label: 'A', text: 'A wooden block 木塊' }, { label: 'B', text: 'A metal coin 金屬硬幣' }, { label: 'C', text: 'A stone 石頭' }, { label: 'D', text: 'A glass marble 玻璃彈珠' }],
      answer: 'A',
    },
    {
      question: 'What causes an object to sink in water? 什麼原因導致物體在水中下沉?',
      options: [{ label: 'A', text: 'The object\\'s weight is greater than the buoyant force 物體的重量大於浮力' }, { label: 'B', text: 'The object\\'s weight is less than the buoyant force 物體的重量小於浮力' }, { label: 'C', text: 'The object\\'s weight is equal to the buoyant force 物體的重量等於浮力' }, { label: 'D', text: 'The object has no weight 物體沒有重量' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of buoyancy? 以下哪個是浮力的例子?',
      options: [{ label: 'A', text: 'A boat floating on water 船浮在水面上' }, { label: 'B', text: 'A rock sinking to the bottom of a lake 石頭沉到湖底' }, { label: 'C', text: 'A balloon floating in the air 氣球飄在空中' }, { label: 'D', text: 'A book lying on a table 書本放在桌子上' }],
      answer: 'A',
    },
    {
      question: 'What happens to the buoyant force if the volume of water displaced by an object increases? 如果物體排開的水量增加，浮力會發生什麼變化?',
      options: [{ label: 'A', text: 'The buoyant force increases 浮力增加' }, { label: 'B', text: 'The buoyant force decreases 浮力減少' }, { label: 'C', text: 'The buoyant force stays the same 浮力保持不變' }, { label: 'D', text: 'The buoyant force disappears 浮力消失' }],
      answer: 'A',
    },
    {
      question: 'Which of the following materials is most likely to float in water? 以下哪種材料最有可能在水中浮起?',
      options: [{ label: 'A', text: 'Cork 軟木塞' }, { label: 'B', text: 'Iron 鐵' }, { label: 'C', text: 'Gold 金' }, { label: 'D', text: 'Concrete 混凝土' }],
      answer: 'A',
    },
    {
      question: 'Why does a heavy ship float on water? 為什麼沉重的船能浮在水面上?',
      options: [{ label: 'A', text: 'It displaces enough water to create a buoyant force equal to its weight 它排開足夠的水以產生與其重量相等的浮力' }, { label: 'B', text: 'It is made of special materials that repel water 它由排斥水的特殊材料製成' }, { label: 'C', text: 'It has no weight 它沒有重量' }, { label: 'D', text: 'It is filled with air, which makes it weightless 它充滿了空氣，使其沒有重量' }],
      answer: 'A',
    },
    {
      question: 'What is the main factor that determines whether an object will float or sink in water? 決定物體在水中浮起或下沉的主要因素是什麼?',
      options: [{ label: 'A', text: 'The relationship between the object\\'s weight and the buoyant force 物體重量與浮力之間的關係' }, { label: 'B', text: 'The color of the object 物體的顏色' }, { label: 'C', text: 'The temperature of the water 水的溫度' }, { label: 'D', text: 'The shape of the object 物體的形狀' }],
      answer: 'A',
    },
    {
      question: 'If an object floats in water, what can you say about its density compared to water? 如果一個物體在水中浮起，它的密度與水相比如何?',
      options: [{ label: 'A', text: 'Its density is less than water 它的密度小於水' }, { label: 'B', text: 'Its density is greater than water 它的密度大於水' }, { label: 'C', text: 'Its density is equal to water 它的密度等於水' }, { label: 'D', text: 'Its density is zero 它的密度為零' }],
      answer: 'A',
    },
    {
      question: 'Which of the following statements about buoyancy is correct? 以下關於浮力的陳述哪個是正確的?',
      options: [{ label: 'A', text: 'Buoyancy acts in the opposite direction to gravity 浮力的方向與重力相反' }, { label: 'B', text: 'Buoyancy acts in the same direction as gravity 浮力的方向與重力相同' }, { label: 'C', text: 'Buoyancy has no direction 浮力沒有方向' }, { label: 'D', text: 'Buoyancy only acts on heavy objects 浮力只作用於重物體' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Buoyancy is an upward force exerted by water on objects. 浮力是水對物體施加的向上力。', answer: true },
    { statement: 'All objects with a density greater than water will sink. 所有密度大於水的物體都會下沉。', answer: true },
    { statement: 'The buoyant force depends on the color of the object. 浮力取決於物體的顏色。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain why a small pebble sinks in water while a large ship floats. 解釋為什麼小石子會沉入水中，而大船卻能浮起。',
    },
    {
      question: 'Describe an experiment to demonstrate buoyancy using everyday materials. 描述一個使用日常材料演示浮力的實驗。',
    },
    {
      question: 'How does the shape of an object affect its ability to float in water? 物體的形狀如何影響它在水中的浮力能力?',
    },
  ],
}

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
            Matter is anything that has mass and takes up space. This topic explores the fundamental properties of matter including mass, volume, density, and buoyancy, helping students understand why objects float or sink in water.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Using water as an example, state that buoyancy is an upward force exerted by water on objects</li>
                <li>Recognise the phenomenon of floating and sinking of objects in water</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Float or sink experiment with various household objects</li>
              <li>Creating a density column with different liquids</li>
              <li>Designing aluminum foil boats to test buoyancy</li>
              <li>Measuring mass and volume of different materials</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the relationship between mass, volume, and density, and be able to predict whether objects will float or sink based on their properties.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing curiosity about everyday phenomena</li>
              <li>Appreciating the scientific method through hands-on experiments</li>
              <li>Understanding the importance of accurate measurement</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Application of buoyancy principles in ship design</li>
              <li>Environmental impact of materials based on their properties</li>
              <li>Technological innovations in floating structures</li>
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