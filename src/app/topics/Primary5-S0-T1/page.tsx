import React from 'react';
import BackButton from '@/components/BackButton';

const LifeCycleOfLivingThingsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S0-T1 Life cycle of living things</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the fascinating journey of life from birth to old age. You'll learn about the different stages of human development, the changes that occur during adolescence, and the factors that influence our growth. Understanding these concepts will help you appreciate how living things grow and change throughout their lives.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5LC1: Describe the characteristics of different developmental stages in humans (infancy, childhood, adolescence, adulthood, and late adulthood)</li>
          <li>5LC2: Recognise the physiological and psychological changes in males and females during adolescence</li>
          <li>5LC3: Recognise the factors that influence growth and development during adolescence (e.g. heredity, nutrition, sleep and exercise, etc.)</li>
          <li>5LC4: Accept individual differences in growth and development during adolescence</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which stage of human development is characterized by rapid physical growth and the onset of puberty? 人類發展的哪個階段以快速的身體成長和青春期的開始為特徵?
            <br />
            A. Infancy 嬰兒期 B. Childhood 兒童期 <strong>C. Adolescence 青春期 ✅</strong> D. Adulthood 成年期
          </li>
          <li>
            What is a common psychological change during adolescence? 青春期常見的心理變化是什麼?
            <br />
            <strong>A. Increased independence 獨立性增加 ✅</strong> B. Decreased curiosity 好奇心減少 C. No emotional changes 沒有情緒變化 D. Reduced social interaction 社交互動減少
          </li>
          <li>
            Which factor does NOT influence growth and development during adolescence? 以下哪個因素不會影響青春期的成長和發育?
            <br />
            A. Heredity 遺傳 B. Nutrition 營養 C. Sleep 睡眠 <strong>D. Favorite color 喜愛的顏色 ✅</strong>
          </li>
          <li>
            During which stage do humans typically learn to walk and talk? 人類通常在哪個階段學會走路和說話?
            <br />
            <strong>A. Infancy 嬰兒期 ✅</strong> B. Childhood 兒童期 C. Adolescence 青春期 D. Late adulthood 老年期
          </li>
          <li>
            What is a common physical change in females during adolescence? 女性在青春期常見的身體變化是什麼?
            <br />
            <strong>A. Development of breasts 乳房發育 ✅</strong> B. Deepening of voice 聲音變低沉 C. Facial hair growth 面部毛髮生長 D. No physical changes 沒有身體變化
          </li>
          <li>
            Which of the following is a characteristic of late adulthood? 以下哪一項是老年期的特徵?
            <br />
            A. Rapid growth 快速成長 <strong>B. Decreased physical strength 體力下降 ✅</strong> C. Onset of puberty 青春期開始 D. Learning to walk 學習走路
          </li>
          <li>
            Why is nutrition important during adolescence? 為什麼營養在青春期很重要?
            <br />
            <strong>A. It supports rapid growth and development 它支持快速成長和發育 ✅</strong> B. It prevents aging 它防止衰老 C. It stops puberty 它停止青春期 D. It has no effect 它沒有影響
          </li>
          <li>
            What is a common physical change in males during adolescence? 男性在青春期常見的身體變化是什麼?
            <br />
            A. Development of breasts 乳房發育 <strong>B. Deepening of voice 聲音變低沉 ✅</strong> C. No physical changes 沒有身體變化 D. Shrinking in height 身高縮短
          </li>
          <li>
            Which stage follows childhood in the human life cycle? 人類生命週期中，兒童期之後是哪個階段?
            <br />
            A. Infancy 嬰兒期 <strong>B. Adolescence 青春期 ✅</strong> C. Late adulthood 老年期 D. Adulthood 成年期
          </li>
          <li>
            What should adolescents do to support healthy growth and development? 青少年應該做什麼來支持健康的成長和發育?
            <br />
            A. Eat a balanced diet 均衡飲食 B. Get enough sleep 獲得足夠的睡眠 C. Exercise regularly 定期運動 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Adolescence is the stage between childhood and adulthood. 青春期是兒童期和成年期之間的階段。 — <strong>True ✅</strong></li>
          <li>Nutrition has no effect on growth and development during adolescence. 營養對青春期的成長和發育沒有影響。 — <strong>False ❌</strong></li>
          <li>All individuals experience the same changes at the same time during adolescence. 所有個體在青春期都會在同一時間經歷相同的變化。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe two physiological changes that occur during adolescence. 描述青春期發生的兩個生理變化。</li>
          <li>Explain why heredity is an important factor in growth and development. 解釋為什麼遺傳是成長和發育的重要因素。</li>
          <li>How can individual differences in growth and development during adolescence be accepted? 如何接受青春期成長和發育的個體差異?</li>
        </ul>
      </section>
    </main>
  );
};

export default LifeCycleOfLivingThingsPage;