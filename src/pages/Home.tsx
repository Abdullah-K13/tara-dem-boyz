import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Home as HomeIcon,
  Building,
  Droplets,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-modern.jpg";

const Home = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Cleaning",
      description:
        "Complete home cleaning services to keep your living space spotless and healthy.",
    },
    {
      icon: Building,
      title: "Commercial Cleaning",
      description:
        "Professional office and facility cleaning for businesses of all sizes.",
    },
    {
      icon: Droplets,
      title: "Deep Sanitization",
      description:
        "Thorough disinfection services for maximum health and safety protection.",
    },
    {
      icon: Monitor,
      title: "Window Cleaning",
      description:
        "Crystal‑clear windows that let the light shine through beautifully.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Manager",
      rating: 5,
      comment:
        "Tara & Dem Boyz transformed our office building. The attention to detail is incredible, and our tenants noticed the difference immediately.",
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      rating: 5,
      comment:
        "Finally found a cleaning service I can trust! They treat my home like their own and the results speak for themselves.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Business Owner",
      rating: 5,
      comment:
        "Professional, reliable, and thorough. They've been cleaning our restaurant for over two years and never disappoint.",
    },
  ];

  const EASE = [0.22, 1, 0.36, 1] as const;
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE },
  };

  return (
    <div className="pt-20 md:pt-24 bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="relative">
        {/* background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-50 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(234,179,8,0.35),transparent_60%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[url('/noise.png')] opacity-20"
            aria-hidden
          />
        </div>

      <div className="relative mt-24 md:mt-10 bg-black text-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh] py-16">
      {/* Copy */}
      <motion.div {...fadeInUp}>
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs tracking-wide text-yellow-400">
          Neighbors You Can Trust
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Service You Can <span className="text-yellow-400">Count On</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-neutral-300 max-w-xl">
          Professional commercial & residential janitorial services across the
          Southeast coastal region—delivered with integrity, care, and
          consistent results.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button
              size="xl"
              variant="modern"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold shadow-lg"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button
              size="xl"
              variant="glass"
              className="backdrop-blur border border-white/20 text-white hover:bg-white/10"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg text-sm text-neutral-300">
          {[
            { icon: Sparkles, label: "Premium Quality" },
            { icon: Shield, label: "Licensed & Insured" },
            { icon: Clock, label: "Always On-Time" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 border-t border-white/10 pt-4"
            >
              <b.icon className="w-4 h-4 text-yellow-400" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="relative aspect-[4/5] max-w-xl ml-auto">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src={heroImage}
              alt="Professional cleaning in action"
              className="h-full w-full object-cover"
            />
            {/* gold vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-yellow-400/20" />
          </div>
          {/* floating card */}
          <div className="absolute -bottom-6 -left-6">
            <Card className="bg-white/90 backdrop-blur border border-black/5 shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="text-sm font-semibold text-black">98% Satisfaction</p>
                    <p className="text-xs text-neutral-600">from post-service surveys</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</div>

        {/* angled divider */}
        <svg
          className="block w-full text-white"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polygon fill="currentColor" points="0,80 1440,0 1440,80" />
        </svg>
      </section>

      {/* ===== VALUE PILLARS ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose <span className="text-yellow-600">Tara & Dem Boyz</span>?
            </h2>
            <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
              We're more than a cleaning company—we're your neighbors committed to
              excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Premium Quality",
                description:
                  "Professional‑grade equipment and eco‑friendly products for superior results.",
              },
              {
                icon: Shield,
                title: "Trusted & Insured",
                description:
                  "Fully licensed, bonded, and insured for complete peace of mind.",
              },
              {
                icon: Clock,
                title: "Reliable Service",
                description:
                  "On‑time, every time. Consistent schedules and dependable crews.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <Card className="h-full border border-black/10 hover:border-yellow-500/50 transition-colors shadow-sm hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mb-5">
                      <f.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
            <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for homes and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="group h-full border border-black/10 hover:border-yellow-500/60 transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-black text-yellow-400 flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-neutral-600">{s.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link to="/services">
              <Button
                size="lg"
                variant="modern"
                className="bg-black text-white hover:bg-neutral-800 border border-black"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 text-neutral-600">Don’t just take our word for it.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Card className="h-full bg-black text-white border border-white/10">
                  <CardContent className="p-7">
                    <div className="flex items-center mb-3">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white/80 italic mb-6 leading-relaxed">“{t.comment}”</p>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-white/60">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METRICS STRIP ===== */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { k: "10+", v: "Years Serving" },
              { k: "98%", v: "Satisfaction" },
              { k: "24/7", v: "Support" },
              { k: "100%", v: "Insured" },
            ].map((m) => (
              <div key={m.v} className="border-l border-white/10 first:border-l-0">
                <div className="text-3xl font-extrabold text-yellow-400">{m.k}</div>
                <div className="text-sm text-white/70 mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-10">
              Join hundreds of satisfied customers who trust us with their cleaning
              needs. Get your free, no‑obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="xl"
                  variant="modern"
                  className="bg-black text-white hover:bg-neutral-800 border border-black"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:9122592825" >
              <Button
                size="xl"
                variant="glass"
                className="backdrop-blur border border-black/20 text-black hover:bg-black/5"
              >
                
                912-259-2825
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
