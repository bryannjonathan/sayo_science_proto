'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which organ pumps blood throughout the body? 哪個器官負責將血液泵送到全身?',
      options: [{ label: 'A', text: 'Heart 心臟' }, { label: 'B', text: 'Kidney 腎臟' }, { label: 'C', text: 'Brain 大腦' }, { label: 'D', text: 'Lung 肺' }],
      answer: 'A',
    },
    {
      question: 'What is the function of blood vessels? 血管的功能是什麼?',
      options: [{ label: 'A', text: 'To carry blood to and from the heart 將血液輸送到心臟和從心臟輸出' }, { label: 'B', text: 'To filter waste from the blood 過濾血液中的廢物' }, { label: 'C', text: 'To produce hormones 產生激素' }, { label: 'D', text: 'To store oxygen 儲存氧氣' }],
      answer: 'A',
    },
    {
      question: 'Which part of the urinary system stores urine? 泌尿系統的哪個部分儲存尿液?',
      options: [{ label: 'A', text: 'Kidneys 腎臟' }, { label: 'B', text: 'Ureters 輸尿管' }, { label: 'C', text: 'Urinary bladder 膀胱' }, { label: 'D', text: 'Urethra 尿道' }],
      answer: 'C',
    },
    {
      question: 'What is the main function of the kidneys? 腎臟的主要功能是什麼?',
      options: [{ label: 'A', text: 'To filter waste from the blood 過濾血液中的廢物' }, { label: 'B', text: 'To pump blood 泵送血液' }, { label: 'C', text: 'To produce urine 產生尿液' }, { label: 'D', text: 'To store oxygen 儲存氧氣' }],
      answer: 'A',
    },
    {
      question: 'Which part of the nervous system controls reflex actions? 神經系統的哪個部分控制反射動作?',
      options: [{ label: 'A', text: 'Brain 大腦' }, { label: 'B', text: 'Spinal cord 脊髓' }, { label: 'C', text: 'Sensory organs 感覺器官' }, { label: 'D', text: 'Heart 心臟' }],
      answer: 'B',
    },
    {
      question: 'What is an example of a reflex action? 以下哪個是反射動作的例子?',
      options: [{ label: 'A', text: 'Blinking when wind blows into eyes 當風吹進眼睛時眨眼' }, { label: 'B', text: 'Walking to school 走路去學校' }, { label: 'C', text: 'Eating lunch 吃午餐' }, { label: 'D', text: 'Reading a book 閱讀書籍' }],
      answer: 'A',
    },
    {
      question: 'Which organ is part of both the circulatory and urinary systems? 哪個器官同時屬於循環系統和泌尿系統?',
      options: [{ label: 'A', text: 'Heart 心臟' }, { label: 'B', text: 'Kidney 腎臟' }, { label: 'C', text: 'Brain 大腦' }, { label: 'D', text: 'Lung 肺' }],
      answer: 'B',
    },
    {
      question: 'What is the function of the spinal cord? 脊髓的功能是什麼?',
      options: [{ label: 'A', text: 'To transmit messages between the brain and the body 在大腦和身體之間傳遞訊息' }, { label: 'B', text: 'To pump blood 泵送血液' }, { label: 'C', text: 'To filter waste 過濾廢物' }, { label: 'D', text: 'To produce hormones 產生激素' }],
      answer: 'A',
    },
    {
      question: 'Which part of the urinary system carries urine from the kidneys to the bladder? 泌尿系統的哪個部分將尿液從腎臟輸送到膀胱?',
      options: [{ label: 'A', text: 'Ureters 輸尿管' }, { label: 'B', text: 'Urethra 尿道' }, { label: 'C', text: 'Bladder 膀胱' }, { label: 'D', text: 'Kidneys 腎臟' }],
      answer: 'A',
    },
    {
      question: 'What is the role of sensory organs in the nervous system? 感覺器官在神經系統中的作用是什麼?',
      options: [{ label: 'A', text: 'To detect changes in the environment 檢測環境中的變化' }, { label: 'B', text: 'To pump blood 泵送血液' }, { label: 'C', text: 'To filter waste 過濾廢物' }, { label: 'D', text: 'To store oxygen 儲存氧氣' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The heart is part of the circulatory system. 心臟是循環系統的一部分。', answer: true },
    { statement: 'The brain is not part of the nervous system. 大腦不是神經系統的一部分。', answer: false },
    { statement: 'Reflex actions are controlled by the brain. 反射動作由大腦控制。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe the path of blood through the circulatory system. 描述血液在循環系統中的路徑。',
    },
    {
      question: 'Explain how the urinary system removes waste from the body. 解釋泌尿系統如何從身體中移除廢物。',
    },
    {
      question: 'Give two examples of reflex actions and explain why they are important. 舉出兩個反射動作的例子並解釋它們為什麼重要。',
    },
  ],
};

export default function HumanBodySystemsPage() {
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
             Human body systems
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            The human body is made up of interconnected systems that work together to maintain life. This topic explores the circulatory, urinary, and nervous systems, their components, and how they function to keep us healthy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise the major parts of the human circulatory system (heart, blood vessels) and their functions</li>
                <li>Recognise the major parts of the human urinary system (kidneys, ureters, urinary bladder, urethra) and their functions</li>
                <li>Recognise the major parts of the human nervous system (sensory organs, brain, spinal cord) and their functions</li>
                <li>Give some examples of reflex actions (e.g. blinking when wind blows into eyes, withdrawal reflex in response to heat)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Build a model of the circulatory system using tubes and a pump</li>
              <li>Trace the path of a nerve impulse through the nervous system</li>
              <li>Simulate kidney filtration using different sized filters</li>
              <li>Test reflex actions with partner activities</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand how body systems work together and appreciate the complexity of human physiology. They will be able to identify key organs and explain their functions.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Appreciation for the complexity and wonder of the human body</li>
              <li>Responsibility for maintaining personal health through proper care of body systems</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Medical technologies that support or replace body system functions</li>
              <li>How lifestyle choices affect different body systems</li>
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