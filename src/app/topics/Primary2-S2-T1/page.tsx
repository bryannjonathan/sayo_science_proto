import React from 'react';
import BackButton from '@/components/BackButton';

const DailyWeatherPhenomenaPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">📚 Primary2-S2-T1 Daily weather phenomena</h1>
      <p className="text-gray-700 mb-6">
        Let's explore the different types of weather we experience every day! In this topic, we'll learn about sunny, cloudy, rainy, and other weather conditions. We'll also discover how weather affects what people and animals do.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>2EB1: Be aware of some different weather conditions (e.g. cloudy, sunny, rainy, snowy, windy, temperature)</li>
          <li>2EB2: Recognise the activities that people and animals engage in under different weather conditions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What is the weather like when the sky is full of clouds? 當天空充滿雲時，天氣是怎樣的?
            <br />
            A. Sunny 晴天 <strong>B. Cloudy 多雲 ✅</strong> C. Rainy 雨天 D. Snowy 下雪
          </li>
          <li>
            Which weather is best for flying a kite? 哪種天氣最適合放風箏?
            <br />
            A. Rainy 雨天 <strong>B. Windy 有風 ✅</strong> C. Snowy 下雪 D. Cloudy 多雲
          </li>
          <li>
            What do people usually wear on a sunny day? 人們在晴天通常穿什麼?
            <br />
            A. Heavy coat 厚外套 <strong>B. Sunglasses and hat 太陽眼鏡和帽子 ✅</strong> C. Raincoat 雨衣 D. Scarf 圍巾
          </li>
          <li>
            Which weather condition makes the ground wet? 哪種天氣會讓地面變濕?
            <br />
            A. Sunny 晴天 <strong>B. Rainy 雨天 ✅</strong> C. Windy 有風 D. Cloudy 多雲
          </li>
          <li>
            What do animals do when it is very cold? 天氣很冷時，動物會做什麼?
            <br />
            A. Swim in the water 在水中游泳 <strong>B. Hide in their homes 躲在家裡 ✅</strong> C. Play outside 在外面玩 D. Eat ice cream 吃冰淇淋
          </li>
          <li>
            Which weather is good for building a snowman? 哪種天氣適合堆雪人?
            <br />
            A. Hot 炎熱 <strong>B. Snowy 下雪 ✅</strong> C. Rainy 雨天 D. Windy 有風
          </li>
          <li>
            What do we use to measure temperature? 我們用什麼來測量溫度?
            <br />
            A. Ruler 尺子 <strong>B. Thermometer 溫度計 ✅</strong> C. Clock 時鐘 D. Scale 秤
          </li>
          <li>
            What do birds do when it rains? 下雨時，鳥會做什麼?
            <br />
            A. Fly in the rain 在雨中飛行 <strong>B. Hide in trees 躲在樹上 ✅</strong> C. Swim in water 在水中游泳 D. Dig holes 挖洞
          </li>
          <li>
            Which weather is best for going to the beach? 哪種天氣最適合去海灘?
            <br />
            A. Snowy 下雪 <strong>B. Sunny 晴天 ✅</strong> C. Rainy 雨天 D. Windy 有風
          </li>
          <li>
            What happens to plants when it is sunny? 晴天時，植物會怎樣?
            <br />
            A. They die 它們會死 <strong>B. They grow 它們會生長 ✅</strong> C. They disappear 它們會消失 D. They turn black 它們會變黑
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>People wear thick coats on sunny days. 人們在晴天穿厚外套。 — <strong>False ❌</strong></li>
          <li>Snowy weather is very cold. 下雪的天氣非常冷。 — <strong>True ✅</strong></li>
          <li>Frogs like to stay in the sun. 青蛙喜歡待在陽光下。 — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>What can you do on a rainy day? 下雨天你可以做什麼?</li>
          <li>How do you feel when it is very hot outside? 當外面很熱時，你感覺如何?</li>
          <li>Name one animal that likes rainy weather. 說出一種喜歡下雨天的動物。</li>
        </ul>
      </section>
    </main>
  );
};

export default DailyWeatherPhenomenaPage;