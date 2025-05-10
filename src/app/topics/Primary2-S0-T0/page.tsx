import React from 'react';
import BackButton from '@/components/BackButton';

const DifferenceBetweenLivingThingsAndNonLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S0-T0 Difference between living things and non-living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn how to tell the difference between living things and non-living things. 
        Living things like plants and animals can do special things that non-living things like rocks and chairs cannot do. 
        Let's explore what makes something alive!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2LB1: Be aware of the differences between living things and non-living things (e.g. living things can reproduce, grow and develop, and respond to stimuli, while non-living things cannot)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following can grow and develop? 以下哪一個可以生長和發展?
            <br />
            <strong>A. A tree 一棵樹 ✅</strong> B. A rock 一塊石頭 C. A chair 一張椅子 D. A book 一本書
          </li>
          <li>
            Which of the following can reproduce? 以下哪一個可以繁殖?
            <br />
            <strong>A. A cat 一隻貓 ✅</strong> B. A table 一張桌子 C. A pencil 一支鉛筆 D. A toy car 一輛玩具車
          </li>
          <li>
            Which of the following can respond to stimuli? 以下哪一個可以對刺激作出反應?
            <br />
            <strong>A. A flower 一朵花 ✅</strong> B. A computer 一台電腦 C. A shoe 一隻鞋 D. A bottle 一個瓶子
          </li>
          <li>
            Which of the following is a living thing? 以下哪一個是生物?
            <br />
            <strong>A. A dog 一隻狗 ✅</strong> B. A book 一本書 C. A toy 一個玩具 D. A cup 一個杯子
          </li>
          <li>
            Which of the following is a non-living thing? 以下哪一個是非生物?
            <br />
            A. A bird 一隻鳥 B. A plant 一株植物 <strong>C. A table 一張桌子 ✅</strong> D. A fish 一條魚
          </li>
          <li>
            What do living things need to survive? 生物需要什麼來生存?
            <br />
            A. Water 水 B. Food 食物 C. Air 空氣 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which of the following can move on its own? 以下哪一個可以自己移動?
            <br />
            A. A car 一輛汽車 B. A bicycle 一輛自行車 <strong>C. A rabbit 一隻兔子 ✅</strong> D. A ball 一個球
          </li>
          <li>
            Which of the following cannot reproduce? 以下哪一個不能繁殖?
            <br />
            A. A tree 一棵樹 B. A human 一個人 <strong>C. A rock 一塊石頭 ✅</strong> D. A fish 一條魚
          </li>
          <li>
            Which of the following is true about living things? 以下關於生物的陳述哪一個是正確的?
            <br />
            A. They can grow 它們可以生長 B. They can reproduce 它們可以繁殖 C. They can respond to stimuli 它們可以對刺激作出反應 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which of the following is not a characteristic of living things? 以下哪一個不是生物的特徵?
            <br />
            A. Can grow 可以生長 B. Can reproduce 可以繁殖 C. Can move on its own 可以自己移動 <strong>D. Can be made of metal 可以由金屬製成 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Living things can grow and develop. 生物可以生長和發展。 — <strong>True ✅</strong></li>
          <li>A chair can reproduce. 椅子可以繁殖。 — <strong>False ❌</strong></li>
          <li>Non-living things can respond to stimuli. 非生物可以對刺激作出反應。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two living things and two non-living things. 列出兩種生物和兩種非生物。</li>
          <li>How can you tell if something is a living thing? 你如何判斷某物是生物?</li>
          <li>Why is a rock not a living thing? 為什麼石頭不是生物?</li>
        </ul>
      </section>
    </main>
  );
};

export default DifferenceBetweenLivingThingsAndNonLivingThingsPage;