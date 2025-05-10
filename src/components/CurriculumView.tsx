'use client';

import { getParsedBio, getParsedPrimary } from '@/lib/curriculum';
import SubtopicCard from './SubTopicCard';
import ChapterHeader from './ChapterHeader';
import { useState } from 'react';

const bio = getParsedBio();
const primary = getParsedPrimary();

const sources = {
  'Secondary Biology': bio,
  'Primary Science': primary,
};

const sourceLabels = Object.keys(sources);

type SourceKey = 'Secondary Biology' | 'Primary Science';

export default function CurriculumView() {
  const [activeSource, setActiveSource] = useState<SourceKey>(sourceLabels[0] as SourceKey);

  return (
    <div>
      {/* Tabs for "Secondary Biology" and "Primary Science" */}
      <div className="flex gap-2 mb-6">
        {sourceLabels.map((label) => (
          <button
            key={label}
            onClick={() => setActiveSource(label as SourceKey)}
            className={`px-4 py-2 rounded-full ${
              label === activeSource
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Render content depending on source */}
      {activeSource === 'Secondary Biology' ? (
        Object.entries(sources[activeSource]).map(([grade, chapters]) => (
          <div key={grade}>
            {/* <h2 className="text-xl font-semibold mb-4">{grade}</h2> */}
            {chapters.map((chapter, idx) => (
              <div key={idx}>
                <ChapterHeader title={`Chapter ${chapter.topic_id}: ${chapter.title}`} />
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
        ))
      ) : (
        Object.entries(sources[activeSource]).map(([level, items]) => (
          <div key={level}>
            <ChapterHeader title={level} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item) => (
                <SubtopicCard
                  key={item.id}
                  id={item.id}
                  name={item.topic}
                  overview={`${item.theme} — ${item.strand}`}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
