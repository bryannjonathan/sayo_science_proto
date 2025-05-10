import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfSoundAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S1-T2 Properties of sound and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how sound is created and how it travels. We'll learn about vibrations that make sounds, 
        how loud sounds are made, and discover interesting sound phenomena like echoes. Get ready to listen and learn about the 
        amazing world of sound!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2MB1: Be aware that sound is produced by the vibration of objects</li>
          <li>2MB2: Be aware that the greater the vibration of an object, the louder the sound produced</li>
          <li>2MB3: Be aware of some phenomena related to sound (e.g. echo)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: How is sound produced? 聲音是如何產生的?
            <br />
            <strong>A. By the vibration of objects 通過物體的振動 ✅</strong> B. By the movement of light 通過光的移動 C. By the change of color 通過顏色的變化 D. By the smell of objects 通過物體的氣味
          </li>
          <li>
            Question: What happens when an object vibrates more? 當物體振動得更厲害時會發生什麼?
            <br />
            <strong>A. The sound becomes louder 聲音變得更大 ✅</strong> B. The sound becomes softer 聲音變得更小 C. The sound disappears 聲音消失 D. The sound changes color 聲音改變顏色
          </li>
          <li>
            Question: What is an echo? 什麼是回聲?
            <br />
            <strong>A. A sound that bounces back 反彈回來的聲音 ✅</strong> B. A type of light 一種光 C. A kind of smell 一種氣味 D. A color in the rainbow 彩虹中的一種顏色
          </li>
          <li>
            Question: Which of these can produce sound? 以下哪一個可以產生聲音?
            <br />
            <strong>A. A guitar 吉他 ✅</strong> B. A book 書本 C. A chair 椅子 D. A pencil 鉛筆
          </li>
          <li>
            Question: What do you need to hear sound? 你需要什麼來聽到聲音?
            <br />
            <strong>A. Ears 耳朵 ✅</strong> B. Eyes 眼睛 C. Nose 鼻子 D. Mouth 嘴巴
          </li>
          <li>
            Question: Which object vibrates to produce sound? 哪個物體通過振動產生聲音?
            <br />
            <strong>A. Drum 鼓 ✅</strong> B. Stone 石頭 C. Paper 紙 D. Water 水
          </li>
          <li>
            Question: Where can you hear an echo? 你可以在哪裡聽到回聲?
            <br />
            <strong>A. In a big empty room 在一個大而空的房間裡 ✅</strong> B. Underwater 在水下 C. In a dark room 在一個黑暗的房間裡 D. In a small box 在一個小盒子裡
          </li>
          <li>
            Question: What makes a louder sound? 什麼會產生更大的聲音?
            <br />
            <strong>A. Hitting a drum hard 用力敲鼓 ✅</strong> B. Touching a drum lightly 輕輕觸摸鼓 C. Looking at a drum 看著鼓 D. Holding a drum 拿著鼓
          </li>
          <li>
            Question: Which of these is a source of sound? 以下哪一個是聲音的來源?
            <br />
            <strong>A. A singing bird 一隻唱歌的鳥 ✅</strong> B. A sleeping cat 一隻睡覺的貓 C. A still rock 一塊靜止的石頭 D. A picture 一張圖片
          </li>
          <li>
            Question: What happens when you pluck a guitar string? 當你撥動吉他弦時會發生什麼?
            <br />
            <strong>A. It vibrates and produces sound 它振動並產生聲音 ✅</strong> B. It changes color 它改變顏色 C. It disappears 它消失 D. It becomes cold 它變冷
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Sound is produced by vibrating objects. 聲音是由振動的物體產生的。 — <strong>True ✅</strong></li>
          <li>The louder the sound, the less the object vibrates. 聲音越大，物體振動得越少。 — <strong>False ❌</strong></li>
          <li>An echo is a sound that bounces back. 回聲是反彈回來的聲音。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name two objects that produce sound when they vibrate. 列出兩個振動時會產生聲音的物體。</li>
          <li>Why can you hear an echo in a big empty room? 為什麼在一個大而空的房間裡可以聽到回聲?</li>
          <li>What can you do to make a drum produce a louder sound? 你可以做什麼讓鼓產生更大的聲音?</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfSoundAndRelatedPhenomenaPage;