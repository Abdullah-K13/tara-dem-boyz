import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home as HomeIcon,
  Building,
  Droplets,
  Monitor,
  Sparkles,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services tailored to your family's needs",
      features: [
        "Regular weekly, bi-weekly, or monthly service",
        "Deep cleaning and move-in/move-out cleaning",
        "Kitchen and bathroom sanitization",
        "Dusting, vacuuming, and mopping",
        "Eco-friendly cleaning products available",
        "Flexible scheduling to fit your lifestyle",
      ],
      pricing: "Starting at $120/visit",
    },
    {
      icon: Building,
      title: "Commercial Cleaning",
      description: "Professional office and facility cleaning for businesses of all sizes",
      features: [
        "Daily, weekly, or customized schedules",
        "Office buildings and retail spaces",
        "Restroom and common area maintenance",
        "Floor care and carpet cleaning",
        "Trash removal and recycling",
        "After-hours service available",
      ],
      pricing: "Custom quotes available",
    },
    {
      icon: Monitor,
      title: "Window Cleaning",
      description: "Crystal clear windows that enhance your property's appearance",
      features: [
        "Interior and exterior window cleaning",
        "Screen cleaning and maintenance",
        "Sill and frame cleaning",
        "High-rise and commercial buildings",
        "Residential homes and condos",
        "Streak-free guarantee",
      ],
      pricing: "Starting at $8/window",
    },
    {
      icon: Droplets,
      title: "Deep Sanitization",
      description: "Thorough disinfection services for maximum health protection",
      features: [
        "Hospital-grade disinfectants",
        "High-touch surface sanitization",
        "Air quality improvement",
        "Post-illness deep cleaning",
        "Preventive maintenance programs",
        "Certified cleaning protocols",
      ],
      pricing: "Starting at $200/service",
    },
    {
      icon: Sparkles,
      title: "Floor & Carpet Care",
      description: "Specialized floor maintenance and carpet cleaning services",
      features: [
        "Hardwood floor cleaning and polishing",
        "Tile and grout deep cleaning",
        "Carpet shampooing and stain removal",
        "Strip and wax services",
        "Stone and marble care",
        "Regular maintenance programs",
      ],
      pricing: "Starting at $0.75/sq ft",
    },
    {
      icon: Shield,
      title: "Specialized Services",
      description: "Customized cleaning solutions for unique requirements",
      features: [
        "Post-construction cleanup",
        "Event cleaning services",
        "Pressure washing",
        "Upholstery cleaning",
        "Emergency cleanup services",
        "One-time deep cleaning",
      ],
      pricing: "Quote upon request",
    },
  ];

  const addOns = [
    { name: "Interior Appliance Cleaning", price: "$25" },
    { name: "Inside Oven Cleaning", price: "$35" },
    { name: "Refrigerator Cleaning", price: "$30" },
    { name: "Garage Cleaning", price: "$45" },
    { name: "Basement Cleaning", price: "$40" },
    { name: "Attic Cleaning", price: "$50" },
  ];

  const EASE = [0.22, 1, 0.36, 1] as const;
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE },
  };

  return (
    <div className="pt-20 md:pt-24 bg-white text-neutral-900">
      {/* ===== HERO ===== */}
<section className="relative bg-black text-white py-24 mt-24 md:mt-32">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(234,179,8,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Comprehensive cleaning solutions designed to meet all your residential and commercial needs
              with professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="text-yellow-600">Offer</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From routine maintenance to specialized deep cleaning, we provide complete solutions for every
              cleaning challenge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
              >
                <Card className="h-full border border-black/10 hover:border-yellow-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-yellow-400/20 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-yellow-400/30">
                        <service.icon className="w-8 h-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm text-neutral-800">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-black/10 pt-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-neutral-500 mb-1">Starting Price</p>
                        <p className="text-2xl font-bold text-yellow-600">{service.pricing}</p>
                      </div>
                      <Button className="bg-black text-white hover:bg-yellow-500 hover:text-black transition-all">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADD-ONS ===== */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Additional <span className="text-yellow-600">Services</span></h2>
            <p className="text-xl text-neutral-600">Enhance your cleaning package with these add-ons.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border border-black/10 shadow-sm hover:shadow-md">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addOns.map((addon, index) => (
                    <motion.div
                      key={addon.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.05, ease: EASE }}
                      className="flex items-center justify-between p-4 rounded-lg border border-transparent hover:border-yellow-500/40 hover:bg-yellow-50 transition-all"
                    >
                      <span className="font-medium text-neutral-900">{addon.name}</span>
                      <span className="font-bold text-yellow-600">{addon.price}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-yellow-600">Process</span></h2>
            <p className="text-xl text-neutral-600">Simple steps to get started with professional cleaning services.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Contact Us", description: "Reach out via phone, email, or our online form." },
              { step: "2", title: "Free Assessment", description: "We’ll visit and provide a detailed quote." },
              { step: "3", title: "Schedule Service", description: "Pick a convenient time for your cleaning." },
              { step: "4", title: "Enjoy Results", description: "Relax while we deliver exceptional results." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-black text-yellow-400 flex items-center justify-center mx-auto mb-6 shadow-md hover:bg-yellow-500 hover:text-black transition-all">
                  <span className="text-2xl font-bold">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-black/80 mb-12 max-w-3xl mx-auto">
              Experience the difference professional cleaning makes. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-black text-white hover:bg-neutral-800 border border-black">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button className="backdrop-blur border border-black/20 text-black hover:bg-black/5">
                Call (123) 456-7890
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;