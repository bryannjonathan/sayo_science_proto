import React from 'react';
import BackButton from '@/components/BackButton';

const SomePhenomenaAndPatternsObservedOnTheEarthCausedByTheMovementsOfTheSunEarthAndMoonPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S2-T1 Some phenomena and patterns observed on the Earth caused by the movements of the Sun, Earth and Moon</h1>
      <p className="text-gray-700 mb-6">
        Let's explore how the Sun, Earth, and Moon move and create patterns we see every day! In this topic, we'll learn about day and night, where the Sun rises and sets, and how these movements affect people and animals.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1EC1: Be aware that the Sun rises in the east and sets in the west</li>
          <li>1EC2: Be aware of the phenomenon of day and night and its relation to the activities of humans and other animals</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Where does the Sun rise? 太陽從哪裡升起?
            <br />
            <strong>A. East 東方 ✅</strong> B. West 西方 C. North 北方 D. South 南方
          </li>
          <li>
            Where does the Sun set? 太陽在哪裡落下?
            <br />
            A. East 東方 <strong>B. West 西方 ✅</strong> C. North 北方 D. South 南方
          </li>
          <li>
            What causes day and night? 什麼導致白天和黑夜?
            <br />
            <strong>A. The Earth spinning 地球自轉 ✅</strong> B. The Moon moving 月球移動 C. The Sun disappearing 太陽消失 D. The stars shining 星星閃爍
          </li>
          <li>
            When it is day on one side of the Earth, what is it on the other side? 當地球的一邊是白天時，另一邊是什麼?
            <br />
            A. Day 白天 <strong>B. Night 黑夜 ✅</strong> C. Morning 早晨 D. Afternoon 下午
          </li>
          <li>
            What do we see in the sky during the day? 白天我們在天空中看到什麼?
            <br />
            <strong>A. The Sun 太陽 ✅</strong> B. The Moon 月亮 C. Stars 星星 D. Clouds only 只有雲
          </li>
          <li>
            What do we see in the sky at night? 晚上我們在天空中看到什麼?
            <br />
            A. The Sun 太陽 B. The Moon 月亮 C. Stars 星星 <strong>D. Both B and C B和C都是 ✅</strong>
          </li>
          <li>
            When do most people sleep? 大多數人什麼時候睡覺?
            <br />
            A. Day 白天 <strong>B. Night 黑夜 ✅</strong> C. Morning 早晨 D. Afternoon 下午
          </li>
          <li>
            When do most people go to school? 大多數人什麼時候上學?
            <br />
            <strong>A. Day 白天 ✅</strong> B. Night 黑夜 C. Evening 晚上 D. Midnight 午夜
          </li>
          <li>
            What do animals do during the day? 動物白天做什麼?
            <br />
            A. Sleep 睡覺 B. Play 玩耍 C. Eat 吃東西 <strong>D. Both B and C B和C都是 ✅</strong>
          </li>
          <li>
            What do some animals do at night? 一些動物晚上做什麼?
            <br />
            A. Sleep 睡覺 B. Hunt 狩獵 C. Play 玩耍 <strong>D. Both A and B A和B都是 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Sun rises in the west. 太陽從西方升起。 — <strong>False ❌</strong></li>
          <li>Day and night are caused by the Earth spinning. 白天和黑夜是由地球自轉引起的。 — <strong>True ✅</strong></li>
          <li>All animals sleep at night. 所有動物都在晚上睡覺。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Why do we have day and night? 為什麼我們有白天和黑夜?</li>
          <li>What can you see in the sky during the day? 白天你在天空中能看到什麼?</li>
          <li>How does the Sun help us? 太陽如何幫助我們?</li>
        </ul>
      </section>
    </main>
  );
};

export default SomePhenomenaAndPatternsObservedOnTheEarthCausedByTheMovementsOfTheSunEarthAndMoonPage;