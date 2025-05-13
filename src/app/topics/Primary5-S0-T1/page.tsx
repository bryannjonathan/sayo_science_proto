'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which stage of human development is characterized by rapid physical growth and the onset of puberty? 人類發展的哪個階段以快速的身體成長和青春期的開始為特徵?',
      options: [{ label: 'A', text: 'Infancy 嬰兒期' }, { label: 'B', text: 'Childhood 兒童期' }, { label: 'C', text: 'Adolescence 青春期' }, { label: 'D', text: 'Adulthood 成年期' }],
      answer: 'C',
    },
    {
      question: 'What is a common psychological change during adolescence? 青春期常見的心理變化是什麼?',
      options: [{ label: 'A', text: 'Increased independence 獨立性增加' }, { label: 'B', text: 'Decreased curiosity 好奇心減少' }, { label: 'C', text: 'No emotional changes 沒有情緒變化' }, { label: 'D', text: 'Reduced social interaction 社交互動減少' }],
      answer: 'A',
    },
    {
      question: 'Which factor does NOT influence growth and development during adolescence? 以下哪個因素不會影響青春期的成長和發育?',
      options: [{ label: 'A', text: 'Heredity 遺傳' }, { label: 'B', text: 'Nutrition 營養' }, { label: 'C', text: 'Sleep 睡眠' }, { label: 'D', text: 'Favorite color 喜愛的顏色' }],
      answer: 'D',
    },
    {
      question: 'During which stage do humans typically learn to walk and talk? 人類通常在哪個階段學會走路和說話?',
      options: [{ label: 'A', text: 'Infancy 嬰兒期' }, { label: 'B', text: 'Childhood 兒童期' }, { label: 'C', text: 'Adolescence 青春期' }, { label: 'D', text: 'Late adulthood 老年期' }],
      answer: 'A',
    },
    {
      question: 'What is a common physical change in females during adolescence? 女性在青春期常見的身體變化是什麼?',
      options: [{ label: 'A', text: 'Development of breasts 乳房發育' }, { label: 'B', text: 'Deepening of voice 聲音變低沉' }, { label: 'C', text: 'Facial hair growth 面部毛髮生長' }, { label: 'D', text: 'No physical changes 沒有身體變化' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a characteristic of late adulthood? 以下哪一項是老年期的特徵?',
      options: [{ label: 'A', text: 'Rapid growth 快速成長' }, { label: 'B', text: 'Decreased physical strength 體力下降' }, { label: 'C', text: 'Onset of puberty 青春期開始' }, { label: 'D', text: 'Learning to walk 學習走路' }],
      answer: 'B',
    },
    {
      question: 'Why is nutrition important during adolescence? 為什麼營養在青春期很重要?',
      options: [{ label: 'A', text: 'It supports rapid growth and development 它支持快速成長和發育' }, { label: 'B', text: 'It prevents aging 它防止衰老' }, { label: 'C', text: 'It stops puberty 它停止青春期' }, { label: 'D', text: 'It has no effect 它沒有影響' }],
      answer: 'A',
    },
    {
      question: 'What is a common physical change in males during adolescence? 男性在青春期常見的身體變化是什麼?',
      options: [{ label: 'A', text: 'Development of breasts 乳房發育' }, { label: 'B', text: 'Deepening of voice 聲音變低沉' }, { label: 'C', text: 'No physical changes 沒有身體變化' }, { label: 'D', text: 'Shrinking in height 身高縮短' }],
      answer: 'B',
    },
    {
      question: 'Which stage follows childhood in the human life cycle? 人類生命週期中，兒童期之後是哪個階段?',
      options: [{ label: 'A', text: 'Infancy 嬰兒期' }, { label: 'B', text: 'Adolescence 青春期' }, { label: 'C', text: 'Late adulthood 老年期' }, { label: 'D', text: 'Adulthood 成年期' }],
      answer: 'B',
    },
    {
      question: 'What should adolescents do to support healthy growth and development? 青少年應該做什麼來支持健康的成長和發育?',
      options: [{ label: 'A', text: 'Eat a balanced diet 均衡飲食' }, { label: 'B', text: 'Get enough sleep 獲得足夠的睡眠' }, { label: 'C', text: 'Exercise regularly 定期運動' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Adolescence is the stage between childhood and adulthood. 青春期是兒童期和成年期之間的階段。', answer: true },
    { statement: 'Nutrition has no effect on growth and development during adolescence. 營養對青春期的成長和發育沒有影響。', answer: false },
    { statement: 'All individuals experience the same changes at the same time during adolescence. 所有個體在青春期都會在同一時間經歷相同的變化。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe two physiological changes that occur during adolescence. 描述青春期發生的兩個生理變化。',
    },
    {
      question: 'Explain why heredity is an important factor in growth and development. 解釋為什麼遺傳是成長和發育的重要因素。',
    },
    {
      question: 'How can individual differences in growth and development during adolescence be accepted? 如何接受青春期成長和發育的個體差異?',
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
            All living things go through a life cycle from birth to death. This includes stages like growth, reproduction, and aging. Understanding these stages helps us appreciate the diversity and continuity of life.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Describe the characteristics of different developmental stages in humans (infancy, childhood, adolescence, adulthood, and late adulthood)</li>
                <li>Recognise the physiological and psychological changes in males and females during adolescence</li>
                <li>Recognise the factors that influence growth and development during adolescence (e.g. heredity, nutrition, sleep and exercise, etc.)</li>
                <li>Accept individual differences in growth and development during adolescence</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a life cycle timeline for different organisms</li>
              <li>Compare and contrast human development stages through group discussions</li>
              <li>Observe and document plant growth from seed to maturity</li>
              <li>Role-play different life stages to understand changes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the stages of life cycles and recognize patterns in growth and development. They will appreciate how living things change over time.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Respect for all stages of life and aging</li>
              <li>Appreciation for the diversity of life cycles</li>
              <li>Patience in observing developmental changes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>How human life expectancy has changed with medical advances</li>
              <li>The impact of environmental factors on organism development</li>
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