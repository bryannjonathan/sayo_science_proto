import React from 'react';
import BackButton from '@/components/BackButton';

const HeredityAndReproductionPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S0-T1 Heredity and reproduction</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we'll explore how plants and animals continue their species through reproduction. 
        We'll learn about different ways plants reproduce, how offspring inherit characteristics from their parents, 
        and discover which human traits are inherited. Let's dive into the fascinating world of heredity and reproduction!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4LC1: Recognise the reproductive process of flowering plants</li>
          <li>4LC2: Be aware that some plants can reproduce through roots, stems or leaves (e.g. radish and sweet potato can reproduce through roots, onion and garlic can reproduce through stems, Echeveria and Kalanchoe pinnata can reproduce through leaves)</li>
          <li>4LC4: Be aware that offspring produced by reproduction of animals and plants have similar characteristics to their parents</li>
          <li>4LC5: Identify characteristics that animals and plants inherited from their parents (e.g. skin colour, eye colour and shape of earlobe in humans; colour and number of petals) as well as those that are not inherited from their parents (e.g. hair length in humans)</li>
          <li>4LC6: Be aware that some human characteristics are inherited (e.g. ability to roll the tongue and bend the thumb backward) and cannot be changed through acquired learning</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Which part of a flowering plant is involved in reproduction? 哪一部分的開花植物參與繁殖?
            <br />
            <strong>A. Flower 花 ✅</strong> B. Leaf 葉子 C. Root 根 D. Stem 莖
          </li>
          <li>
            Question: Which plant can reproduce through its leaves? 哪一種植物可以通過葉子繁殖?
            <br />
            A. Radish 蘿蔔 B. Sweet potato 番薯 <strong>C. Echeveria 石蓮花 ✅</strong> D. Garlic 大蒜
          </li>
          <li>
            Question: Which of the following is an inherited characteristic in humans? 以下哪一項是人類的遺傳特徵?
            <br />
            <strong>A. Eye colour 眼睛顏色 ✅</strong> B. Hair length 頭髮長度 C. Scar 疤痕 D. Tattoo 紋身
          </li>
          <li>
            Question: Which plant can reproduce through its stem? 哪一種植物可以通過莖繁殖?
            <br />
            A. Radish 蘿蔔 B. Sweet potato 番薯 <strong>C. Onion 洋蔥 ✅</strong> D. Kalanchoe pinnata 落地生根
          </li>
          <li>
            Question: What is an example of a non-inherited characteristic in humans? 以下哪一項是人類的非遺傳特徵?
            <br />
            A. Skin colour 膚色 B. Ability to roll the tongue 捲舌能力 <strong>C. Hair length 頭髮長度 ✅</strong> D. Shape of earlobe 耳垂形狀
          </li>
          <li>
            Question: Which of the following is true about offspring of plants and animals? 關於動植物的後代，以下哪一項是正確的?
            <br />
            A. They are identical to their parents 它們與父母完全相同 B. They have no similarities to their parents 它們與父母沒有任何相似之處 <strong>C. They have some similar characteristics to their parents 它們與父母有一些相似的特徵 ✅</strong> D. They are completely different from their parents 它們與父母完全不同
          </li>
          <li>
            Question: Which of the following can reproduce through roots? 以下哪一種可以通過根繁殖?
            <br />
            A. Onion 洋蔥 B. Garlic 大蒜 <strong>C. Radish 蘿蔔 ✅</strong> D. Echeveria 石蓮花
          </li>
          <li>
            Question: What is an inherited characteristic in plants? 以下哪一項是植物的遺傳特徵?
            <br />
            <strong>A. Number of petals 花瓣數量 ✅</strong> B. Size of leaves 葉子大小 C. Damage from insects 昆蟲造成的損害 D. Broken stem 斷裂的莖
          </li>
          <li>
            Question: Which of the following is an example of a human inherited trait? 以下哪一項是人類的遺傳特徵例子?
            <br />
            <strong>A. Ability to bend the thumb backward 拇指向後彎曲的能力 ✅</strong> B. Learning to ride a bike 學習騎自行車 C. Speaking a language 說一種語言 D. Having a haircut 剪頭髮
          </li>
          <li>
            Question: Which part of a sweet potato is used for reproduction? 番薯的哪一部分用於繁殖?
            <br />
            A. Flower 花 <strong>B. Root 根 ✅</strong> C. Leaf 葉子 D. Stem 莖
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All plants reproduce only through flowers. 所有植物只能通過花繁殖。 — <strong>False ❌</strong></li>
          <li>The ability to roll the tongue is an inherited characteristic. 捲舌能力是一種遺傳特徵。 — <strong>True ✅</strong></li>
          <li>Hair length in humans is an inherited characteristic. 人類的頭髮長度是一種遺傳特徵。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two plants that can reproduce through stems. 列出兩種可以通過莖繁殖的植物。</li>
          <li>Give one example of a human characteristic that is inherited and one that is not. 舉出一個人類遺傳特徵的例子和一個非遺傳特徵的例子。</li>
          <li>Explain why offspring of plants and animals have similar characteristics to their parents. 解釋為什麼動植物的後代與父母有相似的特徵。</li>
        </ul>
      </section>
    </main>
  );
};

export default HeredityAndReproductionPage;