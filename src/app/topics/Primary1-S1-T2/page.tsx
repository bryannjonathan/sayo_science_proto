import React from 'react';
import BackButton from '@/components/BackButton';

const ForceAndMotionRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S1-T2 Force and motion-related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Let's explore how things move around us! In this topic, we'll learn about positions of objects, 
        how they change when they move, and discover examples of motion in our daily lives. 
        We'll also learn how to describe if something is moving fast or slow. Ready to become a motion detective?
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1MC1: State the relative position of an object to oneself (e.g. front, back, left, right, near, far)</li>
          <li>1MC2: Be aware that the position of an object will be changed after motion</li>
          <li>1MC3: Give some examples of motion in everyday life (e.g. swinging on a swing, riding a bus, kicking a soccer ball)</li>
          <li>1MC4: Describe how fast or slow an object moves</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Where is the ball if it is in front of you? 如果球在你前面，它在哪裡？
            <br />
            A. Behind you 在你後面 <strong>B. In front of you 在你前面 ✅</strong> C. To your left 在你左邊 D. To your right 在你右邊
          </li>
          <li>
            Question: What happens to the position of a toy car when you push it? 當你推動玩具車時，它的位置會發生什麼變化？
            <br />
            A. It stays in the same place 它保持在原地 <strong>B. It changes position 它的位置改變了 ✅</strong> C. It disappears 它消失了 D. It gets bigger 它變大了
          </li>
          <li>
            Question: Which of these is an example of motion? 以下哪個是運動的例子？
            <br />
            A. A book on a table 桌上的書 <strong>B. A swinging swing 盪鞦韆 ✅</strong> C. A sleeping cat 睡覺的貓 D. A closed door 關著的門
          </li>
          <li>
            Question: How would you describe a running cheetah? 你會如何描述一隻奔跑的獵豹？
            <br />
            A. Moving very slowly 移動得非常慢 B. Not moving at all 完全沒有移動 <strong>C. Moving very fast 移動得非常快 ✅</strong> D. Moving backwards 向後移動
          </li>
          <li>
            Question: If a ball is to your left, where is it? 如果球在你的左邊，它在哪裡？
            <br />
            <strong>A. On your left side 在你的左側 ✅</strong> B. On your right side 在你的右側 C. Behind you 在你後面 D. In front of you 在你前面
          </li>
          <li>
            Question: What is an example of motion in everyday life? 日常生活中運動的例子是什麼？
            <br />
            A. A chair in the classroom 教室裡的椅子 B. A tree in the park 公園裡的樹 <strong>C. A bus moving on the road 在路上行駛的巴士 ✅</strong> D. A picture on the wall 牆上的畫
          </li>
          <li>
            Question: How would you describe a snail's movement? 你會如何描述蝸牛的移動？
            <br />
            A. Very fast 非常快 <strong>B. Very slow 非常慢 ✅</strong> C. Not moving 沒有移動 D. Moving backwards 向後移動
          </li>
          <li>
            Question: Where is the sun if it is behind you? 如果太陽在你後面，它在哪裡？
            <br />
            A. In front of you 在你前面 B. To your left 在你左邊 <strong>C. Behind you 在你後面 ✅</strong> D. To your right 在你右邊
          </li>
          <li>
            Question: What happens when you kick a soccer ball? 當你踢足球時會發生什麼？
            <br />
            A. It stays still 它保持靜止 <strong>B. It moves 它移動了 ✅</strong> C. It disappears 它消失了 D. It changes color 它變色了
          </li>
          <li>
            Question: Which object is far from you? 哪個物體離你很遠？
            <br />
            A. The pencil in your hand 你手中的鉛筆 <strong>B. The moon in the sky 天空中的月亮 ✅</strong> C. The shoes on your feet 你腳上的鞋子 D. The hat on your head 你頭上的帽子
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A moving car changes its position. 移動的汽車會改變它的位置。 — <strong>True ✅</strong></li>
          <li>A rock on the ground is an example of motion. 地上的石頭是運動的例子。 — <strong>False ❌</strong></li>
          <li>A snail moves faster than a cheetah. 蝸牛比獵豹移動得更快。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one thing that moves in your classroom. 說出你教室裡一個會移動的東西。</li>
          <li>How do you know if something is moving fast or slow? 你如何知道某物移動得快或慢？</li>
          <li>Describe where your teacher is standing in the classroom. 描述你的老師在教室裡的站立位置。</li>
        </ul>
      </section>
    </main>
  );
};

export default ForceAndMotionRelatedPhenomenaPage;