
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Download } from 'lucide-react';

const Resume = () => {
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
        <section className="pt-40 md:pt-48 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 section-transition" ref={(el) => addToSectionsRef(el, 0)}>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Resume
                </h1>
                <p className="text-lg text-muted-foreground">
                  My professional background and experience
                </p>
              </div>
              
              <a 
                href="#" 
                className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium transition-colors hover:bg-primary/90"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
            
            {/* Experience Section */}
            <div className="mb-16 section-transition" ref={(el) => addToSectionsRef(el, 1)}>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-8 pb-4 border-b">
                Experience
              </h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      Senior Designer
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                      2021 - Present
                    </span>
                  </div>
                  <p className="font-medium text-base mb-2">Creative Studio Inc.</p>
                  <p className="text-muted-foreground">
                    Led brand strategy and visual design for clients across technology, finance, and retail sectors. Managed a team of three designers and collaborated with development teams to ensure seamless implementation of design assets.
                  </p>
                  <ul className="mt-4 space-y-1 text-muted-foreground list-disc pl-5">
                    <li>Directed rebranding initiatives for 5+ major clients</li>
                    <li>Created comprehensive design systems and guidelines</li>
                    <li>Presented design concepts to executive stakeholders</li>
                    <li>Mentored junior designers and interns</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      UI/UX Designer
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                      2018 - 2021
                    </span>
                  </div>
                  <p className="font-medium text-base mb-2">Digital Solutions Ltd.</p>
                  <p className="text-muted-foreground">
                    Designed user interfaces for web and mobile applications, creating wireframes, prototypes, and final visual designs. Collaborated with product managers and developers to deliver intuitive and engaging user experiences.
                  </p>
                  <ul className="mt-4 space-y-1 text-muted-foreground list-disc pl-5">
                    <li>Redesigned flagship product interface, increasing user engagement by 40%</li>
                    <li>Conducted user research and usability testing</li>
                    <li>Implemented design system using Figma and Storybook</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      Graphic Designer
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                      2016 - 2018
                    </span>
                  </div>
                  <p className="font-medium text-base mb-2">Artisan Design Agency</p>
                  <p className="text-muted-foreground">
                    Created visual assets for print and digital media, including marketing materials, social media graphics, and website elements. Assisted with branding projects and client presentations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="mb-16 section-transition" ref={(el) => addToSectionsRef(el, 2)}>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-8 pb-4 border-b">
                Education
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      Master of Arts in Design
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                      2014 - 2016
                    </span>
                  </div>
                  <p className="font-medium text-base mb-2">Stockholm Arts School</p>
                  <p className="text-muted-foreground">
                    Specialized in digital design and brand communication. Thesis project on responsive retail experiences.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      Bachelor of Fine Arts
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                      2010 - 2014
                    </span>
                  </div>
                  <p className="font-medium text-base mb-2">Creative Arts University</p>
                  <p className="text-muted-foreground">
                    Foundation in graphic design, typography, and visual communication.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="mb-16 section-transition" ref={(el) => addToSectionsRef(el, 3)}>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-8 pb-4 border-b">
                Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h3 className="font-medium mb-3">Design</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center justify-between">
                      <span>Brand Identity</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>UI/UX Design</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[90%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Typography</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[85%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Motion Design</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[80%]"></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Software</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center justify-between">
                      <span>Figma</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Adobe Creative Suite</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[90%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Sketch</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[85%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>After Effects</span>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[75%]"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Additional Skills */}
            <div className="section-transition" ref={(el) => addToSectionsRef(el, 4)}>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-8 pb-4 border-b">
                Additional
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <h3 className="font-medium mb-3">Languages</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>English (Native)</li>
                    <li>Swedish (Fluent)</li>
                    <li>French (Intermediate)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Certifications</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Google UX Design Certificate</li>
                    <li>Interaction Design Foundation Member</li>
                    <li>Adobe Certified Expert</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
