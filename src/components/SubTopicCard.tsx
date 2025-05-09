type Props = {
  id: string;
  name: string;
  overview?: string;
};

export default function SubtopicCard({ id, name, overview }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-black font-semibold">{`${id} ${name}`}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{overview}</p>
      <a
        href={`/topics/${id}`}
        className="text-blue-500 text-sm mt-2 inline-block"
      >
        View Notes →
      </a>
    </div>
  );
}
