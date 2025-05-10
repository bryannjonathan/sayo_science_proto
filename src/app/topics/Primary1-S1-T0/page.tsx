import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S1-T0 Properties of matter</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on the properties of matter! In this topic, we'll explore the characteristics of different materials around us. We'll learn about water and air, and discover how everyday objects can be described by their properties like weight, hardness, and transparency. Let's get started!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1MA1: Describe the properties of water and air (colourless, odourless, tasteless, and have no fixed shape)</li>
          <li>1MA2: Describe the properties (e.g. weight, hardness, elasticity, transparency) of everyday items</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the colour of water? 水是什麼顏色的?
            <br />
            <strong>A. Colourless 無色 ✅</strong> B. Blue 藍色 C. Green 綠色 D. Red 紅色
          </li>
          <li>
            Which of the following has no fixed shape? 以下哪一個沒有固定形狀?
            <br />
            A. Rock 石頭 <strong>B. Water 水 ✅</strong> C. Book 書 D. Toy car 玩具車
          </li>
          <li>
            What is the taste of air? 空氣是什麼味道的?
            <br />
            A. Sweet 甜的 B. Salty 鹹的 <strong>C. Tasteless 無味的 ✅</strong> D. Sour 酸的
          </li>
          <li>
            Which of these is odourless? 以下哪一個是無味的?
            <br />
            A. Perfume 香水 <strong>B. Air 空氣 ✅</strong> C. Onion 洋蔥 D. Garlic 大蒜
          </li>
          <li>
            Which property describes how heavy an object is? 哪一個屬性描述物體的重量?
            <br />
            A. Hardness 硬度 <strong>B. Weight 重量 ✅</strong> C. Elasticity 彈性 D. Transparency 透明度
          </li>
          <li>
            Which object is hard? 哪一個物體是硬的?
            <br />
            A. Pillow 枕頭 <strong>B. Rock 石頭 ✅</strong> C. Sponge 海綿 D. Balloon 氣球
          </li>
          <li>
            Which object is elastic? 哪一個物體有彈性?
            <br />
            A. Glass 玻璃 <strong>B. Rubber band 橡皮筋 ✅</strong> C. Wood 木頭 D. Stone 石頭
          </li>
          <li>
            Which object is transparent? 哪一個物體是透明的?
            <br />
            A. Book 書 <strong>B. Window glass 窗戶玻璃 ✅</strong> C. Wall 牆 D. Door 門
          </li>
          <li>
            What is the property of water that allows us to see through it? 水的哪一個屬性讓我們可以看穿它?
            <br />
            A. Hardness 硬度 <strong>B. Transparency 透明度 ✅</strong> C. Elasticity 彈性 D. Weight 重量
          </li>
          <li>
            Which of these is a property of air? 以下哪一個是空氣的屬性?
            <br />
            A. It has a fixed shape 它有固定形狀 <strong>B. It is odourless 它是無味的 ✅</strong> C. It is blue in colour 它是藍色的 D. It tastes sweet 它是甜的
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Water has a fixed shape. 水有固定形狀。 — <strong>False ❌</strong></li>
          <li>Air is odourless. 空氣是無味的。 — <strong>True ✅</strong></li>
          <li>A rock is soft. 石頭是軟的。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two properties of water. 列出水的兩個屬性。</li>
          <li>Give an example of an object that is hard. 舉一個硬的物體的例子。</li>
          <li>Why can we see through a glass window? 為什麼我們可以看穿玻璃窗?</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfMatterPage;