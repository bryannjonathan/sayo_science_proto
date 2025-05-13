'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What can a force do to a stationary object? 力可以對靜止的物體做什麼？',
      options: [{ label: 'A', text: 'Make it move 使它移動' }, { label: 'B', text: 'Make it disappear 使它消失' }, { label: 'C', text: 'Make it change color 使它改變顏色' }, { label: 'D', text: 'Make it smaller 使它變小' }],
      answer: 'A',
    },
    {
      question: 'What happens when a force is applied to a moving object? 當力作用於移動的物體時會發生什麼？',
      options: [{ label: 'A', text: 'It can stop the object 它可以停止物體' }, { label: 'B', text: 'It can change its speed 它可以改變它的速度' }, { label: 'C', text: 'It can change its direction 它可以改變它的方向' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Forces always work in: 力總是成對出現，稱為：',
      options: [{ label: 'A', text: 'Action and reaction pairs 作用力和反作用力對' }, { label: 'B', text: 'Single forces 單一力' }, { label: 'C', text: 'Circular motions 圓周運動' }, { label: 'D', text: 'Random directions 隨機方向' }],
      answer: 'A',
    },
    {
      question: 'How can you compare the speed of two moving objects? 如何比較兩個移動物體的速度？',
      options: [{ label: 'A', text: 'Compare the distances travelled in the same time 比較相同時間內移動的距離' }, { label: 'B', text: 'Compare the time taken to travel the same distance 比較移動相同距離所需的時間' }, { label: 'C', text: 'Both A and B A和B都是' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'C',
    },
    {
      question: 'What is required to change the direction of a moving object? 改變移動物體的方向需要什麼？',
      options: [{ label: 'A', text: 'A force 一個力' }, { label: 'B', text: 'Heat 熱' }, { label: 'C', text: 'Light 光' }, { label: 'D', text: 'Sound 聲音' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a force? 以下哪個是力的例子？',
      options: [{ label: 'A', text: 'Pushing a box 推箱子' }, { label: 'B', text: 'Pulling a rope 拉繩子' }, { label: 'C', text: 'Gravity 重力' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'If two objects travel the same distance, the one that takes less time is: 如果兩個物體移動相同的距離，花費時間較少的那個物體：',
      options: [{ label: 'A', text: 'Faster 更快' }, { label: 'B', text: 'Slower 更慢' }, { label: 'C', text: 'The same speed 速度相同' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'A',
    },
    {
      question: 'What happens when you push a wall? 當你推牆時會發生什麼？',
      options: [{ label: 'A', text: 'The wall pushes back 牆會推回來' }, { label: 'B', text: 'The wall moves 牆會移動' }, { label: 'C', text: 'Nothing happens 什麼都不會發生' }, { label: 'D', text: 'The wall disappears 牆會消失' }],
      answer: 'A',
    },
    {
      question: 'Which force is always pulling objects toward the Earth? 哪種力總是將物體拉向地球？',
      options: [{ label: 'A', text: 'Friction 摩擦力' }, { label: 'B', text: 'Gravity 重力' }, { label: 'C', text: 'Magnetism 磁力' }, { label: 'D', text: 'Electricity 電力' }],
      answer: 'B',
    },
    {
      question: 'If a ball is rolling on the ground and slows down, what is most likely causing it? 如果一個球在地上滾動並減速，最可能的原因是什麼？',
      options: [{ label: 'A', text: 'Friction 摩擦力' }, { label: 'B', text: 'Gravity 重力' }, { label: 'C', text: 'Wind 風' }, { label: 'D', text: 'Light 光' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'A force can make a stationary object move. 力可以使靜止的物體移動。', answer: true },
    { statement: 'Forces can only change the speed of an object, not its direction. 力只能改變物體的速度，不能改變它的方向。', answer: false },
    { statement: 'If two objects travel the same distance, the one that takes more time is faster. 如果兩個物體移動相同的距離，花費時間較多的那個物體更快。', answer: false },
  ],
  open_ended: [
    {
      question: 'Give an example of how a force can change the speed of a moving object. 舉一個例子說明力如何改變移動物體的速度。',
    },
    {
      question: 'Explain why forces always work in action and reaction pairs. 解釋為什麼力總是成對出現（作用力和反作用力）。',
    },
    {
      question: 'Describe two methods to compare the speed of two moving objects. 描述兩種比較兩個移動物體速度的方法。',
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
            Explore how forces affect the motion of objects in our everyday lives. Learn about action-reaction pairs and methods to compare the speed of moving objects through engaging activities and real-world examples.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that forces can change the state of motion of an object (forces can make a stationary object move or stop a moving object; forces can change the speed of a moving object; forces can change the direction of a moving object)</li>
                <li>Recognise that forces always work in action and reaction pairs</li>
                <li>Recognise methods to compare the speed of moving objects (compare the distances travelled by two objects within the same period of time, or compare the time taken for two objects to travel the same distance)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Conduct experiments with toy cars to observe how different forces affect motion</li>
              <li>Create a simple balloon rocket to demonstrate action-reaction forces</li>
              <li>Measure and compare speeds of rolling objects on different surfaces</li>
              <li>Design an obstacle course to test how forces change direction of motion</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how forces influence motion and be able to identify action-reaction pairs in daily life. They will also develop skills to compare and analyze the speed of moving objects.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Develop curiosity about how forces shape our physical world</li>
              <li>Cultivate respect for safety when dealing with moving objects</li>
              <li>Appreciate the scientific principles behind everyday phenomena</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understand how engineers use force principles in vehicle design</li>
              <li>Explore how sports equipment is designed considering forces and motion</li>
              <li>Examine safety features in transportation systems based on force concepts</li>
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