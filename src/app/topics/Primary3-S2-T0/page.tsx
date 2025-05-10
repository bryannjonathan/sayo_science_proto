import React from 'react';
import BackButton from '@/components/BackButton';

const EarthsResourcesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S2-T0 Earth’s resources</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson about Earth's resources! In this topic, we'll learn about different types of water, how we use them, and why it's important to take care of our planet's resources. We'll explore renewable and non-renewable resources, and discover ways we can help protect them for the future.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3EA1: Be aware of the sources of salt water and fresh water, and their uses in daily life</li>
          <li>3EA2: Be aware that drinking water needs to be filtered and purified</li>
          <li>3EA3: Give some examples of Earth’s resources that are renewable (e.g. water, wind, forests) and that are non-renewable (e.g. petroleum, natural gas, minerals)</li>
          <li>3EA4: Be aware of the importance of responsible use of the Earth’s resources</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Where is most of the Earth's salt water found? 地球上大部分的鹹水在哪裡找到?
            <br />
            <strong>A. Oceans 海洋 ✅</strong> B. Rivers 河流 C. Lakes 湖泊 D. Underground 地下
          </li>
          <li>
            Question: Which of the following is a use of fresh water? 以下哪項是淡水的用途?
            <br />
            <strong>A. Drinking 飲用 ✅</strong> B. Making seawater 製造海水 C. Watering saltwater fish 餵養鹹水魚 D. None of the above 以上皆非
          </li>
          <li>
            Question: Why does drinking water need to be purified? 為什麼飲用水需要淨化?
            <br />
            <strong>A. To remove harmful germs 去除有害細菌 ✅</strong> B. To make it salty 讓它變鹹 C. To change its color 改變它的顏色 D. To make it taste bad 讓它變難喝
          </li>
          <li>
            Question: Which of the following is a renewable resource? 以下哪項是可再生資源?
            <br />
            <strong>A. Wind 風 ✅</strong> B. Petroleum 石油 C. Natural gas 天然氣 D. Minerals 礦物
          </li>
          <li>
            Question: Which of the following is a non-renewable resource? 以下哪項是不可再生資源?
            <br />
            A. Forests 森林 B. Water 水 <strong>C. Petroleum 石油 ✅</strong> D. Wind 風
          </li>
          <li>
            Question: What is one way to use Earth's resources responsibly? 負責任地使用地球資源的方法是什麼?
            <br />
            A. Wasting water 浪費水 <strong>B. Recycling paper 回收紙張 ✅</strong> C. Cutting down trees 砍伐樹木 D. Using plastic bags 使用塑膠袋
          </li>
          <li>
            Question: Where can we find fresh water? 我們在哪裡可以找到淡水?
            <br />
            <strong>A. Rivers and lakes 河流和湖泊 ✅</strong> B. Oceans 海洋 C. Saltwater pools 鹹水池 D. None of the above 以上皆非
          </li>
          <li>
            Question: What is an example of a non-renewable resource? 不可再生資源的例子是什麼?
            <br />
            A. Sunlight 陽光 <strong>B. Coal 煤 ✅</strong> C. Trees 樹木 D. Wind 風
          </li>
          <li>
            Question: Why is it important to save water? 為什麼節約用水很重要?
            <br />
            A. Because water is unlimited 因為水是無限的 <strong>B. Because fresh water is limited 因為淡水是有限的 ✅</strong> C. Because water is dirty 因為水是髒的 D. None of the above 以上皆非
          </li>
          <li>
            Question: What can we do to protect forests? 我們可以做什麼來保護森林?
            <br />
            A. Cut down more trees 砍伐更多樹木 <strong>B. Plant new trees 種植新樹木 ✅</strong> C. Use more paper 使用更多紙張 D. Burn trees 焚燒樹木
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Most of the Earth's water is fresh water. 地球上大部分的水是淡水。 — <strong>False ❌</strong></li>
          <li>Drinking water does not need to be purified. 飲用水不需要淨化。 — <strong>False ❌</strong></li>
          <li>Wind is a renewable resource. 風是可再生資源。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two uses of fresh water in your daily life. 列出兩種你在日常生活中使用淡水的用途。</li>
          <li>Why is petroleum a non-renewable resource? 為什麼石油是不可再生資源?</li>
          <li>What can you do to help save Earth's resources? 你可以做什麼來幫助節約地球資源?</li>
        </ul>
      </section>
    </main>
  );
};

export default EarthsResourcesPage;