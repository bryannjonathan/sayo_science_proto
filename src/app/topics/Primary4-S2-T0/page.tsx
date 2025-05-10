import React from 'react';
import BackButton from '@/components/BackButton';

const EarthsCharacteristicsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S2-T0 Earth’s characteristics</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson about Earth's characteristics! In this topic, we'll explore the different layers of our planet, 
        learn about the various types of rocks that make up Earth's crust, and discover how different soils support plant life. 
        Get ready to dive deep into what makes our Earth so special!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4EA1: State the structure of the Earth (crust, mantle, and core) and the physical characteristics of these distinct parts</li>
          <li>4EA2: Be aware that the Earth's crust is composed of rocks, including igneous rocks, sedimentary rocks, metamorphic rocks</li>
          <li>4EA3: Be aware of the main components of soil, classification of soil (sand, loam, clay) as well as the plants suitable for growing on each type of soil</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the outermost layer of the Earth called? 地球的最外層叫什麼?
            <br />
            <strong>A. Crust 地殼 ✅</strong> B. Mantle 地幔 C. Core 地核 D. Soil 土壤
          </li>
          <li>
            Which layer of the Earth is the hottest? 地球的哪一層最熱?
            <br />
            A. Crust 地殼 B. Mantle 地幔 <strong>C. Core 地核 ✅</strong> D. Soil 土壤
          </li>
          <li>
            What type of rock is formed from cooled lava? 哪種岩石是由冷卻的熔岩形成的?
            <br />
            A. Sedimentary rock 沉積岩 B. Metamorphic rock 變質岩 <strong>C. Igneous rock 火成岩 ✅</strong> D. Sandstone 砂岩
          </li>
          <li>
            Which type of soil is best for growing most plants? 哪種土壤最適合種植大多數植物?
            <br />
            A. Sand 沙土 <strong>B. Loam 壤土 ✅</strong> C. Clay 黏土 D. Gravel 礫土
          </li>
          <li>
            What is the main component of soil? 土壤的主要成分是什麼?
            <br />
            A. Water 水 B. Air 空氣 C. Minerals 礦物質 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which type of rock is formed from layers of sediment? 哪種岩石是由沉積物層形成的?
            <br />
            A. Igneous rock 火成岩 B. Metamorphic rock 變質岩 <strong>C. Sedimentary rock 沉積岩 ✅</strong> D. Granite 花崗岩
          </li>
          <li>
            Which part of the Earth is mostly made of iron and nickel? 地球的哪一部分主要由鐵和鎳組成?
            <br />
            A. Crust 地殼 B. Mantle 地幔 <strong>C. Core 地核 ✅</strong> D. Soil 土壤
          </li>
          <li>
            Which type of soil holds water the best? 哪種土壤最能保持水分?
            <br />
            A. Sand 沙土 B. Loam 壤土 <strong>C. Clay 黏土 ✅</strong> D. Silt 粉土
          </li>
          <li>
            What is the thickest layer of the Earth? 地球最厚的層是什麼?
            <br />
            A. Crust 地殼 <strong>B. Mantle 地幔 ✅</strong> C. Core 地核 D. Soil 土壤
          </li>
          <li>
            Which type of rock is formed by heat and pressure? 哪種岩石是由熱和壓力形成的?
            <br />
            A. Igneous rock 火成岩 B. Sedimentary rock 沉積岩 <strong>C. Metamorphic rock 變質岩 ✅</strong> D. Basalt 玄武岩
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Earth's core is the outermost layer. 地核是地球的最外層。 — <strong>False ❌</strong></li>
          <li>Clay soil is the best for growing most plants. 黏土最適合種植大多數植物。 — <strong>False ❌</strong></li>
          <li>The mantle is the thickest layer of the Earth. 地幔是地球最厚的層。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe the three main layers of the Earth. 描述地球的三個主要層。</li>
          <li>Why is loam soil good for growing plants? 為什麼壤土適合種植植物?</li>
          <li>How are sedimentary rocks formed? 沉積岩是如何形成的?</li>
        </ul>
      </section>
    </main>
  );
};

export default EarthsCharacteristicsPage;