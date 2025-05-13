'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is friction? 什麼是摩擦力?',
      options: [{ label: 'A', text: 'A force that pulls objects towards each other 一種將物體拉向彼此的力' }, { label: 'B', text: 'A force that resists motion when objects rub against each other 一種當物體相互摩擦時阻礙運動的力' }, { label: 'C', text: 'A force that makes objects move faster 一種使物體移動更快的力' }, { label: 'D', text: 'A force that only works in water 一種只在水裡起作用的力' }],
      answer: 'B',
    },
    {
      question: 'Which direction does friction act compared to the motion of an object? 摩擦力的方向與物體的運動方向相比如何?',
      options: [{ label: 'A', text: 'Same direction 相同方向' }, { label: 'B', text: 'Opposite direction 相反方向' }, { label: 'C', text: 'Upwards 向上' }, { label: 'D', text: 'Downwards 向下' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of friction in daily life? 以下哪個是日常生活中摩擦力的例子?',
      options: [{ label: 'A', text: 'A ball rolling on a smooth floor 球在光滑的地板上滾動' }, { label: 'B', text: 'Writing with a pencil on paper 用鉛筆在紙上寫字' }, { label: 'C', text: 'A magnet attracting a metal object 磁鐵吸引金屬物體' }, { label: 'D', text: 'Light shining from a lamp 燈發出的光' }],
      answer: 'B',
    },
    {
      question: 'Why is friction important when walking? 為什麼走路時摩擦力很重要?',
      options: [{ label: 'A', text: 'It helps us stay balanced and not slip 它幫助我們保持平衡而不滑倒' }, { label: 'B', text: 'It makes us walk faster 它使我們走得更快' }, { label: 'C', text: 'It makes our shoes lighter 它使我們的鞋子更輕' }, { label: 'D', text: 'It makes the ground softer 它使地面更柔軟' }],
      answer: 'A',
    },
    {
      question: 'What happens if there is no friction between your shoes and the ground? 如果你的鞋子和地面之間沒有摩擦力會發生什麼?',
      options: [{ label: 'A', text: 'You can walk normally 你可以正常走路' }, { label: 'B', text: 'You will slip and fall 你會滑倒和跌倒' }, { label: 'C', text: 'Your shoes will stick to the ground 你的鞋子會黏在地面上' }, { label: 'D', text: 'Nothing will happen 什麼都不會發生' }],
      answer: 'B',
    },
    {
      question: 'Which surface would have the most friction? 哪種表面的摩擦力最大?',
      options: [{ label: 'A', text: 'Ice 冰' }, { label: 'B', text: 'Sandpaper 砂紙' }, { label: 'C', text: 'Glass 玻璃' }, { label: 'D', text: 'Water 水' }],
      answer: 'B',
    },
    {
      question: 'How does friction affect a moving object? 摩擦力如何影響運動中的物體?',
      options: [{ label: 'A', text: 'It makes the object move faster 它使物體移動得更快' }, { label: 'B', text: 'It slows down or stops the object 它減慢或停止物體' }, { label: 'C', text: 'It changes the color of the object 它改變物體的顏色' }, { label: 'D', text: 'It makes the object invisible 它使物體隱形' }],
      answer: 'B',
    },
    {
      question: 'Which activity does NOT involve friction? 哪項活動不涉及摩擦力?',
      options: [{ label: 'A', text: 'Rubbing your hands together 搓手' }, { label: 'B', text: 'Sliding down a slide 滑下滑梯' }, { label: 'C', text: 'Floating in space 在太空中漂浮' }, { label: 'D', text: 'Braking a bicycle 煞停自行車' }],
      answer: 'C',
    },
    {
      question: 'What can reduce friction between two surfaces? 什麼可以減少兩個表面之間的摩擦力?',
      options: [{ label: 'A', text: 'Making the surfaces rougher 使表面更粗糙' }, { label: 'B', text: 'Adding oil or grease 添加油或潤滑脂' }, { label: 'C', text: 'Pressing the surfaces harder together 將表面更用力地壓在一起' }, { label: 'D', text: 'Making the surfaces wet 使表面潮濕' }],
      answer: 'B',
    },
    {
      question: 'Why do car tires have patterns? 為什麼汽車輪胎有花紋?',
      options: [{ label: 'A', text: 'To look pretty 為了好看' }, { label: 'B', text: 'To increase friction with the road 為了增加與道路的摩擦力' }, { label: 'C', text: 'To make the tires lighter 為了使輪胎更輕' }, { label: 'D', text: 'To make the car go faster 為了使汽車跑得更快' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Friction always helps objects move faster. 摩擦力總是幫助物體移動得更快。', answer: false },
    { statement: 'The direction of friction is opposite to the direction of motion. 摩擦力的方向與運動方向相反。', answer: true },
    { statement: 'Walking on ice is easy because there is a lot of friction. 在冰上行走很容易，因為有很大的摩擦力。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give two examples of how friction is useful in daily life. 舉出兩個日常生活中摩擦力有用的例子。',
    },
    {
      question: 'Explain why it is harder to push a heavy box on a rough surface than on a smooth surface. 解釋為什麼在粗糙表面上推重箱子比在光滑表面上更困難。',
    },
    {
      question: 'What would happen if there was no friction at all? 如果完全沒有摩擦力會發生什麼?',
    },
  ],
}

export default function ForceAndMotionRelatedPhenomenaPage() {
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
             Force and motion-related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Explore how forces like friction affect motion in everyday situations. Understand how different surfaces create varying amounts of resistance and how this impacts movement.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that friction is the resistance that occurs when objects rub against each other</li>
                <li>Be aware that the direction of friction is opposite to the direction of motion</li>
                <li>Give daily examples where friction is applied (e.g. walking, writing)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Rub different materials together to feel friction</li>
              <li>Compare how objects slide on smooth vs rough surfaces</li>
              <li>Experiment with inclined planes to observe friction effects</li>
              <li>Test how different shoe soles grip various surfaces</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how friction affects motion and be able to identify examples of friction in daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for how forces shape our physical world</li>
              <li>Curiosity about how different materials interact</li>
              <li>Safety awareness regarding friction in daily activities</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Engineering applications in vehicle tire design</li>
              <li>Safety considerations in sports equipment and footwear</li>
              <li>Energy efficiency in transportation systems</li>
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