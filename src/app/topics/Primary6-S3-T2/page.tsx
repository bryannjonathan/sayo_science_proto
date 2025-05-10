import React from 'react';
import BackButton from '@/components/BackButton';

const EngineeringDesignCycleAndApplicationsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S3-T2 Engineering, design cycle and applications</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Engineering, Design Cycle and Applications! In this topic, we'll explore how engineers use the design cycle to create solutions for real-world problems. You'll learn about each step of the process, from identifying needs to testing and improving designs. Get ready to think like an engineer as we discover how to apply these concepts to create models and products!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6SC1: Apply design cycle to design engineering models or products: Identify needs and the problem, Collect information relevant to the problem, and point out the shortcomings of the existing practices, Propose more than one design solution that meet the constraints, Compare various considerations, take into account practicality and aesthetics, to determine the feasibility of the design solutions, Give suggestions to others' design solutions, Illustrate design ideas through comprehensive use of text, icons, images, diagrams, etc., Select and use appropriate tools and materials to make the engineering model or product, Test and improve the engineering model or product, Communicate the solutions to the problem, review and evaluate the effectiveness of the solutions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the first step in the design cycle? 設計循環的第一步是什麼？
            <br />
            <strong>A. Identify needs and the problem 確定需求和問題 ✅</strong> B. Collect information 收集信息 C. Propose design solutions 提出設計方案 D. Test the product 測試產品
          </li>
          <li>
            Why is it important to collect information relevant to the problem? 為什麼收集與問題相關的信息很重要？
            <br />
            A. To make the problem more complicated 使問題更複雜 <strong>B. To understand the problem better 更好地理解問題 ✅</strong> C. To skip the design cycle 跳過設計循環 D. To avoid testing the product 避免測試產品
          </li>
          <li>
            What should you do after proposing design solutions? 提出設計方案後應該做什麼？
            <br />
            A. Ignore the solutions 忽略方案 <strong>B. Compare various considerations 比較各種考慮因素 ✅</strong> C. Stop the design process 停止設計過程 D. Skip testing 跳過測試
          </li>
          <li>
            Which of the following is NOT a part of the design cycle? 以下哪項不是設計循環的一部分？
            <br />
            A. Identifying needs 確定需求 B. Testing the product 測試產品 <strong>C. Ignoring feedback 忽略反饋 ✅</strong> D. Communicating solutions 溝通解決方案
          </li>
          <li>
            What is the purpose of testing the engineering model? 測試工程模型的目的是什麼？
            <br />
            <strong>A. To find and fix problems 發現並解決問題 ✅</strong> B. To make the model look pretty 讓模型看起來漂亮 C. To skip the design cycle 跳過設計循環 D. To ignore feedback 忽略反饋
          </li>
          <li>
            Which tool is most appropriate for creating a detailed diagram of a design? 哪種工具最適合用於創建設計的詳細圖表？
            <br />
            A. A hammer 錘子 <strong>B. A ruler and pencil 尺和鉛筆 ✅</strong> C. A spoon 勺子 D. A pair of scissors 剪刀
          </li>
          <li>
            Why is it important to consider practicality in a design? 為什麼在設計中考慮實用性很重要？
            <br />
            A. To make the design unusable 使設計無法使用 <strong>B. To ensure the design works in real life 確保設計在現實生活中可行 ✅</strong> C. To ignore user needs 忽略用戶需求 D. To make the design more expensive 使設計更昂貴
          </li>
          <li>
            What should you do after testing the engineering model? 測試工程模型後應該做什麼？
            <br />
            A. Ignore the results 忽略結果 <strong>B. Improve the model 改進模型 ✅</strong> C. Stop the design process 停止設計過程 D. Throw away the model 扔掉模型
          </li>
          <li>
            Which of the following is a way to illustrate design ideas? 以下哪種方法是說明設計想法的方式？
            <br />
            A. Using only text 僅使用文字 <strong>B. Using text, icons, images, and diagrams 使用文字、圖標、圖像和圖表 ✅</strong> C. Ignoring visuals 忽略視覺元素 D. Using only colors 僅使用顏色
          </li>
          <li>
            What is the final step in the design cycle? 設計循環的最後一步是什麼？
            <br />
            A. Identify needs 確定需求 <strong>B. Communicate the solutions 溝通解決方案 ✅</strong> C. Skip testing 跳過測試 D. Ignore feedback 忽略反饋
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The design cycle is a linear process with no repeating steps. 設計循環是一個沒有重複步驟的線性過程。 — <strong>False ❌</strong></li>
          <li>Collecting information helps in understanding the problem better. 收集信息有助於更好地理解問題。 — <strong>True ✅</strong></li>
          <li>Testing the product is not necessary if the design looks good. 如果設計看起來很好，就不需要測試產品。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Describe one problem you might encounter when designing a bridge and how you would solve it. 描述你在設計橋樑時可能遇到的一個問題以及你會如何解決它。</li>
          <li>Explain why it is important to consider aesthetics in a design. 解釋為什麼在設計中考慮美學很重要。</li>
          <li>How would you test a model of a new toy to ensure it is safe for children? 你會如何測試一個新玩具的模型以確保它對兒童是安全的？</li>
        </ul>
      </section>
    </main>
  );
};

export default EngineeringDesignCycleAndApplicationsPage;