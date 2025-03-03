
import { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter, GitHub } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div className="section-transition" ref={(el) => addToSectionsRef(el, 0)}>
                <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                  Let's create something amazing together
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mb-12">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail size={20} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin size={20} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Stockholm, Sweden
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock size={20} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 9:00 - 17:00 CET
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Linkedin size={24} className="text-foreground hover:text-primary transition-colors" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Twitter size={24} className="text-foreground hover:text-primary transition-colors" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <GitHub size={24} className="text-foreground hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="section-transition" ref={(el) => addToSectionsRef(el, 1)}>
                <div className="bg-background rounded-lg p-8 shadow-sm border">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
                    Send me a message
                  </h2>
                  <ContactForm />
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

export default Contact;
