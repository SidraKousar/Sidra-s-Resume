import IntroSection from "./sections/IntroSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <main className="bg-background">
       <Navbar />
      <IntroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
