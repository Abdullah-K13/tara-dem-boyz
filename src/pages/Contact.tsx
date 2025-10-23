import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: "Call Us", details: "912-259-2825", subtitle: "Monday - Friday: 8AM - 6PM", action: "tel:+1234567890" },
    { icon: Mail, title: "Email Us", details: "info@taraanddemboyz.com", subtitle: "We respond within 24 hours", action: "mailto:info@taraanddemboyz.com" },
    { icon: MapPin, title: "Service Area", details: "Hinesville, Savannah & Surrounding GA Coast", subtitle: "Serving residential & commercial clients", action: null },
    { icon: Clock, title: "Business Hours", details: "Mon-Fri: 8AM-6PM", subtitle: "Weekend appointments available", action: null },
  ];

  const serviceAreas = [
    "Hinesville, GA",
    "Savannah, GA",
    "And surrounding areas",
  ];

  const EASE = [0.22, 1, 0.36, 1] as const;
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE },
  };

  return (
    <div className="pt-20 md:pt-24 bg-white text-neutral-900">
      {/* ===== HERO (black with gold accent + offset) ===== */}
      <section className="relative bg-black text-white py-24 mt-24 md:mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(234,179,8,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Contact <span className="text-yellow-400">Us</span></h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Ready to experience professional cleaning services? Get in touch for your free quote or to
              schedule a consultation with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              >
                {info.action ? (
                  <a href={info.action}>
                    <Card className="h-full border border-black/10 hover:border-yellow-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-black text-yellow-400 flex items-center justify-center mx-auto mb-4 shadow-sm">
                          <info.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                        <p className="text-yellow-700 font-medium mb-1">{info.details}</p>
                        <p className="text-neutral-600 text-sm">{info.subtitle}</p>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="h-full border border-black/10 hover:border-yellow-500/50 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-black text-yellow-400 flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <info.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-yellow-700 font-medium mb-1">{info.details}</p>
                      <p className="text-neutral-600 text-sm">{info.subtitle}</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM & SIDE INFO ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
                <p className="text-lg text-neutral-700">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                </p>
              </div>

              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-neutral-900 font-medium">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" className="transition-transform focus:scale-[1.02]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-neutral-900 font-medium">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" className="transition-transform focus:scale-[1.02]" />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-900 font-medium">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="transition-transform focus:scale-[1.02]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-neutral-900 font-medium">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="912-259-2825" className="transition-transform focus:scale-[1.02]" />
                      </div>
                    </div>

                    {/* Property Type and Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType" className="text-neutral-900 font-medium">Property Type *</Label>
                        <select id="propertyType" className="w-full px-3 py-2 bg-white border border-black/10 rounded-md text-neutral-900 transition-transform focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400">
                          <option value="">Select property type</option>
                          <option value="residential">Residential Home</option>
                          <option value="apartment">Apartment/Condo</option>
                          <option value="office">Office Building</option>
                          <option value="retail">Retail Space</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="medical">Medical Facility</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-neutral-900 font-medium">Property Address *</Label>
                        <Input id="address" placeholder="Enter property address" className="transition-transform focus:scale-[1.02]" />
                      </div>
                    </div>

                    {/* Service Needed and Square Footage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-neutral-900 font-medium">Service Needed *</Label>
                        <select id="service" className="w-full px-3 py-2 bg-white border border-black/10 rounded-md text-neutral-900 transition-transform focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400">
                          <option value="">Select service type</option>
                          <option value="residential-regular">Regular Residential Cleaning</option>
                          <option value="residential-deep">Deep Cleaning (Residential)</option>
                          <option value="commercial-regular">Regular Commercial Cleaning</option>
                          <option value="commercial-deep">Deep Cleaning (Commercial)</option>
                          <option value="window">Window Cleaning</option>
                          <option value="carpet">Floor & Carpet Care</option>
                          <option value="sanitization">Deep Sanitization</option>
                          <option value="construction">Post-Construction Cleanup</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size" className="text-neutral-900 font-medium">Approximate Square Footage</Label>
                        <Input id="size" placeholder="e.g., 2,500 sq ft" className="transition-transform focus:scale-[1.02]" />
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="space-y-2">
                      <Label htmlFor="frequency" className="text-neutral-900 font-medium">Cleaning Frequency *</Label>
                      <select id="frequency" className="w-full px-3 py-2 bg-white border border-black/10 rounded-md text-neutral-900 transition-transform focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400">
                        <option value="">Select frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="one-time">One-time Service</option>
                        <option value="as-needed">As Needed</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-neutral-900 font-medium">Additional Details</Label>
                      <Textarea id="message" placeholder="Tell us about any special requirements, preferences, or questions you have..." rows={4} className="transition-transform focus:scale-[1.02]" />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-black text-white hover:bg-yellow-500 hover:text-black transition-all" size="lg">
                      <Send className="mr-2 w-5 h-5" />
                      Send Request for Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Areas and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="space-y-8"
            >
              {/* Service Areas */}
              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black text-yellow-400 flex items-center justify-center shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">Service Areas</h3>
                  </div>
                  <p className="text-neutral-700 mb-6 leading-relaxed">We proudly serve residential and commercial clients throughout the Southeast coastal region:</p>
                  <div className="space-y-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-neutral-900">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-700 flex items-center justify-center shadow-sm">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Free, no-obligation quotes",
                      "Licensed, bonded, and insured",
                      "Eco-friendly cleaning options",
                      "Flexible scheduling options",
                      "100% satisfaction guarantee",
                      "Professional, trained staff",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-neutral-900">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-xl border border-black/10 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black text-yellow-400 flex items-center justify-center shadow-sm">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">Need Immediate Service?</h3>
                  </div>
                  <p className="text-neutral-700 mb-6">For urgent cleaning needs or emergency cleanup services, call us directly:</p>
                  <a href="tel:+1234567890">
                    <Button className="w-full bg-black text-white hover:bg-yellow-500 hover:text-black transition-all">
                      <Phone className="mr-2 w-5 h-5" />
                      Call 912-259-2825
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;