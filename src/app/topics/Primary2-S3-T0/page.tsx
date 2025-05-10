import React from 'react';
import BackButton from '@/components/BackButton';

const ResearchAndContributionsOfRenownedScientistsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S3-T0 Research and contributions of renowned scientists</h1>
      
      <p className="text-gray-700 mb-6">
        In this topic, we will learn about famous scientists from history and their amazing discoveries and inventions. 
        We'll explore how their work has helped shape our world today and why we should appreciate their contributions to science and technology.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2SA1: Be aware of some renowned scientists in history (e.g. Zhang Heng, Thomas Edison) and their achievements</li>
          <li>2SA4: Admire some significant figures who have contributed to the world's scientific and technological advancements</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Who invented the seismoscope to detect earthquakes? 誰發明了地動儀來檢測地震?
            <br />
            A. Thomas Edison 湯瑪斯·愛迪生 <strong>B. Zhang Heng 張衡 ✅</strong> C. Isaac Newton 艾薩克·牛頓 D. Albert Einstein 阿爾伯特·愛因斯坦
          </li>
          <li>
            Which scientist is famous for inventing the light bulb? 哪位科學家以發明燈泡而聞名?
            <br />
            A. Marie Curie 瑪麗·居禮 <strong>B. Thomas Edison 湯瑪斯·愛迪生 ✅</strong> C. Galileo Galilei 伽利略·伽利萊 D. Charles Darwin 查爾斯·達爾文
          </li>
          <li>
            What did Zhang Heng contribute to science? 張衡對科學有什麼貢獻?
            <br />
            A. Invented the telephone 發明了電話 B. Discovered gravity 發現了重力 <strong>C. Invented the seismoscope 發明了地動儀 ✅</strong> D. Discovered electricity 發現了電
          </li>
          <li>
            Which scientist discovered the law of gravity? 哪位科學家發現了萬有引力定律?
            <br />
            A. Albert Einstein 阿爾伯特·愛因斯坦 <strong>B. Isaac Newton 艾薩克·牛頓 ✅</strong> C. Thomas Edison 湯瑪斯·愛迪生 D. Marie Curie 瑪麗·居禮
          </li>
          <li>
            What did Thomas Edison invent? 湯瑪斯·愛迪生發明了什麼?
            <br />
            A. The telephone 電話 <strong>B. The light bulb 燈泡 ✅</strong> C. The computer 電腦 D. The airplane 飛機
          </li>
          <li>
            Who is known as the 'Father of Modern Science'? 誰被稱為「現代科學之父」?
            <br />
            <strong>A. Galileo Galilei 伽利略·伽利萊 ✅</strong> B. Albert Einstein 阿爾伯特·愛因斯坦 C. Marie Curie 瑪麗·居禮 D. Charles Darwin 查爾斯·達爾文
          </li>
          <li>
            Which scientist discovered radioactivity? 哪位科學家發現了放射性?
            <br />
            A. Isaac Newton 艾薩克·牛頓 <strong>B. Marie Curie 瑪麗·居禮 ✅</strong> C. Thomas Edison 湯瑪斯·愛迪生 D. Zhang Heng 張衡
          </li>
          <li>
            What is Marie Curie famous for? 瑪麗·居禮以什麼聞名?
            <br />
            A. Inventing the light bulb 發明燈泡 <strong>B. Discovering radioactivity 發現放射性 ✅</strong> C. Inventing the seismoscope 發明地動儀 D. Discovering gravity 發現重力
          </li>
          <li>
            Who invented the telephone? 誰發明了電話?
            <br />
            <strong>A. Alexander Graham Bell 亞歷山大·格拉漢姆·貝爾 ✅</strong> B. Thomas Edison 湯瑪斯·愛迪生 C. Albert Einstein 阿爾伯特·愛因斯坦 D. Marie Curie 瑪麗·居禮
          </li>
          <li>
            Which scientist is known for the theory of relativity? 哪位科學家以相對論聞名?
            <br />
            A. Isaac Newton 艾薩克·牛頓 <strong>B. Albert Einstein 阿爾伯特·愛因斯坦 ✅</strong> C. Galileo Galilei 伽利略·伽利萊 D. Charles Darwin 查爾斯·達爾文
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Zhang Heng invented the seismoscope. 張衡發明了地動儀。 — <strong>True ✅</strong></li>
          <li>Marie Curie discovered electricity. 瑪麗·居禮發現了電。 — <strong>False ❌</strong></li>
          <li>Thomas Edison is famous for inventing the light bulb. 湯瑪斯·愛迪生以發明燈泡聞名。 — <strong>True ✅</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one scientist and their contribution to science. 舉出一位科學家及其對科學的貢獻。</li>
          <li>Why is it important to learn about famous scientists? 為什麼學習著名科學家很重要?</li>
          <li>How did Thomas Edison's invention of the light bulb help people? 湯瑪斯·愛迪生發明的燈泡如何幫助人們?</li>
        </ul>
      </section>
    </main>
  );
};

export default ResearchAndContributionsOfRenownedScientistsPage;