import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfMatterPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S1-T0 Properties of matter</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on the properties of matter! In this topic, we'll explore how different materials like metals and non-metals behave. We'll learn about conductivity, why certain materials are used for specific purposes, and how to test material properties. Get ready to discover why copper is great for wires and why we use iron in cooking pots!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4MA1: Compare some physical properties (electrical conductivity and thermal conductivity) of metals and non-metals</li>
          <li>4MA2: Relate the properties of metals to their uses (e.g. copper which conducts electricity well can be used to make electrical wires; iron that conducts heat well can be used to make cooking utensils)</li>
          <li>4MA3: Determine whether a material is suitable for thermal conduction or thermal insulation based on its properties</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which material is a good conductor of electricity? 哪種材料是良好的電導體?
            <br />
            <strong>A. Copper 銅 ✅</strong> B. Wood 木頭 C. Plastic 塑膠 D. Rubber 橡膠
          </li>
          <li>
            Why is iron commonly used to make cooking utensils? 為什麼鐵常用來製作烹飪用具?
            <br />
            <strong>A. It conducts heat well 它導熱性好 ✅</strong> B. It is lightweight 它很輕 C. It does not rust 它不會生鏽 D. It is cheap 它很便宜
          </li>
          <li>
            Which of the following is a non-metal? 以下哪種是非金屬?
            <br />
            A. Aluminum 鋁 B. Gold 金 <strong>C. Sulfur 硫 ✅</strong> D. Silver 銀
          </li>
          <li>
            What property makes copper suitable for electrical wires? 銅的什麼特性使其適合用於電線?
            <br />
            <strong>A. High electrical conductivity 高導電性 ✅</strong> B. High thermal insulation 高隔熱性 C. Low melting point 低熔點 D. Flexibility 柔韌性
          </li>
          <li>
            Which material would be best for thermal insulation? 哪種材料最適合隔熱?
            <br />
            A. Iron 鐵 B. Copper 銅 <strong>C. Wool 羊毛 ✅</strong> D. Aluminum 鋁
          </li>
          <li>
            Which of the following is a property of most metals? 以下哪項是大多數金屬的特性?
            <br />
            <strong>A. Good conductor of heat 良好的導熱體 ✅</strong> B. Poor conductor of electricity 不良的導電體 C. Brittle 易碎 D. Transparent 透明
          </li>
          <li>
            Why is wood not used to make electrical wires? 為什麼不用木頭製作電線?
            <br />
            <strong>A. It does not conduct electricity 它不導電 ✅</strong> B. It is too heavy 它太重 C. It melts easily 它容易熔化 D. It is too expensive 它太貴
          </li>
          <li>
            Which metal is commonly used for making coins? 哪種金屬常用於製作硬幣?
            <br />
            <strong>A. Copper 銅 ✅</strong> B. Mercury 汞 C. Sodium 鈉 D. Potassium 鉀
          </li>
          <li>
            What is the main reason for using aluminum in cooking foil? 使用鋁製作烹飪箔的主要原因是什么?
            <br />
            <strong>A. It conducts heat well 它導熱性好 ✅</strong> B. It is magnetic 它有磁性 C. It is transparent 它是透明的 D. It is very heavy 它非常重
          </li>
          <li>
            Which of the following is NOT a property of metals? 以下哪項不是金屬的特性?
            <br />
            A. Malleable 可延展的 <strong>B. Dull 暗淡的 ✅</strong> C. Conductive 導電的 D. Shiny 有光澤的
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All metals are good conductors of electricity. 所有金屬都是良好的電導體。 — <strong>True ✅</strong></li>
          <li>Plastic is a better thermal conductor than metal. 塑膠的導熱性比金屬好。 — <strong>False ❌</strong></li>
          <li>Iron is used to make cooking utensils because it conducts heat well. 鐵用於製作烹飪用具是因為它導熱性好。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of metals and explain one use for each based on their properties. 舉出兩種金屬的例子，並根據它們的特性解釋每種金屬的一個用途。</li>
          <li>Why is it important to use materials with good thermal insulation in buildings? 為什麼在建築物中使用具有良好隔熱性能的材料很重要?</li>
          <li>Describe an experiment to test whether a material is a good conductor of heat. 描述一個實驗來測試一種材料是否是良好的導熱體。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfMatterPage;