import React from 'react';
import BackButton from '@/components/BackButton';

const SourcesAndUsesOfEnergyPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S1-T2 Sources and uses of energy</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore different sources of energy and how we use them in our daily lives. 
        You'll learn about renewable and non-renewable energy sources, why energy is important, and how we can save energy. 
        Let's discover how energy powers our world!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4MB1: Identify the sources of energy (e.g. the Sun, moving water, wind, coal, crude oil, natural gas)</li>
          <li>4MB2: Be aware that energy is needed for transportation, manufacturing, illumination, and powering electronic equipment</li>
          <li>4MB3: Recognise the importance of energy saving</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the main source of energy for the Earth? 地球的主要能源是什麼?
            <br />
            <strong>A. The Sun 太陽 ✅</strong> B. Wind 風 C. Coal 煤 D. Natural gas 天然氣
          </li>
          <li>
            Which of the following is NOT a source of energy? 以下哪一項不是能源?
            <br />
            A. Moving water 流動的水 B. Crude oil 原油 <strong>C. Sand 沙子 ✅</strong> D. Wind 風
          </li>
          <li>
            What is energy needed for? 能源有什麼用途?
            <br />
            A. Transportation 交通 B. Manufacturing 製造 C. Illumination 照明 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which of these is a fossil fuel? 以下哪一項是化石燃料?
            <br />
            A. Solar energy 太陽能 B. Wind energy 風能 <strong>C. Coal 煤 ✅</strong> D. Moving water 流動的水
          </li>
          <li>
            How can we save energy at home? 我們如何在家中節省能源?
            <br />
            A. Turn off lights when not in use 不使用時關燈 B. Use energy-efficient appliances 使用節能電器 <strong>C. Both A and B A和B都是 ✅</strong> D. Leave electronic devices on 讓電子設備一直開著
          </li>
          <li>
            Which energy source is renewable? 哪一種能源是可再生的?
            <br />
            A. Coal 煤 B. Natural gas 天然氣 <strong>C. Wind 風 ✅</strong> D. Crude oil 原油
          </li>
          <li>
            What is the energy from the Sun called? 來自太陽的能量叫什麼?
            <br />
            <strong>A. Solar energy 太陽能 ✅</strong> B. Wind energy 風能 C. Hydro energy 水能 D. Fossil fuel energy 化石燃料能源
          </li>
          <li>
            Which of these is used to generate electricity? 以下哪一項用於發電?
            <br />
            A. Moving water 流動的水 B. Wind 風 C. Coal 煤 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Why is saving energy important? 為什麼節省能源很重要?
            <br />
            A. To protect the environment 保護環境 B. To reduce costs 減少成本 C. To conserve resources 節約資源 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which of these is NOT a use of energy? 以下哪一項不是能源的用途?
            <br />
            A. Powering electronic equipment 為電子設備供電 B. Manufacturing goods 製造商品 C. Growing plants 種植植物 <strong>D. None of the above 以上皆不是 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Energy is only needed for transportation. 能源只用於交通。 — <strong>False ❌</strong></li>
          <li>Fossil fuels like coal and oil are renewable energy sources. 煤和石油等化石燃料是可再生能源。 — <strong>False ❌</strong></li>
          <li>Turning off unused lights is a good way to save energy. 關掉不使用的燈是節省能源的好方法。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name three sources of energy and explain how they are used. 列出三種能源並解釋它們的用途。</li>
          <li>Why is the Sun considered the most important source of energy? 為什麼太陽被認為是最重要的能源?</li>
          <li>What are some ways you can save energy at school? 你在學校可以如何節省能源?</li>
        </ul>
      </section>
    </main>
  );
};

export default SourcesAndUsesOfEnergyPage;