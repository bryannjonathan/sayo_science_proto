import React from 'react';
import BackButton from '@/components/BackButton';

export default function EarthsCharacteristicsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">🔬 Primary1-S2-T0 Earth’s characteristics</h1>
      <p className="text-gray-700 mb-6">
        The Earth is our shared home, full of oceans, land, and a protective atmosphere. In this lesson, students will explore the basic features of our planet and understand the importance of taking care of the Earth for all living beings.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>Be aware that the surface of the Earth is covered by oceans and land, and that oceans cover more areas than land</li>
          <li>Be aware that the surface of the Earth is surrounded by the atmosphere (gases)</li>
          <li>Be aware that the Earth is the shared home for humans, animals and plants</li>
          <li>Understand the importance of caring for the Earth</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🧪 Interactive Activities</h2>
        <ul className="list-disc list-inside">
          <li>Model the Earth's surface using playdough to differentiate oceans and land</li>
          <li>Create a poster on ways to care for the Earth</li>
          <li>Watch a short video showing views of Earth from space and discuss observations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">✅ Learning Outcomes</h2>
        <p>
          Students will be able to identify the main components of Earth’s surface and explain why it is important to care for our planet.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🌱 Values & Attitudes</h2>
        <ul className="list-disc list-inside">
          <li>Show care and responsibility for the environment</li>
          <li>Appreciate Earth as a shared home for all living things</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔍 STSE Connections</h2>
        <ul className="list-disc list-inside">
          <li>Discuss the role of satellites in monitoring Earth’s surface and atmosphere</li>
          <li>Explore how pollution affects land, water, and air</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            What covers more of the Earth's surface: oceans or land?<br />
            <strong>A. Oceans ✅</strong> B. Land C. They are the same D. I don't know
          </li>
          <li>
            What surrounds the Earth's surface?<br />
            A. Water <strong>B. Atmosphere (gases) ✅</strong> C. Rocks D. Fire
          </li>
          <li>
            Who shares the Earth as their home?<br />
            A. Only humans B. Only animals <strong>C. Humans, animals, and plants ✅</strong> D. Only plants
          </li>
          <li>
            Why is it important to care for the Earth?<br />
            <strong>A. Because it is our home ✅</strong> B. Because it is pretty C. Because it is big D. Because it is far away
          </li>
          <li>
            What is the Earth's surface mostly covered by?<br />
            A. Sand <strong>B. Water ✅</strong> C. Trees D. Mountains
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>The Earth's surface is mostly covered by land — <strong>False ❌</strong></li>
          <li>The atmosphere is a layer of gases around the Earth — <strong>True ✅</strong></li>
          <li>Only humans live on Earth — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Name one way you can help take care of the Earth.</li>
          <li>What are two things that cover the Earth's surface?</li>
          <li>Why is the Earth important to us?</li>
        </ul>
      </section>
    </main>
  );
}
