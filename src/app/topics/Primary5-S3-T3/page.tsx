'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the first step in the design cycle? 設計循環的第一步是什麼？',
      options: [{ label: 'A', text: 'Identify needs and the problem 識別需求和問題' }, { label: 'B', text: 'Collect information 收集信息' }, { label: 'C', text: 'Propose design solutions 提出設計方案' }, { label: 'D', text: 'Test the product 測試產品' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to collect information before designing a product? 為什麼在設計產品之前收集信息很重要？',
      options: [{ label: 'A', text: 'To understand the problem better 更好地理解問題' }, { label: 'B', text: 'To skip the testing phase 跳過測試階段' }, { label: 'C', text: 'To make the product more expensive 使產品更昂貴' }, { label: 'D', text: 'To avoid drawing sketches 避免繪製草圖' }],
      answer: 'A',
    },
    {
      question: 'What should you do after proposing a design solution? 提出設計方案後應該做什麼？',
      options: [{ label: 'A', text: 'Compare various considerations 比較各種考慮因素' }, { label: 'B', text: 'Ignore the constraints 忽略限制' }, { label: 'C', text: 'Stop the design process 停止設計過程' }, { label: 'D', text: 'Sell the product immediately 立即銷售產品' }],
      answer: 'A',
    },
    {
      question: 'How can you illustrate your design idea? 如何展示你的設計想法？',
      options: [{ label: 'A', text: 'By drawing a sketch with text or diagrams 通過繪製帶有文字或圖表的草圖' }, { label: 'B', text: 'By writing a long essay 通過寫一篇長文' }, { label: 'C', text: 'By singing a song 通過唱歌' }, { label: 'D', text: 'By ignoring the idea 忽略這個想法' }],
      answer: 'A',
    },
    {
      question: 'What is the purpose of testing an engineering model? 測試工程模型的目的是什麼？',
      options: [{ label: 'A', text: 'To find and fix problems 發現並解決問題' }, { label: 'B', text: 'To make it look pretty 讓它看起來漂亮' }, { label: 'C', text: 'To hide its flaws 隱藏它的缺陷' }, { label: 'D', text: 'To avoid using materials 避免使用材料' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a part of the design cycle? 以下哪一項不是設計循環的一部分？',
      options: [{ label: 'A', text: 'Ignoring the problem 忽略問題' }, { label: 'B', text: 'Collecting information 收集信息' }, { label: 'C', text: 'Proposing design solutions 提出設計方案' }, { label: 'D', text: 'Testing the product 測試產品' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to compare different design solutions? 為什麼比較不同的設計方案很重要？',
      options: [{ label: 'A', text: 'To determine the best solution 確定最佳方案' }, { label: 'B', text: 'To make the process longer 使過程更長' }, { label: 'C', text: 'To confuse the team 混淆團隊' }, { label: 'D', text: 'To avoid making a decision 避免做出決定' }],
      answer: 'A',
    },
    {
      question: 'What tools might you use to make an engineering model? 你可能使用什麼工具來製作工程模型？',
      options: [{ label: 'A', text: 'Rulers, scissors, and glue 尺子、剪刀和膠水' }, { label: 'B', text: 'A computer game 電腦遊戲' }, { label: 'C', text: 'A cooking recipe 烹飪食譜' }, { label: 'D', text: 'A musical instrument 樂器' }],
      answer: 'A',
    },
    {
      question: 'What should you do after testing your engineering model? 測試工程模型後應該做什麼？',
      options: [{ label: 'A', text: 'Improve the model based on the results 根據結果改進模型' }, { label: 'B', text: 'Throw it away 扔掉它' }, { label: 'C', text: 'Ignore the test results 忽略測試結果' }, { label: 'D', text: 'Sell it immediately 立即銷售' }],
      answer: 'A',
    },
    {
      question: 'Why is communication important in the design cycle? 為什麼在設計循環中溝通很重要？',
      options: [{ label: 'A', text: 'To share ideas and solutions with others 與他人分享想法和解決方案' }, { label: 'B', text: 'To keep secrets 保守秘密' }, { label: 'C', text: 'To avoid teamwork 避免團隊合作' }, { label: 'D', text: 'To make the process longer 使過程更長' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The first step in the design cycle is to propose a design solution. 設計循環的第一步是提出設計方案。', answer: false },
    { statement: 'Testing an engineering model helps to find and fix problems. 測試工程模型有助於發現並解決問題。', answer: true },
    { statement: 'It is not necessary to communicate your design solutions to others. 沒有必要將你的設計方案與他人溝通。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe one problem you might face when designing a product and how you would solve it. 描述你在設計產品時可能遇到的一個問題以及你會如何解決它。',
    },
    {
      question: 'Explain why it is important to consider both practicality and aesthetics in a design. 解釋為什麼在設計中考慮實用性和美觀性很重要。',
    },
    {
      question: 'How would you test an engineering model to make sure it works well? 你會如何測試一個工程模型以確保它運作良好？',
    },
  ],
}

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
            The design cycle is a systematic process used to create engineering models and products. It involves identifying problems, gathering information, proposing solutions, and testing designs to ensure they meet requirements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Apply design cycle to design engineering models or products: Identify needs and the problem, Collect information relevant to the problem, and evaluate existing approaches, Propose more than one design solution that meet the constraints, Compare various considerations, including practicality and aesthetics, to determine the feasibility of the design solutions, Illustrate the design idea by a sketch with text, diagrams, etc., Use tools and materials to make the engineering model or product, Test and improve the engineering model or product, Communicate the solutions to the problem</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Design and build a simple bridge using everyday materials</li>
              <li>Create a prototype of a water filtration system</li>
              <li>Conduct a design challenge to solve a classroom problem</li>
              <li>Present and evaluate different design solutions in groups</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the design cycle process and be able to apply it to create functional engineering solutions while considering practical constraints.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing perseverance through iterative design improvements</li>
              <li>Cultivating creativity in problem-solving approaches</li>
              <li>Encouraging teamwork and collaborative design</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how engineering impacts daily life and society</li>
              <li>Exploring sustainable design practices and their importance</li>
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