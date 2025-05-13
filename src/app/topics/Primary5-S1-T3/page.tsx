'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Through which of the following can sound NOT travel? 聲音不能通過以下哪種介質傳播?',
      options: [{ label: 'A', text: 'Air 空氣' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Vacuum 真空' }, { label: 'D', text: 'Solid 固體' }],
      answer: 'C',
    },
    {
      question: 'What causes changes in pitch? 什麼導致音高的變化?',
      options: [{ label: 'A', text: 'Changes in vibration 振動的變化' }, { label: 'B', text: 'Changes in loudness 響度的變化' }, { label: 'C', text: 'Changes in medium 介質的變化' }, { label: 'D', text: 'Changes in temperature 溫度的變化' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a common source of noise pollution? 以下哪項是噪音污染的常見來源?',
      options: [{ label: 'A', text: 'Birds singing 鳥鳴' }, { label: 'B', text: 'Traffic 交通' }, { label: 'C', text: 'Whispering 耳語' }, { label: 'D', text: 'Rainfall 下雨' }],
      answer: 'B',
    },
    {
      question: 'How can we protect our hearing? 我們如何保護聽力?',
      options: [{ label: 'A', text: 'Avoid loud noises 避免巨大噪音' }, { label: 'B', text: 'Use earplugs in noisy environments 在嘈雜環境中使用耳塞' }, { label: 'C', text: 'Both A and B A和B都是' }, { label: 'D', text: 'None of the above 以上都不是' }],
      answer: 'C',
    },
    {
      question: 'What is the unit used to measure loudness? 用於測量響度的單位是什麼?',
      options: [{ label: 'A', text: 'Hertz 赫茲' }, { label: 'B', text: 'Decibel 分貝' }, { label: 'C', text: 'Watt 瓦特' }, { label: 'D', text: 'Volt 伏特' }],
      answer: 'B',
    },
    {
      question: 'Which medium does sound travel fastest through? 聲音在以下哪種介質中傳播最快?',
      options: [{ label: 'A', text: 'Air 空氣' }, { label: 'B', text: 'Water 水' }, { label: 'C', text: 'Steel 鋼' }, { label: 'D', text: 'Vacuum 真空' }],
      answer: 'C',
    },
    {
      question: 'What happens to the pitch when the vibration increases? 當振動增加時，音高會發生什麼變化?',
      options: [{ label: 'A', text: 'Pitch increases 音高增加' }, { label: 'B', text: 'Pitch decreases 音高降低' }, { label: 'C', text: 'Pitch stays the same 音高保持不變' }, { label: 'D', text: 'Pitch disappears 音高消失' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a way to cope with noise? 以下哪項不是應對噪音的方法?',
      options: [{ label: 'A', text: 'Wearing earplugs 戴耳塞' }, { label: 'B', text: 'Listening to loud music 聽大聲的音樂' }, { label: 'C', text: 'Using soundproof materials 使用隔音材料' }, { label: 'D', text: 'Reducing noise at the source 從源頭減少噪音' }],
      answer: 'B',
    },
    {
      question: 'What is a safe level of sound for human hearing? 對人類聽力來說，安全的聲音水平是多少?',
      options: [{ label: 'A', text: 'Below 85 decibels 低於85分貝' }, { label: 'B', text: 'Below 120 decibels 低於120分貝' }, { label: 'C', text: 'Below 60 decibels 低於60分貝' }, { label: 'D', text: 'Below 30 decibels 低於30分貝' }],
      answer: 'A',
    },
    {
      question: 'Which of the following actions can help reduce noise pollution? 以下哪項行動可以幫助減少噪音污染?',
      options: [{ label: 'A', text: 'Planting trees 種植樹木' }, { label: 'B', text: 'Using quieter machines 使用更安靜的機器' }, { label: 'C', text: 'Both A and B A和B都是' }, { label: 'D', text: 'None of the above 以上都不是' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Sound travels faster in water than in air. 聲音在水中比在空氣中傳播得更快。', answer: true },
    { statement: 'The pitch of a sound depends on its loudness. 聲音的音高取決於它的響度。', answer: false },
    { statement: 'Noise pollution can cause hearing loss. 噪音污染可能導致聽力損失。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain why sound cannot travel through a vacuum. 解釋為什麼聲音不能在真空中傳播。',
    },
    {
      question: 'Describe two ways to protect your hearing from loud noises. 描述兩種保護聽力免受巨大噪音影響的方法。',
    },
    {
      question: 'How does the loudness of sound affect our daily lives? Give one example. 聲音的響度如何影響我們的日常生活？舉一個例子。',
    },
  ],
}

export default function PropertiesOfSoundAndRelatedPhenomenaPage() {
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
             Properties of sound and related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Sound is a form of energy produced by vibrations that travel through different media. This topic explores how sound behaves, its properties like pitch and loudness, and related phenomena such as noise pollution and hearing protection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that sound can travel through different media</li>
                <li>Be aware that changes in pitch are caused by changes in vibration</li>
                <li>Recognise the causes of noise and ways to cope with it</li>
                <li>Recognise the ways to protect hearing</li>
                <li>Recognise ways to measure the loudness of sound, and the commonly used unit (decibel)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Experiment with different materials to test sound transmission</li>
              <li>Create simple musical instruments to demonstrate pitch changes</li>
              <li>Measure sound levels in different environments using a decibel meter app</li>
              <li>Design posters about hearing protection and noise reduction</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how sound travels and its properties, recognize sources of noise pollution, and learn practical ways to protect their hearing in daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the importance of hearing and sound in communication</li>
              <li>Responsibility in protecting one's hearing and reducing noise pollution</li>
              <li>Curiosity about how different sounds are produced and perceived</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding noise pollution regulations in urban planning</li>
              <li>Exploring how sound technology is used in medical imaging</li>
              <li>Examining soundproofing materials in building construction</li>
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