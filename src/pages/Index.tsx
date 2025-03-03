
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import VideoCard from '../components/VideoCard';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const profileImageUrl = "/lovable-uploads/48f4fa5a-9496-4a42-b8cb-695b744c45a8.png"; 
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
    <div className="min-h-screen bg-[#f5f4f0]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-36 md:pt-40 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-20 items-start">
              <div className="section-transition" ref={(el) => addToSectionsRef(el, 0)}>
                <div className="w-16 h-16 bg-[#333] rounded-full mb-8 overflow-hidden">
                  {profileImageUrl && (
                    <img 
                      src={profileImageUrl} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <h1 className="font-display text-4xl md:text-4xl font-medium tracking-tight mb-6 text-[#333]">
                  Hello! I'm Courtney, a Brand and Visual Designer specializing in digital design for brand and web.
                </h1>
                
                <p className="text-base text-[#555] max-w-2xl mb-8">
                  My passion is creating visually striking and engaging digital experiences that bring innovation and clarity to brands. If you need advice on branding projects or help with a website makeover, I'm your creative partner.
                </p>
                
                <div className="flex items-center space-x-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={20} className="text-[#333] hover:text-primary transition-colors" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github size={20} className="text-[#333] hover:text-primary transition-colors" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Twitter size={20} className="text-[#333] hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section ref={(el) => addToSectionsRef(el, 1)} className="py-16 px-6 section-transition">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Selected projects" 
              subtitle="Explore my portfolio of projects, showcasing my dedication to innovation and beautiful design." 
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Rebranding"
                category="Marketing Agency"
                imageUrl="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                href="/projects/rebranding"
                index={0}
              />
              <ProjectCard 
                title="Creative Rollouts"
                category="Product Design"
                imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                href="/projects/creative-rollouts"
                gradient="bg-gradient-to-br from-pink-500 to-purple-500"
                index={1}
              />
            </div>
          </div>
        </section>

        {/* Graduation Project */}
        <section ref={(el) => addToSectionsRef(el, 2)} className="py-16 bg-[#333] text-white px-6 section-transition">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
                  My graduation project
                </h2>
                <p className="max-w-md mb-8 text-sm text-gray-300">
                  Based on three years of fashion studies at Stockholm Arts School and a module in e-commerce, I created a responsive shopping experience with a focus on mobile app design.
                </p>
                <Link to="/projects/graduation" className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity text-sm border-b border-white pb-1">
                  View case study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Projects */}
        <section ref={(el) => addToSectionsRef(el, 3)} className="py-16 px-6 section-transition">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Selected projects" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ProjectCard 
                title="Dynamic Prospecting & Remarketing"
                category="Digital Marketing"
                imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop"
                href="/projects/marketing"
                index={0}
              />
              <ProjectCard 
                title="Social Media Marketing"
                category="Content Strategy"
                imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop"
                href="/projects/social-media"
                index={1}
              />
            </div>
          </div>
        </section>

        {/* Motion Design */}
        <section ref={(el) => addToSectionsRef(el, 4)} className="py-16 px-6 section-transition">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Motion Design" 
              subtitle="Motion brings soul to interfaces and creates a more human and responsive experience." 
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <VideoCard 
                title="Dr. James Anderson"
                subtitle="Medical Professional Animation"
                thumbnailUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
                videoUrl="/projects/motion/james-anderson"
                index={0}
              />
              <VideoCard 
                title="WORDS Kinetic Typography"
                subtitle="Title Opener"
                thumbnailUrl="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop"
                videoUrl="/projects/motion/kinetic-typography"
                index={1}
              />
              <VideoCard 
                title="Product Showcase"
                subtitle="E-commerce Animation"
                thumbnailUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
                videoUrl="/projects/motion/product-showcase"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={(el) => addToSectionsRef(el, 5)} className="py-16 px-6 bg-[#444] text-white section-transition">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight mb-4">
                  Interested in connecting?
                </h2>
                <p className="text-gray-300 max-w-md mb-8 text-sm">
                  Let's chat about collaborations, opportunities, or anything design related!
                </p>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
