import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S1-T0 Properties of matter</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on the properties of matter! In this topic, we'll explore how magnets work and their amazing abilities. 
        You'll learn about magnetic poles, how magnets attract certain objects, and how we use magnets in everyday life. 
        Get ready to discover the invisible forces that make magnets so fascinating!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2MA1: Be aware that magnet can be used to attract some metallic objects</li>
          <li>2MA2: Be aware that each magnet has two different magnetic poles which always exist in pairs</li>
          <li>2MA3: Be aware of the phenomenon of 'like poles repel and unlike poles attract'</li>
          <li>2MA4: Be aware that the magnetised needle in a compass can be used to indicate the south and the north</li>
          <li>2MA5: Give some examples of daily application of magnet</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following objects can be attracted by a magnet? 以下哪個物品可以被磁鐵吸引?
            <br />
            A. Plastic toy 塑膠玩具 B. Wooden block 木塊 <strong>C. Iron nail 鐵釘 ✅</strong> D. Glass bottle 玻璃瓶
          </li>
          <li>
            How many poles does a magnet have? 一個磁鐵有多少個磁極?
            <br />
            A. One 一個 <strong>B. Two 兩個 ✅</strong> C. Three 三個 D. Four 四個
          </li>
          <li>
            What happens when two like poles of magnets are brought close together? 當兩個磁鐵的同極靠近時會發生什麼?
            <br />
            A. They attract each other 它們互相吸引 <strong>B. They repel each other 它們互相排斥 ✅</strong> C. They stick together 它們黏在一起 D. Nothing happens 什麼都不會發生
          </li>
          <li>
            What does the magnetised needle in a compass point to? 指南針中的磁化針指向什麼方向?
            <br />
            A. East and West 東和西 <strong>B. North and South 北和南 ✅</strong> C. Up and Down 上和下 D. Left and Right 左和右
          </li>
          <li>
            Which of the following is a daily application of magnets? 以下哪個是磁鐵的日常應用?
            <br />
            <strong>A. Refrigerator door 冰箱門 ✅</strong> B. Plastic chair 塑膠椅子 C. Paper book 紙本書 D. Wooden table 木桌
          </li>
          <li>
            What happens when two unlike poles of magnets are brought close together? 當兩個磁鐵的異極靠近時會發生什麼?
            <br />
            <strong>A. They attract each other 它們互相吸引 ✅</strong> B. They repel each other 它們互相排斥 C. They break 它們斷裂 D. They melt 它們融化
          </li>
          <li>
            Which material is NOT attracted by a magnet? 哪種材料不能被磁鐵吸引?
            <br />
            A. Iron 鐵 B. Nickel 鎳 C. Cobalt 鈷 <strong>D. Aluminum 鋁 ✅</strong>
          </li>
          <li>
            What is the name of the two poles of a magnet? 磁鐵的兩個磁極叫什麼?
            <br />
            <strong>A. North and South 北極和南極 ✅</strong> B. East and West 東極和西極 C. Up and Down 上極和下極 D. Left and Right 左極和右極
          </li>
          <li>
            Which of the following is NOT a daily application of magnets? 以下哪個不是磁鐵的日常應用?
            <br />
            A. Magnetic whiteboard 磁性白板 B. Credit card 信用卡 C. Magnetic toy 磁性玩具 <strong>D. Wooden spoon 木匙 ✅</strong>
          </li>
          <li>
            What can a compass be used for? 指南針可以用來做什麼?
            <br />
            <strong>A. Finding directions 尋找方向 ✅</strong> B. Cutting paper 剪紙 C. Writing words 寫字 D. Drawing pictures 畫畫
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All metals can be attracted by a magnet. 所有金屬都可以被磁鐵吸引。 — <strong>False ❌</strong></li>
          <li>A magnet always has two poles. 一個磁鐵總是有兩個磁極。 — <strong>True ✅</strong></li>
          <li>The needle in a compass is not magnetised. 指南針中的針沒有被磁化。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two objects that can be attracted by a magnet. 舉出兩個可以被磁鐵吸引的物品。</li>
          <li>What happens when the north pole of one magnet is brought close to the south pole of another magnet? 當一個磁鐵的北極靠近另一個磁鐵的南極時會發生什麼?</li>
          <li>How is a compass useful in daily life? 指南針在日常生活中如何有用?</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfMatterPage;