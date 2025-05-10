import React from 'react';
import BackButton from '@/components/BackButton';

const FoodChainPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S0-T3 Food chain</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on food chains! In this topic, we'll explore how plants produce food through photosynthesis and how energy flows through ecosystems. You'll learn about the important role plants play as producers and how all living things depend on this process for survival.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6LE1: Be aware that photosynthesis is the process by which plants produce food</li>
          <li>6LE2: Be aware of the conditions necessary for photosynthesis in plants (sunlight, water, carbon dioxide, chlorophyll)</li>
          <li>6LE3: State the importance of photosynthesis in plants to other living things</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the process by which plants produce food called? 植物製造食物的過程叫什麼?
            <br />
            <strong>A. Photosynthesis 光合作用 ✅</strong> B. Respiration 呼吸作用 C. Digestion 消化作用 D. Transpiration 蒸騰作用
          </li>
          <li>
            Which of the following is NOT necessary for photosynthesis? 以下哪一項不是光合作用所需的條件?
            <br />
            A. Sunlight 陽光 B. Water 水 <strong>C. Oxygen 氧氣 ✅</strong> D. Carbon dioxide 二氧化碳
          </li>
          <li>
            What is the green pigment in plants that absorbs sunlight called? 植物中吸收陽光的綠色色素叫什麼?
            <br />
            <strong>A. Chlorophyll 葉綠素 ✅</strong> B. Hemoglobin 血紅蛋白 C. Melanin 黑色素 D. Carotene 胡蘿蔔素
          </li>
          <li>
            Which gas do plants take in for photosynthesis? 植物在光合作用中吸收哪種氣體?
            <br />
            A. Oxygen 氧氣 <strong>B. Carbon dioxide 二氧化碳 ✅</strong> C. Nitrogen 氮氣 D. Hydrogen 氫氣
          </li>
          <li>
            What do plants release as a by-product of photosynthesis? 植物在光合作用中釋放什麼副產品?
            <br />
            A. Carbon dioxide 二氧化碳 <strong>B. Oxygen 氧氣 ✅</strong> C. Nitrogen 氮氣 D. Water vapor 水蒸氣
          </li>
          <li>
            Which of the following organisms is a producer in the food chain? 以下哪一種生物是食物鏈中的生產者?
            <br />
            <strong>A. Grass 草 ✅</strong> B. Rabbit 兔子 C. Fox 狐狸 D. Eagle 老鷹
          </li>
          <li>
            What is the main source of energy for photosynthesis? 光合作用的主要能量來源是什麼?
            <br />
            A. Moonlight 月光 <strong>B. Sunlight 陽光 ✅</strong> C. Electricity 電能 D. Heat 熱能
          </li>
          <li>
            Which of the following is a consumer in the food chain? 以下哪一種生物是食物鏈中的消費者?
            <br />
            A. Tree 樹 <strong>B. Grasshopper 蚱蜢 ✅</strong> C. Algae 藻類 D. Rose bush 玫瑰叢
          </li>
          <li>
            Why is photosynthesis important to other living things? 為什麼光合作用對其他生物很重要?
            <br />
            <strong>A. It produces oxygen and food 它產生氧氣和食物 ✅</strong> B. It produces carbon dioxide 它產生二氧化碳 C. It produces water 它產生水 D. It produces nitrogen 它產生氮氣
          </li>
          <li>
            What would happen if plants stopped performing photosynthesis? 如果植物停止進行光合作用會發生什麼?
            <br />
            <strong>A. Animals would have no food and oxygen 動物將沒有食物和氧氣 ✅</strong> B. Animals would have more food 動物將有更多食物 C. Nothing would change 什麼都不會改變 D. Plants would grow faster 植物會長得更快
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Plants do not need sunlight to perform photosynthesis. 植物不需要陽光來進行光合作用。 — <strong>False ❌</strong></li>
          <li>Photosynthesis produces oxygen as a by-product. 光合作用產生氧氣作為副產品。 — <strong>True ✅</strong></li>
          <li>Animals can perform photosynthesis just like plants. 動物可以像植物一樣進行光合作用。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why plants are called producers in the food chain. 解釋為什麼植物被稱為食物鏈中的生產者。</li>
          <li>Describe the conditions necessary for photosynthesis to occur. 描述光合作用發生所需的條件。</li>
          <li>How does photosynthesis benefit animals and humans? 光合作用如何使動物和人類受益?</li>
        </ul>
      </section>
    </main>
  );
};

export default FoodChainPage;