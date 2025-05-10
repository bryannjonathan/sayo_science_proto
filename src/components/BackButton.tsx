'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-blue-600 hover:text-white transition"
    >
      ← Back
    </button>
  );
}