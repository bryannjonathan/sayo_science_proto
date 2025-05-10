import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfElectricityAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S1-T4 Properties of electricity and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Electricity is all around us and powers many things we use every day. In this topic, we'll learn about how electricity works, 
        how to use it safely, and why different materials are used in electrical appliances. We'll explore conductors and insulators, 
        and understand important safety rules when dealing with electricity.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5MB8: Recognise how to use electricity safely</li>
          <li>5MB9: Explain the reasons why different parts of household appliances are made from conductive and insulating materials respectively</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which material is commonly used as an insulator in electrical wires? 哪種材料通常用作電線的絕緣體?
            <br />
            A. Copper 銅 B. Aluminum 鋁 <strong>C. Rubber 橡膠 ✅</strong> D. Silver 銀
          </li>
          <li>
            Why should you never touch electrical appliances with wet hands? 為什麼不應該用濕手觸摸電器?
            <br />
            A. Water makes the appliance dirty 水會弄髒電器 <strong>B. Water can conduct electricity and cause electric shock 水能導電並導致觸電 ✅</strong> C. Water can damage the appliance 水會損壞電器 D. Water makes the appliance slippery 水會使電器變滑
          </li>
          <li>
            Which of the following is a good conductor of electricity? 以下哪種是良好的導電體?
            <br />
            A. Wood 木頭 B. Plastic 塑膠 <strong>C. Iron 鐵 ✅</strong> D. Glass 玻璃
          </li>
          <li>
            What is the purpose of using insulating materials in household appliances? 家用電器使用絕緣材料的目的是什麼?
            <br />
            A. To make the appliance look colorful 使電器看起來色彩繽紛 <strong>B. To prevent electric shocks 防止觸電 ✅</strong> C. To make the appliance heavier 使電器更重 D. To reduce the cost of the appliance 降低電器的成本
          </li>
          <li>
            Which of the following actions is safe when using electricity? 以下哪種行為在使用電力時是安全的?
            <br />
            A. Pulling a plug by its cord 拉電線拔出插頭 B. Using a damaged wire 使用損壞的電線 <strong>C. Turning off the power before repairing an appliance 修理電器前關閉電源 ✅</strong> D. Inserting metal objects into sockets 將金屬物體插入插座
          </li>
          <li>
            What happens when too many appliances are plugged into one socket? 當太多電器插在同一個插座時會發生什麼?
            <br />
            A. The socket becomes colorful 插座會變得色彩繽紛 <strong>B. It can cause overheating and a fire 可能導致過熱和火災 ✅</strong> C. The appliances work faster 電器會工作得更快 D. Nothing happens 什麼都不會發生
          </li>
          <li>
            Which part of a plug is usually made of insulating material? 插頭的哪個部分通常由絕緣材料製成?
            <br />
            A. The metal pins 金屬插腳 <strong>B. The outer casing 外殼 ✅</strong> C. The wires inside 內部的電線 D. All of the above 以上全部
          </li>
          <li>
            Why are electrical wires usually made of copper? 為什麼電線通常由銅製成?
            <br />
            <strong>A. Copper is a good conductor of electricity 銅是良好的導電體 ✅</strong> B. Copper is cheap 銅很便宜 C. Copper is colorful 銅色彩繽紛 D. Copper is heavy 銅很重
          </li>
          <li>
            What should you do if you see a damaged electrical wire? 如果你看到損壞的電線，你應該怎麼做?
            <br />
            A. Touch it to see if it is still working 觸摸它看看是否還能工作 <strong>B. Tell an adult and stay away from it 告訴成年人並遠離它 ✅</strong> C. Use tape to fix it yourself 自己用膠帶修復它 D. Ignore it 忽略它
          </li>
          <li>
            Which of the following is NOT a safe practice with electricity? 以下哪種行為在使用電力時是不安全的?
            <br />
            A. Using a plug with a safety mark 使用帶有安全標誌的插頭 <strong>B. Overloading a socket 使插座超負荷 ✅</strong> C. Keeping electrical appliances away from water 讓電器遠離水 D. Turning off appliances when not in use 不使用時關閉電器
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Water is a good conductor of electricity. 水是良好的導電體。 — <strong>True ✅</strong></li>
          <li>It is safe to use a hairdryer near a bathtub filled with water. 在裝滿水的浴缸附近使用吹風機是安全的。 — <strong>False ❌</strong></li>
          <li>Insulating materials are used to protect people from electric shocks. 絕緣材料用於保護人們免受觸電。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why the outer casing of a plug is made of insulating material. 解釋為什麼插頭的外殼由絕緣材料製成。</li>
          <li>Describe two safety rules you should follow when using electrical appliances. 描述使用電器時應遵循的兩條安全規則。</li>
          <li>Why is it important to use conductive materials for the wires inside electrical appliances? 為什麼電器內部的電線使用導電材料很重要?</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfElectricityAndRelatedPhenomenaPage;