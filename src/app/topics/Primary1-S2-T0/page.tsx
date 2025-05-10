import React from 'react';
import BackButton from '@/components/BackButton';

const EarthsCharacteristicsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S2-T0 Earth’s characteristics</h1>
      <p className="text-gray-700 mb-6">
        Let's explore our amazing planet Earth! In this topic, we'll learn about what makes Earth special - the land and oceans that cover its surface, the air around it, and why it's important to take care of our home. Earth is where all living things, including people, animals and plants, live together.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1EA1: Be aware that the surface of the Earth is covered by oceans and land, and that oceans cover more areas than land</li>
          <li>1EA2: Be aware that the surface of the Earth is surrounded by the atmosphere (gases)</li>
          <li>1EA3: Be aware that the Earth is the shared home for humans, animals and plants</li>
          <li>1EA4: Understand the importance of caring for the Earth</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What covers more of the Earth's surface: oceans or land? 地球表面覆蓋更多的是什麼：海洋還是陸地？
            <br />
            <strong>A. Oceans 海洋 ✅</strong> B. Land 陸地 C. They are the same 一樣多 D. I don't know 我不知道
          </li>
          <li>
            What surrounds the Earth's surface? 地球表面被什麼包圍？
            <br />
            A. Water 水 <strong>B. Atmosphere (gases) 大氣（氣體） ✅</strong> C. Rocks 岩石 D. Fire 火
          </li>
          <li>
            Who shares the Earth as their home? 誰共享地球作為他們的家園？
            <br />
            A. Only humans 只有人類 B. Only animals 只有動物 <strong>C. Humans, animals, and plants 人類、動物和植物 ✅</strong> D. Only plants 只有植物
          </li>
          <li>
            Why is it important to care for the Earth? 為什麼愛護地球很重要？
            <br />
            <strong>A. Because it is our home 因為它是我們的家園 ✅</strong> B. Because it is pretty 因為它很漂亮 C. Because it is big 因為它很大 D. Because it is far away 因為它很遠
          </li>
          <li>
            What is the Earth's surface mostly covered by? 地球表面大部分被什麼覆蓋？
            <br />
            A. Sand 沙子 <strong>B. Water 水 ✅</strong> C. Trees 樹木 D. Mountains 山
          </li>
          <li>
            What do we call the layer of gases around the Earth? 我們稱地球周圍的氣體層為什麼？
            <br />
            A. Ocean 海洋 <strong>B. Atmosphere 大氣層 ✅</strong> C. Land 陸地 D. Cloud 雲
          </li>
          <li>
            Which of these is NOT a part of the Earth's surface? 以下哪一個不是地球表面的一部分？
            <br />
            A. Oceans 海洋 B. Land 陸地 C. Atmosphere 大氣層 <strong>D. Sun 太陽 ✅</strong>
          </li>
          <li>
            What do plants need from the Earth to grow? 植物需要地球上的什麼來生長？
            <br />
            <strong>A. Water and soil 水和土壤 ✅</strong> B. Rocks and sand 岩石和沙子 C. Fire and air 火和空氣 D. Metal and plastic 金屬和塑料
          </li>
          <li>
            How can we care for the Earth? 我們如何愛護地球？
            <br />
            <strong>A. By planting trees 種樹 ✅</strong> B. By throwing trash everywhere 到處扔垃圾 C. By wasting water 浪費水 D. By cutting down trees 砍樹
          </li>
          <li>
            What is the Earth's home for all living things? 地球是什麼的家園？
            <br />
            A. Only for humans 只是人類的家園 B. Only for animals 只是動物的家園 <strong>C. For all living things 所有生物的家園 ✅</strong> D. Only for plants 只是植物的家園
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Earth's surface is mostly covered by land. 地球表面大部分被陸地覆蓋。 — <strong>False ❌</strong></li>
          <li>The atmosphere is a layer of gases around the Earth. 大氣層是地球周圍的一層氣體。 — <strong>True ✅</strong></li>
          <li>Only humans live on Earth. 只有人類住在地球上。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one way you can help take care of the Earth. 說出一種你可以幫助照顧地球的方法。</li>
          <li>What are two things that cover the Earth's surface? 說出覆蓋地球表面的兩樣東西。</li>
          <li>Why is the Earth important to us? 為什麼地球對我們很重要？</li>
        </ul>
      </section>
    </main>
  );
};

export default EarthsCharacteristicsPage;