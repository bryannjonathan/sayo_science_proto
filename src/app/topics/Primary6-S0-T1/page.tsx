import React from 'react';
import BackButton from '@/components/BackButton';

const HumanBodySystemsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S0-T1 Human body systems</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on human body systems! In this topic, we'll explore how different systems in our body work together to keep us alive and healthy. We'll learn about the circulatory system that moves blood, the urinary system that removes waste, and the nervous system that helps us sense and react to our environment. Let's discover how these amazing systems function!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6LB1: Recognise the major parts of the human circulatory system (heart, blood vessels) and their functions</li>
          <li>6LB2: Recognise the major parts of the human urinary system (kidneys, ureters, urinary bladder, urethra) and their functions</li>
          <li>6LB3: Recognise the major parts of the human nervous system (sensory organs, brain, spinal cord) and their functions</li>
          <li>6LB4: Give some examples of reflex actions (e.g. blinking when wind blows into eyes, withdrawal reflex in response to heat)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Which organ pumps blood throughout the body? 哪個器官負責將血液泵送到全身?<br /><strong>A. Heart 心臟 ✅</strong> B. Kidney 腎臟 C. Brain 大腦 D. Lung 肺</li>
          <li>What is the function of blood vessels? 血管的功能是什麼?<br /><strong>A. To carry blood to and from the heart 將血液輸送到心臟和從心臟輸出 ✅</strong> B. To filter waste from the blood 過濾血液中的廢物 C. To produce hormones 產生激素 D. To store oxygen 儲存氧氣</li>
          <li>Which part of the urinary system stores urine? 泌尿系統的哪個部分儲存尿液?<br />A. Kidneys 腎臟 B. Ureters 輸尿管 <strong>C. Urinary bladder 膀胱 ✅</strong> D. Urethra 尿道</li>
          <li>What is the main function of the kidneys? 腎臟的主要功能是什麼?<br /><strong>A. To filter waste from the blood 過濾血液中的廢物 ✅</strong> B. To pump blood 泵送血液 C. To produce urine 產生尿液 D. To store oxygen 儲存氧氣</li>
          <li>Which part of the nervous system controls reflex actions? 神經系統的哪個部分控制反射動作?<br />A. Brain 大腦 <strong>B. Spinal cord 脊髓 ✅</strong> C. Sensory organs 感覺器官 D. Heart 心臟</li>
          <li>What is an example of a reflex action? 以下哪個是反射動作的例子?<br /><strong>A. Blinking when wind blows into eyes 當風吹進眼睛時眨眼 ✅</strong> B. Walking to school 走路去學校 C. Eating lunch 吃午餐 D. Reading a book 閱讀書籍</li>
          <li>Which organ is part of both the circulatory and urinary systems? 哪個器官同時屬於循環系統和泌尿系統?<br />A. Heart 心臟 <strong>B. Kidney 腎臟 ✅</strong> C. Brain 大腦 D. Lung 肺</li>
          <li>What is the function of the spinal cord? 脊髓的功能是什麼?<br /><strong>A. To transmit messages between the brain and the body 在大腦和身體之間傳遞訊息 ✅</strong> B. To pump blood 泵送血液 C. To filter waste 過濾廢物 D. To produce hormones 產生激素</li>
          <li>Which part of the urinary system carries urine from the kidneys to the bladder? 泌尿系統的哪個部分將尿液從腎臟輸送到膀胱?<br /><strong>A. Ureters 輸尿管 ✅</strong> B. Urethra 尿道 C. Bladder 膀胱 D. Kidneys 腎臟</li>
          <li>What is the role of sensory organs in the nervous system? 感覺器官在神經系統中的作用是什麼?<br /><strong>A. To detect changes in the environment 檢測環境中的變化 ✅</strong> B. To pump blood 泵送血液 C. To filter waste 過濾廢物 D. To store oxygen 儲存氧氣</li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The heart is part of the circulatory system. 心臟是循環系統的一部分。 — <strong>True ✅</strong></li>
          <li>The brain is not part of the nervous system. 大腦不是神經系統的一部分。 — <strong>False ❌</strong></li>
          <li>Reflex actions are controlled by the brain. 反射動作由大腦控制。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe the path of blood through the circulatory system. 描述血液在循環系統中的路徑。</li>
          <li>Explain how the urinary system removes waste from the body. 解釋泌尿系統如何從身體中移除廢物。</li>
          <li>Give two examples of reflex actions and explain why they are important. 舉出兩個反射動作的例子並解釋它們為什麼重要。</li>
        </ul>
      </section>
    </main>
  );
};

export default HumanBodySystemsPage;