import React from 'react';
import BackButton from '@/components/BackButton';

const ClimateCharacteristicsOfDifferentRegionsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S2-T1 Climate characteristics of different regions</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the climate characteristics of different regions, with a special focus on Hong Kong. 
        You will learn about weather elements like temperature, wind speed, humidity, and rainfall, and how they vary across seasons. 
        Let's discover how these factors shape our daily weather and climate patterns!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5EB1: Describe Hong Kong’s weather information such as temperature, wind speed, wind direction, relative humidity, rainfall, etc. based on weather data</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the average temperature in Hong Kong during summer? 香港夏季的平均溫度是多少？
            <br />
            A. 15°C - 20°C 15°C - 20°C B. 25°C - 30°C 25°C - 30°C <strong>C. 30°C - 35°C 30°C - 35°C ✅</strong> D. 40°C - 45°C 40°C - 45°C
          </li>
          <li>
            Which instrument is used to measure wind speed? 哪種儀器用於測量風速？
            <br />
            A. Thermometer 溫度計 <strong>B. Anemometer 風速計 ✅</strong> C. Barometer 氣壓計 D. Hygrometer 濕度計
          </li>
          <li>
            What does relative humidity measure? 相對濕度測量的是什麼？
            <br />
            A. The amount of rainfall 降雨量 <strong>B. The amount of water vapor in the air 空氣中的水蒸氣量 ✅</strong> C. The speed of the wind 風速 D. The temperature 溫度
          </li>
          <li>
            Which season in Hong Kong is known for heavy rainfall? 香港哪個季節以降雨量大而聞名？
            <br />
            A. Winter 冬季 B. Spring 春季 <strong>C. Summer 夏季 ✅</strong> D. Autumn 秋季
          </li>
          <li>
            What is the main wind direction in Hong Kong during winter? 香港冬季的主要風向是什麼？
            <br />
            <strong>A. Northeast 東北 ✅</strong> B. Southwest 西南 C. Southeast 東南 D. Northwest 西北
          </li>
          <li>
            Which of the following is NOT a weather element? 以下哪項不是天氣要素？
            <br />
            A. Temperature 溫度 B. Humidity 濕度 C. Wind speed 風速 <strong>D. Population 人口 ✅</strong>
          </li>
          <li>
            How is rainfall measured? 降雨量是如何測量的？
            <br />
            <strong>A. In millimeters 以毫米為單位 ✅</strong> B. In degrees Celsius 以攝氏度為單位 C. In kilometers per hour 以每小時公里為單位 D. In grams 以克為單位
          </li>
          <li>
            What is the typical relative humidity in Hong Kong during summer? 香港夏季的典型相對濕度是多少？
            <br />
            A. 30% - 40% 30% - 40% B. 50% - 60% 50% - 60% C. 70% - 80% 70% - 80% <strong>D. 80% - 90% 80% - 90% ✅</strong>
          </li>
          <li>
            Which season in Hong Kong is usually the driest? 香港哪個季節通常最乾燥？
            <br />
            <strong>A. Winter 冬季 ✅</strong> B. Spring 春季 C. Summer 夏季 D. Autumn 秋季
          </li>
          <li>
            What is the primary source of Hong Kong's weather data? 香港天氣數據的主要來源是什麼？
            <br />
            <strong>A. Hong Kong Observatory 香港天文台 ✅</strong> B. Television stations 電視台 C. Newspapers 報紙 D. Social media 社交媒體
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Hong Kong's winter is usually warm and humid. 香港的冬季通常溫暖潮濕。 — <strong>False ❌</strong></li>
          <li>Wind speed is measured in degrees Celsius. 風速以攝氏度為單位測量。 — <strong>False ❌</strong></li>
          <li>The Hong Kong Observatory provides weather data to the public. 香港天文台向公眾提供天氣數據。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe two weather characteristics of Hong Kong during summer. 描述香港夏季的兩個天氣特徵。</li>
          <li>Why is it important to measure wind direction in weather forecasting? 為什麼在天氣預報中測量風向很重要？</li>
          <li>How does relative humidity affect our daily life? Give one example. 相對濕度如何影響我們的日常生活？舉一個例子。</li>
        </ul>
      </section>
    </main>
  );
};

export default ClimateCharacteristicsOfDifferentRegionsPage;