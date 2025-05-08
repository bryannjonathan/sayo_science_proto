'use client';

import { getParsedBio } from '@/lib/curriculum';
import SubtopicCard from './SubTopicCard';
import ChapterHeader from './ChapterHeader';
import { useState } from 'react';

const curriculum = getParsedBio();
const grades = Object.keys(curriculum);

export default function CurriculumView() {
  const [activeGrade, setActiveGrade] = useState(grades[0]);
//   console.log(curriculum[activeGrade])

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setActiveGrade(grade)}
            className={`px-4 py-2 rounded-full ${
              grade === activeGrade
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Chapter-wise rendering */}
      {curriculum[activeGrade].map((chapter, idx) => (
        <div key={idx}>
          <ChapterHeader title={`Chapter ${chapter.topic_id}`} />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {chapter.subtopics.map((sub) => (
              <SubtopicCard
                key={sub.id}
                id={sub.id}
                name={sub.name}
                overview={sub.overview}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
