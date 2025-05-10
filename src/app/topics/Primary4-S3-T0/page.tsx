import React from 'react';
import BackButton from '@/components/BackButton';

const ScienceInquiryProcessesPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary4-S3-T0 Science inquiry processes</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Science Inquiry Processes! In this topic, we'll explore how scientists ask questions, 
        conduct experiments, and discover new things about our world. You'll learn about the steps of scientific inquiry, 
        the importance of fair testing, and how scientific knowledge can change with new discoveries.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>4SA1: Recognise that scientific knowledge is derived from systematic observation, testing and analysis, through which imagination and creativity are required</li>
          <li>4SA2: Recognise the concept of fair testing</li>
          <li>4SA3: Be aware that scientific knowledge is subject to change as new evidence becomes available (e.g. the change from "Flat Earth Theory" to "Round Earth Theory")</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first step in the scientific inquiry process? 科學探究過程的第一步是什麼?
            <br />
            <strong>A. Make an observation 進行觀察 ✅</strong> B. Draw a conclusion 得出結論 C. Conduct an experiment 進行實驗 D. Ask a question 提出問題
          </li>
          <li>
            What is a fair test in science? 什麼是科學中的公平測試?
            <br />
            <strong>A. A test where only one variable is changed 只改變一個變量的測試 ✅</strong> B. A test where all variables are changed 改變所有變量的測試 C. A test with no variables 沒有變量的測試 D. A test with no results 沒有結果的測試
          </li>
          <li>
            Why is imagination important in science? 為什麼想像力在科學中很重要?
            <br />
            <strong>A. It helps scientists create new ideas and hypotheses 幫助科學家創造新的想法和假設 ✅</strong> B. It makes experiments more fun 使實驗更有趣 C. It is not important in science 在科學中不重要 D. It helps scientists draw conclusions 幫助科學家得出結論
          </li>
          <li>
            What happens when new evidence is found in science? 當科學中發現新證據時會發生什麼?
            <br />
            <strong>A. Scientific knowledge may change 科學知識可能會改變 ✅</strong> B. Nothing changes 沒有任何變化 C. Scientists stop researching 科學家停止研究 D. The evidence is ignored 證據被忽略
          </li>
          <li>
            Which of the following is an example of scientific knowledge changing? 以下哪個是科學知識改變的例子?
            <br />
            <strong>A. From Flat Earth to Round Earth 從地平說到地圓說 ✅</strong> B. From Round Earth to Flat Earth 從地圓說到地平說 C. From Round Earth to Square Earth 從地圓說到地方說 D. From Flat Earth to Square Earth 從地平說到地方說
          </li>
          <li>
            What is the purpose of testing in science? 科學中測試的目的是什麼?
            <br />
            <strong>A. To gather evidence and support hypotheses 收集證據並支持假設 ✅</strong> B. To make science more difficult 使科學更困難 C. To ignore the results 忽略結果 D. To make science more fun 使科學更有趣
          </li>
          <li>
            What is a hypothesis in science? 科學中的假設是什麼?
            <br />
            <strong>A. An educated guess based on observations 基於觀察的有根據的猜測 ✅</strong> B. A final answer to a question 問題的最終答案 C. A random idea 隨機的想法 D. A type of experiment 一種實驗
          </li>
          <li>
            Why is creativity important in science? 為什麼創造力在科學中很重要?
            <br />
            <strong>A. It helps scientists design experiments and solve problems 幫助科學家設計實驗和解決問題 ✅</strong> B. It makes science more colorful 使科學更有色彩 C. It is not important in science 在科學中不重要 D. It helps scientists memorize facts 幫助科學家記憶事實
          </li>
          <li>
            What is the role of analysis in science? 分析在科學中的作用是什麼?
            <br />
            <strong>A. To interpret data and draw conclusions 解釋數據並得出結論 ✅</strong> B. To ignore data 忽略數據 C. To make data more complicated 使數據更複雜 D. To create more questions 創造更多問題
          </li>
          <li>
            What is the final step in the scientific inquiry process? 科學探究過程的最後一步是什麼?
            <br />
            <strong>A. Communicate the results 交流結果 ✅</strong> B. Ask a question 提出問題 C. Make an observation 進行觀察 D. Conduct an experiment 進行實驗
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Scientific knowledge never changes. 科學知識永遠不會改變。 — <strong>False ❌</strong></li>
          <li>A fair test involves changing multiple variables at the same time. 公平測試涉及同時改變多個變量。 — <strong>False ❌</strong></li>
          <li>Observation is the first step in the scientific inquiry process. 觀察是科學探究過程的第一步。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give an example of how scientific knowledge has changed over time. 舉一個科學知識隨時間變化的例子。</li>
          <li>Why is it important to change only one variable in a fair test? 為什麼在公平測試中只改變一個變量很重要?</li>
          <li>How can imagination help scientists in their work? 想像力如何幫助科學家的工作?</li>
        </ul>
      </section>
    </main>
  );
};

export default ScienceInquiryProcessesPage;