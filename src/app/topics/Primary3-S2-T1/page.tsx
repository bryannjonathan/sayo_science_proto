import React from 'react';
import BackButton from '@/components/BackButton';

const DailyWeatherPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S2-T1 Daily weather phenomena</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on daily weather phenomena! In this topic, we'll explore how water moves through the environment in different forms like rain, clouds, and snow. You'll learn about the water cycle and how to recognize common weather symbols. Let's discover how weather affects our daily lives!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3EB1: State the processes of water cycle (evaporation, condensation, precipitation)</li>
          <li>3EB2: Relate some common weather phenomena (e.g. clouds, rain, snow, dew) to the three-state changes of water</li>
          <li>3EB3: Be aware of some commonly used weather icons</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the process called when water turns into water vapor? 水變成水蒸氣的過程叫什麼?
            <br />
            <strong>A. Evaporation 蒸發 ✅</strong> B. Condensation 凝結 C. Precipitation 降水 D. Freezing 凝固
          </li>
          <li>
            Which weather phenomenon is formed when water vapor condenses in the sky? 水蒸氣在天空中凝結時會形成哪種天氣現象?
            <br />
            A. Rain 雨 B. Snow 雪 <strong>C. Clouds 雲 ✅</strong> D. Dew 露水
          </li>
          <li>
            What is the term for water falling from the sky in liquid form? 水以液體形式從天空落下叫什麼?
            <br />
            A. Evaporation 蒸發 B. Condensation 凝結 <strong>C. Precipitation 降水 ✅</strong> D. Freezing 凝固
          </li>
          <li>
            Which of the following is NOT part of the water cycle? 以下哪項不屬於水循環的一部分?
            <br />
            A. Evaporation 蒸發 B. Condensation 凝結 <strong>C. Photosynthesis 光合作用 ✅</strong> D. Precipitation 降水
          </li>
          <li>
            What weather icon usually represents sunny weather? 哪種天氣圖標通常代表晴天?
            <br />
            A. Cloud with rain 雨雲 <strong>B. Sun 太陽 ✅</strong> C. Snowflake 雪花 D. Lightning bolt 閃電
          </li>
          <li>
            Dew forms when water vapor condenses on which surface? 露水是在水蒸氣凝結在什麼表面上形成的?
            <br />
            A. Clouds 雲 <strong>B. Leaves 樹葉 ✅</strong> C. Mountains 山 D. Ocean 海洋
          </li>
          <li>
            Which process changes water vapor into liquid water? 哪個過程將水蒸氣變成液態水?
            <br />
            A. Evaporation 蒸發 <strong>B. Condensation 凝結 ✅</strong> C. Precipitation 降水 D. Freezing 凝固
          </li>
          <li>
            What is snow? 雪是什麼?
            <br />
            A. Liquid water 液態水 B. Water vapor 水蒸氣 C. Frozen water vapor 凍結的水蒸氣 <strong>D. Frozen raindrops 凍結的雨滴 ✅</strong>
          </li>
          <li>
            Which weather icon represents rain? 哪種天氣圖標代表下雨?
            <br />
            A. Sun 太陽 <strong>B. Cloud with rain drops 帶雨滴的雲 ✅</strong> C. Snowflake 雪花 D. Lightning bolt 閃電
          </li>
          <li>
            What is the first step of the water cycle? 水循環的第一步是什麼?
            <br />
            A. Condensation 凝結 B. Precipitation 降水 <strong>C. Evaporation 蒸發 ✅</strong> D. Collection 聚集
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Evaporation is when liquid water turns into water vapor. 蒸發是液態水變成水蒸氣的過程。 — <strong>True ✅</strong></li>
          <li>Snow is a form of liquid water. 雪是液態水的一種形式。 — <strong>False ❌</strong></li>
          <li>A cloud weather icon means it will be sunny. 雲的天氣圖標代表晴天。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two processes in the water cycle. 列出水循環中的兩個過程。</li>
          <li>How is rain formed? 雨是如何形成的?</li>
          <li>What does a snowflake weather icon mean? 雪花天氣圖標代表什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default DailyWeatherPhenomenaPage;