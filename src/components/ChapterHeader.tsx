export default function ChapterHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-8 bg-teal-600 rounded-full"></div>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>
    
  );
}
