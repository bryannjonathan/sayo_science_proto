import React from 'react';
import BackButton from '@/components/BackButton';

const PhysicalChangeAndChemicalChangePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S1-T1 Physical change and chemical change</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the differences between physical and chemical changes in matter. 
        You'll learn about combustion, its requirements, and how fire-fighting equipment works. 
        We'll also study the impact of hill fires and how to prevent them. 
        Get ready to discover how matter transforms around us!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6MA3: Be aware that combustion requires oxygen, and produces carbon dioxide and water</li>
          <li>6MA4: Recognise the necessary conditions for combustion, and the working principles of fire-fighting equipment (e.g. fire extinguishers, fire blankets, etc.)</li>
          <li>6MA5: Recognise the occurrence, impact and prevention of hill fires</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is produced during combustion? 燃燒時會產生什麼?
            <br />
            <strong>A. Carbon dioxide and water 二氧化碳和水 ✅</strong> B. Oxygen and nitrogen 氧氣和氮氣 C. Hydrogen and helium 氫氣和氦氣 D. Methane and ammonia 甲烷和氨氣
          </li>
          <li>
            Which of the following is NOT a necessary condition for combustion? 以下哪一項不是燃燒的必要條件?
            <br />
            A. Fuel 燃料 B. Oxygen 氧氣 C. Heat 熱量 <strong>D. Light 光 ✅</strong>
          </li>
          <li>
            What does a fire blanket do? 防火毯的作用是什麼?
            <br />
            <strong>A. Cuts off oxygen supply 切斷氧氣供應 ✅</strong> B. Cools down the fire 冷卻火源 C. Absorbs smoke 吸收煙霧 D. Produces water 產生水
          </li>
          <li>
            Which gas is required for combustion? 燃燒需要哪種氣體?
            <br />
            <strong>A. Oxygen 氧氣 ✅</strong> B. Carbon dioxide 二氧化碳 C. Nitrogen 氮氣 D. Hydrogen 氫氣
          </li>
          <li>
            What is the main purpose of a fire extinguisher? 滅火器的主要用途是什麼?
            <br />
            A. To start a fire 點火 <strong>B. To put out a fire 滅火 ✅</strong> C. To measure temperature 測量溫度 D. To produce oxygen 產生氧氣
          </li>
          <li>
            Which of the following can prevent hill fires? 以下哪一項可以預防山火?
            <br />
            A. Leaving campfires unattended 無人看管營火 B. Throwing cigarette butts in the forest 在森林中丟煙頭 <strong>C. Clearing dry leaves and debris 清理乾葉和碎屑 ✅</strong> D. Burning trash in dry weather 在乾燥天氣焚燒垃圾
          </li>
          <li>
            What is the impact of hill fires? 山火的影響是什麼?
            <br />
            <strong>A. Destroys wildlife habitats 破壞野生動物棲息地 ✅</strong> B. Improves air quality 改善空氣質量 C. Increases rainfall 增加降雨量 D. Makes soil more fertile 使土壤更肥沃
          </li>
          <li>
            Which of the following is a chemical change? 以下哪一項是化學變化?
            <br />
            A. Melting ice 冰融化 <strong>B. Burning paper 紙張燃燒 ✅</strong> C. Breaking glass 玻璃破碎 D. Dissolving sugar 溶解糖
          </li>
          <li>
            What is the main principle of fire-fighting equipment? 滅火設備的主要原理是什麼?
            <br />
            A. To add more oxygen 增加氧氣 <strong>B. To remove one or more conditions for combustion 去除一個或多個燃燒條件 ✅</strong> C. To increase the temperature 提高溫度 D. To produce more fuel 產生更多燃料
          </li>
          <li>
            Which of the following is a physical change? 以下哪一項是物理變化?
            <br />
            A. Rusting iron 鐵生鏽 B. Baking a cake 烤蛋糕 <strong>C. Cutting paper 剪紙 ✅</strong> D. Burning wood 燃燒木材
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Combustion can occur without oxygen. 燃燒可以在沒有氧氣的情況下發生。 — <strong>False ❌</strong></li>
          <li>A fire blanket works by cutting off the oxygen supply to the fire. 防火毯通過切斷火源的氧氣供應來滅火。 — <strong>True ✅</strong></li>
          <li>Hill fires have no impact on the environment. 山火對環境沒有影響。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why oxygen is necessary for combustion. 解釋為什麼燃燒需要氧氣。</li>
          <li>Describe two ways to prevent hill fires. 描述兩種預防山火的方法。</li>
          <li>What are the differences between physical and chemical changes? Give one example of each. 物理變化和化學變化有什麼區別？各舉一個例子。</li>
        </ul>
      </section>
    </main>
  );
};

export default PhysicalChangeAndChemicalChangePage;