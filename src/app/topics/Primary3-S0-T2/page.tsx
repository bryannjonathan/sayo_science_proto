import React from 'react';
import BackButton from '@/components/BackButton';

const StructuresOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S0-T2 Structures of living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the amazing structures that make up living things! We'll learn about the important parts of mammals like their bones, muscles, and organs, as well as the beautiful parts of flowers. You'll discover how each structure has special functions that help living things survive and grow.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3LB4: Using mammals as an example, be aware of the major structures of some animals, including bones, muscles, lungs, heart, and stomach, and their functions</li>
          <li>3LB6: Be aware of the major parts in flowers, including sepals, corolla, stamens and pistils, and their functions</li>
          <li>3LB7: Appreciate the diversity of life</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which part of a mammal helps it to breathe? 哺乳動物的哪個部分幫助牠呼吸?
            <br />
            A. Heart 心臟 <strong>B. Lungs 肺 ✅</strong> C. Stomach 胃 D. Muscles 肌肉
          </li>
          <li>
            What is the function of the heart in mammals? 哺乳動物心臟的功能是什麼?
            <br />
            A. To digest food 消化食物 <strong>B. To pump blood 泵送血液 ✅</strong> C. To help with movement 幫助運動 D. To produce oxygen 產生氧氣
          </li>
          <li>
            Which part of a flower attracts pollinators? 花的哪個部分吸引傳粉者?
            <br />
            A. Sepals 萼片 <strong>B. Corolla 花冠 ✅</strong> C. Stamens 雄蕊 D. Pistils 雌蕊
          </li>
          <li>
            What is the function of the stomach in mammals? 哺乳動物胃的功能是什麼?
            <br />
            A. To breathe 呼吸 <strong>B. To digest food 消化食物 ✅</strong> C. To pump blood 泵送血液 D. To support the body 支撐身體
          </li>
          <li>
            Which part of a flower produces pollen? 花的哪個部分產生花粉?
            <br />
            A. Sepals 萼片 B. Corolla 花冠 <strong>C. Stamens 雄蕊 ✅</strong> D. Pistils 雌蕊
          </li>
          <li>
            What is the function of bones in mammals? 哺乳動物骨骼的功能是什麼?
            <br />
            <strong>A. To help with movement 幫助運動 ✅</strong> B. To digest food 消化食物 C. To pump blood 泵送血液 D. To produce oxygen 產生氧氣
          </li>
          <li>
            Which part of a flower protects the bud before it opens? 花的哪個部分在花蕾開放前保護它?
            <br />
            <strong>A. Sepals 萼片 ✅</strong> B. Corolla 花冠 C. Stamens 雄蕊 D. Pistils 雌蕊
          </li>
          <li>
            What is the function of muscles in mammals? 哺乳動物肌肉的功能是什麼?
            <br />
            <strong>A. To help with movement 幫助運動 ✅</strong> B. To digest food 消化食物 C. To pump blood 泵送血液 D. To produce oxygen 產生氧氣
          </li>
          <li>
            Which part of a flower contains the ovules? 花的哪個部分含有胚珠?
            <br />
            A. Sepals 萼片 B. Corolla 花冠 C. Stamens 雄蕊 <strong>D. Pistils 雌蕊 ✅</strong>
          </li>
          <li>
            Why is it important to appreciate the diversity of life? 為什麼欣賞生命的多樣性很重要?
            <br />
            A. Because all living things are the same 因為所有生物都是一樣的 <strong>B. Because it helps us understand and protect different species 因為它幫助我們理解和保護不同物種 ✅</strong> C. Because it makes the world boring 因為它讓世界變得無聊 D. Because it is not important 因為它不重要
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The heart is responsible for digesting food in mammals. 哺乳動物的心臟負責消化食物。 — <strong>False ❌</strong></li>
          <li>The corolla is the part of the flower that attracts pollinators. 花冠是花的一部分，吸引傳粉者。 — <strong>True ✅</strong></li>
          <li>All living things have the same structures and functions. 所有生物都有相同的結構和功能。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two major structures in mammals and describe their functions. 列出哺乳動物的兩個主要結構並描述它們的功能。</li>
          <li>What are the four main parts of a flower and what do they do? 花的四個主要部分是什麼？它們有什麼功能？</li>
          <li>Why do you think it is important to learn about different living things? 你為什麼認為學習不同的生物很重要？</li>
        </ul>
      </section>
    </main>
  );
};

export default StructuresOfLivingThingsPage;