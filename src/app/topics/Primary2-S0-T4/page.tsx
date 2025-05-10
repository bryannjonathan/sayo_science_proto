import React from 'react';
import BackButton from '@/components/BackButton';

const FoodChainPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S0-T4 Food chain</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we'll learn about how energy moves through nature in something called a food chain. 
        We'll discover how plants and animals depend on each other for food and energy, and what happens when 
        one part of the chain is missing. Let's explore how all living things are connected!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2LE2: Be aware that animals obtain the energy required for life processes (growth and repair, activity, reproduction) through feeding</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first step in a food chain? 食物鏈的第一步是什麼?
            <br />
            <strong>A. Plants 植物 ✅</strong> B. Herbivores 草食動物 C. Carnivores 肉食動物 D. Sun 太陽
          </li>
          <li>
            Which animal eats plants? 哪種動物吃植物?
            <br />
            A. Lion 獅子 <strong>B. Rabbit 兔子 ✅</strong> C. Eagle 老鷹 D. Shark 鯊魚
          </li>
          <li>
            What do carnivores eat? 肉食動物吃什麼?
            <br />
            A. Plants 植物 <strong>B. Other animals 其他動物 ✅</strong> C. Rocks 石頭 D. Water 水
          </li>
          <li>
            Where do plants get their energy from? 植物從哪裡獲得能量?
            <br />
            A. From the soil 從土壤 <strong>B. From the sun 從太陽 ✅</strong> C. From animals 從動物 D. From the air 從空氣
          </li>
          <li>
            Which of these is a herbivore? 以下哪個是草食動物?
            <br />
            <strong>A. Cow 牛 ✅</strong> B. Fox 狐狸 C. Tiger 老虎 D. Snake 蛇
          </li>
          <li>
            What is a food chain? 什麼是食物鏈?
            <br />
            A. A chain made of food 用食物做成的鏈子 <strong>B. A way energy moves from plants to animals 能量從植物傳遞到動物的方式 ✅</strong> C. A type of animal 一種動物 D. A place where animals live 動物居住的地方
          </li>
          <li>
            Which animal is at the top of the food chain? 哪種動物位於食物鏈的頂端?
            <br />
            A. Grass 草 B. Rabbit 兔子 C. Fox 狐狸 <strong>D. Lion 獅子 ✅</strong>
          </li>
          <li>
            What happens if one part of the food chain is missing? 如果食物鏈的一部分缺失會發生什麼?
            <br />
            A. Nothing happens 什麼都不會發生 <strong>B. The whole food chain is affected 整個食物鏈都會受到影響 ✅</strong> C. Animals will grow bigger 動物會長得更大 D. Plants will disappear 植物會消失
          </li>
          <li>
            Which of these is NOT part of a food chain? 以下哪個不是食物鏈的一部分?
            <br />
            A. Sun 太陽 B. Plants 植物 C. Animals 動物 <strong>D. Rocks 石頭 ✅</strong>
          </li>
          <li>
            Why do animals need to eat? 動物為什麼需要進食?
            <br />
            <strong>A. To get energy 為了獲得能量 ✅</strong> B. To sleep 為了睡覺 C. To play 為了玩耍 D. To swim 為了游泳
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All animals eat plants. 所有動物都吃植物。 — <strong>False ❌</strong></li>
          <li>Plants get their energy from the sun. 植物從太陽獲得能量。 — <strong>True ✅</strong></li>
          <li>A food chain always starts with animals. 食物鏈總是從動物開始。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give an example of a simple food chain. 舉一個簡單食物鏈的例子。</li>
          <li>Why are plants important in a food chain? 為什麼植物在食物鏈中很重要?</li>
          <li>What would happen if there were no plants in a food chain? 如果食物鏈中沒有植物會發生什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default FoodChainPage;