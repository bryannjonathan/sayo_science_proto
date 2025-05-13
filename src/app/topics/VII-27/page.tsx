'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which of the following is a potential hazard of genetically modified microorganisms (GMOs)? 以下哪項是基因改造微生物（GMOs）的潛在危害？',
      options: [{ label: 'A', text: 'Increased crop yield 增加農作物產量' }, { label: 'B', text: 'Unintended ecological impacts 意外的生態影響' }, { label: 'C', text: 'Enhanced nutritional value 提高營養價值' }, { label: 'D', text: 'Improved disease resistance 增強抗病能力' }],
      answer: 'B',
    },
    {
      question: 'What is a common application of genetically modified microorganisms in biotechnology? 基因改造微生物在生物技術中的常見應用是什麼？',
      options: [{ label: 'A', text: 'Producing insulin 生產胰島素' }, { label: 'B', text: 'Manufacturing steel 製造鋼鐵' }, { label: 'C', text: 'Generating electricity 發電' }, { label: 'D', text: 'Constructing buildings 建造建築物' }],
      answer: 'A',
    },
    {
      question: 'Which technology is essential for creating genetically modified microorganisms? 哪種技術對於創造基因改造微生物至關重要？',
      options: [{ label: 'A', text: 'Recombinant DNA technology 重組DNA技術' }, { label: 'B', text: 'Nuclear fission 核裂變' }, { label: 'C', text: 'Hydroponics 水耕法' }, { label: 'D', text: 'Solar energy 太陽能' }],
      answer: 'A',
    },
    {
      question: 'What is a social implication of using GMOs in agriculture? 在農業中使用GMOs的社會影響是什麼？',
      options: [{ label: 'A', text: 'Reduced food prices 降低食品價格' }, { label: 'B', text: 'Increased biodiversity 增加生物多樣性' }, { label: 'C', text: 'Decreased reliance on pesticides 減少對農藥的依賴' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is an ethical concern related to GMOs? 以下哪項是與GMOs相關的倫理問題？',
      options: [{ label: 'A', text: 'Patent ownership of genetic material 基因材料的專利所有權' }, { label: 'B', text: 'Increased agricultural efficiency 提高農業效率' }, { label: 'C', text: 'Improved food storage 改善食品儲存' }, { label: 'D', text: 'Enhanced flavor 增強風味' }],
      answer: 'A',
    },
    {
      question: 'How can GMOs contribute to environmental conservation? GMOs如何有助於環境保護？',
      options: [{ label: 'A', text: 'By reducing pesticide use 通過減少農藥使用' }, { label: 'B', text: 'By increasing deforestation 通過增加森林砍伐' }, { label: 'C', text: 'By promoting monoculture 通過推廣單一作物種植' }, { label: 'D', text: 'By depleting soil nutrients 通過耗盡土壤養分' }],
      answer: 'A',
    },
    {
      question: 'What role do microorganisms play in sewage treatment? 微生物在污水處理中扮演什麼角色？',
      options: [{ label: 'A', text: 'Breaking down organic matter 分解有機物' }, { label: 'B', text: 'Generating electricity 發電' }, { label: 'C', text: 'Producing plastic 生產塑料' }, { label: 'D', text: 'Constructing pipelines 建造管道' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a benefit of using GMOs in medicine? 以下哪項是在醫學中使用GMOs的好處？',
      options: [{ label: 'A', text: 'Production of vaccines 疫苗的生產' }, { label: 'B', text: 'Increased antibiotic resistance 增加抗生素抗性' }, { label: 'C', text: 'Higher healthcare costs 更高的醫療成本' }, { label: 'D', text: 'Reduced drug efficacy 降低藥物效力' }],
      answer: 'A',
    },
    {
      question: 'What is a potential economic benefit of GMOs? GMOs的潛在經濟效益是什麼？',
      options: [{ label: 'A', text: 'Lower production costs 降低生產成本' }, { label: 'B', text: 'Increased labor requirements 增加勞動力需求' }, { label: 'C', text: 'Higher food prices 更高的食品價格' }, { label: 'D', text: 'Reduced crop yield 減少農作物產量' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a method to assess the safety of GMOs? 以下哪項是評估GMOs安全性的方法？',
      options: [{ label: 'A', text: 'Risk assessment 風險評估' }, { label: 'B', text: 'Random release into the environment 隨機釋放到環境中' }, { label: 'C', text: 'Ignoring potential hazards 忽略潛在危害' }, { label: 'D', text: 'No testing required 無需測試' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Genetically modified microorganisms are always harmful to the environment. 基因改造微生物對環境總是有害的。', answer: false },
    { statement: 'Recombinant DNA technology is used to create genetically modified microorganisms. 重組DNA技術用於創造基因改造微生物。', answer: true },
    { statement: 'GMOs have no role in modern medicine. GMOs在現代醫學中沒有任何作用。', answer: false },
  ],
  open_ended: [
    {
      question: 'Discuss the potential environmental impacts of releasing genetically modified microorganisms into the wild. 討論將基因改造微生物釋放到野外對環境的潛在影響。',
    },
    {
      question: 'Explain how genetically modified microorganisms can be used to improve public health. 解釋基因改造微生物如何用於改善公共衛生。',
    },
    {
      question: 'What are the ethical considerations surrounding the use of GMOs in food production? 圍繞在食品生產中使用GMOs的倫理考慮是什麼？',
    },
  ],
};

export default function MicrobialGeneticsPage() {
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
            Microbial genetics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Humans are living in a world full of microorganisms, and our daily lives are directly and indirectly affected by them. In this topic, students will develop an understanding of the diversity of microorganisms, and their beneficial and harmful roles. Students will have the opportunity to study the growth of microorganisms, and develop appropriate laboratory skills and techniques for conducting practical work with microorganisms. Examples of uses of microorganisms in food, medicine, industry pollution control and genetic engineering are included, so as to illustrate the importance of microorganisms and their wide applications. Finally, human diseases caused by pathogenic microorganisms, and microbial deterioration are used to illustrate the harmful effects of microorganisms. Microorganisms and Humans builds on students’ prior knowledge of Cellular energetics, Molecular genetics, Diversity of life forms, Functioning of ecosystem, and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Genetically modified microorganisms</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Search info on wide GMO application.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Be aware of significance/potential hazards of GMO application.</li>
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