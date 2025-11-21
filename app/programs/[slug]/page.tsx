import { programs } from "@/data/programs";
import ProgramDetails from "@/app/components/ProgramDetails";

interface ProgramPageProps {
  params: { slug: string };
}

// ✅ Generate all slugs at build time for static generation
export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Program not found
      </div>
    );
  }

  return <ProgramDetails program={program} />;
}
