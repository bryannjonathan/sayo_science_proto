import React from 'react';
import BackButton from '@/components/BackButton';

const ForceAndMotionRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S1-T3 Force and motion-related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Let's explore how forces make things move! In this topic, we'll learn about pushes and pulls, 
        discover how gravity works, and see examples of forces in our daily lives. Get ready to understand 
        why objects move the way they do!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2MC1: Be aware that force can cause objects to move</li>
          <li>2MC2: Give some daily examples involving push and pull</li>
          <li>2MC3: Be aware that force of gravity is the attractive force exerted by the Earth on other objects</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What force makes objects fall to the ground? 什麼力使物體掉到地面?
            <br />
            A. Push 推 B. Pull 拉 <strong>C. Gravity 重力 ✅</strong> D. Wind 風
          </li>
          <li>
            Which of these is an example of a push? 以下哪個是推的例子?
            <br />
            A. Opening a drawer 打開抽屜 <strong>B. Kicking a ball 踢球 ✅</strong> C. Pulling a wagon 拉小車 D. Holding a book 拿著書
          </li>
          <li>
            What happens when you pull a toy car? 當你拉玩具車時會發生什麼?
            <br />
            <strong>A. It moves toward you 它會向你移動 ✅</strong> B. It stays still 它會保持不動 C. It moves away from you 它會遠離你移動 D. It changes color 它會變色
          </li>
          <li>
            Which force keeps us on the ground? 什麼力使我們保持在地面上?
            <br />
            A. Magnetism 磁力 <strong>B. Gravity 重力 ✅</strong> C. Electricity 電力 D. Wind 風
          </li>
          <li>
            What do you do when you close a door? 當你關門時你在做什麼?
            <br />
            <strong>A. Pushing 推 ✅</strong> B. Pulling 拉 C. Lifting 舉起 D. Dropping 掉落
          </li>
          <li>
            What makes a swing move? 什麼讓鞦韆移動?
            <br />
            A. Gravity 重力 <strong>B. Push or pull 推或拉 ✅</strong> C. Electricity 電力 D. Sound 聲音
          </li>
          <li>
            Which of these is NOT a force? 以下哪個不是力?
            <br />
            A. Push 推 B. Pull 拉 C. Gravity 重力 <strong>D. Color 顏色 ✅</strong>
          </li>
          <li>
            What happens when you stop pushing a toy car? 當你停止推玩具車時會發生什麼?
            <br />
            A. It keeps moving forever 它會永遠移動 <strong>B. It slows down and stops 它會減速並停止 ✅</strong> C. It changes direction 它會改變方向 D. It disappears 它會消失
          </li>
          <li>
            Which of these is an example of gravity? 以下哪個是重力的例子?
            <br />
            A. A ball rolling on the ground 球在地上滾動 <strong>B. A leaf falling from a tree 樹葉從樹上落下 ✅</strong> C. Pushing a shopping cart 推購物車 D. Pulling a rope 拉繩子
          </li>
          <li>
            What do you need to make an object move? 你需要什麼來使物體移動?
            <br />
            <strong>A. Force 力 ✅</strong> B. Color 顏色 C. Sound 聲音 D. Smell 氣味
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Gravity pulls objects toward the Earth. 重力將物體拉向地球。 — <strong>True ✅</strong></li>
          <li>Pulling means moving something away from you. 拉意味著將某物從你身邊移開。 — <strong>False ❌</strong></li>
          <li>All forces need electricity to work. 所有的力都需要電力才能運作。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two things you can push. 說出兩樣你可以推的東西。</li>
          <li>Why do things fall down instead of up? 為什麼東西會向下掉而不是向上?</li>
          <li>What happens when you push a heavy box? 當你推一個重箱子時會發生什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default ForceAndMotionRelatedPhenomenaPage;