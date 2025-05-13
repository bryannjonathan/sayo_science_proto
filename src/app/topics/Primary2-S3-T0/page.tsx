'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Who invented the seismoscope to detect earthquakes? 誰發明了地動儀來檢測地震?',
      options: [{ label: 'A', text: 'Thomas Edison 湯瑪斯·愛迪生' }, { label: 'B', text: 'Zhang Heng 張衡' }, { label: 'C', text: 'Isaac Newton 艾薩克·牛頓' }, { label: 'D', text: 'Albert Einstein 阿爾伯特·愛因斯坦' }],
      answer: 'B',
    },
    {
      question: 'Which scientist is famous for inventing the light bulb? 哪位科學家以發明燈泡而聞名?',
      options: [{ label: 'A', text: 'Marie Curie 瑪麗·居禮' }, { label: 'B', text: 'Thomas Edison 湯瑪斯·愛迪生' }, { label: 'C', text: 'Galileo Galilei 伽利略·伽利萊' }, { label: 'D', text: 'Charles Darwin 查爾斯·達爾文' }],
      answer: 'B',
    },
    {
      question: 'What did Zhang Heng contribute to science? 張衡對科學有什麼貢獻?',
      options: [{ label: 'A', text: 'Invented the telephone 發明了電話' }, { label: 'B', text: 'Discovered gravity 發現了重力' }, { label: 'C', text: 'Invented the seismoscope 發明了地動儀' }, { label: 'D', text: 'Discovered electricity 發現了電' }],
      answer: 'C',
    },
    {
      question: 'Which scientist discovered the law of gravity? 哪位科學家發現了萬有引力定律?',
      options: [{ label: 'A', text: 'Albert Einstein 阿爾伯特·愛因斯坦' }, { label: 'B', text: 'Isaac Newton 艾薩克·牛頓' }, { label: 'C', text: 'Thomas Edison 湯瑪斯·愛迪生' }, { label: 'D', text: 'Marie Curie 瑪麗·居禮' }],
      answer: 'B',
    },
    {
      question: 'What did Thomas Edison invent? 湯瑪斯·愛迪生發明了什麼?',
      options: [{ label: 'A', text: 'The telephone 電話' }, { label: 'B', text: 'The light bulb 燈泡' }, { label: 'C', text: 'The computer 電腦' }, { label: 'D', text: 'The airplane 飛機' }],
      answer: 'B',
    },
    {
      question: 'Who is known as the \'Father of Modern Science\'? 誰被稱為「現代科學之父」?',
      options: [{ label: 'A', text: 'Galileo Galilei 伽利略·伽利萊' }, { label: 'B', text: 'Albert Einstein 阿爾伯特·愛因斯坦' }, { label: 'C', text: 'Marie Curie 瑪麗·居禮' }, { label: 'D', text: 'Charles Darwin 查爾斯·達爾文' }],
      answer: 'A',
    },
    {
      question: 'Which scientist discovered radioactivity? 哪位科學家發現了放射性?',
      options: [{ label: 'A', text: 'Isaac Newton 艾薩克·牛頓' }, { label: 'B', text: 'Marie Curie 瑪麗·居禮' }, { label: 'C', text: 'Thomas Edison 湯瑪斯·愛迪生' }, { label: 'D', text: 'Zhang Heng 張衡' }],
      answer: 'B',
    },
    {
      question: 'What is Marie Curie famous for? 瑪麗·居禮以什麼聞名?',
      options: [{ label: 'A', text: 'Inventing the light bulb 發明燈泡' }, { label: 'B', text: 'Discovering radioactivity 發現放射性' }, { label: 'C', text: 'Inventing the seismoscope 發明地動儀' }, { label: 'D', text: 'Discovering gravity 發現重力' }],
      answer: 'B',
    },
    {
      question: 'Who invented the telephone? 誰發明了電話?',
      options: [{ label: 'A', text: 'Alexander Graham Bell 亞歷山大·格拉漢姆·貝爾' }, { label: 'B', text: 'Thomas Edison 湯瑪斯·愛迪生' }, { label: 'C', text: 'Albert Einstein 阿爾伯特·愛因斯坦' }, { label: 'D', text: 'Marie Curie 瑪麗·居禮' }],
      answer: 'A',
    },
    {
      question: 'Which scientist is known for the theory of relativity? 哪位科學家以相對論聞名?',
      options: [{ label: 'A', text: 'Isaac Newton 艾薩克·牛頓' }, { label: 'B', text: 'Albert Einstein 阿爾伯特·愛因斯坦' }, { label: 'C', text: 'Galileo Galilei 伽利略·伽利萊' }, { label: 'D', text: 'Charles Darwin 查爾斯·達爾文' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Zhang Heng invented the seismoscope. 張衡發明了地動儀。', answer: true },
    { statement: 'Marie Curie discovered electricity. 瑪麗·居禮發現了電。', answer: false },
    { statement: 'Thomas Edison is famous for inventing the light bulb. 湯瑪斯·愛迪生以發明燈泡聞名。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name one scientist and their contribution to science. 舉出一位科學家及其對科學的貢獻。',
    },
    {
      question: 'Why is it important to learn about famous scientists? 為什麼學習著名科學家很重要?',
    },
    {
      question: 'How did Thomas Edison\'s invention of the light bulb help people? 湯瑪斯·愛迪生發明的燈泡如何幫助人們?',
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
            Explore the groundbreaking discoveries and inventions of famous scientists throughout history. Learn how their contributions shaped modern science and technology, inspiring future generations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of some renowned scientists in history (e.g. Zhang Heng, Thomas Edison) and their achievements</li>
                <li>Admire some significant figures who have contributed to the world’s scientific and technological advancements</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a timeline of major scientific discoveries</li>
              <li>Role-play as famous scientists presenting their inventions</li>
              <li>Design a poster showcasing a scientist's contributions</li>
              <li>Match scientists to their inventions in a memory game</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will recognize key scientific figures and understand how their work impacts our daily lives and modern technology.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific curiosity and perseverance</li>
              <li>Respect for diverse contributions to scientific progress</li>
              <li>Inspiration to explore and question the world</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How scientific discoveries transform society and technology</li>
              <li>The global nature of scientific collaboration and progress</li>
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