
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToSectionsRef = (el: HTMLElement | null, index: number) => {
    if (sectionsRef.current.length <= index) {
      sectionsRef.current.push(el);
    } else {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Projects Hero */}
        <section className="pt-40 md:pt-48 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="section-transition" ref={(el) => addToSectionsRef(el, 0)}>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                My Work
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                A curated selection of projects that showcase my skills and expertise in design, branding, and digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Branding Projects */}
        <section ref={(el) => addToSectionsRef(el, 1)} className="py-16 px-6 section-transition">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Branding" 
              subtitle="Creating coherent visual identities that communicate brand values and resonate with target audiences." 
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Rebranding"
                category="Marketing Agency"
                imageUrl="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                href="/projects/rebranding"
                index={0}
              />
              <ProjectCard 
                title="Brand Strategy"
                category="Tech Startup"
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                href="/projects/brand-strategy"
                index={1}
              />
              <ProjectCard 
                title="Visual Identity"
                category="Lifestyle Brand"
                imageUrl="https://images.unsplash.com/photo-1634942537034-a3d4196bfee7?q=80&w=2000&auto=format&fit=crop"
                href="/projects/visual-identity"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Digital Projects */}
        <section ref={(el) => addToSectionsRef(el, 2)} className="py-16 px-6 section-transition">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Digital Design" 
              subtitle="User-focused interfaces and experiences that balance aesthetics and functionality." 
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="SAAS Dashboard"
                category="UI/UX Design"
                imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
                href="/projects/saas-dashboard"
                index={0}
              />
              <ProjectCard 
                title="E-commerce Redesign"
                category="Web Design"
                imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop"
                href="/projects/ecommerce-redesign"
                index={1}
              />
              <ProjectCard 
                title="Mobile Banking App"
                category="App Design"
                imageUrl="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=2000&auto=format&fit=crop"
                href="/projects/mobile-banking"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Marketing Projects */}
        <section ref={(el) => addToSectionsRef(el, 3)} className="py-16 px-6 section-transition">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Marketing & Content" 
              subtitle="Strategic visual content that engages audiences and drives conversions." 
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Social Media Marketing"
                category="Content Strategy"
                imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop"
                href="/projects/social-media"
                index={0}
              />
              <ProjectCard 
                title="Campaign Creative"
                category="Advertising"
                imageUrl="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop"
                href="/projects/campaign-creative"
                index={1}
              />
              <ProjectCard 
                title="Email Marketing Design"
                category="Digital Marketing"
                imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop"
                href="/projects/email-marketing"
                index={2}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
