import React from 'react';
import BackButton from '@/components/BackButton';

const PhysicalChangeAndChemicalChangePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S1-T1 Physical change and chemical change</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how matter can change in different ways. Some changes only affect how things look or feel (physical changes), while others create entirely new substances (chemical changes). Let's learn to identify these changes in everyday life!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4MA4: Identify some visible changes that do not produce new matter (physical changes) (e.g. dissolving, evaporation, squeezing or stretching objects)</li>
          <li>4MA5: Identify some visible changes that produce new matter (chemical changes) (e.g. rusting, burning, food rotting)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is an example of a physical change? 以下哪一個是物理變化的例子?
            <br />
            A. Burning wood 燃燒木材 <strong>B. Dissolving sugar in water 將糖溶解在水中 ✅</strong> C. Rusting iron 鐵生鏽 D. Food rotting 食物腐爛
          </li>
          <li>
            Which of the following is an example of a chemical change? 以下哪一個是化學變化的例子?
            <br />
            A. Melting ice 冰融化 B. Cutting paper 剪紙 <strong>C. Burning paper 燒紙 ✅</strong> D. Stretching a rubber band 拉伸橡皮筋
          </li>
          <li>
            What happens during a physical change? 在物理變化過程中會發生什麼?
            <br />
            A. New matter is produced 產生新物質 <strong>B. The matter changes its state or shape 物質的狀態或形狀改變 ✅</strong> C. The matter disappears 物質消失 D. The matter becomes heavier 物質變重
          </li>
          <li>
            Which of the following is NOT a physical change? 以下哪一個不是物理變化?
            <br />
            A. Evaporation of water 水蒸發 B. Dissolving salt in water 將鹽溶解在水中 <strong>C. Rusting of a nail 釘子生鏽 ✅</strong> D. Melting butter 融化黃油
          </li>
          <li>
            What is produced during a chemical change? 在化學變化過程中會產生什麼?
            <br />
            <strong>A. New matter 新物質 ✅</strong> B. The same matter 相同的物質 C. Nothing 沒有東西 D. Only heat 只有熱
          </li>
          <li>
            Which of the following is a sign of a chemical change? 以下哪一個是化學變化的跡象?
            <br />
            <strong>A. Change in color 顏色變化 ✅</strong> B. Change in shape 形狀變化 C. Change in size 大小變化 D. Change in position 位置變化
          </li>
          <li>
            What happens when you stretch a rubber band? 當你拉伸橡皮筋時會發生什麼?
            <br />
            A. A chemical change occurs 發生化學變化 <strong>B. A physical change occurs 發生物理變化 ✅</strong> C. New matter is produced 產生新物質 D. The rubber band disappears 橡皮筋消失
          </li>
          <li>
            Which of the following is a chemical change? 以下哪一個是化學變化?
            <br />
            A. Freezing water 水結冰 B. Breaking glass 打破玻璃 <strong>C. Burning wood 燃燒木材 ✅</strong> D. Cutting fruit 切水果
          </li>
          <li>
            What type of change is evaporation? 蒸發屬於哪一種變化?
            <br />
            A. Chemical change 化學變化 <strong>B. Physical change 物理變化 ✅</strong> C. Both 兩者都是 D. Neither 兩者都不是
          </li>
          <li>
            Which of the following is NOT a chemical change? 以下哪一個不是化學變化?
            <br />
            A. Baking a cake 烤蛋糕 B. Rusting of iron 鐵生鏽 <strong>C. Melting chocolate 融化巧克力 ✅</strong> D. Burning paper 燒紙
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Dissolving sugar in water is a chemical change. 將糖溶解在水中是化學變化。 — <strong>False ❌</strong></li>
          <li>Burning paper produces new matter. 燒紙會產生新物質。 — <strong>True ✅</strong></li>
          <li>Cutting an apple into pieces is a physical change. 將蘋果切成塊是物理變化。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of physical changes and explain why they are physical changes. 舉出兩個物理變化的例子並解釋為什麼它們是物理變化。</li>
          <li>Describe one chemical change you observe in everyday life and explain how you know it is a chemical change. 描述一個你在日常生活中觀察到的化學變化，並解釋你如何知道它是化學變化。</li>
          <li>What is the main difference between a physical change and a chemical change? 物理變化和化學變化的主要區別是什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default PhysicalChangeAndChemicalChangePage;