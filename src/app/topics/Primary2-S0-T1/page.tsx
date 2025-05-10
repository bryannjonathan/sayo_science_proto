import React from 'react';
import BackButton from '@/components/BackButton';

const StructuresOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S0-T1 Structures of living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about the different parts of plants and their functions. 
        We'll discover how leaves make food, how roots help the plant stay in the ground and get water, 
        and how stems support the plant and transport important things it needs to grow.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2LB2: State the major structures in plants and their functions (leaves make food, roots absorb water and nutrients and anchor plants, stems support the plant and transport water, food and nutrients)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which part of the plant makes food? 植物的哪個部分負責製造食物?
            <br />
            <strong>A. Leaves 葉子 ✅</strong> B. Roots 根 C. Stem 莖 D. Flower 花
          </li>
          <li>
            What is the function of roots? 根的功能是什麼?
            <br />
            A. Make food 製造食物 <strong>B. Absorb water and nutrients 吸收水分和養分 ✅</strong> C. Support the plant 支持植物 D. Transport food 運輸食物
          </li>
          <li>
            Which part of the plant transports water and nutrients? 植物的哪個部分負責運輸水分和養分?
            <br />
            A. Leaves 葉子 B. Roots 根 <strong>C. Stem 莖 ✅</strong> D. Flower 花
          </li>
          <li>
            What do leaves need to make food? 葉子需要什麼來製造食物?
            <br />
            <strong>A. Water and sunlight 水和陽光 ✅</strong> B. Soil and air 土壤和空氣 C. Roots and stem 根和莖 D. Flowers and fruits 花和果實
          </li>
          <li>
            Which part of the plant anchors it to the ground? 植物的哪個部分將它固定在地上?
            <br />
            A. Leaves 葉子 <strong>B. Roots 根 ✅</strong> C. Stem 莖 D. Flower 花
          </li>
          <li>
            What is the main function of the stem? 莖的主要功能是什麼?
            <br />
            A. Make food 製造食物 B. Absorb water 吸收水分 <strong>C. Support the plant and transport water and nutrients 支持植物並運輸水分和養分 ✅</strong> D. Produce flowers 產生花朵
          </li>
          <li>
            Which part of the plant is usually green and flat? 植物的哪個部分通常是綠色且扁平的?
            <br />
            A. Roots 根 B. Stem 莖 <strong>C. Leaves 葉子 ✅</strong> D. Flower 花
          </li>
          <li>
            What do roots absorb from the soil? 根從土壤中吸收什麼?
            <br />
            A. Food 食物 <strong>B. Water and nutrients 水分和養分 ✅</strong> C. Sunlight 陽光 D. Air 空氣
          </li>
          <li>
            Which part of the plant is often found underground? 植物的哪個部分通常在地下?
            <br />
            A. Leaves 葉子 <strong>B. Roots 根 ✅</strong> C. Stem 莖 D. Flower 花
          </li>
          <li>
            What is the function of leaves? 葉子的功能是什麼?
            <br />
            A. Anchor the plant 固定植物 <strong>B. Make food 製造食物 ✅</strong> C. Transport water 運輸水分 D. Produce seeds 產生種子
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Leaves are the part of the plant that makes food. 葉子是植物製造食物的部分。 — <strong>True ✅</strong></li>
          <li>Roots help the plant to stand upright. 根幫助植物直立。 — <strong>False ❌</strong></li>
          <li>The stem transports water and nutrients in the plant. 莖在植物中運輸水分和養分。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two functions of the roots. 列出根的兩個功能。</li>
          <li>Why are leaves important to a plant? 為什麼葉子對植物很重要?</li>
          <li>What would happen if a plant did not have a stem? 如果植物沒有莖會發生什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default StructuresOfLivingThingsPage;