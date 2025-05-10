import React from 'react';
import BackButton from '@/components/BackButton';

const TechnologyInDailyLifePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S3-T2 Technology in daily life</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how technology has changed our daily lives. We'll learn about important inventions like the telephone and electric light, and see how they have evolved over time to make our lives easier and more convenient.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3SB1: Be aware that some important technological inventions in history (e.g. steam engine, electric light, telephone) have improved people’s lives</li>
          <li>3SB2: Recognise the evolution process of the design of some common products (e.g. telephone, television, automobile)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which invention helped people communicate over long distances before mobile phones? 哪項發明在手機出現之前幫助人們進行遠距離溝通?
            <br />
            A. Steam engine 蒸汽機 B. Electric light 電燈 <strong>C. Telephone 電話 ✅</strong> D. Television 電視
          </li>
          <li>
            What did the invention of the electric light replace in homes? 電燈的發明取代了家庭中的什麼?
            <br />
            <strong>A. Candles 蠟燭 ✅</strong> B. Radio 收音機 C. Refrigerator 冰箱 D. Washing machine 洗衣機
          </li>
          <li>
            Which invention allowed factories to produce goods faster? 哪項發明讓工廠能更快生產商品?
            <br />
            A. Telephone 電話 <strong>B. Steam engine 蒸汽機 ✅</strong> C. Television 電視 D. Bicycle 自行車
          </li>
          <li>
            How did early televisions differ from modern ones? 早期的電視與現代的有何不同?
            <br />
            <strong>A. They were black and white 它們是黑白的 ✅</strong> B. They were smaller 它們更小 C. They had no sound 它們沒有聲音 D. They were portable 它們是可攜帶的
          </li>
          <li>
            What was the main purpose of the first telephones? 最初電話的主要用途是什麼?
            <br />
            A. Playing games 玩遊戲 <strong>B. Sending messages 發送訊息 ✅</strong> C. Taking photos 拍照 D. Watching videos 看影片
          </li>
          <li>
            Which invention made night-time activities easier? 哪項發明讓夜間活動更方便?
            <br />
            A. Steam engine 蒸汽機 <strong>B. Electric light 電燈 ✅</strong> C. Telephone 電話 D. Bicycle 自行車
          </li>
          <li>
            What was a major improvement in automobiles over time? 汽車隨時間的主要改進是什麼?
            <br />
            A. They became slower 它們變得更慢 B. They became more expensive 它們變得更貴 <strong>C. They became safer 它們變得更安全 ✅</strong> D. They became larger 它們變得更大
          </li>
          <li>
            Which invention helped people travel faster than walking? 哪項發明讓人們比步行更快地旅行?
            <br />
            A. Telephone 電話 B. Television 電視 <strong>C. Bicycle 自行車 ✅</strong> D. Electric light 電燈
          </li>
          <li>
            How did the steam engine help society? 蒸汽機如何幫助社會?
            <br />
            A. By making food tastier 讓食物更美味 <strong>B. By improving transportation 改善交通 ✅</strong> C. By creating new colors 創造新顏色 D. By making clothes 製作衣服
          </li>
          <li>
            What was a major change in telephones over time? 電話隨時間的主要變化是什麼?
            <br />
            <strong>A. They became wireless 它們變成無線的 ✅</strong> B. They became heavier 它們變得更重 C. They became larger 它們變得更大 D. They became slower 它們變得更慢
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The first televisions were in color. 最初的電視是彩色的。 — <strong>False ❌</strong></li>
          <li>The steam engine helped power trains and ships. 蒸汽機幫助驅動火車和輪船。 — <strong>True ✅</strong></li>
          <li>Modern telephones are heavier than the first telephones. 現代電話比最初的電話更重。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one way the telephone has changed over time. 列舉電話隨時間的一項變化。</li>
          <li>How has the electric light improved people's lives? 電燈如何改善人們的生活?</li>
          <li>Why is the steam engine considered an important invention? 為什麼蒸汽機被認為是一項重要的發明?</li>
        </ul>
      </section>
    </main>
  );
};

export default TechnologyInDailyLifePage;