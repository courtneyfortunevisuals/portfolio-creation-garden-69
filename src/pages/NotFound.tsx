
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center pt-20 px-6">
        <div className="text-center max-w-md mx-auto">
          <h1 className="font-display text-8xl font-bold mb-4 animate-fade-in">404</h1>
          <p className="text-xl font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Page not found
          </p>
          <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
