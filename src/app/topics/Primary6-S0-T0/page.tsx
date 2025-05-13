'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the first thing you should do if you get a minor cut? 如果你有一個小傷口，你應該首先做什麼？',
      options: [{ label: 'A', text: 'Wash the wound with clean water 用清水清洗傷口' }, { label: 'B', text: 'Apply a bandage immediately 立即貼上繃帶' }, { label: 'C', text: 'Ignore it and let it heal on its own 忽略它，讓它自行癒合' }, { label: 'D', text: 'Put ice directly on the wound 直接將冰塊放在傷口上' }],
      answer: 'A',
    },
    {
      question: 'What should you do if you smell a gas leak at home? 如果你在家聞到煤氣洩漏，你應該怎麼做？',
      options: [{ label: 'A', text: 'Open all windows and doors 打開所有門窗' }, { label: 'B', text: 'Light a match to check the source 點燃火柴檢查來源' }, { label: 'C', text: 'Turn on electrical appliances 打開電器' }, { label: 'D', text: 'Spray water to dilute the gas 噴水稀釋煤氣' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a healthy lifestyle choice? 以下哪一項不是健康的生活方式選擇？',
      options: [{ label: 'A', text: 'Eating a balanced diet 均衡飲食' }, { label: 'B', text: 'Exercising regularly 定期運動' }, { label: 'C', text: 'Smoking cigarettes 吸煙' }, { label: 'D', text: 'Getting enough sleep 獲得足夠的睡眠' }],
      answer: 'C',
    },
    {
      question: 'What is the best way to treat a minor burn? 治療輕微燒傷的最佳方法是什麼？',
      options: [{ label: 'A', text: 'Run cool water over the burn 用冷水沖洗燒傷處' }, { label: 'B', text: 'Apply butter to the burn 在燒傷處塗抹黃油' }, { label: 'C', text: 'Pop any blisters that form 戳破形成的水泡' }, { label: 'D', text: 'Cover the burn with a tight bandage 用緊繃帶包紮燒傷處' }],
      answer: 'A',
    },
    {
      question: 'What should you do if there is a small fire in the kitchen? 如果廚房發生小火災，你應該怎麼做？',
      options: [{ label: 'A', text: 'Use a fire extinguisher or cover the fire with a lid 使用滅火器或用蓋子蓋住火源' }, { label: 'B', text: 'Pour water on the fire 往火上倒水' }, { label: 'C', text: 'Run away and call for help 逃跑並呼救' }, { label: 'D', text: 'Ignore it and let it burn out 忽略它，讓它自行熄滅' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an adverse effect of smoking? 以下哪一項是吸煙的不良影響？',
      options: [{ label: 'A', text: 'Lung cancer 肺癌' }, { label: 'B', text: 'Stronger immune system 更強的免疫系統' }, { label: 'C', text: 'Better sense of smell 更好的嗅覺' }, { label: 'D', text: 'Improved stamina 提高耐力' }],
      answer: 'A',
    },
    {
      question: 'What should you do if someone is choking? 如果有人窒息，你應該怎麼做？',
      options: [{ label: 'A', text: 'Perform the Heimlich maneuver 進行哈姆立克急救法' }, { label: 'B', text: 'Give them water to drink 給他們喝水' }, { label: 'C', text: 'Pat them on the back gently 輕輕拍他們的背' }, { label: 'D', text: 'Tell them to cough harder 告訴他們用力咳嗽' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a symptom of alcohol abuse? 以下哪一項是酗酒的症狀？',
      options: [{ label: 'A', text: 'Liver damage 肝臟損傷' }, { label: 'B', text: 'Improved memory 記憶力提高' }, { label: 'C', text: 'Better coordination 更好的協調性' }, { label: 'D', text: 'Increased energy levels 能量水平提高' }],
      answer: 'A',
    },
    {
      question: 'What is the first step in treating a nosebleed? 治療鼻血的第一步是什麼？',
      options: [{ label: 'A', text: 'Pinch the nose and lean forward 捏住鼻子並向前傾' }, { label: 'B', text: 'Lie down and tilt the head back 躺下並向後仰頭' }, { label: 'C', text: 'Blow the nose forcefully 用力擤鼻子' }, { label: 'D', text: 'Apply ice to the forehead 在前額敷冰' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a way to prevent drug abuse? 以下哪一項是預防藥物濫用的方法？',
      options: [{ label: 'A', text: 'Educating about the dangers of drugs 教育有關藥物的危險性' }, { label: 'B', text: 'Trying drugs once to see their effects 嘗試藥物一次以了解其效果' }, { label: 'C', text: 'Keeping drugs at home for emergencies 在家中存放藥物以備不時之需' }, { label: 'D', text: 'Ignoring the topic of drugs 忽略藥物話題' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Smoking can cause lung cancer. 吸煙會導致肺癌。', answer: true },
    { statement: 'It is safe to use water to put out an electrical fire. 用水撲滅電器火災是安全的。', answer: false },
    { statement: 'Regular exercise is part of a healthy lifestyle. 定期運動是健康生活方式的一部分。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe two ways to prevent household accidents. 描述兩種預防家庭事故的方法。',
    },
    {
      question: 'Explain why smoking is harmful to the body. 解釋為什麼吸煙對身體有害。',
    },
    {
      question: 'What are three healthy habits you can practice daily? 你可以每天實踐的三個健康習慣是什麼？',
    },
  ],
};

export default function HealthyLifestylesPage() {
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
             Healthy lifestyles
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
            A healthy lifestyle involves making choices that benefit your physical and mental well-being. This includes proper nutrition, regular exercise, and avoiding harmful habits like smoking or excessive alcohol consumption.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recognise simple first-aid for handling minor injuries or discomforts</li>
                <li>Recognise ways to handle household accidents (e.g. fire, leakage of electricity, gas leak)</li>
                <li>Be aware of the adverse effects of smoking, alcoholism, drug abuse and drug use on the body</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
              <li>Role-play scenarios for handling household emergencies</li>
              <li>Create a weekly healthy meal plan and exercise schedule</li>
              <li>Design posters about the dangers of smoking and drug abuse</li>
              <li>Practice basic first aid techniques on mannequins</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
              Students will understand the importance of healthy habits and be able to apply basic first aid and safety measures in daily life.
            </p>
          </SectionCard>

          <SectionCard icon={<Heart className="h-5 w-5 text-rose-600" />} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
              <li>Developing responsibility for personal health and safety</li>
              <li>Cultivating respect for one's body and well-being</li>
              <li>Showing concern for others' health and safety</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Microscope className="h-5 w-5 text-indigo-600" />} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
              <li>Understanding how lifestyle choices impact public health systems</li>
              <li>Exploring how technology improves health monitoring and safety</li>
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