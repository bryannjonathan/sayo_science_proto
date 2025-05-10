import React from 'react';
import BackButton from '@/components/BackButton';

const TheSunAndTheEightPlanetsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S2-T3 The Sun and the eight planets</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exploration of the Sun and the eight planets in our solar system! In this topic, we'll learn about the Sun as our star, discover the unique characteristics of each planet, and understand how they all move through space. We'll also explore our place in the vast universe and the amazing Milky Way galaxy.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5EC1: Be aware that the Sun is the star in the solar system and emits light and heat energy to other celestial bodies</li>
          <li>5EC2: Explain why other celestial bodies in the solar system can be observed even they do not emit light</li>
          <li>5EC3: Recognise the eight planets in the solar system and their basic characteristics (e.g. diameter, number of discovered natural satellites, periods of revolution and rotation)</li>
          <li>5EC4: Recognise the overview of the universe and be aware that the Milky Way is one of the many galaxies</li>
          <li>5EC5: Appreciate the vastness of the universe</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: What is the Sun? 太陽是什麼?
            <br />
            A. A planet 行星 <strong>B. A star 恆星 ✅</strong> C. A moon 衛星 D. A galaxy 星系
          </li>
          <li>
            Question: Why can we see planets in the solar system even though they do not emit light? 為什麼我們可以看到太陽系中的行星，即使它們不發光?
            <br />
            <strong>A. They reflect sunlight 它們反射太陽光 ✅</strong> B. They have their own light 它們有自己的光 C. They are very hot 它們非常熱 D. They are made of gas 它們由氣體組成
          </li>
          <li>
            Question: Which planet is the largest in the solar system? 太陽系中哪顆行星最大?
            <br />
            A. Earth 地球 <strong>B. Jupiter 木星 ✅</strong> C. Mars 火星 D. Venus 金星
          </li>
          <li>
            Question: How many natural satellites does Earth have? 地球有多少顆天然衛星?
            <br />
            <strong>A. 1 一顆 ✅</strong> B. 2 兩顆 C. 3 三顆 D. 4 四顆
          </li>
          <li>
            Question: Which planet is known for its rings? 哪顆行星以其環聞名?
            <br />
            A. Mercury 水星 <strong>B. Saturn 土星 ✅</strong> C. Neptune 海王星 D. Mars 火星
          </li>
          <li>
            Question: What is the period of revolution for Earth around the Sun? 地球繞太陽公轉的週期是多少?
            <br />
            A. 24 hours 24小時 B. 30 days 30天 <strong>C. 365 days 365天 ✅</strong> D. 1 month 1個月
          </li>
          <li>
            Question: Which planet is closest to the Sun? 哪顆行星離太陽最近?
            <br />
            A. Venus 金星 B. Earth 地球 <strong>C. Mercury 水星 ✅</strong> D. Mars 火星
          </li>
          <li>
            Question: What is the Milky Way? 銀河系是什麼?
            <br />
            A. A planet 行星 <strong>B. A galaxy 星系 ✅</strong> C. A star 恆星 D. A moon 衛星
          </li>
          <li>
            Question: Which planet is known as the Red Planet? 哪顆行星被稱為紅色星球?
            <br />
            A. Jupiter 木星 <strong>B. Mars 火星 ✅</strong> C. Venus 金星 D. Saturn 土星
          </li>
          <li>
            Question: What is the main source of energy for the solar system? 太陽系的主要能量來源是什麼?
            <br />
            A. The Moon 月球 <strong>B. The Sun 太陽 ✅</strong> C. Jupiter 木星 D. Earth 地球
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Sun is the only star in the solar system. 太陽是太陽系中唯一的恆星。 — <strong>True ✅</strong></li>
          <li>All planets in the solar system have natural satellites. 太陽系中的所有行星都有天然衛星。 — <strong>False ❌</strong></li>
          <li>The Milky Way is the only galaxy in the universe. 銀河系是宇宙中唯一的星系。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why the Sun is important for life on Earth. 解釋為什麼太陽對地球上的生命很重要。</li>
          <li>Describe one characteristic of each of the eight planets in the solar system. 描述太陽系中八顆行星各自的一個特徵。</li>
          <li>What does the vastness of the universe tell us about our place in it? 宇宙的浩瀚告訴我們什麼關於我們在其中的位置?</li>
        </ul>
      </section>
    </main>
  );
};

export default TheSunAndTheEightPlanetsPage;