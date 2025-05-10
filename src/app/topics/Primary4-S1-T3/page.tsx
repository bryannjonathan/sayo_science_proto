import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfLightAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S1-T3 Properties of light and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exploration of light and its amazing properties! In this topic, we'll learn about different sources of light, how light reflects off surfaces, and how shadows change throughout the day. Get ready to discover why we can see objects, how mirrors work, and what makes our shadows grow and shrink!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4MB4: Differentiate the light coming from a light source (e.g. sunlight, light from a flashlight) from that reflected from objects (e.g. moonlight)</li>
          <li>4MB5: Be aware of some examples of reflection of light (e.g. reflection on water surface, mirror)</li>
          <li>4MB6: Recognise the changes in length and position of shadow under sunlight at different times</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is a light source? 以下哪一個是光源?
            <br />
            <strong>A. Sunlight 陽光 ✅</strong> B. Moonlight 月光 C. Reflection in a mirror 鏡子中的反射 D. Shadow 影子
          </li>
          <li>
            What is moonlight an example of? 月光是哪種現象的例子?
            <br />
            A. Light source 光源 <strong>B. Reflected light 反射光 ✅</strong> C. Shadow 影子 D. Heat energy 熱能
          </li>
          <li>
            Which surface can reflect light? 哪種表面可以反射光?
            <br />
            <strong>A. Mirror 鏡子 ✅</strong> B. Black paper 黑紙 C. Wooden table 木桌 D. Fabric 布料
          </li>
          <li>
            When does your shadow appear the longest during the day? 一天中什麼時候你的影子最長?
            <br />
            A. Noon 中午 <strong>B. Morning or evening 早上或傍晚 ✅</strong> C. Night 夜晚 D. Afternoon 下午
          </li>
          <li>
            What happens to the length of your shadow when the sun is directly overhead? 當太陽在正上方時，你的影子會發生什麼變化?
            <br />
            A. It becomes longer 變長 <strong>B. It becomes shorter 變短 ✅</strong> C. It disappears 消失 D. It stays the same 保持不變
          </li>
          <li>
            Which of the following is NOT a light source? 以下哪一個不是光源?
            <br />
            A. Flashlight 手電筒 B. Candle 蠟燭 <strong>C. Moon 月亮 ✅</strong> D. Light bulb 燈泡
          </li>
          <li>
            What causes the reflection of light on a water surface? 什麼導致光在水面上的反射?
            <br />
            <strong>A. The smooth surface of water 水的平滑表面 ✅</strong> B. The color of water 水的顏色 C. The temperature of water 水的溫度 D. The depth of water 水的深度
          </li>
          <li>
            Which of the following objects does NOT reflect light? 以下哪個物體不反射光?
            <br />
            A. Mirror 鏡子 B. Polished metal 拋光的金屬 <strong>C. Black cloth 黑布 ✅</strong> D. Glass window 玻璃窗
          </li>
          <li>
            What time of day is your shadow the shortest? 一天中什麼時候你的影子最短?
            <br />
            A. Morning 早上 <strong>B. Noon 中午 ✅</strong> C. Evening 傍晚 D. Night 夜晚
          </li>
          <li>
            Why can we see objects that are not light sources? 為什麼我們能看到不是光源的物體?
            <br />
            A. Because they emit light 因為它們發出光 <strong>B. Because they reflect light 因為它們反射光 ✅</strong> C. Because they are black 因為它們是黑色的 D. Because they are hot 因為它們很熱
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Moonlight is a light source. 月光是光源。 — <strong>False ❌</strong></li>
          <li>A shadow is formed when light is blocked by an object. 當光被物體擋住時會形成影子。 — <strong>True ✅</strong></li>
          <li>The length of your shadow remains the same throughout the day. 你的影子在一天中的長度保持不變。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of light sources and two examples of objects that reflect light. 舉出兩個光源的例子和兩個反射光的物體的例子。</li>
          <li>Explain why your shadow changes in length during the day. 解釋為什麼你的影子在一天中會改變長度。</li>
          <li>Describe what happens to light when it hits a mirror. 描述光照射到鏡子時會發生什麼。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfLightAndRelatedPhenomenaPage;