import React from 'react';
import BackButton from '@/components/BackButton';

const LifeCycleOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S0-T2 Life cycle of living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how different living things grow, reproduce, and ensure their survival. 
        We'll learn about the various stages in life cycles and how plants and animals have special ways to 
        increase their numbers and protect their young. Get ready to discover the amazing ways life continues!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4LC3: Recognise the different ways living things increase the number of offspring and their chances of survival (e.g. plants produce a large number of seeds, mammals care for their young offspring)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is a way plants increase their chances of survival? 以下哪一種是植物增加生存機會的方式？
            <br />
            <strong>A. Producing a large number of seeds 產生大量種子 ✅</strong> B. Hunting for food 獵食 C. Building nests 築巢 D. Swimming in water 在水中游泳
          </li>
          <li>
            How do mammals usually care for their young? 哺乳動物通常如何照顧幼崽？
            <br />
            A. By leaving them alone 讓牠們獨處 <strong>B. By feeding and protecting them 餵養和保護牠們 ✅</strong> C. By producing many eggs 產下許多卵 D. By flying away 飛走
          </li>
          <li>
            What is the purpose of a plant producing many seeds? 植物產生大量種子的目的是什麼？
            <br />
            <strong>A. To increase the chances of some seeds growing into new plants 增加一些種子長成新植物的機會 ✅</strong> B. To attract insects 吸引昆蟲 C. To make the plant look pretty 讓植物看起來漂亮 D. To feed animals 餵養動物
          </li>
          <li>
            Which animal lays eggs to reproduce? 哪種動物通過產卵繁殖？
            <br />
            A. Dog 狗 B. Cat 貓 <strong>C. Bird 鳥 ✅</strong> D. Cow 牛
          </li>
          <li>
            Why do some animals care for their young? 為什麼有些動物會照顧幼崽？
            <br />
            <strong>A. To increase the survival rate of their offspring 提高後代的生存率 ✅</strong> B. To play games 玩遊戲 C. To show off 炫耀 D. To scare other animals 嚇唬其他動物
          </li>
          <li>
            Which of the following is NOT a way plants reproduce? 以下哪一種不是植物的繁殖方式？
            <br />
            A. Producing seeds 產生種子 B. Growing from cuttings 從插枝生長 <strong>C. Laying eggs 產卵 ✅</strong> D. Spreading spores 傳播孢子
          </li>
          <li>
            What is a common way fish reproduce? 魚類常見的繁殖方式是什麼？
            <br />
            <strong>A. Laying eggs 產卵 ✅</strong> B. Giving birth to live young 直接生下幼崽 C. Producing seeds 產生種子 D. Spreading spores 傳播孢子
          </li>
          <li>
            Which of the following animals does NOT care for its young? 以下哪種動物不會照顧幼崽？
            <br />
            A. Elephant 大象 B. Lion 獅子 <strong>C. Frog 青蛙 ✅</strong> D. Monkey 猴子
          </li>
          <li>
            How do flowering plants attract pollinators? 開花植物如何吸引傳粉者？
            <br />
            <strong>A. By producing bright colors and sweet smells 通過產生鮮豔的顏色和甜美的氣味 ✅</strong> B. By making loud noises 發出大聲響 C. By hiding underground 躲在地下 D. By growing thorns 長出刺
          </li>
          <li>
            What is the first stage in the life cycle of a butterfly? 蝴蝶生命週期的第一階段是什麼？
            <br />
            <strong>A. Egg 卵 ✅</strong> B. Caterpillar 毛毛蟲 C. Pupa 蛹 D. Adult butterfly 成年蝴蝶
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All plants reproduce by producing seeds. 所有植物都通過產生種子繁殖。 — <strong>False ❌</strong></li>
          <li>Mammals usually care for their young to increase their chances of survival. 哺乳動物通常會照顧幼崽以提高牠們的生存機會。 — <strong>True ✅</strong></li>
          <li>Fish always give birth to live young. 魚類總是直接生下幼崽。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain one way plants ensure their seeds can grow into new plants. 解釋一種植物確保種子能長成新植物的方式。</li>
          <li>Why is it important for some animals to care for their young? Give an example. 為什麼有些動物照顧幼崽很重要？舉一個例子。</li>
          <li>Describe the life cycle of a frog. 描述青蛙的生命週期。</li>
        </ul>
      </section>
    </main>
  );
};

export default LifeCycleOfLivingThingsPage;