'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the World Health Organization\'s definition of health? 世界衛生組織對健康的定義是什麼？',
      options: [{ label: 'A', text: 'A state of complete physical, mental, and social well-being 一種完全的身體、心理和社會福祉的狀態' }, { label: 'B', text: 'The absence of disease or infirmity 沒有疾病或虛弱' }, { label: 'C', text: 'The ability to perform daily activities without fatigue 能夠進行日常活動而不感到疲勞' }, { label: 'D', text: 'A state of physical fitness 一種身體健康的狀態' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a dimension of health? 以下哪一項不是健康的維度？',
      options: [{ label: 'A', text: 'Physical health 身體健康' }, { label: 'B', text: 'Mental health 心理健康' }, { label: 'C', text: 'Financial health 財務健康' }, { label: 'D', text: 'Social health 社會健康' }],
      answer: 'C',
    },
    {
      question: 'What is the primary focus of personal health? 個人健康的主要關注點是什麼？',
      options: [{ label: 'A', text: 'Preventing diseases 預防疾病' }, { label: 'B', text: 'Maintaining overall well-being 維持整體福祉' }, { label: 'C', text: 'Achieving physical fitness 達到身體健康' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which factor is most critical for maintaining good health? 哪個因素對維持良好健康最為關鍵？',
      options: [{ label: 'A', text: 'Balanced diet 均衡飲食' }, { label: 'B', text: 'Regular exercise 定期運動' }, { label: 'C', text: 'Adequate sleep 充足睡眠' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'How does mental health contribute to overall health? 心理健康如何影響整體健康？',
      options: [{ label: 'A', text: 'It affects emotional well-being 它影響情緒福祉' }, { label: 'B', text: 'It influences physical health 它影響身體健康' }, { label: 'C', text: 'It impacts social relationships 它影響社會關係' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is the role of social health in personal well-being? 社會健康在個人福祉中的作用是什麼？',
      options: [{ label: 'A', text: 'It helps build supportive relationships 它有助於建立支持性關係' }, { label: 'B', text: 'It reduces stress and loneliness 它減少壓力和孤獨感' }, { label: 'C', text: 'It promotes a sense of belonging 它促進歸屬感' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is a key component of a healthy lifestyle? 以下哪一項是健康生活方式的關鍵組成部分？',
      options: [{ label: 'A', text: 'Avoiding tobacco and alcohol 避免煙草和酒精' }, { label: 'B', text: 'Regular health check-ups 定期健康檢查' }, { label: 'C', text: 'Stress management 壓力管理' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Why is environmental health important for personal health? 為什麼環境健康對個人健康很重要？',
      options: [{ label: 'A', text: 'It affects air and water quality 它影響空氣和水質' }, { label: 'B', text: 'It influences exposure to toxins 它影響接觸毒素' }, { label: 'C', text: 'It impacts overall living conditions 它影響整體生活條件' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is the significance of preventive healthcare? 預防性醫療保健的重要性是什麼？',
      options: [{ label: 'A', text: 'It reduces the risk of diseases 它降低疾病風險' }, { label: 'B', text: 'It promotes early detection of health issues 它促進健康問題的早期發現' }, { label: 'C', text: 'It lowers healthcare costs 它降低醫療成本' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'How can individuals contribute to community health? 個人如何為社區健康做出貢獻？',
      options: [{ label: 'A', text: 'By practicing good hygiene 通過保持良好的衛生習慣' }, { label: 'B', text: 'By participating in health awareness programs 通過參與健康意識計劃' }, { label: 'C', text: 'By supporting public health policies 通過支持公共衛生政策' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Health is solely the absence of disease. 健康僅僅是沒有疾病。', answer: false },
    { statement: 'Mental health is as important as physical health for overall well-being. 心理健康對整體福祉與身體健康同等重要。', answer: true },
    { statement: 'Environmental factors have no impact on personal health. 環境因素對個人健康沒有影響。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain the relationship between physical health and mental health. 解釋身體健康與心理健康之間的關係。',
    },
    {
      question: 'Discuss the importance of a balanced diet in maintaining personal health. 討論均衡飲食在維持個人健康中的重要性。',
    },
    {
      question: 'How can societal needs drive advancements in healthcare technology? 社會需求如何推動醫療保健技術的進步？',
    },
  ],
};

export default function PersonalHealthPage() {
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
            Personal health
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Students will acquire knowledge and understanding of what constitutes health; so that they can make informed decisions on the choice of lifestyles, habits, and disease prevention measures. This is designed to help students develop a positive attitude towards health and be aware of both individual and public responsibility for the maintenance of a healthy community. The routes of pathogen transmission and the causes of some non-infectious diseases are to be learned in association with the biological principles that may lead to their prevention and control. The physiological defence mechanisms employed by the human body to combat diseases, the principle of vaccination, the use of antibiotics, and some of the related issues, are also discussed.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Meaning of health</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">

            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Recognise the meaning of health.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
                <li>Show an interest in the study of biology, appreciate the wonders and complexity of Nature, and show respect for all living things and the environment;</li>
                <li>Recognise their responsibility for conserving, protecting and maintaining the quality of the environment;</li>
                <li>Develop positive values and attitudes towards adopting a healthy lifestyle;</li>
                <li>Be aware of the dynamic nature of biological knowledge and appreciate the role of science and technology in understanding the living world;</li>
                <li>Be aware of the application of biological knowledge in society and its social, ethical, economic and environmental implications.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
                <li>Be aware of the application of biological knowledge in maintaining a healthy community and its social, ethical, economic and environmental implications;</li>
                <li>Analyse ways in which societal needs have led to technological advances (e.g. treatment and prevention of diseases);</li>
                <li>Appreciate how modern technological advances and scientific discoveries contribute to the detection, diagnosis, treatment, prevention and monitoring of diseases (e.g. cancer and tuberculosis);</li>
                <li>Be aware of personal responsibility in preventing disease transmission.</li>
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