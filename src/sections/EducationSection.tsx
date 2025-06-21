// eslint-disable-next-line
import React from "react";


const EducationSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 py-12 px-6 bg-white" data-aos="zoom-in-up" data-aos-duration="800">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Education</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        <div className="bg-card shadow-md p-6 rounded-lg border-l-4 border-accent">
          <h3 className="text-xl font-semibold text-primary">B.S. in Computer Science</h3>
          <p className="text-secondary">University of [Your Uni], [City, Country] – [Year]</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
