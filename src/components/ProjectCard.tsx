
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
      className="section-transition project-card rounded-none overflow-hidden group"
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
        <div className="pt-4">
          <h3 className="font-display text-base font-medium tracking-tight text-[#333]">{title}</h3>
          <p className="text-xs text-[#666] mt-1">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
