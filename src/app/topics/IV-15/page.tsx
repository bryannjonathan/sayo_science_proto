'use client';

import BackButton from '@/components/BackButton';
import QuizSection from '@/components/QuizSection';
import SectionCard from '@/components/SectionCard';
import { BookOpen, Target, Lightbulb, CheckSquare, Heart, Microscope, HelpCircle } from 'lucide-react';

const quizData = {
  mcq: [
    {
      question: 'Which of the following is an example of an infectious disease? 以下哪一項是傳染病的例子?',
      options: [{ label: 'A', text: 'Diabetes 糖尿病' }, { label: 'B', text: 'Influenza 流感' }, { label: 'C', text: 'Cancer 癌症' }, { label: 'D', text: 'Hypertension 高血壓' }],
      answer: 'B',
    },
    {
      question: 'How is malaria primarily transmitted? 瘧疾主要是如何傳播的?',
      options: [{ label: 'A', text: 'Through contaminated water 通過受污染的水' }, { label: 'B', text: 'Through mosquito bites 通過蚊蟲叮咬' }, { label: 'C', text: 'Through direct contact with an infected person 通過與感染者直接接觸' }, { label: 'D', text: 'Through airborne droplets 通過空氣中的飛沫' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a non-infectious disease? 以下哪一項是非傳染病?',
      options: [{ label: 'A', text: 'Tuberculosis 結核病' }, { label: 'B', text: 'HIV/AIDS 愛滋病' }, { label: 'C', text: 'Asthma 哮喘' }, { label: 'D', text: 'Cholera 霍亂' }],
      answer: 'C',
    },
    {
      question: 'What is the primary cause of type 2 diabetes? 二型糖尿病的主要原因是什麼?',
      options: [{ label: 'A', text: 'Bacterial infection 細菌感染' }, { label: 'B', text: 'Viral infection 病毒感染' }, { label: 'C', text: 'Lifestyle factors (e.g., poor diet, lack of exercise) 生活方式因素（例如不良飲食、缺乏運動）' }, { label: 'D', text: 'Genetic mutation only 僅基因突變' }],
      answer: 'C',
    },
    {
      question: 'Which of the following is NOT a method of preventing infectious diseases? 以下哪一項不是預防傳染病的方法?',
      options: [{ label: 'A', text: 'Vaccination 接種疫苗' }, { label: 'B', text: 'Hand washing 洗手' }, { label: 'C', text: 'Antibiotic overuse 濫用抗生素' }, { label: 'D', text: 'Quarantine 隔離' }],
      answer: 'C',
    },
    {
      question: 'What is the principle behind vaccination? 疫苗接種的原理是什麼?',
      options: [{ label: 'A', text: 'Killing all pathogens in the body 殺死體內所有病原體' }, { label: 'B', text: 'Stimulating the immune system to recognize and fight pathogens 刺激免疫系統識別並對抗病原體' }, { label: 'C', text: 'Replacing damaged cells with healthy ones 用健康細胞替換受損細胞' }, { label: 'D', text: 'Providing immediate immunity without any side effects 提供無任何副作用的即時免疫力' }],
      answer: 'B',
    },
    {
      question: 'Which of the following is a consequence of indiscriminate antibiotic use? 濫用抗生素的後果是什麼?',
      options: [{ label: 'A', text: 'Increased antibiotic resistance 抗生素抗藥性增加' }, { label: 'B', text: 'Improved immune system function 免疫系統功能改善' }, { label: 'C', text: 'Reduced risk of viral infections 降低病毒感染風險' }, { label: 'D', text: 'Faster recovery from all diseases 從所有疾病中更快恢復' }],
      answer: 'A',
    },
    {
      question: 'Which lifestyle factor is strongly linked to lung cancer? 哪種生活方式因素與肺癌密切相關?',
      options: [{ label: 'A', text: 'High sugar intake 高糖攝入' }, { label: 'B', text: 'Smoking 吸煙' }, { label: 'C', text: 'Lack of sleep 睡眠不足' }, { label: 'D', text: 'Excessive exercise 過度運動' }],
      answer: 'B',
    },
    {
      question: 'What is the primary method of controlling insulin-dependent diabetes? 控制胰島素依賴型糖尿病的主要方法是什麼?',
      options: [{ label: 'A', text: 'Regular insulin injections 定期注射胰島素' }, { label: 'B', text: 'Antibiotic treatment 抗生素治療' }, { label: 'C', text: 'Surgery 手術' }, { label: 'D', text: 'Vaccination 疫苗接種' }],
      answer: 'A',
    },
    {
      question: 'Which of the following is a benefit of vaccination? 以下哪一項是疫苗接種的好處?',
      options: [{ label: 'A', text: 'It cures all diseases 它能治癒所有疾病' }, { label: 'B', text: 'It prevents the spread of infectious diseases 它能預防傳染病的傳播' }, { label: 'C', text: 'It replaces the need for hygiene practices 它取代了衛生習慣的需要' }, { label: 'D', text: 'It guarantees lifelong immunity 它保證終身免疫力' }],
      answer: 'B',
    },
  ],
  true_false: [
    { statement: 'Infectious diseases can be transmitted from person to person. 傳染病可以從一個人傳播給另一個人。', answer: true },
    { statement: 'All non-infectious diseases are caused by genetic factors only. 所有非傳染病僅由遺傳因素引起。', answer: false },
    { statement: 'Vaccination is a method of primary prevention for infectious diseases. 疫苗接種是傳染病的一級預防方法。', answer: true },
  ],
  open_ended: [
    {
      question: 'Discuss the causal relationship between lifestyle choices and non-infectious diseases. 討論生活方式選擇與非傳染病之間的因果關係。',
    },
    {
      question: 'Explain how vaccination helps in preventing the spread of infectious diseases. 解釋疫苗接種如何幫助預防傳染病的傳播。',
    },
    {
      question: 'What are the social and ethical implications of indiscriminate antibiotic use? 濫用抗生素的社會和倫理影響是什麼?',
    },
  ],
};

export default function DiseasesPage() {
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
            Diseases
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">Students will acquire knowledge and understanding of what constitutes health; so that they can make informed decisions on the choice of lifestyles, habits, and disease prevention measures. This is designed to help students develop a positive attitude towards health and be aware of both individual and public responsibility for the maintenance of a healthy community. The routes of pathogen transmission and the causes of some non-infectious diseases are to be learned in association with the biological principles that may lead to their prevention and control. The physiological defence mechanisms employed by the human body to combat diseases, the principle of vaccination, the use of antibiotics, and some of the related issues, are also discussed.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={<Target className="h-5 w-5 text-emerald-600" />} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
                <li>Types of diseases (Infectious, Non-infectious)</li>
                <li>Infectious diseases (Examples, Causes, Transmission, Treatment)</li>
                <li>Non-infectious diseases (Examples, Causal links, Control)</li>
                <li>Prevention of diseases (Vaccination, Immunisation, Lifestyle, Community health)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Lightbulb className="h-5 w-5 text-amber-600" />} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
                <li>Examine images of pathogens.</li>
                <li>Conduct project on infectious diseases (transmission, symptoms, treatment, prevention); cancer incidence in HK.</li>
                <li>Conduct study on liver/lung cancer and lifestyles.</li>
                <li>Design poster/leaflet/web page on reducing cancer risk.</li>
                <li>Suggest ways to reduce cardiovascular disease incidence.</li>
                <li>Search info: diabetes; immunisation programmes and disease control; major infectious disease outbreaks in HK.</li>
                <li>Read stories about scientists\\' contributions to vaccination/penicillin.</li>
                <li>Study personal immunisation record.</li>
                <li>Use audiovisuals for antibiotic effects on bacteria.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<CheckSquare className="h-5 w-5 text-sky-600" />} title="Learning Outcomes" color="sky">
            <ul className="space-y-3 list-disc pl-5 marker:text-sky-500">
                <li>Understand concept of disease.</li>
                <li>Distinguish infectious/non-infectious diseases.</li>
                <li>Understand infectious disease transmission.</li>
                <li>Discuss reducing spread of common infectious diseases.</li>
                <li>Discuss consequences of indiscriminate antibiotic use.</li>
                <li>Be aware of various disease treatments.</li>
                <li>Discuss causal relationships between non-infectious diseases and lifestyles.</li>
                <li>Outline biological principles in controlling insulin-dependent diabetes.</li>
                <li>Outline vaccination principle and evaluate pros/risks.</li>
                <li>Be aware of personal responsibility in preventing disease transmission and community health importance.</li>
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
                <li>Be aware of the application of biological knowledge in maintaining a healthy community and its social, ethical, economic and environmental implications;</li>
                <li>Analyse ways in which societal needs have led to technological advances (e.g. treatment and prevention of diseases);</li>
                <li>Appreciate how modern technological advances and scientific discoveries contribute to the detection, diagnosis, treatment, prevention and monitoring of diseases (e.g. cancer and tuberculosis);</li>
                <li>Be aware of personal responsibility in preventing disease transmission.</li>
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