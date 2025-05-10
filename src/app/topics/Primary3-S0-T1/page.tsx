import React from 'react';
import BackButton from '@/components/BackButton';

const DiversityAndClassificationOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S0-T1 Diversity and classification of living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the wonderful variety of living things around us! We'll learn how scientists classify animals and plants into different groups based on their characteristics. You'll discover the differences between vertebrates and invertebrates, learn about various animal groups, and understand how plants are categorized too.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3LB1: Be aware that animals are classified into vertebrates and invertebrates</li>
          <li>3LB2: Describe the key characteristics of some animal groups (insects, fish, amphibians, reptiles, birds, mammals)</li>
          <li>3LB3: Classify animals according to their characteristics</li>
          <li>3LB5: Be aware that plants are classified into flowering plants and non-flowering plants</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following animals is a vertebrate? 以下哪種動物是脊椎動物?
            <br />
            A. Butterfly 蝴蝶 B. Jellyfish 水母 <strong>C. Dog 狗 ✅</strong> D. Earthworm 蚯蚓
          </li>
          <li>
            Which animal group has feathers? 哪種動物群體有羽毛?
            <br />
            A. Mammals 哺乳動物 <strong>B. Birds 鳥類 ✅</strong> C. Reptiles 爬行動物 D. Amphibians 兩棲動物
          </li>
          <li>
            How many legs do insects usually have? 昆蟲通常有多少條腿?
            <br />
            A. 2 兩條 B. 4 四條 <strong>C. 6 六條 ✅</strong> D. 8 八條
          </li>
          <li>
            Which of these is a characteristic of mammals? 以下哪項是哺乳動物的特徵?
            <br />
            A. Lay eggs 產卵 B. Have gills 有鰓 <strong>C. Feed milk to their young 用乳汁哺育幼崽 ✅</strong> D. Have scales 有鱗片
          </li>
          <li>
            Which animal group lives both in water and on land? 哪種動物群體既生活在水中也生活在陸地上?
            <br />
            A. Fish 魚類 <strong>B. Amphibians 兩棲動物 ✅</strong> C. Reptiles 爬行動物 D. Birds 鳥類
          </li>
          <li>
            Which of these is a non-flowering plant? 以下哪種是非開花植物?
            <br />
            A. Rose 玫瑰 B. Sunflower 向日葵 <strong>C. Fern 蕨類 ✅</strong> D. Tulip 鬱金香
          </li>
          <li>
            What do fish use to breathe underwater? 魚用什麼在水下呼吸?
            <br />
            A. Lungs 肺 <strong>B. Gills 鰓 ✅</strong> C. Skin 皮膚 D. Nose 鼻子
          </li>
          <li>
            Which animal has dry, scaly skin? 哪種動物有乾燥、有鱗片的皮膚?
            <br />
            A. Frog 青蛙 <strong>B. Snake 蛇 ✅</strong> C. Dolphin 海豚 D. Eagle 老鷹
          </li>
          <li>
            What is the main characteristic of flowering plants? 開花植物的主要特徵是什麼?
            <br />
            A. They produce cones 它們產生球果 <strong>B. They produce flowers 它們開花 ✅</strong> C. They have no leaves 它們沒有葉子 D. They cannot make food 它們不能製造食物
          </li>
          <li>
            Which of these is an invertebrate? 以下哪種是無脊椎動物?
            <br />
            A. Shark 鯊魚 B. Frog 青蛙 <strong>C. Snail 蝸牛 ✅</strong> D. Lizard 蜥蜴
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All insects have wings. 所有昆蟲都有翅膀。 — <strong>False ❌</strong></li>
          <li>Mammals are warm-blooded animals. 哺乳動物是溫血動物。 — <strong>True ✅</strong></li>
          <li>Ferns are flowering plants. 蕨類是開花植物。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two characteristics of birds. 列出鳥類的兩個特徵。</li>
          <li>How can you tell if an animal is a mammal? Give one example. 你如何判斷一個動物是哺乳動物？舉一個例子。</li>
          <li>What is the difference between flowering and non-flowering plants? 開花植物和非開花植物有什麼區別？</li>
        </ul>
      </section>
    </main>
  );
};

export default DiversityAndClassificationOfLivingThingsPage;