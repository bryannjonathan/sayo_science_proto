'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is NOT one of the six kingdoms of life? 以下哪一項不屬於生命的六界分類之一?',
      options: [{ label: 'A', text: 'Animalia 動物界' }, { label: 'B', text: 'Plantae 植物界' }, { label: 'C', text: 'Fungi 真菌界' }, { label: 'D', text: 'Protista 原生生物界' }],
      answer: 'D',
    },
    {
      question: 'What is the primary basis for modern classification systems? 現代分類系統的主要基礎是什麼?',
      options: [{ label: 'A', text: 'Physical appearance 外表特徵' }, { label: 'B', text: 'Phylogeny 系統發育' }, { label: 'C', text: 'Geographic location 地理分佈' }, { label: 'D', text: 'Behavioral traits 行為特徵' }],
      answer: 'B',
    },
    {
      question: 'Which scientist is credited with developing the binomial nomenclature system? 哪位科學家被認為是雙名法的創始人?',
      options: [{ label: 'A', text: 'Charles Darwin 查爾斯·達爾文' }, { label: 'B', text: 'Carl Linnaeus 卡爾·林奈' }, { label: 'C', text: 'Gregor Mendel 格雷戈爾·孟德爾' }, { label: 'D', text: 'Alfred Wallace 阿爾弗雷德·華萊士' }],
      answer: 'B',
    },
    {
      question: 'What is the main mechanism of evolution as proposed by Darwin? 達爾文提出的進化主要機制是什麼?',
      options: [{ label: 'A', text: 'Natural selection 自然選擇' }, { label: 'B', text: 'Inheritance of acquired characteristics 獲得性遺傳' }, { label: 'C', text: 'Genetic drift 遺傳漂變' }, { label: 'D', text: 'Mutation 突變' }],
      answer: 'A',
    },
    {
      question: 'Which of the following provides evidence for evolution? 以下哪一項為進化提供了證據?',
      options: [{ label: 'A', text: 'Fossils 化石' }, { label: 'B', text: 'Homologous structures 同源結構' }, { label: 'C', text: 'DNA similarities DNA相似性' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is speciation? 什麼是物種形成?',
      options: [{ label: 'A', text: 'The process by which new species arise 新物種產生的過程' }, { label: 'B', text: 'The extinction of a species 物種的滅絕' }, { label: 'C', text: 'The classification of organisms 生物的分類' }, { label: 'D', text: 'The study of fossils 化石的研究' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a limitation of the fossil record? 以下哪一項是化石記錄的局限性?',
      options: [{ label: 'A', text: 'Incomplete preservation 保存不完整' }, { label: 'B', text: 'Bias towards hard-bodied organisms 偏向硬體生物' }, { label: 'C', text: 'Difficulty in dating 難以確定年代' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What are the three domains of life? 生命的三域是什麼?',
      options: [{ label: 'A', text: 'Bacteria, Archaea, Eukarya 細菌、古菌、真核生物' }, { label: 'B', text: 'Animalia, Plantae, Fungi 動物界、植物界、真菌界' }, { label: 'C', text: 'Protista, Monera, Fungi 原生生物界、原核生物界、真菌界' }, { label: 'D', text: 'Prokaryotes, Eukaryotes, Viruses 原核生物、真核生物、病毒' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a homologous structure? 以下哪一項是同源結構的例子?',
      options: [{ label: 'A', text: 'Wing of a bat and wing of a bird 蝙蝠的翅膀和鳥的翅膀' }, { label: 'B', text: 'Wing of a bird and wing of an insect 鳥的翅膀和昆蟲的翅膀' }, { label: 'C', text: 'Fin of a fish and flipper of a dolphin 魚的鰭和海豚的鰭' }, { label: 'D', text: 'Leg of a dog and leg of a spider 狗的腿和蜘蛛的腿' }],
      answer: 'A',
    },
    {
      question: 'What is the correct order of taxonomic ranks from broadest to most specific? 從最廣泛到最具體的生物分類階元順序是什麼?',
      options: [{ label: 'A', text: 'Kingdom, Phylum, Class, Order, Family, Genus, Species 界、門、綱、目、科、屬、種' }, { label: 'B', text: 'Phylum, Kingdom, Class, Order, Family, Genus, Species 門、界、綱、目、科、屬、種' }, { label: 'C', text: 'Kingdom, Class, Phylum, Order, Family, Genus, Species 界、綱、門、目、科、屬、種' }, { label: 'D', text: 'Species, Genus, Family, Order, Class, Phylum, Kingdom 種、屬、科、目、綱、門、界' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The classification of organisms never changes. 生物的分類從不改變。', answer: false },
    { statement: 'Fossils provide direct evidence for evolution. 化石為進化提供了直接證據。', answer: true },
    { statement: 'All living organisms can be classified into one of the three domains. 所有生物都可以被分類到三域中的一個。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how natural selection leads to evolution. 解釋自然選擇如何導致進化。',
    },
    {
      question: 'Discuss the importance of biodiversity and its conservation. 討論生物多樣性及其保護的重要性。',
    },
    {
      question: 'Describe the process of speciation and the factors that contribute to it. 描述物種形成的過程及其促成因素。',
    },
  ],
};

export default function BiodiversityAndEvolutionPage() {
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
            Biodiversity and evolution
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Through the study of basic genetics, students will acquire knowledge and develop an understanding of concepts of genes and their roles in the life of organisms. The study of molecular genetics will lay the foundation for students to study further in the field of biotechnology and be aware of its impact on society. The study of biodiversity will help students to recognise its complexity and the adaptations of different groups of organisms to their environment. Moreover, a phylogenetic approach to the classification system is adopted, which helps them to understand the development of the classification system with evidence gathered from molecular genetics. This will enable students to appreciate the phenomena of evolution and develop their curiosity about the origins of life. In addition to Darwin’s theory, students are encouraged to explore other scientific explanations for the origins of life and evolution, to help illustrate the dynamic nature of scientific knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Diversity of life forms</li>
                <li>Classification of organisms (Need, Approaches - Six kingdoms, Three domains)</li>
                <li>Origins of life</li>
                <li>Evolution (Origin of species, Speciation - variation, isolation; Mechanism - natural selection; Evidence - fossils)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Visit herbarium, country park, special area.</li>
                <li>Use specimens, audiovisuals, games for organism diversity/life ways.</li>
                <li>Classify organisms into major categories.</li>
                <li>Discuss advantages/limitations of classification systems; why classifications change.</li>
                <li>Search info on other classification systems; binomial naming.</li>
                <li>Construct/use dichotomous keys for local habitat organisms.</li>
                <li>Read about Linnaeus' system; origins of life explanations; work of Lamarck, Darwin, Wallace.</li>
                <li>Use simulations for natural selection.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Appreciate existence/adaptation of diverse life forms.</li>
                <li>Be aware modern classification is based on phylogeny.</li>
                <li>Appreciate classification systems change with new evidence.</li>
                <li>Recognise use of classification systems and binomial nomenclature.</li>
                <li>Construct/use dichotomous keys.</li>
                <li>Classify organisms into six kingdoms.</li>
                <li>Appreciate various explanations for origins of life.</li>
                <li>Be aware of limitations of fossil record and other evidence for evolution.</li>
                <li>Relate speciation to evolution.</li>
                <li>Outline mechanism of evolution.</li>
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
                <li>Be aware of the application of knowledge of basic and molecular genetics in society and its social, ethical and economic implications;</li>
                <li>Be aware that societal needs have led to technological advances (e.g. recombinant DNA technology and DNA fingerprinting);</li>
                <li>Appreciate the contribution of the Human Genome Project (HGP) and the application of biotechnology to humans and society;</li>
                <li>Appreciate the role of science and technology in understanding the complexity of life forms and their genetics;</li>
                <li>Understand how science has been influenced by societies (e.g. various views on the origins of life and evolution);</li>
                <li>Explain how the knowledge of biotechnology may lead to the development of new technologies and how new technologies may lead to further understanding of inheritance.</li>
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