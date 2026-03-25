import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        country: "United Kingdom",
        text: "The absolute highlight of our trip to REO Paragon. The seafood platter is to die for, and the ambiance right by the ocean is unmatched. We came back three times!",
        rating: 5
    },
    {
        name: "Marco Rossi",
        country: "Italy",
        text: "REO Paragon perfectly captures the tropical luxury vibe. The service is incredibly warm, and the sunset cocktails are phenomenal. Highly recommended.",
        rating: 5
    },
    {
        name: "Amelie Dubois",
        country: "France",
        text: "Beautiful design, exceptional food. You can taste the freshness in every bite. It feels like a high-end editorial spread brought to life.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-[var(--color-sandy-beige)] relative overflow-hidden">
            {/* Decorative Wave/Background Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-coconut-brown) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-sunset-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
                        Guest Experiences
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] text-[var(--color-coconut-brown)]">
                        Echoes of the Ocean
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="flex text-[var(--color-sunset-gold)] mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 font-light text-base leading-relaxed mb-8 flex-grow italic">
                                "{testimonial.text}"
                            </p>
                            <div>
                                <h4 className="font-medium text-[var(--color-deep-ocean)] text-lg mb-1 font-[var(--font-heading)]">
                                    {testimonial.name}
                                </h4>
                                <span className="text-xs uppercase tracking-widest text-gray-400">
                                    {testimonial.country}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
