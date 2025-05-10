import React from 'react';
import BackButton from '@/components/BackButton';

const PropertiesOfElectricityAndRelatedPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S1-T3 Properties of electricity and related phenomena</h1>
      <p className="text-gray-700 mb-6">
        Electricity is all around us and powers many devices we use every day. In this topic, we'll explore how electric current can produce heat and magnetic effects, and discover how these properties are used in common appliances like heaters, hairdryers, and electromagnetic cranes.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6MB6: Be aware of the heating effect and magnetic effect of electric current</li>
          <li>6MB7: Give examples of daily applications of the heating effect (e.g. electric heaters, hairdryers, toasters) and magnetic effect (e.g. electromagnetic cranes, electromagnetic locks) of electric current</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following devices uses the heating effect of electric current? 以下哪種設備利用了電流的熱效應?
            <br />
            <strong>A. Electric heater 電暖器 ✅</strong> B. Electromagnetic crane 電磁起重機 C. Electric fan 電風扇 D. LED lamp LED燈
          </li>
          <li>
            What is the main effect of electric current used in an electromagnetic crane? 電磁起重機主要利用了電流的什麼效應?
            <br />
            A. Heating effect 熱效應 <strong>B. Magnetic effect 磁效應 ✅</strong> C. Lighting effect 發光效應 D. Chemical effect 化學效應
          </li>
          <li>
            Which of the following is NOT an example of the heating effect of electric current? 以下哪項不是電流熱效應的例子?
            <br />
            A. Hairdryer 吹風機 B. Toaster 烤麵包機 C. Electric kettle 電熱水壺 <strong>D. Electric doorbell 電門鈴 ✅</strong>
          </li>
          <li>
            What happens when electric current passes through a wire? 當電流通過電線時會發生什麼?
            <br />
            A. It produces heat and light 它會產生熱和光 B. It produces a magnetic field 它會產生磁場 C. It can cause the wire to melt 它可能導致電線熔化 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Which device uses both the heating and magnetic effects of electric current? 哪種設備同時利用了電流的熱效應和磁效應?
            <br />
            A. Electric iron 電熨斗 <strong>B. Electric motor 電動機 ✅</strong> C. Incandescent bulb 白熾燈泡 D. Electromagnet 電磁鐵
          </li>
          <li>
            Why does a hairdryer produce hot air? 為什麼吹風機會產生熱風?
            <br />
            A. Due to the magnetic effect of electric current 由於電流的磁效應 <strong>B. Due to the heating effect of electric current 由於電流的熱效應 ✅</strong> C. Due to the chemical effect of electric current 由於電流的化學效應 D. Due to the lighting effect of electric current 由於電流的發光效應
          </li>
          <li>
            What is the purpose of the electromagnet in an electromagnetic lock? 電磁鎖中的電磁鐵有什麼作用?
            <br />
            A. To generate heat 產生熱量 B. To produce light 產生光 <strong>C. To create a strong magnetic force 產生強大的磁力 ✅</strong> D. To make a sound 發出聲音
          </li>
          <li>
            Which material is commonly used as a heating element in electric heaters? 電暖器中常用的加熱元件是什麼材料?
            <br />
            A. Copper 銅 B. Aluminum 鋁 <strong>C. Nichrome 鎳鉻合金 ✅</strong> D. Silver 銀
          </li>
          <li>
            What safety feature is important for devices using the heating effect of electricity? 對於利用電熱效應的設備，什麼安全功能很重要?
            <br />
            <strong>A. Thermostat 恆溫器 ✅</strong> B. Electromagnet 電磁鐵 C. Transformer 變壓器 D. Capacitor 電容器
          </li>
          <li>
            How can the strength of an electromagnet be increased? 如何增強電磁鐵的強度?
            <br />
            A. Increase the number of coils 增加線圈數量 B. Increase the current 增加電流 C. Use an iron core 使用鐵芯 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Electric current can produce both heat and magnetic effects. 電流可以同時產生熱效應和磁效應。 — <strong>True ✅</strong></li>
          <li>An electric fan uses the magnetic effect of electric current to operate. 電風扇利用電流的磁效應來運作。 — <strong>False ❌</strong></li>
          <li>Electromagnetic locks are commonly used in secure buildings. 電磁鎖常用於安全建築中。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Give two examples of devices that use the heating effect of electric current and explain how they work. 舉出兩個利用電流熱效應的設備例子，並解釋它們的工作原理。</li>
          <li>Explain why electromagnetic cranes are useful in scrapyards. 解釋為什麼電磁起重機在廢料場很有用。</li>
          <li>Describe one safety precaution we should take when using electrical appliances that produce heat. 描述我們在使用會產生熱的電器時應採取的一項安全預防措施。</li>
        </ul>
      </section>
    </main>
  );
};

export default PropertiesOfElectricityAndRelatedPhenomenaPage;