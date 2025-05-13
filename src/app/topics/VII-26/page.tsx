'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which microorganism is commonly used in the brewing process? 哪種微生物常用於釀造過程?',
      options: [{ label: 'A', text: 'Saccharomyces cerevisiae 釀酒酵母' }, { label: 'B', text: 'Escherichia coli 大腸桿菌' }, { label: 'C', text: 'Lactobacillus acidophilus 嗜酸乳桿菌' }, { label: 'D', text: 'Staphylococcus aureus 金黃色葡萄球菌' }],
      answer: 'A',
    },
    {
      question: 'What is the primary role of microorganisms in sewage treatment? 微生物在污水處理中的主要作用是甚麼?',
      options: [{ label: 'A', text: 'To decompose organic matter 分解有機物質' }, { label: 'B', text: 'To increase water temperature 提高水溫' }, { label: 'C', text: 'To produce toxic chemicals 產生有毒化學物質' }, { label: 'D', text: 'To reduce water volume 減少水量' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a product of biogas production? 以下哪項是沼氣生產的產物?',
      options: [{ label: 'A', text: 'Methane 甲烷' }, { label: 'B', text: 'Oxygen 氧氣' }, { label: 'C', text: 'Nitrogen 氮氣' }, { label: 'D', text: 'Carbon monoxide 一氧化碳' }],
      answer: 'A',
    },
    {
      question: 'What is the main purpose of using microorganisms in vaccine production? 在疫苗生產中使用微生物的主要目的是甚麼?',
      options: [{ label: 'A', text: 'To produce antigens 產生抗原' }, { label: 'B', text: 'To kill pathogens 殺死病原體' }, { label: 'C', text: 'To increase blood pressure 增加血壓' }, { label: 'D', text: 'To reduce inflammation 減少炎症' }],
      answer: 'A',
    },
    {
      question: 'Which enzyme produced by microorganisms is commonly used in detergents? 哪種由微生物產生的酶常用於洗滌劑中?',
      options: [{ label: 'A', text: 'Protease 蛋白酶' }, { label: 'B', text: 'Amylase 澱粉酶' }, { label: 'C', text: 'Lipase 脂肪酶' }, { label: 'D', text: 'Cellulase 纖維素酶' }],
      answer: 'C',
    },
    {
      question: 'What is the primary benefit of using microorganisms in food processing? 在食品加工中使用微生物的主要好處是甚麼?',
      options: [{ label: 'A', text: 'Enhance flavor and preservation 增強風味和保存' }, { label: 'B', text: 'Increase food weight 增加食物重量' }, { label: 'C', text: 'Reduce food color 減少食物顏色' }, { label: 'D', text: 'Decrease nutritional value 降低營養價值' }],
      answer: 'A',
    },
    {
      question: 'Which microorganism is used in the production of antibiotics like penicillin? 哪種微生物用於生產青黴素等抗生素?',
      options: [{ label: 'A', text: 'Penicillium chrysogenum 產黃青黴' }, { label: 'B', text: 'Bacillus subtilis 枯草桿菌' }, { label: 'C', text: 'Streptococcus pyogenes 化膿鏈球菌' }, { label: 'D', text: 'Aspergillus niger 黑麴黴' }],
      answer: 'A',
    },
    {
      question: 'What is the role of microorganisms in biogas production? 微生物在沼氣生產中的作用是甚麼?',
      options: [{ label: 'A', text: 'Break down organic matter anaerobically 厭氧分解有機物質' }, { label: 'B', text: 'Produce oxygen 產生氧氣' }, { label: 'C', text: 'Increase pH levels 提高pH值' }, { label: 'D', text: 'Reduce methane production 減少甲烷生產' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a use of microorganisms? 以下哪項不是微生物的用途?',
      options: [{ label: 'A', text: 'Producing plastic from petroleum 從石油生產塑料' }, { label: 'B', text: 'Making yogurt 製作酸奶' }, { label: 'C', text: 'Producing antibiotics 生產抗生素' }, { label: 'D', text: 'Treating sewage 處理污水' }],
      answer: 'A',
    },
    {
      question: 'What is the main environmental benefit of using microorganisms in sewage treatment? 在污水處理中使用微生物的主要環境效益是甚麼?',
      options: [{ label: 'A', text: 'Reducing water pollution 減少水污染' }, { label: 'B', text: 'Increasing greenhouse gas emissions 增加溫室氣體排放' }, { label: 'C', text: 'Decreasing soil fertility 降低土壤肥力' }, { label: 'D', text: 'Promoting deforestation 促進森林砍伐' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Microorganisms are only harmful and have no beneficial uses. 微生物只有害處而沒有任何有益的用途。', answer: false },
    { statement: 'Yeast is used in the production of bread and alcoholic beverages. 酵母用於生產麵包和酒精飲料。', answer: true },
    { statement: 'Biogas production does not involve microorganisms. 沼氣生產不涉及微生物。', answer: false },
  ],
  open_ended: [
    {
      question: 'Describe the process of fermentation in food production and provide an example. 描述食品生產中的發酵過程並舉例說明。',
    },
    {
      question: 'Explain how microorganisms contribute to sewage treatment and why this is important for the environment. 解釋微生物如何促進污水處理以及這對環境的重要性。',
    },
    {
      question: 'Discuss the social and economic implications of using microorganisms in biotechnology. 討論在生物技術中使用微生物的社會和經濟影響。',
    },
  ],
};

export default function UseOfMicroorganismsPage() {
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
            Use of microorganisms
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Humans are living in a world full of microorganisms, and our daily lives are directly and indirectly affected by them. In this topic, students will develop an understanding of the diversity of microorganisms, and their beneficial and harmful roles. Students will have the opportunity to study the growth of microorganisms, and develop appropriate laboratory skills and techniques for conducting practical work with microorganisms. Examples of uses of microorganisms in food, medicine, industry pollution control and genetic engineering are included, so as to illustrate the importance of microorganisms and their wide applications. Finally, human diseases caused by pathogenic microorganisms, and microbial deterioration are used to illustrate the harmful effects of microorganisms. Microorganisms and Humans builds on students’ prior knowledge of Cellular energetics, Molecular genetics, Diversity of life forms, Functioning of ecosystem, and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Food processing (e.g., brewing)</li>
                <li>Vaccines</li>
                <li>Antibiotics</li>
                <li>Industrial enzymes</li>
                <li>Sewage treatment</li>
                <li>Biogas production</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Visit food production/sewage treatment plant.</li>
                <li>Conduct project on microorganism applications.</li>
                <li>Perform practical work on fermentation applications.</li>
                <li>Design/perform investigations: optimal fermentation conditions; washing powder effectiveness.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Outline food production process via fermentation.</li>
                <li>Understand microorganism roles in sewage treatment.</li>
                <li>Be aware of wide microorganism applications.</li>
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