'use client';

import BackButton from '@/components/BackButton'
import QuizSection from '@/components/QuizSection'
import SectionCard from '@/components/SectionCard'
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react'

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a communicable disease? 以下哪一種是傳染病?',
      options: [{ label: 'A', text: 'Influenza 流感' }, { label: 'B', text: 'Heart disease 心臟病' }, { label: 'C', text: 'Cancer 癌症' }, { label: 'D', text: 'Diabetes 糖尿病' }],
      answer: 'A',
    },
    {
      question: 'How is cholera mainly transmitted? 霍亂主要通過什麼途徑傳播?',
      options: [{ label: 'A', text: 'Droplet transmission 飛沫傳播' }, { label: 'B', text: 'Food and water contamination 食物和水污染' }, { label: 'C', text: 'Vector transmission 媒介傳播' }, { label: 'D', text: 'Blood transmission 血液傳播' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a symptom of influenza? 以下哪一項是流感的症狀?',
      options: [{ label: 'A', text: 'High fever 高燒' }, { label: 'B', text: 'Coughing 咳嗽' }, { label: 'C', text: 'Sore throat 喉嚨痛' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is a common prevention method for communicable diseases? 傳染病的常見預防方法是什麼?',
      options: [{ label: 'A', text: 'Washing hands frequently 經常洗手' }, { label: 'B', text: 'Eating healthy food 吃健康食物' }, { label: 'C', text: 'Exercising regularly 定期運動' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is a non-communicable disease? 以下哪一種是非傳染病?',
      options: [{ label: 'A', text: 'Cholera 霍亂' }, { label: 'B', text: 'Influenza 流感' }, { label: 'C', text: 'Heart disease 心臟病' }, { label: 'D', text: 'COVID-19 新冠肺炎' }],
      answer: 'C',
    },
    {
      question: 'What is a main cause of heart disease? 心臟病的主要原因是什麼?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Viruses 病毒' }, { label: 'C', text: 'Unhealthy diet 不健康飲食' }, { label: 'D', text: 'Mosquito bites 蚊子叮咬' }],
      answer: 'C',
    },
    {
      question: 'How can we prevent non-communicable diseases? 我們如何預防非傳染病?',
      options: [{ label: 'A', text: 'Regular exercise 定期運動' }, { label: 'B', text: 'Balanced diet 均衡飲食' }, { label: 'C', text: 'Avoiding smoking 避免吸煙' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is an example of vector transmission? 以下哪一項是媒介傳播的例子?',
      options: [{ label: 'A', text: 'Coughing 咳嗽' }, { label: 'B', text: 'Mosquito bites 蚊子叮咬' }, { label: 'C', text: 'Shaking hands 握手' }, { label: 'D', text: 'Eating contaminated food 食用受污染的食物' }],
      answer: 'B',
    },
    {
      question: 'What scientific advancement helped respond to the COVID-19 pandemic? 什麼科學進步幫助應對新冠肺炎大流行?',
      options: [{ label: 'A', text: 'Vaccines 疫苗' }, { label: 'B', text: 'Antibiotics 抗生素' }, { label: 'C', text: 'Painkillers 止痛藥' }, { label: 'D', text: 'Vitamins 維生素' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a symptom of cholera? 以下哪一項不是霍亂的症狀?',
      options: [{ label: 'A', text: 'Severe diarrhea 嚴重腹瀉' }, { label: 'B', text: 'Vomiting 嘔吐' }, { label: 'C', text: 'High fever 高燒' }, { label: 'D', text: 'Dehydration 脫水' }],
      answer: 'C',
    },
  ],
  true_false: [
    { statement: 'Communicable diseases can spread from person to person. 傳染病可以人傳人。', answer: true },
    { statement: 'Cancer is a communicable disease. 癌症是一種傳染病。', answer: false },
    { statement: 'Washing hands can help prevent the spread of diseases. 洗手可以幫助預防疾病傳播。', answer: true },
  ],
  open_ended: [
    {
      question: 'Name two common communicable diseases and their symptoms. 列舉兩種常見的傳染病及其症狀。',
    },
    {
      question: 'Explain one way to prevent the spread of communicable diseases. 解釋一種預防傳染病傳播的方法。',
    },
    {
      question: 'Why is it important to have a balanced diet to prevent non-communicable diseases? 為什麼均衡飲食對預防非傳染病很重要?',
    },
  ],
}

export default function CommunicableAndNonCommunicableDiseasesPage() {
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
             Communicable and non-communicable diseases
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            Communicable diseases spread between people through various transmission routes, while non-communicable diseases develop from lifestyle and genetic factors. Understanding their differences helps in prevention and maintaining public health.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise common communicable diseases (e.g. influenza, cholera) and their major causes and symptoms</li>
                <li>Recognise the transmission routes of communicable diseases (e.g. droplet transmission, vector transmission, contact transmission, food transmission, blood transmission) and their prevention</li>
                <li>Recognise common non-communicable diseases (e.g. heart diseases, cancer) and their main causes, symptoms and prevention</li>
                <li>Realise that scientific progress can help respond to large-scale communicable diseases (e.g. the COVID-19 pandemic), protect the lives and health of people, and promote biosecurity</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Create a poster showing different disease transmission routes</li>
              <li>Role-play scenarios demonstrating proper hygiene practices</li>
              <li>Classify diseases as communicable or non-communicable in a sorting game</li>
              <li>Design a healthy lifestyle plan to prevent non-communicable diseases</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will be able to differentiate between communicable and non-communicable diseases, understand their causes and prevention methods, and appreciate the role of science in disease control.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing empathy for people affected by diseases</li>
              <li>Taking responsibility for personal and community health</li>
              <li>Appreciating the importance of scientific research in medicine</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Impact of public health policies on disease prevention</li>
              <li>Role of vaccination programs in controlling epidemics</li>
              <li>Economic consequences of disease outbreaks</li>
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