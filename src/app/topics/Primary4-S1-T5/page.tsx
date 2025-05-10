import React from 'react';
import BackButton from '@/components/BackButton';

const ForceAndMotionRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S1-T5 Force and motion-related phenomena</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how forces affect motion in our everyday lives. We'll learn about friction - what it is, how it works, and why it's important. You'll discover how friction helps us walk, write, and even stop moving objects. Let's investigate these force and motion phenomena together!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4MC1: Be aware that friction is the resistance that occurs when objects rub against each other</li>
          <li>4MC2: Be aware that the direction of friction is opposite to the direction of motion</li>
          <li>4MC3: Give daily examples where friction is applied (e.g. walking, writing)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: What is friction? 什麼是摩擦力?
            <br />
            A. A force that pulls objects towards each other 一種將物體拉向彼此的力 <strong>B. A force that resists motion when objects rub against each other 一種當物體相互摩擦時阻礙運動的力 ✅</strong> C. A force that makes objects move faster 一種使物體移動更快的力 D. A force that only works in water 一種只在水裡起作用的力
          </li>
          <li>
            Question: Which direction does friction act compared to the motion of an object? 摩擦力的方向與物體的運動方向相比如何?
            <br />
            A. Same direction 相同方向 <strong>B. Opposite direction 相反方向 ✅</strong> C. Upwards 向上 D. Downwards 向下
          </li>
          <li>
            Question: Which of the following is an example of friction in daily life? 以下哪個是日常生活中摩擦力的例子?
            <br />
            A. A ball rolling on a smooth floor 球在光滑的地板上滾動 <strong>B. Writing with a pencil on paper 用鉛筆在紙上寫字 ✅</strong> C. A magnet attracting a metal object 磁鐵吸引金屬物體 D. Light shining from a lamp 燈發出的光
          </li>
          <li>
            Question: Why is friction important when walking? 為什麼走路時摩擦力很重要?
            <br />
            <strong>A. It helps us stay balanced and not slip 它幫助我們保持平衡而不滑倒 ✅</strong> B. It makes us walk faster 它使我們走得更快 C. It makes our shoes lighter 它使我們的鞋子更輕 D. It makes the ground softer 它使地面更柔軟
          </li>
          <li>
            Question: What happens if there is no friction between your shoes and the ground? 如果你的鞋子和地面之間沒有摩擦力會發生什麼?
            <br />
            A. You can walk normally 你可以正常走路 <strong>B. You will slip and fall 你會滑倒和跌倒 ✅</strong> C. Your shoes will stick to the ground 你的鞋子會黏在地面上 D. Nothing will happen 什麼都不會發生
          </li>
          <li>
            Question: Which surface would have the most friction? 哪種表面的摩擦力最大?
            <br />
            A. Ice 冰 <strong>B. Sandpaper 砂紙 ✅</strong> C. Glass 玻璃 D. Water 水
          </li>
          <li>
            Question: How does friction affect a moving object? 摩擦力如何影響運動中的物體?
            <br />
            A. It makes the object move faster 它使物體移動得更快 <strong>B. It slows down or stops the object 它減慢或停止物體 ✅</strong> C. It changes the color of the object 它改變物體的顏色 D. It makes the object invisible 它使物體隱形
          </li>
          <li>
            Question: Which activity does NOT involve friction? 哪項活動不涉及摩擦力?
            <br />
            A. Rubbing your hands together 搓手 B. Sliding down a slide 滑下滑梯 <strong>C. Floating in space 在太空中漂浮 ✅</strong> D. Braking a bicycle 煞停自行車
          </li>
          <li>
            Question: What can reduce friction between two surfaces? 什麼可以減少兩個表面之間的摩擦力?
            <br />
            A. Making the surfaces rougher 使表面更粗糙 <strong>B. Adding oil or grease 添加油或潤滑脂 ✅</strong> C. Pressing the surfaces harder together 將表面更用力地壓在一起 D. Making the surfaces wet 使表面潮濕
          </li>
          <li>
            Question: Why do car tires have patterns? 為什麼汽車輪胎有花紋?
            <br />
            A. To look pretty 為了好看 <strong>B. To increase friction with the road 為了增加與道路的摩擦力 ✅</strong> C. To make the tires lighter 為了使輪胎更輕 D. To make the car go faster 為了使汽車跑得更快
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Friction always helps objects move faster. 摩擦力總是幫助物體移動得更快。 — <strong>False ❌</strong></li>
          <li>The direction of friction is opposite to the direction of motion. 摩擦力的方向與運動方向相反。 — <strong>True ✅</strong></li>
          <li>Walking on ice is easy because there is a lot of friction. 在冰上行走很容易，因為有很大的摩擦力。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of how friction is useful in daily life. 舉出兩個日常生活中摩擦力有用的例子。</li>
          <li>Explain why it is harder to push a heavy box on a rough surface than on a smooth surface. 解釋為什麼在粗糙表面上推重箱子比在光滑表面上更困難。</li>
          <li>What would happen if there was no friction at all? 如果完全沒有摩擦力會發生什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default ForceAndMotionRelatedPhenomenaPage;