import Link from "next/link";
import { Atom } from "lucide-react"; // Optional: change or pass icon dynamically

type Props = {
  id: string;
  name: string;
  overview?: string;
};

export default function SubtopicCard({ id, name, overview }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border transition hover:shadow-md hover:-translate-y-1 group">
      <div className="flex items-start gap-3 mb-2">
        <div className="p-2 rounded-md bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          <Atom className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-slate-800">{name}</h3>
      </div>
      <p className="text-sm text-slate-600 line-clamp-2 mb-2">{overview}</p>
      <Link
        href={`/topics/${id}`}
        className="text-sm font-medium text-teal-600 hover:text-teal-800 group-hover:underline inline-block"
      >
        View Notes →
      </Link>
    </div>
  );
}
