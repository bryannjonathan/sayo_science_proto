import React from 'react';
import BackButton from '@/components/BackButton';

const PhysicalChangeAndChemicalChangePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S1-T1 Physical change and chemical change</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about how different substances interact with water. We'll discover which materials dissolve in water (like salt and sugar) and which don't (like sand and rocks). You'll also learn the difference between physical changes (like dissolving) and chemical changes (like burning).
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2MA6: Be aware that some substances (e.g. salt, sugar) are soluble in water while others (e.g. sand, rock) are insoluble in water</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following substances dissolves in water? 以下哪種物質可以溶解在水中？
            <br />
            <strong>A. Salt 鹽 ✅</strong> B. Sand 沙 C. Rock 石頭 D. Wood 木頭
          </li>
          <li>
            What happens when sugar is mixed with water? 當糖與水混合時會發生什麼？
            <br />
            A. It disappears completely 它完全消失 <strong>B. It dissolves in water 它溶解在水中 ✅</strong> C. It turns into a solid 它變成固體 D. It floats on water 它浮在水面上
          </li>
          <li>
            Which substance does NOT dissolve in water? 哪種物質不會溶解在水中？
            <br />
            A. Sugar 糖 B. Salt 鹽 <strong>C. Sand 沙 ✅</strong> D. Honey 蜂蜜
          </li>
          <li>
            What is the result when sand is mixed with water? 當沙與水混合時會產生什麼結果？
            <br />
            A. The sand dissolves 沙溶解了 <strong>B. The sand sinks to the bottom 沙沉到底部 ✅</strong> C. The sand disappears 沙消失了 D. The sand turns into liquid 沙變成液體
          </li>
          <li>
            Which of the following is a physical change? 以下哪種是物理變化？
            <br />
            A. Burning paper 燒紙 <strong>B. Melting ice 冰融化 ✅</strong> C. Rusting iron 鐵生鏽 D. Cooking an egg 煮雞蛋
          </li>
          <li>
            What happens when salt is added to water? 當鹽加入水中時會發生什麼？
            <br />
            A. The salt disappears 鹽消失了 <strong>B. The salt dissolves 鹽溶解了 ✅</strong> C. The salt turns into a gas 鹽變成氣體 D. The salt floats on water 鹽浮在水面上
          </li>
          <li>
            Which of these is insoluble in water? 以下哪種物質不溶於水？
            <br />
            A. Sugar 糖 B. Salt 鹽 C. Flour 麵粉 <strong>D. Oil 油 ✅</strong>
          </li>
          <li>
            What type of change is dissolving sugar in water? 將糖溶解在水中屬於哪種變化？
            <br />
            A. Chemical change 化學變化 <strong>B. Physical change 物理變化 ✅</strong> C. No change 沒有變化 D. Biological change 生物變化
          </li>
          <li>
            Which substance can you separate from water by filtering? 你可以通過過濾從水中分離出哪種物質？
            <br />
            A. Salt 鹽 B. Sugar 糖 <strong>C. Sand 沙 ✅</strong> D. Honey 蜂蜜
          </li>
          <li>
            What happens to the water when sugar dissolves in it? 當糖溶解在水中時，水會發生什麼變化？
            <br />
            <strong>A. It becomes sweeter 它變得更甜 ✅</strong> B. It turns into a solid 它變成固體 C. It disappears 它消失了 D. It changes color 它變色
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Salt dissolves in water. 鹽可以溶解在水中。 — <strong>True ✅</strong></li>
          <li>Sand disappears when mixed with water. 沙與水混合時會消失。 — <strong>False ❌</strong></li>
          <li>Dissolving sugar in water is a physical change. 將糖溶解在水中是物理變化。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two substances that dissolve in water. 列出兩種可以溶解在水中的物質。</li>
          <li>What happens when you mix sand with water? Why? 當你把沙和水混合時會發生什麼？為什麼？</li>
          <li>How can you separate salt from water after it dissolves? 當鹽溶解在水中後，你如何將鹽從水中分離出來？</li>
        </ul>
      </section>
    </main>
  );
};

export default PhysicalChangeAndChemicalChangePage;