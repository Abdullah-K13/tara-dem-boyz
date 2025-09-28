import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            404
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oops! Page Not Found
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
            The page you're looking for seems to have been moved, deleted, or doesn't exist. 
            Let's get you back to cleaning!
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button 
                  size="xl" 
                  variant="modern"
                  className="transition-bounce hover:scale-105"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Go Back Home
                </Button>
              </Link>
              <Button 
                size="xl" 
                variant="glass"
                onClick={() => window.history.back()}
                className="transition-bounce hover:scale-105"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
