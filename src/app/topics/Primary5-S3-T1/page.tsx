'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Who discovered artemisinin, a treatment for malaria? 誰發現了治療瘧疾的青蒿素?',
      options: [{ label: 'A', text: 'Tu Youyou 屠呦呦' }, { label: 'B', text: 'Charles K. Kao 高錕' }, { label: 'C', text: 'Albert Einstein 愛因斯坦' }, { label: 'D', text: 'Isaac Newton 牛頓' }],
      answer: 'A',
    },
    {
      question: 'What is Charles K. Kao famous for? 高錕以什麼聞名?',
      options: [{ label: 'A', text: 'Discovering gravity 發現重力' }, { label: 'B', text: 'Inventing the telephone 發明電話' }, { label: 'C', text: 'Pioneering fiber optics 開創光纖技術' }, { label: 'D', text: 'Creating the light bulb 發明燈泡' }],
      answer: 'C',
    },
    {
      question: 'Which scientist won the Nobel Prize in Physiology or Medicine in 2015? 哪位科學家在2015年獲得諾貝爾生理學或醫學獎?',
      options: [{ label: 'A', text: 'Marie Curie 居里夫人' }, { label: 'B', text: 'Tu Youyou 屠呦呦' }, { label: 'C', text: 'Stephen Hawking 霍金' }, { label: 'D', text: 'Thomas Edison 愛迪生' }],
      answer: 'B',
    },
    {
      question: 'Where was Charles K. Kao born? 高錕在哪裡出生?',
      options: [{ label: 'A', text: 'Hong Kong 香港' }, { label: 'B', text: 'United States 美國' }, { label: 'C', text: 'Japan 日本' }, { label: 'D', text: 'United Kingdom 英國' }],
      answer: 'A',
    },
    {
      question: 'What disease does artemisinin treat? 青蒿素治療什麼疾病?',
      options: [{ label: 'A', text: 'Diabetes 糖尿病' }, { label: 'B', text: 'Malaria 瘧疾' }, { label: 'C', text: 'Influenza 流感' }, { label: 'D', text: 'Tuberculosis 肺結核' }],
      answer: 'B',
    },
    {
      question: 'Which field did Charles K. Kao contribute to the most? 高錕對哪個領域貢獻最大?',
      options: [{ label: 'A', text: 'Medicine 醫學' }, { label: 'B', text: 'Physics 物理學' }, { label: 'C', text: 'Telecommunications 電信' }, { label: 'D', text: 'Chemistry 化學' }],
      answer: 'C',
    },
    {
      question: 'What prize did Tu Youyou receive for her discovery? 屠呦呦因她的發現獲得了什麼獎項?',
      options: [{ label: 'A', text: 'Nobel Prize 諾貝爾獎' }, { label: 'B', text: 'Pulitzer Prize 普立茲獎' }, { label: 'C', text: 'Grammy Award 葛萊美獎' }, { label: 'D', text: 'Olympic Medal 奧運獎牌' }],
      answer: 'A',
    },
    {
      question: 'What material did Charles K. Kao work with to improve communication? 高錕用什麼材料來改善通訊?',
      options: [{ label: 'A', text: 'Plastic 塑膠' }, { label: 'B', text: 'Glass fibers 玻璃纖維' }, { label: 'C', text: 'Wood 木材' }, { label: 'D', text: 'Metal 金屬' }],
      answer: 'B',
    },
    {
      question: 'Which traditional Chinese medicine inspired Tu Youyou\'s discovery? 屠呦呦的發現受到哪種中藥的啟發?',
      options: [{ label: 'A', text: 'Ginseng 人參' }, { label: 'B', text: 'Sweet wormwood 青蒿' }, { label: 'C', text: 'Goji berries 枸杞' }, { label: 'D', text: 'Licorice 甘草' }],
      answer: 'B',
    },
    {
      question: 'What is the nickname for Charles K. Kao? 高錕的暱稱是什麼?',
      options: [{ label: 'A', text: 'Father of the Internet 互聯網之父' }, { label: 'B', text: 'Father of Fiber Optics 光纖之父' }, { label: 'C', text: 'Father of Electricity 電力之父' }, { label: 'D', text: 'Father of Computers 電腦之父' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Tu Youyou was born in Hong Kong. 屠呦呦在香港出生。', answer: false },
    { statement: 'Charles K. Kao won the Nobel Prize in Physics. 高錕獲得諾貝爾物理學獎。', answer: true },
    { statement: 'Artemisinin is used to treat cancer. 青蒿素用於治療癌症。', answer: false },
  ],
  open_ended: [
    {
      question: 'How did Tu Youyou\'s discovery of artemisinin help the world? 屠呦呦發現青蒿素如何幫助世界?',
    },
    {
      question: 'Why is Charles K. Kao\'s work important for modern communication? 為什麼高錕的工作對現代通訊很重要?',
    },
    {
      question: 'Name one scientist from Hong Kong and their contribution. 舉出一位來自香港的科學家及其貢獻。',
    },
  ],
};

export default function ResearchAndContributionsOfRenownedScientistsPage() {
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
             Research and contributions of renowned scientists
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore the groundbreaking work of famous scientists like Tu Youyou and Charles K. Kao. Learn how their discoveries in medicine and telecommunications have transformed our world and improved lives globally.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise some of the scientists from the nation and Hong Kong (e.g. Tu Youyou and Charles K. Kao) and their contributions</li>
                <li>Admire some significant figures who have contributed to the world’s scientific and technological advancements</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline of major scientific discoveries by these researchers</li>
              <li>Role-play as scientists explaining their discoveries to classmates</li>
              <li>Design posters showcasing how these innovations impact daily life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand key scientific breakthroughs and appreciate how perseverance in research leads to world-changing discoveries.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific dedication and perseverance</li>
              <li>Respect for researchers who improve human lives</li>
              <li>Curiosity about scientific problem-solving</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How medical discoveries like artemisinin impact global health</li>
              <li>Role of fiber optics in modern communication technology</li>
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