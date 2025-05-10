import React from 'react';
import BackButton from '@/components/BackButton';

const EngineeringDesignCycleAndApplicationsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary1-S3-T1 Engineering, design cycle and applications</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Engineering, Design Cycle and Applications! Today we'll learn about how humans design objects to make our lives better. We'll explore the difference between natural objects and man-made objects, and discover how good design helps solve problems in our daily lives.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>1SC1: Be aware that some everyday items are designed and manufactured by humans</li>
          <li>1SC2: Give examples of natural objects and man-made objects</li>
          <li>1SC3: Be aware that good design can meet human needs and make life more convenient</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of these is a man-made object? 以下哪一個是人造物品?
            <br />
            A. Rock 石頭 B. Tree 樹 <strong>C. Toy car 玩具車 ✅</strong> D. Cloud 雲
          </li>
          <li>
            Which of these is a natural object? 以下哪一個是自然物品?
            <br />
            A. Pencil 鉛筆 B. Book 書 <strong>C. Flower 花 ✅</strong> D. Chair 椅子
          </li>
          <li>
            What is the purpose of good design? 良好設計的目的是什麼?
            <br />
            A. To make life harder 使生活更困難 <strong>B. To meet human needs 滿足人類需求 ✅</strong> C. To create problems 製造問題 D. To waste materials 浪費材料
          </li>
          <li>
            Which of these is designed by humans? 以下哪一個是由人類設計的?
            <br />
            A. Mountain 山 B. River 河流 <strong>C. Bicycle 自行車 ✅</strong> D. Sun 太陽
          </li>
          <li>
            What makes a good design? 什麼是好的設計?
            <br />
            A. It is colorful 它是彩色的 B. It is big 它是大的 <strong>C. It is useful 它是有用的 ✅</strong> D. It is heavy 它是重的
          </li>
          <li>
            Which of these is NOT man-made? 以下哪一個不是人造的?
            <br />
            A. House 房子 <strong>B. Bird 鳥 ✅</strong> C. Table 桌子 D. Computer 電腦
          </li>
          <li>
            Why do humans design objects? 人類為什麼要設計物品?
            <br />
            <strong>A. To make life more convenient 使生活更方便 ✅</strong> B. To make things harder 使事情更困難 C. To create waste 製造垃圾 D. To ignore needs 忽略需求
          </li>
          <li>
            Which of these is a good example of design? 以下哪一個是良好設計的例子?
            <br />
            A. A broken chair 壞掉的椅子 <strong>B. A comfortable chair 舒適的椅子 ✅</strong> C. A heavy rock 沉重的石頭 D. A dry leaf 乾枯的葉子
          </li>
          <li>
            What can good design help with? 良好的設計可以幫助什麼?
            <br />
            <strong>A. Making tasks easier 使任務更容易 ✅</strong> B. Creating problems 製造問題 C. Wasting time 浪費時間 D. Ignoring needs 忽略需求
          </li>
          <li>
            Which of these is designed to hold water? 以下哪一個是設計來裝水的?
            <br />
            A. Spoon 勺子 <strong>B. Cup 杯子 ✅</strong> C. Fork 叉子 D. Plate 盤子
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All objects are man-made. 所有物品都是人造的。 — <strong>False ❌</strong></li>
          <li>Good design can make life easier. 良好的設計可以使生活更輕鬆。 — <strong>True ✅</strong></li>
          <li>A tree is a man-made object. 樹是人造物品。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one man-made object you use every day. 說出一個你每天使用的人造物品。</li>
          <li>Why is a chair a good design? 為什麼椅子是一個好的設計?</li>
          <li>Give an example of a natural object. 舉出一個自然物品的例子。</li>
        </ul>
      </section>
    </main>
  );
};

export default EngineeringDesignCycleAndApplicationsPage;