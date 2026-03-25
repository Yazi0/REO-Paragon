import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero_bg.png')" }}
            >
                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[var(--color-sunset-gold)] text-sm md:text-base tracking-[0.4em] uppercase font-semibold mb-6 drop-shadow-sm"
                >
                    REO Paragon, Sri Lanka
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-white font-[var(--font-heading)] leading-tight mb-8 drop-shadow-lg"
                >
                    Taste the Soul <br />
                    <span className="italic font-light">of</span> <span className="text-[var(--color-sunset-gold)] font-medium">REO Paragon</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
                >
                    A curated tropical dining experience by the sea. Fresh local seafood,
                    authentic Sri Lankan flavors, and effortless coastal luxury.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#reservation"
                        className="w-full sm:w-auto px-10 py-5 bg-[var(--color-sunset-gold)] text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-[var(--color-sunset-gold)] transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Book a Table
                    </a>
                    <a
                        href="#menu"
                        className="w-full sm:w-auto px-10 py-5 border border-white/40 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-all duration-300"
                    >
                        Explore Menu
                    </a>
                </motion.div>
            </div>

            {/* Mini Stats/Info at Bottom */}
            <div className="absolute bottom-0 w-full hidden md:flex justify-between items-center px-12 py-8 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white/80 text-sm tracking-widest uppercase">Open Daily 8AM - 11PM</div>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll-down_1.5s_ease-in-out_infinite]"></div>
                    </div>
                </div>

                <div className="text-white/80 text-sm tracking-widest uppercase">Oceanfront Dining</div>
            </div>

            <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
