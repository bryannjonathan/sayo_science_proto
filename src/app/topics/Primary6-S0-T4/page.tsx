import React from 'react';
import BackButton from '@/components/BackButton';

const CellsAndMicroscopePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S0-T4 Cells and microscope</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our exploration of cells and microscopes! In this topic, we'll discover how all living things are made up of tiny building blocks called cells. We'll learn how to use a microscope to observe these cells, and compare the structures of plant and animal cells. Get ready to see the amazing world that exists under the microscope!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6LF1: Be aware that cells are the basic units of living things</li>
          <li>6LF2: Use a microscope to observe animal cells and plant cells</li>
          <li>6LF3: Identify the different parts of animal and plant cells, and compare the similarities and differences between animal and plant cells (plant cells have cell walls while animal cells do not, most plant cells have chloroplasts while most animal cells do not)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Question: What is the basic unit of living things? 生物的基本單位是什麼?<br />
            <strong>A. Cell 細胞 ✅</strong> B. Atom 原子 C. Molecule 分子 D. Organ 器官
          </li>
          <li>Question: Which part of the plant cell is responsible for photosynthesis? 植物細胞的哪個部分負責光合作用?<br />
            A. Cell wall 細胞壁 <strong>B. Chloroplast 葉綠體 ✅</strong> C. Nucleus 細胞核 D. Mitochondria 粒線體
          </li>
          <li>Question: What is the main difference between plant and animal cells? 植物細胞和動物細胞的主要區別是什麼?<br />
            <strong>A. Plant cells have a cell wall 植物細胞有細胞壁 ✅</strong> B. Animal cells have chloroplasts 動物細胞有葉綠體 C. Plant cells do not have a nucleus 植物細胞沒有細胞核 D. Animal cells have a cell wall 動物細胞有細胞壁
          </li>
          <li>Question: Which instrument is used to observe cells? 觀察細胞需要使用什麼儀器?<br />
            A. Telescope 望遠鏡 <strong>B. Microscope 顯微鏡 ✅</strong> C. Magnifying glass 放大鏡 D. Thermometer 溫度計
          </li>
          <li>Question: Which of the following is NOT found in animal cells? 以下哪一項不存在於動物細胞中?<br />
            A. Nucleus 細胞核 B. Cell membrane 細胞膜 <strong>C. Chloroplast 葉綠體 ✅</strong> D. Mitochondria 粒線體
          </li>
          <li>Question: What is the function of the cell membrane? 細胞膜的功能是什麼?<br />
            <strong>A. To control what enters and leaves the cell 控制物質進出細胞 ✅</strong> B. To provide structure and support 提供結構和支持 C. To produce energy 產生能量 D. To store genetic information 儲存遺傳信息
          </li>
          <li>Question: Which part of the cell contains genetic material? 細胞的哪一部分含有遺傳物質?<br />
            A. Cell wall 細胞壁 B. Chloroplast 葉綠體 <strong>C. Nucleus 細胞核 ✅</strong> D. Vacuole 液泡
          </li>
          <li>Question: What is the function of the vacuole in plant cells? 植物細胞中液泡的功能是什麼?<br />
            <strong>A. To store water and nutrients 儲存水分和營養 ✅</strong> B. To produce energy 產生能量 C. To control cell activities 控制細胞活動 D. To protect the cell 保護細胞
          </li>
          <li>Question: Which of the following is a similarity between plant and animal cells? 以下哪一項是植物和動物細胞的相似之處?<br />
            A. Both have chloroplasts 兩者都有葉綠體 B. Both have a cell wall 兩者都有細胞壁 <strong>C. Both have a nucleus 兩者都有細胞核 ✅</strong> D. Both have a large central vacuole 兩者都有大液泡
          </li>
          <li>Question: What is the function of the mitochondria? 粒線體的功能是什麼?<br />
            <strong>A. To produce energy 產生能量 ✅</strong> B. To store water 儲存水分 C. To control cell activities 控制細胞活動 D. To provide structure 提供結構
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All living things are made up of cells. 所有生物都是由細胞組成的。 — <strong>True ✅</strong></li>
          <li>Animal cells have a cell wall. 動物細胞有細胞壁。 — <strong>False ❌</strong></li>
          <li>Chloroplasts are found in both plant and animal cells. 葉綠體存在於植物和動物細胞中。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe two differences between plant and animal cells. 描述植物細胞和動物細胞的兩個不同之處。</li>
          <li>Explain why plant cells have chloroplasts but animal cells do not. 解釋為什麼植物細胞有葉綠體而動物細胞沒有。</li>
          <li>What are the steps to properly use a microscope to observe cells? 正確使用顯微鏡觀察細胞的步驟是什麼?</li>
        </ul>
      </section>
    </main>
  );
};

export default CellsAndMicroscopePage;