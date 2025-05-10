import React from 'react';
import BackButton from '@/components/BackButton';

const HealthyLifestylesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S0-T0 Healthy lifestyles</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about healthy eating habits and how to take care of our bodies. 
        We'll explore different food groups, nutrients, and proper food handling to help us grow strong and stay healthy!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3LA1: Be aware of the types of food commonly found in a balanced diet</li>
          <li>3LA2: Recognise the healthy eating pyramid</li>
          <li>3LA3: Recognise the nutrients in food (carbohydrates, proteins, fats, vitamins, minerals, dietary fiber, water) and their functions</li>
          <li>3LA4: Recognise the correct methods of handling and preserving food</li>
          <li>3LA5: Maintain healthy eating habits</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which food group is at the bottom of the healthy eating pyramid? 健康飲食金字塔的底部是哪一類食物?
            <br />
            A. Fruits and vegetables 水果和蔬菜 <strong>B. Grains and cereals 穀物和穀類 ✅</strong> C. Dairy products 乳製品 D. Meat and fish 肉類和魚類
          </li>
          <li>
            Which nutrient helps our body grow and repair tissues? 哪種營養素幫助我們的身體生長和修復組織?
            <br />
            A. Carbohydrates 碳水化合物 <strong>B. Proteins 蛋白質 ✅</strong> C. Fats 脂肪 D. Vitamins 維生素
          </li>
          <li>
            What is the main function of carbohydrates in our body? 碳水化合物在我們體內的主要功能是什麼?
            <br />
            <strong>A. To provide energy 提供能量 ✅</strong> B. To build muscles 建立肌肉 C. To protect organs 保護器官 D. To fight diseases 對抗疾病
          </li>
          <li>
            Which of the following is a good source of dietary fiber? 以下哪種是膳食纖維的良好來源?
            <br />
            A. White bread 白麵包 <strong>B. Apple 蘋果 ✅</strong> C. Chicken 雞肉 D. Cheese 芝士
          </li>
          <li>
            How should you store raw meat to keep it safe? 你應該如何儲存生肉以確保安全?
            <br />
            A. In the cupboard 在櫥櫃裡 B. On the kitchen counter 在廚房檯面上 <strong>C. In the refrigerator 在冰箱裡 ✅</strong> D. In direct sunlight 在陽光直射下
          </li>
          <li>
            Which of these is a healthy eating habit? 以下哪種是健康的飲食習慣?
            <br />
            A. Skipping breakfast 不吃早餐 <strong>B. Eating fruits every day 每天吃水果 ✅</strong> C. Drinking soda instead of water 喝汽水代替水 D. Eating only one type of food 只吃一種食物
          </li>
          <li>
            Which vitamin helps keep our bones strong? 哪種維生素有助於保持骨骼強壯?
            <br />
            A. Vitamin A 維生素A B. Vitamin B 維生素B C. Vitamin C 維生素C <strong>D. Vitamin D 維生素D ✅</strong>
          </li>
          <li>
            What is the best way to preserve fresh vegetables? 保存新鮮蔬菜的最佳方法是什麼?
            <br />
            A. Leave them on the table 把它們放在桌子上 <strong>B. Store them in the refrigerator 把它們存放在冰箱裡 ✅</strong> C. Cook them immediately 立即烹飪它們 D. Freeze them without washing 不洗就冷凍它們
          </li>
          <li>
            Which of these foods is rich in fats? 以下哪種食物富含脂肪?
            <br />
            A. Carrots 胡蘿蔔 B. Bananas 香蕉 <strong>C. Avocado 牛油果 ✅</strong> D. Lettuce 生菜
          </li>
          <li>
            Why is water important for our body? 為什麼水對我們的身體很重要?
            <br />
            <strong>A. It helps us stay hydrated 它有助於我們保持水分 ✅</strong> B. It makes us grow taller 它讓我們長得更高 C. It gives us energy 它給我們能量 D. It makes our bones strong 它使我們的骨骼強壯
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Eating only sweets is a healthy lifestyle. 只吃甜食是一種健康的生活方式。 — <strong>False ❌</strong></li>
          <li>Vitamins and minerals help our body function properly. 維生素和礦物質幫助我們的身體正常運作。 — <strong>True ✅</strong></li>
          <li>It is okay to eat food that has been left out for more than 2 hours. 可以吃已經放置超過2小時的食物。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name three types of food that are rich in proteins. 列出三種富含蛋白質的食物。</li>
          <li>Why should we eat a variety of foods from different food groups? 為什麼我們應該吃來自不同食物組的多種食物?</li>
          <li>What are two ways to keep food safe from bacteria? 列出兩種防止食物被細菌污染的方法。</li>
        </ul>
      </section>
    </main>
  );
};

export default HealthyLifestylesPage;