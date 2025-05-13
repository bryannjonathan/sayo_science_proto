'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is a common food-borne pathogen? 以下哪一種是常見的食源性病原體?',
      options: [{ label: 'A', text: 'Salmonella 沙門氏菌' }, { label: 'B', text: 'Lactobacillus 乳酸菌' }, { label: 'C', text: 'Saccharomyces cerevisiae 釀酒酵母' }, { label: 'D', text: 'Rhizobium 根瘤菌' }],
      answer: 'A',
    },
    {
      question: 'What is the primary cause of microbial food spoilage? 微生物導致食物腐敗的主要原因是什么?',
      options: [{ label: 'A', text: 'Oxidation 氧化' }, { label: 'B', text: 'Enzyme activity 酶活性' }, { label: 'C', text: 'Microbial growth 微生物生長' }, { label: 'D', text: 'Physical damage 物理損傷' }],
      answer: 'C',
    },
    {
      question: 'Which method is most effective for controlling microbial growth in food? 哪種方法最能有效控制食物中的微生物生長?',
      options: [{ label: 'A', text: 'Refrigeration 冷藏' }, { label: 'B', text: 'Adding sugar 加糖' }, { label: 'C', text: 'Exposure to sunlight 陽光曝曬' }, { label: 'D', text: 'Stirring 攪拌' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a symptom of food poisoning? 以下哪一項不是食物中毒的症狀?',
      options: [{ label: 'A', text: 'Nausea 噁心' }, { label: 'B', text: 'Fever 發燒' }, { label: 'C', text: 'Headache 頭痛' }, { label: 'D', text: 'Increased appetite 食慾增加' }],
      answer: 'D',
    },
    {
      question: 'What role do decomposers play in the environment? 分解者在環境中扮演什麼角色?',
      options: [{ label: 'A', text: 'Produce oxygen 產生氧氣' }, { label: 'B', text: 'Break down organic matter 分解有機物' }, { label: 'C', text: 'Fix nitrogen 固氮' }, { label: 'D', text: 'Produce antibiotics 產生抗生素' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is an example of microbial deterioration? 以下哪一項是微生物劣化的例子?',
      options: [{ label: 'A', text: 'Rusting of iron 鐵生鏽' }, { label: 'B', text: 'Mold growth on bread 麵包上長霉' }, { label: 'C', text: 'Melting of ice 冰融化' }, { label: 'D', text: 'Evaporation of water 水蒸發' }],
      answer: 'B',
    },
    {
      question: 'What is the primary purpose of pasteurization? 巴氏殺菌的主要目的是什麼?',
      options: [{ label: 'A', text: 'Enhance flavor 增強風味' }, { label: 'B', text: 'Kill harmful microorganisms 殺死有害微生物' }, { label: 'C', text: 'Increase shelf life 延長保質期' }, { label: 'D', text: 'Both B and C B和C兩者' }],
      answer: 'D',
    },
    {
      question: 'Which microorganism is commonly used in sewage treatment? 哪種微生物常用於污水處理?',
      options: [{ label: 'A', text: 'Escherichia coli 大腸桿菌' }, { label: 'B', text: 'Staphylococcus aureus 金黃色葡萄球菌' }, { label: 'C', text: 'Bacillus subtilis 枯草桿菌' }, { label: 'D', text: 'Pseudomonas aeruginosa 綠膿桿菌' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a method to prevent food-borne diseases? 以下哪一項是預防食源性疾病的方法?',
      options: [{ label: 'A', text: 'Proper cooking 適當烹煮' }, { label: 'B', text: 'Washing hands 洗手' }, { label: 'C', text: 'Storing food at correct temperatures 以正確溫度儲存食物' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is the main benefit of using microorganisms in biotechnology? 在生物技術中使用微生物的主要好處是什麼?',
      options: [{ label: 'A', text: 'Reduce costs 降低成本' }, { label: 'B', text: 'Increase production efficiency 提高生產效率' }, { label: 'C', text: 'Produce valuable products 生產有價值的產品' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
  ],
  true_false: [
    { statement: 'All microorganisms are harmful to humans. 所有微生物對人類都是有害的。', answer: false },
    { statement: 'Refrigeration slows down microbial growth by lowering the temperature. 冷藏通過降低溫度來減緩微生物的生長。', answer: true },
    { statement: 'Food poisoning is only caused by bacteria. 食物中毒僅由細菌引起。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how microbial growth can be controlled in food preservation. 解釋如何在食物保存中控制微生物的生長。',
    },
    {
      question: 'Discuss the social and economic impacts of food-borne diseases. 討論食源性疾病的社會和經濟影響。',
    },
    {
      question: 'Describe the role of microorganisms in environmental conservation. 描述微生物在環境保護中的作用。',
    },
  ],
};

export default function HarmfulEffectsOfMicroorganismsPage() {
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
            Harmful effects of microorganisms
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Humans are living in a world full of microorganisms, and our daily lives are directly and indirectly affected by them. In this topic, students will develop an understanding of the diversity of microorganisms, and their beneficial and harmful roles. Students will have the opportunity to study the growth of microorganisms, and develop appropriate laboratory skills and techniques for conducting practical work with microorganisms. Examples of uses of microorganisms in food, medicine, industry pollution control and genetic engineering are included, so as to illustrate the importance of microorganisms and their wide applications. Finally, human diseases caused by pathogenic microorganisms, and microbial deterioration are used to illustrate the harmful effects of microorganisms. Microorganisms and Humans builds on students’ prior knowledge of Cellular energetics, Molecular genetics, Diversity of life forms, Functioning of ecosystem, and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Diseases caused by microorganisms (Food-borne)</li>
                <li>Microbial deterioration</li>
                <li>Control of growth</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Search info on food poisoning incidence in HK.</li>
                <li>Conduct project on preventing microbial deterioration.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Outline principles of microbial disease causation.</li>
                <li>Recognise causes of food-borne infection/poisoning.</li>
                <li>Recognise problems of microbial deterioration.</li>
                <li>Discuss control/elimination of harmful effects.</li>
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