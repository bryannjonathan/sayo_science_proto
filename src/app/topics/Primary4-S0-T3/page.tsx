'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a feature of cacti that helps them survive in the desert? 以下哪項是仙人掌幫助牠們在沙漠中生存的特徵?',
      options: [{ label: 'A', text: 'Thick stems to store water 粗壯的莖來儲存水分' }, { label: 'B', text: 'Large leaves to absorb sunlight 大葉子來吸收陽光' }, { label: 'C', text: 'Bright flowers to attract insects 鮮豔的花朵來吸引昆蟲' }, { label: 'D', text: 'Deep roots to reach underground water 深根來接觸地下水' }],
      answer: 'A',
    },
    {
      question: 'How do polar bears adapt to the cold Arctic environment? 北極熊如何適應寒冷的北極環境?',
      options: [{ label: 'A', text: 'Thick fur and fat layer 厚厚的皮毛和脂肪層' }, { label: 'B', text: 'Light-colored skin to reflect sunlight 淺色皮膚來反射陽光' }, { label: 'C', text: 'Long legs to run fast 長腿來快速奔跑' }, { label: 'D', text: 'Sharp claws to climb trees 鋒利的爪子來爬樹' }],
      answer: 'A',
    },
    {
      question: 'What is one way fish adapt to living in water? 魚類適應水中生活的一種方式是什麼?',
      options: [{ label: 'A', text: 'Having gills to breathe underwater 有鰓可以在水下呼吸' }, { label: 'B', text: 'Having lungs to breathe air 有肺可以呼吸空氣' }, { label: 'C', text: 'Having wings to fly 有翅膀可以飛翔' }, { label: 'D', text: 'Having fur to keep warm 有皮毛可以保暖' }],
      answer: 'A',
    },
    {
      question: 'Which behavior helps some birds survive cold winters? 哪種行為幫助一些鳥類度過寒冷的冬天?',
      options: [{ label: 'A', text: 'Migration to warmer places 遷徙到更溫暖的地方' }, { label: 'B', text: 'Building nests underground 在地下築巢' }, { label: 'C', text: 'Growing thicker feathers 長出更厚的羽毛' }, { label: 'D', text: 'Eating more food 吃更多的食物' }],
      answer: 'A',
    },
    {
      question: 'Why do some trees lose their leaves in winter? 為什麼有些樹在冬天會落葉?',
      options: [{ label: 'A', text: 'To save water and energy 為了節省水分和能量' }, { label: 'B', text: 'To attract more sunlight 為了吸引更多陽光' }, { label: 'C', text: 'To grow new leaves faster 為了更快長出新葉子' }, { label: 'D', text: 'To protect themselves from animals 為了保護自己免受動物侵害' }],
      answer: 'A',
    },
    {
      question: 'How do camels adapt to the desert environment? 駱駝如何適應沙漠環境?',
      options: [{ label: 'A', text: 'Storing fat in their humps 在駝峰中儲存脂肪' }, { label: 'B', text: 'Having long tails to swat flies 有長尾巴來驅趕蒼蠅' }, { label: 'C', text: 'Having sharp teeth to eat meat 有鋒利的牙齒來吃肉' }, { label: 'D', text: 'Having webbed feet to swim 有蹼足來游泳' }],
      answer: 'A',
    },
    {
      question: 'What is one feature of frogs that helps them live both in water and on land? 青蛙的一個特徵是什麼幫助牠們既能在水中又能在陸地上生活?',
      options: [{ label: 'A', text: 'Moist skin for breathing 濕潤的皮膚用來呼吸' }, { label: 'B', text: 'Hard shell for protection 硬殼用來保護' }, { label: 'C', text: 'Wings for flying 翅膀用來飛翔' }, { label: 'D', text: 'Long neck for reaching leaves 長脖子用來夠到葉子' }],
      answer: 'A',
    },
    {
      question: 'Why do some animals hibernate in winter? 為什麼有些動物在冬天冬眠?',
      options: [{ label: 'A', text: 'To survive when food is scarce 為了在食物短缺時生存' }, { label: 'B', text: 'To avoid predators 為了躲避捕食者' }, { label: 'C', text: 'To find a mate 為了尋找配偶' }, { label: 'D', text: 'To grow bigger 為了長得更大' }],
      answer: 'A',
    },
    {
      question: 'How do chameleons adapt to their environment? 變色龍如何適應環境?',
      options: [{ label: 'A', text: 'Changing color to blend in 改變顏色以融入環境' }, { label: 'B', text: 'Growing wings to fly 長出翅膀來飛翔' }, { label: 'C', text: 'Producing venom to hunt 產生毒液來捕獵' }, { label: 'D', text: 'Shedding skin frequently 頻繁蛻皮' }],
      answer: 'A',
    },
    {
      question: 'What helps ducks swim in water? 什麼幫助鴨子在水中游泳?',
      options: [{ label: 'A', text: 'Webbed feet 蹼足' }, { label: 'B', text: 'Sharp claws 鋒利的爪子' }, { label: 'C', text: 'Long tails 長尾巴' }, { label: 'D', text: 'Thick fur 厚厚的皮毛' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All plants have the same features to adapt to their environment. 所有植物都有相同的特徵來適應環境。', answer: false },
    { statement: 'Hibernation is a behavior that helps animals survive cold winters. 冬眠是一種幫助動物度過寒冷冬天的行為。', answer: true },
    { statement: 'Animals cannot change their behaviors to adapt to different environments. 動物無法改變牠們的行為來適應不同的環境。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give two examples of how plants adapt to their environment. 舉出兩個植物如何適應環境的例子。',
    },
    {
      question: 'Explain why some animals migrate to different places during certain seasons. 解釋為什麼一些動物在某些季節會遷徙到不同的地方。',
    },
    {
      question: 'Describe one feature of a penguin that helps it survive in cold climates. 描述企鵝的一個特徵，這個特徵幫助牠在寒冷的氣候中生存。',
    },
  ],
};

export default function BiologicalFormsAndFunctionsAndTheirAdaptabilityToTheEnvironmentPage() {
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
             Biological forms and functions, and their adaptability to the environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how different organisms develop unique physical features and behaviors to survive in their habitats. Understand the relationship between form, function, and environmental adaptation across various ecosystems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Give some examples of features of plants that help them adapt to their environment</li>
                <li>Give some examples of features of animals that help them adapt to their environment</li>
                <li>Recognise some behaviors of animals for surviving in their habitats (e.g. migration, hibernation)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a diorama showing animal adaptations in different habitats</li>
              <li>Match plant features to their environmental advantages</li>
              <li>Role-play animal behaviors like migration or hibernation</li>
              <li>Design an imaginary creature with adaptations for a specific environment</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to identify various adaptations in plants and animals and explain how these features help organisms survive in their environments.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for biodiversity and nature's ingenuity</li>
              <li>Respect for all living things and their habitats</li>
              <li>Curiosity about how organisms interact with their environments</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How human activities impact animal habitats and adaptations</li>
              <li>Biomimicry - human inventions inspired by nature's adaptations</li>
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