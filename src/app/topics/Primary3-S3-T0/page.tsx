'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the first step in a science inquiry process? 科學探究過程的第一步是什麼？',
      options: [{ label: 'A', text: 'Asking a question 提出問題' }, { label: 'B', text: 'Making a prediction 做出預測' }, { label: 'C', text: 'Conducting an experiment 進行實驗' }, { label: 'D', text: 'Drawing conclusions 得出結論' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a type of science inquiry? 以下哪一項是科學探究的類型？',
      options: [{ label: 'A', text: 'Classifying 分類' }, { label: 'B', text: 'Singing 唱歌' }, { label: 'C', text: 'Dancing 跳舞' }, { label: 'D', text: 'Painting 繪畫' }],
      answer: 'A',
    },
    {
      question: 'What do scientists do after they observe something? 科學家在觀察到某事物後會做什麼？',
      options: [{ label: 'A', text: 'Ask a question 提出問題' }, { label: 'B', text: 'Ignore it 忽略它' }, { label: 'C', text: 'Forget about it 忘記它' }, { label: 'D', text: 'Laugh 大笑' }],
      answer: 'A',
    },
    {
      question: 'Which step comes after making a prediction in the science inquiry process? 在科學探究過程中，做出預測後是哪一步？',
      options: [{ label: 'A', text: 'Conducting an experiment 進行實驗' }, { label: 'B', text: 'Asking a question 提出問題' }, { label: 'C', text: 'Drawing conclusions 得出結論' }, { label: 'D', text: 'Sharing results 分享結果' }],
      answer: 'A',
    },
    {
      question: 'What is the purpose of classifying in science? 科學中分類的目的是什麼？',
      options: [{ label: 'A', text: 'To organize things into groups 將事物分組' }, { label: 'B', text: 'To make things messy 使事物混亂' }, { label: 'C', text: 'To hide things 隱藏事物' }, { label: 'D', text: 'To break things 破壞事物' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of pattern seeking? 以下哪一項是尋找模式的例子？',
      options: [{ label: 'A', text: 'Noticing that plants grow taller with more sunlight 注意到植物在有更多陽光時長得更高' }, { label: 'B', text: 'Counting the number of leaves on a plant 計算植物上的葉子數量' }, { label: 'C', text: 'Drawing a picture of a plant 畫一幅植物的圖畫' }, { label: 'D', text: 'Watering a plant 給植物澆水' }],
      answer: 'A',
    },
    {
      question: 'What is modeling in science? 科學中的建模是什麼？',
      options: [{ label: 'A', text: 'Creating a representation of something 創建某事物的表示' }, { label: 'B', text: 'Building a toy 建造一個玩具' }, { label: 'C', text: 'Drawing a random picture 畫一幅隨機的圖畫' }, { label: 'D', text: 'Writing a story 寫一個故事' }],
      answer: 'A',
    },
    {
      question: 'Why is it important to share results in science? 為什麼在科學中分享結果很重要？',
      options: [{ label: 'A', text: 'So others can learn from it 以便其他人可以從中學習' }, { label: 'B', text: 'To keep it a secret 保密' }, { label: 'C', text: 'To make it confusing 使其混淆' }, { label: 'D', text: 'To forget about it 忘記它' }],
      answer: 'A',
    },
    {
      question: 'What is the last step in the science inquiry process? 科學探究過程的最後一步是什麼？',
      options: [{ label: 'A', text: 'Drawing conclusions 得出結論' }, { label: 'B', text: 'Asking a question 提出問題' }, { label: 'C', text: 'Making a prediction 做出預測' }, { label: 'D', text: 'Observing 觀察' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a science inquiry process? 以下哪一項不是科學探究過程？',
      options: [{ label: 'A', text: 'Guessing randomly 隨機猜測' }, { label: 'B', text: 'Classifying 分類' }, { label: 'C', text: 'Pattern seeking 尋找模式' }, { label: 'D', text: 'Modeling 建模' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Asking a question is the first step in the science inquiry process. 提出問題是科學探究過程的第一步。', answer: true },
    { statement: 'Singing is a type of science inquiry. 唱歌是科學探究的一種類型。', answer: false },
    { statement: 'Scientists always share their results with others. 科學家總是與他人分享他們的結果。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe one step in the science inquiry process. 描述科學探究過程中的一個步驟。',
    },
    {
      question: 'Give an example of classifying in science. 舉一個科學中分類的例子。',
    },
    {
      question: 'Why is it important to follow steps in a science inquiry? 為什麼在科學探究中遵循步驟很重要？',
    },
  ],
};

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
            Science inquiry processes help us explore and understand the natural world through systematic steps. Students will learn about observation, questioning, and experimentation as fundamental scientific skills.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Be aware of science inquiry processes and steps</li>
                <li>Be aware of the different types of science inquiry (e.g. classifying, pattern seeking, modeling)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Classify different leaves based on their shapes and sizes</li>
              <li>Observe and record patterns in plant growth under different conditions</li>
              <li>Create simple models to represent scientific concepts</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the scientific method and apply basic inquiry skills to explore natural phenomena.
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
              <li>Recognizing the role of inquiry in technological advancements</li>
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