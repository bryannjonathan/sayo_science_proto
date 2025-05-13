'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the primary cause of deforestation in tropical rainforests? 熱帶雨林砍伐的主要原因是什么？',
      options: [{ label: 'A', text: 'Agricultural expansion 農業擴張' }, { label: 'B', text: 'Natural wildfires 自然野火' }, { label: 'C', text: 'Climate change 氣候變化' }, { label: 'D', text: 'Volcanic activity 火山活動' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a consequence of overfishing? 以下哪項是過度捕撈的後果？',
      options: [{ label: 'A', text: 'Increased biodiversity 生物多樣性增加' }, { label: 'B', text: 'Depletion of fish stocks 魚類資源枯竭' }, { label: 'C', text: 'Improved water quality 水質改善' }, { label: 'D', text: 'Reduced ocean acidity 海洋酸度降低' }],
      answer: 'B',
    },
    {
      question: 'What is bioaccumulation? 什么是生物累積？',
      options: [{ label: 'A', text: 'The increase in concentration of a substance in an organism over time 物質在生物體內隨時間濃度增加' }, { label: 'B', text: 'The rapid growth of a population 人口的快速增長' }, { label: 'C', text: 'The process of photosynthesis 光合作用的過程' }, { label: 'D', text: 'The decomposition of organic matter 有機物的分解' }],
      answer: 'A',
    },
    {
      question: 'Which gas is primarily responsible for acid rain? 哪種氣體是酸雨的主要成因？',
      options: [{ label: 'A', text: 'Carbon dioxide 二氧化碳' }, { label: 'B', text: 'Sulfur dioxide 二氧化硫' }, { label: 'C', text: 'Oxygen 氧氣' }, { label: 'D', text: 'Nitrogen 氮氣' }],
      answer: 'B',
    },
    {
      question: 'What is a major health problem caused by air pollution? 空氣污染引起的主要健康問題是什么？',
      options: [{ label: 'A', text: 'Increased bone density 骨密度增加' }, { label: 'B', text: 'Respiratory diseases 呼吸系統疾病' }, { label: 'C', text: 'Improved eyesight 視力改善' }, { label: 'D', text: 'Enhanced immune system 免疫系統增強' }],
      answer: 'B',
    },
    {
      question: 'Which practice contributes to soil degradation? 哪種做法會導致土壤退化？',
      options: [{ label: 'A', text: 'Crop rotation 輪作' }, { label: 'B', text: 'Overuse of chemical fertilizers 過度使用化學肥料' }, { label: 'C', text: 'Organic farming 有機農業' }, { label: 'D', text: 'Afforestation 植樹造林' }],
      answer: 'B',
    },
    {
      question: 'What is the main purpose of sewage treatment? 污水處理的主要目的是什么？',
      options: [{ label: 'A', text: 'To increase water pollution 增加水污染' }, { label: 'B', text: 'To remove contaminants from wastewater 去除廢水中的污染物' }, { label: 'C', text: 'To produce more waste 產生更多廢物' }, { label: 'D', text: 'To reduce the amount of fresh water 減少淡水量' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a renewable resource? 以下哪項是可再生資源？',
      options: [{ label: 'A', text: 'Coal 煤炭' }, { label: 'B', text: 'Natural gas 天然氣' }, { label: 'C', text: 'Solar energy 太陽能' }, { label: 'D', text: 'Petroleum 石油' }],
      answer: 'C',
    },
    {
      question: 'What is the primary effect of urbanisation on local ecosystems? 城市化對當地生態系統的主要影響是什么？',
      options: [{ label: 'A', text: 'Increased biodiversity 生物多樣性增加' }, { label: 'B', text: 'Habitat destruction 棲息地破壞' }, { label: 'C', text: 'Improved air quality 空氣質量改善' }, { label: 'D', text: 'Reduced pollution 污染減少' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a method to control population growth? 以下哪項是控制人口增長的方法？',
      options: [{ label: 'A', text: 'Encouraging higher birth rates 鼓勵提高出生率' }, { label: 'B', text: 'Providing education on family planning 提供計劃生育教育' }, { label: 'C', text: 'Increasing immigration 增加移民' }, { label: 'D', text: 'Reducing healthcare access 減少醫療保健機會' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Industrialisation has no impact on the environment. 工業化對環境沒有影響。', answer: false },
    { statement: 'Overuse of chemical fertilizers can lead to water pollution. 過度使用化學肥料會導致水污染。', answer: true },
    { statement: 'Lichen distribution can be used to study air pollution levels. 地衣分布可用於研究空氣污染水平。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain the ecological impacts of land clearance for urban development. 解釋為城市發展而清理土地的生态影響。',
    },
    {
      question: 'Describe how bioaccumulation affects the food chain. 描述生物累積如何影響食物鏈。',
    },
    {
      question: 'Design an investigation to measure the oxygen content in clean and polluted water. 設計一項調查來測量清潔水和污染水中的氧含量。',
    },
  ],
};

export default function HumanImpactOnTheEnvironmentPage() {
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
            Human impact on the environment
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will build on their prior knowledge of basic ecological principles and develop a further understanding of applied ecology. Students will explore some of the ways in which human activities can impose far-reaching effects on the environment. Local and global pollution issues, resources management, pollution control measures and conservation will be also discussed. At the end, students are expected to apply a range of field study skills to investigate the impact of pollution on the local environment. Applied Ecology builds on students’ prior knowledge of the Diversity of life forms, Essential life processes, Ecosystems and Health and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Human population growth (Impact, Control need)</li>
                <li>Use of resources (Types, Fisheries/agriculture, Impacts)</li>
                <li>Effects of urbanisation/industrialisation (Land clearance, Pollution health problems)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Conduct project on population growth effects.</li>
                <li>Design/perform investigations: lichen distribution (SO2 pollution); oxygen content (clean/polluted water); pollutant study (stream/shore).</li>
                <li>Identify HK areas with serious air pollution, discuss causes.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Evaluate impact/control of rapid population growth.</li>
                <li>Recognise impacts of malpractices (fisheries/agriculture).</li>
                <li>Explain ecological impacts of land clearance/reclamation.</li>
                <li>Recognise air/water pollution effects on environment/health.</li>
                <li>Account for toxic substance bioaccumulation.</li>
                <li>Design/perform investigation on air/water pollution.</li>
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
                <li>Be aware of the application of ecological knowledge in society and its social, ethical, economic and environmental implications;</li>
                <li>Analyse ways in which scientific and technological advancement have influenced our lives, society and the environment (e.g. pollution resulting from industrialisation and urbanisation);</li>
                <li>Develop sensitivity and responsibility in striking a balance between the needs of humans and a sustainable environment;</li>
                <li>Explain how biological knowledge is used in technological application for management of the environment (e.g. sewage treatment).</li>
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