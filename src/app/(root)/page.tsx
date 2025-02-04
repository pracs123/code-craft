import Header from "./_components/Header";
import ResizablePanels from "./_components/ResizablePanels";
import CompetitionCard from "./_components/CompetitionCard"; // New Component for Competition

export default function Home() {
  const competitions = [
    {
      id: 1,
      name: "Debugging Challenge 1",
      description: "Fix the issues in the given code and get high scores!",
      startTime: "2025-02-10T10:00:00Z", // Example date
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto p-4">
        <Header />
        {/* Competition Dashboard Section */}
        <section className="mt-8">
          <div className="mt-4 gap-6">
            {competitions.map((competition) => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
        </section>
        {/* <ResizablePanels /> */}

      </div>
    </div>
  );
}
