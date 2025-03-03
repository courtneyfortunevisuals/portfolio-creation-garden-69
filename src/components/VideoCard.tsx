
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  videoUrl: string;
  index: number;
}

const VideoCard = ({ title, subtitle, thumbnailUrl, videoUrl, index }: VideoCardProps) => {
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
    <div ref={cardRef} className="section-transition">
      <div className="group relative overflow-hidden rounded-lg aspect-video mb-4">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={24} className="ml-1" />
          </div>
        </div>
      </div>
      <Link to={videoUrl}>
        <h3 className="font-display text-lg font-medium tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;
