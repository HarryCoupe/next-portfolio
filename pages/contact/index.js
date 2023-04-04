import AppShell from "@/components/AppShell";

export default function Contact() {
  return (
    <AppShell page="contact">
      <div className="row rowTop">
        <h2>
          If you&apos;d like to get in touch please email me at{" "}
          <a href="mailto:harrycoupe@gmail.com" className="links">
            harrycoupe@gmail.com
          </a>{" "}
          and I&apos;ll get back to you as soon as possible!
        </h2>
      </div>
    </AppShell>
  );
}
