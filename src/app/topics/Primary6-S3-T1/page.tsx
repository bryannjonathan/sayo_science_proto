'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What was the first artificial satellite launched into space? 第一個發射到太空的人造衛星是什麼？',
      options: [{ label: 'A', text: 'Sputnik 1 史普尼克1號' }, { label: 'B', text: 'Explorer 1 探險者1號' }, { label: 'C', text: 'Hubble Space Telescope 哈伯太空望遠鏡' }, { label: 'D', text: 'International Space Station 國際太空站' }],
      answer: 'A',
    },
    {
      question: 'Which country was the first to land humans on the Moon? 哪個國家首次將人類送上月球？',
      options: [{ label: 'A', text: 'United States 美國' }, { label: 'B', text: 'Russia 俄羅斯' }, { label: 'C', text: 'China 中國' }, { label: 'D', text: 'Japan 日本' }],
      answer: 'A',
    },
    {
      question: 'What is the name of China\'s space station? 中國的太空站叫什麼名字？',
      options: [{ label: 'A', text: 'Tiangong 天宮' }, { label: 'B', text: 'Shenzhou 神舟' }, { label: 'C', text: 'Chang\'e 嫦娥' }, { label: 'D', text: 'BeiDou 北斗' }],
      answer: 'A',
    },
    {
      question: 'Which ancient civilization used telescopes to observe the stars? 哪個古代文明使用望遠鏡觀察星星？',
      options: [{ label: 'A', text: 'Ancient Greeks 古希臘人' }, { label: 'B', text: 'Ancient Chinese 古代中國人' }, { label: 'C', text: 'Ancient Egyptians 古埃及人' }, { label: 'D', text: 'None of the above (telescopes were invented later) 以上皆非（望遠鏡是後來發明的）' }],
      answer: 'D',
    },
    {
      question: 'What is the purpose of the BeiDou Navigation Satellite System? 北斗導航衛星系統的目的是什麼？',
      options: [{ label: 'A', text: 'Weather forecasting 天氣預報' }, { label: 'B', text: 'Global positioning and navigation 全球定位和導航' }, { label: 'C', text: 'Communications 通訊' }, { label: 'D', text: 'Space exploration 太空探索' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a milestone in human space exploration? 以下哪項是人類太空探索的里程碑？',
      options: [{ label: 'A', text: 'First artificial satellite 第一顆人造衛星' }, { label: 'B', text: 'First human in space 第一位人類進入太空' }, { label: 'C', text: 'First Moon landing 首次登月' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is the International Space Station (ISS) used for? 國際太空站（ISS）的用途是什麼？',
      options: [{ label: 'A', text: 'Scientific research 科學研究' }, { label: 'B', text: 'Space tourism 太空旅遊' }, { label: 'C', text: 'Military operations 軍事行動' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'A',
    },
    {
      question: 'Which Chinese mission successfully landed on the far side of the Moon? 哪個中國任務成功登陸月球背面？',
      options: [{ label: 'A', text: 'Chang\'e 4 嫦娥四號' }, { label: 'B', text: 'Chang\'e 5 嫦娥五號' }, { label: 'C', text: 'Shenzhou 11 神舟十一號' }, { label: 'D', text: 'Tiangong 2 天宮二號' }],
      answer: 'A',
    },
    {
      question: 'Why is aerospace technology important for a country\'s security? 為什麼航空航天技術對一個國家的安全很重要？',
      options: [{ label: 'A', text: 'It helps in weather forecasting 它有助於天氣預報' }, { label: 'B', text: 'It enables satellite navigation 它使衛星導航成為可能' }, { label: 'C', text: 'It supports communication and defense systems 它支持通訊和防禦系統' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What did ancient people use to observe the stars before telescopes were invented? 在望遠鏡發明之前，古代人用什麼來觀察星星？',
      options: [{ label: 'A', text: 'Microscopes 顯微鏡' }, { label: 'B', text: 'Naked eyes and simple tools 肉眼和簡單工具' }, { label: 'C', text: 'Computers 電腦' }, { label: 'D', text: 'Satellites 衛星' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The first human to travel to space was from the United States. 第一位進入太空的人來自美國。', answer: false },
    { statement: 'The Tiangong space station is a project by China. 天宮太空站是中國的項目。', answer: true },
    { statement: 'Ancient people used telescopes to observe the stars. 古代人使用望遠鏡觀察星星。', answer: false },
  ],
  open_ended: [
    {
      question: 'What are two purposes of human space exploration? 人類太空探索的兩個目的是什麼？',
    },
    {
      question: 'Describe one significant achievement of China in space exploration. 描述中國在太空探索中的一項重大成就。',
    },
    {
      question: 'Why is the International Space Station important for scientific research? 為什麼國際太空站對科學研究很重要？',
    },
  ],
}

export default function TheNationsAndTheWorldsAerospaceTechnologyDevelopmentPage() {
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
             The nation’s and the world’s aerospace technology development
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore the advancements in aerospace technology from ancient astronomical observations to modern space exploration. Learn about key milestones and how nations collaborate and compete in this critical field.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the purpose of human exploration of space</li>
                <li>Be aware of the methods used by ancient people and modern scientists to conduct astronomical observations and space exploration</li>
                <li>Recognise the developmental milestones of human space exploration, including artificial satellites, moon landing, the International Space Station, and manned spaceflight</li>
                <li>Show concerns for the nation’s significant achievements in space exploration (e.g. lunar and deep space exploration) and aerospace technology (e.g. Tiangong space station, BeiDou Navigation Satellite System)</li>
                <li>Realise the importance of aerospace technology development to the nation’s interests and security</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a simple model rocket to understand propulsion principles</li>
              <li>Create a timeline of major aerospace milestones</li>
              <li>Simulate satellite communication using radio waves</li>
              <li>Design a space station module with specific functions</li>
              <li>Compare ancient and modern astronomical observation tools</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the evolution of aerospace technology and its global impact, while appreciating national achievements in this field.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific progress and international cooperation</li>
              <li>Patriotism through recognition of national achievements</li>
              <li>Curiosity about space exploration and its possibilities</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of aerospace technology on global communication and navigation systems</li>
              <li>Role of international collaboration in space station projects</li>
              <li>Economic and security implications of space technology development</li>
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