'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which food group is at the bottom of the healthy eating pyramid? 健康飲食金字塔的底部是哪一類食物?',
      options: [{ label: 'A', text: 'Fruits and vegetables 水果和蔬菜' }, { label: 'B', text: 'Grains and cereals 穀物和穀類' }, { label: 'C', text: 'Dairy products 乳製品' }, { label: 'D', text: 'Meat and fish 肉類和魚類' }],
      answer: 'B',
    },
    {
      question: 'Which nutrient helps our body grow and repair tissues? 哪種營養素幫助我們的身體生長和修復組織?',
      options: [{ label: 'A', text: 'Carbohydrates 碳水化合物' }, { label: 'B', text: 'Proteins 蛋白質' }, { label: 'C', text: 'Fats 脂肪' }, { label: 'D', text: 'Vitamins 維生素' }],
      answer: 'B',
    },
    {
      question: 'What is the main function of carbohydrates in our body? 碳水化合物在我們體內的主要功能是什麼?',
      options: [{ label: 'A', text: 'To provide energy 提供能量' }, { label: 'B', text: 'To build muscles 建立肌肉' }, { label: 'C', text: 'To protect organs 保護器官' }, { label: 'D', text: 'To fight diseases 對抗疾病' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a good source of dietary fiber? 以下哪種是膳食纖維的良好來源?',
      options: [{ label: 'A', text: 'White bread 白麵包' }, { label: 'B', text: 'Apple 蘋果' }, { label: 'C', text: 'Chicken 雞肉' }, { label: 'D', text: 'Cheese 芝士' }],
      answer: 'B',
    },
    {
      question: 'How should you store raw meat to keep it safe? 你應該如何儲存生肉以確保安全?',
      options: [{ label: 'A', text: 'In the cupboard 在櫥櫃裡' }, { label: 'B', text: 'On the kitchen counter 在廚房檯面上' }, { label: 'C', text: 'In the refrigerator 在冰箱裡' }, { label: 'D', text: 'In direct sunlight 在陽光直射下' }],
      answer: 'C',
    },
    {
      question: 'Which of these is a healthy eating habit? 以下哪種是健康的飲食習慣?',
      options: [{ label: 'A', text: 'Skipping breakfast 不吃早餐' }, { label: 'B', text: 'Eating fruits every day 每天吃水果' }, { label: 'C', text: 'Drinking soda instead of water 喝汽水代替水' }, { label: 'D', text: 'Eating only one type of food 只吃一種食物' }],
      answer: 'B',
    },
    {
      question: 'Which vitamin helps keep our bones strong? 哪種維生素有助於保持骨骼強壯?',
      options: [{ label: 'A', text: 'Vitamin A 維生素A' }, { label: 'B', text: 'Vitamin B 維生素B' }, { label: 'C', text: 'Vitamin C 維生素C' }, { label: 'D', text: 'Vitamin D 維生素D' }],
      answer: 'D',
    },
    {
      question: 'What is the best way to preserve fresh vegetables? 保存新鮮蔬菜的最佳方法是什麼?',
      options: [{ label: 'A', text: 'Leave them on the table 把它們放在桌子上' }, { label: 'B', text: 'Store them in the refrigerator 把它們存放在冰箱裡' }, { label: 'C', text: 'Cook them immediately 立即烹飪它們' }, { label: 'D', text: 'Freeze them without washing 不洗就冷凍它們' }],
      answer: 'B',
    },
    {
      question: 'Which of these foods is rich in fats? 以下哪種食物富含脂肪?',
      options: [{ label: 'A', text: 'Carrots 胡蘿蔔' }, { label: 'B', text: 'Bananas 香蕉' }, { label: 'C', text: 'Avocado 牛油果' }, { label: 'D', text: 'Lettuce 生菜' }],
      answer: 'C',
    },
    {
      question: 'Why is water important for our body? 為什麼水對我們的身體很重要?',
      options: [{ label: 'A', text: 'It helps us stay hydrated 它有助於我們保持水分' }, { label: 'B', text: 'It makes us grow taller 它讓我們長得更高' }, { label: 'C', text: 'It gives us energy 它給我們能量' }, { label: 'D', text: 'It makes our bones strong 它使我們的骨骼強壯' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Eating only sweets is a healthy lifestyle. 只吃甜食是一種健康的生活方式。', answer: false },
    { statement: 'Vitamins and minerals help our body function properly. 維生素和礦物質幫助我們的身體正常運作。', answer: true },
    { statement: 'It is okay to eat food that has been left out for more than 2 hours. 可以吃已經放置超過2小時的食物。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name three types of food that are rich in proteins. 列出三種富含蛋白質的食物。',
    },
    {
      question: 'Why should we eat a variety of foods from different food groups? 為什麼我們應該吃來自不同食物組的多種食物?',
    },
    {
      question: 'What are two ways to keep food safe from bacteria? 列出兩種防止食物被細菌污染的方法。',
    },
  ],
};

export default function HealthyLifestylesPage() {
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
             Healthy lifestyles
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            A healthy lifestyle involves balanced nutrition, regular physical activity, and proper hygiene. It helps maintain physical and mental well-being while preventing diseases.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the types of food commonly found in a balanced diet</li>
                <li>Recognise the healthy eating pyramid</li>
                <li>Recognise the nutrients in food (carbohydrates, proteins, fats, vitamins, minerals, dietary fiber, water) and their functions</li>
                <li>Recognise the correct methods of handling and preserving food</li>
                <li>Maintain healthy eating habits</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a healthy meal plan for one day</li>
              <li>Sort different foods into their respective food groups</li>
              <li>Conduct a simple experiment showing how different foods affect energy levels</li>
              <li>Role-play proper food handling scenarios</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the components of a healthy lifestyle and be able to make informed choices about nutrition and hygiene.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the importance of personal health</li>
              <li>Responsibility in making healthy food choices</li>
              <li>Respect for food safety practices</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how food production affects health and environment</li>
              <li>Recognizing cultural differences in food choices and traditions</li>
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