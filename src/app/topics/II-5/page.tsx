'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'According to Mendel\\'s law of segregation, what happens to alleles during gamete formation? 根據孟德爾的分離定律，等位基因在配子形成時會發生什麼？',
      options: [{ label: 'A', text: 'Alleles separate so that each gamete carries only one allele for each gene. 等位基因分離，因此每個配子只攜帶每個基因的一個等位基因。' }, { label: 'B', text: 'Alleles combine to form new traits. 等位基因結合形成新的性狀。' }, { label: 'C', text: 'Alleles mutate randomly. 等位基因隨機突變。' }, { label: 'D', text: 'Alleles remain paired in gametes. 等位基因在配子中保持配對。' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a sex-linked trait in humans? 以下哪項是人類的性聯遺傳性狀？',
      options: [{ label: 'A', text: 'ABO blood group ABO血型' }, { label: 'B', text: 'Hemophilia 血友病' }, { label: 'C', text: 'Height 身高' }, { label: 'D', text: 'Tongue rolling ability 捲舌能力' }],
      answer: 'B',
    },
    {
      question: 'In the ABO blood group system, how many alleles control the blood type? 在ABO血型系統中，有多少個等位基因控制血型？',
      options: [{ label: 'A', text: '1' }, { label: 'B', text: '2' }, { label: 'C', text: '3' }, { label: 'D', text: '4' }],
      answer: 'C',
    },
    {
      question: 'What is the genotype of a person with blood type O? 血型為O型的人的基因型是什麼？',
      options: [{ label: 'A', text: 'IAIA' }, { label: 'B', text: 'IBIB' }, { label: 'C', text: 'IAIB' }, { label: 'D', text: 'ii' }],
      answer: 'D',
    },
    {
      question: 'Which of the following is an example of discontinuous variation? 以下哪項是不連續變異的例子？',
      options: [{ label: 'A', text: 'Height 身高' }, { label: 'B', text: 'Weight 體重' }, { label: 'C', text: 'Blood type 血型' }, { label: 'D', text: 'Skin color 膚色' }],
      answer: 'C',
    },
    {
      question: 'What is the probability of two heterozygous parents (Aa) having a homozygous recessive (aa) offspring? 兩個雜合子父母（Aa）生出純合隱性（aa）後代的概率是多少？',
      options: [{ label: 'A', text: '0%' }, { label: 'B', text: '25%' }, { label: 'C', text: '50%' }, { label: 'D', text: '75%' }],
      answer: 'B',
    },
    {
      question: 'Which chromosome determines the sex of a human offspring? 哪條染色體決定人類後代的性別？',
      options: [{ label: 'A', text: 'Autosome 常染色體' }, { label: 'B', text: 'X chromosome X染色體' }, { label: 'C', text: 'Y chromosome Y染色體' }, { label: 'D', text: 'Both X and Y chromosomes X和Y染色體' }],
      answer: 'D',
    },
    {
      question: 'What is the main cause of continuous variation in traits like height? 像身高這樣的連續變異的主要原因是什麼？',
      options: [{ label: 'A', text: 'Single gene inheritance 單基因遺傳' }, { label: 'B', text: 'Environmental factors only 僅環境因素' }, { label: 'C', text: 'Mutation only 僅突變' }, { label: 'D', text: 'Combination of genetic and environmental factors 遺傳和環境因素的結合' }],
      answer: 'D',
    },
    {
      question: 'In a pedigree analysis, what does a shaded circle represent? 在系譜分析中，陰影圓圈代表什麼？',
      options: [{ label: 'A', text: 'Unaffected male 未受影響的男性' }, { label: 'B', text: 'Affected female 受影響的女性' }, { label: 'C', text: 'Carrier male 攜帶者男性' }, { label: 'D', text: 'Unaffected female 未受影響的女性' }],
      answer: 'B',
    },
    {
      question: 'Which of Mendel\\'s laws states that alleles for different traits are distributed independently of one another? 孟德爾的哪條定律指出不同性狀的等位基因彼此獨立分配？',
      options: [{ label: 'A', text: 'Law of Segregation 分離定律' }, { label: 'B', text: 'Law of Independent Assortment 獨立分配定律' }, { label: 'C', text: 'Law of Dominance 顯性定律' }, { label: 'D', text: 'Law of Recessiveness 隱性定律' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Mendel\\'s laws of inheritance apply only to plants and not to animals. 孟德爾的遺傳定律僅適用於植物，不適用於動物。', answer: false },
    { statement: 'A person with blood type AB can donate blood to a person with blood type O. 血型為AB型的人可以捐血給O型血的人。', answer: false },
    { statement: 'Environmental factors can influence the expression of certain traits. 環境因素可以影響某些性狀的表達。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how Mendel\\'s law of independent assortment contributes to genetic diversity. 解釋孟德爾的獨立分配定律如何促進遺傳多樣性。',
    },
    {
      question: 'Describe how you would construct a pedigree for a family with a history of hemophilia. 描述你如何為有血友病史的家庭構建系譜圖。',
    },
    {
      question: 'Discuss the social and ethical implications of genetic testing for inherited diseases. 討論遺傳疾病基因檢測的社會和倫理影響。',
    },
  ],
};

export default function BasicGeneticsPage() {
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
            Basic genetics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Through the study of basic genetics, students will acquire knowledge and develop an understanding of concepts of genes and their roles in the life of organisms. The study of molecular genetics will lay the foundation for students to study further in the field of biotechnology and be aware of its impact on society. The study of biodiversity will help students to recognise its complexity and the adaptations of different groups of organisms to their environment. Moreover, a phylogenetic approach to the classification system is adopted, which helps them to understand the development of the classification system with evidence gathered from molecular genetics. This will enable students to appreciate the phenomena of evolution and develop their curiosity about the origins of life. In addition to Darwin’s theory, students are encouraged to explore other scientific explanations for the origins of life and evolution, to help illustrate the dynamic nature of scientific knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Mendel’s laws of inheritance</li>
                <li>Inheritance in humans (Multiple alleles: ABO blood groups, Sex linkage, Sex determination)</li>
                <li>Pedigree analysis</li>
                <li>Variations in characteristics (Continuous, Discontinuous, Causes - hereditary, environmental, mutation)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Read articles about Gregor Mendel\\'s contribution.</li>
                <li>Use simulations/materials (e.g., genetic corn) for inheritance patterns.</li>
                <li>Observe/analyse human variations (e.g., height, tongue rolling).</li>
                <li>Construct/analyse pedigrees for human traits (e.g., haemophilia, tongue rolling, ear lobes).</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand law of segregation and independent assortment.</li>
                <li>Apply Mendel’s laws to solve genetic problems.</li>
                <li>Understand inheritance of ABO blood groups and sex-linked traits.</li>
                <li>Recognise role of sex chromosomes in sex determination.</li>
                <li>Analyse pedigree to study inheritance.</li>
                <li>Explain causes of different variation types.</li>
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