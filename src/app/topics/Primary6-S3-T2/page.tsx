'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the first step in the design cycle? 設計循環的第一步是什麼？',
      options: [{ label: 'A', text: 'Identify needs and the problem 確定需求和問題' }, { label: 'B', text: 'Collect information 收集信息' }, { label: 'C', text: 'Propose design solutions 提出設計方案' }, { label: 'D', text: 'Test the product 測試產品' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to collect information relevant to the problem? 為什麼收集與問題相關的信息很重要？',
      options: [{ label: 'A', text: 'To make the problem more complicated 使問題更複雜' }, { label: 'B', text: 'To understand the problem better 更好地理解問題' }, { label: 'C', text: 'To skip the design cycle 跳過設計循環' }, { label: 'D', text: 'To avoid testing the product 避免測試產品' }],
      answer: 'B',
    },
    {
      question: 'What should you do after proposing design solutions? 提出設計方案後應該做什麼？',
      options: [{ label: 'A', text: 'Ignore the solutions 忽略方案' }, { label: 'B', text: 'Compare various considerations 比較各種考慮因素' }, { label: 'C', text: 'Stop the design process 停止設計過程' }, { label: 'D', text: 'Skip testing 跳過測試' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a part of the design cycle? 以下哪項不是設計循環的一部分？',
      options: [{ label: 'A', text: 'Identifying needs 確定需求' }, { label: 'B', text: 'Testing the product 測試產品' }, { label: 'C', text: 'Ignoring feedback 忽略反饋' }, { label: 'D', text: 'Communicating solutions 溝通解決方案' }],
      answer: 'C',
    },
    {
      question: 'What is the purpose of testing the engineering model? 測試工程模型的目的是什麼？',
      options: [{ label: 'A', text: 'To find and fix problems 發現並解決問題' }, { label: 'B', text: 'To make the model look pretty 讓模型看起來漂亮' }, { label: 'C', text: 'To skip the design cycle 跳過設計循環' }, { label: 'D', text: 'To ignore feedback 忽略反饋' }],
      answer: 'A',
    },
    {
      question: 'Which tool is most appropriate for creating a detailed diagram of a design? 哪種工具最適合用於創建設計的詳細圖表？',
      options: [{ label: 'A', text: 'A hammer 錘子' }, { label: 'B', text: 'A ruler and pencil 尺和鉛筆' }, { label: 'C', text: 'A spoon 勺子' }, { label: 'D', text: 'A pair of scissors 剪刀' }],
      answer: 'B',
    },
    {
      question: 'Why is it important to consider practicality in a design? 為什麼在設計中考慮實用性很重要？',
      options: [{ label: 'A', text: 'To make the design unusable 使設計無法使用' }, { label: 'B', text: 'To ensure the design works in real life 確保設計在現實生活中可行' }, { label: 'C', text: 'To ignore user needs 忽略用戶需求' }, { label: 'D', text: 'To make the design more expensive 使設計更昂貴' }],
      answer: 'B',
    },
    {
      question: 'What should you do after testing the engineering model? 測試工程模型後應該做什麼？',
      options: [{ label: 'A', text: 'Ignore the results 忽略結果' }, { label: 'B', text: 'Improve the model 改進模型' }, { label: 'C', text: 'Stop the design process 停止設計過程' }, { label: 'D', text: 'Throw away the model 扔掉模型' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a way to illustrate design ideas? 以下哪種方法是說明設計想法的方式？',
      options: [{ label: 'A', text: 'Using only text 僅使用文字' }, { label: 'B', text: 'Using text, icons, images, and diagrams 使用文字、圖標、圖像和圖表' }, { label: 'C', text: 'Ignoring visuals 忽略視覺元素' }, { label: 'D', text: 'Using only colors 僅使用顏色' }],
      answer: 'B',
    },
    {
      question: 'What is the final step in the design cycle? 設計循環的最後一步是什麼？',
      options: [{ label: 'A', text: 'Identify needs 確定需求' }, { label: 'B', text: 'Communicate the solutions 溝通解決方案' }, { label: 'C', text: 'Skip testing 跳過測試' }, { label: 'D', text: 'Ignore feedback 忽略反饋' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'The design cycle is a linear process with no repeating steps. 設計循環是一個沒有重複步驟的線性過程。', answer: false },
    { statement: 'Collecting information helps in understanding the problem better. 收集信息有助於更好地理解問題。', answer: true },
    { statement: 'Testing the product is not necessary if the design looks good. 如果設計看起來很好，就不需要測試產品。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe one problem you might encounter when designing a bridge and how you would solve it. 描述你在設計橋樑時可能遇到的一個問題以及你會如何解決它。',
    },
    {
      question: 'Explain why it is important to consider aesthetics in a design. 解釋為什麼在設計中考慮美學很重要。',
    },
    {
      question: 'How would you test a model of a new toy to ensure it is safe for children? 你會如何測試一個新玩具的模型以確保它對兒童是安全的？',
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
            The design cycle is a systematic approach to solving engineering problems through identifying needs, collecting information, proposing solutions, and testing models. This process helps students develop critical thinking and problem-solving skills while creating practical and aesthetic designs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Apply design cycle to design engineering models or products: Identify needs and the problem, Collect information relevant to the problem, and point out the shortcomings of the existing practices, Propose more than one design solution that meet the constraints, Compare various considerations, take into account practicality and aesthetics, to determine the feasibility of the design solutions, Give suggestions to others’ design solutions, Illustrate design ideas through comprehensive use of text, icons, images, diagrams, etc., Select and use appropriate tools and materials to make the engineering model or product, Test and improve the engineering model or product, Communicate the solutions to the problem, review and evaluate the effectiveness of the solutions</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Design and build a simple bridge using everyday materials</li>
              <li>Create a prototype of a water filtration system</li>
              <li>Participate in a design challenge to improve a classroom object</li>
              <li>Present and evaluate peer design solutions</li>
              <li>Test and refine a paper airplane design for optimal flight</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand and apply the design cycle to create functional solutions while considering practical constraints and aesthetic values.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for systematic problem-solving approaches</li>
              <li>Respect for diverse design perspectives and solutions</li>
              <li>Perseverance in improving designs through iteration</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how engineering impacts daily life and society</li>
              <li>Exploring sustainable design practices and their importance</li>
              <li>Connecting classroom learning to real-world applications</li>
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