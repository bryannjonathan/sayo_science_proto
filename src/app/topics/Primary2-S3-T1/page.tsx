import React from 'react';
import BackButton from '@/components/BackButton';

const ScienceInquiryProcessesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S3-T1 Science inquiry processes</h1>
      <p className="text-gray-700 mb-6">
        Let's explore how scientists learn about the world! In this topic, we'll discover how science inquiry starts with observation and uses evidence to answer questions. You'll learn the basic steps scientists follow to understand nature and solve problems.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2SA2: Be aware that science inquiry is derived from observation</li>
          <li>2SA3: Be aware that science is evidence-based</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first step in science inquiry? 科學探究的第一步是什麼?
            <br />
            <strong>A. Observation 觀察 ✅</strong> B. Guessing 猜測 C. Drawing 畫畫 D. Singing 唱歌
          </li>
          <li>
            Science is based on what? 科學是基於什麼的?
            <br />
            <strong>A. Evidence 證據 ✅</strong> B. Opinions 意見 C. Dreams 夢境 D. Stories 故事
          </li>
          <li>
            Which of these is an example of observation? 以下哪一個是觀察的例子?
            <br />
            <strong>A. Counting the number of leaves on a plant 數植物上的葉子數量 ✅</strong> B. Drawing a picture of a tree 畫一棵樹的圖畫 C. Telling a story about a flower 講述一個關於花的故事 D. Singing a song about the sun 唱一首關於太陽的歌
          </li>
          <li>
            Why do scientists collect evidence? 科學家為什麼要收集證據?
            <br />
            <strong>A. To support their ideas 支持他們的想法 ✅</strong> B. To make up stories 編造故事 C. To draw pictures 畫圖畫 D. To sing songs 唱歌
          </li>
          <li>
            What do scientists use to answer questions? 科學家用什麼來回答問題?
            <br />
            <strong>A. Experiments and observations 實驗和觀察 ✅</strong> B. Guessing 猜測 C. Dreaming 做夢 D. Drawing 畫畫
          </li>
          <li>
            Which of these is NOT part of science inquiry? 以下哪一項不是科學探究的一部分?
            <br />
            <strong>A. Making up stories 編造故事 ✅</strong> B. Observing 觀察 C. Collecting data 收集數據 D. Asking questions 提問
          </li>
          <li>
            What should you do if you want to learn about plants? 如果你想了解植物，你應該做什麼?
            <br />
            <strong>A. Observe them carefully 仔細觀察它們 ✅</strong> B. Ignore them 忽略它們 C. Draw them without looking 不看它們就畫 D. Sing to them 對它們唱歌
          </li>
          <li>
            Which of these is a good scientific question? 以下哪一個是一個好的科學問題?
            <br />
            <strong>A. Why do leaves change color? 為什麼葉子會變色? ✅</strong> B. What is my favorite color? 我最喜歡的顏色是什麼? C. Who is the tallest in class? 班上誰最高? D. What is the best song? 最好的歌是什麼?
          </li>
          <li>
            What is the purpose of science inquiry? 科學探究的目的是什麼?
            <br />
            <strong>A. To understand the world 理解世界 ✅</strong> B. To make up stories 編造故事 C. To draw pictures 畫圖畫 D. To sing songs 唱歌
          </li>
          <li>
            Which of these is evidence? 以下哪一項是證據?
            <br />
            <strong>A. A photo of a plant growing 植物生長的照片 ✅</strong> B. A story about a plant 關於植物的故事 C. A drawing of a plant 植物的圖畫 D. A song about a plant 關於植物的歌曲
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Science inquiry starts with observation. 科學探究始於觀察。 — <strong>True ✅</strong></li>
          <li>Scientists use evidence to support their ideas. 科學家用證據來支持他們的想法。 — <strong>True ✅</strong></li>
          <li>Guessing is the best way to answer scientific questions. 猜測是回答科學問題的最佳方式。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>How can you use observation to learn about animals? 你如何用觀察來了解動物?</li>
          <li>Why is evidence important in science? 為什麼證據在科學中很重要?</li>
          <li>What is one question you can ask about the weather? 你可以問一個關於天氣的什麼問題?</li>
        </ul>
      </section>
    </main>
  );
};

export default ScienceInquiryProcessesPage;