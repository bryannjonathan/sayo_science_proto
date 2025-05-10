import React from 'react';
import BackButton from '@/components/BackButton';

const DifferenceBetweenLivingThingsAndNonLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S0-T1 Difference between living things and non-living things</h1>
      
      <p className="text-gray-700 mb-6">
        Let's explore the wonderful world of living things! In this topic, we'll learn how to tell the difference between things that are alive (like plants and animals) and things that are not alive (like rocks and toys). We'll discover what living things need to survive and how we can take care of them.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1LB1: Be aware that both animals and plants are living things</li>
          <li>1LB2: Give examples of common animals and plants found in Hong Kong</li>
          <li>1LB3: List the survival conditions for animals and plants (e.g. air, water)</li>
          <li>1LB4: Describe some simple common characteristics of animals (e.g. movement)</li>
          <li>1LB5: Respect and care for animals and plants</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Which of the following is a living thing? 以下哪一個是生物?
            <br />
            <strong>A. Dog 狗 ✅</strong> B. Rock 石頭 C. Toy car 玩具車 D. Book 書
          </li>
          <li>
            Question: What do plants need to survive? 植物需要什麼來生存?
            <br />
            <strong>A. Air and water 空氣和水 ✅</strong> B. Only sunlight 只有陽光 C. Only soil 只有土壤 D. Nothing 什麼都不需要
          </li>
          <li>
            Question: Which of these is a plant found in Hong Kong? 以下哪一個是香港常見的植物?
            <br />
            <strong>A. Bauhinia flower 洋紫荊花 ✅</strong> B. Polar bear 北極熊 C. Cactus 仙人掌 D. Pineapple 菠蘿
          </li>
          <li>
            Question: How do animals move? 動物如何移動?
            <br />
            <strong>A. By walking, flying, or swimming 通過行走、飛行或游泳 ✅</strong> B. By staying still 保持靜止 C. By growing taller 長高 D. By changing color 改變顏色
          </li>
          <li>
            Question: Which of these is NOT a living thing? 以下哪一個不是生物?
            <br />
            A. Tree 樹 B. Butterfly 蝴蝶 <strong>C. Chair 椅子 ✅</strong> D. Fish 魚
          </li>
          <li>
            Question: What do animals need to survive? 動物需要什麼來生存?
            <br />
            <strong>A. Food and water 食物和水 ✅</strong> B. Only air 只有空氣 C. Only sunlight 只有陽光 D. Nothing 什麼都不需要
          </li>
          <li>
            Question: Which of these is an animal found in Hong Kong? 以下哪一個是香港常見的動物?
            <br />
            <strong>A. Panda 熊貓 ✅</strong> B. Elephant 大象 C. Lion 獅子 D. Pig 豬
          </li>
          <li>
            Question: What is a common characteristic of living things? 生物的共同特徵是什麼?
            <br />
            <strong>A. They grow and change 它們會成長和變化 ✅</strong> B. They never change 它們永遠不變 C. They are always small 它們總是很小 D. They don't need food 它們不需要食物
          </li>
          <li>
            Question: Which of these is a way to care for plants? 以下哪一個是照顧植物的方法?
            <br />
            <strong>A. Watering them 給它們澆水 ✅</strong> B. Breaking their leaves 折斷它們的葉子 C. Not giving them sunlight 不給它們陽光 D. Pulling them out of the soil 把它們從土壤中拔出來
          </li>
          <li>
            Question: Why should we respect animals? 為什麼我們應該尊重動物?
            <br />
            <strong>A. Because they are living things 因為它們是生物 ✅</strong> B. Because they are not important 因為它們不重要 C. Because they don't feel anything 因為它們沒有感覺 D. Because they are not alive 因為它們沒有生命
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A chair is a living thing. 椅子是生物。 — <strong>False ❌</strong></li>
          <li>Plants need water to survive. 植物需要水來生存。 — <strong>True ✅</strong></li>
          <li>Animals do not need air to live. 動物不需要空氣來生存。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two living things and two non-living things. 列出兩種生物和兩種非生物。</li>
          <li>What are two things plants need to grow? 植物需要哪兩樣東西來生長?</li>
          <li>How can you show respect for animals and plants? 你如何表現出對動植物的尊重?</li>
        </ul>
      </section>
    </main>
  );
};

export default DifferenceBetweenLivingThingsAndNonLivingThingsPage;