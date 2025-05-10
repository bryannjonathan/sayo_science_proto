import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfLightAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S1-T2 Properties of light and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Light is all around us and helps us see the world! In this topic, we'll explore how light travels, 
        how mirrors create images, and how light bends when passing through different materials. 
        We'll learn about different types of mirrors and their uses in daily life, and discover 
        interesting phenomena like refraction that make objects appear bent in water.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6MB1: Recognise the mode of light propagation</li>
          <li>6MB2: Recognise the characteristics of images formed by a plane mirror, including being the same size as the object and laterally inverted</li>
          <li>6MB3: Give daily application of different types of mirrors, including plane, convex and concave mirrors</li>
          <li>6MB4: Be aware that refraction occurs when light passes through different transparent materials</li>
          <li>6MB5: Give examples of daily applications of refraction of light (e.g. glasses, magnifying glasses, microscopes)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            How does light travel? 光是怎樣傳播的?
            <br />
            <strong>A. In straight lines 以直線傳播 ✅</strong> B. In curved lines 以曲線傳播 C. In zigzag lines 以鋸齒線傳播 D. In circular lines 以圓形線傳播
          </li>
          <li>
            What is the size of the image formed by a plane mirror compared to the object? 平面鏡形成的影像與物體的大小比較是怎樣的?
            <br />
            A. Smaller than the object 比物體小 B. Larger than the object 比物體大 <strong>C. The same size as the object 與物體大小相同 ✅</strong> D. Depends on the distance 視乎距離而定
          </li>
          <li>
            Which type of mirror is used in a car's side mirror? 汽車的側鏡使用的是哪種鏡子?
            <br />
            A. Plane mirror 平面鏡 <strong>B. Convex mirror 凸面鏡 ✅</strong> C. Concave mirror 凹面鏡 D. None of the above 以上皆非
          </li>
          <li>
            What happens to light when it passes from air into water? 當光從空氣進入水中時會發生什麼現象?
            <br />
            A. It stops 它會停止 B. It reflects 它會反射 <strong>C. It refracts 它會折射 ✅</strong> D. It disappears 它會消失
          </li>
          <li>
            Which of the following is an example of refraction of light? 以下哪個是光折射的例子?
            <br />
            A. Looking at a mirror 照鏡子 <strong>B. Using a magnifying glass 使用放大鏡 ✅</strong> C. Looking at a shadow 看影子 D. None of the above 以上皆非
          </li>
          <li>
            What is the characteristic of an image formed by a plane mirror? 平面鏡形成的影像有什麼特徵?
            <br />
            A. It is upside down 它是倒轉的 <strong>B. It is laterally inverted 它是左右相反的 ✅</strong> C. It is smaller than the object 它比物體小 D. It is larger than the object 它比物體大
          </li>
          <li>
            Which mirror is used in a flashlight to focus light? 手電筒中使用哪種鏡子來聚焦光線?
            <br />
            A. Plane mirror 平面鏡 B. Convex mirror 凸面鏡 <strong>C. Concave mirror 凹面鏡 ✅</strong> D. None of the above 以上皆非
          </li>
          <li>
            What is the main reason we can see objects? 我們能看到物體的主要原因是什麼?
            <br />
            A. Objects emit light 物體發光 <strong>B. Light reflects off objects 光從物體反射 ✅</strong> C. Objects absorb light 物體吸收光 D. None of the above 以上皆非
          </li>
          <li>
            Which of the following is NOT a property of light? 以下哪個不是光的特性?
            <br />
            A. Travels in straight lines 以直線傳播 B. Can be reflected 可以被反射 C. Can be refracted 可以被折射 <strong>D. Can be heard 可以被聽到 ✅</strong>
          </li>
          <li>
            What is the phenomenon called when light bends as it passes through different materials? 當光通過不同材料時彎曲的現象叫什麼?
            <br />
            A. Reflection 反射 <strong>B. Refraction 折射 ✅</strong> C. Absorption 吸收 D. Diffusion 擴散
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Light can travel through a vacuum. 光可以在真空中傳播。 — <strong>True ✅</strong></li>
          <li>A concave mirror always forms a smaller image. 凹面鏡總是形成較小的影像。 — <strong>False ❌</strong></li>
          <li>Refraction occurs when light passes from one medium to another. 當光從一種介質進入另一種介質時會發生折射。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of daily applications of convex mirrors. 舉出兩個凸面鏡在日常生活中的應用例子。</li>
          <li>Explain why a pencil appears bent when placed in a glass of water. 解釋為什麼鉛筆放在一杯水中時看起來是彎曲的。</li>
          <li>Describe how a plane mirror forms an image. 描述平面鏡如何形成影像。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfLightAndRelatedPhenomenaPage;