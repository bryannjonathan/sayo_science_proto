import React from 'react';
import BackButton from '@/components/BackButton';

const EngineeringDesignCycleAndApplicationsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S3-T2 Engineering, design cycle and applications</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Engineering, Design Cycle and Applications! Today we'll learn about how everyday objects are designed, 
        the materials they're made from, and why good design combines both usefulness and beauty. Let's explore how engineers and designers 
        create things that make our lives better!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2SC1: Be aware of the structure and functions of common products in daily life</li>
          <li>2SC2: Identify how some simple designs can enhance the functionality of products</li>
          <li>2SC3: Describe the properties and uses of some common materials (e.g. plastic, wood, glass, metal)</li>
          <li>2SC4: Realise the importance of practicality and aesthetics in engineering and design</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What material is commonly used to make windows because it is transparent? 哪種材料常用來製作窗戶，因為它是透明的?
            <br />
            A. Plastic 塑膠 B. Wood 木頭 <strong>C. Glass 玻璃 ✅</strong> D. Metal 金屬
          </li>
          <li>
            Which part of a chair helps it to stand firmly on the ground? 椅子的哪個部分幫助它穩固地站立在地面上?
            <br />
            A. Seat 座位 B. Backrest 靠背 <strong>C. Legs 腿 ✅</strong> D. Armrest 扶手
          </li>
          <li>
            Why do some umbrellas have a curved handle? 為什麼有些雨傘有彎曲的把手?
            <br />
            A. To make it look pretty 為了讓它看起來漂亮 <strong>B. To make it easier to hold 為了更容易握住 ✅</strong> C. To make it lighter 為了讓它更輕 D. To make it cheaper 為了讓它更便宜
          </li>
          <li>
            Which material is best for making a frying pan because it heats up quickly? 哪種材料最適合製作煎鍋，因為它加熱快?
            <br />
            A. Plastic 塑膠 B. Wood 木頭 <strong>C. Metal 金屬 ✅</strong> D. Glass 玻璃
          </li>
          <li>
            What is the main purpose of a rubber grip on a pencil? 鉛筆上的橡膠握把的主要目的是什麼?
            <br />
            A. To make the pencil look colorful 為了讓鉛筆看起來多彩 <strong>B. To make the pencil easier to hold 為了讓鉛筆更容易握住 ✅</strong> C. To make the pencil longer 為了讓鉛筆更長 D. To make the pencil cheaper 為了讓鉛筆更便宜
          </li>
          <li>
            Which of these is an example of a product that combines practicality and aesthetics? 以下哪個是結合實用性和美觀性的產品例子?
            <br />
            A. A plain cardboard box 一個普通的紙箱 <strong>B. A beautifully designed water bottle 一個設計精美的水瓶 ✅</strong> C. A piece of raw wood 一塊原始的木頭 D. A metal rod 一根金屬棒
          </li>
          <li>
            Why are most school bags made of strong fabric? 為什麼大多數書包都是用堅固的布料製成的?
            <br />
            A. To make them look nice 為了讓它們看起來好看 <strong>B. To make them lightweight and durable 為了讓它們輕便且耐用 ✅</strong> C. To make them expensive 為了讓它們昂貴 D. To make them colorful 為了讓它們多彩
          </li>
          <li>
            What is the function of the holes in a colander? 濾鍋上的孔的功能是什麼?
            <br />
            A. To make it look pretty 為了讓它看起來漂亮 <strong>B. To let water drain out 為了讓水流出去 ✅</strong> C. To make it heavier 為了讓它更重 D. To make it cheaper 為了讓它更便宜
          </li>
          <li>
            Which material is best for making a raincoat? 哪種材料最適合製作雨衣?
            <br />
            A. Paper 紙 <strong>B. Plastic 塑膠 ✅</strong> C. Wood 木頭 D. Glass 玻璃
          </li>
          <li>
            Why do some shoes have patterns on their soles? 為什麼有些鞋子的鞋底有圖案?
            <br />
            A. To make them look nice 為了讓它們看起來好看 B. To make them more slippery 為了讓它們更滑 <strong>C. To provide better grip 為了提供更好的抓地力 ✅</strong> D. To make them cheaper 為了讓它們更便宜
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Plastic is a good material for making windows because it is transparent. 塑膠是製作窗戶的好材料，因為它是透明的。 — <strong>False ❌</strong></li>
          <li>The design of a product can affect how easy it is to use. 產品的設計會影響它是否容易使用。 — <strong>True ✅</strong></li>
          <li>Aesthetics is more important than practicality when designing a product. 設計產品時，美觀比實用性更重要。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two materials that can be used to make a chair and explain why they are suitable. 列出兩種可以用來製作椅子的材料，並解釋為什麼它們適合。</li>
          <li>How does the design of a water bottle with a handle make it more practical? 帶把手的水瓶設計如何讓它更實用?</li>
          <li>Why is it important for a product to be both practical and aesthetically pleasing? 為什麼產品既實用又美觀很重要?</li>
        </ul>
      </section>
    </main>
  );
};

export default EngineeringDesignCycleAndApplicationsPage;