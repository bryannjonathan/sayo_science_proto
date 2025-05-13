'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which part of the brain is primarily responsible for regulating body temperature? 大腦的哪個部分主要負責調節體溫？',
      options: [{ label: 'A', text: 'Hypothalamus 下丘腦' }, { label: 'B', text: 'Cerebellum 小腦' }, { label: 'C', text: 'Hippocampus 海馬體' }, { label: 'D', text: 'Thalamus 丘腦' }],
      answer: 'A',
    },
    {
      question: 'What is the primary role of sweat glands in temperature regulation? 汗腺在體溫調節中的主要作用是什麼？',
      options: [{ label: 'A', text: 'Producing sweat to cool the body 產生汗液以冷卻身體' }, { label: 'B', text: 'Storing fat for insulation 儲存脂肪以隔熱' }, { label: 'C', text: 'Producing hormones to increase metabolism 產生激素以增加新陳代謝' }, { label: 'D', text: 'Filtering toxins from the blood 過濾血液中的毒素' }],
      answer: 'A',
    },
    {
      question: 'Which hormone increases metabolic rate and heat production? 哪種激素會增加新陳代謝率和熱量產生？',
      options: [{ label: 'A', text: 'Thyroxine 甲狀腺素' }, { label: 'B', text: 'Insulin 胰島素' }, { label: 'C', text: 'Adrenaline 腎上腺素' }, { label: 'D', text: 'Estrogen 雌激素' }],
      answer: 'A',
    },
    {
      question: 'What is vasodilation? 什麼是血管擴張？',
      options: [{ label: 'A', text: 'Widening of blood vessels to increase heat loss 血管擴張以增加熱量散失' }, { label: 'B', text: 'Narrowing of blood vessels to conserve heat 血管收縮以保存熱量' }, { label: 'C', text: 'Formation of new blood vessels 新血管的形成' }, { label: 'D', text: 'Clotting of blood to prevent bleeding 血液凝固以防止出血' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a behavioral mechanism for temperature regulation? 以下哪項是體溫調節的行為機制？',
      options: [{ label: 'A', text: 'Seeking shade on a hot day 在炎熱的天氣中尋找陰涼處' }, { label: 'B', text: 'Shivering to generate heat 顫抖以產生熱量' }, { label: 'C', text: 'Sweating to cool down 出汗以冷卻' }, { label: 'D', text: 'Vasoconstriction to conserve heat 血管收縮以保存熱量' }],
      answer: 'A',
    },
    {
      question: 'What happens to blood vessels in the skin when the body is too cold? 當身體過冷時，皮膚中的血管會發生什麼變化？',
      options: [{ label: 'A', text: 'They constrict to reduce heat loss 它們收縮以減少熱量散失' }, { label: 'B', text: 'They dilate to increase heat loss 它們擴張以增加熱量散失' }, { label: 'C', text: 'They rupture to release heat 它們破裂以釋放熱量' }, { label: 'D', text: 'They remain unchanged 它們保持不變' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is NOT a physiological mechanism for temperature regulation? 以下哪項不是體溫調節的生理機制？',
      options: [{ label: 'A', text: 'Wearing a jacket in cold weather 在寒冷的天氣中穿外套' }, { label: 'B', text: 'Shivering 顫抖' }, { label: 'C', text: 'Sweating 出汗' }, { label: 'D', text: 'Vasodilation 血管擴張' }],
      answer: 'A',
    },
    {
      question: 'How does the body respond to high environmental temperatures? 身體如何應對高環境溫度？',
      options: [{ label: 'A', text: 'By increasing sweat production 通過增加汗液產生' }, { label: 'B', text: 'By decreasing blood flow to the skin 通過減少流向皮膚的血液' }, { label: 'C', text: 'By shivering 通過顫抖' }, { label: 'D', text: 'By constricting blood vessels 通過收縮血管' }],
      answer: 'A',
    },
    {
      question: 'What is the role of the skin in temperature regulation? 皮膚在體溫調節中的作用是什麼？',
      options: [{ label: 'A', text: 'It acts as a site for heat exchange 它作為熱交換的場所' }, { label: 'B', text: 'It produces hormones to regulate temperature 它產生激素來調節溫度' }, { label: 'C', text: 'It stores fat for insulation 它儲存脂肪以隔熱' }, { label: 'D', text: 'It filters toxins from the blood 它過濾血液中的毒素' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a consequence of prolonged exposure to extreme cold? 以下哪項是長時間暴露於極寒環境的後果？',
      options: [{ label: 'A', text: 'Hypothermia 低溫症' }, { label: 'B', text: 'Hyperthermia 高溫症' }, { label: 'C', text: 'Dehydration 脫水' }, { label: 'D', text: 'Heat stroke 中暑' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The hypothalamus detects changes in body temperature and initiates responses to regulate it. 下丘腦檢測體溫變化並啟動調節反應。', answer: true },
    { statement: 'Shivering is a behavioral mechanism to increase body temperature. 顫抖是增加體溫的行為機制。', answer: false },
    { statement: 'Thyroxine decreases metabolic rate to reduce heat production. 甲狀腺素降低新陳代謝率以減少熱量產生。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain the role of the hypothalamus in regulating body temperature. 解釋下丘腦在調節體溫中的作用。',
    },
    {
      question: 'Describe two behavioral mechanisms humans use to regulate body temperature. 描述人類用來調節體溫的兩種行為機制。',
    },
    {
      question: 'How does vasoconstriction help in maintaining body temperature in cold environments? 血管收縮如何在寒冷環境中幫助維持體溫？',
    },
  ],
};

export default function RegulationOfBodyTemperaturePage() {
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
            Regulation of body temperature
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">In this topic, students will develop a deeper understanding of the physiological processes in humans. Regulation and control is an interesting topic concerning the intriguing mechanisms which enable our bodies to function normally regardless of the changes in environmental conditions. Students are expected to understand the roles of nervous control and hormonal control in coordinating different organs and systems to achieve a steady internal environment. Human Physiology: Regulation and Control builds on students’ prior knowledge of Movement of substances across membrane, Essential life processes, Coordination and response and Homeostasis studied in the compulsory part.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Importance of body temperature regulation</li>
                <li>Mechanisms of temperature regulation (Skin, Hypothalamus, Circulation, Thyroxine, Muscle, Behaviour)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Examine slides/photomicrographs of mammalian skin features for temp regulation.</li>
                <li>Construct concept map of temperature regulation mechanism.</li>
                <li>Search info on human physiology in extreme environments.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand structural, physiological, behavioural mechanisms of body temperature regulation.</li>
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