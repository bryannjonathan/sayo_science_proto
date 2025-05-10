import React from 'react';
import BackButton from '@/components/BackButton';

const LifeCycleOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S0-T2 Life cycle of living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about how living things grow and change. We will focus on how our bodies change as we grow from babies to children. You will discover what happens to your height, weight, and teeth as you get older!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1LC1: State the major body changes during infancy, early childhood and childhood (e.g. increase in height and weight, loss of primary teeth and growth of permanent teeth)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What happens to our height as we grow from infancy to childhood? 我們從嬰兒期成長到童年時，身高會發生什麼變化？
            <br />
            <strong>A. It increases 增加 ✅</strong> B. It decreases 減少 C. It stays the same 保持不變 D. It disappears 消失
          </li>
          <li>
            What happens to our primary teeth as we grow? 我們成長時，乳牙會發生什麼變化？
            <br />
            <strong>A. They fall out and are replaced by permanent teeth 它們會脫落並被恆牙取代 ✅</strong> B. They stay forever 它們永遠保留 C. They turn into bones 它們變成骨頭 D. They grow bigger 它們變大
          </li>
          <li>
            Which of the following is a major change during early childhood? 以下哪一項是幼兒期的主要變化？
            <br />
            <strong>A. Learning to walk 學會走路 ✅</strong> B. Growing wings 長出翅膀 C. Turning into a plant 變成植物 D. Shrinking in size 體型縮小
          </li>
          <li>
            What happens to our weight as we grow? 我們成長時，體重會發生什麼變化？
            <br />
            <strong>A. It usually increases 通常會增加 ✅</strong> B. It usually decreases 通常會減少 C. It stays the same 保持不變 D. It disappears 消失
          </li>
          <li>
            When do primary teeth usually start to fall out? 乳牙通常什麼時候開始脫落？
            <br />
            <strong>A. During early childhood 在幼兒期 ✅</strong> B. When we are born 出生時 C. When we are adults 成年時 D. Never 永遠不會
          </li>
          <li>
            Which of the following is a sign of growth in childhood? 以下哪一項是童年時期成長的跡象？
            <br />
            <strong>A. Getting taller 長高 ✅</strong> B. Getting shorter 變矮 C. Staying the same height 保持同樣高度 D. Losing all teeth 失去所有牙齒
          </li>
          <li>
            What replaces primary teeth? 什麼會取代乳牙？
            <br />
            <strong>A. Permanent teeth 恆牙 ✅</strong> B. More primary teeth 更多的乳牙 C. No teeth 沒有牙齒 D. Fake teeth 假牙
          </li>
          <li>
            Which of the following is NOT a major body change during growth? 以下哪一項不是成長過程中的主要身體變化？
            <br />
            <strong>A. Growing feathers 長出羽毛 ✅</strong> B. Increasing in height 身高增加 C. Losing primary teeth 乳牙脫落 D. Gaining weight 體重增加
          </li>
          <li>
            What do we call the teeth that grow after primary teeth fall out? 乳牙脫落後長出的牙齒叫什麼？
            <br />
            <strong>A. Permanent teeth 恆牙 ✅</strong> B. Baby teeth 嬰兒牙齒 C. Temporary teeth 臨時牙齒 D. Invisible teeth 隱形牙齒
          </li>
          <li>
            Which stage comes after infancy? 嬰兒期之後是哪個階段？
            <br />
            <strong>A. Early childhood 幼兒期 ✅</strong> B. Adulthood 成年期 C. Old age 老年期 D. Teenage years 青少年期
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Our height increases as we grow from infancy to childhood. 我們從嬰兒期成長到童年時，身高會增加。 — <strong>True ✅</strong></li>
          <li>Primary teeth stay with us forever. 乳牙會永遠留在我們身上。 — <strong>False ❌</strong></li>
          <li>We lose our primary teeth and grow permanent teeth as we grow. 我們成長時會失去乳牙並長出恆牙。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one major change that happens to your body as you grow from a baby to a child. 說出一個從嬰兒成長為兒童時，身體發生的主要變化。</li>
          <li>Why do we lose our primary teeth? 我們為什麼會失去乳牙？</li>
          <li>How can you tell that a child is growing? 你如何判斷一個兒童正在成長？</li>
        </ul>
      </section>
    </main>
  );
};

export default LifeCycleOfLivingThingsPage;