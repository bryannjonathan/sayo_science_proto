import React from 'react';
import BackButton from '@/components/BackButton';

const TheSunAndTheEightPlanetsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S2-T2 The Sun and the eight planets</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exciting journey through the solar system! In this topic, we'll explore the Sun and the eight planets that make up our solar system. You'll learn about their positions, unique features, and how they all move around the Sun. Get ready for an amazing space adventure!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3EC1: Be aware that the solar system is mainly made up of the Sun and eight planets</li>
          <li>3EC2: Be aware that the eight planets, including the Earth, revolve around the Sun</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the center of our solar system? 我們太陽系的中心是什麼?
            <br />
            A. The Earth 地球 B. The Moon 月球 <strong>C. The Sun 太陽 ✅</strong> D. Mars 火星
          </li>
          <li>
            How many planets are there in our solar system? 我們的太陽系中有多少顆行星?
            <br />
            A. 7 七 <strong>B. 8 八 ✅</strong> C. 9 九 D. 10 十
          </li>
          <li>
            Which planet is closest to the Sun? 哪顆行星最靠近太陽?
            <br />
            A. Venus 金星 <strong>B. Mercury 水星 ✅</strong> C. Earth 地球 D. Mars 火星
          </li>
          <li>
            Which planet is known as the Red Planet? 哪顆行星被稱為紅色星球?
            <br />
            A. Jupiter 木星 B. Saturn 土星 <strong>C. Mars 火星 ✅</strong> D. Neptune 海王星
          </li>
          <li>
            What do the eight planets in our solar system do? 我們太陽系中的八顆行星做什麼?
            <br />
            A. They stay still 它們靜止不動 <strong>B. They revolve around the Sun 它們圍繞太陽運行 ✅</strong> C. They revolve around the Earth 它們圍繞地球運行 D. They revolve around the Moon 它們圍繞月球運行
          </li>
          <li>
            Which planet is the largest in our solar system? 我們太陽系中哪顆行星最大?
            <br />
            A. Earth 地球 B. Saturn 土星 <strong>C. Jupiter 木星 ✅</strong> D. Neptune 海王星
          </li>
          <li>
            Which planet is known for its beautiful rings? 哪顆行星以其美麗的環而聞名?
            <br />
            A. Uranus 天王星 B. Neptune 海王星 <strong>C. Saturn 土星 ✅</strong> D. Jupiter 木星
          </li>
          <li>
            Which planet do we live on? 我們生活在哪顆行星上?
            <br />
            A. Mars 火星 B. Venus 金星 <strong>C. Earth 地球 ✅</strong> D. Mercury 水星
          </li>
          <li>
            Which planet is the farthest from the Sun? 哪顆行星離太陽最遠?
            <br />
            A. Uranus 天王星 <strong>B. Neptune 海王星 ✅</strong> C. Pluto 冥王星 D. Saturn 土星
          </li>
          <li>
            What is the Sun? 太陽是什麼?
            <br />
            A. A planet 一顆行星 <strong>B. A star 一顆恆星 ✅</strong> C. A moon 一顆衛星 D. A comet 一顆彗星
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Sun is a planet. 太陽是一顆行星。 — <strong>False ❌</strong></li>
          <li>The Earth is the third planet from the Sun. 地球是太陽的第三顆行星。 — <strong>True ✅</strong></li>
          <li>All planets in our solar system have rings. 我們太陽系中的所有行星都有環。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name the eight planets in our solar system. 列出我們太陽系中的八顆行星。</li>
          <li>Why is the Sun important to our solar system? 為什麼太陽對我們的太陽系很重要?</li>
          <li>What do you think would happen if the Earth stopped revolving around the Sun? 你認為如果地球停止繞太陽運行會發生什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default TheSunAndTheEightPlanetsPage;