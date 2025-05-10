import rawData from '@/data/bio_with_questions.json';
import rawPrimary from '@/data/primary_with_questions.json'

export type Subtopic = {
  id: string;
  name: string;
  overview: string;
  chapterTitle: string;
  grade: string;
};

export function getParsedBio(): Record<string, { title: string; topic_id : string; subtopics: Subtopic[] }[]> {
  const result: Record<string, { title: string; topic_id : string; subtopics: Subtopic[] }[]> = {};

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
        overview: sub.learning_objectives?.[0] || chapter.overview,
        chapterTitle: chapter.title,
        grade,
      })),
    }));
  }

  return result;
}

export function getParsedPrimary(): Record<
  string,
  {
    strand: string;
    theme: string;
    topic: string;
    id: string;
    learningObjectives: string[];
  }[]
> {
  const result: Record<string, {
    strand: string;
    theme: string;
    topic: string;
    id: string;
    learningObjectives: string[];
  }[]> = {};

  const levels = rawPrimary["PrimaryScience_P1_P6"]?.levels || [];

  for (const level of levels) {
    const levelName = level.level;
    const strands = level.strands || [];

    for (const strand of strands) {
      const strandName = strand.strand_name;

      for (const theme of strand.themes || []) {
        const themeName = theme.theme_name;
        const topicName = theme.topic_name;
        const generatedId = theme.generated_id;
        const objectives = (theme.learning_objectives || []).map(obj => obj.objective);

        if (!result[levelName]) {
          result[levelName] = [];
        }

        result[levelName].push({
          strand: strandName,
          theme: themeName,
          topic: topicName,
          id: generatedId,
          learningObjectives: objectives,
        });
      }
    }
  }

  return result;
}