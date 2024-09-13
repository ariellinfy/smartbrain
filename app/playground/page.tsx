import { auth } from "@/auth";
import { DetectionOverview } from "@/ui/detection-overview";

export default async function Playground() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading data, please wait...</p>
      </div>
    );
  }

  return <DetectionOverview session={session} />;
}
