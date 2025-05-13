'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which hormone is primarily responsible for triggering ovulation in the menstrual cycle? 哪種激素主要負責觸發月經週期中的排卵?',
      options: [{ label: 'A', text: 'Estrogen 雌激素' }, { label: 'B', text: 'Progesterone 孕激素' }, { label: 'C', text: 'Luteinizing Hormone (LH) 黃體生成素' }, { label: 'D', text: 'Follicle-Stimulating Hormone (FSH) 促卵泡激素' }],
      answer: 'C',
    },
    {
      question: 'What is the main function of progesterone during the menstrual cycle? 孕激素在月經週期中的主要功能是什麼?',
      options: [{ label: 'A', text: 'Stimulate follicle development 刺激卵泡發育' }, { label: 'B', text: 'Maintain the uterine lining 維持子宮內膜' }, { label: 'C', text: 'Trigger ovulation 觸發排卵' }, { label: 'D', text: 'Increase estrogen production 增加雌激素分泌' }],
      answer: 'B',
    },
    {
      question: 'Which of the following hormones is used in oral contraceptives to prevent pregnancy? 以下哪種激素用於口服避孕藥以防止懷孕?',
      options: [{ label: 'A', text: 'Testosterone 睾酮' }, { label: 'B', text: 'Insulin 胰島素' }, { label: 'C', text: 'Estrogen and Progesterone 雌激素和孕激素' }, { label: 'D', text: 'Thyroxine 甲狀腺素' }],
      answer: 'C',
    },
    {
      question: 'During which phase of the menstrual cycle does the uterine lining thicken? 在月經週期的哪個階段子宮內膜會增厚?',
      options: [{ label: 'A', text: 'Menstrual phase 月經期' }, { label: 'B', text: 'Follicular phase 卵泡期' }, { label: 'C', text: 'Ovulation phase 排卵期' }, { label: 'D', text: 'Luteal phase 黃體期' }],
      answer: 'B',
    },
    {
      question: 'What is the role of FSH in the menstrual cycle? 促卵泡激素 (FSH) 在月經週期中的作用是什麼?',
      options: [{ label: 'A', text: 'Stimulate egg release 刺激卵子釋放' }, { label: 'B', text: 'Thicken the uterine lining 增厚子宮內膜' }, { label: 'C', text: 'Stimulate follicle development 刺激卵泡發育' }, { label: 'D', text: 'Trigger menstruation 觸發月經' }],
      answer: 'C',
    },
    {
      question: 'Which hormone is commonly used in fertility treatments to stimulate ovulation? 哪種激素常用於生育治療以刺激排卵?',
      options: [{ label: 'A', text: 'Adrenaline 腎上腺素' }, { label: 'B', text: 'FSH and LH 促卵泡激素和黃體生成素' }, { label: 'C', text: 'Cortisol 皮質醇' }, { label: 'D', text: 'Melatonin 褪黑激素' }],
      answer: 'B',
    },
    {
      question: 'What happens to estrogen levels just before ovulation? 排卵前雌激素水平會發生什麼變化?',
      options: [{ label: 'A', text: 'Decrease sharply 急劇下降' }, { label: 'B', text: 'Remain constant 保持不變' }, { label: 'C', text: 'Increase sharply 急劇上升' }, { label: 'D', text: 'Fluctuate randomly 隨機波動' }],
      answer: 'C',
    },
    {
      question: 'How do hormonal contraceptives primarily prevent pregnancy? 激素避孕藥如何主要防止懷孕?',
      options: [{ label: 'A', text: 'By killing sperm 通過殺死精子' }, { label: 'B', text: 'By blocking ovulation 通過阻止排卵' }, { label: 'C', text: 'By thickening cervical mucus 通過增厚宮頸黏液' }, { label: 'D', text: 'Both B and C B和C兩者' }],
      answer: 'D',
    },
    {
      question: 'Which hormone is responsible for the development of the corpus luteum? 哪種激素負責黃體的發育?',
      options: [{ label: 'A', text: 'Estrogen 雌激素' }, { label: 'B', text: 'Progesterone 孕激素' }, { label: 'C', text: 'LH 黃體生成素' }, { label: 'D', text: 'FSH 促卵泡激素' }],
      answer: 'C',
    },
    {
      question: 'What is a common side effect of hormonal infertility treatments? 激素不孕治療的常見副作用是什麼?',
      options: [{ label: 'A', text: 'Increased appetite 食慾增加' }, { label: 'B', text: 'Multiple pregnancies 多胎妊娠' }, { label: 'C', text: 'Decreased energy 能量減少' }, { label: 'D', text: 'Hair loss 脫髮' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Progesterone levels are highest during the follicular phase of the menstrual cycle. 孕激素水平在月經週期的卵泡期最高。', answer: false },
    { statement: 'Hormonal contraceptives can also be used to treat certain menstrual disorders. 激素避孕藥也可用於治療某些月經失調。', answer: true },
    { statement: 'FSH is only produced in females and has no role in males. 促卵泡激素 (FSH) 僅在女性體內產生，在男性中沒有作用。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how the interaction of hormones regulates the menstrual cycle. 解釋激素的相互作用如何調節月經週期。',
    },
    {
      question: 'Discuss the social and ethical implications of using hormonal contraceptives. 討論使用激素避孕藥的社會和倫理影響。',
    },
    {
      question: 'Describe how hormonal treatments can help couples facing infertility. 描述激素治療如何幫助面臨不孕問題的夫婦。',
    },
  ],
};

export default function HormonalControlOfReproductiveCyclePage() {
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
            Hormonal control of reproductive cycle
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will develop a deeper understanding of the physiological processes in humans. Regulation and control is an interesting topic concerning the intriguing mechanisms which enable our bodies to function normally regardless of the changes in environmental conditions. Students are expected to understand the roles of nervous control and hormonal control in coordinating different organs and systems to achieve a steady internal environment. Human Physiology: Regulation and Control builds on students’ prior knowledge of Movement of substances across membrane, Essential life processes, Coordination and response and Homeostasis studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Interaction of hormones in menstrual cycle</li>
                <li>Use of hormones as contraceptives/infertility treatment</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Interpret graphs of hormone fluctuation/uterine lining changes in menstrual cycle.</li>
                <li>Conduct project on infertility causes/treatment.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand significance of hormonal control of menstrual cycle.</li>
                <li>Explain hormone use as contraceptives/infertility treatment.</li>
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
                <li>Be aware of the significance of knowledge in human physiology to improve the quality of life and maintain a healthy community;</li>
                <li>Be aware that societal needs have led to technological advances (e.g. dialysis machines and the use of contraceptives);</li>
                <li>Appreciate the role of science and technology in understanding the human body.</li>
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