'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the primary purpose of homeostasis in the human body? 人體內穩態的主要目的是什麼?',
      options: [{ label: 'A', text: 'To maintain a stable internal environment 維持穩定的內部環境' }, { label: 'B', text: 'To increase body temperature 提高體溫' }, { label: 'C', text: 'To decrease blood glucose levels 降低血糖水平' }, { label: 'D', text: 'To eliminate waste products 排除廢物' }],
      answer: 'A',
    },
    {
      question: 'Which organ plays a key role in regulating blood glucose levels? 哪個器官在調節血糖水平中起關鍵作用?',
      options: [{ label: 'A', text: 'Liver 肝臟' }, { label: 'B', text: 'Heart 心臟' }, { label: 'C', text: 'Lungs 肺' }, { label: 'D', text: 'Kidneys 腎臟' }],
      answer: 'A',
    },
    {
      question: 'Which hormone is released when blood glucose levels are too high? 當血糖水平過高時，會釋放哪種激素?',
      options: [{ label: 'A', text: 'Insulin 胰島素' }, { label: 'B', text: 'Glucagon 胰高血糖素' }, { label: 'C', text: 'Adrenaline 腎上腺素' }, { label: 'D', text: 'Thyroxine 甲狀腺素' }],
      answer: 'A',
    },
    {
      question: 'What is the feedback mechanism in homeostasis? 穩態中的反饋機制是什麼?',
      options: [{ label: 'A', text: 'A process that reverses a change to maintain stability 一個逆轉變化以維持穩定的過程' }, { label: 'B', text: 'A process that amplifies a change 一個放大變化的過程' }, { label: 'C', text: 'A process that ignores changes 一個忽略變化的過程' }, { label: 'D', text: 'A process that creates random changes 一個產生隨機變化的過程' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a parameter of the internal environment? 以下哪項不是內部環境的參數?',
      options: [{ label: 'A', text: 'Hair color 頭髮顏色' }, { label: 'B', text: 'Blood glucose level 血糖水平' }, { label: 'C', text: 'Body temperature 體溫' }, { label: 'D', text: 'Water balance 水分平衡' }],
      answer: 'A',
    },
    {
      question: 'What happens when the pancreas fails to produce enough insulin? 當胰腺無法產生足夠的胰島素時會發生什麼?',
      options: [{ label: 'A', text: 'Diabetes mellitus 糖尿病' }, { label: 'B', text: 'Hypertension 高血壓' }, { label: 'C', text: 'Anemia 貧血' }, { label: 'D', text: 'Osteoporosis 骨質疏鬆症' }],
      answer: 'A',
    },
    {
      question: 'Which system works with the endocrine system to maintain homeostasis? 哪個系統與內分泌系統一起維持穩態?',
      options: [{ label: 'A', text: 'Nervous system 神經系統' }, { label: 'B', text: 'Digestive system 消化系統' }, { label: 'C', text: 'Respiratory system 呼吸系統' }, { label: 'D', text: 'Skeletal system 骨骼系統' }],
      answer: 'A',
    },
    {
      question: 'What is the role of glucagon in blood glucose regulation? 胰高血糖素在血糖調節中的作用是什麼?',
      options: [{ label: 'A', text: 'It increases blood glucose levels 它提高血糖水平' }, { label: 'B', text: 'It decreases blood glucose levels 它降低血糖水平' }, { label: 'C', text: 'It has no effect on blood glucose 它對血糖沒有影響' }, { label: 'D', text: 'It stabilizes blood glucose levels 它穩定血糖水平' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of negative feedback? 以下哪個是負反饋的例子?',
      options: [{ label: 'A', text: 'Thermoregulation 溫度調節' }, { label: 'B', text: 'Blood clotting 血液凝固' }, { label: 'C', text: 'Childbirth 分娩' }, { label: 'D', text: 'Fruit ripening 水果成熟' }],
      answer: 'A',
    },
    {
      question: 'Why is maintaining homeostasis important for survival? 為什麼維持穩態對生存很重要?',
      options: [{ label: 'A', text: 'It ensures optimal conditions for cellular functions 它確保細胞功能的最佳條件' }, { label: 'B', text: 'It prevents all diseases 它預防所有疾病' }, { label: 'C', text: 'It increases body size 它增加體型' }, { label: 'D', text: 'It reduces the need for food 它減少對食物的需求' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Homeostasis is the maintenance of a stable internal environment despite external changes. 穩態是在外部變化下維持穩定的內部環境。', answer: true },
    { statement: 'Glucagon is released when blood glucose levels are too high. 當血糖水平過高時會釋放胰高血糖素。', answer: false },
    { statement: 'The liver stores excess glucose as glycogen. 肝臟將多餘的葡萄糖儲存為糖原。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how the nervous and endocrine systems work together to maintain homeostasis. 解釋神經系統和內分泌系統如何共同維持穩態。',
    },
    {
      question: 'Describe the physiological consequences of insulin imbalance and possible remedies. 描述胰島素失衡的生理後果及可能的補救措施。',
    },
    {
      question: 'How does the feedback mechanism principle apply to blood glucose regulation? 反饋機制原理如何應用於血糖調節?',
    },
  ],
};

export default function HomeostasisPage() {
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
            Homeostasis
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Organisms are an integral part of the environment. Their ways of life and living are closely related to the environment where they live in. Based on this perspective, students will gain knowledge and understanding of organisms and their environment. Firstly, students will study how organisms obtain their basic needs for oxygen, water and food from the environment. Life processes, such as nutrition, gas exchange, and transport involved, will be studied in an integrated manner so as to enhance understanding of the structures and functions of an organism as a whole. Secondly, students will study reproduction, growth and development to understand how organisms perpetuate and proliferate in the environment. The human is used as a model for students to understand the essential life processes of animals. Thirdly, students will examine how organisms detect changes in the environment and make appropriate responses for their survival, and how humans maintain a steady internal environment. Students will then explore how organisms interact with each other and with their environment as a whole. Finally, the dynamic nature of the ecosystems that involves energy flow and materials cycling will also be investigated. Students are expected to develop an awareness of the impact of human activities on the ecosystems and recognise the need for conservation.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Concept of homeostasis (Importance, Feedback mechanism)</li>
                <li>Internal environment parameters (Glucose, gas, water, temp)</li>
                <li>Blood glucose regulation (Liver, pancreas, insulin, glucagon roles)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Construct flow chart illustrating feedback mechanism.</li>
                <li>Search info on physiological consequences of hormonal imbalance (e.g., insulin) and remedies.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Explain feedback mechanism principle via blood glucose regulation.</li>
                <li>Appreciate internal environment maintenance by nervous/endocrine systems.</li>
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
                <li>Evaluate the impact of the application of biology to human activities (e.g. dietary requirement, birth control and pollution control);</li>
                <li>Analyse ways in which scientific and technological advancement (e.g. computing technology and image analysing technology) have enhanced our understanding of complex life processes;</li>
                <li>Develop sensitivity and responsibility in striking a balance between the needs of humans and a sustainable environment;</li>
                <li>Be aware of the application of biological knowledge (e.g. balanced diet, birth control, and sewage treatment) in society and its social, ethical, economic and environmental implications.</li>
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