import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Handshake, MapPin, Clock, CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import newLogo from "@/assets/new-logo.svg";


const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Care & Integrity",
      description: "We treat every space like our own, with sincere care and unwavering integrity.",
    },
    {
      icon: Handshake,
      title: "Trust & Reliability",
      description: "Long‑term relationships through consistent, dependable service—every time.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Superior results that exceed expectations and raise the bar in cleanliness.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Neighbors serving neighbors across the Southeast coastal region.",
    },
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Launched to provide trustworthy residential cleaning." },
    { year: "2019", title: "Commercial Expansion", description: "Scaled into office, retail, and facility care." },
    { year: "2021", title: "Team Growth", description: "Expanded our professional crew to 15+ members." },
    { year: "2024", title: "Regional Leader", description: "Now serving 500+ clients across the coastal region." },
  ];

  // Framer Motion typed easing
  const EASE = [0.22, 1, 0.36, 1] as const;
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE },
  };

  return (
    <div className="pt-20 md:pt-24 bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="relative bg-white text-white py-24 mt-24 md:mt-10">
        {/* Background logo watermark */}
<div
  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none mt-7"
  aria-hidden="true"
>
  <img
    src={newLogo}
    alt=""
    className="w-[55vw] max-w-[550px] opacity-[0.1] blur-[0.5px] object-contain"
  />
</div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(234,179,8,0.28),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
              About <span className="text-yellow-400">Tara & Dem Boyz</span>
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-black">
              Professional commercial & residential janitorial services—rooted in family, driven by integrity,
              and dedicated to spotless, safe environments.
            </p>
          </motion.div>
        </div>
        {/* <svg className="block w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <polygon fill="currentColor" points="0,80 1440,0 1440,80" />
        </svg> */}
      </section>

      {/* ===== MISSION + TRUST STRIP ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We deliver reliable, high‑quality cleaning for homes and businesses across the Southeast coastal region.
                Our aim is simple: create healthier, safer, cleaner spaces through dependable service with professionalism,
                integrity, and care.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Clean spaces elevate health, productivity, and peace of mind. From family homes to large facilities,
                we bring the same attention to detail and pride in workmanship.
              </p>
              <div className="space-y-3">
                {["Family‑owned since 2018","500+ satisfied customers","Licensed, bonded & insured","Eco‑friendly options available"].map((i, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-600" />
                    <span className="font-medium">{i}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative"
            >
              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 rounded-full bg-black text-yellow-400 flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-3xl font-bold">T&D</span>
                    </div>
                    <blockquote className="text-xl italic text-neutral-600 leading-relaxed">
                      "We don't just clean—we care for the spaces where families thrive and businesses grow."
                    </blockquote>
                    <div className="border-t border-black/10 pt-6">
                      <p className="font-semibold">Tara Johnson</p>
                      <p className="text-neutral-600">Founder & CEO</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {[
              { icon: ShieldCheck, label: "Licensed • Bonded • Insured" },
              { icon: Sparkles, label: "Professional‑grade Tools & Supplies" },
              { icon: CheckCircle, label: "100% Satisfaction Focus" },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}>
                <div className="flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white p-4 text-neutral-800 hover:border-yellow-500/50 transition-colors">
                  <b.icon className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Principles that guide every clean and every client relationship.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, index) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              >
                <Card className="h-full border border-black/10 hover:border-yellow-500/50 transition-all shadow-sm hover:shadow-lg bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                      <v.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">{v.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-neutral-600">From humble beginnings to regional leadership.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((m, index) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1">
                    <Card className="border border-black/10 shadow-sm bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-black text-yellow-400 flex items-center justify-center shadow">
                            <span className="text-sm font-bold">{m.year}</span>
                          </div>
                          <h3 className="text-2xl font-semibold">{m.title}</h3>
                        </div>
                        <p className="text-neutral-600 leading-relaxed">{m.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 shadow" />
                  </div>

                  <div className="flex-1 md:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY / SERVICE AREA ===== */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-yellow-600" />
                <h2 className="text-4xl md:text-5xl font-bold">Community Roots</h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We live and work in the Southeast coastal region, so we understand the unique cleaning challenges of coastal life.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                From humidity and salt air to high‑traffic facilities, we tailor our approach to protect your space and elevate your everyday.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-yellow-600 mb-1">500+</div>
                  <div className="text-neutral-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-yellow-600 mb-1">6+</div>
                  <div className="text-neutral-600">Years Serving</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-2xl font-semibold">Service Area</h3>
                  </div>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    We proudly serve residential and commercial clients throughout the Southeast coastal region, bringing professional results to your doorstep.
                  </p>
                  <div className="space-y-3 mb-8">
                    {["Residential homes and condos","Office buildings and facilities","Retail and commercial spaces","Property management companies"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-neutral-900">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-black text-white hover:bg-yellow-500 hover:text-black transition-colors">
                      Contact Us Today
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Ready to Learn More?</h2>
            <p className="text-lg text-black/80 mb-10 max-w-3xl mx-auto">
              Discover how our team can tailor a cleaning plan for your home or business.
            </p>
            <Link to="/contact">
              <Button className="bg-black text-white hover:bg-white hover:text-black border border-black">
                Get a Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;