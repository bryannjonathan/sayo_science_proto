'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is NOT one of the 4Rs of pollution control? 以下哪項不是污染控制的4R原則之一？',
      options: [{ label: 'A', text: 'Reduce 減少' }, { label: 'B', text: 'Reuse 重用' }, { label: 'C', text: 'Recycle 回收' }, { label: 'D', text: 'Remove 移除' }],
      answer: 'D',
    },
    {
      question: 'What is the primary purpose of sewage treatment? 污水處理的主要目的是什麼？',
      options: [{ label: 'A', text: 'To remove pollutants and make water safe for discharge 去除污染物，使水安全排放' }, { label: 'B', text: 'To increase water temperature 提高水溫' }, { label: 'C', text: 'To add nutrients to the water 向水中添加營養物質' }, { label: 'D', text: 'To change the color of water 改變水的顏色' }],
      answer: 'A',
    },
    {
      question: 'Which biological process is commonly used in sewage treatment to break down organic matter? 污水處理中常用哪種生物過程來分解有機物？',
      options: [{ label: 'A', text: 'Photosynthesis 光合作用' }, { label: 'B', text: 'Respiration 呼吸作用' }, { label: 'C', text: 'Decomposition 分解作用' }, { label: 'D', text: 'Fermentation 發酵' }],
      answer: 'C',
    },
    {
      question: 'What is the main benefit of recycling? 回收的主要好處是什麼？',
      options: [{ label: 'A', text: 'Reduces waste and conserves resources 減少廢物並保護資源' }, { label: 'B', text: 'Increases pollution 增加污染' }, { label: 'C', text: 'Uses more energy 使用更多能源' }, { label: 'D', text: 'Decreases job opportunities 減少就業機會' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of reusing materials? 以下哪項是重用材料的例子？',
      options: [{ label: 'A', text: 'Using a plastic bottle as a flower pot 用塑料瓶作為花盆' }, { label: 'B', text: 'Burning old newspapers 焚燒舊報紙' }, { label: 'C', text: 'Throwing away broken glass 丟棄破碎的玻璃' }, { label: 'D', text: 'Buying new items instead of repairing old ones 購買新物品而不是修理舊物品' }],
      answer: 'A',
    },
    {
      question: 'What is the role of microorganisms in sewage treatment? 微生物在污水處理中的作用是什麼？',
      options: [{ label: 'A', text: 'They break down organic matter 它們分解有機物' }, { label: 'B', text: 'They increase the pH of water 它們提高水的pH值' }, { label: 'C', text: 'They add toxins to the water 它們向水中添加毒素' }, { label: 'D', text: 'They make the water more acidic 它們使水更酸' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a pollution control strategy? 以下哪項是污染控制策略？',
      options: [{ label: 'A', text: 'Using public transportation 使用公共交通工具' }, { label: 'B', text: 'Burning fossil fuels 燃燒化石燃料' }, { label: 'C', text: 'Dumping waste into rivers 將廢物傾倒入河流' }, { label: 'D', text: 'Using single-use plastics 使用一次性塑料' }],
      answer: 'A',
    },
    {
      question: 'What is the final stage of sewage treatment? 污水處理的最後階段是什麼？',
      options: [{ label: 'A', text: 'Tertiary treatment 三級處理' }, { label: 'B', text: 'Primary treatment 初級處理' }, { label: 'C', text: 'Secondary treatment 二級處理' }, { label: 'D', text: 'Preliminary treatment 預處理' }],
      answer: 'A',
    },
    {
      question: 'Which of the following materials is NOT commonly recycled? 以下哪種材料通常不被回收？',
      options: [{ label: 'A', text: 'Plastic bags 塑料袋' }, { label: 'B', text: 'Glass bottles 玻璃瓶' }, { label: 'C', text: 'Aluminum cans 鋁罐' }, { label: 'D', text: 'Paper 紙張' }],
      answer: 'A',
    },
    {
      question: 'What is the main goal of pollution control? 污染控制的主要目標是什麼？',
      options: [{ label: 'A', text: 'To protect human health and the environment 保護人類健康和環境' }, { label: 'B', text: 'To increase industrial production 增加工業生產' }, { label: 'C', text: 'To reduce the cost of waste disposal 降低廢物處理成本' }, { label: 'D', text: 'To promote the use of fossil fuels 促進化石燃料的使用' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Recycling helps to conserve natural resources. 回收有助於保護自然資源。', answer: true },
    { statement: 'Sewage treatment only involves physical processes. 污水處理僅涉及物理過程。', answer: false },
    { statement: 'Pollution control strategies can help mitigate climate change. 污染控制策略可以幫助緩解氣候變化。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe the biological principles involved in sewage treatment. 描述污水處理中涉及的生物學原理。',
    },
    {
      question: 'How can individuals contribute to pollution control in their daily lives? 個人如何在日常生活中為污染控制做出貢獻？',
    },
    {
      question: 'Explain the social and environmental implications of sewage treatment. 解釋污水處理的社會和環境影響。',
    },
  ],
}

export default function PollutionControlPage() {
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
            Pollution control
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will build on their prior knowledge of basic ecological principles and develop a further understanding of applied ecology. Students will explore some of the ways in which human activities can impose far-reaching effects on the environment. Local and global pollution issues, resources management, pollution control measures and conservation will be also discussed. At the end, students are expected to apply a range of field study skills to investigate the impact of pollution on the local environment. Applied Ecology builds on students’ prior knowledge of the Diversity of life forms, Essential life processes, Ecosystems and Health and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Reduce, reuse, recycle, replace</li>
                <li>Sewage treatment</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Search info on joint government efforts for regional air pollution control.</li>
                <li>Develop action plans to reduce environmental pollution.</li>
                <li>Visit sewage treatment plant.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Recognise pollution control strategies.</li>
                <li>Describe biological principles of sewage treatment.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
                <li>Show an interest in the study of biology, appreciate the wonders and complexity of Nature, and show respect for all living things and the environment;</li>
                <li>Recognise their responsibility for conserving, protecting and maintaining the quality of the environment;</li>
                <li>Develop positive values and attitudes towards adopting a healthy lifestyle;</li>
                <li>Be aware of the dynamic nature of biological knowledge and appreciate the role of science and technology in understanding the living world;</li>
                <li>Be aware of the application of biological knowledge in society and its social, ethical, economic and environmental implications.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
                <li>Be aware of the application of ecological knowledge in society and its social, ethical, economic and environmental implications;</li>
                <li>Analyse ways in which scientific and technological advancement have influenced our lives, society and the environment (e.g. pollution resulting from industrialisation and urbanisation);</li>
                <li>Develop sensitivity and responsibility in striking a balance between the needs of humans and a sustainable environment;</li>
                <li>Explain how biological knowledge is used in technological application for management of the environment (e.g. sewage treatment).</li>
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