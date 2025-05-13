'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is a primary role of bacteria in pharmaceutical production? 以下哪項是細菌在藥物生產中的主要作用?',
      options: [{ label: 'A', text: 'Producing insulin through genetic engineering 通過基因工程生產胰島素' }, { label: 'B', text: 'Causing diseases in humans 導致人類疾病' }, { label: 'C', text: 'Breaking down pollutants 分解污染物' }, { label: 'D', text: 'Photosynthesizing to produce oxygen 通過光合作用產生氧氣' }],
      answer: 'A',
    },
    {
      question: 'What is a potential benefit of somatic cell gene therapy? 體細胞基因治療的潛在益處是什麼?',
      options: [{ label: 'A', text: 'It can cure genetic disorders 可以治癒遺傳疾病' }, { label: 'B', text: 'It alters the germline 改變生殖細胞' }, { label: 'C', text: 'It is always risk-free 總是無風險' }, { label: 'D', text: 'It guarantees immediate results 保證立即見效' }],
      answer: 'A',
    },
    {
      question: 'Which type of stem cell has the highest potential for differentiation? 哪種幹細胞具有最高的分化潛能?',
      options: [{ label: 'A', text: 'Embryonic stem cells 胚胎幹細胞' }, { label: 'B', text: 'Adult stem cells 成體幹細胞' }, { label: 'C', text: 'Induced pluripotent stem cells 誘導多能幹細胞' }, { label: 'D', text: 'Bone marrow stem cells 骨髓幹細胞' }],
      answer: 'A',
    },
    {
      question: 'What is a common use of transgenic plants in agriculture? 轉基因植物在農業中的常見用途是什麼?',
      options: [{ label: 'A', text: 'Resistance to pests 抗蟲害' }, { label: 'B', text: 'Increased water consumption 增加水分消耗' }, { label: 'C', text: 'Reduced yield 減少產量' }, { label: 'D', text: 'Higher dependency on fertilizers 更高依賴肥料' }],
      answer: 'A',
    },
    {
      question: 'Which enzyme is crucial for the Polymerase Chain Reaction (PCR) technology? 哪種酶對聚合酶鏈反應（PCR）技術至關重要?',
      options: [{ label: 'A', text: 'Taq polymerase Taq聚合酶' }, { label: 'B', text: 'Amylase 澱粉酶' }, { label: 'C', text: 'Lipase 脂肪酶' }, { label: 'D', text: 'Pepsin 胃蛋白酶' }],
      answer: 'A',
    },
    {
      question: 'What is a major ethical concern regarding gene therapy? 關於基因治療的主要倫理問題是什麼?',
      options: [{ label: 'A', text: 'Potential misuse for enhancement 可能被濫用於增強' }, { label: 'B', text: 'High cost 高成本' }, { label: 'C', text: 'Limited effectiveness 有限的效果' }, { label: 'D', text: 'Short duration of treatment 治療時間短' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a pharmaceutical product produced using biotechnology? 以下哪項是利用生物技術生產的藥物產品?',
      options: [{ label: 'A', text: 'Human growth hormone 人類生長激素' }, { label: 'B', text: 'Aspirin 阿司匹林' }, { label: 'C', text: 'Penicillin (natural) 青黴素（天然）' }, { label: 'D', text: 'Vitamin C 維生素C' }],
      answer: 'A',
    },
    {
      question: 'What is a potential application of stem cells in medicine? 幹細胞在醫學中的潛在應用是什麼?',
      options: [{ label: 'A', text: 'Tissue regeneration 組織再生' }, { label: 'B', text: 'Antibiotic production 抗生素生產' }, { label: 'C', text: 'Vaccine development 疫苗開發' }, { label: 'D', text: 'Pain relief 止痛' }],
      answer: 'A',
    },
    {
      question: 'What is a primary advantage of genetic engineering over traditional breeding in crops? 在作物中，基因工程相比傳統育種的主要優勢是什麼?',
      options: [{ label: 'A', text: 'Precision in introducing traits 精確引入性狀' }, { label: 'B', text: 'Lower cost 成本更低' }, { label: 'C', text: 'Faster natural selection 更快的自然選擇' }, { label: 'D', text: 'No need for laboratory 不需要實驗室' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a social implication of genetically modified food? 以下哪項是轉基因食品的社會影響?',
      options: [{ label: 'A', text: 'Debates over food safety 關於食品安全的辯論' }, { label: 'B', text: 'Increased biodiversity 增加生物多樣性' }, { label: 'C', text: 'Reduced agricultural output 減少農業產出' }, { label: 'D', text: 'Lower food prices 降低食品價格' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Gene therapy can only target somatic cells and not germline cells. 基因治療只能針對體細胞，而不能針對生殖細胞。', answer: false },
    { statement: 'Transgenic animals are used in research to study human diseases. 轉基因動物被用於研究人類疾病。', answer: true },
    { statement: 'Stem cell therapy has no ethical controversies. 幹細胞治療沒有倫理爭議。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how gene therapy can be used to treat SCID and discuss one ethical concern associated with this treatment. 解釋基因治療如何用於治療SCID，並討論與此治療相關的一個倫理問題。',
    },
    {
      question: 'Compare the advantages and disadvantages of using transgenic plants in agriculture. 比較在農業中使用轉基因植物的優點和缺點。',
    },
    {
      question: 'Describe the potential benefits and risks of stem cell therapy in modern medicine. 描述幹細胞治療在現代醫學中的潛在益處和風險。',
    },
  ],
};

export default function ApplicationsInBiotechnologyPage() {
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
            Applications in biotechnology
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">This topic is expected to provide students with opportunities to study the general principles of biotechnology and its wide range of applications. This will enable them to recognise biotechnology as a rapidly expanding branch of Biology. Students will first develop an understanding of the principles of different techniques in modern biotechnology, e.g. recombination DNA technology, polymerase chain reaction, genetically modification of organisms, plants and animal cloning. They will also become familiar with the applications of biotechnology in the area of medicine and agriculture, and be aware of the ethical, legal, social, economic and environmental implications of biotechnology. Current issues, research and developments in biotechnology, as well as the contribution of biotechnology to the advancement of biology will also be discussed. Biotechnology builds on students’ prior knowledge of Cells and Molecules of Life; Molecular genetics; Reproduction, growth and development; Ecosystems and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Production of pharmaceutical products</li>
                <li>Gene therapy (Somatic cell)</li>
                <li>Stem cells therapy (Nature)</li>
                <li>Transgenic animals and plants</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Read articles on SCID treatment via gene therapy.</li>
                <li>Search info on biotech in pharmaceutical industry.</li>
                <li>Search info on transgenic plant use in agriculture.</li>
                <li>Compare traditional breeding vs genetic engineering in crops.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand bacteria role in pharmaceutical production.</li>
                <li>Recognise possible benefits/hazards of gene therapy.</li>
                <li>Recognise potential application of stem cells in medicine.</li>
                <li>Recognise use of transgenics in research, food, agriculture.</li>
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