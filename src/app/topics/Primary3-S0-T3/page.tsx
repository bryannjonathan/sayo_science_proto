import React from 'react';
import BackButton from '@/components/BackButton';

const LifeCycleOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S0-T3 Life cycle of living things</h1>
      <p className="text-gray-700 mb-6">
        All living things go through different stages in their lives, from birth to growth, reproduction, and eventually death. In this topic, we'll explore the fascinating life cycles of animals like frogs and butterflies, as well as plants. You'll learn how each living thing changes at different stages and why it's important to respect all forms of life.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3LC1: Be aware that living things go through the life cycle of birth, growth, reproduction and death</li>
          <li>3LC2: Using frogs, butterflies, dogs and chickens as examples, recognise the changes in different animals at different stages of their life cycles</li>
          <li>3LC3: Identify the different stages of the life cycle of flowering plants (germination, growth, reproduction, seed dispersal)</li>
          <li>3LC5: Respect and care for life</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first stage in the life cycle of a frog? 青蛙生命週期的第一階段是什麼?
            <br />
            <strong>A. Egg 卵 ✅</strong> B. Tadpole 蝌蚪 C. Adult frog 成年青蛙 D. Froglet 幼蛙
          </li>
          <li>
            Which animal does NOT go through metamorphosis? 哪種動物不經歷變態?
            <br />
            A. Butterfly 蝴蝶 B. Frog 青蛙 C. Chicken 雞 <strong>D. Dog 狗 ✅</strong>
          </li>
          <li>
            What is the correct order of a butterfly's life cycle? 蝴蝶生命週期的正確順序是什麼?
            <br />
            <strong>A. Egg → Larva → Pupa → Adult 卵 → 幼蟲 → 蛹 → 成蟲 ✅</strong> B. Egg → Pupa → Larva → Adult 卵 → 蛹 → 幼蟲 → 成蟲 C. Larva → Egg → Pupa → Adult 幼蟲 → 卵 → 蛹 → 成蟲 D. Adult → Egg → Larva → Pupa 成蟲 → 卵 → 幼蟲 → 蛹
          </li>
          <li>
            What do chickens hatch from? 小雞從哪裡孵化出來?
            <br />
            <strong>A. Eggs 蛋 ✅</strong> B. Seeds 種子 C. Pupae 蛹 D. Leaves 葉子
          </li>
          <li>
            Which stage comes after germination in a plant's life cycle? 植物生命週期中，發芽之後是哪個階段?
            <br />
            <strong>A. Growth 生長 ✅</strong> B. Reproduction 繁殖 C. Seed dispersal 種子傳播 D. Death 死亡
          </li>
          <li>
            What do dogs give birth to? 狗生下什麼?
            <br />
            <strong>A. Puppies 小狗 ✅</strong> B. Kittens 小貓 C. Chicks 小雞 D. Tadpoles 蝌蚪
          </li>
          <li>
            Which part of a flowering plant grows into a fruit? 開花植物的哪個部分會長成果實?
            <br />
            <strong>A. Flower 花 ✅</strong> B. Leaf 葉子 C. Root 根 D. Stem 莖
          </li>
          <li>
            How do most flowering plants reproduce? 大多數開花植物如何繁殖?
            <br />
            <strong>A. Seeds 種子 ✅</strong> B. Eggs 蛋 C. Spores 孢子 D. Buds 芽
          </li>
          <li>
            What is the final stage in the life cycle of all living things? 所有生物生命週期的最後階段是什麼?
            <br />
            <strong>A. Death 死亡 ✅</strong> B. Growth 生長 C. Reproduction 繁殖 D. Birth 出生
          </li>
          <li>
            Why is it important to respect and care for life? 為什麼尊重和愛護生命很重要?
            <br />
            <strong>A. All living things are important 所有生物都很重要 ✅</strong> B. It makes us happy 這讓我們快樂 C. We can eat them 我們可以吃它們 D. They look pretty 它們看起來很漂亮
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All living things go through the same life cycle stages. 所有生物都經歷相同的生命週期階段。 — <strong>False ❌</strong></li>
          <li>A seed grows into a plant through germination. 種子通過發芽長成植物。 — <strong>True ✅</strong></li>
          <li>Dogs give birth to tadpoles. 狗生下蝌蚪。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe the life cycle of a butterfly in your own words. 用自己的話描述蝴蝶的生命週期。</li>
          <li>How can you show respect and care for living things around you? 你如何表現出對周圍生命的尊重和關愛?</li>
          <li>What are the similarities between the life cycles of a frog and a butterfly? 青蛙和蝴蝶的生命週期有什麼相似之處?</li>
        </ul>
      </section>
    </main>
  );
};

export default LifeCycleOfLivingThingsPage;