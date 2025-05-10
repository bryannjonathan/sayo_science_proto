import React from 'react';
import BackButton from '@/components/BackButton';

const ImpactOfHumanBehaviorOnTheNaturalEnvironmentPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary6-S0-T2 Impact of human behavior on the natural environment</h1>
      <p className="text-gray-700 mb-6">
        In this topic, we will explore how human activities affect the natural environment and the species that live in it. We'll learn about endangered species, why they are at risk, and what we can do to protect them. Understanding these concepts helps us become responsible citizens who care for our planet.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>6LD1: Recognise some endangered species</li>
          <li>6LD2: Explain why endangered species are on the verge of extinction</li>
          <li>6LD3: Recognise some methods of protecting endangered species</li>
          <li>6LD4: Respect and care for life, and show concern for endangered species</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Question: Which of the following is an endangered species? 以下哪一種是瀕危物種?
            <br />
            <strong>A. Panda 熊貓 ✅</strong> B. Dog 狗 C. Cat 貓 D. Cow 牛
          </li>
          <li>
            Question: What is the main reason for the extinction of many species? 許多物種滅絕的主要原因是什麼?
            <br />
            A. Natural disasters 自然災害 B. Human activities 人類活動 C. Climate change 氣候變化 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Question: Which human activity contributes most to habitat destruction? 哪種人類活動對棲息地破壞的影響最大?
            <br />
            <strong>A. Deforestation 砍伐森林 ✅</strong> B. Fishing 捕魚 C. Cycling 騎自行車 D. Reading 閱讀
          </li>
          <li>
            Question: How can we protect endangered species? 我們如何保護瀕危物種?
            <br />
            <strong>A. By creating protected areas 建立保護區 ✅</strong> B. By hunting them 獵殺牠們 C. By ignoring them 忽略牠們 D. By keeping them as pets 將牠們當作寵物
          </li>
          <li>
            Question: Which of the following is a method to conserve endangered species? 以下哪一種是保護瀕危物種的方法?
            <br />
            A. Poaching 偷獵 <strong>B. Habitat restoration 棲息地恢復 ✅</strong> C. Polluting rivers 污染河流 D. Cutting down trees 砍伐樹木
          </li>
          <li>
            Question: Why are pandas endangered? 為什麼熊貓瀕臨滅絕?
            <br />
            <strong>A. Loss of habitat 棲息地喪失 ✅</strong> B. Too many predators 太多捕食者 C. They don't reproduce 牠們不繁殖 D. They are too big 牠們太大
          </li>
          <li>
            Question: What can students do to help protect endangered species? 學生可以做什麼來幫助保護瀕危物種?
            <br />
            A. Learn about them 學習有關牠們的知識 B. Spread awareness 提高意識 C. Support conservation efforts 支持保護工作 <strong>D. All of the above 以上皆是 ✅</strong>
          </li>
          <li>
            Question: Which organization helps protect endangered species? 哪個組織幫助保護瀕危物種?
            <br />
            <strong>A. WWF 世界自然基金會 ✅</strong> B. NASA 美國太空總署 C. UNICEF 聯合國兒童基金會 D. Red Cross 紅十字會
          </li>
          <li>
            Question: What is the biggest threat to marine species? 對海洋物種最大的威脅是什麼?
            <br />
            <strong>A. Plastic pollution 塑料污染 ✅</strong> B. Too much sunlight 太多陽光 C. Lack of water 缺水 D. Too many fish 太多魚
          </li>
          <li>
            Question: Why is biodiversity important? 為什麼生物多樣性很重要?
            <br />
            <strong>A. It keeps ecosystems balanced 它保持生態系統平衡 ✅</strong> B. It makes the planet look pretty 它讓地球看起來漂亮 C. It is not important 它不重要 D. It helps humans only 它只幫助人類
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All endangered species are large animals. 所有瀕危物種都是大型動物。 — <strong>False ❌</strong></li>
          <li>Planting trees can help protect endangered species. 植樹可以幫助保護瀕危物種。 — <strong>True ✅</strong></li>
          <li>Pollution has no effect on endangered species. 污染對瀕危物種沒有影響。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name three endangered species and explain why they are endangered. 列出三種瀕危物種並解釋牠們為什麼瀕危。</li>
          <li>What are some ways humans can reduce their impact on the environment? 人類可以通過哪些方式減少對環境的影響?</li>
          <li>Why should we care about endangered species? 為什麼我們應該關心瀕危物種?</li>
        </ul>
      </section>
    </main>
  );
};

export default ImpactOfHumanBehaviorOnTheNaturalEnvironmentPage;