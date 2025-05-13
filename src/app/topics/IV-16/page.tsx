'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a non-specific defence mechanism? 以下哪一項是非特異性防禦機制？',
      options: [{ label: 'A', text: 'Antibody production 抗體產生' }, { label: 'B', text: 'Phagocytosis 吞噬作用' }, { label: 'C', text: 'Memory B cells 記憶B細胞' }, { label: 'D', text: 'Antigen recognition 抗原識別' }],
      answer: 'B',
    },
    {
      question: 'What is the primary function of lymphocytes in the immune response? 淋巴細胞在免疫反應中的主要功能是什麼？',
      options: [{ label: 'A', text: 'Producing histamines 產生組織胺' }, { label: 'B', text: 'Engulfing pathogens 吞噬病原體' }, { label: 'C', text: 'Recognizing and responding to specific antigens 識別並對特定抗原作出反應' }, { label: 'D', text: 'Producing mucus 產生黏液' }],
      answer: 'C',
    },
    {
      question: 'Which type of immunity is conferred by vaccination? 疫苗接種賦予哪種類型的免疫力？',
      options: [{ label: 'A', text: 'Passive immunity 被動免疫' }, { label: 'B', text: 'Active immunity 主動免疫' }, { label: 'C', text: 'Innate immunity 先天免疫' }, { label: 'D', text: 'Non-specific immunity 非特異性免疫' }],
      answer: 'B',
    },
    {
      question: 'What is the role of antibodies in the immune system? 抗體在免疫系統中的作用是什麼？',
      options: [{ label: 'A', text: 'To directly kill pathogens 直接殺死病原體' }, { label: 'B', text: 'To mark pathogens for destruction 標記病原體以便摧毀' }, { label: 'C', text: 'To produce memory cells 產生記憶細胞' }, { label: 'D', text: 'To engulf pathogens 吞噬病原體' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a characteristic of the secondary immune response? 以下哪一項是次級免疫反應的特徵？',
      options: [{ label: 'A', text: 'Slower response 反應較慢' }, { label: 'B', text: 'Lower antibody production 抗體產生較少' }, { label: 'C', text: 'Involves memory cells 涉及記憶細胞' }, { label: 'D', text: 'Non-specific 非特異性' }],
      answer: 'C',
    },
    {
      question: 'Which cells are responsible for the production of antibodies? 哪些細胞負責產生抗體？',
      options: [{ label: 'A', text: 'Phagocytes 吞噬細胞' }, { label: 'B', text: 'T lymphocytes T淋巴細胞' }, { label: 'C', text: 'B lymphocytes B淋巴細胞' }, { label: 'D', text: 'Red blood cells 紅血球' }],
      answer: 'C',
    },
    {
      question: 'What is the main difference between active and passive immunity? 主動免疫和被動免疫的主要區別是什麼？',
      options: [{ label: 'A', text: 'Active immunity is temporary, passive is permanent 主動免疫是暫時的，被動免疫是永久的' }, { label: 'B', text: 'Active immunity involves antibody production, passive does not 主動免疫涉及抗體產生，被動免疫不涉及' }, { label: 'C', text: 'Active immunity is faster, passive is slower 主動免疫更快，被動免疫更慢' }, { label: 'D', text: 'Active immunity is non-specific, passive is specific 主動免疫是非特異性的，被動免疫是特異性的' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of passive immunity? 以下哪一項是被動免疫的例子？',
      options: [{ label: 'A', text: 'Vaccination 疫苗接種' }, { label: 'B', text: 'Recovery from an infection 從感染中恢復' }, { label: 'C', text: 'Breastfeeding 母乳餵養' }, { label: 'D', text: 'Exposure to a pathogen 接觸病原體' }],
      answer: 'C',
    },
    {
      question: 'What is the primary role of the skin in body defence? 皮膚在身體防禦中的主要作用是什麼？',
      options: [{ label: 'A', text: 'Producing antibodies 產生抗體' }, { label: 'B', text: 'Acting as a physical barrier 作為物理屏障' }, { label: 'C', text: 'Producing lymphocytes 產生淋巴細胞' }, { label: 'D', text: 'Engulfing pathogens 吞噬病原體' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is NOT a component of the specific immune response? 以下哪一項不是特異性免疫反應的組成部分？',
      options: [{ label: 'A', text: 'Antibodies 抗體' }, { label: 'B', text: 'Lymphocytes 淋巴細胞' }, { label: 'C', text: 'Memory cells 記憶細胞' }, { label: 'D', text: 'Inflammation 炎症' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'Non-specific defence mechanisms are the first line of defence against pathogens. 非特異性防禦機制是對抗病原體的第一道防線。', answer: true },
    { statement: 'Active immunity is always long-lasting, while passive immunity is always temporary. 主動免疫總是持久的，而被動免疫總是暫時的。', answer: true },
    { statement: 'Antibodies are produced by T lymphocytes. 抗體由T淋巴細胞產生。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain the difference between primary and secondary immune responses. 解釋初級和次級免疫反應之間的區別。',
    },
    {
      question: 'Describe how breastfeeding provides passive immunity to infants. 描述母乳餵養如何為嬰兒提供被動免疫。',
    },
    {
      question: 'Discuss the social and ethical implications of vaccination programs. 討論疫苗接種計劃的社會和倫理影響。',
    },
  ],
};

export default function BodyDefenceMechanismsPage() {
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
            Body defence mechanisms
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Students will acquire knowledge and understanding of what constitutes health; so that they can make informed decisions on the choice of lifestyles, habits, and disease prevention measures. This is designed to help students develop a positive attitude towards health and be aware of both individual and public responsibility for the maintenance of a healthy community. The routes of pathogen transmission and the causes of some non-infectious diseases are to be learned in association with the biological principles that may lead to their prevention and control. The physiological defence mechanisms employed by the human body to combat diseases, the principle of vaccination, the use of antibiotics, and some of the related issues, are also discussed.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Non-specific defence mechanisms</li>
                <li>Specific defence mechanisms (Immune response, Antigen/antibody, Lymphocytes, Primary/secondary responses, Active/passive immunity)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Examine slides/models of mammalian skin defence features.</li>
                <li>Use audiovisuals/slides/images to observe phagocytes/lymphocytes.</li>
                <li>Use audiovisuals/animations for antibody production/antigen-antibody reactions.</li>
                <li>Discuss why breast feeding may confer passive immunity.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand non-specific and specific defence mechanisms.</li>
                <li>Outline immune response principles.</li>
                <li>Compare primary and secondary responses.</li>
                <li>Distinguish between active and passive immunity.</li>
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