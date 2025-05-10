import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfLightAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S1-T1 Properties of light and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Let's explore the wonderful world of light! In this topic, we'll learn about where light comes from, how we use it every day, and some cool things that happen when light shines on objects. We'll discover why shadows form and the beautiful colors hidden in sunlight!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1MB1: Be aware of the source of light</li>
          <li>1MB2: Give examples of uses of light in daily life (e.g. for illumination and reading)</li>
          <li>1MB3: Be aware that light shining on opaque objects will produce shadows</li>
          <li>1MB4: Be aware that sunlight consists of light of different colours</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is a source of light? 以下哪一個是光源？
            <br />
            <strong>A. Sun 太陽 ✅</strong> B. Moon 月亮 C. Rock 石頭 D. Water 水
          </li>
          <li>
            What do we use light for in daily life? 我們在日常生活中用光來做什麼？
            <br />
            <strong>A. To see in the dark 在黑暗中看東西 ✅</strong> B. To make food 製作食物 C. To wash clothes 洗衣服 D. To sleep 睡覺
          </li>
          <li>
            What happens when light shines on an opaque object? 當光照在不透明的物體上時會發生什麼？
            <br />
            <strong>A. It produces a shadow 會產生影子 ✅</strong> B. It disappears 光會消失 C. It changes color 會改變顏色 D. Nothing happens 什麼都不會發生
          </li>
          <li>
            Which of the following is NOT a source of light? 以下哪一個不是光源？
            <br />
            A. Light bulb 燈泡 B. Candle 蠟燭 <strong>C. Mirror 鏡子 ✅</strong> D. Flashlight 手電筒
          </li>
          <li>
            What colors are in sunlight? 陽光中包含哪些顏色？
            <br />
            A. Only white 只有白色 B. Only yellow 只有黃色 <strong>C. Many different colors 許多不同的顏色 ✅</strong> D. No colors 沒有顏色
          </li>
          <li>
            Which object can block light and create a shadow? 哪個物體可以阻擋光並產生影子？
            <br />
            A. Glass 玻璃 <strong>B. Book 書本 ✅</strong> C. Water 水 D. Air 空氣
          </li>
          <li>
            Why do we need light for reading? 我們為什麼需要光來閱讀？
            <br />
            A. To make the book colorful 讓書本變彩色 <strong>B. To see the words clearly 看清楚字 ✅</strong> C. To keep the book warm 讓書本保持溫暖 D. To make the book heavy 讓書本變重
          </li>
          <li>
            What is a shadow? 什麼是影子？
            <br />
            <strong>A. A dark area where light is blocked 光被阻擋的黑暗區域 ✅</strong> B. A bright light 明亮的光 C. A colorful rainbow 彩色的彩虹 D. A sound 聲音
          </li>
          <li>
            Which of the following is a use of light? 以下哪一個是光的用途？
            <br />
            A. To cook food 烹煮食物 <strong>B. To illuminate a room 照亮房間 ✅</strong> C. To wash hands 洗手 D. To sleep 睡覺
          </li>
          <li>
            What happens when you stand in the sunlight? 當你站在陽光下時會發生什麼？
            <br />
            A. You become invisible 你會隱形 <strong>B. You cast a shadow 你會產生影子 ✅</strong> C. You glow in the dark 你會在黑暗中發光 D. Nothing happens 什麼都不會發生
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The moon is a source of light. 月亮是光源。 — <strong>False ❌</strong></li>
          <li>Light can pass through opaque objects. 光可以穿過不透明的物體。 — <strong>False ❌</strong></li>
          <li>Sunlight contains many colors. 陽光包含許多顏色。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two sources of light. 列出兩個光源。</li>
          <li>How does light help us in daily life? 光如何在日常生活中幫助我們？</li>
          <li>What happens when you shine a light on a book? 當你用手電筒照書本時會發生什麼？</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfLightAndRelatedPhenomenaPage;