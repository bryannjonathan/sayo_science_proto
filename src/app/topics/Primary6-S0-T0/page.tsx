import React from 'react';
import BackButton from '@/components/BackButton';

const HealthyLifestylesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S0-T0 Healthy lifestyles</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about maintaining healthy lifestyles and handling common health situations. 
        We'll explore first aid for minor injuries, how to prevent household accidents, and understand the dangers 
        of harmful substances like tobacco and alcohol. These skills will help you make smart choices for your health and safety.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6LA1: Recognise simple first-aid for handling minor injuries or discomforts</li>
          <li>6LA2: Recognise ways to handle household accidents (e.g. fire, leakage of electricity, gas leak)</li>
          <li>6LA3: Be aware of the adverse effects of smoking, alcoholism, drug abuse and drug use on the body</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first thing you should do if you get a minor cut? 如果你有一個小傷口，你應該首先做什麼？
            <br />
            <strong>A. Wash the wound with clean water 用清水清洗傷口 ✅</strong> B. Apply a bandage immediately 立即貼上繃帶 C. Ignore it and let it heal on its own 忽略它，讓它自行癒合 D. Put ice directly on the wound 直接將冰塊放在傷口上
          </li>
          <li>
            What should you do if you smell a gas leak at home? 如果你在家聞到煤氣洩漏，你應該怎麼做？
            <br />
            <strong>A. Open all windows and doors 打開所有門窗 ✅</strong> B. Light a match to check the source 點燃火柴檢查來源 C. Turn on electrical appliances 打開電器 D. Spray water to dilute the gas 噴水稀釋煤氣
          </li>
          <li>
            Which of the following is NOT a healthy lifestyle choice? 以下哪一項不是健康的生活方式選擇？
            <br />
            A. Eating a balanced diet 均衡飲食 B. Exercising regularly 定期運動 <strong>C. Smoking cigarettes 吸煙 ✅</strong> D. Getting enough sleep 獲得足夠的睡眠
          </li>
          <li>
            What is the best way to treat a minor burn? 治療輕微燒傷的最佳方法是什麼？
            <br />
            <strong>A. Run cool water over the burn 用冷水沖洗燒傷處 ✅</strong> B. Apply butter to the burn 在燒傷處塗抹黃油 C. Pop any blisters that form 戳破形成的水泡 D. Cover the burn with a tight bandage 用緊繃帶包紮燒傷處
          </li>
          <li>
            What should you do if there is a small fire in the kitchen? 如果廚房發生小火災，你應該怎麼做？
            <br />
            <strong>A. Use a fire extinguisher or cover the fire with a lid 使用滅火器或用蓋子蓋住火源 ✅</strong> B. Pour water on the fire 往火上倒水 C. Run away and call for help 逃跑並呼救 D. Ignore it and let it burn out 忽略它，讓它自行熄滅
          </li>
          <li>
            Which of the following is an adverse effect of smoking? 以下哪一項是吸煙的不良影響？
            <br />
            <strong>A. Lung cancer 肺癌 ✅</strong> B. Stronger immune system 更強的免疫系統 C. Better sense of smell 更好的嗅覺 D. Improved stamina 提高耐力
          </li>
          <li>
            What should you do if someone is choking? 如果有人窒息，你應該怎麼做？
            <br />
            <strong>A. Perform the Heimlich maneuver 進行哈姆立克急救法 ✅</strong> B. Give them water to drink 給他們喝水 C. Pat them on the back gently 輕輕拍他們的背 D. Tell them to cough harder 告訴他們用力咳嗽
          </li>
          <li>
            Which of the following is a symptom of alcohol abuse? 以下哪一項是酗酒的症狀？
            <br />
            <strong>A. Liver damage 肝臟損傷 ✅</strong> B. Improved memory 記憶力提高 C. Better coordination 更好的協調性 D. Increased energy levels 能量水平提高
          </li>
          <li>
            What is the first step in treating a nosebleed? 治療鼻血的第一步是什麼？
            <br />
            <strong>A. Pinch the nose and lean forward 捏住鼻子並向前傾 ✅</strong> B. Lie down and tilt the head back 躺下並向後仰頭 C. Blow the nose forcefully 用力擤鼻子 D. Apply ice to the forehead 在前額敷冰
          </li>
          <li>
            Which of the following is a way to prevent drug abuse? 以下哪一項是預防藥物濫用的方法？
            <br />
            <strong>A. Educating about the dangers of drugs 教育有關藥物的危險性 ✅</strong> B. Trying drugs once to see their effects 嘗試藥物一次以了解其效果 C. Keeping drugs at home for emergencies 在家中存放藥物以備不時之需 D. Ignoring the topic of drugs 忽略藥物話題
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Smoking can cause lung cancer. 吸煙會導致肺癌。 — <strong>True ✅</strong></li>
          <li>It is safe to use water to put out an electrical fire. 用水撲滅電器火災是安全的。 — <strong>False ❌</strong></li>
          <li>Regular exercise is part of a healthy lifestyle. 定期運動是健康生活方式的一部分。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe two ways to prevent household accidents. 描述兩種預防家庭事故的方法。</li>
          <li>Explain why smoking is harmful to the body. 解釋為什麼吸煙對身體有害。</li>
          <li>What are three healthy habits you can practice daily? 你可以每天實踐的三個健康習慣是什麼？</li>
        </ul>
      </section>
    </main>
  );
};

export default HealthyLifestylesPage;