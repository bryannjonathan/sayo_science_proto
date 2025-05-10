import React from 'react';
import BackButton from '@/components/BackButton';

const CommunicableAndNonCommunicableDiseasesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S0-T0 Communicable and non-communicable diseases</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about different types of diseases that can affect our health. 
        We'll explore communicable diseases that can spread from person to person, and non-communicable 
        diseases that aren't contagious. You'll discover how diseases spread, their symptoms, and most 
        importantly, how we can prevent them to stay healthy!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4LA1: Recognise common communicable diseases (e.g. influenza, cholera) and their major causes and symptoms</li>
          <li>4LA2: Recognise the transmission routes of communicable diseases (e.g. droplet transmission, vector transmission, contact transmission, food transmission, blood transmission) and their prevention</li>
          <li>4LA3: Recognise common non-communicable diseases (e.g. heart diseases, cancer) and their main causes, symptoms and prevention</li>
          <li>4LA4: Realise that scientific progress can help respond to large-scale communicable diseases (e.g. the COVID-19 pandemic), protect the lives and health of people, and promote biosecurity</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is a communicable disease? 以下哪一種是傳染病?
            <br />
            <strong>A. Influenza 流感 ✅</strong> B. Heart disease 心臟病 C. Cancer 癌症 D. Diabetes 糖尿病
          </li>
          <li>
            How is cholera mainly transmitted? 霍亂主要通過什麼途徑傳播?
            <br />
            A. Droplet transmission 飛沫傳播 <strong>B. Food and water contamination 食物和水污染 ✅</strong> C. Vector transmission 媒介傳播 D. Blood transmission 血液傳播
          </li>
          <li>
            Which of the following is a symptom of influenza? 以下哪一項是流感的症狀?
            <br />
            A. High fever 高燒 B. Coughing 咳嗽 C. Sore throat 喉嚨痛 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            What is a common prevention method for communicable diseases? 傳染病的常見預防方法是什麼?
            <br />
            A. Washing hands frequently 經常洗手 B. Eating healthy food 吃健康食物 C. Exercising regularly 定期運動 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which of the following is a non-communicable disease? 以下哪一種是非傳染病?
            <br />
            A. Cholera 霍亂 B. Influenza 流感 <strong>C. Heart disease 心臟病 ✅</strong> D. COVID-19 新冠肺炎
          </li>
          <li>
            What is a main cause of heart disease? 心臟病的主要原因是什麼?
            <br />
            A. Bacteria 細菌 B. Viruses 病毒 <strong>C. Unhealthy diet 不健康飲食 ✅</strong> D. Mosquito bites 蚊子叮咬
          </li>
          <li>
            How can we prevent non-communicable diseases? 我們如何預防非傳染病?
            <br />
            A. Regular exercise 定期運動 B. Balanced diet 均衡飲食 C. Avoiding smoking 避免吸煙 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which of the following is an example of vector transmission? 以下哪一項是媒介傳播的例子?
            <br />
            A. Coughing 咳嗽 <strong>B. Mosquito bites 蚊子叮咬 ✅</strong> C. Shaking hands 握手 D. Eating contaminated food 食用受污染的食物
          </li>
          <li>
            What scientific advancement helped respond to the COVID-19 pandemic? 什麼科學進步幫助應對新冠肺炎大流行?
            <br />
            <strong>A. Vaccines 疫苗 ✅</strong> B. Antibiotics 抗生素 C. Painkillers 止痛藥 D. Vitamins 維生素
          </li>
          <li>
            Which of the following is NOT a symptom of cholera? 以下哪一項不是霍亂的症狀?
            <br />
            A. Severe diarrhea 嚴重腹瀉 B. Vomiting 嘔吐 <strong>C. High fever 高燒 ✅</strong> D. Dehydration 脫水
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Communicable diseases can spread from person to person. 傳染病可以人傳人。 — <strong>True ✅</strong></li>
          <li>Cancer is a communicable disease. 癌症是一種傳染病。 — <strong>False ❌</strong></li>
          <li>Washing hands can help prevent the spread of diseases. 洗手可以幫助預防疾病傳播。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two common communicable diseases and their symptoms. 列舉兩種常見的傳染病及其症狀。</li>
          <li>Explain one way to prevent the spread of communicable diseases. 解釋一種預防傳染病傳播的方法。</li>
          <li>Why is it important to have a balanced diet to prevent non-communicable diseases? 為什麼均衡飲食對預防非傳染病很重要?</li>
        </ul>
      </section>
    </main>
  );
};

export default CommunicableAndNonCommunicableDiseasesPage;