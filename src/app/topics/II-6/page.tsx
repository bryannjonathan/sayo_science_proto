'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following best describes the relationship between chromosomes, genes, and nucleic acids? 以下哪項最能描述染色體、基因和核酸之間的關係？',
      options: [{ label: 'A', text: 'Genes are segments of DNA located on chromosomes, and DNA is a type of nucleic acid. 基因是位於染色體上的DNA片段，而DNA是核酸的一種。' }, { label: 'B', text: 'Chromosomes are made of genes, and genes are made of nucleic acids. 染色體由基因組成，基因由核酸組成。' }, { label: 'C', text: 'Nucleic acids are segments of chromosomes, and chromosomes are made of genes. 核酸是染色體的片段，染色體由基因組成。' }, { label: 'D', text: 'Genes and nucleic acids are unrelated to chromosomes. 基因和核酸與染色體無關。' }],
      answer: 'A',
    },
    {
      question: 'During transcription, what is synthesized from the DNA template? 在轉錄過程中，從DNA模板合成的是什麼？',
      options: [{ label: 'A', text: 'mRNA mRNA' }, { label: 'B', text: 'tRNA tRNA' }, { label: 'C', text: 'rRNA rRNA' }, { label: 'D', text: 'Protein 蛋白質' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a gene mutation? 以下哪項是基因突變的例子？',
      options: [{ label: 'A', text: 'Deletion of a single nucleotide 單個核苷酸的缺失' }, { label: 'B', text: 'Loss of an entire chromosome 整個染色體的缺失' }, { label: 'C', text: 'Duplication of a chromosome segment 染色體片段的複製' }, { label: 'D', text: 'Inversion of a chromosome segment 染色體片段的倒位' }],
      answer: 'A',
    },
    {
      question: 'What is the primary function of recombinant DNA technology? 重組DNA技術的主要功能是什麼？',
      options: [{ label: 'A', text: 'To combine DNA from different sources 將不同來源的DNA結合' }, { label: 'B', text: 'To sequence the entire human genome 對整個人類基因組進行測序' }, { label: 'C', text: 'To extract DNA from cells 從細胞中提取DNA' }, { label: 'D', text: 'To visualize DNA fragments 可視化DNA片段' }],
      answer: 'A',
    },
    {
      question: 'Which technique is used to separate DNA fragments by size? 哪種技術用於按大小分離DNA片段？',
      options: [{ label: 'A', text: 'Gel electrophoresis 凝膠電泳' }, { label: 'B', text: 'PCR (Polymerase Chain Reaction) PCR（聚合酶鏈式反應）' }, { label: 'C', text: 'DNA fingerprinting DNA指紋識別' }, { label: 'D', text: 'Chromatography 色譜法' }],
      answer: 'A',
    },
    {
      question: 'What is the main application of DNA fingerprinting in forensic science? DNA指紋識別在法醫學中的主要應用是什麼？',
      options: [{ label: 'A', text: 'Identifying individuals 識別個體' }, { label: 'B', text: 'Sequencing genes 基因測序' }, { label: 'C', text: 'Producing recombinant DNA 生產重組DNA' }, { label: 'D', text: 'Studying gene expression 研究基因表達' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a limitation of the Human Genome Project (HGP) data? 以下哪項是人類基因組計劃（HGP）數據的局限性？',
      options: [{ label: 'A', text: 'It does not fully explain gene function. 它不能完全解釋基因功能。' }, { label: 'B', text: 'It only includes data from one ethnic group. 它只包括一個種族群體的數據。' }, { label: 'C', text: 'It cannot be used for medical research. 它不能用於醫學研究。' }, { label: 'D', text: 'It is not accurate. 它不準確。' }],
      answer: 'A',
    },
    {
      question: 'What is the role of tRNA in protein synthesis? tRNA在蛋白質合成中的作用是什麼？',
      options: [{ label: 'A', text: 'To bring amino acids to the ribosome 將氨基酸帶到核糖體' }, { label: 'B', text: 'To transcribe DNA into mRNA 將DNA轉錄成mRNA' }, { label: 'C', text: 'To replicate DNA DNA複製' }, { label: 'D', text: 'To synthesize proteins directly 直接合成蛋白質' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a spontaneous mutation? 以下哪項是自發突變？',
      options: [{ label: 'A', text: 'A mutation caused by DNA replication errors 由DNA複製錯誤引起的突變' }, { label: 'B', text: 'A mutation caused by radiation 由輻射引起的突變' }, { label: 'C', text: 'A mutation caused by chemicals 由化學物質引起的突變' }, { label: 'D', text: 'A mutation caused by viruses 由病毒引起的突變' }],
      answer: 'A',
    },
    {
      question: 'What is the significance of the Human Genome Project (HGP)? 人類基因組計劃（HGP）的意義是什麼？',
      options: [{ label: 'A', text: 'It provided a complete map of human genes. 它提供了人類基因的完整圖譜。' }, { label: 'B', text: 'It discovered recombinant DNA technology. 它發現了重組DNA技術。' }, { label: 'C', text: 'It invented DNA fingerprinting. 它發明了DNA指紋識別。' }, { label: 'D', text: 'It cured genetic diseases. 它治癒了遺傳疾病。' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Chromosome mutations involve changes in the number or structure of chromosomes. 染色體突變涉及染色體數量或結構的變化。', answer: true },
    { statement: 'Recombinant DNA technology can only be used in plants. 重組DNA技術只能用於植物。', answer: false },
    { statement: 'The Human Genome Project was an international effort involving scientists from multiple countries. 人類基因組計劃是一項涉及多國科學家的國際努力。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain the process of protein synthesis, including transcription and translation. 解釋蛋白質合成的過程，包括轉錄和翻譯。',
    },
    {
      question: 'Discuss the social and ethical implications of DNA fingerprinting. 討論DNA指紋識別的社會和倫理影響。',
    },
    {
      question: 'How has the Human Genome Project contributed to our understanding of genetics? 人類基因組計劃如何促進我們對遺傳學的理解？',
    },
  ],
};

export default function MolecularGeneticsPage() {
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
            Molecular genetics
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Through the study of basic genetics, students will acquire knowledge and develop an understanding of concepts of genes and their roles in the life of organisms. The study of molecular genetics will lay the foundation for students to study further in the field of biotechnology and be aware of its impact on society. The study of biodiversity will help students to recognise its complexity and the adaptations of different groups of organisms to their environment. Moreover, a phylogenetic approach to the classification system is adopted, which helps them to understand the development of the classification system with evidence gathered from molecular genetics. This will enable students to appreciate the phenomena of evolution and develop their curiosity about the origins of life. In addition to Darwin’s theory, students are encouraged to explore other scientific explanations for the origins of life and evolution, to help illustrate the dynamic nature of scientific knowledge.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Chromosomes, genes and nucleic acids</li>
                <li>Gene expression and protein synthesis (transcription, translation)</li>
                <li>Mutation (Chromosome, Gene, Spontaneous, Induced, Causes)</li>
                <li>Biotechnology (Recombinant DNA, DNA fingerprinting, HGP and implications)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Construct DNA/RNA models.</li>
                <li>Read about Watson & Crick\\'s DNA discovery.</li>
                <li>Examine karyotype photomicrographs of chromosome mutation.</li>
                <li>Search info on mutagenic agents sources/effects.</li>
                <li>Use audiovisuals for recombinant DNA/DNA fingerprinting processes.</li>
                <li>Perform DNA extraction practical; DNA fragment separation by gel electrophoresis.</li>
                <li>Search info on DNA fingerprinting in forensic science.</li>
                <li>Create chart/timeline of HGP discoveries.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Describe structural/functional relationships of chromosomes, genes, nucleic acids.</li>
                <li>Outline protein synthesis process.</li>
                <li>Distinguish between chromosome and gene mutation.</li>
                <li>Recognise applications of recombinant DNA and DNA fingerprinting.</li>
                <li>Recognise contributions/limitations of HGP data.</li>
                <li>Appreciate joint effort in international genomics projects.</li>
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