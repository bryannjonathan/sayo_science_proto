import React from 'react';
import BackButton from '@/components/BackButton';

const DailyWeatherPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S2-T2 Daily weather phenomena</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on daily weather phenomena! In this topic, we'll explore how different weather conditions like fog, rain, snow, and hail form. You'll learn what causes these weather events and how they affect our daily lives. Let's discover the science behind the weather we experience every day!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5EB2: Recognise the causes of some common weather phenomena (e.g. fog, rain, snow, frost, hail)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What causes fog to form? 霧是如何形成的?
            <br />
            <strong>A. Cool air meeting warm, moist air 冷空氣遇到溫暖潮濕的空氣 ✅</strong> B. Strong winds blowing over mountains 強風吹過山脈 C. Direct sunlight heating the ground 陽光直接加熱地面 D. Ocean waves crashing on the shore 海浪拍打岸邊
          </li>
          <li>
            How is rain formed? 雨是如何形成的?
            <br />
            <strong>A. Water vapor condenses into droplets in clouds 水蒸氣在雲中凝結成水滴 ✅</strong> B. Ice crystals melt as they fall 冰晶在下落時融化 C. Snowflakes combine in the air 雪花在空中結合 D. Dew evaporates from the ground 露水從地面蒸發
          </li>
          <li>
            What is needed for snow to form? 雪的形成需要什麼條件?
            <br />
            <strong>A. Temperatures below freezing 溫度低於冰點 ✅</strong> B. High humidity and warm air 高濕度和溫暖的空氣 C. Strong sunlight 強烈的陽光 D. Dry air with no clouds 乾燥無雲的空氣
          </li>
          <li>
            What causes frost to appear on surfaces? 霜是如何在表面上形成的?
            <br />
            <strong>A. Water vapor freezing directly on cold surfaces 水蒸氣直接在冷表面上凍結 ✅</strong> B. Rain freezing as it falls 雨在下落時凍結 C. Snow melting and refreezing 雪融化後再凍結 D. Dew evaporating quickly 露水快速蒸發
          </li>
          <li>
            How is hail formed? 冰雹是如何形成的?
            <br />
            <strong>A. Layers of ice build up on frozen raindrops in storms 冰層在暴風雨中的凍結雨滴上堆積 ✅</strong> B. Snowflakes clump together in clouds 雪花在雲中聚集 C. Frost forms on tree branches 霜在樹枝上形成 D. Dew freezes on the ground 露水在地面上凍結
          </li>
          <li>
            Which weather phenomenon is caused by rapid cooling at night? 哪種天氣現象是由夜間快速冷卻引起的?
            <br />
            <strong>A. Dew 露水 ✅</strong> B. Hail 冰雹 C. Thunderstorm 雷暴 D. Tornado 龍捲風
          </li>
          <li>
            What is the main cause of thunderstorms? 雷暴的主要原因是什麼?
            <br />
            <strong>A. Rising warm air creating cumulonimbus clouds 上升的暖空氣形成積雨雲 ✅</strong> B. Cold air moving over warm oceans 冷空氣流過溫暖的海洋 C. Snow melting in the mountains 山上的雪融化 D. Fog lifting in the morning 早晨的霧消散
          </li>
          <li>
            Which condition is necessary for frost to form? 霜的形成需要什麼條件?
            <br />
            <strong>A. Temperatures below freezing and moist air 溫度低於冰點且空氣潮濕 ✅</strong> B. Hot and dry weather 炎熱乾燥的天氣 C. Strong winds 強風 D. Heavy rainfall 大雨
          </li>
          <li>
            What happens when water vapor cools and condenses in the air? 當水蒸氣冷卻並在空氣中凝結時會發生什麼?
            <br />
            <strong>A. Clouds form 形成雲 ✅</strong> B. Snow falls 下雪 C. The air becomes drier 空氣變得更乾燥 D. The temperature rises 溫度上升
          </li>
          <li>
            Why does hail usually occur during thunderstorms? 為什麼冰雹通常發生在雷暴期間?
            <br />
            <strong>A. Strong updrafts keep ice pellets in the clouds 強烈的上升氣流使冰粒保持在雲中 ✅</strong> B. The sun melts snowflakes 太陽融化了雪花 C. Frost forms on raindrops 霜在雨滴上形成 D. The air is very dry 空氣非常乾燥
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Frost forms when water vapor freezes directly on cold surfaces. 霜是當水蒸氣直接在冷表面上凍結時形成的。 — <strong>True ✅</strong></li>
          <li>Snow can form when the air temperature is above freezing. 當空氣溫度高於冰點時，雪也可以形成。 — <strong>False ❌</strong></li>
          <li>Hail is formed in cumulonimbus clouds during thunderstorms. 冰雹是在雷暴期間的積雨雲中形成的。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain how rain is different from snow. 解釋雨和雪有什麼不同。</li>
          <li>Describe two conditions needed for fog to form. 描述霧形成所需的兩個條件。</li>
          <li>Why is hail more common in some seasons than others? 為什麼冰雹在某些季節更常見?</li>
        </ul>
      </section>
    </main>
  );
};

export default DailyWeatherPhenomenaPage;