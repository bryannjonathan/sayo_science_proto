import React from 'react';
import BackButton from '@/components/BackButton';

const SimpleMachinesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S1-T5 Simple machines</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on simple machines! In this topic, we'll explore how tools like rollers, inclined planes, and pulleys make our daily tasks easier. You'll learn to recognize these machines around you and understand how they help us by reducing force or changing its direction. Let's discover the science behind these helpful devices!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3MC1: Recognise the functions of simple machines such as rollers, inclined planes and pulleys (fixed pulley) (e.g. reducing the force required, changing the direction of force)</li>
          <li>3MC2: Give examples of daily applications of rollers, inclined planes and pulleys (e.g. wheels, ramps, elevators)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which simple machine helps to reduce the force needed to lift heavy objects by changing the direction of the force? 哪種簡單機械可以通過改變力的方向來減少舉起重物所需的力?
            <br />
            A. Roller 滾輪 B. Inclined plane 斜面 <strong>C. Pulley 滑輪 ✅</strong> D. Lever 槓桿
          </li>
          <li>
            Which of the following is an example of an inclined plane? 以下哪個是斜面的例子?
            <br />
            A. Wheelbarrow 手推車 <strong>B. Ramp 斜坡 ✅</strong> C. Elevator 電梯 D. Screwdriver 螺絲刀
          </li>
          <li>
            What is the main function of rollers? 滾輪的主要功能是什麼?
            <br />
            A. To change the direction of force 改變力的方向 <strong>B. To reduce friction 減少摩擦 ✅</strong> C. To lift heavy objects 舉起重物 D. To cut objects 切割物體
          </li>
          <li>
            Which simple machine is used in an elevator? 電梯中使用了哪種簡單機械?
            <br />
            A. Roller 滾輪 B. Inclined plane 斜面 <strong>C. Pulley 滑輪 ✅</strong> D. Lever 槓桿
          </li>
          <li>
            How does an inclined plane help us? 斜面如何幫助我們?
            <br />
            <strong>A. By reducing the force needed to move objects 通過減少移動物體所需的力 ✅</strong> B. By changing the direction of force 通過改變力的方向 C. By increasing friction 通過增加摩擦 D. By making objects heavier 通過使物體更重
          </li>
          <li>
            Which of the following is NOT a simple machine? 以下哪個不是簡單機械?
            <br />
            A. Pulley 滑輪 B. Inclined plane 斜面 C. Roller 滾輪 <strong>D. Computer 電腦 ✅</strong>
          </li>
          <li>
            What is the function of a fixed pulley? 固定滑輪的功能是什麼?
            <br />
            A. To reduce the force needed 減少所需的力 <strong>B. To change the direction of force 改變力的方向 ✅</strong> C. To increase friction 增加摩擦 D. To make objects heavier 使物體更重
          </li>
          <li>
            Which simple machine is used in a wheelbarrow? 手推車中使用了哪種簡單機械?
            <br />
            <strong>A. Roller 滾輪 ✅</strong> B. Inclined plane 斜面 C. Pulley 滑輪 D. Lever 槓桿
          </li>
          <li>
            How do rollers help in moving heavy objects? 滾輪如何幫助移動重物?
            <br />
            <strong>A. By reducing friction 通過減少摩擦 ✅</strong> B. By changing the direction of force 通過改變力的方向 C. By increasing the force needed 通過增加所需的力 D. By making objects lighter 通過使物體更輕
          </li>
          <li>
            Which of the following is an example of a pulley? 以下哪個是滑輪的例子?
            <br />
            A. Wheel 輪子 <strong>B. Flagpole 旗桿 ✅</strong> C. Ramp 斜坡 D. Screw 螺絲
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A fixed pulley can reduce the amount of force needed to lift an object. 固定滑輪可以減少舉起物體所需的力。 — <strong>False ❌</strong></li>
          <li>Rollers help to reduce friction when moving heavy objects. 滾輪可以幫助減少移動重物時的摩擦。 — <strong>True ✅</strong></li>
          <li>An inclined plane makes it easier to move objects by increasing the distance over which the force is applied. 斜面通過增加施力距離使移動物體更容易。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of how inclined planes are used in daily life. 舉出兩個斜面在日常生活中的應用例子。</li>
          <li>Explain how a fixed pulley helps us to lift heavy objects. 解釋固定滑輪如何幫助我們舉起重物。</li>
          <li>Why are rollers useful for moving heavy objects? 為什麼滾輪對於移動重物很有用?</li>
        </ul>
      </section>
    </main>
  );
};

export default SimpleMachinesPage;