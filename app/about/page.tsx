import React from "react";
export const metadata = {
    title: "About Us - XYRA AI",
    description: "Learn about XYRA AI, our mission, and how we are transforming engineering with AI-powered tools.",
  };

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-200 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-indigo-400 mb-6">About us</h1>
        <p className="mb-4">
          At XYRA AI, we are reimagining the way engineering is done. In industries where precision, consistency, and time-to-delivery are critical — we build AI-powered tools that eliminate repetitive tasks, reduce human error, and empower engineers to focus on what truly matters: solving problems and building the future.
        </p>
        <p className="mb-4">
          Our platform bridges the gap between domain expertise and modern technology. Whether it's automating the generation of spec sheets, intelligently handling massive instrumentation databases, assisting with control system documentation, or optimizing process workflows — XYRA.AI is here to streamline it all.
        </p>
        <p className="mb-4">
          Based in the UAE and India, we proudly serve engineering consultants and EPCs across Oil & Gas, Chemicals, Pharmaceuticals, Infrastructure, and Renewable Energy. Our solutions are built by engineers, for engineers — with a deep understanding of project constraints, documentation challenges, and time pressures.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">A Message from Our Founder</h2>
        <p className="italic text-lg mb-4">
          “Over the past decade, I’ve spent countless hours inside engineering tools, projects, and databases. I’ve seen talented engineers waste precious time on manual data entry, rework, and disconnected systems. I’ve felt the frustration of working late nights on tasks that should have been automated.
        </p>
        <p className="italic text-lg mb-4">
          XYRA AI is my response to that experience. We are not just another tech company. We are on a mission to free engineers from outdated processes and give them intelligent tools that think with them, learn from them, and work beside them. My dream is to build a world where engineers create with speed, clarity, and joy.
        </p>
        <p className="text-right text-indigo-400 font-medium">— Prashanth Thipparthi, Founder & CEO</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Our Mission</h2>
        <p>
          To accelerate engineering innovation by building AI-first, automation-driven platforms that reduce inefficiencies, unlock creativity, and transform how engineering teams work — from documentation to delivery.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">What Drives Us</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Empowering engineers with tools that reduce friction and amplify output.</li>
          <li>Blending domain expertise with AI to solve real-world problems.</li>
          <li>Designing software that is intuitive, elegant, and engineered for productivity.</li>
          <li>Creating solutions that scale with your projects — not against them.</li>
        </ul>
      </section>
    </main>
  );
}
