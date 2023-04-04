import HomeContent from "@/components/HomeContent";
import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell page="home">
      <div className="row">
        <div className="col"></div>

        <div className="col">
          <HomeContent />
        </div>
      </div>
    </AppShell>
  );
}
