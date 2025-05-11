'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    // <div className="px-4 sm:px-6 lg:px-8 mx-auto">
    <div>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Topics</span>
      </button>
    </div>
  );
}
