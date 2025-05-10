import React from 'react';
import BackButton from '@/components/BackButton';

const ClimateCharacteristicsOfDifferentRegionsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S2-T1 Climate characteristics of different regions</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how weather and climate differ, and learn about the unique weather patterns in different parts of the world. 
        You'll discover why some places are always hot, why others have four seasons, and how climate affects the way people live.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4EB1: State the difference between weather and climate</li>
          <li>4EB2: Describe the weather characteristics (e.g. daily variations in temperature, rainfall, snowfall and humidity) in different places</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the main difference between weather and climate? 天氣和氣候的主要區別是什麼?
            <br />
            <strong>A. Weather is short-term, climate is long-term. 天氣是短期的，氣候是長期的。 ✅</strong> B. Weather is long-term, climate is short-term. 天氣是長期的，氣候是短期的。 C. Weather and climate are the same. 天氣和氣候是一樣的。 D. Weather is only about rain, climate is only about temperature. 天氣只關於雨，氣候只關於溫度。
          </li>
          <li>
            Which of the following is a characteristic of climate? 以下哪一項是氣候的特徵?
            <br />
            A. Daily temperature changes. 每日溫度變化。 <strong>B. Average rainfall over 30 years. 30年的平均降雨量。 ✅</strong> C. Today's humidity. 今天的濕度。 D. Yesterday's snowfall. 昨天的降雪。
          </li>
          <li>
            Which region is likely to have a tropical climate? 哪個地區可能有熱帶氣候?
            <br />
            A. Near the North Pole. 靠近北極。 <strong>B. Near the equator. 靠近赤道。 ✅</strong> C. In a desert. 在沙漠中。 D. On a mountain top. 在山頂上。
          </li>
          <li>
            What is a common weather characteristic in a desert? 沙漠中常見的天氣特徵是什麼?
            <br />
            A. Heavy rainfall. 大量降雨。 B. High humidity. 高濕度。 <strong>C. Hot days and cold nights. 炎熱的白天和寒冷的夜晚。 ✅</strong> D. Frequent snowfall. 頻繁的降雪。
          </li>
          <li>
            Which of the following describes climate? 以下哪一項描述氣候?
            <br />
            A. It rained yesterday. 昨天下雨了。 <strong>B. The average temperature in July is 30°C. 七月的平均溫度是30°C。 ✅</strong> C. It is windy today. 今天有風。 D. There was a thunderstorm last night. 昨晚有雷暴。
          </li>
          <li>
            What type of climate is found near the poles? 極地附近有什麼類型的氣候?
            <br />
            A. Tropical. 熱帶。 <strong>B. Polar. 極地。 ✅</strong> C. Temperate. 溫帶。 D. Desert. 沙漠。
          </li>
          <li>
            Which of the following is a weather characteristic? 以下哪一項是天氣特徵?
            <br />
            A. Annual rainfall. 年降雨量。 B. Seasonal changes. 季節變化。 <strong>C. Today's temperature. 今天的溫度。 ✅</strong> D. Average humidity over 10 years. 10年的平均濕度。
          </li>
          <li>
            What is a common climate characteristic of a rainforest? 雨林常見的氣候特徵是什麼?
            <br />
            A. Low humidity. 低濕度。 <strong>B. High rainfall throughout the year. 全年高降雨量。 ✅</strong> C. Cold temperatures. 寒冷的溫度。 D. Little to no rainfall. 很少或沒有降雨。
          </li>
          <li>
            Which of the following is true about weather? 以下關於天氣的說法哪一項是正確的?
            <br />
            A. It is the same as climate. 它與氣候相同。 <strong>B. It changes every day. 它每天都在變化。 ✅</strong> C. It is measured over 30 years. 它是通過30年測量的。 D. It is the same everywhere. 它在任何地方都一樣。
          </li>
          <li>
            What is a common weather characteristic in a temperate region? 溫帶地區常見的天氣特徵是什麼?
            <br />
            A. Extreme heat all year. 全年極端炎熱。 <strong>B. Four distinct seasons. 四個不同的季節。 ✅</strong> C. Constant snowfall. 持續降雪。 D. No rainfall. 沒有降雨。
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Weather and climate mean the same thing. 天氣和氣候的意思是一樣的。 — <strong>False ❌</strong></li>
          <li>Climate is the average weather conditions over a long period of time. 氣候是長時間的平均天氣條件。 — <strong>True ✅</strong></li>
          <li>Deserts have high rainfall throughout the year. 沙漠全年降雨量高。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe one difference between weather and climate. 描述天氣和氣候之間的一個區別。</li>
          <li>What are two weather characteristics you might experience in a tropical region? 在熱帶地區你可能會經歷的兩種天氣特徵是什麼?</li>
          <li>Why is it important to understand the climate of a region? 為什麼了解一個地區的氣候很重要?</li>
        </ul>
      </section>
    </main>
  );
};

export default ClimateCharacteristicsOfDifferentRegionsPage;