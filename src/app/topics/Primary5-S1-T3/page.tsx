import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfSoundAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S1-T3 Properties of sound and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exploration of sound! In this topic, we'll learn how sound travels through different materials, 
        what makes sounds high or low (pitch), how loud sounds can affect us, and ways to protect our hearing. 
        We'll also discover how scientists measure sound and what we can do about noise pollution. 
        Get ready to listen carefully and learn about the amazing properties of sound!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5MB3: Be aware that sound can travel through different media</li>
          <li>5MB4: Be aware that changes in pitch are caused by changes in vibration</li>
          <li>5MB5: Recognise the causes of noise and ways to cope with it</li>
          <li>5MB6: Recognise the ways to protect hearing</li>
          <li>5MB7: Recognise ways to measure the loudness of sound, and the commonly used unit (decibel)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Through which of the following can sound NOT travel? 聲音不能通過以下哪種介質傳播?
            <br />
            Options Line: A. Air 空氣 B. Water 水 <strong>C. Vacuum 真空 ✅</strong> D. Solid 固體
          </li>
          <li>
            Question: What causes changes in pitch? 什麼導致音高的變化?
            <br />
            Options Line: <strong>A. Changes in vibration 振動的變化 ✅</strong> B. Changes in loudness 響度的變化 C. Changes in medium 介質的變化 D. Changes in temperature 溫度的變化
          </li>
          <li>
            Question: Which of the following is a common source of noise pollution? 以下哪項是噪音污染的常見來源?
            <br />
            Options Line: A. Birds singing 鳥鳴 <strong>B. Traffic 交通 ✅</strong> C. Whispering 耳語 D. Rainfall 下雨
          </li>
          <li>
            Question: How can we protect our hearing? 我們如何保護聽力?
            <br />
            Options Line: A. Avoid loud noises 避免巨大噪音 B. Use earplugs in noisy environments 在嘈雜環境中使用耳塞 <strong>C. Both A and B A和B都是 ✅</strong> D. None of the above 以上都不是
          </li>
          <li>
            Question: What is the unit used to measure loudness? 用於測量響度的單位是什麼?
            <br />
            Options Line: A. Hertz 赫茲 <strong>B. Decibel 分貝 ✅</strong> C. Watt 瓦特 D. Volt 伏特
          </li>
          <li>
            Question: Which medium does sound travel fastest through? 聲音在以下哪種介質中傳播最快?
            <br />
            Options Line: A. Air 空氣 B. Water 水 <strong>C. Steel 鋼 ✅</strong> D. Vacuum 真空
          </li>
          <li>
            Question: What happens to the pitch when the vibration increases? 當振動增加時，音高會發生什麼變化?
            <br />
            Options Line: <strong>A. Pitch increases 音高增加 ✅</strong> B. Pitch decreases 音高降低 C. Pitch stays the same 音高保持不變 D. Pitch disappears 音高消失
          </li>
          <li>
            Question: Which of the following is NOT a way to cope with noise? 以下哪項不是應對噪音的方法?
            <br />
            Options Line: A. Wearing earplugs 戴耳塞 <strong>B. Listening to loud music 聽大聲的音樂 ✅</strong> C. Using soundproof materials 使用隔音材料 D. Reducing noise at the source 從源頭減少噪音
          </li>
          <li>
            Question: What is a safe level of sound for human hearing? 對人類聽力來說，安全的聲音水平是多少?
            <br />
            Options Line: <strong>A. Below 85 decibels 低於85分貝 ✅</strong> B. Below 120 decibels 低於120分貝 C. Below 60 decibels 低於60分貝 D. Below 30 decibels 低於30分貝
          </li>
          <li>
            Question: Which of the following actions can help reduce noise pollution? 以下哪項行動可以幫助減少噪音污染?
            <br />
            Options Line: A. Planting trees 種植樹木 B. Using quieter machines 使用更安靜的機器 <strong>C. Both A and B A和B都是 ✅</strong> D. None of the above 以上都不是
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Sound travels faster in water than in air. 聲音在水中比在空氣中傳播得更快。 — <strong>True ✅</strong></li>
          <li>The pitch of a sound depends on its loudness. 聲音的音高取決於它的響度。 — <strong>False ❌</strong></li>
          <li>Noise pollution can cause hearing loss. 噪音污染可能導致聽力損失。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain why sound cannot travel through a vacuum. 解釋為什麼聲音不能在真空中傳播。</li>
          <li>Describe two ways to protect your hearing from loud noises. 描述兩種保護聽力免受巨大噪音影響的方法。</li>
          <li>How does the loudness of sound affect our daily lives? Give one example. 聲音的響度如何影響我們的日常生活？舉一個例子。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfSoundAndRelatedPhenomenaPage;