// eslint-disable-next-line
import React from "react";

import ProjectCard from "../components/ProjectCard";
import img1 from "../assets/projects/project1-img1.avif";
import img2 from "../assets/projects/project1-img2.avif";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-gray-100" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ProjectCard
          title="Portfolio Website"
          description="My personal portfolio built with React + Vite + TailwindCSS and Swiper."
          images={[img1, img2]}
          github="https://github.com/your-repo"
          live="https://your-site.com"
        />
        {/* Add more ProjectCards as needed */}
      </div>
    </section>
  );
};

export default ProjectSection;
