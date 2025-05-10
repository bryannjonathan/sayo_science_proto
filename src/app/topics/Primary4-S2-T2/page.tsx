import React from 'react';
import BackButton from '@/components/BackButton';

const ChangesInClimateAndSeasonsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S2-T2 Changes in climate and seasons</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on changes in climate and seasons! In this topic, we'll explore how our planet's climate is changing, what causes global warming, and how it affects animals, people, and the environment. We'll also learn simple ways we can help slow down climate change and protect our beautiful Earth.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4EB3: Show concern for the phenomenon of global warming and its impacts (e.g. glacier melting, rising sea levels, desertification)</li>
          <li>4EB4: Recognise some methods to slow down global warming</li>
          <li>4EB5: Show concern for environmental and climate change</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: What is the main cause of global warming? 全球暖化的主要原因是什麼?
            <br />
            Options Line: A. Cutting down trees 砍伐樹木 <strong>B. Burning fossil fuels 燃燒化石燃料 ✅</strong> C. Using too much water 使用過多水資源 D. Eating too much meat 食用過多肉類
          </li>
          <li>
            Question: Which of the following is a result of global warming? 以下哪一項是全球暖化的結果?
            <br />
            Options Line: A. More ice at the poles 極地冰層增加 <strong>B. Rising sea levels 海平面上升 ✅</strong> C. Colder winters 冬天更冷 D. Less desertification 沙漠化減少
          </li>
          <li>
            Question: How can we slow down global warming? 我們如何減緩全球暖化?
            <br />
            Options Line: A. Use more plastic 使用更多塑膠 <strong>B. Plant more trees 種植更多樹木 ✅</strong> C. Drive cars more often 更常開車 D. Leave lights on all day 整天開燈
          </li>
          <li>
            Question: What happens when glaciers melt? 冰川融化會導致什麼?
            <br />
            Options Line: A. Sea levels drop 海平面下降 <strong>B. Animals lose their homes 動物失去家園 ✅</strong> C. More rain in deserts 沙漠中更多雨水 D. Less sunlight 陽光減少
          </li>
          <li>
            Question: Which of these is a way to reduce your carbon footprint? 以下哪一項可以減少碳足跡?
            <br />
            Options Line: <strong>A. Using reusable bags 使用可重複使用的袋子 ✅</strong> B. Throwing away food 丟棄食物 C. Leaving electronics on 讓電子設備一直開著 D. Driving alone to school 獨自開車上學
          </li>
          <li>
            Question: What is desertification? 什麼是沙漠化?
            <br />
            Options Line: A. Forests growing bigger 森林面積擴大 <strong>B. Land turning into desert 土地變成沙漠 ✅</strong> C. Oceans getting cleaner 海洋變得更乾淨 D. Cities getting greener 城市變得更綠
          </li>
          <li>
            Question: Why is it important to care about climate change? 為什麼關心氣候變化很重要?
            <br />
            Options Line: <strong>A. It affects animals and people 它影響動物和人類 ✅</strong> B. It makes winters colder 它讓冬天更冷 C. It stops rain from falling 它阻止下雨 D. It makes days shorter 它讓白天變短
          </li>
          <li>
            Question: What can you do to help the environment? 你可以做什麼來幫助環境?
            <br />
            Options Line: <strong>A. Recycle paper and plastic 回收紙張和塑膠 ✅</strong> B. Waste electricity 浪費電力 C. Use disposable items 使用一次性物品 D. Litter everywhere 到處亂扔垃圾
          </li>
          <li>
            Question: Which season is most affected by climate change? 哪個季節受氣候變化影響最大?
            <br />
            Options Line: A. Winter 冬天 B. Spring 春天 C. Summer 夏天 <strong>D. All seasons 所有季節 ✅</strong>
          </li>
          <li>
            Question: What is one effect of rising sea levels? 海平面上升的一個影響是什麼?
            <br />
            Options Line: A. More islands form 形成更多島嶼 <strong>B. Flooding in coastal areas 沿海地區洪水 ✅</strong> C. Fish can fly 魚會飛 D. Oceans disappear 海洋消失
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Planting trees can help reduce global warming. 種樹可以幫助減少全球暖化。 — <strong>True ✅</strong></li>
          <li>Global warming only affects the polar regions. 全球暖化只影響極地地區。 — <strong>False ❌</strong></li>
          <li>Using less electricity can help slow down climate change. 減少用電可以幫助減緩氣候變化。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>How does global warming affect animals? 全球暖化如何影響動物?</li>
          <li>What are two things you can do to help slow down global warming? 你可以做哪兩件事來幫助減緩全球暖化?</li>
          <li>Why should we care about melting glaciers? 我們為什麼要關心冰川融化?</li>
        </ul>
      </section>
    </main>
  );
};

export default ChangesInClimateAndSeasonsPage;