import React from 'react';
import BackButton from '@/components/BackButton';

const HeredityAndReproductionPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S0-T4 Heredity and reproduction</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about how different animals reproduce and continue their species. 
        We'll explore the differences between animals that give birth to live babies (live-bearing) and 
        those that lay eggs (egg-laying). Let's discover the amazing ways life continues through heredity and reproduction!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3LC4: Recognise the reproductive processes of live-bearing and egg-laying animals</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following animals is a live-bearing animal? 以下哪種動物是胎生動物?
            <br />
            <strong>A. Dog 狗 ✅</strong> B. Chicken 雞 C. Turtle 烏龜 D. Frog 青蛙
          </li>
          <li>
            Which of the following animals is an egg-laying animal? 以下哪種動物是卵生動物?
            <br />
            A. Cat 貓 <strong>B. Duck 鴨子 ✅</strong> C. Cow 牛 D. Rabbit 兔子
          </li>
          <li>
            How do live-bearing animals give birth to their young? 胎生動物如何生下幼崽?
            <br />
            A. By laying eggs 通過產卵 <strong>B. By giving birth to live babies 通過生下活的幼崽 ✅</strong> C. By splitting into two 通過分裂成兩個 D. By growing from seeds 通過從種子生長
          </li>
          <li>
            What is the main difference between live-bearing and egg-laying animals? 胎生動物和卵生動物的主要區別是什麼?
            <br />
            A. Live-bearing animals lay eggs, egg-laying animals give birth to live babies 胎生動物產卵，卵生動物生下活的幼崽 <strong>B. Live-bearing animals give birth to live babies, egg-laying animals lay eggs 胎生動物生下活的幼崽，卵生動物產卵 ✅</strong> C. Both give birth to live babies 兩者都生下活的幼崽 D. Both lay eggs 兩者都產卵
          </li>
          <li>
            Which of the following is an example of an egg-laying mammal? 以下哪個是卵生哺乳動物的例子?
            <br />
            A. Kangaroo 袋鼠 <strong>B. Platypus 鴨嘴獸 ✅</strong> C. Elephant 大象 D. Lion 獅子
          </li>
          <li>
            Where do egg-laying animals usually lay their eggs? 卵生動物通常在哪裡產卵?
            <br />
            <strong>A. In water or nests 在水中或巢中 ✅</strong> B. Inside their bodies 在體內 C. On trees only 只在樹上 D. Underground only 只在地下
          </li>
          <li>
            Which of the following is NOT a live-bearing animal? 以下哪個不是胎生動物?
            <br />
            A. Whale 鯨魚 <strong>B. Penguin 企鵝 ✅</strong> C. Human 人類 D. Dolphin 海豚
          </li>
          <li>
            What do we call animals that give birth to live babies? 我們稱生下活幼崽的動物為什麼?
            <br />
            A. Egg-laying animals 卵生動物 <strong>B. Live-bearing animals 胎生動物 ✅</strong> C. Plants 植物 D. Insects 昆蟲
          </li>
          <li>
            Which of the following animals is both egg-laying and live-bearing? 以下哪種動物既是卵生又是胎生?
            <br />
            A. Shark 鯊魚 B. Snake 蛇 C. Bird 鳥 <strong>D. None of the above 以上都不是 ✅</strong>
          </li>
          <li>
            Why do live-bearing animals not lay eggs? 為什麼胎生動物不產卵?
            <br />
            A. Because they are too big 因為它們太大 <strong>B. Because their babies develop inside the mother's body 因為它們的幼崽在母體內發育 ✅</strong> C. Because they don't like eggs 因為它們不喜歡蛋 D. Because they are mammals 因為它們是哺乳動物
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All mammals are live-bearing animals. 所有哺乳動物都是胎生動物。 — <strong>False ❌</strong></li>
          <li>Birds are egg-laying animals. 鳥類是卵生動物。 — <strong>True ✅</strong></li>
          <li>Frogs give birth to live babies. 青蛙生下活的幼崽。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two live-bearing animals and two egg-laying animals. 列出兩種胎生動物和兩種卵生動物。</li>
          <li>Explain one advantage of being a live-bearing animal. 解釋胎生動物的一個優勢。</li>
          <li>How do egg-laying animals protect their eggs? 卵生動物如何保護它們的卵?</li>
        </ul>
      </section>
    </main>
  );
};

export default HeredityAndReproductionPage;