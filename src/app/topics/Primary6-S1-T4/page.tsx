'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is an example of a first-class lever where the fulcrum is located between the effort and the load? 以下哪個是第一類槓桿的例子，其中支點位於施力和負載之間？',
      options: [{ label: 'A', text: 'Scissors 剪刀' }, { label: 'B', text: 'Wheelbarrow 手推車' }, { label: 'C', text: 'Tweezers 鑷子' }, { label: 'D', text: 'Fishing rod 釣魚竿' }],
      answer: 'A',
    },
    {
      question: 'Which type of lever requires more effort but increases the distance moved by the load? 哪種類型的槓桿需要更多的施力，但增加了負載移動的距離？',
      options: [{ label: 'A', text: 'First-class lever 第一類槓桿' }, { label: 'B', text: 'Second-class lever 第二類槓桿' }, { label: 'C', text: 'Third-class lever 第三類槓桿' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'C',
    },
    {
      question: 'What is the main advantage of using a movable pulley? 使用動滑輪的主要優點是什麼？',
      options: [{ label: 'A', text: 'It changes the direction of the force 它改變力的方向' }, { label: 'B', text: 'It reduces the effort required 它減少所需的施力' }, { label: 'C', text: 'It increases the speed of the load 它增加負載的速度' }, { label: 'D', text: 'It makes the load heavier 它使負載更重' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of a second-class lever? 以下哪個是第二類槓桿的例子？',
      options: [{ label: 'A', text: 'See-saw 蹺蹺板' }, { label: 'B', text: 'Bottle opener 開瓶器' }, { label: 'C', text: 'Chopsticks 筷子' }, { label: 'D', text: 'Hammer 錘子' }],
      answer: 'B',
    },
    {
      question: 'In a pulley system, what happens when you add more pulleys? 在滑輪系統中，當你增加更多的滑輪時會發生什麼？',
      options: [{ label: 'A', text: 'The effort required increases 所需的施力增加' }, { label: 'B', text: 'The effort required decreases 所需的施力減少' }, { label: 'C', text: 'The direction of the force changes 力的方向改變' }, { label: 'D', text: 'The load becomes heavier 負載變得更重' }],
      answer: 'B',
    },
    {
      question: 'Which simple machine is used in a bicycle to change the speed? 自行車中使用哪種簡單機械來改變速度？',
      options: [{ label: 'A', text: 'Lever 槓桿' }, { label: 'B', text: 'Pulley 滑輪' }, { label: 'C', text: 'Gear 齒輪' }, { label: 'D', text: 'Wheel and axle 輪軸' }],
      answer: 'C',
    },
    {
      question: 'What is the function of a fixed pulley? 固定滑輪的功能是什麼？',
      options: [{ label: 'A', text: 'To reduce the effort required 減少所需的施力' }, { label: 'B', text: 'To change the direction of the force 改變力的方向' }, { label: 'C', text: 'To increase the speed of the load 增加負載的速度' }, { label: 'D', text: 'To make the load heavier 使負載更重' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of a third-class lever? 以下哪個是第三類槓桿的例子？',
      options: [{ label: 'A', text: 'Nutcracker 胡桃夾子' }, { label: 'B', text: 'Tongs 夾子' }, { label: 'C', text: 'Crowbar 撬棍' }, { label: 'D', text: 'Seesaw 蹺蹺板' }],
      answer: 'B',
    },
    {
      question: 'How do gears help in a machine? 齒輪如何在機器中有幫助？',
      options: [{ label: 'A', text: 'They reduce friction 它們減少摩擦' }, { label: 'B', text: 'They change the direction or speed of rotation 它們改變旋轉的方向或速度' }, { label: 'C', text: 'They increase the weight of the load 它們增加負載的重量' }, { label: 'D', text: 'They make the machine louder 它們使機器更大聲' }],
      answer: 'B',
    },
    {
      question: 'Which simple machine is used in a cable car? 纜車中使用哪種簡單機械？',
      options: [{ label: 'A', text: 'Lever 槓桿' }, { label: 'B', text: 'Pulley 滑輪' }, { label: 'C', text: 'Gear 齒輪' }, { label: 'D', text: 'Inclined plane 斜面' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'A second-class lever always reduces the effort required to lift a load. 第二類槓桿總是減少提升負載所需的施力。', answer: true },
    { statement: 'A fixed pulley reduces the effort required to lift a load. 固定滑輪減少提升負載所需的施力。', answer: false },
    { statement: 'Chopsticks are an example of a third-class lever. 筷子是第三類槓桿的例子。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of first-class levers used in daily life and explain why they are first-class levers. 舉出兩個日常生活中使用的第一類槓桿的例子，並解釋為什麼它們是第一類槓桿。',
    },
    {
      question: 'Explain how a movable pulley reduces the effort required to lift a load. 解釋動滑輪如何減少提升負載所需的施力。',
    },
    {
      question: 'Describe how gears are used in a bicycle and what advantage they provide. 描述齒輪如何在自行車中使用以及它們提供的優點。',
    },
  ],
}

export default function SimpleMachinesPage() {
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
             Simple machines
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Simple machines are basic mechanical devices that help us do work more efficiently. They include levers, pulleys, gears, and inclined planes, which are found in many everyday objects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the applications of three types of levers (the fulcrum located in between the effort and the load, the load located in between the fulcrum and the effort, the effort located in between the fulcrum and the load)</li>
                <li>Be aware of the difference between a lever that reduces the effort required and a lever that requires more effort</li>
                <li>Recognise the working principles of simple machines such as pulleys (fixed pulley, movable pulley, pulley system) and gears</li>
                <li>Give examples of daily applications of levers, pulleys and gears (e.g. chopsticks, cable cars, bicycles)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build different types of levers using rulers and small objects</li>
              <li>Create a simple pulley system with string and spools</li>
              <li>Experiment with gears using cardboard cutouts</li>
              <li>Identify simple machines in the classroom</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how simple machines make work easier and be able to identify them in everyday objects.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the ingenuity of simple machines</li>
              <li>Curiosity about how everyday objects work</li>
              <li>Respect for safety when experimenting with tools</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Simple machines in construction and engineering</li>
              <li>Historical development of machines from ancient times</li>
              <li>Environmental impact of machine efficiency</li>
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