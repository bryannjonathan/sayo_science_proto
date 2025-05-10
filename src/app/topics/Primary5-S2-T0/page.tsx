import React from 'react';
import BackButton from '@/components/BackButton';

const EarthsHistoryPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S2-T0 Earth’s history</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Earth's history! In this topic, we'll explore how our planet's surface has changed over time. We'll learn about different landforms, how they're shaped by natural forces, and how fossils help us understand Earth's past. Get ready to discover amazing facts about mountains, valleys, and ancient life!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5EA1: Recognise some different landforms (e.g. mountains, plains, valleys, plateaus, basins)</li>
          <li>5EA2: Be aware that crustal movement, water and wind play an important role in shaping landforms</li>
          <li>5EA3: Be aware that fossils are the remains of some ancient organisms preserved in rocks and ice</li>
          <li>5EA4: Be aware that changes in the Earth's surface can be inferred from the location of fossils</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is NOT a type of landform? 以下哪一項不是地形的一種?
            <br />
            A. Mountain 山脈 B. Plain 平原 <strong>C. River 河流 ✅</strong> D. Plateau 高原
          </li>
          <li>
            What plays an important role in shaping landforms? 什麼對地形的塑造起著重要作用?
            <br />
            A. Crustal movement 地殼運動 B. Water 水 C. Wind 風 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Where are fossils usually found? 化石通常在哪裡被發現?
            <br />
            <strong>A. In rocks and ice 在岩石和冰中 ✅</strong> B. In the ocean 在海洋中 C. In the air 在空氣中 D. In plants 在植物中
          </li>
          <li>
            What can fossils tell us about? 化石可以告訴我們什麼?
            <br />
            A. Changes in the Earth's surface 地球表面的變化 B. Ancient organisms 古代生物 <strong>C. Both A and B A和B都是 ✅</strong> D. None of the above 以上皆非
          </li>
          <li>
            Which landform is flat and low-lying? 哪種地形是平坦且低窪的?
            <br />
            A. Mountain 山脈 <strong>B. Plain 平原 ✅</strong> C. Valley 山谷 D. Plateau 高原
          </li>
          <li>
            What are fossils? 什麼是化石?
            <br />
            <strong>A. Remains of ancient organisms 古代生物的遺骸 ✅</strong> B. Newly formed rocks 新形成的岩石 C. Types of plants 植物的種類 D. Types of animals 動物的種類
          </li>
          <li>
            Which of the following is a highland area with a flat top? 以下哪一項是頂部平坦的高地?
            <br />
            A. Basin 盆地 <strong>B. Plateau 高原 ✅</strong> C. Valley 山谷 D. Plain 平原
          </li>
          <li>
            How can wind shape landforms? 風如何塑造地形?
            <br />
            <strong>A. By carrying sand and rocks 通過攜帶沙子和岩石 ✅</strong> B. By blowing leaves 通過吹動樹葉 C. By making sounds 通過發出聲音 D. None of the above 以上皆非
          </li>
          <li>
            What is a valley? 什麼是山谷?
            <br />
            <strong>A. A low area between hills or mountains 山丘或山脈之間的低地 ✅</strong> B. A high flat area 高的平坦地區 C. A deep hole in the ground 地面上的深洞 D. A large body of water 大片水域
          </li>
          <li>
            Why are fossils important? 為什麼化石很重要?
            <br />
            <strong>A. They help us understand Earth's history 它們幫助我們了解地球的歷史 ✅</strong> B. They are pretty to look at 它們看起來很漂亮 C. They can be used as tools 它們可以被用作工具 D. None of the above 以上皆非
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Fossils are only found in rocks. 化石只在岩石中被發現。 — <strong>False ❌</strong></li>
          <li>Mountains are formed by crustal movement. 山脈是由地殼運動形成的。 — <strong>True ✅</strong></li>
          <li>Wind cannot change the shape of landforms. 風不能改變地形的形狀。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two landforms and describe how they are formed. 列舉兩種地形並描述它們是如何形成的。</li>
          <li>How do fossils help scientists learn about Earth's history? 化石如何幫助科學家了解地球的歷史?</li>
          <li>Explain how water can shape landforms. 解釋水如何塑造地形。</li>
        </ul>
      </section>
    </main>
  );
};

export default EarthsHistoryPage;