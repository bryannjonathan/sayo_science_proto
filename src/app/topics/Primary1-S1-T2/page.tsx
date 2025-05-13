'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Where is the ball if it is in front of you? 如果球在你前面，它在哪裡？',
      options: [{ label: 'A', text: 'Behind you 在你後面' }, { label: 'B', text: 'In front of you 在你前面' }, { label: 'C', text: 'To your left 在你左邊' }, { label: 'D', text: 'To your right 在你右邊' }],
      answer: 'B',
    },
    {
      question: 'What happens to the position of a toy car when you push it? 當你推動玩具車時，它的位置會發生什麼變化？',
      options: [{ label: 'A', text: 'It stays in the same place 它保持在原地' }, { label: 'B', text: 'It changes position 它的位置改變了' }, { label: 'C', text: 'It disappears 它消失了' }, { label: 'D', text: 'It gets bigger 它變大了' }],
      answer: 'B',
    },
    {
      question: 'Which of these is an example of motion? 以下哪個是運動的例子？',
      options: [{ label: 'A', text: 'A book on a table 桌上的書' }, { label: 'B', text: 'A swinging swing 盪鞦韆' }, { label: 'C', text: 'A sleeping cat 睡覺的貓' }, { label: 'D', text: 'A closed door 關著的門' }],
      answer: 'B',
    },
    {
      question: 'How would you describe a running cheetah? 你會如何描述一隻奔跑的獵豹？',
      options: [{ label: 'A', text: 'Moving very slowly 移動得非常慢' }, { label: 'B', text: 'Not moving at all 完全沒有移動' }, { label: 'C', text: 'Moving very fast 移動得非常快' }, { label: 'D', text: 'Moving backwards 向後移動' }],
      answer: 'C',
    },
    {
      question: 'If a ball is to your left, where is it? 如果球在你的左邊，它在哪裡？',
      options: [{ label: 'A', text: 'On your left side 在你的左側' }, { label: 'B', text: 'On your right side 在你的右側' }, { label: 'C', text: 'Behind you 在你後面' }, { label: 'D', text: 'In front of you 在你前面' }],
      answer: 'A',
    },
    {
      question: 'What is an example of motion in everyday life? 日常生活中運動的例子是什麼？',
      options: [{ label: 'A', text: 'A chair in the classroom 教室裡的椅子' }, { label: 'B', text: 'A tree in the park 公園裡的樹' }, { label: 'C', text: 'A bus moving on the road 在路上行駛的巴士' }, { label: 'D', text: 'A picture on the wall 牆上的畫' }],
      answer: 'C',
    },
    {
      question: 'How would you describe a snail\'s movement? 你會如何描述蝸牛的移動？',
      options: [{ label: 'A', text: 'Very fast 非常快' }, { label: 'B', text: 'Very slow 非常慢' }, { label: 'C', text: 'Not moving 沒有移動' }, { label: 'D', text: 'Moving backwards 向後移動' }],
      answer: 'B',
    },
    {
      question: 'Where is the sun if it is behind you? 如果太陽在你後面，它在哪裡？',
      options: [{ label: 'A', text: 'In front of you 在你前面' }, { label: 'B', text: 'To your left 在你左邊' }, { label: 'C', text: 'Behind you 在你後面' }, { label: 'D', text: 'To your right 在你右邊' }],
      answer: 'C',
    },
    {
      question: 'What happens when you kick a soccer ball? 當你踢足球時會發生什麼？',
      options: [{ label: 'A', text: 'It stays still 它保持靜止' }, { label: 'B', text: 'It moves 它移動了' }, { label: 'C', text: 'It disappears 它消失了' }, { label: 'D', text: 'It changes color 它變色了' }],
      answer: 'B',
    },
    {
      question: 'Which object is far from you? 哪個物體離你很遠？',
      options: [{ label: 'A', text: 'The pencil in your hand 你手中的鉛筆' }, { label: 'B', text: 'The moon in the sky 天空中的月亮' }, { label: 'C', text: 'The shoes on your feet 你腳上的鞋子' }, { label: 'D', text: 'The hat on your head 你頭上的帽子' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'A moving car changes its position. 移動的汽車會改變它的位置。', answer: true },
    { statement: 'A rock on the ground is an example of motion. 地上的石頭是運動的例子。', answer: false },
    { statement: 'A snail moves faster than a cheetah. 蝸牛比獵豹移動得更快。', answer: false },
  ],
  open_ended: [
    {
      question: 'Name one thing that moves in your classroom. 說出你教室裡一個會移動的東西。',
    },
    {
      question: 'How do you know if something is moving fast or slow? 你如何知道某物移動得快或慢？',
    },
    {
      question: 'Describe where your teacher is standing in the classroom. 描述你的老師在教室裡的站立位置。',
    },
  ],
};

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
            Explore how objects move and change position in space. Learn to describe motion in terms of speed and direction, and understand how forces affect everyday objects around us.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>State the relative position of an object to oneself (e.g. front, back, left, right, near, far)</li>
                <li>Be aware that the position of an object will be changed after motion</li>
                <li>Give some examples of motion in everyday life (e.g. swinging on a swing, riding a bus, kicking a soccer ball)</li>
                <li>Describe how fast or slow an object moves</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Position scavenger hunt: Find objects in different positions relative to you</li>
              <li>Motion charades: Act out different types of motion for classmates to guess</li>
              <li>Speed comparison: Observe and compare fast and slow moving objects</li>
              <li>Push and pull experiments: Explore how forces affect different objects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to describe object positions and motion, recognize different speeds of movement, and understand basic force concepts through hands-on exploration.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Curiosity about how things move in our environment</li>
              <li>Appreciation for the science behind everyday motions</li>
              <li>Safety awareness when observing moving objects</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding traffic movement and pedestrian safety</li>
              <li>Observing animal movements in nature</li>
              <li>Exploring how playground equipment uses motion principles</li>
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