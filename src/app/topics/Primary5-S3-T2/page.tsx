import React from 'react';
import BackButton from '@/components/BackButton';

const InnovationAndTechnologyDevelopmentPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S3-T2 Innovation and technology development</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Innovation and Technology Development! In this topic, we'll explore how new technologies like artificial intelligence, big data, and the Internet of Things are changing our world. You'll learn about their applications in society and how they impact our daily lives. Let's discover together how innovation shapes the future!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5SB1: Be aware of the development of some innovative technologies (e.g. artificial intelligence, big data, the Internet of Things) and their applications in the society</li>
          <li>5SB2: Recognise the impact of the development of innovative technologies on human life</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is Artificial Intelligence (AI)? 什麼是人工智能（AI）？
            <br />
            <strong>A. Machines that can think and learn like humans 能像人類一樣思考和學習的機器 ✅</strong> B. A type of robot used in factories 工廠中使用的一種機器人 C. A computer game 一種電腦遊戲 D. A new type of smartphone 一種新型智能手機
          </li>
          <li>
            Which of the following is an example of the Internet of Things (IoT)? 以下哪項是物聯網（IoT）的例子？
            <br />
            <strong>A. A smart fridge that orders food when you run out 當食物用完時會自動訂購的智能冰箱 ✅</strong> B. A traditional light bulb 傳統燈泡 C. A book 一本書 D. A bicycle 一輛自行車
          </li>
          <li>
            How does big data help businesses? 大數據如何幫助企業？
            <br />
            <strong>A. By analyzing large amounts of information to make better decisions 通過分析大量信息來做出更好的決策 ✅</strong> B. By making products cheaper 通過降低產品價格 C. By replacing all workers with machines 用機器取代所有工人 D. By creating new types of food 通過創造新型食物
          </li>
          <li>
            What is a common application of AI in daily life? 人工智能在日常生活中常見的應用是什麼？
            <br />
            <strong>A. Voice assistants like Siri or Alexa 像Siri或Alexa這樣的語音助手 ✅</strong> B. A microwave oven 微波爐 C. A pencil 鉛筆 D. A pair of shoes 一雙鞋子
          </li>
          <li>
            Which technology allows devices to communicate with each other without human intervention? 哪種技術允許設備在沒有人類干預的情況下相互通信？
            <br />
            <strong>A. Internet of Things (IoT) 物聯網（IoT） ✅</strong> B. Television 電視 C. Printing press 印刷機 D. Typewriter 打字機
          </li>
          <li>
            How has technology improved healthcare? 技術如何改善醫療保健？
            <br />
            <strong>A. By enabling remote consultations with doctors 通過實現與醫生的遠程諮詢 ✅</strong> B. By making hospitals bigger 通過使醫院更大 C. By replacing all doctors with robots 用機器人取代所有醫生 D. By inventing new diseases 通過發明新的疾病
          </li>
          <li>
            What is a benefit of using drones in delivery services? 在配送服務中使用無人機有什麼好處？
            <br />
            <strong>A. Faster delivery times 更快的送貨時間 ✅</strong> B. Higher costs 更高的成本 C. More pollution 更多的污染 D. Less accuracy 更低的準確性
          </li>
          <li>
            Which of the following is a negative impact of technology? 以下哪項是技術的負面影響？
            <br />
            <strong>A. Increased screen time leading to health issues 屏幕時間增加導致健康問題 ✅</strong> B. Better communication 更好的溝通 C. Improved education 改善教育 D. Faster transportation 更快的交通
          </li>
          <li>
            What is an example of innovative technology in agriculture? 農業中創新技術的例子是什麼？
            <br />
            <strong>A. Using sensors to monitor soil conditions 使用傳感器監測土壤條件 ✅</strong> B. Planting seeds by hand 手工播種 C. Using horses to plow fields 用馬犁田 D. Building wooden fences 建造木柵欄
          </li>
          <li>
            How can technology help the environment? 技術如何幫助環境？
            <br />
            <strong>A. By reducing waste through smart systems 通過智能系統減少浪費 ✅</strong> B. By cutting down more trees 通過砍伐更多樹木 C. By increasing pollution 通過增加污染 D. By using more fossil fuels 通過使用更多化石燃料
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Artificial Intelligence can only be used in computers. 人工智能只能在電腦中使用。 — <strong>False ❌</strong></li>
          <li>Big data helps scientists understand weather patterns better. 大數據幫助科學家更好地理解天氣模式。 — <strong>True ✅</strong></li>
          <li>The Internet of Things requires human intervention to work. 物聯網需要人類干預才能工作。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give one example of how artificial intelligence is used in your daily life. 舉一個人工智能在你日常生活中應用的例子。</li>
          <li>How do you think technology will change schools in the future? 你認為技術將來會如何改變學校？</li>
          <li>What is one positive and one negative impact of the Internet of Things? 物聯網的一個正面和一個負面影響是什麼？</li>
        </ul>
      </section>
    </main>
  );
};

export default InnovationAndTechnologyDevelopmentPage;