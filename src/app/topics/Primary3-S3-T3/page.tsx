import React from 'react';
import BackButton from '@/components/BackButton';

const InnovationAndTechnologyDevelopmentPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary3-S3-T3 Innovation and technology development</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our lesson on Innovation and Technology Development! In this topic, we'll explore how new technologies 
        are changing our daily lives. We'll learn about smart homes, electronic payments, new energy vehicles, and 
        autonomous driving. These innovations make our lives easier, safer, and more fun!
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>3SB3: Give some examples of innovative technologies applied in everyday life (e.g. smart homes, electronic payments, new energy vehicles, autonomous driving)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is an example of innovative technology in smart homes? 以下哪項是智能家居中的創新技術例子?
            <br />
            <strong>A. Voice-controlled lights 聲控燈光 ✅</strong> B. Manual door locks 手動門鎖 C. Paper maps 紙質地圖 D. Handwritten letters 手寫信件
          </li>
          <li>
            What technology allows you to pay without using cash? 哪種技術可以讓你不用現金支付?
            <br />
            <strong>A. Electronic payments 電子支付 ✅</strong> B. Barter trade 以物易物 C. Gold coins 金幣 D. Paper receipts 紙質收據
          </li>
          <li>
            Which vehicle uses electricity instead of petrol? 哪種車輛使用電力而不是汽油?
            <br />
            <strong>A. New energy vehicle 新能源汽車 ✅</strong> B. Diesel truck 柴油卡車 C. Steam engine 蒸汽機 D. Horse carriage 馬車
          </li>
          <li>
            What is the main feature of autonomous driving? 自動駕駛的主要特點是什麼?
            <br />
            <strong>A. The car drives itself 汽車自己駕駛 ✅</strong> B. The car has no wheels 汽車沒有輪子 C. The car flies 汽車會飛 D. The car is made of wood 汽車是木製的
          </li>
          <li>
            Which device can help you control home appliances remotely? 哪種設備可以讓你遠程控制家電?
            <br />
            <strong>A. Smartphone 智能手機 ✅</strong> B. Typewriter 打字機 C. Abacus 算盤 D. Gramophone 留聲機
          </li>
          <li>
            What is a benefit of using electronic payments? 使用電子支付的一個好處是什麼?
            <br />
            <strong>A. Convenient and fast 方便快捷 ✅</strong> B. Heavy to carry 攜帶沉重 C. Easy to lose 容易丟失 D. Only works at night 只在晚上有效
          </li>
          <li>
            Which technology helps reduce air pollution? 哪種技術有助於減少空氣污染?
            <br />
            <strong>A. New energy vehicles 新能源汽車 ✅</strong> B. Coal-powered trains 燃煤火車 C. Gasoline generators 汽油發電機 D. Diesel buses 柴油巴士
          </li>
          <li>
            What can a smart home system do? 智能家居系統可以做什麼?
            <br />
            <strong>A. Adjust temperature automatically 自動調節溫度 ✅</strong> B. Cook meals 煮飯 C. Wash clothes 洗衣服 D. Grow plants 種植植物
          </li>
          <li>
            Which of these is an example of innovative transportation? 以下哪項是創新交通的例子?
            <br />
            <strong>A. High-speed rail 高速鐵路 ✅</strong> B. Bicycle 自行車 C. Horse 馬 D. Sailboat 帆船
          </li>
          <li>
            What technology allows cars to detect obstacles? 哪種技術可以讓汽車檢測障礙物?
            <br />
            <strong>A. Sensors 傳感器 ✅</strong> B. Mirrors 鏡子 C. Binoculars 雙筒望遠鏡 D. Flashlights 手電筒
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Smart homes can be controlled using a smartphone. 智能家居可以使用智能手機控制。 — <strong>True ✅</strong></li>
          <li>Autonomous driving means the car needs a driver to steer. 自動駕駛意味著汽車需要司機來駕駛。 — <strong>False ❌</strong></li>
          <li>Electronic payments require physical cash. 電子支付需要實體現金。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one innovative technology you use at home and explain how it helps you. 列舉一項你在家中使用的創新技術，並解釋它如何幫助你。</li>
          <li>How do electronic payments make shopping easier? 電子支付如何使購物更方便?</li>
          <li>Why are new energy vehicles better for the environment? 為什麼新能源汽車對環境更好?</li>
        </ul>
      </section>
    </main>
  );
};

export default InnovationAndTechnologyDevelopmentPage;