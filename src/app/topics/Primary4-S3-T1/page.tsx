import React from 'react';
import BackButton from '@/components/BackButton';

const TheNationsAndTheWorldsAerospaceTechnologyDevelopmentPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S3-T1 The nation’s and the world’s aerospace technology development</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exciting lesson about aerospace technology! In this topic, we'll explore how satellites help us in daily life, discover everyday products that use space technology, learn about astronauts' lives in space, and appreciate our nation's contributions to aerospace development. Get ready for an out-of-this-world learning adventure!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4SB1: Recognise the applications and impact of artificial satellites in daily life (e.g. satellite positioning, weather observations)</li>
          <li>4SB2: Give some examples of everyday products that incorporate space technology (e.g. shoe insoles, scratch resistant lenses, drinks in squeeze pouch)</li>
          <li>4SB3: Be aware of the achievements and contributions of some of the nation’s astronauts</li>
          <li>4SB4: Recognise the life of astronauts in space</li>
          <li>4SB5: Appreciate the nation’s contributions to the development of aerospace technology</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is an application of artificial satellites? 以下哪項是人造衛星的應用？
            <br />
            <strong>A. Weather observations 天氣觀測 ✅</strong> B. Cooking food 烹飪食物 C. Building houses 建造房屋 D. Washing clothes 洗衣服
          </li>
          <li>
            Which everyday product incorporates space technology? 以下哪種日常產品應用了太空科技？
            <br />
            <strong>A. Shoe insoles 鞋墊 ✅</strong> B. Wooden chair 木椅 C. Paper book 紙本書 D. Cotton shirt 棉質襯衫
          </li>
          <li>
            What is the main purpose of satellite positioning? 衛星定位的主要用途是什麼？
            <br />
            <strong>A. To help people find locations 幫助人們找到位置 ✅</strong> B. To cook food 烹飪食物 C. To wash clothes 洗衣服 D. To build houses 建造房屋
          </li>
          <li>
            Which of the following is a contribution of astronauts? 以下哪項是太空人的貢獻？
            <br />
            <strong>A. Conducting experiments in space 在太空中進行實驗 ✅</strong> B. Building roads 建造道路 C. Teaching in schools 在學校教學 D. Farming crops 種植農作物
          </li>
          <li>
            What do astronauts wear in space? 太空人在太空中穿什麼？
            <br />
            <strong>A. Spacesuits 太空服 ✅</strong> B. Swimsuits 泳衣 C. Pajamas 睡衣 D. School uniforms 校服
          </li>
          <li>
            Which of the following is a product of space technology? 以下哪項是太空科技的產品？
            <br />
            <strong>A. Scratch-resistant lenses 防刮鏡片 ✅</strong> B. Wooden table 木桌 C. Cotton socks 棉襪 D. Paper bag 紙袋
          </li>
          <li>
            How do astronauts sleep in space? 太空人如何在太空中睡覺？
            <br />
            <strong>A. In sleeping bags attached to walls 在固定在牆上的睡袋中 ✅</strong> B. On beds like on Earth 像在地球上一樣在床上 C. Floating freely 自由漂浮 D. Standing up 站立
          </li>
          <li>
            What is the main purpose of weather satellites? 氣象衛星的主要用途是什麼？
            <br />
            <strong>A. To monitor weather patterns 監測天氣模式 ✅</strong> B. To cook food 烹飪食物 C. To wash clothes 洗衣服 D. To build houses 建造房屋
          </li>
          <li>
            Which of the following is a contribution of the nation's aerospace technology? 以下哪項是我國航天科技的貢獻？
            <br />
            <strong>A. Launching satellites 發射衛星 ✅</strong> B. Building cars 建造汽車 C. Making clothes 製作衣服 D. Growing plants 種植植物
          </li>
          <li>
            What do astronauts eat in space? 太空人在太空中吃什麼？
            <br />
            <strong>A. Specially prepared food 特別準備的食物 ✅</strong> B. Fresh fruits only 只有新鮮水果 C. Raw vegetables 生蔬菜 D. Fast food 快餐
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Artificial satellites are used for weather observations. 人造衛星用於天氣觀測。 — <strong>True ✅</strong></li>
          <li>Astronauts wear regular clothes in space. 太空人在太空中穿普通衣服。 — <strong>False ❌</strong></li>
          <li>Shoe insoles are an example of everyday products that incorporate space technology. 鞋墊是應用太空科技的日常產品之一。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>How do artificial satellites help in our daily lives? Give two examples. 人造衛星如何在我們的日常生活中提供幫助？舉兩個例子。</li>
          <li>Name two products that use space technology and explain how they are useful. 列出兩種使用太空科技的產品，並解釋它們的用途。</li>
          <li>Describe one achievement of the nation's astronauts. 描述我國太空人的一項成就。</li>
        </ul>
      </section>
    </main>
  );
};

export default TheNationsAndTheWorldsAerospaceTechnologyDevelopmentPage;