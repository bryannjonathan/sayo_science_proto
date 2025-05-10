import React from 'react';
import BackButton from '@/components/BackButton';

const EarthsHistoryPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S2-T0 Earth’s history</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exploration of Earth's history! In this topic, we'll learn about how fossils and fossil fuels form, 
        discover the connection between crustal activities and natural disasters, and explore how humans respond to these 
        powerful natural events. Get ready to travel through time and understand our planet's fascinating past!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6EA1: Be aware of the formation processes of fossils and fossil fuels</li>
          <li>6EA2: Be aware that some natural disasters (e.g. volcanic eruptions, earthquakes) are related to crustal activities</li>
          <li>6EA3: Recognise some ways that human respond to natural disasters</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: How are fossils formed? 化石是如何形成的?
            <br />
            <strong>A. From the remains of dead plants and animals buried under layers of sediment 來自被埋在沉積層下的動植物遺骸 ✅</strong> B. From melted rocks deep inside the Earth 來自地球深處的熔融岩石 C. From water evaporating from the ocean 來自海洋中蒸發的水分 D. From lightning striking the ground 來自閃電擊中地面
          </li>
          <li>
            Question: Which of the following is a fossil fuel? 以下哪一種是化石燃料?
            <br />
            <strong>A. Coal 煤 ✅</strong> B. Solar energy 太陽能 C. Wind energy 風能 D. Hydroelectric power 水力發電
          </li>
          <li>
            Question: What causes earthquakes? 地震是由什麼引起的?
            <br />
            <strong>A. Movement of tectonic plates 板塊運動 ✅</strong> B. Heavy rainfall 大雨 C. Strong winds 強風 D. Melting ice 冰融化
          </li>
          <li>
            Question: Which natural disaster is caused by the eruption of magma from the Earth's crust? 哪一種自然災害是由地殼中的岩漿噴發引起的?
            <br />
            <strong>A. Volcanic eruption 火山爆發 ✅</strong> B. Tsunami 海嘯 C. Hurricane 颶風 D. Tornado 龍捲風
          </li>
          <li>
            Question: How can humans prepare for natural disasters? 人類如何為自然災害做準備?
            <br />
            <strong>A. By building earthquake-resistant structures 建造抗震建築 ✅</strong> B. By cutting down all trees 砍伐所有樹木 C. By ignoring warning signs 忽略警告信號 D. By living near active volcanoes 住在活火山附近
          </li>
          <li>
            Question: What is the main source of energy for fossil fuels? 化石燃料的主要能量來源是什麼?
            <br />
            <strong>A. Ancient sunlight stored in plants and animals 儲存在動植物中的古老陽光 ✅</strong> B. Wind energy 風能 C. Nuclear reactions 核反應 D. Ocean waves 海浪
          </li>
          <li>
            Question: Which layer of the Earth is responsible for most earthquakes and volcanic eruptions? 地球的哪一層導致大多數地震和火山爆發?
            <br />
            <strong>A. Crust 地殼 ✅</strong> B. Mantle 地幔 C. Outer core 外核 D. Inner core 內核
          </li>
          <li>
            Question: What is one way humans respond to earthquakes? 人類應對地震的一種方式是什麼?
            <br />
            <strong>A. Creating early warning systems 建立早期預警系統 ✅</strong> B. Building houses with weak foundations 建造地基不穩的房屋 C. Ignoring safety drills 忽略安全演習 D. Living in high-risk areas 住在高風險地區
          </li>
          <li>
            Question: Which of the following is NOT a fossil fuel? 以下哪一種不是化石燃料?
            <br />
            A. Natural gas 天然氣 B. Petroleum 石油 C. Coal 煤 <strong>D. Solar energy 太陽能 ✅</strong>
          </li>
          <li>
            Question: What is the primary reason fossils are important to scientists? 化石對科學家來說重要的主要原因是什麼?
            <br />
            <strong>A. They provide clues about Earth's history 它們提供關於地球歷史的線索 ✅</strong> B. They are used as fuel 它們被用作燃料 C. They are beautiful to look at 它們看起來很美 D. They are easy to find 它們很容易找到
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Fossil fuels are formed from the remains of ancient plants and animals. 化石燃料是由古代動植物的遺骸形成的。 — <strong>True ✅</strong></li>
          <li>Earthquakes are caused by the movement of water in the oceans. 地震是由海洋中的水運動引起的。 — <strong>False ❌</strong></li>
          <li>Building codes can help reduce damage from earthquakes. 建築規範可以幫助減少地震造成的損害。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe one way fossils can help us understand Earth's history. 描述化石如何幫助我們了解地球歷史的一種方式。</li>
          <li>Explain why earthquakes and volcanic eruptions often occur in the same regions. 解釋為什麼地震和火山爆發經常發生在同一地區。</li>
          <li>What are two ways humans can protect themselves from natural disasters? 人類可以通過哪兩種方式保護自己免受自然災害的影響?</li>
        </ul>
      </section>
    </main>
  );
};

export default EarthsHistoryPage;