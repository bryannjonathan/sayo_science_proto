'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData: QuizData = {
  mcq: [
    {
      question: 'Which enzyme is used to join DNA fragments during recombinant DNA technology? 在重組DNA技術中，哪種酶用於連接DNA片段？',
      options: [{ label: 'A', text: 'DNA ligase DNA連接酶' }, { label: 'B', text: 'DNA polymerase DNA聚合酶' }, { label: 'C', text: 'Restriction enzyme 限制酶' }, { label: 'D', text: 'RNA polymerase RNA聚合酶' }],
      answer: 'A',
    },
    {
      question: 'What is the primary purpose of PCR (Polymerase Chain Reaction)? PCR（聚合酶鏈式反應）的主要目的是什麼？',
      options: [{ label: 'A', text: 'To amplify a specific DNA sequence 擴增特定的DNA序列' }, { label: 'B', text: 'To cut DNA at specific sites 在特定位置切割DNA' }, { label: 'C', text: 'To synthesize proteins 合成蛋白質' }, { label: 'D', text: 'To separate DNA fragments 分離DNA片段' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an application of DNA fingerprinting? 以下哪項是DNA指紋技術的應用？',
      options: [{ label: 'A', text: 'Forensic investigations 法醫調查' }, { label: 'B', text: 'Gene therapy 基因治療' }, { label: 'C', text: 'Cloning animals 克隆動物' }, { label: 'D', text: 'Producing insulin 生產胰島素' }],
      answer: 'A',
    },
    {
      question: 'What is a genetically modified organism (GMO)? 什麼是基因改造生物（GMO）？',
      options: [{ label: 'A', text: 'An organism with altered genetic material 遺傳物質被改變的生物' }, { label: 'B', text: 'An organism cloned from another organism 從另一生物克隆的生物' }, { label: 'C', text: 'An organism with no genetic changes 沒有遺傳變化的生物' }, { label: 'D', text: 'An organism used in PCR 用於PCR的生物' }],
      answer: 'A',
    },
    {
      question: 'Which step is NOT part of animal cloning? 以下哪一步驟不屬於動物克隆？',
      options: [{ label: 'A', text: 'Amplifying DNA using PCR 使用PCR擴增DNA' }, { label: 'B', text: 'Removing the nucleus from an egg cell 從卵細胞中移除細胞核' }, { label: 'C', text: 'Inserting a donor nucleus into the egg cell 將供體細胞核插入卵細胞' }, { label: 'D', text: 'Implanting the embryo into a surrogate mother 將胚胎植入代孕母體' }],
      answer: 'A',
    },
    {
      question: 'What is the first step in plant cloning? 植物克隆的第一步是什麼？',
      options: [{ label: 'A', text: 'Taking a cutting from a parent plant 從母株上取插枝' }, { label: 'B', text: 'Using PCR to amplify DNA 使用PCR擴增DNA' }, { label: 'C', text: 'Inserting a foreign gene 插入外源基因' }, { label: 'D', text: 'Growing the plant in soil 在土壤中種植植物' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a benefit of genetic engineering? 以下哪項是基因工程的益處？',
      options: [{ label: 'A', text: 'Production of insulin for diabetics 為糖尿病患者生產胰島素' }, { label: 'B', text: 'Increased biodiversity 增加生物多樣性' }, { label: 'C', text: 'Reduction in all diseases 減少所有疾病' }, { label: 'D', text: 'Elimination of all genetic disorders 消除所有遺傳疾病' }],
      answer: 'A',
    },
    {
      question: 'What is a potential hazard of genetic engineering? 基因工程的潛在危害是什麼？',
      options: [{ label: 'A', text: 'Unintended ecological impacts 意外的生態影響' }, { label: 'B', text: 'Increased crop yields 增加作物產量' }, { label: 'C', text: 'Improved medical treatments 改善醫療治療' }, { label: 'D', text: 'Enhanced nutritional value 提高營養價值' }],
      answer: 'A',
    },
    {
      question: 'Which scientist contributed significantly to the development of PCR? 哪位科學家對PCR的發展有重大貢獻？',
      options: [{ label: 'A', text: 'Kary Mullis 凱利·穆利斯' }, { label: 'B', text: 'James Watson 詹姆斯·沃森' }, { label: 'C', text: 'Rosalind Franklin 羅莎琳·富蘭克林' }, { label: 'D', text: 'Gregor Mendel 格雷戈爾·孟德爾' }],
      answer: 'A',
    },
    {
      question: 'What is a limitation of animal cloning? 動物克隆的限制是什麼？',
      options: [{ label: 'A', text: 'High failure rate 高失敗率' }, { label: 'B', text: 'Low cost 低成本' }, { label: 'C', text: 'Easy to perform 易於操作' }, { label: 'D', text: 'No ethical concerns 無倫理問題' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'PCR can be used to amplify very small amounts of DNA. PCR可以用來擴增非常少量的DNA。', answer: true },
    { statement: 'All genetically modified organisms are harmful to the environment. 所有基因改造生物都對環境有害。', answer: false },
    { statement: 'Animal cloning always results in healthy offspring. 動物克隆總是產生健康的後代。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain the process of recombinant DNA technology using the example of insulin production. 以胰島素生產為例，解釋重組DNA技術的過程。',
    },
    {
      question: 'Discuss the social and ethical implications of genetically modified organisms (GMOs). 討論基因改造生物（GMOs）的社會和倫理影響。',
    },
    {
      question: 'Describe the steps involved in DNA fingerprinting and its importance in forensic science. 描述DNA指紋技術的步驟及其在法醫科學中的重要性。',
    },
  ],
};

export default function TechniquesInModernBiotechnologyPage() {
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
            Techniques in modern biotechnology
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">This topic is expected to provide students with opportunities to study the general principles of biotechnology and its wide range of applications. This will enable them to recognise biotechnology as a rapidly expanding branch of Biology. Students will first develop an understanding of the principles of different techniques in modern biotechnology, e.g. recombination DNA technology, polymerase chain reaction, genetically modification of organisms, plants and animal cloning. They will also become familiar with the applications of biotechnology in the area of medicine and agriculture, and be aware of the ethical, legal, social, economic and environmental implications of biotechnology. Current issues, research and developments in biotechnology, as well as the contribution of biotechnology to the advancement of biology will also be discussed. Biotechnology builds on students’ prior knowledge of Cells and Molecules of Life; Molecular genetics; Reproduction, growth and development; Ecosystems and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Recombinant DNA technology process (e.g., insulin)</li>
                <li>PCR and application</li>
                <li>DNA fingerprinting and application</li>
                <li>Genetically modified organisms (Principles)</li>
                <li>Animal cloning (Steps)</li>
                <li>Plant cloning (Steps)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Perform practical work: amplify/separate DNA fragments.</li>
                <li>Use diagrams/audiovisuals/animations for processes.</li>
                <li>Examine cases/discuss DNA fingerprinting in forensics.</li>
                <li>Read articles on scientists\\' contributions.</li>
                <li>Search info on animal/plant cloning.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Outline principles (recombinant DNA, PCR, fingerprinting, GMOs, cloning).</li>
                <li>Recognise wide PCR application.</li>
                <li>Discuss benefits/hazards of genetic engineering.</li>
                <li>Be aware of pros/cons/applications/limitations of cloning.</li>
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
                <li>Be aware of the wide application of biotechnology and its social, ethical, economic and environmental implications (e.g. issues related to stem cells therapy, gene therapy, animal cloning and genetically modified food);</li>
                <li>Explain how scientific knowledge may lead to the development of new technology and how new technology may lead to scientific discovery (e.g. understanding of the characteristics of enzymes leading to the invention of PCR technology);</li>
                <li>Appreciate the role of science and technology in understanding the inheritance of humans;</li>
                <li>Be aware that societal needs have led to technological advances (e.g. the production of genetically modified crops to solve food shortage problem);</li>
                <li>Understand how science has been influenced by societies (e.g. debates on human cloning and human stem cells research).</li>
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