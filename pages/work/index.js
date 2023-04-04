import WorkItem from "@/components/WorkItem";
import inputs from "@/public/works";
import AppShell from "@/components/AppShell";

export default function Work() {
  return (
    <AppShell page="work">
      <div className="col"></div>
      <div className="col"></div>

      {inputs.map((object, id) => (
        <WorkItem key={id} inputObject={object} />
      ))}
    </AppShell>
  );
}
