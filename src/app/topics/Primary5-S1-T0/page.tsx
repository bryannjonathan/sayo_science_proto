import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S1-T0 Properties of matter</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on the properties of matter! In this topic, we'll explore the fascinating world of air and its characteristics. You'll learn about what air is made of, how it behaves, and why it's so important in our daily lives. Let's discover together how air pressure works and what causes wind to form!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5MA1: State the major components of air and their percentage of composition in air</li>
          <li>5MA2: Be aware that air has weight and occupies space</li>
          <li>5MA3: Give some examples of daily phenomena related to atmospheric pressure (e.g. suck air out through a straw will cause the beverage carton to cave in)</li>
          <li>5MA4: Be aware that air rises when heated, and the movement of air forms wind</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the main component of air? 空氣的主要成分是什麼？<br />
            A. Oxygen 氧氣 <strong>B. Nitrogen 氮氣 ✅</strong> C. Carbon dioxide 二氧化碳 D. Water vapor 水蒸氣
          </li>
          <li>
            What percentage of air is oxygen? 氧氣佔空氣的百分比是多少？<br />
            <strong>A. 21% ✅</strong> B. 78% C. 1% D. 50%
          </li>
          <li>
            Which of the following is an example of atmospheric pressure? 以下哪個是大氣壓力的例子？<br />
            A. A balloon floating in the air 氣球飄在空中 <strong>B. A carton caving in when you suck air out through a straw 用吸管吸出空氣時，飲料盒會凹陷 ✅</strong> C. Water boiling at 100°C 水在100°C時沸騰 D. Ice melting at 0°C 冰在0°C時融化
          </li>
          <li>
            What happens to air when it is heated? 空氣受熱時會發生什麼？<br />
            A. It becomes heavier 它變得更重 <strong>B. It rises 它上升 ✅</strong> C. It disappears 它消失 D. It turns into water 它變成水
          </li>
          <li>
            What is wind? 什麼是風？<br />
            A. The movement of water 水的運動 <strong>B. The movement of air 空氣的運動 ✅</strong> C. The movement of clouds 雲的運動 D. The movement of the Earth 地球的運動
          </li>
          <li>
            Which gas makes up the largest percentage of air? 哪種氣體佔空氣的最大百分比？<br />
            A. Oxygen 氧氣 <strong>B. Nitrogen 氮氣 ✅</strong> C. Carbon dioxide 二氧化碳 D. Argon 氬氣
          </li>
          <li>
            Does air have weight? 空氣有重量嗎？<br />
            <strong>A. Yes 有 ✅</strong> B. No 沒有 C. Only when it is cold 只有在冷的時候 D. Only when it is hot 只有在熱的時候
          </li>
          <li>
            What happens when you suck air out of a bottle? 當你把空氣從瓶子中吸出時會發生什麼？<br />
            A. The bottle expands 瓶子膨脹 <strong>B. The bottle collapses 瓶子塌陷 ✅</strong> C. Nothing happens 什麼都沒發生 D. The bottle turns into a solid 瓶子變成固體
          </li>
          <li>
            Which of the following is NOT a component of air? 以下哪個不是空氣的成分？<br />
            A. Nitrogen 氮氣 B. Oxygen 氧氣 C. Carbon dioxide 二氧化碳 <strong>D. Gold 金 ✅</strong>
          </li>
          <li>
            Why does hot air rise? 為什麼熱空氣會上升？<br />
            <strong>A. Because it is lighter than cold air 因為它比冷空氣輕 ✅</strong> B. Because it is heavier than cold air 因為它比冷空氣重 C. Because it is blue 因為它是藍色的 D. Because it is invisible 因為它是看不見的
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Air is made up of only oxygen. 空氣僅由氧氣組成。 — <strong>False ❌</strong></li>
          <li>Air has weight and occupies space. 空氣有重量並佔據空間。 — <strong>True ✅</strong></li>
          <li>Hot air sinks because it is heavier than cold air. 熱空氣下沉是因為它比冷空氣重。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two major components of air and their approximate percentages. 列出空氣的兩種主要成分及其大致百分比。</li>
          <li>Explain why a beverage carton caves in when you suck air out through a straw. 解釋為什麼用吸管吸出空氣時，飲料盒會凹陷。</li>
          <li>Describe how wind is formed. 描述風是如何形成的。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfMatterPage;