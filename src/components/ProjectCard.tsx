
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  gradient?: string;
  href: string;
  index: number;
}

const ProjectCard = ({ title, category, imageUrl, gradient, href, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="section-transition project-card rounded-lg overflow-hidden group"
    >
      <Link to={href} className="block h-full">
        <div 
          className={`relative overflow-hidden aspect-[4/3] ${gradient || ''}`}
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className="project-image w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display text-xl font-medium tracking-tight">{title}</h3>
            <ArrowRight 
              size={20} 
              className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
            />
          </div>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
