'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What material is commonly used to make windows because it is transparent? 哪種材料常用來製作窗戶，因為它是透明的?',
      options: [{ label: 'A', text: 'Plastic 塑膠' }, { label: 'B', text: 'Wood 木頭' }, { label: 'C', text: 'Glass 玻璃' }, { label: 'D', text: 'Metal 金屬' }],
      answer: 'C',
    },
    {
      question: 'Which part of a chair helps it to stand firmly on the ground? 椅子的哪個部分幫助它穩固地站立在地面上?',
      options: [{ label: 'A', text: 'Seat 座位' }, { label: 'B', text: 'Backrest 靠背' }, { label: 'C', text: 'Legs 腿' }, { label: 'D', text: 'Armrest 扶手' }],
      answer: 'C',
    },
    {
      question: 'Why do some umbrellas have a curved handle? 為什麼有些雨傘有彎曲的把手?',
      options: [{ label: 'A', text: 'To make it look pretty 為了讓它看起來漂亮' }, { label: 'B', text: 'To make it easier to hold 為了更容易握住' }, { label: 'C', text: 'To make it lighter 為了讓它更輕' }, { label: 'D', text: 'To make it cheaper 為了讓它更便宜' }],
      answer: 'B',
    },
    {
      question: 'Which material is best for making a frying pan because it heats up quickly? 哪種材料最適合製作煎鍋，因為它加熱快?',
      options: [{ label: 'A', text: 'Plastic 塑膠' }, { label: 'B', text: 'Wood 木頭' }, { label: 'C', text: 'Metal 金屬' }, { label: 'D', text: 'Glass 玻璃' }],
      answer: 'C',
    },
    {
      question: 'What is the main purpose of a rubber grip on a pencil? 鉛筆上的橡膠握把的主要目的是什麼?',
      options: [{ label: 'A', text: 'To make the pencil look colorful 為了讓鉛筆看起來多彩' }, { label: 'B', text: 'To make the pencil easier to hold 為了讓鉛筆更容易握住' }, { label: 'C', text: 'To make the pencil longer 為了讓鉛筆更長' }, { label: 'D', text: 'To make the pencil cheaper 為了讓鉛筆更便宜' }],
      answer: 'B',
    },
    {
      question: 'Which of these is an example of a product that combines practicality and aesthetics? 以下哪個是結合實用性和美觀性的產品例子?',
      options: [{ label: 'A', text: 'A plain cardboard box 一個普通的紙箱' }, { label: 'B', text: 'A beautifully designed water bottle 一個設計精美的水瓶' }, { label: 'C', text: 'A piece of raw wood 一塊原始的木頭' }, { label: 'D', text: 'A metal rod 一根金屬棒' }],
      answer: 'B',
    },
    {
      question: 'Why are most school bags made of strong fabric? 為什麼大多數書包都是用堅固的布料製成的?',
      options: [{ label: 'A', text: 'To make them look nice 為了讓它們看起來好看' }, { label: 'B', text: 'To make them lightweight and durable 為了讓它們輕便且耐用' }, { label: 'C', text: 'To make them expensive 為了讓它們昂貴' }, { label: 'D', text: 'To make them colorful 為了讓它們多彩' }],
      answer: 'B',
    },
    {
      question: 'What is the function of the holes in a colander? 濾鍋上的孔的功能是什麼?',
      options: [{ label: 'A', text: 'To make it look pretty 為了讓它看起來漂亮' }, { label: 'B', text: 'To let water drain out 為了讓水流出去' }, { label: 'C', text: 'To make it heavier 為了讓它更重' }, { label: 'D', text: 'To make it cheaper 為了讓它更便宜' }],
      answer: 'B',
    },
    {
      question: 'Which material is best for making a raincoat? 哪種材料最適合製作雨衣?',
      options: [{ label: 'A', text: 'Paper 紙' }, { label: 'B', text: 'Plastic 塑膠' }, { label: 'C', text: 'Wood 木頭' }, { label: 'D', text: 'Glass 玻璃' }],
      answer: 'B',
    },
    {
      question: 'Why do some shoes have patterns on their soles? 為什麼有些鞋子的鞋底有圖案?',
      options: [{ label: 'A', text: 'To make them look nice 為了讓它們看起來好看' }, { label: 'B', text: 'To make them more slippery 為了讓它們更滑' }, { label: 'C', text: 'To provide better grip 為了提供更好的抓地力' }, { label: 'D', text: 'To make them cheaper 為了讓它們更便宜' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Plastic is a good material for making windows because it is transparent. 塑膠是製作窗戶的好材料，因為它是透明的。', answer: false },
    { statement: 'The design of a product can affect how easy it is to use. 產品的設計會影響它是否容易使用。', answer: true },
    { statement: 'Aesthetics is more important than practicality when designing a product. 設計產品時，美觀比實用性更重要。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two materials that can be used to make a chair and explain why they are suitable. 列出兩種可以用來製作椅子的材料，並解釋為什麼它們適合。',
    },
    {
      question: 'How does the design of a water bottle with a handle make it more practical? 帶把手的水瓶設計如何讓它更實用?',
    },
    {
      question: 'Why is it important for a product to be both practical and aesthetically pleasing? 為什麼產品既實用又美觀很重要?',
    },
  ],
}

export default function EngineeringDesignCycleAndApplicationsPage() {
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
             Engineering, design cycle and applications
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how everyday products are designed with specific materials and features to serve practical purposes. Learn about the engineering design cycle and how functionality meets aesthetics in product creation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the structure and functions of common products in daily life</li>
                <li>Identify how some simple designs can enhance the functionality of products</li>
                <li>Describe the properties and uses of some common materials (e.g. plastic, wood, glass, metal)</li>
                <li>Realise the importance of practicality and aesthetics in engineering and design</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Material scavenger hunt: Find objects made of different materials around the classroom</li>
              <li>Design challenge: Improve an everyday object by sketching a new feature</li>
              <li>Product testing: Compare how different materials perform for specific uses</li>
              <li>Classroom discussion: Analyze why certain products are designed the way they are</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how materials and design choices affect product functionality and be able to evaluate simple designs based on practical needs.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for thoughtful design in everyday objects</li>
              <li>Curiosity about how things work and why they're made certain ways</li>
              <li>Respect for the problem-solving nature of engineering</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How material choices impact product sustainability and the environment</li>
              <li>The relationship between technological advancements and product design evolution</li>
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