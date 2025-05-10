import React from 'react';
import BackButton from '@/components/BackButton';

const EngineeringDesignCycleAndApplicationsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S3-T4 Engineering, design cycle and applications</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exciting lesson on engineering and design! In this topic, we'll explore how engineers use science and technology to create amazing things that improve our lives. We'll learn about ancient Chinese engineering marvels, modern projects like bridges and trains, and how the design cycle helps solve problems. Get ready to discover how engineering shapes our world!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3SC1: Be aware that engineering projects can improve people’s lives</li>
          <li>3SC2: Be aware that the foundation of engineering is science and technology</li>
          <li>3SC3: Give some examples of ancient Chinese skills and engineering (e.g. Zhaozhou Bridge, mortise and tenon joints)</li>
          <li>3SC4: Recognise some examples of the nation’s and Hong Kong’s major engineering projects (e.g. maglev train, Hong Kong-Zhuhai-Macao Bridge)</li>
          <li>3SC5: Appreciate the nation’s contributions to engineering development</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which ancient Chinese engineering marvel is known for its use of mortise and tenon joints? 哪個古代中國工程奇蹟以使用榫卯結構聞名?
            <br />
            <strong>A. Zhaozhou Bridge 趙州橋 ✅</strong> B. Great Wall of China 萬里長城 C. Terracotta Army 兵馬俑 D. Forbidden City 紫禁城
          </li>
          <li>
            What is the foundation of engineering? 工程的基礎是什麼?
            <br />
            A. Art and music 藝術和音樂 <strong>B. Science and technology 科學和技術 ✅</strong> C. Sports and games 運動和遊戲 D. Cooking and baking 烹飪和烘焙
          </li>
          <li>
            Which of the following is a major engineering project in Hong Kong? 以下哪個是香港的主要工程項目?
            <br />
            <strong>A. Hong Kong-Zhuhai-Macao Bridge 港珠澳大橋 ✅</strong> B. Eiffel Tower 艾菲爾鐵塔 C. Sydney Opera House 悉尼歌劇院 D. Statue of Liberty 自由女神像
          </li>
          <li>
            What type of train uses magnetic levitation technology? 哪種火車使用磁懸浮技術?
            <br />
            <strong>A. Maglev train 磁懸浮列車 ✅</strong> B. Steam train 蒸汽火車 C. Bullet train 子彈火車 D. Subway train 地鐵列車
          </li>
          <li>
            Which ancient Chinese skill is used to join wood without nails? 哪種古代中國技術不用釘子就能連接木材?
            <br />
            <strong>A. Mortise and tenon joints 榫卯結構 ✅</strong> B. Welding 焊接 C. Gluing 黏合 D. Screwing 螺絲固定
          </li>
          <li>
            How can engineering projects improve people's lives? 工程項目如何改善人們的生活?
            <br />
            <strong>A. By building bridges and roads 建造橋樑和道路 ✅</strong> B. By creating new toys 創造新玩具 C. By drawing pictures 畫畫 D. By singing songs 唱歌
          </li>
          <li>
            Which of the following is NOT an example of ancient Chinese engineering? 以下哪個不是古代中國工程的例子?
            <br />
            A. Zhaozhou Bridge 趙州橋 B. Great Wall of China 萬里長城 <strong>C. Eiffel Tower 艾菲爾鐵塔 ✅</strong> D. Dujiangyan Irrigation System 都江堰水利工程
          </li>
          <li>
            What is the purpose of the design cycle in engineering? 工程中的設計週期的目的是什麼?
            <br />
            <strong>A. To solve problems and improve designs 解決問題和改進設計 ✅</strong> B. To make things look pretty 讓東西看起來漂亮 C. To waste time 浪費時間 D. To play games 玩遊戲
          </li>
          <li>
            Which country has made significant contributions to engineering development? 哪個國家對工程發展做出了重大貢獻?
            <br />
            <strong>A. China 中國 ✅</strong> B. Mars 火星 C. Fairyland 仙境 D. Neverland 夢幻島
          </li>
          <li>
            What is the Hong Kong-Zhuhai-Macao Bridge an example of? 港珠澳大橋是哪種工程的例子?
            <br />
            <strong>A. Major engineering project 主要工程項目 ✅</strong> B. Ancient Chinese skill 古代中國技術 C. Maglev train 磁懸浮列車 D. Toy bridge 玩具橋
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Zhaozhou Bridge is an example of ancient Chinese engineering. 趙州橋是古代中國工程的一個例子。 — <strong>True ✅</strong></li>
          <li>Engineering projects cannot improve people's lives. 工程項目不能改善人們的生活。 — <strong>False ❌</strong></li>
          <li>The Hong Kong-Zhuhai-Macao Bridge is a major engineering project. 港珠澳大橋是一個主要工程項目。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Can you name one ancient Chinese engineering project and explain how it helped people? 你能說出一個古代中國工程項目並解釋它如何幫助人們嗎?</li>
          <li>How do you think the maglev train is different from a regular train? 你認為磁懸浮列車與普通火車有什麼不同?</li>
          <li>Why is science and technology important for engineering? 為什麼科學和技術對工程很重要?</li>
        </ul>
      </section>
    </main>
  );
};

export default EngineeringDesignCycleAndApplicationsPage;