'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What do we use our eyes for? 我們的眼睛有什麼用途?',
      options: [{ label: 'A', text: 'To see 看東西' }, { label: 'B', text: 'To hear 聽聲音' }, { label: 'C', text: 'To smell 聞氣味' }, { label: 'D', text: 'To taste 品嚐味道' }],
      answer: 'A',
    },
    {
      question: 'What is the function of teeth? 牙齒的功能是什麼?',
      options: [{ label: 'A', text: 'To chew food 咀嚼食物' }, { label: 'B', text: 'To breathe 呼吸' }, { label: 'C', text: 'To walk 走路' }, { label: 'D', text: 'To think 思考' }],
      answer: 'A',
    },
    {
      question: 'How can we protect our eyes? 我們如何保護眼睛?',
      options: [{ label: 'A', text: 'Wear sunglasses in bright sunlight 在強光下戴太陽眼鏡' }, { label: 'B', text: 'Eat lots of candy 吃很多糖果' }, { label: 'C', text: 'Rub eyes with dirty hands 用髒手揉眼睛' }, { label: 'D', text: 'Watch TV very closely 近距離看電視' }],
      answer: 'A',
    },
    {
      question: 'What is a healthy habit for teeth? 什麼是對牙齒健康的習慣?',
      options: [{ label: 'A', text: 'Brush teeth twice a day 每天刷牙兩次' }, { label: 'B', text: 'Eat sweets before bed 睡前吃糖果' }, { label: 'C', text: 'Never brush teeth 從不刷牙' }, { label: 'D', text: 'Drink only soda 只喝汽水' }],
      answer: 'A',
    },
    {
      question: 'Why is the spine important? 為什麼脊椎很重要?',
      options: [{ label: 'A', text: 'It supports the body 它支撐身體' }, { label: 'B', text: 'It helps us taste food 它幫助我們品嚐食物' }, { label: 'C', text: 'It makes us run faster 它讓我們跑得更快' }, { label: 'D', text: 'It changes our hair color 它改變我們的髮色' }],
      answer: 'A',
    },
    {
      question: 'What is a good sitting posture? 什麼是良好的坐姿?',
      options: [{ label: 'A', text: 'Sit up straight 坐直' }, { label: 'B', text: 'Slouch on the chair 癱坐在椅子上' }, { label: 'C', text: 'Lie down while sitting 坐著時躺下' }, { label: 'D', text: 'Sit on one leg 單腳坐' }],
      answer: 'A',
    },
    {
      question: 'Which is a healthy living habit? 哪一個是健康的生活習慣?',
      options: [{ label: 'A', text: 'Exercise regularly 定期運動' }, { label: 'B', text: 'Stay up late every night 每晚熬夜' }, { label: 'C', text: 'Eat only junk food 只吃垃圾食物' }, { label: 'D', text: 'Never drink water 從不喝水' }],
      answer: 'A',
    },
    {
      question: 'Why is sleep important? 為什麼睡眠很重要?',
      options: [{ label: 'A', text: 'It helps our body rest and grow 它幫助我們的身體休息和成長' }, { label: 'B', text: 'It makes us hungry 它讓我們感到飢餓' }, { label: 'C', text: 'It stops us from playing 它阻止我們玩耍' }, { label: 'D', text: 'It makes us taller instantly 它讓我們立刻長高' }],
      answer: 'A',
    },
    {
      question: 'What is a balanced diet? 什麼是均衡飲食?',
      options: [{ label: 'A', text: 'Eating different types of food 吃不同種類的食物' }, { label: 'B', text: 'Eating only vegetables 只吃蔬菜' }, { label: 'C', text: 'Eating only meat 只吃肉' }, { label: 'D', text: 'Eating only sweets 只吃甜食' }],
      answer: 'A',
    },
    {
      question: 'How can we stay happy? 我們如何保持快樂?',
      options: [{ label: 'A', text: 'Play with friends 和朋友玩耍' }, { label: 'B', text: 'Stay alone all the time 一直獨處' }, { label: 'C', text: 'Never smile 從不微笑' }, { label: 'D', text: 'Be angry often 經常生氣' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'We should brush our teeth once a week. 我們應該每週刷牙一次。', answer: false },
    { statement: 'Exercise is good for our health. 運動對我們的健康有益。', answer: true },
    { statement: 'Eating only candy is a healthy habit. 只吃糖果是一個健康的習慣。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name two ways to protect your teeth. 說出兩種保護牙齒的方法。',
    },
    {
      question: 'Why is it important to have a balanced diet? 為什麼均衡飲食很重要?',
    },
    {
      question: 'What can you do to keep your spine healthy? 你可以做什麼來保持脊椎健康?',
    },
  ],
}

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
            Healthy lifestyles involve taking care of our bodies through proper nutrition, exercise, and hygiene. This topic helps children understand how to maintain good health by developing positive daily habits.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the functions of various parts of the human body (e.g. eyes to see, teeth to chew food, spine to support the body)</li>
                <li>Be aware of the methods to protect various parts of the body (e.g. methods for protecting the eyes and teeth, proper standing and sitting postures)</li>
                <li>Give some examples of healthy living habits (e.g. having a balanced diet, exercising regularly, getting enough sleep, maintaining a relaxed and happy mood)</li>
                <li>Develop healthy living habits</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a "Healthy Habits" collage using magazine cutouts</li>
              <li>Practice proper tooth brushing techniques with models</li>
              <li>Play a game of "Healthy Habit Charades"</li>
              <li>Conduct a simple posture check activity</li>
              <li>Create a weekly sleep and exercise tracker</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand basic health concepts and demonstrate simple healthy practices in their daily lives.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the importance of personal health</li>
              <li>Responsibility for one's own well-being</li>
              <li>Respect for the body and its needs</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how lifestyle choices affect health</li>
              <li>Recognizing the role of healthcare professionals in society</li>
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