import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExpertiseSection />
      <ExperienceSection />
      <footer className="py-12 border-t border-border">
        <div className="section-container text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} — Built with passion & pixels</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
