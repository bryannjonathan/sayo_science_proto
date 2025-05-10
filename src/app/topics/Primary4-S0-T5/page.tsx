import React from 'react';
import BackButton from '@/components/BackButton';

const FoodChainPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S0-T5 Food chain</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how living things depend on each other for food. We'll learn about different roles in a food chain, from plants that make their own food to animals that eat plants or other animals. Discover how energy flows through nature and what happens when parts of the food chain are missing!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4LE3: Describe the role of each living thing in a simple food chain (e.g. plants produce their own food, some animals eat plants, some animals eat other animals)</li>
          <li>4LE4: Identify common predators and their prey, and describe their relationships</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the role of plants in a food chain? 植物在食物鏈中的角色是什麼?
            <br />
            <strong>A. They produce their own food 它們自己製造食物 ✅</strong> B. They eat other animals 它們吃其他動物 C. They break down dead organisms 它們分解死去的生物 D. They do not have a role 它們沒有角色
          </li>
          <li>
            Which of the following is a predator-prey relationship? 以下哪個是捕食者與獵物的關係?
            <br />
            A. Lion and grass 獅子和草 B. Rabbit and carrot 兔子和胡蘿蔔 <strong>C. Fox and rabbit 狐狸和兔子 ✅</strong> D. Tree and sunlight 樹和陽光
          </li>
          <li>
            What do we call animals that eat plants? 我們稱吃植物的動物為什麼?
            <br />
            A. Producers 生產者 <strong>B. Herbivores 草食動物 ✅</strong> C. Carnivores 肉食動物 D. Decomposers 分解者
          </li>
          <li>
            Which of the following is a producer in a food chain? 以下哪個是食物鏈中的生產者?
            <br />
            <strong>A. Grass 草 ✅</strong> B. Rabbit 兔子 C. Fox 狐狸 D. Mushroom 蘑菇
          </li>
          <li>
            What is the role of decomposers in a food chain? 分解者在食物鏈中的角色是什麼?
            <br />
            A. They produce food for others 它們為其他生物製造食物 <strong>B. They break down dead organisms 它們分解死去的生物 ✅</strong> C. They hunt other animals 它們獵捕其他動物 D. They only eat plants 它們只吃植物
          </li>
          <li>
            Which animal is a predator in this food chain: grass → rabbit → fox? 在食物鏈「草 → 兔子 → 狐狸」中，哪個動物是捕食者?
            <br />
            A. Grass 草 B. Rabbit 兔子 <strong>C. Fox 狐狸 ✅</strong> D. None of the above 以上皆非
          </li>
          <li>
            What do carnivores eat? 肉食動物吃什麼?
            <br />
            A. Only plants 只吃植物 <strong>B. Only other animals 只吃其他動物 ✅</strong> C. Both plants and animals 植物和動物都吃 D. Nothing 什麼都不吃
          </li>
          <li>
            Which of the following is NOT part of a food chain? 以下哪個不屬於食物鏈的一部分?
            <br />
            <strong>A. Sunlight 陽光 ✅</strong> B. Grass 草 C. Rabbit 兔子 D. Fox 狐狸
          </li>
          <li>
            What happens if all the plants in a food chain die? 如果食物鏈中的所有植物都死亡，會發生什麼?
            <br />
            A. Nothing changes 沒有任何變化 B. Only herbivores are affected 只有草食動物受影響 <strong>C. The entire food chain is affected 整個食物鏈都會受影響 ✅</strong> D. Only carnivores are affected 只有肉食動物受影響
          </li>
          <li>
            Which of the following is an example of a prey animal? 以下哪個是獵物動物的例子?
            <br />
            A. Lion 獅子 B. Eagle 老鷹 <strong>C. Rabbit 兔子 ✅</strong> D. Shark 鯊魚
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All animals in a food chain are predators. 食物鏈中的所有動物都是捕食者。 — <strong>False ❌</strong></li>
          <li>Plants are producers because they can make their own food. 植物是生產者，因為它們可以自己製造食物。 — <strong>True ✅</strong></li>
          <li>A food chain always starts with a carnivore. 食物鏈總是以肉食動物開始。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give an example of a simple food chain and describe the role of each living thing in it. 舉一個簡單食物鏈的例子，並描述其中每個生物的角色。</li>
          <li>Why are plants important in a food chain? 為什麼植物在食物鏈中很重要?</li>
          <li>What might happen if a predator is removed from a food chain? 如果從食物鏈中移除一個捕食者，可能會發生什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default FoodChainPage;