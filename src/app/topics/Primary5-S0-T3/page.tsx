import React from 'react';
import BackButton from '@/components/BackButton';

const CommonMicroorganismsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S0-T3 Common microorganisms</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exploration of common microorganisms! In this topic, we'll discover tiny living things that are all around us - some helpful, some harmful. We'll learn about bacteria, fungi, and viruses, how antibiotics work, and the important roles microorganisms play in our world.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5LF1: Recognise common types of microorganisms (including bacteria, fungi, viruses)</li>
          <li>5LF2: Recognise the uses of antibiotics and the effects of inappropriate use of antibiotics</li>
          <li>5LF3: Recognise the benefits (e.g. probiotics inhibiting the growth of harmful bacteria, degrading pollutants) and negative impacts (e.g. causing diseases) of microorganisms to humans</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Which of the following is a type of microorganism? 以下哪一種是微生物的類型?
            <br />
            <strong>A. Bacteria 細菌 ✅</strong> B. Rock 岩石 C. Water 水 D. Sand 沙子
          </li>
          <li>
            Question: What is the main use of antibiotics? 抗生素的主要用途是什麼?
            <br />
            <strong>A. To kill bacteria 殺死細菌 ✅</strong> B. To clean water 清潔水 C. To grow plants 種植植物 D. To cook food 烹飪食物
          </li>
          <li>
            Question: Which microorganism is used to make yogurt? 哪種微生物用於製作酸奶?
            <br />
            A. Fungi 真菌 B. Viruses 病毒 <strong>C. Bacteria 細菌 ✅</strong> D. Algae 藻類
          </li>
          <li>
            Question: What can happen if antibiotics are used inappropriately? 如果不當使用抗生素會發生什麼?
            <br />
            <strong>A. Bacteria become resistant 細菌產生抗藥性 ✅</strong> B. Plants grow faster 植物生長更快 C. Water becomes cleaner 水變得更乾淨 D. Food tastes better 食物味道更好
          </li>
          <li>
            Question: Which of the following is a benefit of microorganisms? 以下哪一項是微生物的好處?
            <br />
            A. Causing diseases 引起疾病 <strong>B. Degrading pollutants 降解污染物 ✅</strong> C. Making water dirty 使水變髒 D. Destroying food 破壞食物
          </li>
          <li>
            Question: What type of microorganism causes the flu? 哪種微生物會引起流感?
            <br />
            A. Bacteria 細菌 B. Fungi 真菌 <strong>C. Virus 病毒 ✅</strong> D. Algae 藻類
          </li>
          <li>
            Question: Which microorganism helps in making bread rise? 哪種微生物有助於麵包發酵?
            <br />
            A. Bacteria 細菌 <strong>B. Yeast (a type of fungus) 酵母（一種真菌） ✅</strong> C. Virus 病毒 D. Algae 藻類
          </li>
          <li>
            Question: What is a negative impact of microorganisms? 微生物的負面影響是什麼?
            <br />
            A. Making food 製作食物 <strong>B. Causing diseases 引起疾病 ✅</strong> C. Cleaning water 清潔水 D. Helping plants grow 幫助植物生長
          </li>
          <li>
            Question: What are probiotics? 什麼是益生菌?
            <br />
            A. Harmful bacteria 有害細菌 <strong>B. Good bacteria that help digestion 有助消化的有益細菌 ✅</strong> C. A type of virus 一種病毒 D. A type of algae 一種藻類
          </li>
          <li>
            Question: Which of the following is NOT a microorganism? 以下哪一項不是微生物?
            <br />
            A. Bacteria 細菌 B. Fungi 真菌 C. Virus 病毒 <strong>D. Tree 樹 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All microorganisms are harmful to humans. 所有微生物對人類都是有害的。 — <strong>False ❌</strong></li>
          <li>Antibiotics can kill viruses. 抗生素可以殺死病毒。 — <strong>False ❌</strong></li>
          <li>Probiotics are good bacteria that help our digestion. 益生菌是有助於消化的有益細菌。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of how microorganisms are beneficial to humans. 舉出兩個微生物對人類有益的示例。</li>
          <li>Explain why inappropriate use of antibiotics is a problem. 解釋為什麼不當使用抗生素是一個問題。</li>
          <li>Name one disease caused by microorganisms and describe how it affects people. 列出一種由微生物引起的疾病並描述它如何影響人們。</li>
        </ul>
      </section>
    </main>
  );
};

export default CommonMicroorganismsPage;