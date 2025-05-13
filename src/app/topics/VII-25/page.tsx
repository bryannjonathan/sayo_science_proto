'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is NOT a stage in the multiplication of viruses? 以下哪項不是病毒繁殖的階段?',
      options: [{ label: 'A', text: 'Attachment 附著' }, { label: 'B', text: 'Penetration 穿透' }, { label: 'C', text: 'Binary fission 二分裂' }, { label: 'D', text: 'Release 釋放' }],
      answer: 'C',
    },
    {
      question: 'Which microorganism group is characterized by having chitin in their cell walls? 以下哪種微生物的細胞壁含有幾丁質?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Protista 原生生物' }, { label: 'C', text: 'Fungi 真菌' }, { label: 'D', text: 'Viruses 病毒' }],
      answer: 'C',
    },
    {
      question: 'What is the primary purpose of aseptic techniques? 無菌技術的主要目的是什麼?',
      options: [{ label: 'A', text: 'To speed up microbial growth 加速微生物生長' }, { label: 'B', text: 'To prevent contamination 防止污染' }, { label: 'C', text: 'To increase mutation rates 增加突變率' }, { label: 'D', text: 'To reduce nutrient availability 減少營養供應' }],
      answer: 'B',
    },
    {
      question: 'Which environmental factor is NOT essential for microbial growth? 以下哪項環境因素對微生物生長非必需?',
      options: [{ label: 'A', text: 'Temperature 溫度' }, { label: 'B', text: 'pH值' }, { label: 'C', text: 'Light intensity 光照強度' }, { label: 'D', text: 'Moisture 水分' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is a method to measure microbial growth? 以下哪項是測量微生物生長的方法?',
      options: [{ label: 'A', text: 'Spectrophotometry 分光光度法' }, { label: 'B', text: 'Chromatography 色譜法' }, { label: 'C', text: 'Electrophoresis 電泳' }, { label: 'D', text: 'Centrifugation 離心' }],
      answer: 'A',
    },
    {
      question: 'Which microorganism is used in sewage treatment? 哪種微生物用於污水處理?',
      options: [{ label: 'A', text: 'Escherichia coli 大腸桿菌' }, { label: 'B', text: 'Saccharomyces cerevisiae 釀酒酵母' }, { label: 'C', text: 'Plasmodium 瘧原蟲' }, { label: 'D', text: 'Influenza virus 流感病毒' }],
      answer: 'A',
    },
    {
      question: 'What is the first stage of microbial growth in a culture? 微生物在培養基中生長的第一階段是什麼?',
      options: [{ label: 'A', text: 'Lag phase 延滯期' }, { label: 'B', text: 'Log phase 對數期' }, { label: 'C', text: 'Stationary phase 穩定期' }, { label: 'D', text: 'Death phase 衰亡期' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a precaution in aseptic techniques? 以下哪項是無菌技術的預防措施?',
      options: [{ label: 'A', text: 'Using unsterilized equipment 使用未滅菌的設備' }, { label: 'B', text: 'Working near an open flame 在明火附近工作' }, { label: 'C', text: 'Leaving petri dishes uncovered 不蓋上培養皿' }, { label: 'D', text: 'Wearing gloves 戴手套' }],
      answer: 'D',
    },
    {
      question: 'Which microorganism group includes photosynthetic organisms? 哪種微生物群包含光合生物?',
      options: [{ label: 'A', text: 'Bacteria 細菌' }, { label: 'B', text: 'Protista 原生生物' }, { label: 'C', text: 'Fungi 真菌' }, { label: 'D', text: 'Viruses 病毒' }],
      answer: 'B',
    },
    {
      question: 'What is the role of decomposers in the environment? 分解者在環境中的作用是什麼?',
      options: [{ label: 'A', text: 'To produce oxygen 產生氧氣' }, { label: 'B', text: 'To break down organic matter 分解有機物' }, { label: 'C', text: 'To fix nitrogen 固氮' }, { label: 'D', text: 'To cause diseases 引起疾病' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Viruses can reproduce independently without a host cell. 病毒可以在沒有宿主細胞的情況下獨立繁殖。', answer: false },
    { statement: 'Bacteria have a nucleus enclosed within a membrane. 細菌具有被膜包圍的細胞核。', answer: false },
    { statement: 'Aseptic techniques are used to prevent contamination in microbial cultures. 無菌技術用於防止微生物培養物被污染。', answer: true },
  ],
  open_ended: [
    {
      question: 'Describe the steps involved in the multiplication of a virus. 描述病毒繁殖的步驟。',
    },
    {
      question: 'Explain how environmental factors such as temperature and pH affect microbial growth. 解釋環境因素（如溫度和pH值）如何影響微生物生長。',
    },
    {
      question: 'Discuss the importance of aseptic techniques in microbiological experiments. 討論無菌技術在微生物實驗中的重要性。',
    },
  ],
};

export default function MicrobiologyPage() {
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
            Microbiology
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Humans are living in a world full of microorganisms, and our daily lives are directly and indirectly affected by them. In this topic, students will develop an understanding of the diversity of microorganisms, and their beneficial and harmful roles. Students will have the opportunity to study the growth of microorganisms, and develop appropriate laboratory skills and techniques for conducting practical work with microorganisms. Examples of uses of microorganisms in food, medicine, industry pollution control and genetic engineering are included, so as to illustrate the importance of microorganisms and their wide applications. Finally, human diseases caused by pathogenic microorganisms, and microbial deterioration are used to illustrate the harmful effects of microorganisms. Microorganisms and Humans builds on students’ prior knowledge of Cellular energetics, Molecular genetics, Diversity of life forms, Functioning of ecosystem, and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Viruses (Multiplication)</li>
                <li>Diversity of microorganisms (Bacteria, Protista, Fungi)</li>
                <li>Growth of microorganisms (Requirements, Stages, Measurement)</li>
                <li>Aseptic techniques (Principles, Precautions, Risk assessment)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Perform practical work: demonstrate aseptic techniques; grow yeast.</li>
                <li>Design/perform investigations on microorganism growth.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Describe virus reproduction via infection.</li>
                <li>Distinguish microorganism groups by features.</li>
                <li>Discuss environmental factor effects on growth.</li>
                <li>Measure/identify growth stages in culture.</li>
                <li>Outline aseptic technique principles.</li>
                <li>Use aseptic techniques safely.</li>
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
                <li>Be aware of the influences of various types of microorganisms on society and the environment (e.g. as pathogens, decomposers);</li>
                <li>Be aware of the applications of knowledge of microorganisms and their social, economic and environmental implications (e.g. the use of bacteria in biotechnology);</li>
                <li>Analyse ways in which scientific and technological advancement have enhanced our understanding in microbiology(e.g. aseptic techniques, recombinant DNA technology);</li>
                <li>Explain how biological knowledge is used in technological application (e.g. the use of microorganisms in sewage treatment).</li>
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