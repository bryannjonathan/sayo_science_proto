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
      <div className="flex w-full max-w-md rounded-md bg-slate-100 p-1 mb-6">
        {sourceLabels.map((label) => {
          const isActive = label === activeSource;
          return (
            <button
              key={label}
              onClick={() => setActiveSource(label as SourceKey)}
              className={`flex-1 py-2 px-3 rounded-md text-sm sm:text-base font-medium transition-all
          ${isActive
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'}`}
              aria-selected={isActive}
            >
              {label}
            </button>
          );
        })}
      </div>

      

      {/* Render content depending on source */}
      {activeSource === 'Secondary Biology' ? (
        Object.entries(sources[activeSource]).map(([grade, chapters]) => (
          <div key={grade}>
            {/* <h2 className="text-xl font-semibold mb-4">{grade}</h2> */}
            {chapters.map((chapter, idx) => (
              <div key={idx} className="mb-8">
                <ChapterHeader title={`Chapter ${chapter.topic_id}: ${chapter.title}`} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div key={level} className="mb-8">
            <ChapterHeader title={level} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
