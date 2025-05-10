import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfElectricityAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S1-T4 Properties of electricity and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Let's explore the fascinating world of electricity! In this topic, we'll learn about simple circuits and how electricity makes our everyday appliances work. We'll discover what makes a complete circuit and why it's important for things like light bulbs to function properly.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4MB7: Recognise simple closed circuits</li>
          <li>4MB8: Explain that a complete circuit is needed for the functioning of simple electrical appliances (e.g. light bulb)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is needed for a light bulb to light up in a simple circuit? 在簡單電路中，燈泡需要什麼才能亮起來?
            <br />
            <strong>A. A complete circuit 完整的電路 ✅</strong> B. Only a battery 只有電池 C. Only wires 只有電線 D. A switch 開關
          </li>
          <li>
            Which of the following is NOT part of a simple closed circuit? 以下哪一項不是簡單閉合電路的一部分?
            <br />
            A. Battery 電池 B. Light bulb 燈泡 C. Wire 電線 <strong>D. Water 水 ✅</strong>
          </li>
          <li>
            What happens if there is a break in the circuit? 如果電路中斷會發生什麼?
            <br />
            A. The light bulb stays on 燈泡保持亮著 <strong>B. The light bulb turns off 燈泡熄滅 ✅</strong> C. The battery stops working 電池停止工作 D. Nothing happens 沒有任何變化
          </li>
          <li>
            Which material is a good conductor of electricity? 哪種材料是良好的電導體?
            <br />
            A. Wood 木頭 B. Plastic 塑膠 <strong>C. Copper 銅 ✅</strong> D. Rubber 橡膠
          </li>
          <li>
            What is the purpose of a switch in a circuit? 電路中開關的作用是什麼?
            <br />
            <strong>A. To break or complete the circuit 斷開或閉合電路 ✅</strong> B. To make the battery last longer 讓電池更耐用 C. To change the color of the light bulb 改變燈泡的顏色 D. To make the wires longer 讓電線更長
          </li>
          <li>
            Which of the following is an example of a simple electrical appliance? 以下哪一項是簡單電器的例子?
            <br />
            A. Television 電視 B. Refrigerator 冰箱 <strong>C. Torchlight 手電筒 ✅</strong> D. Washing machine 洗衣機
          </li>
          <li>
            What is the main source of energy in a simple circuit? 簡單電路中的主要能量來源是什麼?
            <br />
            <strong>A. Battery 電池 ✅</strong> B. Light bulb 燈泡 C. Switch 開關 D. Wire 電線
          </li>
          <li>
            Which of the following is needed to make a simple closed circuit? 以下哪一項是製作簡單閉合電路所需的?
            <br />
            <strong>A. Battery, wire, and light bulb 電池、電線和燈泡 ✅</strong> B. Battery and wire only 只有電池和電線 C. Wire and light bulb only 只有電線和燈泡 D. Battery and light bulb only 只有電池和燈泡
          </li>
          <li>
            What happens if you remove the battery from a circuit? 如果從電路中移除電池會發生什麼?
            <br />
            A. The light bulb stays on 燈泡保持亮著 <strong>B. The light bulb turns off 燈泡熄滅 ✅</strong> C. The wire melts 電線熔化 D. Nothing happens 沒有任何變化
          </li>
          <li>
            Why is a complete circuit important for electrical appliances? 為什麼完整的電路對電器很重要?
            <br />
            <strong>A. It allows electricity to flow 它讓電流動 ✅</strong> B. It makes the appliance look nice 它讓電器看起來好看 C. It prevents the battery from being used 它防止電池被使用 D. It makes the wires longer 它讓電線更長
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A simple closed circuit must include a battery, wires, and a light bulb. 一個簡單的閉合電路必須包括電池、電線和燈泡。 — <strong>True ✅</strong></li>
          <li>Electricity can flow through an open circuit. 電流可以流過斷開的電路。 — <strong>False ❌</strong></li>
          <li>A switch is used to control the flow of electricity in a circuit. 開關用於控制電路中的電流。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why a light bulb will not light up if the circuit is broken. 解釋為什麼如果電路斷開，燈泡不會亮起來。</li>
          <li>Describe the role of a battery in a simple circuit. 描述電池在簡單電路中的作用。</li>
          <li>What materials would you use to make a simple closed circuit? List at least three. 你會用哪些材料來製作一個簡單的閉合電路？列出至少三種。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfElectricityAndRelatedPhenomenaPage;