'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What happens when people throw trash into rivers? 當人們把垃圾扔進河流時會發生什麼？',
      options: [{ label: 'A', text: 'The water becomes clean 水變得乾淨' }, { label: 'B', text: 'The water becomes polluted 水被污染' }, { label: 'C', text: 'The water disappears 水消失了' }, { label: 'D', text: 'The water turns into ice 水變成冰' }],
      answer: 'B',
    },
    {
      question: 'How does air pollution affect animals? 空氣污染如何影響動物？',
      options: [{ label: 'A', text: 'Animals grow bigger 動物長得更大' }, { label: 'B', text: 'Animals can get sick 動物會生病' }, { label: 'C', text: 'Animals become invisible 動物變得隱形' }, { label: 'D', text: 'Animals learn to fly 動物學會飛行' }],
      answer: 'B',
    },
    {
      question: 'What is one way to reduce pollution? 減少污染的一種方法是什麼？',
      options: [{ label: 'A', text: 'Throw trash everywhere 到處扔垃圾' }, { label: 'B', text: 'Use more plastic bags 使用更多塑料袋' }, { label: 'C', text: 'Recycle paper and plastic 回收紙張和塑料' }, { label: 'D', text: 'Leave lights on all day 整天開著燈' }],
      answer: 'C',
    },
    {
      question: 'Why is it bad to cut down too many trees? 為什麼砍伐太多樹木是不好的？',
      options: [{ label: 'A', text: 'Animals lose their homes 動物失去家園' }, { label: 'B', text: 'The air becomes cleaner 空氣變得更乾淨' }, { label: 'C', text: 'People get more paper 人們得到更多紙張' }, { label: 'D', text: 'The ground becomes softer 地面變得更柔軟' }],
      answer: 'A',
    },
    {
      question: 'What can happen if we use too many plastic bags? 如果我們使用太多塑料袋會發生什麼？',
      options: [{ label: 'A', text: 'The ocean stays clean 海洋保持乾淨' }, { label: 'B', text: 'Animals can eat them and get sick 動物可能吃掉它們並生病' }, { label: 'C', text: 'Plastic bags disappear 塑料袋消失' }, { label: 'D', text: 'The air becomes fresher 空氣變得更清新' }],
      answer: 'B',
    },
    {
      question: 'How can we help protect the environment? 我們如何幫助保護環境？',
      options: [{ label: 'A', text: 'Leave trash on the ground 把垃圾留在地上' }, { label: 'B', text: 'Turn off lights when not needed 不需要時關燈' }, { label: 'C', text: 'Use cars for short trips 短途旅行使用汽車' }, { label: 'D', text: 'Cut down more trees 砍伐更多樹木' }],
      answer: 'B',
    },
    {
      question: 'What is water pollution? 什麼是水污染？',
      options: [{ label: 'A', text: 'Clean water 乾淨的水' }, { label: 'B', text: 'Water with trash and chemicals 含有垃圾和化學物質的水' }, { label: 'C', text: 'Water that is frozen 凍結的水' }, { label: 'D', text: 'Water that is boiling 沸騰的水' }],
      answer: 'B',
    },
    {
      question: 'What happens when fish live in polluted water? 當魚生活在污染的水中會發生什麼？',
      options: [{ label: 'A', text: 'They grow bigger 它們長得更大' }, { label: 'B', text: 'They can get sick or die 它們可能生病或死亡' }, { label: 'C', text: 'They learn to fly 它們學會飛行' }, { label: 'D', text: 'They turn into frogs 它們變成青蛙' }],
      answer: 'B',
    },
    {
      question: 'Why should we recycle? 我們為什麼要回收？',
      options: [{ label: 'A', text: 'To make more trash 製造更多垃圾' }, { label: 'B', text: 'To help the environment 幫助環境' }, { label: 'C', text: 'To waste resources 浪費資源' }, { label: 'D', text: 'To make the air dirtier 使空氣更髒' }],
      answer: 'B',
    },
    {
      question: 'What is one effect of air pollution on plants? 空氣污染對植物的一個影響是什麼？',
      options: [{ label: 'A', text: 'Plants grow faster 植物長得更快' }, { label: 'B', text: 'Plants can get sick or die 植物可能生病或死亡' }, { label: 'C', text: 'Plants change color 植物變色' }, { label: 'D', text: 'Plants become taller 植物長得更高' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Throwing trash in the ocean is good for fish. 把垃圾扔進海洋對魚有好處。', answer: false },
    { statement: 'Planting trees can help the environment. 種樹可以幫助環境。', answer: true },
    { statement: 'Using reusable bags can reduce pollution. 使用可重複使用的袋子可以減少污染。', answer: true },
  ],
  open_ended: [
    {
      question: 'How can you help reduce pollution at home? 你如何幫助減少家中的污染？',
    },
    {
      question: 'What are two things that cause air pollution? 導致空氣污染的兩件事是什麼？',
    },
    {
      question: 'Why is it important to protect the environment? 為什麼保護環境很重要？',
    },
  ],
};

export default function ImpactOfHumanBehaviorOnTheNaturalEnvironmentPage() {
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
             Impact of human behavior on the natural environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Human activities like pollution and deforestation significantly impact nature. This topic explores how our actions affect air, water, and living organisms, and what we can do to reduce harm.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the impact of human behavior on the environment (e.g. causing air and water pollution)</li>
                <li>Give some examples of how pollution affect the survival of animals and plants</li>
                <li>Show concern for safeguarding and improving the environment, and take action accordingly</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classroom experiment: Test water samples for pollution</li>
              <li>Role-play: Act out scenarios showing good/bad environmental practices</li>
              <li>Create a classroom recycling station</li>
              <li>Nature walk to observe human impact on local environment</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how human actions affect nature and identify simple ways to protect the environment in daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Develop responsibility towards environmental protection</li>
              <li>Cultivate respect for all living things and their habitats</li>
              <li>Appreciate the importance of sustainable living</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understand how technology can both harm and help the environment</li>
              <li>Explore community initiatives for environmental protection</li>
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