import React from 'react';
import BackButton from '@/components/BackButton';

const ScienceInquiryProcessesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S3-T0 Science inquiry processes</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Science Inquiry Processes! In this topic, we'll explore how scientists ask questions and find answers. 
        You'll learn about the steps scientists follow and different ways they investigate the world around us. 
        Get ready to think like a scientist!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3SA1: Be aware of science inquiry processes and steps</li>
          <li>3SA2: Be aware of the different types of science inquiry (e.g. classifying, pattern seeking, modeling)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first step in a science inquiry process? 科學探究過程的第一步是什麼？
            <br />
            <strong>A. Asking a question 提出問題 ✅</strong> B. Making a prediction 做出預測 C. Conducting an experiment 進行實驗 D. Drawing conclusions 得出結論
          </li>
          <li>
            Which of the following is a type of science inquiry? 以下哪一項是科學探究的類型？
            <br />
            <strong>A. Classifying 分類 ✅</strong> B. Singing 唱歌 C. Dancing 跳舞 D. Painting 繪畫
          </li>
          <li>
            What do scientists do after they observe something? 科學家在觀察到某事物後會做什麼？
            <br />
            <strong>A. Ask a question 提出問題 ✅</strong> B. Ignore it 忽略它 C. Forget about it 忘記它 D. Laugh 大笑
          </li>
          <li>
            Which step comes after making a prediction in the science inquiry process? 在科學探究過程中，做出預測後是哪一步？
            <br />
            <strong>A. Conducting an experiment 進行實驗 ✅</strong> B. Asking a question 提出問題 C. Drawing conclusions 得出結論 D. Sharing results 分享結果
          </li>
          <li>
            What is the purpose of classifying in science? 科學中分類的目的是什麼？
            <br />
            <strong>A. To organize things into groups 將事物分組 ✅</strong> B. To make things messy 使事物混亂 C. To hide things 隱藏事物 D. To break things 破壞事物
          </li>
          <li>
            Which of the following is an example of pattern seeking? 以下哪一項是尋找模式的例子？
            <br />
            <strong>A. Noticing that plants grow taller with more sunlight 注意到植物在有更多陽光時長得更高 ✅</strong> B. Counting the number of leaves on a plant 計算植物上的葉子數量 C. Drawing a picture of a plant 畫一幅植物的圖畫 D. Watering a plant 給植物澆水
          </li>
          <li>
            What is modeling in science? 科學中的建模是什麼？
            <br />
            <strong>A. Creating a representation of something 創建某事物的表示 ✅</strong> B. Building a toy 建造一個玩具 C. Drawing a random picture 畫一幅隨機的圖畫 D. Writing a story 寫一個故事
          </li>
          <li>
            Why is it important to share results in science? 為什麼在科學中分享結果很重要？
            <br />
            <strong>A. So others can learn from it 以便其他人可以從中學習 ✅</strong> B. To keep it a secret 保密 C. To make it confusing 使其混淆 D. To forget about it 忘記它
          </li>
          <li>
            What is the last step in the science inquiry process? 科學探究過程的最後一步是什麼？
            <br />
            <strong>A. Drawing conclusions 得出結論 ✅</strong> B. Asking a question 提出問題 C. Making a prediction 做出預測 D. Observing 觀察
          </li>
          <li>
            Which of the following is NOT a science inquiry process? 以下哪一項不是科學探究過程？
            <br />
            <strong>A. Guessing randomly 隨機猜測 ✅</strong> B. Classifying 分類 C. Pattern seeking 尋找模式 D. Modeling 建模
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Asking a question is the first step in the science inquiry process. 提出問題是科學探究過程的第一步。 — <strong>True ✅</strong></li>
          <li>Singing is a type of science inquiry. 唱歌是科學探究的一種類型。 — <strong>False ❌</strong></li>
          <li>Scientists always share their results with others. 科學家總是與他人分享他們的結果。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe one step in the science inquiry process. 描述科學探究過程中的一個步驟。</li>
          <li>Give an example of classifying in science. 舉一個科學中分類的例子。</li>
          <li>Why is it important to follow steps in a science inquiry? 為什麼在科學探究中遵循步驟很重要？</li>
        </ul>
      </section>
    </main>
  );
};

export default ScienceInquiryProcessesPage;