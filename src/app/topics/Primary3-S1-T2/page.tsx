import React from 'react';
import BackButton from '@/components/BackButton';

const PhysicalChangeAndChemicalChangePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S1-T2 Physical change and chemical change</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about how matter changes in different ways. We'll explore physical changes like melting and freezing, and chemical changes like burning. You'll discover how water changes states and see examples from everyday life. Let's investigate how substances dissolve and what makes solutions more concentrated!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3MA5: Describe the processes (melting, boiling, freezing, condensation, evaporation) of the change in states of water</li>
          <li>3MA6: Give examples of daily phenomena of evaporation and condensation (e.g. clothes drying in the sun, water droplets condensing on the surface of cold drink)</li>
          <li>3MA7: Be aware of some factors that speed up the dissolving of substances in water (e.g. surface area of solute, water temperature, stirring speed)</li>
          <li>3MA8: Distinguish between high and low concentrations of solution (e.g. same volume of water with different amounts of sugar added)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What happens to water when it is heated to 100°C? 當水被加熱到100°C時會發生什麼？<br />
            A. It freezes 它會結冰 <strong>B. It boils 它會沸騰 ✅</strong> C. It condenses 它會凝結 D. It evaporates 它會蒸發
          </li>
          <li>
            Which of the following is an example of condensation? 以下哪個是凝結的例子？<br />
            A. Ice melting 冰融化 <strong>B. Water droplets on a cold drink 冷飲上的水滴 ✅</strong> C. Sugar dissolving in water 糖溶解在水中 D. Clothes drying in the sun 衣服在陽光下曬乾
          </li>
          <li>
            What is the process called when water turns into ice? 水變成冰的過程叫什麼？<br />
            A. Melting 融化 <strong>B. Freezing 凝固 ✅</strong> C. Boiling 沸騰 D. Evaporation 蒸發
          </li>
          <li>
            Which factor does NOT speed up dissolving? 以下哪個因素不會加速溶解？<br />
            A. Stirring 攪拌 B. Higher water temperature 更高的水溫 C. Larger surface area of solute 溶質的更大表面積 <strong>D. Less solute 更少的溶質 ✅</strong>
          </li>
          <li>
            Which of the following is a physical change? 以下哪個是物理變化？<br />
            A. Burning paper 燒紙 B. Rusting iron 鐵生鏽 <strong>C. Melting ice cream 融化的冰淇淋 ✅</strong> D. Cooking an egg 煮雞蛋
          </li>
          <li>
            What is the process called when water turns into water vapor? 水變成水蒸氣的過程叫什麼？<br />
            A. Condensation 凝結 B. Freezing 凝固 <strong>C. Evaporation 蒸發 ✅</strong> D. Melting 融化
          </li>
          <li>
            Which solution has a higher concentration? 哪個溶液的濃度更高？<br />
            <strong>A. 100 mL water with 10 g sugar 100毫升水加10克糖 ✅</strong> B. 100 mL water with 5 g sugar 100毫升水加5克糖 C. 200 mL water with 10 g sugar 200毫升水加10克糖 D. 200 mL water with 5 g sugar 200毫升水加5克糖
          </li>
          <li>
            What happens to water when it is cooled below 0°C? 當水冷卻到0°C以下時會發生什麼？<br />
            A. It boils 它會沸騰 B. It evaporates 它會蒸發 <strong>C. It freezes 它會結冰 ✅</strong> D. It condenses 它會凝結
          </li>
          <li>
            Which of the following is an example of evaporation? 以下哪個是蒸發的例子？<br />
            A. Water droplets on a mirror 鏡子上的水滴 <strong>B. Clothes drying in the sun 衣服在陽光下曬乾 ✅</strong> C. Ice cubes forming in a freezer 冰櫃中形成的冰塊 D. Sugar dissolving in tea 糖溶解在茶中
          </li>
          <li>
            Which of the following is a chemical change? 以下哪個是化學變化？<br />
            A. Cutting paper 剪紙 B. Melting butter 融化黃油 <strong>C. Burning wood 燃燒木材 ✅</strong> D. Breaking glass 打破玻璃
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Melting ice is a chemical change. 冰融化是化學變化。 — <strong>False ❌</strong></li>
          <li>Water droplets on a cold drink are an example of condensation. 冷飲上的水滴是凝結的例子。 — <strong>True ✅</strong></li>
          <li>Higher water temperature slows down dissolving. 更高的水溫會減慢溶解。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of physical changes in daily life. 舉出兩個日常生活中物理變化的例子。</li>
          <li>Explain why stirring speeds up dissolving. 解釋為什麼攪拌會加速溶解。</li>
          <li>Describe how you can make a solution with high concentration. 描述如何製作高濃度的溶液。</li>
        </ul>
      </section>
    </main>
  );
};

export default PhysicalChangeAndChemicalChangePage;