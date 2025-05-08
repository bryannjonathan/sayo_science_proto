import rawData from '@/data/bio_with_questions.json';

export type Subtopic = {
  id: string;
  name: string;
  overview: string;
  chapterTitle: string;
  grade: string;
};

export function getParsedBio(): Record<string, { title: string; subtopics: Subtopic[] }[]> {
  const result: Record<string, { title: string; subtopics: Subtopic[] }[]> = {};

  const levels = Object.entries(rawData); // e.g., "Secondary 4-6"

  for (const [grade, subjects] of levels) {
    const biology = subjects["Biology"];
    if (!biology) continue;

    const chapters = biology.compulsoryPart;
    result[grade] = chapters.map((chapter, idx) => ({
      topic_id: chapter.topic_id,
      title: chapter.title,
      subtopics: chapter.subtopics.map((sub) => ({
        id: sub.generated_subtopic_id,
        name: sub.name,
        overview: chapter.overview,
        chapterTitle: chapter.title,
        grade,
      })),
    }));
  }

  return result;
}
