'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which ancient Chinese engineering marvel is known for its use of mortise and tenon joints? 哪個古代中國工程奇蹟以使用榫卯結構聞名?',
      options: [{ label: 'A', text: 'Zhaozhou Bridge 趙州橋' }, { label: 'B', text: 'Great Wall of China 萬里長城' }, { label: 'C', text: 'Terracotta Army 兵馬俑' }, { label: 'D', text: 'Forbidden City 紫禁城' }],
      answer: 'A',
    },
    {
      question: 'What is the foundation of engineering? 工程的基礎是什麼?',
      options: [{ label: 'A', text: 'Art and music 藝術和音樂' }, { label: 'B', text: 'Science and technology 科學和技術' }, { label: 'C', text: 'Sports and games 運動和遊戲' }, { label: 'D', text: 'Cooking and baking 烹飪和烘焙' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a major engineering project in Hong Kong? 以下哪個是香港的主要工程項目?',
      options: [{ label: 'A', text: 'Hong Kong-Zhuhai-Macao Bridge 港珠澳大橋' }, { label: 'B', text: 'Eiffel Tower 艾菲爾鐵塔' }, { label: 'C', text: 'Sydney Opera House 悉尼歌劇院' }, { label: 'D', text: 'Statue of Liberty 自由女神像' }],
      answer: 'A',
    },
    {
      question: 'What type of train uses magnetic levitation technology? 哪種火車使用磁懸浮技術?',
      options: [{ label: 'A', text: 'Maglev train 磁懸浮列車' }, { label: 'B', text: 'Steam train 蒸汽火車' }, { label: 'C', text: 'Bullet train 子彈火車' }, { label: 'D', text: 'Subway train 地鐵列車' }],
      answer: 'A',
    },
    {
      question: 'Which ancient Chinese skill is used to join wood without nails? 哪種古代中國技術不用釘子就能連接木材?',
      options: [{ label: 'A', text: 'Mortise and tenon joints 榫卯結構' }, { label: 'B', text: 'Welding 焊接' }, { label: 'C', text: 'Gluing 黏合' }, { label: 'D', text: 'Screwing 螺絲固定' }],
      answer: 'A',
    },
    {
      question: 'How can engineering projects improve people\\'s lives? 工程項目如何改善人們的生活?',
      options: [{ label: 'A', text: 'By building bridges and roads 建造橋樑和道路' }, { label: 'B', text: 'By creating new toys 創造新玩具' }, { label: 'C', text: 'By drawing pictures 畫畫' }, { label: 'D', text: 'By singing songs 唱歌' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT an example of ancient Chinese engineering? 以下哪個不是古代中國工程的例子?',
      options: [{ label: 'A', text: 'Zhaozhou Bridge 趙州橋' }, { label: 'B', text: 'Great Wall of China 萬里長城' }, { label: 'C', text: 'Eiffel Tower 艾菲爾鐵塔' }, { label: 'D', text: 'Dujiangyan Irrigation System 都江堰水利工程' }],
      answer: 'C',
    },
    {
      question: 'What is the purpose of the design cycle in engineering? 工程中的設計週期的目的是什麼?',
      options: [{ label: 'A', text: 'To solve problems and improve designs 解決問題和改進設計' }, { label: 'B', text: 'To make things look pretty 讓東西看起來漂亮' }, { label: 'C', text: 'To waste time 浪費時間' }, { label: 'D', text: 'To play games 玩遊戲' }],
      answer: 'A',
    },
    {
      question: 'Which country has made significant contributions to engineering development? 哪個國家對工程發展做出了重大貢獻?',
      options: [{ label: 'A', text: 'China 中國' }, { label: 'B', text: 'Mars 火星' }, { label: 'C', text: 'Fairyland 仙境' }, { label: 'D', text: 'Neverland 夢幻島' }],
      answer: 'A',
    },
    {
      question: 'What is the Hong Kong-Zhuhai-Macao Bridge an example of? 港珠澳大橋是哪種工程的例子?',
      options: [{ label: 'A', text: 'Major engineering project 主要工程項目' }, { label: 'B', text: 'Ancient Chinese skill 古代中國技術' }, { label: 'C', text: 'Maglev train 磁懸浮列車' }, { label: 'D', text: 'Toy bridge 玩具橋' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The Zhaozhou Bridge is an example of ancient Chinese engineering. 趙州橋是古代中國工程的一個例子。', answer: true },
    { statement: 'Engineering projects cannot improve people\\'s lives. 工程項目不能改善人們的生活。', answer: false },
    { statement: 'The Hong Kong-Zhuhai-Macao Bridge is a major engineering project. 港珠澳大橋是一個主要工程項目。', answer: true },
  ],
  open_ended: [
    {
      question: 'Can you name one ancient Chinese engineering project and explain how it helped people? 你能說出一個古代中國工程項目並解釋它如何幫助人們嗎?',
    },
    {
      question: 'How do you think the maglev train is different from a regular train? 你認為磁懸浮列車與普通火車有什麼不同?',
    },
    {
      question: 'Why is science and technology important for engineering? 為什麼科學和技術對工程很重要?',
    },
  ],
};

export default function EngineeringDesignCycleAndApplicationsPage() {
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
             Engineering, design cycle and applications
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how engineering solves real-world problems through the design cycle. Learn about ancient Chinese engineering marvels and modern applications that improve our daily lives.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that engineering projects can improve people’s lives</li>
                <li>Be aware that the foundation of engineering is science and technology</li>
                <li>Give some examples of ancient Chinese skills and engineering (e.g. Zhaozhou Bridge, mortise and tenon joints)</li>
                <li>Recognise some examples of the nation’s and Hong Kong’s major engineering projects (e.g. maglev train, Hong Kong-Zhuhai-Macao Bridge)</li>
                <li>Appreciate the nation’s contributions to engineering development</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a simple bridge using popsicle sticks to understand structural design</li>
              <li>Design and test paper airplanes to explore aerodynamics</li>
              <li>Create a model of the Zhaozhou Bridge using craft materials</li>
              <li>Simulate the maglev train principle with magnets</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the engineering design process and recognize how engineering solutions impact society through historical and contemporary examples.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for engineering innovations that improve quality of life</li>
              <li>Respect for traditional engineering techniques and cultural heritage</li>
              <li>Curiosity about how things work and how they can be improved</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how engineering connects science with technology to solve societal needs</li>
              <li>Exploring how environmental factors influence engineering design decisions</li>
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