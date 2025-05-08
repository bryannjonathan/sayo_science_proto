export default function ChapterHeader({ title }: { title: string }) {
  return (
    <div className="mt-6 mb-2">
      <h2 className="text-2xl font-bold border-l-4 pl-3 border-blue-600">{title}</h2>
    </div>
  );
}
