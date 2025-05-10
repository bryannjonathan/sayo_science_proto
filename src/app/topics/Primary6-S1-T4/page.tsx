import React from 'react';
import BackButton from '@/components/BackButton';

const SimpleMachinesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S1-T4 Simple machines</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on simple machines! In this topic, we'll explore how levers, pulleys, and gears make our daily tasks easier. 
        You'll learn to identify different types of levers, understand how pulleys work, and discover how gears help in machines like bicycles. 
        Get ready to uncover the science behind these amazing tools that help us do work with less effort!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6MC1: Recognise the applications of three types of levers (the fulcrum located in between the effort and the load, the load located in between the fulcrum and the effort, the effort located in between the fulcrum and the load)</li>
          <li>6MC2: Be aware of the difference between a lever that reduces the effort required and a lever that requires more effort</li>
          <li>6MC3: Recognise the working principles of simple machines such as pulleys (fixed pulley, movable pulley, pulley system) and gears</li>
          <li>6MC4: Give examples of daily applications of levers, pulleys and gears (e.g. chopsticks, cable cars, bicycles)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is an example of a first-class lever where the fulcrum is located between the effort and the load? 以下哪個是第一類槓桿的例子，其中支點位於施力和負載之間？
            <br />
            <strong>A. Scissors 剪刀 ✅</strong> B. Wheelbarrow 手推車 C. Tweezers 鑷子 D. Fishing rod 釣魚竿
          </li>
          <li>
            Which type of lever requires more effort but increases the distance moved by the load? 哪種類型的槓桿需要更多的施力，但增加了負載移動的距離？
            <br />
            A. First-class lever 第一類槓桿 B. Second-class lever 第二類槓桿 <strong>C. Third-class lever 第三類槓桿 ✅</strong> D. None of the above 以上皆非
          </li>
          <li>
            What is the main advantage of using a movable pulley? 使用動滑輪的主要優點是什麼？
            <br />
            A. It changes the direction of the force 它改變力的方向 <strong>B. It reduces the effort required 它減少所需的施力 ✅</strong> C. It increases the speed of the load 它增加負載的速度 D. It makes the load heavier 它使負載更重
          </li>
          <li>
            Which of the following is an example of a second-class lever? 以下哪個是第二類槓桿的例子？
            <br />
            A. See-saw 蹺蹺板 <strong>B. Bottle opener 開瓶器 ✅</strong> C. Chopsticks 筷子 D. Hammer 錘子
          </li>
          <li>
            In a pulley system, what happens when you add more pulleys? 在滑輪系統中，當你增加更多的滑輪時會發生什麼？
            <br />
            A. The effort required increases 所需的施力增加 <strong>B. The effort required decreases 所需的施力減少 ✅</strong> C. The direction of the force changes 力的方向改變 D. The load becomes heavier 負載變得更重
          </li>
          <li>
            Which simple machine is used in a bicycle to change the speed? 自行車中使用哪種簡單機械來改變速度？
            <br />
            A. Lever 槓桿 B. Pulley 滑輪 <strong>C. Gear 齒輪 ✅</strong> D. Wheel and axle 輪軸
          </li>
          <li>
            What is the function of a fixed pulley? 固定滑輪的功能是什麼？
            <br />
            A. To reduce the effort required 減少所需的施力 <strong>B. To change the direction of the force 改變力的方向 ✅</strong> C. To increase the speed of the load 增加負載的速度 D. To make the load heavier 使負載更重
          </li>
          <li>
            Which of the following is an example of a third-class lever? 以下哪個是第三類槓桿的例子？
            <br />
            A. Nutcracker 胡桃夾子 <strong>B. Tongs 夾子 ✅</strong> C. Crowbar 撬棍 D. Seesaw 蹺蹺板
          </li>
          <li>
            How do gears help in a machine? 齒輪如何在機器中有幫助？
            <br />
            A. They reduce friction 它們減少摩擦 <strong>B. They change the direction or speed of rotation 它們改變旋轉的方向或速度 ✅</strong> C. They increase the weight of the load 它們增加負載的重量 D. They make the machine louder 它們使機器更大聲
          </li>
          <li>
            Which simple machine is used in a cable car? 纜車中使用哪種簡單機械？
            <br />
            A. Lever 槓桿 <strong>B. Pulley 滑輪 ✅</strong> C. Gear 齒輪 D. Inclined plane 斜面
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A second-class lever always reduces the effort required to lift a load. 第二類槓桿總是減少提升負載所需的施力。 — <strong>True ✅</strong></li>
          <li>A fixed pulley reduces the effort required to lift a load. 固定滑輪減少提升負載所需的施力。 — <strong>False ❌</strong></li>
          <li>Chopsticks are an example of a third-class lever. 筷子是第三類槓桿的例子。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of first-class levers used in daily life and explain why they are first-class levers. 舉出兩個日常生活中使用的第一類槓桿的例子，並解釋為什麼它們是第一類槓桿。</li>
          <li>Explain how a movable pulley reduces the effort required to lift a load. 解釋動滑輪如何減少提升負載所需的施力。</li>
          <li>Describe how gears are used in a bicycle and what advantage they provide. 描述齒輪如何在自行車中使用以及它們提供的優點。</li>
        </ul>
      </section>
    </main>
  );
};

export default SimpleMachinesPage;