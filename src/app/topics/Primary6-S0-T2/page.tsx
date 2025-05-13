'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is an endangered species? 以下哪一種是瀕危物種?',
      options: [{ label: 'A', text: 'Panda 熊貓' }, { label: 'B', text: 'Dog 狗' }, { label: 'C', text: 'Cat 貓' }, { label: 'D', text: 'Cow 牛' }],
      answer: 'A',
    },
    {
      question: 'What is the main reason for the extinction of many species? 許多物種滅絕的主要原因是什麼?',
      options: [{ label: 'A', text: 'Natural disasters 自然災害' }, { label: 'B', text: 'Human activities 人類活動' }, { label: 'C', text: 'Climate change 氣候變化' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which human activity contributes most to habitat destruction? 哪種人類活動對棲息地破壞的影響最大?',
      options: [{ label: 'A', text: 'Deforestation 砍伐森林' }, { label: 'B', text: 'Fishing 捕魚' }, { label: 'C', text: 'Cycling 騎自行車' }, { label: 'D', text: 'Reading 閱讀' }],
      answer: 'A',
    },
    {
      question: 'How can we protect endangered species? 我們如何保護瀕危物種?',
      options: [{ label: 'A', text: 'By creating protected areas 建立保護區' }, { label: 'B', text: 'By hunting them 獵殺牠們' }, { label: 'C', text: 'By ignoring them 忽略牠們' }, { label: 'D', text: 'By keeping them as pets 將牠們當作寵物' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a method to conserve endangered species? 以下哪一種是保護瀕危物種的方法?',
      options: [{ label: 'A', text: 'Poaching 偷獵' }, { label: 'B', text: 'Habitat restoration 棲息地恢復' }, { label: 'C', text: 'Polluting rivers 污染河流' }, { label: 'D', text: 'Cutting down trees 砍伐樹木' }],
      answer: 'B',
    },
    {
      question: 'Why are pandas endangered? 為什麼熊貓瀕臨滅絕?',
      options: [{ label: 'A', text: 'Loss of habitat 棲息地喪失' }, { label: 'B', text: 'Too many predators 太多捕食者' }, { label: 'C', text: 'They don\'t reproduce 牠們不繁殖' }, { label: 'D', text: 'They are too big 牠們太大' }],
      answer: 'A',
    },
    {
      question: 'What can students do to help protect endangered species? 學生可以做什麼來幫助保護瀕危物種?',
      options: [{ label: 'A', text: 'Learn about them 學習有關牠們的知識' }, { label: 'B', text: 'Spread awareness 提高意識' }, { label: 'C', text: 'Support conservation efforts 支持保護工作' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which organization helps protect endangered species? 哪個組織幫助保護瀕危物種?',
      options: [{ label: 'A', text: 'WWF 世界自然基金會' }, { label: 'B', text: 'NASA 美國太空總署' }, { label: 'C', text: 'UNICEF 聯合國兒童基金會' }, { label: 'D', text: 'Red Cross 紅十字會' }],
      answer: 'A',
    },
    {
      question: 'What is the biggest threat to marine species? 對海洋物種最大的威脅是什麼?',
      options: [{ label: 'A', text: 'Plastic pollution 塑料污染' }, { label: 'B', text: 'Too much sunlight 太多陽光' }, { label: 'C', text: 'Lack of water 缺水' }, { label: 'D', text: 'Too many fish 太多魚' }],
      answer: 'A',
    },
    {
      question: 'Why is biodiversity important? 為什麼生物多樣性很重要?',
      options: [{ label: 'A', text: 'It keeps ecosystems balanced 它保持生態系統平衡' }, { label: 'B', text: 'It makes the planet look pretty 它讓地球看起來漂亮' }, { label: 'C', text: 'It is not important 它不重要' }, { label: 'D', text: 'It helps humans only 它只幫助人類' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'All endangered species are large animals. 所有瀕危物種都是大型動物。', answer: false },
    { statement: 'Planting trees can help protect endangered species. 植樹可以幫助保護瀕危物種。', answer: true },
    { statement: 'Pollution has no effect on endangered species. 污染對瀕危物種沒有影響。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name three endangered species and explain why they are endangered. 列出三種瀕危物種並解釋牠們為什麼瀕危。',
    },
    {
      question: 'What are some ways humans can reduce their impact on the environment? 人類可以通過哪些方式減少對環境的影響?',
    },
    {
      question: 'Why should we care about endangered species? 為什麼我們應該關心瀕危物種?',
    },
  ],
};

export default function ImpactOfHumanBehaviorOnTheNaturalEnvironmentPage() {
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
             Impact of human behavior on the natural environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Human activities significantly affect the natural environment, leading to habitat destruction, pollution, and climate change. Understanding these impacts helps us develop strategies to protect ecosystems and endangered species.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise some endangered species</li>
                <li>Explain why endangered species are on the verge of extinction</li>
                <li>Recognise some methods of protecting endangered species</li>
                <li>Respect and care for life, and show concern for endangered species</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a poster showcasing endangered species and their habitats</li>
              <li>Role-play scenarios demonstrating human impacts on ecosystems</li>
              <li>Conduct a classroom debate on conservation strategies</li>
              <li>Design a wildlife protection campaign for your school</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how human actions affect ecosystems and be able to propose solutions to minimize negative environmental impacts.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing empathy for all living creatures</li>
              <li>Taking responsibility for environmental protection</li>
              <li>Appreciating the interconnectedness of life</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Examining how technology can help monitor endangered species</li>
              <li>Understanding government policies for wildlife protection</li>
              <li>Exploring sustainable development practices</li>
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