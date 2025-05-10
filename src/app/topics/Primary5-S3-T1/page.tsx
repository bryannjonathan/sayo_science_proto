import React from 'react';
import BackButton from '@/components/BackButton';

const ResearchAndContributionsOfRenownedScientistsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary5-S3-T1 Research and contributions of renowned scientists</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore the amazing discoveries and contributions of famous scientists from our nation and Hong Kong. 
        You'll learn about their groundbreaking work that changed medicine and technology, and how their achievements inspire us today.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>5SA2: Recognise some of the scientists from the nation and Hong Kong (e.g. Tu Youyou and Charles K. Kao) and their contributions</li>
          <li>5SA3: Admire some significant figures who have contributed to the world's scientific and technological advancements</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Who discovered artemisinin, a treatment for malaria? 誰發現了治療瘧疾的青蒿素?
            <br />
            <strong>A. Tu Youyou 屠呦呦 ✅</strong> B. Charles K. Kao 高錕 C. Albert Einstein 愛因斯坦 D. Isaac Newton 牛頓
          </li>
          <li>
            What is Charles K. Kao famous for? 高錕以什麼聞名?
            <br />
            A. Discovering gravity 發現重力 B. Inventing the telephone 發明電話 <strong>C. Pioneering fiber optics 開創光纖技術 ✅</strong> D. Creating the light bulb 發明燈泡
          </li>
          <li>
            Which scientist won the Nobel Prize in Physiology or Medicine in 2015? 哪位科學家在2015年獲得諾貝爾生理學或醫學獎?
            <br />
            A. Marie Curie 居里夫人 <strong>B. Tu Youyou 屠呦呦 ✅</strong> C. Stephen Hawking 霍金 D. Thomas Edison 愛迪生
          </li>
          <li>
            Where was Charles K. Kao born? 高錕在哪裡出生?
            <br />
            <strong>A. Hong Kong 香港 ✅</strong> B. United States 美國 C. Japan 日本 D. United Kingdom 英國
          </li>
          <li>
            What disease does artemisinin treat? 青蒿素治療什麼疾病?
            <br />
            A. Diabetes 糖尿病 <strong>B. Malaria 瘧疾 ✅</strong> C. Influenza 流感 D. Tuberculosis 肺結核
          </li>
          <li>
            Which field did Charles K. Kao contribute to the most? 高錕對哪個領域貢獻最大?
            <br />
            A. Medicine 醫學 B. Physics 物理學 <strong>C. Telecommunications 電信 ✅</strong> D. Chemistry 化學
          </li>
          <li>
            What prize did Tu Youyou receive for her discovery? 屠呦呦因她的發現獲得了什麼獎項?
            <br />
            <strong>A. Nobel Prize 諾貝爾獎 ✅</strong> B. Pulitzer Prize 普立茲獎 C. Grammy Award 葛萊美獎 D. Olympic Medal 奧運獎牌
          </li>
          <li>
            What material did Charles K. Kao work with to improve communication? 高錕用什麼材料來改善通訊?
            <br />
            A. Plastic 塑膠 <strong>B. Glass fibers 玻璃纖維 ✅</strong> C. Wood 木材 D. Metal 金屬
          </li>
          <li>
            Which traditional Chinese medicine inspired Tu Youyou's discovery? 屠呦呦的發現受到哪種中藥的啟發?
            <br />
            A. Ginseng 人參 <strong>B. Sweet wormwood 青蒿 ✅</strong> C. Goji berries 枸杞 D. Licorice 甘草
          </li>
          <li>
            What is the nickname for Charles K. Kao? 高錕的暱稱是什麼?
            <br />
            A. Father of the Internet 互聯網之父 <strong>B. Father of Fiber Optics 光纖之父 ✅</strong> C. Father of Electricity 電力之父 D. Father of Computers 電腦之父
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Tu Youyou was born in Hong Kong. 屠呦呦在香港出生。 — <strong>False ❌</strong></li>
          <li>Charles K. Kao won the Nobel Prize in Physics. 高錕獲得諾貝爾物理學獎。 — <strong>True ✅</strong></li>
          <li>Artemisinin is used to treat cancer. 青蒿素用於治療癌症。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>How did Tu Youyou's discovery of artemisinin help the world? 屠呦呦發現青蒿素如何幫助世界?</li>
          <li>Why is Charles K. Kao's work important for modern communication? 為什麼高錕的工作對現代通訊很重要?</li>
          <li>Name one scientist from Hong Kong and their contribution. 舉出一位來自香港的科學家及其貢獻。</li>
        </ul>
      </section>
    </main>
  );
};

export default ResearchAndContributionsOfRenownedScientistsPage;