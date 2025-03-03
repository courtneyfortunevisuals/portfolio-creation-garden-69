
import { Link } from 'react-router-dom';
import { LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <Link to="/" className="font-display text-lg font-semibold tracking-tight mb-4 inline-block">
              alan.portfolio
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mt-4">
              Design and development professional specializing in creating meaningful digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-sm mb-4">Sitemap</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
                <li><Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resume</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-4">Connect</h3>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email Me</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Alan Smith. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <LinkedinIcon size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <GithubIcon size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <TwitterIcon size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
