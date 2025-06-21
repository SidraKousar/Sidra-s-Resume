import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  github?: string;
  live?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, images, github, live }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx}`} className="rounded-md w-full h-60 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
      <p className="text-secondary text-sm mt-2">{description}</p>
      <div className="mt-3 flex gap-4">
        {github && <a href={github} className="text-accent underline text-sm" target="_blank">GitHub</a>}
        {live && <a href={live} className="text-accent underline text-sm" target="_blank">Live Demo</a>}
      </div>
    </div>
  );
};

export default ProjectCard;
