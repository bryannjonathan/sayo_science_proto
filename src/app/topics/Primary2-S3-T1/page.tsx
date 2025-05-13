'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'What is the first step in science inquiry? 科學探究的第一步是什麼?',
      options: [{ label: 'A', text: 'Observation 觀察' }, { label: 'B', text: 'Guessing 猜測' }, { label: 'C', text: 'Drawing 畫畫' }, { label: 'D', text: 'Singing 唱歌' }],
      answer: 'A',
    },
    {
      question: 'Science is based on what? 科學是基於什麼的?',
      options: [{ label: 'A', text: 'Evidence 證據' }, { label: 'B', text: 'Opinions 意見' }, { label: 'C', text: 'Dreams 夢境' }, { label: 'D', text: 'Stories 故事' }],
      answer: 'A',
    },
    {
      question: 'Which of these is an example of observation? 以下哪一個是觀察的例子?',
      options: [{ label: 'A', text: 'Counting the number of leaves on a plant 數植物上的葉子數量' }, { label: 'B', text: 'Drawing a picture of a tree 畫一棵樹的圖畫' }, { label: 'C', text: 'Telling a story about a flower 講述一個關於花的故事' }, { label: 'D', text: 'Singing a song about the sun 唱一首關於太陽的歌' }],
      answer: 'A',
    },
    {
      question: 'Why do scientists collect evidence? 科學家為什麼要收集證據?',
      options: [{ label: 'A', text: 'To support their ideas 支持他們的想法' }, { label: 'B', text: 'To make up stories 編造故事' }, { label: 'C', text: 'To draw pictures 畫圖畫' }, { label: 'D', text: 'To sing songs 唱歌' }],
      answer: 'A',
    },
    {
      question: 'What do scientists use to answer questions? 科學家用什麼來回答問題?',
      options: [{ label: 'A', text: 'Experiments and observations 實驗和觀察' }, { label: 'B', text: 'Guessing 猜測' }, { label: 'C', text: 'Dreaming 做夢' }, { label: 'D', text: 'Drawing 畫畫' }],
      answer: 'A',
    },
    {
      question: 'Which of these is NOT part of science inquiry? 以下哪一項不是科學探究的一部分?',
      options: [{ label: 'A', text: 'Making up stories 編造故事' }, { label: 'B', text: 'Observing 觀察' }, { label: 'C', text: 'Collecting data 收集數據' }, { label: 'D', text: 'Asking questions 提問' }],
      answer: 'A',
    },
    {
      question: 'What should you do if you want to learn about plants? 如果你想了解植物，你應該做什麼?',
      options: [{ label: 'A', text: 'Observe them carefully 仔細觀察它們' }, { label: 'B', text: 'Ignore them 忽略它們' }, { label: 'C', text: 'Draw them without looking 不看它們就畫' }, { label: 'D', text: 'Sing to them 對它們唱歌' }],
      answer: 'A',
    },
    {
      question: 'Which of these is a good scientific question? 以下哪一個是一個好的科學問題?',
      options: [{ label: 'A', text: 'Why do leaves change color? 為什麼葉子會變色?' }, { label: 'B', text: 'What is my favorite color? 我最喜歡的顏色是什麼?' }, { label: 'C', text: 'Who is the tallest in class? 班上誰最高?' }, { label: 'D', text: 'What is the best song? 最好的歌是什麼?' }],
      answer: 'A',
    },
    {
      question: 'What is the purpose of science inquiry? 科學探究的目的是什麼?',
      options: [{ label: 'A', text: 'To understand the world 理解世界' }, { label: 'B', text: 'To make up stories 編造故事' }, { label: 'C', text: 'To draw pictures 畫圖畫' }, { label: 'D', text: 'To sing songs 唱歌' }],
      answer: 'A',
    },
    {
      question: 'Which of these is evidence? 以下哪一項是證據?',
      options: [{ label: 'A', text: 'A photo of a plant growing 植物生長的照片' }, { label: 'B', text: 'A story about a plant 關於植物的故事' }, { label: 'C', text: 'A drawing of a plant 植物的圖畫' }, { label: 'D', text: 'A song about a plant 關於植物的歌曲' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Science inquiry starts with observation. 科學探究始於觀察。', answer: true },
    { statement: 'Scientists use evidence to support their ideas. 科學家用證據來支持他們的想法。', answer: true },
    { statement: 'Guessing is the best way to answer scientific questions. 猜測是回答科學問題的最佳方式。', answer: false },
  ],
  open_ended: [
    {
      question: 'How can you use observation to learn about animals? 你如何用觀察來了解動物?',
    },
    {
      question: 'Why is evidence important in science? 為什麼證據在科學中很重要?',
    },
    {
      question: 'What is one question you can ask about the weather? 你可以問一個關於天氣的什麼問題?',
    },
  ],
}

export default function ScienceInquiryProcessesPage() {
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
             Science inquiry processes
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Science inquiry processes help us explore and understand the natural world through observation and evidence. Students will learn how to ask questions, make observations, and draw conclusions based on evidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware that science inquiry is derived from observation</li>
                <li>Be aware that science is evidence-based</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Nature observation walk to collect and record findings</li>
              <li>Simple classroom experiments to test hypotheses</li>
              <li>Group discussions to share observations and conclusions</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to conduct simple scientific investigations and understand the importance of evidence in science.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Curiosity about the natural world</li>
              <li>Respect for evidence-based conclusions</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how scientific methods help solve real-world problems</li>
              <li>Recognizing the role of observation in technological advancements</li>
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