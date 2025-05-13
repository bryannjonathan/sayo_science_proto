'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which part of the human eye is responsible for focusing light onto the retina? 人眼的哪一部分負責將光線聚焦到視網膜上?',
      options: [{ label: 'A', text: 'Cornea 角膜' }, { label: 'B', text: 'Lens 晶狀體' }, { label: 'C', text: 'Iris 虹膜' }, { label: 'D', text: 'Pupil 瞳孔' }],
      answer: 'B',
    },
    {
      question: 'What is the role of auxin in plant phototropism? 植物向光性中，生長素的作用是什麼?',
      options: [{ label: 'A', text: 'It inhibits growth on the shaded side. 它抑制陰影側的生長。' }, { label: 'B', text: 'It promotes growth on the shaded side. 它促進陰影側的生長。' }, { label: 'C', text: 'It prevents water loss. 它防止水分流失。' }, { label: 'D', text: 'It absorbs light energy. 它吸收光能。' }],
      answer: 'B',
    },
    {
      question: 'Which part of the human ear converts sound vibrations into nerve impulses? 人耳的哪一部分將聲音振動轉換為神經衝動?',
      options: [{ label: 'A', text: 'Cochlea 耳蝸' }, { label: 'B', text: 'Eardrum 鼓膜' }, { label: 'C', text: 'Ossicles 聽小骨' }, { label: 'D', text: 'Auditory nerve 聽神經' }],
      answer: 'A',
    },
    {
      question: 'What is the function of the synapse in the nervous system? 神經系統中突觸的功能是什麼?',
      options: [{ label: 'A', text: 'To transmit electrical signals between neurons. 在神經元之間傳遞電信號。' }, { label: 'B', text: 'To store neurotransmitters. 儲存神經遞質。' }, { label: 'C', text: 'To insulate nerve fibers. 絕緣神經纖維。' }, { label: 'D', text: 'To produce hormones. 產生激素。' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is an example of a reflex action? 以下哪一項是反射動作的例子?',
      options: [{ label: 'A', text: 'Blinking when a bright light is shone in the eyes. 當強光照射眼睛時眨眼。' }, { label: 'B', text: 'Riding a bicycle. 騎自行車。' }, { label: 'C', text: 'Solving a math problem. 解決數學問題。' }, { label: 'D', text: 'Writing a letter. 寫信。' }],
      answer: 'A',
    },
    {
      question: 'Which hormone is responsible for regulating blood sugar levels? 哪種激素負責調節血糖水平?',
      options: [{ label: 'A', text: 'Insulin 胰島素' }, { label: 'B', text: 'Adrenaline 腎上腺素' }, { label: 'C', text: 'Thyroxine 甲狀腺素' }, { label: 'D', text: 'Estrogen 雌激素' }],
      answer: 'A',
    },
    {
      question: 'Which type of joint allows the greatest range of movement? 哪種類型的關節允許最大的運動範圍?',
      options: [{ label: 'A', text: 'Ball-and-socket joint 球窩關節' }, { label: 'B', text: 'Hinge joint 鉸鏈關節' }, { label: 'C', text: 'Pivot joint 樞軸關節' }, { label: 'D', text: 'Fixed joint 固定關節' }],
      answer: 'A',
    },
    {
      question: 'What is the role of the neuromuscular junction? 神經肌肉接頭的作用是什麼?',
      options: [{ label: 'A', text: 'To transmit nerve impulses to muscles. 將神經衝動傳遞到肌肉。' }, { label: 'B', text: 'To produce red blood cells. 產生紅血球。' }, { label: 'C', text: 'To store calcium ions. 儲存鈣離子。' }, { label: 'D', text: 'To break down glucose. 分解葡萄糖。' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a defect of the human eye? 以下哪一項是人眼的缺陷?',
      options: [{ label: 'A', text: 'Myopia 近視' }, { label: 'B', text: 'Hyperopia 遠視' }, { label: 'C', text: 'Astigmatism 散光' }, { label: 'D', text: 'All of the above 以上皆是' }],
      answer: 'D',
    },
    {
      question: 'What is the central nervous system (CNS) composed of? 中樞神經系統（CNS）由什麼組成?',
      options: [{ label: 'A', text: 'Brain and spinal cord 腦和脊髓' }, { label: 'B', text: 'Nerves and ganglia 神經和神經節' }, { label: 'C', text: 'Sensory and motor neurons 感覺和運動神經元' }, { label: 'D', text: 'Hormones and glands 激素和腺體' }],
      answer: 'A',
    },
  ],
  true_false: [
    { statement: 'The lens of the eye changes shape to focus on objects at different distances. 眼睛的晶狀體會改變形狀以聚焦不同距離的物體。', answer: true },
    { statement: 'Phototropism in plants is a response to gravity. 植物的向光性是對重力的反應。', answer: false },
    { statement: 'The endocrine system uses electrical impulses to communicate. 內分泌系統使用電脈衝進行通信。', answer: false },
  ],
  open_ended: [
    {
      question: 'Explain how the structure of the human eye is adapted to its function. 解釋人眼的結構如何適應其功能。',
    },
    {
      question: 'Describe the process of phototropism in plants, including the role of auxin. 描述植物的向光性過程，包括生長素的作用。',
    },
    {
      question: 'Compare and contrast hormonal and nervous coordination in humans. 比較和對比人體的激素和神經協調。',
    },
  ],
};

export default function CoordinationAndResponsePage() {
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
            Coordination and response
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Organisms are an integral part of the environment. Their ways of life and living are closely related to the environment where they live in. Based on this perspective, students will gain knowledge and understanding of organisms and their environment. Firstly, students will study how organisms obtain their basic needs for oxygen, water and food from the environment. Life processes, such as nutrition, gas exchange, and transport involved, will be studied in an integrated manner so as to enhance understanding of the structures and functions of an organism as a whole. Secondly, students will study reproduction, growth and development to understand how organisms perpetuate and proliferate in the environment. The human is used as a model for students to understand the essential life processes of animals. Thirdly, students will examine how organisms detect changes in the environment and make appropriate responses for their survival, and how humans maintain a steady internal environment. Students will then explore how organisms interact with each other and with their environment as a whole. Finally, the dynamic nature of the ecosystems that involves energy flow and materials cycling will also be investigated. Students are expected to develop an awareness of the impact of human activities on the ecosystems and recognise the need for conservation.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Stimuli, receptors, responses</li>
                <li>Light stimulus: Human eye (Structure, function, defects, correction)</li>
                <li>Light stimulus: Plant phototropism (Root/shoot response, auxin role)</li>
                <li>Sound stimulus: Human ear structure</li>
                <li>Nervous coordination in humans (System plan, CNS, neurones, synapse, reflex, voluntary action)</li>
                <li>Hormonal coordination in humans (Nature, endocrine plan)</li>
                <li>Movement in humans (Musculo-skeletal system, joints, muscle action, nerve impulse)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Perform ox eye dissection.</li>
                <li>Search info on technology for rectifying eye defects.</li>
                <li>Examine models (brain, eye, ear, arm).</li>
                <li>Design/perform investigations on root/shoot phototropic responses.</li>
                <li>Perform practical work observing teased muscle contraction.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand role of sense organs/receptors.</li>
                <li>Relate eye structure to vision.</li>
                <li>Explain eye defect causes.</li>
                <li>Describe sight correction with glasses.</li>
                <li>Be aware of surgical eye correction methods.</li>
                <li>Recognise phototropism significance.</li>
                <li>Understand phototropic response mechanism.</li>
                <li>Relate ear structure to hearing.</li>
                <li>Recognise CNS role.</li>
                <li>Distinguish neurone types.</li>
                <li>Describe nerve impulse transmission across synapse.</li>
                <li>Compare reflexes and voluntary actions.</li>
                <li>Understand nature of hormonal coordination.</li>
                <li>Illustrate hormone mediated response with example.</li>
                <li>Compare hormonal and nervous coordination.</li>
                <li>Understand musculo-skeletal component roles.</li>
                <li>Compare movement degree in hinge/ball-socket joints.</li>
                <li>Describe nerve impulse transmission at neuromuscular junction.</li>
                <li>Explain coordination (stimulus, receptor, system, effector, response).</li>
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