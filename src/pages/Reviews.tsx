import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote, ThumbsUp, Calendar, User, Building, CheckCircle } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Property Manager",
      company: "Coastal Properties LLC",
      rating: 5,
      date: "March 15, 2024",
      comment:
        "Tara & Dem Boyz has been cleaning our office complex for over two years now. Their attention to detail is incredible, and our tenants constantly compliment the cleanliness of the common areas. They're reliable, professional, and go above and beyond every single time.",
      service: "Commercial Cleaning",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      company: null,
      rating: 5,
      date: "March 10, 2024",
      comment:
        "After trying several cleaning services, I finally found the right team. They treat my home like it's their own, and the results speak for themselves. My house has never been cleaner, and I love coming home to such a spotless environment.",
      service: "Residential Cleaning",
      verified: true,
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Restaurant Owner",
      company: "Sunset Grill",
      rating: 5,
      date: "March 5, 2024",
      comment:
        "Running a restaurant means cleanliness is absolutely critical. Tara & Dem Boyz understands this and delivers exceptional deep cleaning services. They've been with us for over two years and have never missed a scheduled cleaning. Highly recommended!",
      service: "Commercial Deep Cleaning",
      verified: true,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Office Manager",
      company: "Tech Solutions Inc.",
      rating: 5,
      date: "February 28, 2024",
      comment:
        "Professional, punctual, and thorough. Our office has never looked better since we started using their services. The team is respectful of our workspace and works efficiently around our business hours. Great communication and reliability.",
      service: "Office Cleaning",
      verified: true,
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "Homeowner",
      company: null,
      rating: 5,
      date: "February 20, 2024",
      comment:
        "The deep cleaning service exceeded my expectations. Every corner, every surface was meticulously cleaned. The team was friendly, professional, and completed the job faster than I expected while maintaining exceptional quality.",
      service: "Deep Sanitization",
      verified: true,
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "Facilities Director",
      company: "Regional Medical Center",
      rating: 5,
      date: "February 15, 2024",
      comment:
        "In healthcare, cleanliness and sanitization are paramount. Tara & Dem Boyz consistently meets our high standards with their professional-grade cleaning protocols. They understand the importance of our work and deliver accordingly.",
      service: "Medical Facility Cleaning",
      verified: true,
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "4.9", label: "Average Rating" },
    { number: "2,500+", label: "Reviews" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  const EASE = [0.22, 1, 0.36, 1] as const;
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE },
  };

  return (
    <div className="pt-20 md:pt-24 bg-white text-neutral-900">
      {/* ===== HERO (black with gold accent) ===== */}
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
              Client <span className="text-yellow-400">Reviews</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Don't just take our word for it—hear what our satisfied clients have to say about our professional
              cleaning services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-2">{s.number}</div>
                <div className="text-neutral-600 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS GRID ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-yellow-600">Clients Say</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real feedback from real customers who trust us with their cleaning needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <Card className="h-full border border-black/10 hover:border-yellow-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-black text-yellow-400 flex items-center justify-center shadow-sm">
                          {r.company ? (
                            <Building className="w-6 h-6" />
                          ) : (
                            <User className="w-6 h-6" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                            <span>{r.name}</span>
                            {r.verified && <CheckCircle className="w-4 h-4 text-yellow-600" />}
                          </h3>
                          <p className="text-sm text-neutral-600">
                            {r.role}
                            {r.company && ` • ${r.company}`}
                          </p>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-yellow-500/40 flex-shrink-0" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      {Array.from({ length: r.rating }).map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-neutral-700 italic mb-6 leading-relaxed">“{r.comment}”</p>

                    {/* Footer */}
                    <div className="border-t border-black/10 pt-4 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-neutral-600">
                        <Calendar className="w-4 h-4" />
                        <span>{r.date}</span>
                      </div>
                      <div className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium">
                        {r.service}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div {...fadeInUp} className="text-center">
            <Button className="bg-black text-white hover:bg-yellow-500 hover:text-black transition-all" size="lg">
              Load More Reviews
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== REVIEW SUBMISSION FORM ===== */}
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Share Your <span className="text-yellow-600">Experience</span></h2>
              <p className="text-xl text-neutral-600">We’d love to hear about your experience with our cleaning services.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Name and Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-neutral-900 font-medium">
                          Your Name *
                        </Label>
                        <Input id="name" placeholder="Enter your full name" className="transition-transform focus:scale-[1.02]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-neutral-900 font-medium">
                          Service Used *
                        </Label>
                        <Input id="service" placeholder="e.g., Residential Cleaning" className="transition-transform focus:scale-[1.02]" />
                      </div>
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-900 font-medium">
                          Email Address *
                        </Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="transition-transform focus:scale-[1.02]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-neutral-900 font-medium">
                          Company (Optional)
                        </Label>
                        <Input id="company" placeholder="Your company name" className="transition-transform focus:scale-[1.02]" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="space-y-2">
<Label className="text-neutral-900 font-medium">Your Rating *</Label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button key={rating} type="button" className="p-1 transition-transform hover:scale-110">
                            <Star className="w-8 h-8 text-neutral-400 hover:text-yellow-400 hover:fill-yellow-400 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="space-y-2">
                      <Label htmlFor="review" className="text-neutral-900 font-medium">
                        Your Review *
                      </Label>
                      <Textarea id="review" placeholder="Tell us about your experience..." rows={5} className="transition-transform focus:scale-[1.02]" />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-black text-white hover:bg-yellow-500 hover:text-black transition-all" size="lg">
                      <ThumbsUp className="mr-2 w-5 h-5" />
                      Submit Review
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;