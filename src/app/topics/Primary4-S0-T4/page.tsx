import React from 'react';
import BackButton from '@/components/BackButton';

const EcologicalEnvironmentPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S0-T4 Ecological environment</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Ecological environments! In this topic, we'll explore different natural habitats around the world, learn about the plants and animals that live there, and discover how living things compete for resources in ecosystems. Get ready to journey through rainforests, deserts, grasslands, and polar regions!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4LE1: Be aware of some different natural environments (e.g. tropical rainforest, temperate grassland, polar regions, desert)</li>
          <li>4LE2: Relate common animals and plants to the natural environments</li>
          <li>4LE5: Understand that some living things in an ecosystem compete with each other for resources (e.g. light, food, living space)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which natural environment is known for its extremely cold temperatures and ice-covered landscapes? 哪種自然環境以其極冷的溫度和冰覆蓋的景觀而聞名?
            <br />
            A. Tropical rainforest 熱帶雨林 B. Desert 沙漠 <strong>C. Polar regions 極地 ✅</strong> D. Temperate grassland 溫帶草原
          </li>
          <li>
            Which animal is commonly found in a tropical rainforest? 哪種動物常見於熱帶雨林?
            <br />
            A. Polar bear 北極熊 B. Kangaroo 袋鼠 <strong>C. Toucan 巨嘴鳥 ✅</strong> D. Camel 駱駝
          </li>
          <li>
            What do plants in a desert need to survive? 沙漠中的植物需要什麼來生存?
            <br />
            A. Lots of water 大量的水 <strong>B. Very little water 非常少的水 ✅</strong> C. Cold temperatures 寒冷的溫度 D. No sunlight 沒有陽光
          </li>
          <li>
            Which of these is a characteristic of temperate grasslands? 以下哪項是溫帶草原的特徵?
            <br />
            A. Tall trees 高大的樹木 B. Lots of rainfall 大量的降雨 <strong>C. Flat land with grasses 平坦的草地 ✅</strong> D. Very hot all year 全年非常炎熱
          </li>
          <li>
            What do animals in an ecosystem compete for? 生態系統中的動物競爭什麼?
            <br />
            <strong>A. Food and living space 食物和生存空間 ✅</strong> B. Only food 只有食物 C. Only living space 只有生存空間 D. Nothing 沒有競爭
          </li>
          <li>
            Which plant is adapted to live in a desert? 哪種植物適應在沙漠中生活?
            <br />
            <strong>A. Cactus 仙人掌 ✅</strong> B. Oak tree 橡樹 C. Fern 蕨類植物 D. Moss 苔蘚
          </li>
          <li>
            Which animal is NOT found in polar regions? 哪種動物不在極地地區?
            <br />
            A. Penguin 企鵝 B. Polar bear 北極熊 C. Seal 海豹 <strong>D. Lion 獅子 ✅</strong>
          </li>
          <li>
            What is the main resource plants compete for in a dense forest? 在茂密的森林中，植物主要競爭什麼資源?
            <br />
            A. Food 食物 B. Water 水 <strong>C. Light 陽光 ✅</strong> D. Air 空氣
          </li>
          <li>
            Which natural environment has the most biodiversity? 哪種自然環境的生物多樣性最豐富?
            <br />
            A. Desert 沙漠 <strong>B. Tropical rainforest 熱帶雨林 ✅</strong> C. Polar regions 極地 D. Temperate grassland 溫帶草原
          </li>
          <li>
            Why do animals compete in an ecosystem? 為什麼動物在生態系統中競爭?
            <br />
            A. To have fun 為了玩樂 <strong>B. To survive and reproduce 為了生存和繁殖 ✅</strong> C. To make friends 為了交朋友 D. To explore new places 為了探索新地方
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All plants need the same amount of water to survive. 所有植物都需要相同的水量來生存。 — <strong>False ❌</strong></li>
          <li>Polar bears are adapted to live in hot deserts. 北極熊適應生活在炎熱的沙漠中。 — <strong>False ❌</strong></li>
          <li>Animals in an ecosystem often compete for food and space. 生態系統中的動物經常競爭食物和空間。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two animals that live in the polar regions and describe how they survive in the cold. 列出兩種生活在極地地區的動物，並描述它們如何在寒冷中生存。</li>
          <li>Explain why plants in a desert have thick stems or leaves. 解釋為什麼沙漠中的植物有粗莖或厚葉。</li>
          <li>Give an example of how animals compete for resources in an ecosystem. 舉一個例子說明動物如何在生態系統中競爭資源。</li>
        </ul>
      </section>
    </main>
  );
};

export default EcologicalEnvironmentPage;