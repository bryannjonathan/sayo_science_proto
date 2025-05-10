import React from 'react';
import BackButton from '@/components/BackButton';

const HumanBodySystemsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S0-T0 Human body systems</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on human body systems! In this topic, we'll explore how different systems in our body work together to keep us alive and healthy. We'll learn about the respiratory system that helps us breathe, the digestive system that processes our food, and the reproductive system that allows humans to create new life. Get ready to discover the amazing parts inside your body!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5LB1: Recognise the major parts of the human respiratory system (trachea, bronchi, lungs) and their functions</li>
          <li>5LB2: Recognise the major parts of the human digestive system (stomach, small intestine, large intestine) and their functions</li>
          <li>5LB3: Recognise the major parts of the human reproductive system (male: testes, sperm ducts, urethra, penis; female: ovaries, oviducts, uterus, vagina) and their functions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which part of the respiratory system carries air to the lungs? 呼吸系統的哪個部分將空氣輸送到肺部?
            <br />
            <strong>A. Trachea 氣管 ✅</strong> B. Stomach 胃 C. Small intestine 小腸 D. Ovaries 卵巢
          </li>
          <li>
            Where does most digestion occur in the human body? 人體的大部分消化發生在哪裡?
            <br />
            A. Stomach 胃 <strong>B. Small intestine 小腸 ✅</strong> C. Large intestine 大腸 D. Lungs 肺
          </li>
          <li>
            Which organ produces sperm in males? 男性哪個器官產生精子?
            <br />
            <strong>A. Testes 睾丸 ✅</strong> B. Ovaries 卵巢 C. Uterus 子宮 D. Lungs 肺
          </li>
          <li>
            What is the function of the bronchi? 支氣管的功能是什麼?
            <br />
            <strong>A. To carry air to the lungs 將空氣輸送到肺部 ✅</strong> B. To digest food 消化食物 C. To produce eggs 產生卵子 D. To pump blood 泵血
          </li>
          <li>
            Which part of the digestive system absorbs water? 消化系統的哪個部分吸收水分?
            <br />
            A. Stomach 胃 B. Small intestine 小腸 <strong>C. Large intestine 大腸 ✅</strong> D. Trachea 氣管
          </li>
          <li>
            Where does fertilization usually occur in females? 女性的受精通常發生在哪裡?
            <br />
            <strong>A. Oviducts 輸卵管 ✅</strong> B. Uterus 子宮 C. Vagina 陰道 D. Ovaries 卵巢
          </li>
          <li>
            What is the main function of the lungs? 肺的主要功能是什麼?
            <br />
            <strong>A. To exchange oxygen and carbon dioxide 交換氧氣和二氧化碳 ✅</strong> B. To digest food 消化食物 C. To produce sperm 產生精子 D. To pump blood 泵血
          </li>
          <li>
            Which part of the female reproductive system houses the developing baby? 女性生殖系統的哪個部分容納發育中的嬰兒?
            <br />
            A. Ovaries 卵巢 <strong>B. Uterus 子宮 ✅</strong> C. Vagina 陰道 D. Oviducts 輸卵管
          </li>
          <li>
            What is the function of the stomach? 胃的功能是什麼?
            <br />
            <strong>A. To break down food with acid 用酸分解食物 ✅</strong> B. To absorb nutrients 吸收營養 C. To produce eggs 產生卵子 D. To pump blood 泵血
          </li>
          <li>
            Which part of the male reproductive system carries sperm out of the body? 男性生殖系統的哪個部分將精子排出體外?
            <br />
            A. Testes 睾丸 B. Sperm ducts 輸精管 C. Urethra 尿道 <strong>D. Penis 陰莖 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The trachea is part of the digestive system. 氣管是消化系統的一部分。 — <strong>False ❌</strong></li>
          <li>The small intestine is longer than the large intestine. 小腸比大腸長。 — <strong>True ✅</strong></li>
          <li>The ovaries produce sperm. 卵巢產生精子。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe the path air takes through the respiratory system. 描述空氣通過呼吸系統的路徑。</li>
          <li>Explain how food moves through the digestive system. 解釋食物如何通過消化系統。</li>
          <li>What are the main differences between the male and female reproductive systems? 男性和女性生殖系統的主要區別是什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default HumanBodySystemsPage;