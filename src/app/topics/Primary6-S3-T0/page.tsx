'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What should scientists consider when developing new technology? 科學家在開發新技術時應該考慮什麼？',
      options: [{ label: 'A', text: 'Only the benefits of the technology 只考慮技術的好處' }, { label: 'B', text: 'The balance between benefits and ethical concerns 技術的好處與倫理問題之間的平衡' }, { label: 'C', text: 'The cost of the technology 技術的成本' }, { label: 'D', text: 'The popularity of the technology 技術的普及程度' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of how science and technology have changed human life? 以下哪個是科學和技術改變人類生活的例子？',
      options: [{ label: 'A', text: 'The invention of the wheel 輪子的發明' }, { label: 'B', text: 'The discovery of fire 火的發現' }, { label: 'C', text: 'The development of smartphones 智能手機的發展' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Why is it important to recognize the limitations of scientific knowledge? 為什麼認識科學知識的局限性很重要？',
      options: [{ label: 'A', text: 'To avoid making mistakes 避免犯錯' }, { label: 'B', text: 'To encourage further research 鼓勵進一步的研究' }, { label: 'C', text: 'To understand that science cannot answer all questions 理解科學無法回答所有問題' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is a potential ethical concern related to genetic engineering? 與基因工程相關的潛在倫理問題是什麼？',
      options: [{ label: 'A', text: 'It can cure diseases 它可以治癒疾病' }, { label: 'B', text: 'It can create designer babies 它可以創造設計嬰兒' }, { label: 'C', text: 'It can improve crop yields 它可以提高作物產量' }, { label: 'D', text: 'It can reduce pollution 它可以減少污染' }],
      answer: 'B',
    },
    {
      question: 'How can technology help protect the environment? 技術如何幫助保護環境？',
      options: [{ label: 'A', text: 'By reducing waste 通過減少廢物' }, { label: 'B', text: 'By increasing energy efficiency 通過提高能源效率' }, { label: 'C', text: 'By developing renewable energy sources 通過開發可再生能源' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is a limitation of scientific knowledge? 科學知識的局限性是什麼？',
      options: [{ label: 'A', text: 'It is always correct 它總是正確的' }, { label: 'B', text: 'It can answer all questions 它可以回答所有問題' }, { label: 'C', text: 'It is constantly evolving 它不斷發展' }, { label: 'D', text: 'It is based on evidence 它基於證據' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is an ethical issue in science? 以下哪個是科學中的倫理問題？',
      options: [{ label: 'A', text: 'Using animals for testing 使用動物進行測試' }, { label: 'B', text: 'Discovering new planets 發現新行星' }, { label: 'C', text: 'Building taller buildings 建造更高的建築物' }, { label: 'D', text: 'Inventing new toys 發明新玩具' }],
      answer: 'A',
    },
    {
      question: 'How has the internet changed human life? 互聯網如何改變人類生活？',
      options: [{ label: 'A', text: 'By making communication faster 通過使溝通更快' }, { label: 'B', text: 'By providing access to information 通過提供信息訪問' }, { label: 'C', text: 'By enabling online shopping 通過實現網上購物' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What should be the priority when developing new technology? 開發新技術時應該優先考慮什麼？',
      options: [{ label: 'A', text: 'Profit 利潤' }, { label: 'B', text: 'Human well-being 人類福祉' }, { label: 'C', text: 'Speed of development 發展速度' }, { label: 'D', text: 'Popularity 普及程度' }],
      answer: 'B',
    },
    {
      question: 'Why is it important to question scientific findings? 為什麼質疑科學發現很重要？',
      options: [{ label: 'A', text: 'To ensure accuracy 確保準確性' }, { label: 'B', text: 'To encourage critical thinking 鼓勵批判性思維' }, { label: 'C', text: 'To improve scientific understanding 提高科學理解' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Scientific knowledge is always complete and never changes. 科學知識總是完整且永不改變。', answer: false },
    { statement: 'Technology can have both positive and negative impacts on society. 技術對社會既有正面也有負面影響。', answer: true },
    { statement: 'Ethical considerations are not important in scientific research. 倫理考慮在科學研究中不重要。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give an example of how science and technology have improved healthcare. 舉一個科學和技術改善醫療保健的例子。',
    },
    {
      question: 'What are some ethical concerns related to artificial intelligence? 與人工智能相關的一些倫理問題是什麼？',
    },
    {
      question: 'How can we ensure that scientific advancements benefit everyone? 我們如何確保科學進步使每個人受益？',
    },
  ],
};

export default function ScienceAndTechnologyCreateValueAndChangeHumanLifePage() {
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
             Science and technology create value and change human life
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Science and technology drive progress by solving problems and improving quality of life. They transform how we live, work, and interact while raising important ethical considerations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the balance between scientific and technological development and ethics</li>
                <li>Be aware of the limitations of scientific knowledge</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Debate the ethics of a new technology</li>
              <li>Create a timeline of major scientific breakthroughs</li>
              <li>Interview family members about technology changes they've witnessed</li>
              <li>Design a solution for a community problem using technology</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how science and technology shape society and be able to evaluate their impacts critically.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for scientific progress and its benefits</li>
              <li>Responsibility in technology use and development</li>
              <li>Curiosity about emerging technologies</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How medical technologies extend and improve lives</li>
              <li>Environmental impacts of technological solutions</li>
              <li>Global collaboration in scientific research</li>
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