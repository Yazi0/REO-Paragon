import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[var(--color-soft-white)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-12"
                    >
                        <div>
                            <span className="text-[var(--color-sunset-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
                                Get in Touch
                            </span>
                            <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] text-[var(--color-coconut-brown)] mb-6">
                                Find Us on the Coast
                            </h2>
                            <p className="text-gray-600 font-light text-lg leading-relaxed">
                                Whether you have a question about our menu, need to organize a private event, or just want to say hi, our team is always ready to hear from you.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 text-gray-700">
                                <MapPin className="w-6 h-6 mt-1 text-[var(--color-sunset-gold)] shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-deep-ocean)] uppercase tracking-widest text-sm mb-2">Location</h4>
                                    <p className="font-light">123 Beachfront Road,<br />Mirissa 81740,<br />Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-gray-700">
                                <Phone className="w-6 h-6 mt-1 text-[var(--color-sunset-gold)] shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-deep-ocean)] uppercase tracking-widest text-sm mb-2">Phone</h4>
                                    <p className="font-light">+94 77 123 4567<br />+94 41 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-gray-700">
                                <Mail className="w-6 h-6 mt-1 text-[var(--color-sunset-gold)] shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-deep-ocean)] uppercase tracking-widest text-sm mb-2">Email</h4>
                                    <p className="font-light">hello@reoparagon.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-gray-700">
                                <Clock className="w-6 h-6 mt-1 text-[var(--color-sunset-gold)] shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-deep-ocean)] uppercase tracking-widest text-sm mb-2">Opening Hours</h4>
                                    <p className="font-light">Monday - Sunday<br />8:00 AM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-6">
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-sandy-beige)] text-[var(--color-deep-ocean)] hover:bg-[var(--color-sunset-gold)] hover:text-white transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-sandy-beige)] text-[var(--color-deep-ocean)] hover:bg-[var(--color-sunset-gold)] hover:text-white transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-sandy-beige)] text-[var(--color-deep-ocean)] hover:bg-[var(--color-sunset-gold)] hover:text-white transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Map/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3968.36093882597!2d80.4590322!3d5.944896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fd46179081f%3A0x433ac99860f5a2e7!2sParagon%20mirissa%20by%20REO!5e0!3m2!1sen!2slk!4v1773928930677!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="REO Paragon Location"
                                className="grayscale contrast-125 brightness-100 hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
