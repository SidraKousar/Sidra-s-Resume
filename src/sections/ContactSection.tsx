import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 sm:px-8 md:px-16 py-12 py-12 px-6 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-3xl font-bold text-primary mb-6 text-center">Contact Me</h2>
      <div className="max-w-6xl mx-auto px-4 max-w-xl mx-auto text-center bg-card p-6 rounded-lg shadow-md">
        <p className="text-secondary text-lg mb-4">
          I'm always open to discussing new opportunities or collaborations.
        </p>
        <p className="text-primary text-lg font-semibold">
          📧 Email: <a href="mailto:your.email@example.com" className="text-accent underline">your.email@example.com</a>
        </p>
        <p className="text-primary text-lg font-semibold mt-2">
          📞 Phone: <a href="tel:+1234567890" className="text-accent underline">+123 456 7890</a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
