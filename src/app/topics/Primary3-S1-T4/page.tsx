import React from 'react';
import BackButton from '@/components/BackButton';

const HeatTransferPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S1-T4 Heat transfer</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about how heat moves from one place to another and how we measure temperature. 
        We'll explore different ways heat can be transferred and discover the tools we use to measure how hot or cold things are. 
        Get ready to become a heat transfer expert!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3MB3: Recognise ways to measure temperature, and the commonly used unit (degree Celsius, symbol: C)</li>
          <li>3MB4: Recognise the modes of heat transfer</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the commonly used unit to measure temperature? 測量溫度的常用單位是什麼?
            <br />
            <strong>A. Degree Celsius (°C) 攝氏度 (°C) ✅</strong> B. Kilogram (kg) 公斤 (kg) C. Liter (L) 升 (L) D. Meter (m) 米 (m)
          </li>
          <li>
            Which instrument is used to measure temperature? 哪種儀器用於測量溫度?
            <br />
            <strong>A. Thermometer 溫度計 ✅</strong> B. Ruler 尺子 C. Clock 時鐘 D. Scale 秤
          </li>
          <li>
            How does heat travel through solids? 熱量如何通過固體傳遞?
            <br />
            <strong>A. Conduction 傳導 ✅</strong> B. Convection 對流 C. Radiation 輻射 D. Evaporation 蒸發
          </li>
          <li>
            Which of the following is an example of heat transfer by convection? 以下哪個是對流傳遞熱量的例子?
            <br />
            <strong>A. Boiling water in a pot 鍋中沸騰的水 ✅</strong> B. Touching a hot pan 觸摸熱鍋 C. Sunlight warming the Earth 陽光溫暖地球 D. Melting ice 融化的冰
          </li>
          <li>
            What is the symbol for degree Celsius? 攝氏度的符號是什麼?
            <br />
            <strong>A. °C °C ✅</strong> B. °F °F C. K K D. L L
          </li>
          <li>
            Which material is a good conductor of heat? 哪種材料是良好的熱導體?
            <br />
            <strong>A. Metal 金屬 ✅</strong> B. Wood 木頭 C. Plastic 塑料 D. Rubber 橡膠
          </li>
          <li>
            How does heat from the Sun reach the Earth? 太陽的熱量如何到達地球?
            <br />
            <strong>A. Radiation 輻射 ✅</strong> B. Conduction 傳導 C. Convection 對流 D. Evaporation 蒸發
          </li>
          <li>
            Which of the following is NOT a mode of heat transfer? 以下哪項不是熱傳遞的方式?
            <br />
            <strong>A. Freezing 冷凍 ✅</strong> B. Conduction 傳導 C. Convection 對流 D. Radiation 輻射
          </li>
          <li>
            What happens to the particles in a substance when it is heated? 當物質被加熱時，其中的粒子會發生什麼變化?
            <br />
            <strong>A. They move faster 它們移動得更快 ✅</strong> B. They move slower 它們移動得更慢 C. They stop moving 它們停止移動 D. They disappear 它們消失
          </li>
          <li>
            Which of the following is a poor conductor of heat? 以下哪種是熱的不良導體?
            <br />
            <strong>A. Wood 木頭 ✅</strong> B. Iron 鐵 C. Copper 銅 D. Aluminum 鋁
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Heat can only travel through solids. 熱量只能通過固體傳遞。 — <strong>False ❌</strong></li>
          <li>The symbol for degree Celsius is °C. 攝氏度的符號是°C。 — <strong>True ✅</strong></li>
          <li>Convection is the main mode of heat transfer in liquids and gases. 對流是液體和氣體中熱傳遞的主要方式。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two instruments that can be used to measure temperature. 列出兩種可以用來測量溫度的儀器。</li>
          <li>Explain one example of heat transfer by conduction in daily life. 舉一個日常生活中傳導傳遞熱量的例子並解釋。</li>
          <li>Why do we use degree Celsius to measure temperature instead of other units? 為什麼我們使用攝氏度來測量溫度而不是其他單位?</li>
        </ul>
      </section>
    </main>
  );
};

export default HeatTransferPage;