'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'How is sound produced? 聲音是如何產生的?',
      options: [{ label: 'A', text: 'By the vibration of objects 通過物體的振動' }, { label: 'B', text: 'By the movement of light 通過光的移動' }, { label: 'C', text: 'By the change of color 通過顏色的變化' }, { label: 'D', text: 'By the smell of objects 通過物體的氣味' }],
      answer: 'A',
    },
    {
      question: 'What happens when an object vibrates more? 當物體振動得更厲害時會發生什麼?',
      options: [{ label: 'A', text: 'The sound becomes louder 聲音變得更大' }, { label: 'B', text: 'The sound becomes softer 聲音變得更小' }, { label: 'C', text: 'The sound disappears 聲音消失' }, { label: 'D', text: 'The sound changes color 聲音改變顏色' }],
      answer: 'A',
    },
    {
      question: 'What is an echo? 什麼是回聲?',
      options: [{ label: 'A', text: 'A sound that bounces back 反彈回來的聲音' }, { label: 'B', text: 'A type of light 一種光' }, { label: 'C', text: 'A kind of smell 一種氣味' }, { label: 'D', text: 'A color in the rainbow 彩虹中的一種顏色' }],
      answer: 'A',
    },
    {
      question: 'Which of these can produce sound? 以下哪一個可以產生聲音?',
      options: [{ label: 'A', text: 'A guitar 吉他' }, { label: 'B', text: 'A book 書本' }, { label: 'C', text: 'A chair 椅子' }, { label: 'D', text: 'A pencil 鉛筆' }],
      answer: 'A',
    },
    {
      question: 'What do you need to hear sound? 你需要什麼來聽到聲音?',
      options: [{ label: 'A', text: 'Ears 耳朵' }, { label: 'B', text: 'Eyes 眼睛' }, { label: 'C', text: 'Nose 鼻子' }, { label: 'D', text: 'Mouth 嘴巴' }],
      answer: 'A',
    },
    {
      question: 'Which object vibrates to produce sound? 哪個物體通過振動產生聲音?',
      options: [{ label: 'A', text: 'Drum 鼓' }, { label: 'B', text: 'Stone 石頭' }, { label: 'C', text: 'Paper 紙' }, { label: 'D', text: 'Water 水' }],
      answer: 'A',
    },
    {
      question: 'Where can you hear an echo? 你可以在哪裡聽到回聲?',
      options: [{ label: 'A', text: 'In a big empty room 在一個大而空的房間裡' }, { label: 'B', text: 'Underwater 在水下' }, { label: 'C', text: 'In a dark room 在一個黑暗的房間裡' }, { label: 'D', text: 'In a small box 在一個小盒子裡' }],
      answer: 'A',
    },
    {
      question: 'What makes a louder sound? 什麼會產生更大的聲音?',
      options: [{ label: 'A', text: 'Hitting a drum hard 用力敲鼓' }, { label: 'B', text: 'Touching a drum lightly 輕輕觸摸鼓' }, { label: 'C', text: 'Looking at a drum 看著鼓' }, { label: 'D', text: 'Holding a drum 拿著鼓' }],
      answer: 'A',
    },
    {
      question: 'Which of these is a source of sound? 以下哪一個是聲音的來源?',
      options: [{ label: 'A', text: 'A singing bird 一隻唱歌的鳥' }, { label: 'B', text: 'A sleeping cat 一隻睡覺的貓' }, { label: 'C', text: 'A still rock 一塊靜止的石頭' }, { label: 'D', text: 'A picture 一張圖片' }],
      answer: 'A',
    },
    {
      question: 'What happens when you pluck a guitar string? 當你撥動吉他弦時會發生什麼?',
      options: [{ label: 'A', text: 'It vibrates and produces sound 它振動並產生聲音' }, { label: 'B', text: 'It changes color 它改變顏色' }, { label: 'C', text: 'It disappears 它消失' }, { label: 'D', text: 'It becomes cold 它變冷' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Sound is produced by vibrating objects. 聲音是由振動的物體產生的。', answer: true },
    { statement: 'The louder the sound, the less the object vibrates. 聲音越大，物體振動得越少。', answer: false },
    { statement: 'An echo is a sound that bounces back. 回聲是反彈回來的聲音。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two objects that produce sound when they vibrate. 列出兩個振動時會產生聲音的物體。',
    },
    {
      question: 'Why can you hear an echo in a big empty room? 為什麼在一個大而空的房間裡可以聽到回聲?',
    },
    {
      question: 'What can you do to make a drum produce a louder sound? 你可以做什麼讓鼓產生更大的聲音?',
    },
  ],
};

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
            Sound is produced by vibrating objects and travels as waves through different mediums. The properties of sound include pitch, loudness, and quality, which are influenced by how objects vibrate. Related phenomena like echoes demonstrate how sound waves can reflect off surfaces.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that sound is produced by the vibration of objects</li>
                <li>Be aware that the greater the vibration of an object, the louder the sound produced</li>
                <li>Be aware of some phenomena related to sound (e.g. echo)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Experiment with different objects to observe sound production through vibrations</li>
              <li>Create simple musical instruments to explore pitch and loudness</li>
              <li>Investigate echoes by clapping hands in different environments</li>
              <li>Use tuning forks to visualize sound vibrations in water</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how sound is produced and recognize factors affecting sound properties. They will be able to explain basic sound phenomena like echoes.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the science behind everyday sounds</li>
              <li>Curiosity about how different materials produce different sounds</li>
              <li>Respect for appropriate sound levels in different environments</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how musical instruments work</li>
              <li>Recognizing the importance of sound in communication technologies</li>
              <li>Exploring how architects design spaces for optimal sound</li>
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