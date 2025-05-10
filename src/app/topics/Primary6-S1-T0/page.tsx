import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S1-T0 Properties of matter</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the fascinating properties of matter, focusing on buoyancy and how objects interact with water. 
        You'll learn why some objects float while others sink, and discover the scientific principles behind these phenomena. 
        Get ready to dive into hands-on learning about forces and matter!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6MA1: Using water as an example, state that buoyancy is an upward force exerted by water on objects</li>
          <li>6MA2: Recognise the phenomenon of floating and sinking of objects in water</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is buoyancy? 什麼是浮力?
            <br />
            <strong>A. An upward force exerted by water on objects 水對物體施加的向上力 ✅</strong> B. A downward force exerted by water on objects 水對物體施加的向下力 C. A sideways force exerted by water on objects 水對物體施加的側向力 D. No force exerted by water on objects 水對物體沒有施加任何力
          </li>
          <li>
            Which of the following objects will float in water? 以下哪個物體會在水中浮起?
            <br />
            <strong>A. A wooden block 木塊 ✅</strong> B. A metal coin 金屬硬幣 C. A stone 石頭 D. A glass marble 玻璃彈珠
          </li>
          <li>
            What causes an object to sink in water? 什麼原因導致物體在水中下沉?
            <br />
            <strong>A. The object's weight is greater than the buoyant force 物體的重量大於浮力 ✅</strong> B. The object's weight is less than the buoyant force 物體的重量小於浮力 C. The object's weight is equal to the buoyant force 物體的重量等於浮力 D. The object has no weight 物體沒有重量
          </li>
          <li>
            Which of the following is an example of buoyancy? 以下哪個是浮力的例子?
            <br />
            <strong>A. A boat floating on water 船浮在水面上 ✅</strong> B. A rock sinking to the bottom of a lake 石頭沉到湖底 C. A balloon floating in the air 氣球飄在空中 D. A book lying on a table 書本放在桌子上
          </li>
          <li>
            What happens to the buoyant force if the volume of water displaced by an object increases? 如果物體排開的水量增加，浮力會發生什麼變化?
            <br />
            <strong>A. The buoyant force increases 浮力增加 ✅</strong> B. The buoyant force decreases 浮力減少 C. The buoyant force stays the same 浮力保持不變 D. The buoyant force disappears 浮力消失
          </li>
          <li>
            Which of the following materials is most likely to float in water? 以下哪種材料最有可能在水中浮起?
            <br />
            <strong>A. Cork 軟木塞 ✅</strong> B. Iron 鐵 C. Gold 金 D. Concrete 混凝土
          </li>
          <li>
            Why does a heavy ship float on water? 為什麼沉重的船能浮在水面上?
            <br />
            <strong>A. It displaces enough water to create a buoyant force equal to its weight 它排開足夠的水以產生與其重量相等的浮力 ✅</strong> B. It is made of special materials that repel water 它由排斥水的特殊材料製成 C. It has no weight 它沒有重量 D. It is filled with air, which makes it weightless 它充滿了空氣，使其沒有重量
          </li>
          <li>
            What is the main factor that determines whether an object will float or sink in water? 決定物體在水中浮起或下沉的主要因素是什麼?
            <br />
            <strong>A. The relationship between the object's weight and the buoyant force 物體重量與浮力之間的關係 ✅</strong> B. The color of the object 物體的顏色 C. The temperature of the water 水的溫度 D. The shape of the object 物體的形狀
          </li>
          <li>
            If an object floats in water, what can you say about its density compared to water? 如果一個物體在水中浮起，它的密度與水相比如何?
            <br />
            <strong>A. Its density is less than water 它的密度小於水 ✅</strong> B. Its density is greater than water 它的密度大於水 C. Its density is equal to water 它的密度等於水 D. Its density is zero 它的密度為零
          </li>
          <li>
            Which of the following statements about buoyancy is correct? 以下關於浮力的陳述哪個是正確的?
            <br />
            <strong>A. Buoyancy acts in the opposite direction to gravity 浮力的方向與重力相反 ✅</strong> B. Buoyancy acts in the same direction as gravity 浮力的方向與重力相同 C. Buoyancy has no direction 浮力沒有方向 D. Buoyancy only acts on heavy objects 浮力只作用於重物體
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Buoyancy is an upward force exerted by water on objects. 浮力是水對物體施加的向上力。 — <strong>True ✅</strong></li>
          <li>All objects with a density greater than water will sink. 所有密度大於水的物體都會下沉。 — <strong>True ✅</strong></li>
          <li>The buoyant force depends on the color of the object. 浮力取決於物體的顏色。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why a small pebble sinks in water while a large ship floats. 解釋為什麼小石子會沉入水中，而大船卻能浮起。</li>
          <li>Describe an experiment to demonstrate buoyancy using everyday materials. 描述一個使用日常材料演示浮力的實驗。</li>
          <li>How does the shape of an object affect its ability to float in water? 物體的形狀如何影響它在水中的浮力能力?</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfMatterPage;