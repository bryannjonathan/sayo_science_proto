'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is an example of vegetative propagation? 以下哪項是營養繁殖的例子?',
      options: [{ label: 'A', text: 'Binary fission in bacteria 細菌的二分裂' }, { label: 'B', text: 'Seed germination 種子發芽' }, { label: 'C', text: 'Grafting in plants 植物的嫁接' }, { label: 'D', text: 'Fertilisation in humans 人類的受精' }],
      answer: 'C',
    },
    {
      question: 'What is the main function of the placenta during pregnancy? 懷孕期間胎盤的主要功能是什麼?',
      options: [{ label: 'A', text: 'Producing hormones 產生激素' }, { label: 'B', text: 'Exchanging nutrients and waste between mother and foetus 在母親和胎兒之間交換營養和廢物' }, { label: 'C', text: 'Protecting the foetus from physical harm 保護胎兒免受物理傷害' }, { label: 'D', text: 'Storing amniotic fluid 儲存羊水' }],
      answer: 'B',
    },
    {
      question: 'Which floral part is responsible for attracting pollinators? 花的哪一部分負責吸引傳粉者?',
      options: [{ label: 'A', text: 'Stamen 雄蕊' }, { label: 'B', text: 'Petal 花瓣' }, { label: 'C', text: 'Sepal 萼片' }, { label: 'D', text: 'Stigma 柱頭' }],
      answer: 'B',
    },
    {
      question: 'What is the significance of seed dispersal? 種子傳播的重要性是什麼?',
      options: [{ label: 'A', text: 'Reduces competition among parent and offspring plants 減少親代和子代植物之間的競爭' }, { label: 'B', text: 'Increases the chance of pollination 增加授粉的機會' }, { label: 'C', text: 'Enhances flower production 增強花的產量' }, { label: 'D', text: 'Prevents seed germination 防止種子發芽' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a feature of wind-pollinated flowers? 以下哪項是風媒花的特徵?',
      options: [{ label: 'A', text: 'Brightly colored petals 鮮艷的花瓣' }, { label: 'B', text: 'Large and sticky pollen grains 大而黏的花粉粒' }, { label: 'C', text: 'Small and light pollen grains 小而輕的花粉粒' }, { label: 'D', text: 'Strong fragrance 強烈的香味' }],
      answer: 'C',
    },
    {
      question: 'What is the role of the acrosome in sperm? 精子中頂體的作用是什麼?',
      options: [{ label: 'A', text: 'Provides energy for movement 為運動提供能量' }, { label: 'B', text: 'Contains genetic material 含有遺傳物質' }, { label: 'C', text: 'Helps penetrate the egg 幫助穿透卵子' }, { label: 'D', text: 'Stores nutrients 儲存營養' }],
      answer: 'C',
    },
    {
      question: 'Which hormone is responsible for maintaining the uterine lining during the menstrual cycle? 月經週期中哪種激素負責維持子宮內膜?',
      options: [{ label: 'A', text: 'Oestrogen 雌激素' }, { label: 'B', text: 'Progesterone 孕激素' }, { label: 'C', text: 'FSH 促卵泡激素' }, { label: 'D', text: 'LH 黃體生成素' }],
      answer: 'B',
    },
    {
      question: 'What is the advantage of breastfeeding for the newborn? 母乳餵養對新生兒的優勢是什麼?',
      options: [{ label: 'A', text: 'Provides immunity 提供免疫力' }, { label: 'B', text: 'Reduces the need for sleep 減少睡眠需求' }, { label: 'C', text: 'Increases birth weight 增加出生體重' }, { label: 'D', text: 'Speeds up tooth development 加速牙齒發育' }],
      answer: 'A',
    },
    {
      question: 'Which method of birth control prevents ovulation? 哪種避孕方法可以阻止排卵?',
      options: [{ label: 'A', text: 'Condom 避孕套' }, { label: 'B', text: 'Intrauterine device (IUD) 子宮內避孕器' }, { label: 'C', text: 'Oral contraceptive pill 口服避孕藥' }, { label: 'D', text: 'Vasectomy 輸精管結紮術' }],
      answer: 'C',
    },
    {
      question: 'What is the first stage of seed germination? 種子發芽的第一階段是什麼?',
      options: [{ label: 'A', text: 'Emergence of the radicle 胚根的出現' }, { label: 'B', text: 'Photosynthesis 光合作用' }, { label: 'C', text: 'Flowering 開花' }, { label: 'D', text: 'Fruit formation 果實形成' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'Identical twins result from the fertilisation of two separate eggs by two separate sperm. 同卵雙胞胎是由兩個不同的精子分別受精兩個不同的卵子而形成的。', answer: false },
    { statement: 'The menstrual cycle is regulated by hormones such as oestrogen and progesterone. 月經週期由雌激素和孕激素等激素調節。', answer: true },
    { statement: 'Vegetative propagation always results in offspring that are genetically identical to the parent plant. 營養繁殖總是產生與親本植物基因相同的後代。', answer: true },
  ],
  open_ended: [
    {
      question: 'Compare and contrast asexual and sexual reproduction in terms of genetic variation and energy cost. 從遺傳變異和能量成本的角度比較無性繁殖和有性繁殖。',
    },
    {
      question: 'Describe the process of fertilisation in flowering plants, including the roles of the pollen tube and double fertilisation. 描述開花植物的受精過程，包括花粉管和雙受精的作用。',
    },
    {
      question: 'Explain how the structure of the human sperm is adapted to its function. 解釋人類精子的結構如何適應其功能。',
    },
  ],
};

export default function ReproductionGrowthAndDevelopmentPage() {
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
            Reproduction, growth and development
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Organisms are an integral part of the environment. Their ways of life and living are closely related to the environment where they live in. Based on this perspective, students will gain knowledge and understanding of organisms and their environment. Firstly, students will study how organisms obtain their basic needs for oxygen, water and food from the environment. Life processes, such as nutrition, gas exchange, and transport involved, will be studied in an integrated manner so as to enhance understanding of the structures and functions of an organism as a whole. Secondly, students will study reproduction, growth and development to understand how organisms perpetuate and proliferate in the environment. The human is used as a model for students to understand the essential life processes of animals. Thirdly, students will examine how organisms detect changes in the environment and make appropriate responses for their survival, and how humans maintain a steady internal environment. Students will then explore how organisms interact with each other and with their environment as a whole. Finally, the dynamic nature of the ecosystems that involves energy flow and materials cycling will also be investigated. Students are expected to develop an awareness of the impact of human activities on the ecosystems and recognise the need for conservation.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Asexual reproduction (Bacteria fission, Plant vegetative propagation)</li>
                <li>Sexual reproduction in flowering plants (Floral parts, Pollination, Fertilisation, Seed/fruit dispersal significance)</li>
                <li>Reproduction in humans (Male/female systems, Sperm/ovum structure, Menstrual cycle, Fertilisation, Embryo/foetus development, Twins, Birth, Parental care, Birth control)</li>
                <li>Growth and development (Concepts, Seed germination, Growth stages, Growth measurement)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Examine images of binary fission, sperm, ova.</li>
                <li>Use audiovisuals for fertilisation process.</li>
                <li>Examine adaptive features of pollinated flowers.</li>
                <li>Examine reproductive systems (dissection/torso).</li>
                <li>Examine ultrasound images of foetal development.</li>
                <li>Cultivate/examine vegetative propagation organs.</li>
                <li>Search info on birth control effectiveness/side effects; IVF; pregnancy termination.</li>
                <li>Discuss effects of maternal drinking/smoking on foetus.</li>
                <li>Design/perform investigations on seed germination/seedling growth.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Outline vegetative propagation process with example.</li>
                <li>Discuss significance of asexual/sexual reproduction.</li>
                <li>Relate floral part structure to reproduction.</li>
                <li>Understand pollination importance.</li>
                <li>Compare insect- vs wind-pollinated flower features.</li>
                <li>Outline fertilisation process leading to seed/fruit.</li>
                <li>Relate reproductive system structure to function.</li>
                <li>Recognise sperm/ovum roles.</li>
                <li>Describe semen transfer/fertilisation.</li>
                <li>Relate placenta structure to foetus development role.</li>
                <li>Recognise parental care significance/breast-feeding advantages.</li>
                <li>Understand biological basis of birth control methods.</li>
                <li>Discuss pros/cons of different growth parameters.</li>
                <li>Identify growth stages from plant/human growth curves.</li>
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
                <li>Evaluate the impact of the application of biology to human activities (e.g. dietary requirement, birth control and pollution control);</li>
                <li>Analyse ways in which scientific and technological advancement (e.g. computing technology and image analysing technology) have enhanced our understanding of complex life processes;</li>
                <li>Develop sensitivity and responsibility in striking a balance between the needs of humans and a sustainable environment;</li>
                <li>Be aware of the application of biological knowledge (e.g. balanced diet, birth control, and sewage treatment) in society and its social, ethical, economic and environmental implications.</li>
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