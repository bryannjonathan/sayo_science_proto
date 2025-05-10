import React from 'react';
import BackButton from '@/components/BackButton';

const ForceAndMotionRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S1-T5 Force and motion-related phenomena</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how forces affect the motion of objects. You'll learn that forces can make things move, stop, speed up, slow down, or change direction. We'll also discover that forces always come in pairs and learn different ways to compare how fast objects are moving. Get ready to understand the science behind everyday movements!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5MC1: Be aware that forces can change the state of motion of an object (forces can make a stationary object move or stop a moving object; forces can change the speed of a moving object; forces can change the direction of a moving object)</li>
          <li>5MC2: Recognise that forces always work in action and reaction pairs</li>
          <li>5MC3: Recognise methods to compare the speed of moving objects (compare the distances travelled by two objects within the same period of time, or compare the time taken for two objects to travel the same distance)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What can a force do to a stationary object? 力可以對靜止的物體做什麼？
            <br />
            <strong>A. Make it move 使它移動 ✅</strong> B. Make it disappear 使它消失 C. Make it change color 使它改變顏色 D. Make it smaller 使它變小
          </li>
          <li>
            What happens when a force is applied to a moving object? 當力作用於移動的物體時會發生什麼？
            <br />
            A. It can stop the object 它可以停止物體 B. It can change its speed 它可以改變它的速度 C. It can change its direction 它可以改變它的方向 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Forces always work in: 力總是成對出現，稱為：
            <br />
            <strong>A. Action and reaction pairs 作用力和反作用力對 ✅</strong> B. Single forces 單一力 C. Circular motions 圓周運動 D. Random directions 隨機方向
          </li>
          <li>
            How can you compare the speed of two moving objects? 如何比較兩個移動物體的速度？
            <br />
            A. Compare the distances travelled in the same time 比較相同時間內移動的距離 B. Compare the time taken to travel the same distance 比較移動相同距離所需的時間 <strong>C. Both A and B A和B都是 ✅</strong> D. None of the above 以上皆非
          </li>
          <li>
            What is required to change the direction of a moving object? 改變移動物體的方向需要什麼？
            <br />
            <strong>A. A force 一個力 ✅</strong> B. Heat 熱 C. Light 光 D. Sound 聲音
          </li>
          <li>
            Which of the following is an example of a force? 以下哪個是力的例子？
            <br />
            A. Pushing a box 推箱子 B. Pulling a rope 拉繩子 C. Gravity 重力 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            If two objects travel the same distance, the one that takes less time is: 如果兩個物體移動相同的距離，花費時間較少的那個物體：
            <br />
            <strong>A. Faster 更快 ✅</strong> B. Slower 更慢 C. The same speed 速度相同 D. None of the above 以上皆非
          </li>
          <li>
            What happens when you push a wall? 當你推牆時會發生什麼？
            <br />
            <strong>A. The wall pushes back 牆會推回來 ✅</strong> B. The wall moves 牆會移動 C. Nothing happens 什麼都不會發生 D. The wall disappears 牆會消失
          </li>
          <li>
            Which force is always pulling objects toward the Earth? 哪種力總是將物體拉向地球？
            <br />
            A. Friction 摩擦力 <strong>B. Gravity 重力 ✅</strong> C. Magnetism 磁力 D. Electricity 電力
          </li>
          <li>
            If a ball is rolling on the ground and slows down, what is most likely causing it? 如果一個球在地上滾動並減速，最可能的原因是什麼？
            <br />
            <strong>A. Friction 摩擦力 ✅</strong> B. Gravity 重力 C. Wind 風 D. Light 光
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>A force can make a stationary object move. 力可以使靜止的物體移動。 — <strong>True ✅</strong></li>
          <li>Forces can only change the speed of an object, not its direction. 力只能改變物體的速度，不能改變它的方向。 — <strong>False ❌</strong></li>
          <li>If two objects travel the same distance, the one that takes more time is faster. 如果兩個物體移動相同的距離，花費時間較多的那個物體更快。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give an example of how a force can change the speed of a moving object. 舉一個例子說明力如何改變移動物體的速度。</li>
          <li>Explain why forces always work in action and reaction pairs. 解釋為什麼力總是成對出現（作用力和反作用力）。</li>
          <li>Describe two methods to compare the speed of two moving objects. 描述兩種比較兩個移動物體速度的方法。</li>
        </ul>
      </section>
    </main>
  );
};

export default ForceAndMotionRelatedPhenomenaPage;