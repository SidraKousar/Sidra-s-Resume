// eslint-disable-next-line
import React from "react";


const ExperienceSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        <div className="bg-card shadow-md p-6 rounded-lg border-l-4 border-accent">
          <h3 className="text-xl font-semibold text-primary">Frontend Developer – TaskSoft</h3>
          <p className="text-secondary">[Dates] | Remote</p>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
            <li>Developed reusable React components.</li>
            <li>Worked with REST APIs and TypeScript.</li>
            <li>Collaborated in Agile teams.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
