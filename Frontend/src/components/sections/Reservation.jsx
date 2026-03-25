import { motion } from 'framer-motion';

const Reservation = () => {
    return (
        <section id="reservation" className="relative py-32 bg-[var(--color-deep-ocean)] text-white overflow-hidden">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-ocean)] to-transparent"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[var(--color-sunset-gold)] font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
                        Join Us by the Sea
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] leading-tight mb-8">
                        Reserve Your Experience
                    </h2>
                    <p className="text-white/80 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Secure your table for an unforgettable sunset dining experience at REO Paragon's finest coastal restaurant.
                        For tables larger than 8, please contact us directly via WhatsApp.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#"
                            className="w-full sm:w-auto px-10 py-4 bg-[var(--color-sunset-gold)] text-white uppercase tracking-widest text-sm font-semibold hover:bg-[#b08022] transition-colors rounded-none"
                        >
                            Book Now
                        </a>
                        <a
                            href="https://wa.me/94770000000"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/50 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[var(--color-deep-ocean)] transition-all duration-300"
                        >
                            Message on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reservation;
