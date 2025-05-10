import React from 'react';
import BackButton from '@/components/BackButton';

const TechnologyInDailyLifePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S3-T0 Technology in daily life</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about how technology affects our daily lives. We'll discover the proper ways to use electronic products, understand how they can impact our health, and learn good manners when using them in public places. Let's explore how to be smart and safe with technology!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1SB1: Be aware of the importance of proper use of electronic products</li>
          <li>1SB2: Be aware of the impacts of prolonged use of electronic products on personal health</li>
          <li>1SB3: Be aware of the etiquette for using electronic products</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: What should you do after using electronic products for a long time? 長時間使用電子產品後，你應該做什麼？
            <br />
            <strong>A. Take a break and rest your eyes 休息一下，讓眼睛休息 ✅</strong> B. Continue using them without stopping 繼續使用，不要停下來 C. Use them in a dark room 在黑暗的房間裡使用 D. Hold them very close to your eyes 把它們拿得很靠近眼睛
          </li>
          <li>
            Question: Which of the following is a good habit when using electronic products? 以下哪一項是使用電子產品時的好習慣？
            <br />
            A. Using them for many hours without stopping 連續使用好幾個小時 B. Keeping the screen brightness very high 將屏幕亮度調得很高 <strong>C. Taking breaks every 20 minutes 每20分鐘休息一次 ✅</strong> D. Using them while lying down 躺著使用
          </li>
          <li>
            Question: Why is it important to use electronic products properly? 為什麼正確使用電子產品很重要？
            <br />
            A. To keep them clean 為了保持它們清潔 <strong>B. To protect our health and eyes 為了保護我們的健康和眼睛 ✅</strong> C. To make them last longer 為了讓它們更耐用 D. All of the above 以上皆是
          </li>
          <li>
            Question: What is a polite way to use electronic products in public? 在公共場合使用電子產品時，什麼是有禮貌的方式？
            <br />
            A. Playing loud music 播放大聲的音樂 <strong>B. Keeping the volume low 將音量調低 ✅</strong> C. Talking loudly on the phone 大聲講電話 D. Ignoring people around you 忽略周圍的人
          </li>
          <li>
            Question: What can happen if you use electronic products for too long? 如果你使用電子產品時間過長，可能會發生什麼？
            <br />
            A. Your eyes may feel tired 你的眼睛可能會感到疲勞 B. You may get a headache 你可能會頭痛 C. You may have trouble sleeping 你可能會難以入睡 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Question: When should you avoid using electronic products? 什麼時候應該避免使用電子產品？
            <br />
            A. During meals 吃飯時 B. While crossing the road 過馬路時 C. During family time 家庭時間 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Question: How can you protect your eyes when using electronic products? 使用電子產品時，如何保護眼睛？
            <br />
            A. Sitting close to the screen 坐得靠近屏幕 B. Using them in the dark 在黑暗中使用 <strong>C. Taking regular breaks 定期休息 ✅</strong> D. Rubbing your eyes often 經常揉眼睛
          </li>
          <li>
            Question: What is a good distance to keep from the screen when using electronic products? 使用電子產品時，與屏幕保持多遠的距離是好的？
            <br />
            A. Very close 非常近 <strong>B. Arm's length 一臂之長 ✅</strong> C. Across the room 房間的另一邊 D. It doesn't matter 沒關係
          </li>
          <li>
            Question: Why should you not use electronic products before bedtime? 為什麼不應該在睡前使用電子產品？
            <br />
            <strong>A. It can make it hard to sleep 它會讓你難以入睡 ✅</strong> B. It can make the device hot 它會讓設備變熱 C. It can waste electricity 它會浪費電 D. It can make you hungry 它會讓你感到飢餓
          </li>
          <li>
            Question: What should you do if you feel tired after using electronic products? 如果你使用電子產品後感到疲倦，應該做什麼？
            <br />
            A. Keep using them 繼續使用 <strong>B. Close your eyes and rest 閉上眼睛休息 ✅</strong> C. Increase the brightness 增加亮度 D. Use them in a darker room 在更暗的房間裡使用
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Using electronic products for too long can hurt your eyes. 長時間使用電子產品會傷害你的眼睛。 — <strong>True ✅</strong></li>
          <li>It is okay to use electronic products while crossing the road. 過馬路時使用電子產品是可以的。 — <strong>False ❌</strong></li>
          <li>Taking breaks when using electronic products is not important. 使用電子產品時休息並不重要。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two ways to use electronic products politely in public. 列出在公共場合禮貌使用電子產品的兩種方式。</li>
          <li>Why is it important to take breaks when using electronic products? 為什麼使用電子產品時休息很重要？</li>
          <li>What can you do instead of using electronic products for fun? 除了使用電子產品，你還可以做什麼來娛樂？</li>
        </ul>
      </section>
    </main>
  );
};

export default TechnologyInDailyLifePage;