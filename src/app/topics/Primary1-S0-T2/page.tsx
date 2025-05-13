'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What happens to our height as we grow from infancy to childhood? 我們從嬰兒期成長到童年時，身高會發生什麼變化？',
      options: [{ label: 'A', text: 'It increases 增加' }, { label: 'B', text: 'It decreases 減少' }, { label: 'C', text: 'It stays the same 保持不變' }, { label: 'D', text: 'It disappears 消失' }],
      answer: 'A',
    },
    {
      question: 'What happens to our primary teeth as we grow? 我們成長時，乳牙會發生什麼變化？',
      options: [{ label: 'A', text: 'They fall out and are replaced by permanent teeth 它們會脫落並被恆牙取代' }, { label: 'B', text: 'They stay forever 它們永遠保留' }, { label: 'C', text: 'They turn into bones 它們變成骨頭' }, { label: 'D', text: 'They grow bigger 它們變大' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a major change during early childhood? 以下哪一項是幼兒期的主要變化？',
      options: [{ label: 'A', text: 'Learning to walk 學會走路' }, { label: 'B', text: 'Growing wings 長出翅膀' }, { label: 'C', text: 'Turning into a plant 變成植物' }, { label: 'D', text: 'Shrinking in size 體型縮小' }],
      answer: 'A',
    },
    {
      question: 'What happens to our weight as we grow? 我們成長時，體重會發生什麼變化？',
      options: [{ label: 'A', text: 'It usually increases 通常會增加' }, { label: 'B', text: 'It usually decreases 通常會減少' }, { label: 'C', text: 'It stays the same 保持不變' }, { label: 'D', text: 'It disappears 消失' }],
      answer: 'A',
    },
    {
      question: 'When do primary teeth usually start to fall out? 乳牙通常什麼時候開始脫落？',
      options: [{ label: 'A', text: 'During early childhood 在幼兒期' }, { label: 'B', text: 'When we are born 出生時' }, { label: 'C', text: 'When we are adults 成年時' }, { label: 'D', text: 'Never 永遠不會' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a sign of growth in childhood? 以下哪一項是童年時期成長的跡象？',
      options: [{ label: 'A', text: 'Getting taller 長高' }, { label: 'B', text: 'Getting shorter 變矮' }, { label: 'C', text: 'Staying the same height 保持同樣高度' }, { label: 'D', text: 'Losing all teeth 失去所有牙齒' }],
      answer: 'A',
    },
    {
      question: 'What replaces primary teeth? 什麼會取代乳牙？',
      options: [{ label: 'A', text: 'Permanent teeth 恆牙' }, { label: 'B', text: 'More primary teeth 更多的乳牙' }, { label: 'C', text: 'No teeth 沒有牙齒' }, { label: 'D', text: 'Fake teeth 假牙' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a major body change during growth? 以下哪一項不是成長過程中的主要身體變化？',
      options: [{ label: 'A', text: 'Growing feathers 長出羽毛' }, { label: 'B', text: 'Increasing in height 身高增加' }, { label: 'C', text: 'Losing primary teeth 乳牙脫落' }, { label: 'D', text: 'Gaining weight 體重增加' }],
      answer: 'A',
    },
    {
      question: 'What do we call the teeth that grow after primary teeth fall out? 乳牙脫落後長出的牙齒叫什麼？',
      options: [{ label: 'A', text: 'Permanent teeth 恆牙' }, { label: 'B', text: 'Baby teeth 嬰兒牙齒' }, { label: 'C', text: 'Temporary teeth 臨時牙齒' }, { label: 'D', text: 'Invisible teeth 隱形牙齒' }],
      answer: 'A',
    },
    {
      question: 'Which stage comes after infancy? 嬰兒期之後是哪個階段？',
      options: [{ label: 'A', text: 'Early childhood 幼兒期' }, { label: 'B', text: 'Adulthood 成年期' }, { label: 'C', text: 'Old age 老年期' }, { label: 'D', text: 'Teenage years 青少年期' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Our height increases as we grow from infancy to childhood. 我們從嬰兒期成長到童年時，身高會增加。', answer: true },
    { statement: 'Primary teeth stay with us forever. 乳牙會永遠留在我們身上。', answer: false },
    { statement: 'We lose our primary teeth and grow permanent teeth as we grow. 我們成長時會失去乳牙並長出恆牙。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name one major change that happens to your body as you grow from a baby to a child. 說出一個從嬰兒成長為兒童時，身體發生的主要變化。',
    },
    {
      question: 'Why do we lose our primary teeth? 我們為什麼會失去乳牙？',
    },
    {
      question: 'How can you tell that a child is growing? 你如何判斷一個兒童正在成長？',
    },
  ],
};

export default function LifeCycleOfLivingThingsPage() {
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
             Life cycle of living things
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            All living things go through different stages of life, from birth to growth and reproduction. This lesson explores how humans and other organisms change as they grow, focusing on physical development and life stages.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the major body changes during infancy, early childhood and childhood (e.g. increase in height and weight, loss of primary teeth and growth of permanent teeth)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a life cycle timeline for a human using pictures</li>
              <li>Compare growth patterns between different animals</li>
              <li>Measure and track classmates' height changes over time</li>
              <li>Plant seeds and observe plant life cycle stages</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the stages of life cycles and recognize growth patterns in living organisms, including humans, animals, and plants.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the natural process of growth and change</li>
              <li>Respect for all stages of life in living organisms</li>
              <li>Curiosity about developmental changes in different species</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how life cycles affect ecosystems</li>
              <li>Recognizing human impact on animal life cycles</li>
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