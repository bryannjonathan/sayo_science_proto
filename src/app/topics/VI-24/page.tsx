'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'What is the primary cause of global warming? 全球暖化的主要原因是什麼?',
      options: [{ label: 'A', text: 'Increased solar radiation 太陽輻射增加' }, { label: 'B', text: 'Greenhouse gas emissions 溫室氣體排放' }, { label: 'C', text: 'Volcanic activity 火山活動' }, { label: 'D', text: 'Deforestation 森林砍伐' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a consequence of eutrophication? 以下哪一項是優養化的後果?',
      options: [{ label: 'A', text: 'Increased biodiversity 生物多樣性增加' }, { label: 'B', text: 'Algal blooms 藻類大量繁殖' }, { label: 'C', text: 'Improved water clarity 水質清澈度提高' }, { label: 'D', text: 'Higher oxygen levels in water 水中氧氣含量增加' }],
      answer: 'B',
    },
    {
      question: 'What is a major source of acid rain? 酸雨的主要來源是什麼?',
      options: [{ label: 'A', text: 'Carbon dioxide emissions 二氧化碳排放' }, { label: 'B', text: 'Sulfur dioxide and nitrogen oxides 二氧化硫和氮氧化物' }, { label: 'C', text: 'Methane emissions 甲烷排放' }, { label: 'D', text: 'Ozone depletion 臭氧層耗損' }],
      answer: 'B',
    },
    {
      question: 'Which practice is most sustainable for fisheries management? 哪種做法對漁業管理最為可持續?',
      options: [{ label: 'A', text: 'Overfishing 過度捕撈' }, { label: 'B', text: 'Aquaculture 水產養殖' }, { label: 'C', text: 'Bycatch reduction 減少副漁獲物' }, { label: 'D', text: 'Marine protected areas 海洋保護區' }],
      answer: 'D',
    },
    {
      question: 'What is a key goal of sustainable development? 可持續發展的一個關鍵目標是什麼?',
      options: [{ label: 'A', text: 'Maximizing economic growth 最大化經濟增長' }, { label: 'B', text: 'Balancing economic, social, and environmental needs 平衡經濟、社會和環境需求' }, { label: 'C', text: 'Exploiting natural resources 開發自然資源' }, { label: 'D', text: 'Reducing population growth 減少人口增長' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a local example of resource management conflict in Hong Kong? 以下哪一項是香港資源管理衝突的本地例子?',
      options: [{ label: 'A', text: 'Lamma Island wind farm 南丫島風力發電場' }, { label: 'B', text: 'Victoria Harbour reclamation 維多利亞港填海工程' }, { label: 'C', text: 'Ocean Park expansion 海洋公園擴建' }, { label: 'D', text: 'Disneyland construction 迪士尼樂園建設' }],
      answer: 'B',
    },
    {
      question: 'What is the main cause of algal blooms in coastal waters? 沿海水域藻類大量繁殖的主要原因是什麼?',
      options: [{ label: 'A', text: 'High salinity 高鹽度' }, { label: 'B', text: 'Low temperatures 低溫' }, { label: 'C', text: 'Excess nutrients 營養過剩' }, { label: 'D', text: 'Strong currents 強水流' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT a sustainable agricultural practice? 以下哪一項不是可持續的農業實踐?',
      options: [{ label: 'A', text: 'Crop rotation 輪作' }, { label: 'B', text: 'Monoculture 單一耕作' }, { label: 'C', text: 'Organic farming 有機農業' }, { label: 'D', text: 'Integrated pest management 綜合害蟲管理' }],
      answer: 'B',
    },
    {
      question: 'How does acid rain affect ecosystems? 酸雨如何影響生態系統?',
      options: [{ label: 'A', text: 'Increases soil fertility 增加土壤肥力' }, { label: 'B', text: 'Damages plant leaves and aquatic life 損害植物葉子和水生生物' }, { label: 'C', text: 'Promotes biodiversity 促進生物多樣性' }, { label: 'D', text: 'Enhances water quality 提高水質' }],
      answer: 'B',
    },
    {
      question: 'What is a major challenge in achieving sustainable development? 實現可持續發展的主要挑戰是什麼?',
      options: [{ label: 'A', text: 'Lack of technology 缺乏技術' }, { label: 'B', text: 'Balancing short-term profits with long-term sustainability 平衡短期利潤與長期可持續性' }, { label: 'C', text: 'Overpopulation 人口過剩' }, { label: 'D', text: 'Climate change denial 否認氣候變化' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Deforestation contributes to global warming by reducing carbon dioxide absorption. 森林砍伐通過減少二氧化碳吸收而加劇全球暖化。', answer: true },
    { statement: 'Acid rain is primarily caused by the release of methane into the atmosphere. 酸雨主要由甲烷釋放到大氣中引起。', answer: false },
    { statement: 'Sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. 可持續發展旨在滿足當代需求，同時不損害後代滿足其需求的能力。', answer: true },
  ],
  open_ended: [
    {
      question: 'Explain how industrialisation contributes to global warming, using local examples. 解釋工業化如何導致全球暖化，並使用本地例子說明。',
    },
    {
      question: 'Discuss the social and economic impacts of implementing marine protected areas for fisheries management. 討論實施海洋保護區對漁業管理的社會和經濟影響。',
    },
    {
      question: 'Describe the process of eutrophication and its effects on aquatic ecosystems. 描述優養化的過程及其對水生生態系統的影響。',
    },
  ],
};

export default function GlobalIssuesPage() {
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
            Global issues
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will build on their prior knowledge of basic ecological principles and develop a further understanding of applied ecology. Students will explore some of the ways in which human activities can impose far-reaching effects on the environment. Local and global pollution issues, resources management, pollution control measures and conservation will be also discussed. At the end, students are expected to apply a range of field study skills to investigate the impact of pollution on the local environment. Applied Ecology builds on students’ prior knowledge of the Diversity of life forms, Essential life processes, Ecosystems and Health and Diseases studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Sustainable development</li>
                <li>Resource management: fisheries/agriculture</li>
                <li>Global warming</li>
                <li>Acid rain</li>
                <li>Eutrophication and algal boom</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Conduct project on global warming/acid rain issues.</li>
                <li>Research local examples of economic development vs environmental conservation conflict.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Recognise causes/problems of global issues.</li>
                <li>Use local examples for resource management illustration.</li>
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