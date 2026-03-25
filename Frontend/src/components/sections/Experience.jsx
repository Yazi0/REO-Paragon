import { motion } from 'framer-motion';
import { Leaf, Waves, Utensils, Heart, Sunset, Camera } from 'lucide-react';

const features = [
    {
        icon: <Leaf className="w-8 h-8 text-[var(--color-sunset-gold)]" />,
        title: "Fresh Local Ingredients",
        description: "Sourced daily from local farmers and fishermen to ensure the highest quality."
    },
    {
        icon: <Waves className="w-8 h-8 text-[var(--color-sunset-gold)]" />,
        title: "Oceanfront Ambiance",
        description: "Dine with the sound of waves and a gentle sea breeze in a tranquil beach setting."
    },
    {
        icon: <Utensils className="w-8 h-8 text-[var(--color-sunset-gold)]" />,
        title: "Authentic Sri Lankan",
        description: "Traditional recipes passed down through generations, cooked with love."
    },
    {
        icon: <Heart className="w-8 h-8 text-[var(--color-sunset-gold)]" />,
        title: "Friendly Service",
        description: "Experience the world-renowned warm hospitality of the Sri Lankan people."
    },
    {
        icon: <Sunset className="w-8 h-8 text-[var(--color-sunset-gold)]" />,
        title: "Sunset Dining",
        description: "The perfect vantage point for breathtaking Indian Ocean sunsets."
    },
    {
        icon: <Camera className="w-8 h-8 text-[var(--color-sunset-gold)]" />,
        title: "Instagrammable Interiors",
        description: "Aesthetically designed spaces that perfectly blend luxury with tropical island life."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-[var(--color-soft-white)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[var(--color-coconut-brown)] font-medium tracking-widest uppercase text-sm mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] text-[var(--color-deep-ocean)]">
                        The REO Paragon Experience
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-20 h-20 mb-6 rounded-full bg-[var(--color-sandy-beige)] flex justify-center items-center group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-[var(--font-heading)] text-[var(--color-coconut-brown)] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 font-light text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
