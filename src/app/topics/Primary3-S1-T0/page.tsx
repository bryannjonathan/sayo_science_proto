import React from 'react';
import BackButton from '@/components/BackButton';

const StatesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S1-T0 States of matter</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the three main states of matter: solids, liquids, and gases. 
        You'll learn how to identify each state based on their properties like shape and volume, 
        and discover examples of each in everyday life. Let's dive into the fascinating world of matter!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3MA1: Be aware that matter can be classified into solids, liquids and gases, and describe their properties (whether it has a fixed volume, whether it has a fixed shape)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which state of matter has a fixed shape and volume? 哪種物質狀態具有固定的形狀和體積?
            <br />
            <strong>A. Solid 固體 ✅</strong> B. Liquid 液體 C. Gas 氣體 D. Plasma 等離子體
          </li>
          <li>
            Which state of matter takes the shape of its container but has a fixed volume? 哪種物質狀態會根據容器的形狀改變形狀，但體積固定?
            <br />
            A. Solid 固體 <strong>B. Liquid 液體 ✅</strong> C. Gas 氣體 D. None of the above 以上皆非
          </li>
          <li>
            Which state of matter has no fixed shape or volume? 哪種物質狀態沒有固定的形狀和體積?
            <br />
            A. Solid 固體 B. Liquid 液體 <strong>C. Gas 氣體 ✅</strong> D. All of the above 以上皆是
          </li>
          <li>
            What is an example of a solid? 以下哪個是固體的示例?
            <br />
            A. Water 水 B. Air 空氣 <strong>C. Rock 石頭 ✅</strong> D. Steam 蒸汽
          </li>
          <li>
            What is an example of a liquid? 以下哪個是液體的示例?
            <br />
            A. Ice 冰 <strong>B. Milk 牛奶 ✅</strong> C. Oxygen 氧氣 D. Sand 沙子
          </li>
          <li>
            What is an example of a gas? 以下哪個是氣體的示例?
            <br />
            A. Juice 果汁 B. Wood 木頭 <strong>C. Helium 氦氣 ✅</strong> D. Butter 奶油
          </li>
          <li>
            Which of the following is NOT a property of a solid? 以下哪項不是固體的性質?
            <br />
            A. Fixed shape 固定形狀 B. Fixed volume 固定體積 <strong>C. Can flow 可以流動 ✅</strong> D. Cannot be compressed 不能被壓縮
          </li>
          <li>
            Which of the following is a property of a gas? 以下哪項是氣體的性質?
            <br />
            A. Fixed shape 固定形狀 B. Fixed volume 固定體積 <strong>C. Can be compressed 可以被壓縮 ✅</strong> D. Cannot flow 不能流動
          </li>
          <li>
            What happens to the shape of a liquid when you pour it into a different container? 當你把液體倒入不同的容器時，它的形狀會發生什麼變化?
            <br />
            A. It stays the same 保持不變 <strong>B. It changes to match the new container 改變以匹配新容器 ✅</strong> C. It disappears 消失 D. It becomes a solid 變成固體
          </li>
          <li>
            Which state of matter is invisible to the naked eye? 哪種物質狀態是肉眼看不見的?
            <br />
            A. Solid 固體 B. Liquid 液體 <strong>C. Gas 氣體 ✅</strong> D. All of the above 以上皆是
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Solids have a fixed shape and volume. 固體具有固定的形狀和體積。 — <strong>True ✅</strong></li>
          <li>Liquids can be compressed easily. 液體可以很容易被壓縮。 — <strong>False ❌</strong></li>
          <li>Gases have no fixed shape or volume. 氣體沒有固定的形狀和體積。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of solids and explain why they are classified as solids. 舉出兩個固體的示例，並解釋為什麼它們被歸類為固體。</li>
          <li>Describe one property of liquids that is different from solids. 描述液體與固體不同的一個性質。</li>
          <li>Why can gases fill any container they are placed in? 為什麼氣體可以填滿它們被放入的任何容器?</li>
        </ul>
      </section>
    </main>
  );
};

export default StatesOfMatterPage;