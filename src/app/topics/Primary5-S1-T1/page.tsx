import React from 'react';
import BackButton from '@/components/BackButton';

const PhysicalChangeAndChemicalChangePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S1-T1 Physical change and chemical change</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how matter can change in different ways. We'll learn about physical changes (like melting ice) and chemical changes (like rusting metal). You'll discover what causes metals to corrode and how we can prevent it, as well as identify examples of reversible and irreversible changes in everyday life.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5MA5: Recognise the necessary conditions for corrosion of metals (using rusting as an example)</li>
          <li>5MA6: Explain ways to prevent corrosion of metals</li>
          <li>5MA7: Be aware of some reversible changes (e.g. condensation and evaporation of water) and irreversible changes (e.g. burning)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is necessary for the rusting of iron? 以下哪項是鐵生鏽的必要條件?
            <br />
            <strong>A. Oxygen and water 氧氣和水 ✅</strong> B. Carbon dioxide and heat 二氧化碳和熱 C. Nitrogen and light 氮氣和光 D. Hydrogen and cold 氫氣和冷
          </li>
          <li>
            Which of the following is a way to prevent rusting? 以下哪種方法可以防止生鏽?
            <br />
            <strong>A. Painting the metal 給金屬塗漆 ✅</strong> B. Exposing the metal to rain 將金屬暴露在雨中 C. Keeping the metal wet 保持金屬濕潤 D. Storing the metal in saltwater 將金屬存放在鹽水中
          </li>
          <li>
            Which of the following is an example of a reversible change? 以下哪個是可逆變化的例子?
            <br />
            A. Burning paper 燃燒紙張 <strong>B. Melting ice 融化冰塊 ✅</strong> C. Rusting iron 生鏽的鐵 D. Cooking an egg 煮雞蛋
          </li>
          <li>
            Which of the following is an example of an irreversible change? 以下哪個是不可逆變化的例子?
            <br />
            A. Evaporating water 蒸發水 B. Freezing water 冷凍水 <strong>C. Burning wood 燃燒木材 ✅</strong> D. Melting chocolate 融化巧克力
          </li>
          <li>
            What is the main cause of corrosion in metals? 金屬腐蝕的主要原因是什么?
            <br />
            <strong>A. Reaction with oxygen 與氧氣反應 ✅</strong> B. Reaction with nitrogen 與氮氣反應 C. Reaction with hydrogen 與氫氣反應 D. Reaction with helium 與氦氣反應
          </li>
          <li>
            Which of the following metals is most likely to rust? 以下哪種金屬最有可能生鏽?
            <br />
            <strong>A. Iron 鐵 ✅</strong> B. Gold 金 C. Silver 銀 D. Aluminum 鋁
          </li>
          <li>
            What happens when water evaporates? 當水蒸發時會發生什麼?
            <br />
            <strong>A. It changes from liquid to gas 它從液體變成氣體 ✅</strong> B. It changes from gas to liquid 它從氣體變成液體 C. It changes from solid to liquid 它從固體變成液體 D. It changes from liquid to solid 它從液體變成固體
          </li>
          <li>
            Which of the following is NOT a way to prevent rusting? 以下哪種方法不能防止生鏽?
            <br />
            A. Applying oil 塗油 B. Keeping the metal dry 保持金屬乾燥 <strong>C. Exposing the metal to air and water 將金屬暴露在空氣和水中 ✅</strong> D. Using galvanization 使用鍍鋅
          </li>
          <li>
            What is the process called when water vapor turns into liquid water? 當水蒸氣變成液態水時，這個過程叫什麼?
            <br />
            <strong>A. Condensation 凝結 ✅</strong> B. Evaporation 蒸發 C. Freezing 冷凍 D. Melting 融化
          </li>
          <li>
            Which of the following is a chemical change? 以下哪個是化學變化?
            <br />
            A. Cutting paper 剪紙 <strong>B. Burning wood 燃燒木材 ✅</strong> C. Melting ice 融化冰塊 D. Breaking glass 打破玻璃
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Rusting is a reversible change. 生鏽是可逆的變化。 — <strong>False ❌</strong></li>
          <li>Condensation is the process of water vapor turning into liquid water. 凝結是水蒸氣變成液態水的過程。 — <strong>True ✅</strong></li>
          <li>Burning paper is a physical change. 燃燒紙張是物理變化。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why painting a metal gate can prevent it from rusting. 解釋為什麼給金屬門塗漆可以防止它生鏽。</li>
          <li>Give two examples of reversible changes and two examples of irreversible changes. 舉出兩個可逆變化的例子和兩個不可逆變化的例子。</li>
          <li>Describe the conditions needed for iron to rust. 描述鐵生鏽所需的條件。</li>
        </ul>
      </section>
    </main>
  );
};

export default PhysicalChangeAndChemicalChangePage;