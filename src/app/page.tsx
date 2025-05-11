import CurriculumView from '@/components/CurriculumView';
import { Beaker } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header matches V0 style */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center gap-2 px-4 sm:px-6 lg:px-8">
            <Beaker className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-800">Sayo Academy Science</h1>
          </div>
        </div>
      </header>

      {/* Main content section */}
      <main className="container mx-auto px-4 py-8">
        <CurriculumView />
      </main>
    </div>
  );
}
