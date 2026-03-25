import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-[var(--color-soft-white)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Collage Column */}
                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="mt-12"
                            >
                                <img
                                    src="/images/about_1.png"
                                    alt="REO Paragon Restaurant Interior"
                                    className="w-full h-[400px] object-cover rounded-tl-[80px] rounded-br-2xl shadow-xl"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSarVE_6oOniq9S8_esuj0CkSie1P5qI0JA&s"
                                    alt="REO Paragon Fine Dining"
                                    className="w-full h-[400px] object-cover rounded-br-[80px] rounded-tl-2xl shadow-xl"
                                />
                            </motion.div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-sunset-gold)]/20 w-48 h-48 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-[var(--color-sunset-gold)] font-medium tracking-widest uppercase text-sm mb-4">
                                Our Story
                            </h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] text-[var(--color-coconut-brown)] leading-tight mb-8">
                                Where the Ocean Meets the Table.
                            </h2>

                            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>
                                    Born from a love for the ocean and the rich culinary heritage of Sri Lanka,
                                    REO Paragon brings you an exquisite coastal dining experience. Every dish
                                    is a harmony of fresh, local ingredients and time-honored recipes, served with
                                    warm hospitality.
                                </p>
                                <p>
                                    We source our seafood directly from local fishermen every morning,
                                    ensuring that our kitchen only prepares the freshest catch. From traditional
                                    Sri Lankan curries to contemporary tropical flavors, we celebrate the essence
                                    of beachside luxury.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-6">
                                <div className="text-center">
                                    <span className="block text-3xl font-[var(--font-heading)] text-[var(--color-deep-ocean)] mb-1">2018</span>
                                    <span className="text-xs tracking-widest uppercase text-gray-500">Established</span>
                                </div>
                                <div className="w-[1px] h-12 bg-gray-300"></div>
                                <div className="text-center">
                                    <span className="block text-3xl font-[var(--font-heading)] text-[var(--color-deep-ocean)] mb-1">98%</span>
                                    <span className="text-xs tracking-widest uppercase text-gray-500">Happy Guests</span>
                                </div>
                                <div className="w-[1px] h-12 bg-gray-300"></div>
                                <div className="text-center">
                                    <span className="block text-3xl font-[var(--font-heading)] text-[var(--color-deep-ocean)] mb-1">100%</span>
                                    <span className="text-xs tracking-widest uppercase text-gray-500">Fresh Daily</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
