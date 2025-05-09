import React from 'react';

export default function MoleculesOfLifePage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🔬 I-0 Molecules of Life</h1>
      <p className="text-gray-700 mb-6">
        Cells and biomolecules are fundamental units of life. This chapter introduces key biological molecules such as water, ions, carbohydrates, lipids, proteins, and nucleic acids — and how they contribute to the structure and function of organisms.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>
        <ul className="list-disc list-inside">
          <li>Understand the roles of water and inorganic ions like nitrogen, magnesium, calcium, and iron</li>
          <li>Describe the structure and functions of carbohydrates, lipids, proteins, and nucleic acids</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🧪 Interactive Activities</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Lab Test Simulation:</strong> Simulate or perform Benedict’s, iodine, grease spot, and Biuret tests using virtual lab tools or safe classroom kits.
          </li>
          <li>
            <strong>Water Debate:</strong> Students debate whether life could exist without water and compare isotonic vs. mineral water.
          </li>
          <li>
            <strong>Ion Match:</strong> Match each ion (Ca²⁺, Fe²⁺, Mg²⁺) with its biological role through flashcards or drag-and-drop UI.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">✅ Learning Outcomes</h2>
        <p>
          Students will be able to relate the biological significance of water, ions, and biomolecules to essential life functions and biochemical processes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🌱 Values & Attitudes</h2>
        <ul className="list-disc list-inside">
          <li>Show appreciation for the complexity of life and responsibility for the environment</li>
          <li>Adopt a healthy lifestyle and consider ethical implications of biotechnology</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔍 STSE Connections</h2>
        <ul className="list-disc list-inside">
          <li>Understand the use of molecular biology in health, food tech, and pharmaceuticals</li>
          <li>Appreciate the role of technologies like microscopy and DNA sequencing</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>

        <h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Which of the following is NOT a function of water in living organisms?<br />
            A. Solvent B. Structural support <strong>C. Stores genetic info ✅</strong> D. Temperature regulation
          </li>
          <li>
            Which inorganic ion is key in chlorophyll?<br />
            A. Calcium <strong>B. Magnesium ✅</strong> C. Iron D. Nitrogen
          </li>
          <li>
            What is the building block of proteins?<br />
            A. Monosaccharides B. Fatty acids <strong>C. Amino acids ✅</strong> D. Nucleotides
          </li>
          <li>
            What is primarily used for long-term energy storage?<br />
            A. Carbs B. Proteins <strong>C. Lipids ✅</strong> D. Nucleic acids
          </li>
          <li>
            Which test detects reducing sugars?<br />
            A. Iodine <strong>B. Benedict’s ✅</strong> C. Grease spot D. Biuret
          </li>
          <li>
            What is the main function of nucleic acids?<br />
            A. Energy B. Structure <strong>C. Genetic info ✅</strong> D. Enzymes
          </li>
          <li>
            Which of the following is a disaccharide?<br />
            A. Glucose B. Fructose <strong>C. Sucrose ✅</strong> D. Cellulose
          </li>
          <li>
            Why is iron important in the body?<br />
            <strong>A. Hemoglobin component ✅</strong> B. Bone strength C. Nerve impulse D. Energy source
          </li>
          <li>
            Which biomolecule is tested by Biuret test?<br />
            A. Carbs B. Lipids <strong>C. Proteins ✅</strong> D. Nucleic acids
          </li>
          <li>
            Primary role of calcium ions?<br />
            <strong>A. Muscle/nerve ✅</strong> B. Oxygen transport C. Energy D. DNA replication
          </li>
        </ol>

        <h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Water helps organisms maintain stable temperature — <strong>True ✅</strong></li>
          <li>All carbohydrates are water-soluble — <strong>False ❌</strong></li>
          <li>Only proteins can act as enzymes — <strong>False ❌</strong></li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Explain the importance of water in biological systems with examples.</li>
          <li>How does lipid structure relate to its function in the body?</li>
          <li>Discuss the ethical concerns about applying biological knowledge of molecules of life.</li>
        </ul>
      </section>
    </main>
  );
}
