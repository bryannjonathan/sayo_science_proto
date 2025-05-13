'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the primary reason for conserving biodiversity? 保護生物多樣性的主要原因是什麼？',
      options: [{ label: 'A', text: 'To maintain ecological balance and ecosystem services 維持生態平衡和生態系統服務' }, { label: 'B', text: 'To increase tourism revenue 增加旅遊收入' }, { label: 'C', text: 'To reduce the cost of medical research 降低醫學研究成本' }, { label: 'D', text: 'To create more jobs 創造更多就業機會' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of an endangered species in Hong Kong? 以下哪個是香港的瀕危物種例子？',
      options: [{ label: 'A', text: 'Chinese White Dolphin 中華白海豚' }, { label: 'B', text: 'Domestic Cat 家貓' }, { label: 'C', text: 'Common Pigeon 普通鴿子' }, { label: 'D', text: 'House Sparrow 麻雀' }],
      answer: 'A',
    },
    {
      question: 'What is the purpose of establishing conservation areas? 建立保護區的目的是什麼？',
      options: [{ label: 'A', text: 'To protect natural habitats and species 保護自然棲息地和物種' }, { label: 'B', text: 'To promote urban development 促進城市發展' }, { label: 'C', text: 'To increase industrial activities 增加工業活動' }, { label: 'D', text: 'To reduce public access to nature 減少公眾接觸自然的機會' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a measure for ecological restoration? 以下哪項是生態恢復的措施？',
      options: [{ label: 'A', text: 'Reforestation 重新造林' }, { label: 'B', text: 'Increasing pollution levels 增加污染水平' }, { label: 'C', text: 'Expanding urban areas 擴大城市面積' }, { label: 'D', text: 'Reducing green spaces 減少綠地' }],
      answer: 'A',
    },
    {
      question: 'What role do governments play in conservation? 政府在保護環境中扮演什麼角色？',
      options: [{ label: 'A', text: 'Implementing policies and laws 實施政策和法律' }, { label: 'B', text: 'Encouraging deforestation 鼓勵砍伐森林' }, { label: 'C', text: 'Promoting industrial pollution 促進工業污染' }, { label: 'D', text: 'Ignoring environmental issues 忽略環境問題' }],
      answer: 'A',
    },
    {
      question: 'Why is biodiversity important for humans? 為什麼生物多樣性對人類很重要？',
      options: [{ label: 'A', text: 'It provides resources like food and medicine 它提供食物和藥物等資源' }, { label: 'B', text: 'It increases global warming 它增加全球暖化' }, { label: 'C', text: 'It reduces the number of species 它減少物種數量' }, { label: 'D', text: 'It has no impact on human life 它對人類生活沒有影響' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a moral issue related to conservation? 以下哪項是與保護相關的道德問題？',
      options: [{ label: 'A', text: 'The right of species to exist 物種存在的權利' }, { label: 'B', text: 'The cost of conservation 保護的成本' }, { label: 'C', text: 'The speed of urbanisation 城市化的速度' }, { label: 'D', text: 'The popularity of conservation 保護的普及度' }],
      answer: 'A',
    },
    {
      question: 'What is a key factor in the decline of biodiversity? 生物多樣性下降的關鍵因素是什麼？',
      options: [{ label: 'A', text: 'Habitat destruction 棲息地破壞' }, { label: 'B', text: 'Increase in conservation areas 保護區的增加' }, { label: 'C', text: 'Reduction in pollution 污染的減少' }, { label: 'D', text: 'Growth of green spaces 綠地的增長' }],
      answer: 'A',
    },
    {
      question: 'How can individuals contribute to conservation? 個人如何為保護環境做出貢獻？',
      options: [{ label: 'A', text: 'Reducing waste and recycling 減少廢物和回收' }, { label: 'B', text: 'Increasing energy consumption 增加能源消耗' }, { label: 'C', text: 'Ignoring environmental issues 忽略環境問題' }, { label: 'D', text: 'Supporting deforestation 支持砍伐森林' }],
      answer: 'A',
    },
    {
      question: 'What is the aesthetic value of biodiversity? 生物多樣性的美學價值是什麼？',
      options: [{ label: 'A', text: 'It enhances the beauty of natural landscapes 它增強自然景觀的美感' }, { label: 'B', text: 'It reduces the variety of species 它減少物種的多樣性' }, { label: 'C', text: 'It increases pollution levels 它增加污染水平' }, { label: 'D', text: 'It has no impact on aesthetics 它對美學沒有影響' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Biodiversity is essential for ecosystem stability. 生物多樣性對生態系統的穩定性至關重要。', answer: true },
    { statement: 'Conservation efforts only benefit the environment and not the economy. 保護工作只對環境有益，對經濟沒有好處。', answer: false },
    { statement: 'Ecological restoration can reverse some of the damage caused by human activities. 生態恢復可以逆轉人類活動造成的一些損害。', answer: true },
  ],
  open_ended: [
    {
      question: 'Discuss the economic implications of biodiversity conservation. 討論生物多樣性保護的經濟影響。',
    },
    {
      question: 'Explain the role of international cooperation in species conservation. 解釋國際合作在物種保護中的作用。',
    },
    {
      question: 'How can urbanisation and conservation be balanced? 如何平衡城市化和保護環境？',
    },
  ],
}

export default function ConservationPage() {
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
            Conservation
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will build on their prior knowledge of basic ecological principles and develop a further understanding of applied ecology. Students will explore some of the ways in which human activities can impose far-reaching effects on the environment. Local and global pollution issues, resources management, pollution control measures and conservation will be also discussed. At the end, students are expected to apply a range of field study skills to investigate the impact of pollution on the local environment. Applied Ecology builds on students’ prior knowledge of the Diversity of life forms, Essential life processes, Ecosystems and Health and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Importance of biodiversity</li>
                <li>Conservation of species (HK endangered, protection measures)</li>
                <li>Conservation of habitats (Conservation areas)</li>
                <li>Ecological restoration</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Discuss endangered species conservation (population, reasons, measures, cooperation); government policies.</li>
                <li>Visit conservation area.</li>
                <li>Search info on conservation work by groups/government.</li>
                <li>Debate urbanisation/industrialisation vs conservation dilemma.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand need for conservation.</li>
                <li>Recognise biodiversity preservation measures.</li>
                <li>Be aware of economic, ecological, aesthetic, moral conservation issues.</li>
                <li>Discuss individual/government roles in conservation.</li>
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