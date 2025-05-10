import React from 'react';
import BackButton from '@/components/BackButton';

const SourcesAndUsesOfEnergyPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S1-T3 Sources and uses of energy</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about different forms of energy and how electrical energy is converted into other useful forms in our daily lives. We'll explore common appliances and understand how they use electricity to make our lives easier.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3MB1: Be aware that electrical energy can be converted to other forms of energy (e.g. thermal energy, light energy, sound energy)</li>
          <li>3MB2: Give examples of uses of electricity in daily life</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What form of energy does a light bulb convert electrical energy into? 燈泡將電能轉換成什麼形式的能量?
            <br />
            A. Light energy 光能 B. Sound energy 聲能 C. Thermal energy 熱能 <strong>D. Both A and C A和C都是 ✅</strong>
          </li>
          <li>
            Which of the following uses electrical energy to produce sound? 以下哪一個使用電能來產生聲音?
            <br />
            <strong>A. Television 電視 ✅</strong> B. Fan 風扇 C. Toaster 烤麵包機 D. Lamp 燈
          </li>
          <li>
            What does an electric heater convert electrical energy into? 電暖器將電能轉換成什麼?
            <br />
            A. Light energy 光能 <strong>B. Thermal energy 熱能 ✅</strong> C. Sound energy 聲能 D. Motion energy 動能
          </li>
          <li>
            Which appliance uses electrical energy to produce light and heat? 哪種電器使用電能來產生光和熱?
            <br />
            A. Radio 收音機 B. Hair dryer 吹風機 <strong>C. Oven 烤箱 ✅</strong> D. Electric kettle 電熱水壺
          </li>
          <li>
            What form of energy does a fan mainly produce? 風扇主要產生什麼形式的能量?
            <br />
            A. Light energy 光能 B. Sound energy 聲能 <strong>C. Motion energy 動能 ✅</strong> D. Thermal energy 熱能
          </li>
          <li>
            Which of the following is NOT a use of electricity in daily life? 以下哪一項不是日常生活中電力的用途?
            <br />
            <strong>A. Lighting a candle 點燃蠟燭 ✅</strong> B. Watching TV 看電視 C. Using a computer 使用電腦 D. Charging a phone 為手機充電
          </li>
          <li>
            What does a microwave convert electrical energy into? 微波爐將電能轉換成什麼?
            <br />
            A. Light energy 光能 B. Thermal energy 熱能 C. Sound energy 聲能 <strong>D. Both B and C B和C都是 ✅</strong>
          </li>
          <li>
            Which appliance uses electrical energy to produce motion? 哪種電器使用電能來產生運動?
            <br />
            <strong>A. Blender 攪拌機 ✅</strong> B. Lamp 燈 C. Electric blanket 電熱毯 D. Toaster 烤麵包機
          </li>
          <li>
            What form of energy does a radio convert electrical energy into? 收音機將電能轉換成什麼形式的能量?
            <br />
            A. Light energy 光能 <strong>B. Sound energy 聲能 ✅</strong> C. Thermal energy 熱能 D. Motion energy 動能
          </li>
          <li>
            Which of the following uses electrical energy to produce light? 以下哪一個使用電能來產生光?
            <br />
            A. Refrigerator 冰箱 <strong>B. Flashlight 手電筒 ✅</strong> C. Electric stove 電爐 D. Hair straightener 直髮器
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A television converts electrical energy into light and sound. 電視將電能轉換成光和聲音。 — <strong>True ✅</strong></li>
          <li>A battery-powered toy car does not use electrical energy. 電池驅動的玩具車不使用電能。 — <strong>False ❌</strong></li>
          <li>All appliances convert electrical energy into only one form of energy. 所有電器都只將電能轉換成一種形式的能量。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of how electrical energy is used in your home. 舉出兩個你家裡使用電能的例子。</li>
          <li>Explain how a toaster converts electrical energy into another form of energy. 解釋烤麵包機如何將電能轉換成另一種形式的能量。</li>
          <li>Why is it important to save electricity? Give one reason. 為什麼節省電力很重要？給出一個理由。</li>
        </ul>
      </section>
    </main>
  );
};

export default SourcesAndUsesOfEnergyPage;