'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'What should you do after using electronic products for a long time? 長時間使用電子產品後，你應該做什麼？',
      options: [{ label: 'A', text: 'Take a break and rest your eyes 休息一下，讓眼睛休息' }, { label: 'B', text: 'Continue using them without stopping 繼續使用，不要停下來' }, { label: 'C', text: 'Use them in a dark room 在黑暗的房間裡使用' }, { label: 'D', text: 'Hold them very close to your eyes 把它們拿得很靠近眼睛' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a good habit when using electronic products? 以下哪一項是使用電子產品時的好習慣？',
      options: [{ label: 'A', text: 'Using them for many hours without stopping 連續使用好幾個小時' }, { label: 'B', text: 'Keeping the screen brightness very high 將屏幕亮度調得很高' }, { label: 'C', text: 'Taking breaks every 20 minutes 每20分鐘休息一次' }, { label: 'D', text: 'Using them while lying down 躺著使用' }],
      answer: 'C',
    },
    {
      question: 'Why is it important to use electronic products properly? 為什麼正確使用電子產品很重要？',
      options: [{ label: 'A', text: 'To keep them clean 為了保持它們清潔' }, { label: 'B', text: 'To protect our health and eyes 為了保護我們的健康和眼睛' }, { label: 'C', text: 'To make them last longer 為了讓它們更耐用' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'B',
    },
    {
      question: 'What is a polite way to use electronic products in public? 在公共場合使用電子產品時，什麼是有禮貌的方式？',
      options: [{ label: 'A', text: 'Playing loud music 播放大聲的音樂' }, { label: 'B', text: 'Keeping the volume low 將音量調低' }, { label: 'C', text: 'Talking loudly on the phone 大聲講電話' }, { label: 'D', text: 'Ignoring people around you 忽略周圍的人' }],
      answer: 'B',
    },
    {
      question: 'What can happen if you use electronic products for too long? 如果你使用電子產品時間過長，可能會發生什麼？',
      options: [{ label: 'A', text: 'Your eyes may feel tired 你的眼睛可能會感到疲勞' }, { label: 'B', text: 'You may get a headache 你可能會頭痛' }, { label: 'C', text: 'You may have trouble sleeping 你可能會難以入睡' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'When should you avoid using electronic products? 什麼時候應該避免使用電子產品？',
      options: [{ label: 'A', text: 'During meals 吃飯時' }, { label: 'B', text: 'While crossing the road 過馬路時' }, { label: 'C', text: 'During family time 家庭時間' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'How can you protect your eyes when using electronic products? 使用電子產品時，如何保護眼睛？',
      options: [{ label: 'A', text: 'Sitting close to the screen 坐得靠近屏幕' }, { label: 'B', text: 'Using them in the dark 在黑暗中使用' }, { label: 'C', text: 'Taking regular breaks 定期休息' }, { label: 'D', text: 'Rubbing your eyes often 經常揉眼睛' }],
      answer: 'C',
    },
    {
      question: 'What is a good distance to keep from the screen when using electronic products? 使用電子產品時，與屏幕保持多遠的距離是好的？',
      options: [{ label: 'A', text: 'Very close 非常近' }, { label: 'B', text: 'Arm\\'s length 一臂之長' }, { label: 'C', text: 'Across the room 房間的另一邊' }, { label: 'D', text: 'It doesn\\'t matter 沒關係' }],
      answer: 'B',
    },
    {
      question: 'Why should you not use electronic products before bedtime? 為什麼不應該在睡前使用電子產品？',
      options: [{ label: 'A', text: 'It can make it hard to sleep 它會讓你難以入睡' }, { label: 'B', text: 'It can make the device hot 它會讓設備變熱' }, { label: 'C', text: 'It can waste electricity 它會浪費電' }, { label: 'D', text: 'It can make you hungry 它會讓你感到飢餓' }],
      answer: 'A',
    },
    {
      question: 'What should you do if you feel tired after using electronic products? 如果你使用電子產品後感到疲倦，應該做什麼？',
      options: [{ label: 'A', text: 'Keep using them 繼續使用' }, { label: 'B', text: 'Close your eyes and rest 閉上眼睛休息' }, { label: 'C', text: 'Increase the brightness 增加亮度' }, { label: 'D', text: 'Use them in a darker room 在更暗的房間裡使用' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Using electronic products for too long can hurt your eyes. 長時間使用電子產品會傷害你的眼睛。', answer: true },
    { statement: 'It is okay to use electronic products while crossing the road. 過馬路時使用電子產品是可以的。', answer: false },
    { statement: 'Taking breaks when using electronic products is not important. 使用電子產品時休息並不重要。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two ways to use electronic products politely in public. 列出在公共場合禮貌使用電子產品的兩種方式。',
    },
    {
      question: 'Why is it important to take breaks when using electronic products? 為什麼使用電子產品時休息很重要？',
    },
    {
      question: 'What can you do instead of using electronic products for fun? 除了使用電子產品，你還可以做什麼來娛樂？',
    },
  ],
};

export default function TechnologyInDailyLifePage() {
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
             Technology in daily life
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Technology plays an important role in our daily lives, from communication to entertainment. This lesson explores how we can use electronic products safely and responsibly while understanding their impact on our health and society.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the importance of proper use of electronic products</li>
                <li>Be aware of the impacts of prolonged use of electronic products on personal health</li>
                <li>Be aware of the etiquette for using electronic products</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Role-play scenarios for proper technology use in different settings</li>
              <li>Create a "Healthy Tech Habits" poster with safety tips</li>
              <li>Group discussion about personal experiences with technology</li>
              <li>Demonstrate proper screen distance and posture</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how to use technology responsibly and recognize the importance of balancing screen time with other activities.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Responsibility in using technology</li>
              <li>Consideration for others when using devices in public</li>
              <li>Appreciation for technology while maintaining balance</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How technology affects social interactions and relationships</li>
              <li>The environmental impact of electronic waste</li>
              <li>How technological advancements shape daily routines</li>
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