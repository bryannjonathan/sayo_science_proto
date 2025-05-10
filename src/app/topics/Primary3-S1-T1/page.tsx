import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S1-T1 Properties of matter</h1>
      <p className="text-gray-700 mb-6">
        Let's explore the fascinating world of matter! In this topic, we'll learn about different properties of materials, 
        how to compare them, and discover what mixtures are and how we can separate them. Get ready for some fun experiments 
        and interesting facts about the things around us!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3MA2: Compare some physical properties (e.g. weight, physical state under room temperature, whether it can be attracted by magnet, whether it can float in water) of different materials</li>
          <li>3MA3: Give some examples of mixture (e.g. rocks and sand, sugar solution, sand and iron filings, air)</li>
          <li>3MA4: Recognise some methods of separating mixtures (sieving, magnetic attraction, filtration, evaporation)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following materials can be attracted by a magnet? 以下哪種材料可以被磁鐵吸引?
            <br />
            A. Wood 木頭 B. Plastic 塑膠 <strong>C. Iron 鐵 ✅</strong> D. Glass 玻璃
          </li>
          <li>
            Which of the following is a mixture? 以下哪一個是混合物?
            <br />
            A. Pure water 純水 <strong>B. Sugar solution 糖水 ✅</strong> C. Gold 金 D. Oxygen 氧氣
          </li>
          <li>
            Which method can be used to separate sand and iron filings? 哪種方法可以用來分離沙子和鐵屑?
            <br />
            A. Sieving 篩選 <strong>B. Magnetic attraction 磁力吸引 ✅</strong> C. Filtration 過濾 D. Evaporation 蒸發
          </li>
          <li>
            Which of the following materials will float in water? 以下哪種材料會浮在水上?
            <br />
            A. Stone 石頭 B. Metal spoon 金屬湯匙 <strong>C. Plastic bottle 塑膠瓶 ✅</strong> D. Glass marble 玻璃彈珠
          </li>
          <li>
            What is the physical state of water at room temperature? 水在室溫下的物理狀態是什麼?
            <br />
            A. Solid 固體 <strong>B. Liquid 液體 ✅</strong> C. Gas 氣體 D. Plasma 電漿
          </li>
          <li>
            Which of the following is NOT a mixture? 以下哪一個不是混合物?
            <br />
            A. Air 空氣 B. Sand and salt 沙和鹽 <strong>C. Pure gold 純金 ✅</strong> D. Salt water 鹽水
          </li>
          <li>
            Which method can be used to separate salt from salt water? 哪種方法可以用來從鹽水中分離出鹽?
            <br />
            A. Sieving 篩選 B. Magnetic attraction 磁力吸引 C. Filtration 過濾 <strong>D. Evaporation 蒸發 ✅</strong>
          </li>
          <li>
            Which of the following materials is the heaviest? 以下哪種材料最重?
            <br />
            A. Feather 羽毛 B. Paper 紙 <strong>C. Rock 石頭 ✅</strong> D. Balloon 氣球
          </li>
          <li>
            What is the physical state of ice? 冰的物理狀態是什麼?
            <br />
            <strong>A. Solid 固體 ✅</strong> B. Liquid 液體 C. Gas 氣體 D. Plasma 電漿
          </li>
          <li>
            Which of the following is an example of a mixture? 以下哪一個是混合物的例子?
            <br />
            A. Oxygen 氧氣 B. Salt 鹽 <strong>C. Sand and iron filings 沙和鐵屑 ✅</strong> D. Pure water 純水
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All metals can be attracted by magnets. 所有金屬都可以被磁鐵吸引。 — <strong>False ❌</strong></li>
          <li>Air is a mixture of different gases. 空氣是不同氣體的混合物。 — <strong>True ✅</strong></li>
          <li>Filtration can be used to separate salt from salt water. 過濾可以用來從鹽水中分離出鹽。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of mixtures you can find at home. 舉出兩個你可以在家裡找到的混合物例子。</li>
          <li>How can you separate a mixture of sand and water? 你如何分離沙和水的混合物?</li>
          <li>Name two materials that can float in water. 列出兩種可以浮在水上的材料。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfMatterPage;