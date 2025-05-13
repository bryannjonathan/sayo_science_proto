'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is a major ethical concern regarding genetically modified organisms (GMOs)? 關於基因改造生物（GMOs）的主要倫理問題是什麼？',
      options: [{ label: 'A', text: 'Potential harm to biodiversity 對生物多樣性的潛在危害' }, { label: 'B', text: 'Increased food production 增加食物產量' }, { label: 'C', text: 'Lower cost of farming 降低農業成本' }, { label: 'D', text: 'Improved crop resistance 提高作物抗性' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a potential benefit of human cloning? 以下哪項是人類克隆的潛在好處？',
      options: [{ label: 'A', text: 'Creating identical copies of individuals 創造個體的完全複製' }, { label: 'B', text: 'Producing organs for transplantation 生產用於移植的器官' }, { label: 'C', text: 'Eliminating genetic diseases 消除遺傳疾病' }, { label: 'D', text: 'Reducing population growth 減少人口增長' }],
      answer: 'B',
    },
    {
      question: 'What is the primary goal of the Human Genome Project (HGP)? 人類基因組計劃（HGP）的主要目標是什麼？',
      options: [{ label: 'A', text: 'To map all human genes 繪製所有人類基因的圖譜' }, { label: 'B', text: 'To clone humans 克隆人類' }, { label: 'C', text: 'To create GMOs 創造基因改造生物' }, { label: 'D', text: 'To develop new vaccines 開發新疫苗' }],
      answer: 'A',
    },
    {
      question: 'Which ethical issue is associated with gene therapy? 哪個倫理問題與基因治療有關？',
      options: [{ label: 'A', text: 'Potential misuse for enhancement 可能被濫用於增強' }, { label: 'B', text: 'High cost of treatment 治療費用高昂' }, { label: 'C', text: 'Limited availability 可用性有限' }, { label: 'D', text: 'Long-term side effects 長期副作用' }],
      answer: 'A',
    },
    {
      question: 'What is a major concern regarding stem cell research? 關於幹細胞研究的主要擔憂是什麼？',
      options: [{ label: 'A', text: 'Use of embryonic stem cells 使用胚胎幹細胞' }, { label: 'B', text: 'High cost of research 研究成本高' }, { label: 'C', text: 'Limited applications 應用有限' }, { label: 'D', text: 'Difficulty in obtaining cells 難以獲取細胞' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an environmental concern related to GMOs? 以下哪項是與基因改造生物相關的環境問題？',
      options: [{ label: 'A', text: 'Cross-pollination with wild plants 與野生植物交叉授粉' }, { label: 'B', text: 'Increased use of pesticides 增加農藥使用' }, { label: 'C', text: 'Higher water consumption 更高的水消耗' }, { label: 'D', text: 'Soil degradation 土壤退化' }],
      answer: 'A',
    },
    {
      question: 'What is a potential social implication of cloning? 克隆的潛在社會影響是什麼？',
      options: [{ label: 'A', text: 'Identity and individuality issues 身份和個性問題' }, { label: 'B', text: 'Increased food supply 增加食物供應' }, { label: 'C', text: 'Lower healthcare costs 降低醫療成本' }, { label: 'D', text: 'Improved genetic diversity 改善基因多樣性' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an economic benefit of GMOs? 以下哪項是基因改造生物的經濟效益？',
      options: [{ label: 'A', text: 'Higher crop yields 更高的作物產量' }, { label: 'B', text: 'Reduced biodiversity 減少生物多樣性' }, { label: 'C', text: 'Increased pesticide use 增加農藥使用' }, { label: 'D', text: 'Higher food prices 更高的食品價格' }],
      answer: 'A',
    },
    {
      question: 'What is a legal issue related to gene therapy? 與基因治療相關的法律問題是什麼？',
      options: [{ label: 'A', text: 'Regulation of experimental treatments 實驗性治療的監管' }, { label: 'B', text: 'High cost of therapy 治療費用高昂' }, { label: 'C', text: 'Limited patient access 患者獲得有限' }, { label: 'D', text: 'Ethical concerns 倫理問題' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a potential risk of stem cell therapy? 以下哪項是幹細胞治療的潛在風險？',
      options: [{ label: 'A', text: 'Tumor formation 腫瘤形成' }, { label: 'B', text: 'High success rate 高成功率' }, { label: 'C', text: 'Low cost 低成本' }, { label: 'D', text: 'Wide availability 廣泛可用' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The Human Genome Project has no ethical concerns associated with it. 人類基因組計劃沒有相關的倫理問題。', answer: false },
    { statement: 'Stem cell research is only conducted using embryonic stem cells. 幹細胞研究僅使用胚胎幹細胞進行。', answer: false },
    { statement: 'GMOs can help address food shortages in some regions. 基因改造生物可以幫助解決某些地區的食物短缺問題。', answer: true },
  ],
  open_ended: [
    {
      question: 'Discuss the ethical implications of using genetically modified crops in developing countries. 討論在發展中國家使用基因改造作物的倫理影響。',
    },
    {
      question: 'How can public awareness about cloning be improved? 如何提高公眾對克隆的認識？',
    },
    {
      question: 'Explain the potential benefits and risks of gene therapy. 解釋基因治療的潛在好處和風險。',
    },
  ],
};

export default function BioethicsPage() {
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
            Bioethics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">This topic is expected to provide students with opportunities to study the general principles of biotechnology and its wide range of applications. This will enable them to recognise biotechnology as a rapidly expanding branch of Biology. Students will first develop an understanding of the principles of different techniques in modern biotechnology, e.g. recombination DNA technology, polymerase chain reaction, genetically modification of organisms, plants and animal cloning. They will also become familiar with the applications of biotechnology in the area of medicine and agriculture, and be aware of the ethical, legal, social, economic and environmental implications of biotechnology. Current issues, research and developments in biotechnology, as well as the contribution of biotechnology to the advancement of biology will also be discussed. Biotechnology builds on students’ prior knowledge of Cells and Molecules of Life; Molecular genetics; Reproduction, growth and development; Ecosystems and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Ethical, legal, social, economic, environmental issues</li>
                <li>Areas of current concern (GMO food, Cloning, HGP, Gene therapy, Stem cells)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Debate issues related to GMOs, cloning, HGP, gene/stem cell therapy.</li>
                <li>Search info on how scientists inform public/debate cloning discoveries.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Be aware of potential impact of biotechnology on society.</li>
                <li>Discuss issues related to one area of concern.</li>
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