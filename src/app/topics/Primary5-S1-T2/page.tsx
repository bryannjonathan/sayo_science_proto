import React from 'react';
import BackButton from '@/components/BackButton';

const SourcesAndUsesOfEnergyPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S1-T2 Sources and uses of energy</h1>
      
      <p className="text-gray-700 mb-6">
        In this topic, we will explore different forms of energy and how they are used in our daily lives. 
        You'll learn about various energy sources, how energy can change from one form to another, 
        and discover examples of kinetic, potential, and chemical energy all around us.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5MB1: Give examples of the different forms of energy (e.g. kinetic energy, potential energy, chemical energy)</li>
          <li>5MB2: Be aware that energy can be converted from one form to another</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>
        
        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is an example of kinetic energy? 以下哪個是動能的例子?
            <br />
            A. A stretched rubber band 一條拉長的橡皮筋 <strong>B. A rolling ball 一個滾動的球 ✅</strong> C. A battery 一個電池 D. A book on a shelf 書架上的書
          </li>
          <li>
            What form of energy is stored in food? 食物中儲存的是哪種形式的能量?
            <br />
            A. Kinetic energy 動能 B. Potential energy 勢能 <strong>C. Chemical energy 化學能 ✅</strong> D. Light energy 光能
          </li>
          <li>
            Which of the following converts chemical energy into light and heat energy? 以下哪個將化學能轉化為光和熱能?
            <br />
            A. A wind turbine 風力渦輪機 <strong>B. A burning candle 燃燒的蠟燭 ✅</strong> C. A solar panel 太陽能板 D. A moving car 行駛中的汽車
          </li>
          <li>
            What form of energy does a stretched spring have? 拉長的彈簧具有哪種形式的能量?
            <br />
            A. Kinetic energy 動能 <strong>B. Potential energy 勢能 ✅</strong> C. Chemical energy 化學能 D. Sound energy 聲能
          </li>
          <li>
            Which of the following is NOT a source of energy? 以下哪個不是能量的來源?
            <br />
            A. Sun 太陽 B. Wind 風 C. Water 水 <strong>D. Stone 石頭 ✅</strong>
          </li>
          <li>
            What form of energy is used to power a flashlight? 手電筒使用哪種形式的能量?
            <br />
            <strong>A. Chemical energy 化學能 ✅</strong> B. Light energy 光能 C. Sound energy 聲能 D. Heat energy 熱能
          </li>
          <li>
            Which of the following is an example of potential energy? 以下哪個是勢能的例子?
            <br />
            A. A flying bird 飛翔的鳥 B. A running child 奔跑的孩子 <strong>C. A book on a table 桌子上的書 ✅</strong> D. A spinning top 旋轉的陀螺
          </li>
          <li>
            What form of energy is produced by a guitar when it is played? 彈奏吉他時產生哪種形式的能量?
            <br />
            A. Light energy 光能 <strong>B. Sound energy 聲能 ✅</strong> C. Heat energy 熱能 D. Chemical energy 化學能
          </li>
          <li>
            Which of the following converts wind energy into electrical energy? 以下哪個將風能轉化為電能?
            <br />
            A. Solar panel 太陽能板 <strong>B. Wind turbine 風力渦輪機 ✅</strong> C. Battery 電池 D. Light bulb 燈泡
          </li>
          <li>
            What form of energy is used to cook food in a microwave? 微波爐使用哪種形式的能量來烹飪食物?
            <br />
            A. Sound energy 聲能 B. Light energy 光能 <strong>C. Heat energy 熱能 ✅</strong> D. Kinetic energy 動能
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Energy can be created and destroyed. 能量可以被創造和毀滅。 — <strong>False ❌</strong></li>
          <li>A moving car has kinetic energy. 行駛中的汽車具有動能。 — <strong>True ✅</strong></li>
          <li>Chemical energy is stored in batteries. 化學能儲存在電池中。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of potential energy and explain why they are considered potential energy. 舉出兩個勢能的例子並解釋為什麼它們被認為是勢能。</li>
          <li>Describe how energy is converted when you turn on a flashlight. 描述當你打開手電筒時能量是如何轉換的。</li>
          <li>Why is the sun considered an important source of energy? Give two reasons. 為什麼太陽被認為是重要的能量來源？舉出兩個原因。</li>
        </ul>
      </section>
    </main>
  );
};

export default SourcesAndUsesOfEnergyPage;