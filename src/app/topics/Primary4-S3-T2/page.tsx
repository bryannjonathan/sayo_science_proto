'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the first step in the design cycle? 設計循環的第一步是什麼?',
      options: [{ label: 'A', text: 'Identify needs and the problem 識別需求和問題' }, { label: 'B', text: 'Collect information 收集信息' }, { label: 'C', text: 'Propose a design solution 提出設計方案' }, { label: 'D', text: 'Test the product 測試產品' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to collect information before designing a product? 為什麼在設計產品之前收集信息很重要?',
      options: [{ label: 'A', text: 'To save time 為了節省時間' }, { label: 'B', text: 'To understand the problem better 為了更好地理解問題' }, { label: 'C', text: 'To skip the testing step 為了跳過測試步驟' }, { label: 'D', text: 'To make the product look pretty 為了讓產品看起來漂亮' }],
      answer: 'B',
    },
    {
      question: 'What should you do after proposing a design solution? 提出設計方案後應該做什麼?',
      options: [{ label: 'A', text: 'Illustrate the design idea by a sketch 用草圖說明設計想法' }, { label: 'B', text: 'Start selling the product 開始銷售產品' }, { label: 'C', text: 'Ignore the constraints 忽略限制條件' }, { label: 'D', text: 'Stop the design process 停止設計過程' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a step in the design cycle? 以下哪一項不是設計循環的步驟?',
      options: [{ label: 'A', text: 'Identify needs and the problem 識別需求和問題' }, { label: 'B', text: 'Collect information 收集信息' }, { label: 'C', text: 'Forget about the problem 忘記問題' }, { label: 'D', text: 'Test and improve the product 測試和改進產品' }],
      answer: 'C',
    },
    {
      question: 'What is the purpose of testing an engineering model? 測試工程模型的目的是什麼?',
      options: [{ label: 'A', text: 'To find and fix problems 發現並解決問題' }, { label: 'B', text: 'To make it look colorful 讓它看起來色彩繽紛' }, { label: 'C', text: 'To skip the design process 跳過設計過程' }, { label: 'D', text: 'To make it heavier 讓它更重' }],
      answer: 'A',
    },
    {
      question: 'Which tool is commonly used to make a simple engineering model? 哪種工具常用於製作簡單的工程模型?',
      options: [{ label: 'A', text: 'Scissors and glue 剪刀和膠水' }, { label: 'B', text: 'A computer only 僅用電腦' }, { label: 'C', text: 'A hammer only 僅用錘子' }, { label: 'D', text: 'A paintbrush only 僅用畫筆' }],
      answer: 'A',
    },
    {
      question: 'What should you consider when improving a product? 改進產品時應該考慮什麼?',
      options: [{ label: 'A', text: 'Practicality and aesthetics 實用性和美觀性' }, { label: 'B', text: 'Only the color 僅考慮顏色' }, { label: 'C', text: 'Only the size 僅考慮大小' }, { label: 'D', text: 'Only the weight 僅考慮重量' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to communicate the design solution? 為什麼溝通設計方案很重要?',
      options: [{ label: 'A', text: 'To share ideas and get feedback 分享想法並獲得反饋' }, { label: 'B', text: 'To keep it a secret 保密' }, { label: 'C', text: 'To avoid testing 避免測試' }, { label: 'D', text: 'To make it more expensive 讓它更昂貴' }],
      answer: 'A',
    },
    {
      question: 'What is the final step in the design cycle? 設計循環的最後一步是什麼?',
      options: [{ label: 'A', text: 'Communicate the solution 溝通解決方案' }, { label: 'B', text: 'Identify the problem 識別問題' }, { label: 'C', text: 'Collect information 收集信息' }, { label: 'D', text: 'Propose a design 提出設計' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a constraint in design? 以下哪一項是設計中的限制條件?',
      options: [{ label: 'A', text: 'Limited materials 有限的材料' }, { label: 'B', text: 'Unlimited time 無限的時間' }, { label: 'C', text: 'No problem to solve 沒有問題需要解決' }, { label: 'D', text: 'No need for testing 不需要測試' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The first step in the design cycle is to propose a design solution. 設計循環的第一步是提出設計方案。', answer: false },
    { statement: 'Testing and improving the product is an important step in the design cycle. 測試和改進產品是設計循環中的重要步驟。', answer: true },
    { statement: 'You do not need to communicate your design solution to others. 你不需要向他人溝通你的設計方案。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe one step in the design cycle and explain why it is important. 描述設計循環中的一個步驟並解釋為什麼它很重要。',
    },
    {
      question: 'Give an example of how you would test an engineering model and improve it. 舉例說明你會如何測試一個工程模型並改進它。',
    },
    {
      question: 'What are some tools and materials you might use to make a simple engineering model? 你會使用哪些工具和材料來製作一個簡單的工程模型?',
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
            Explore the engineering design cycle and its real-world applications. Learn how to identify problems, create solutions, and improve designs through iterative testing and refinement.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of the basic steps of the design process</li>
                <li>Apply design cycle to design engineering models or products: Identify needs and the problem, Collect information relevant to the problem, and briefly evaluate existing approaches, Propose a design solution that meets the constraints, Illustrate the design idea by a sketch, Use simple tools and materials to make the engineering model or product, Test and improve the engineering model or product by considering practicality and aesthetics, Communicate briefly the solutions to the problem</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Design and build a simple bridge using straws and tape</li>
              <li>Create a paper airplane and test different designs</li>
              <li>Work in teams to solve a classroom design challenge</li>
              <li>Present your design solutions to classmates</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the design cycle and be able to apply it to create simple engineering solutions while considering constraints and improvements.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the creative problem-solving process</li>
              <li>Willingness to learn from failures and improve designs</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how engineering impacts daily life</li>
              <li>Recognizing the role of design in technological advancements</li>
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
  );
}