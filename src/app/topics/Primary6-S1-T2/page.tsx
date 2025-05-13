'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData: QuizData = {
  mcq: [
    {
      question: 'How does light travel? 光是怎樣傳播的?',
      options: [{ label: 'A', text: 'In straight lines 以直線傳播' }, { label: 'B', text: 'In curved lines 以曲線傳播' }, { label: 'C', text: 'In zigzag lines 以鋸齒線傳播' }, { label: 'D', text: 'In circular lines 以圓形線傳播' }],
      answer: 'A',
    },
    {
      question: 'What is the size of the image formed by a plane mirror compared to the object? 平面鏡形成的影像與物體的大小比較是怎樣的?',
      options: [{ label: 'A', text: 'Smaller than the object 比物體小' }, { label: 'B', text: 'Larger than the object 比物體大' }, { label: 'C', text: 'The same size as the object 與物體大小相同' }, { label: 'D', text: 'Depends on the distance 視乎距離而定' }],
      answer: 'C',
    },
    {
      question: 'Which type of mirror is used in a car\\'s side mirror? 汽車的側鏡使用的是哪種鏡子?',
      options: [{ label: 'A', text: 'Plane mirror 平面鏡' }, { label: 'B', text: 'Convex mirror 凸面鏡' }, { label: 'C', text: 'Concave mirror 凹面鏡' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'B',
    },
    {
      question: 'What happens to light when it passes from air into water? 當光從空氣進入水中時會發生什麼現象?',
      options: [{ label: 'A', text: 'It stops 它會停止' }, { label: 'B', text: 'It reflects 它會反射' }, { label: 'C', text: 'It refracts 它會折射' }, { label: 'D', text: 'It disappears 它會消失' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is an example of refraction of light? 以下哪個是光折射的例子?',
      options: [{ label: 'A', text: 'Looking at a mirror 照鏡子' }, { label: 'B', text: 'Using a magnifying glass 使用放大鏡' }, { label: 'C', text: 'Looking at a shadow 看影子' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'B',
    },
    {
      question: 'What is the characteristic of an image formed by a plane mirror? 平面鏡形成的影像有什麼特徵?',
      options: [{ label: 'A', text: 'It is upside down 它是倒轉的' }, { label: 'B', text: 'It is laterally inverted 它是左右相反的' }, { label: 'C', text: 'It is smaller than the object 它比物體小' }, { label: 'D', text: 'It is larger than the object 它比物體大' }],
      answer: 'B',
    },
    {
      question: 'Which mirror is used in a flashlight to focus light? 手電筒中使用哪種鏡子來聚焦光線?',
      options: [{ label: 'A', text: 'Plane mirror 平面鏡' }, { label: 'B', text: 'Convex mirror 凸面鏡' }, { label: 'C', text: 'Concave mirror 凹面鏡' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'C',
    },
    {
      question: 'What is the main reason we can see objects? 我們能看到物體的主要原因是什麼?',
      options: [{ label: 'A', text: 'Objects emit light 物體發光' }, { label: 'B', text: 'Light reflects off objects 光從物體反射' }, { label: 'C', text: 'Objects absorb light 物體吸收光' }, { label: 'D', text: 'None of the above 以上皆非' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a property of light? 以下哪個不是光的特性?',
      options: [{ label: 'A', text: 'Travels in straight lines 以直線傳播' }, { label: 'B', text: 'Can be reflected 可以被反射' }, { label: 'C', text: 'Can be refracted 可以被折射' }, { label: 'D', text: 'Can be heard 可以被聽到' }],
      answer: 'D',
    },
    {
      question: 'What is the phenomenon called when light bends as it passes through different materials? 當光通過不同材料時彎曲的現象叫什麼?',
      options: [{ label: 'A', text: 'Reflection 反射' }, { label: 'B', text: 'Refraction 折射' }, { label: 'C', text: 'Absorption 吸收' }, { label: 'D', text: 'Diffusion 擴散' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Light can travel through a vacuum. 光可以在真空中傳播。', answer: true },
    { statement: 'A concave mirror always forms a smaller image. 凹面鏡總是形成較小的影像。', answer: false },
    { statement: 'Refraction occurs when light passes from one medium to another. 當光從一種介質進入另一種介質時會發生折射。', answer: true },
  ],
  open_ended: [
    {
      question: 'Give two examples of daily applications of convex mirrors. 舉出兩個凸面鏡在日常生活中的應用例子。',
    },
    {
      question: 'Explain why a pencil appears bent when placed in a glass of water. 解釋為什麼鉛筆放在一杯水中時看起來是彎曲的。',
    },
    {
      question: 'Describe how a plane mirror forms an image. 描述平面鏡如何形成影像。',
    },
  ],
};

export default function PropertiesOfLightAndRelatedPhenomenaPage() {
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
             Properties of light and related phenomena
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Light is a form of energy that travels in straight lines and exhibits fascinating behaviors like reflection and refraction. Understanding these properties helps explain everyday phenomena like mirror images and the bending of light in water.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the mode of light propagation</li>
                <li>Recognise the characteristics of images formed by a plane mirror, including being the same size as the object and laterally inverted</li>
                <li>Give daily application of different types of mirrors, including plane, convex and concave mirrors</li>
                <li>Be aware that refraction occurs when light passes through different transparent materials</li>
                <li>Give examples of daily applications of refraction of light (e.g. glasses, magnifying glasses, microscopes)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a periscope to demonstrate light reflection</li>
              <li>Experiment with water and pencils to observe refraction</li>
              <li>Compare images formed by different types of mirrors</li>
              <li>Trace light paths using laser pointers and mirrors</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how light behaves and apply this knowledge to explain natural phenomena and technological applications.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the scientific principles behind everyday phenomena</li>
              <li>Curiosity about how light interacts with different materials</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Optical technologies in medicine (endoscopes, lasers)</li>
              <li>Safety applications of mirrors in vehicles and public spaces</li>
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