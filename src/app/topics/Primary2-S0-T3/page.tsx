import React from 'react';
import BackButton from '@/components/BackButton';

const EcologicalEnvironmentPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S0-T3 Ecological environment</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on the ecological environment! In this topic, we'll explore how plants and animals interact with their surroundings. You'll learn what plants need to grow and how animals respond to changes in their environment. Let's discover the amazing ways living things adapt to their world!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2LE1: Be aware that plants need (sun) light, air and water to provide the energy required for life processes (growth, reproduction)</li>
          <li>2LE3: Be aware that animals respond to changes in environmental conditions (e.g. temperature, danger)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What do plants need to grow? 植物需要什麼來生長?
            <br />
            <strong>A. Sunlight, air, and water 陽光、空氣和水 ✅</strong> B. Only water 只有水 C. Only sunlight 只有陽光 D. Only air 只有空氣
          </li>
          <li>
            Why do plants need sunlight? 植物為什麼需要陽光?
            <br />
            <strong>A. To make food 製造食物 ✅</strong> B. To keep warm 保持溫暖 C. To look green 看起來綠色 D. To attract animals 吸引動物
          </li>
          <li>
            What happens to animals when the temperature drops? 當溫度下降時，動物會怎樣?
            <br />
            <strong>A. They may hibernate or migrate 牠們可能會冬眠或遷徙 ✅</strong> B. They grow bigger 牠們會長大 C. They change color 牠們會變色 D. They stop eating 牠們停止進食
          </li>
          <li>
            How do animals respond to danger? 動物如何應對危險?
            <br />
            <strong>A. They run away or hide 牠們逃跑或躲藏 ✅</strong> B. They dance 牠們跳舞 C. They sing 牠們唱歌 D. They sleep 牠們睡覺
          </li>
          <li>
            What is one way plants reproduce? 植物繁殖的一種方式是什麼?
            <br />
            <strong>A. By producing seeds 通過產生種子 ✅</strong> B. By jumping 通過跳躍 C. By flying 通過飛行 D. By swimming 通過游泳
          </li>
          <li>
            What do animals need to survive? 動物需要什麼來生存?
            <br />
            <strong>A. Food, water, and shelter 食物、水和庇護所 ✅</strong> B. Only food 只有食物 C. Only water 只有水 D. Only shelter 只有庇護所
          </li>
          <li>
            Why do some animals migrate? 為什麼有些動物會遷徙?
            <br />
            <strong>A. To find food or warmer weather 尋找食物或更溫暖的氣候 ✅</strong> B. To play games 玩遊戲 C. To meet new friends 認識新朋友 D. To sleep 睡覺
          </li>
          <li>
            What happens to plants without water? 沒有水，植物會怎樣?
            <br />
            <strong>A. They wilt and die 它們會枯萎並死亡 ✅</strong> B. They grow faster 它們會長得更快 C. They change color 它們會變色 D. They produce more seeds 它們會產生更多種子
          </li>
          <li>
            How do plants get water? 植物如何獲得水分?
            <br />
            <strong>A. Through their roots 通過它們的根 ✅</strong> B. Through their leaves 通過它們的葉子 C. Through their flowers 通過它們的花 D. Through their stems 通過它們的莖
          </li>
          <li>
            What do animals do when they sense danger? 當動物感覺到危險時，牠們會做什麼?
            <br />
            <strong>A. They hide or run away 牠們躲藏或逃跑 ✅</strong> B. They laugh 牠們大笑 C. They sleep 牠們睡覺 D. They dance 牠們跳舞
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Plants need sunlight, air, and water to grow. 植物需要陽光、空氣和水來生長。 — <strong>True ✅</strong></li>
          <li>Animals do not respond to changes in the environment. 動物不會對環境變化做出反應。 — <strong>False ❌</strong></li>
          <li>All animals migrate when it gets cold. 所有動物在天氣變冷時都會遷徙。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two things plants need to grow. 列出植物生長需要的兩樣東西。</li>
          <li>How do animals respond to cold weather? Give one example. 動物如何應對寒冷的天氣？舉一個例子。</li>
          <li>Why is sunlight important for plants? 為什麼陽光對植物很重要？</li>
        </ul>
      </section>
    </main>
  );
};

export default EcologicalEnvironmentPage;