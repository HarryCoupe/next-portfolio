import Image from "next/image";
import profilePicture from "../../public/self.jpg";
import AppShell from "@/components/AppShell";

export default function About() {
  return (
    <AppShell page="about">
      <div className="row rowTop">
        <div className="col-8">
          <h4>
            I&apos;m Harry, a Full Stack engineer based in Nottingham,
            specializing in React and Next.js.
            <br></br>
            <br></br>I graduated from University of Nottingham in 2021 in
            Computer Science where I studied many different languages and
            systems such as SQL, Java, Haskell, C and HTML/CSS to name a few.
            <br></br>
            <br></br>
            Since graduation I have been working to improve my skills through
            online courses. Using those skills I have created this website and
            continued to work on other personal projects such as an alternate
            profile view and recommendation compiler for AniList.co.
            <br></br>
            <br></br>
            I&apos;m currently looking for work in the midlands area in web
            development. I&apos;m very keen and willing to learn new systems and
            develop my skills further in my personal and professional life!
          </h4>
        </div>
        <div className="col">
          <Image
            src={profilePicture}
            width="400"
            alt="Picture of Harry Coupe"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </AppShell>
  );
}
