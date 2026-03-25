import { motion } from 'framer-motion';

const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/821395310.jpg?k=e1cbcb583f84e9283054e10a45177081545396d6e20d3e65d5c9f0246b91fd3e&o=",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/25/d8/3f/sudu-weli.jpg",
    "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=1000&auto=format&fit=crop",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/b9/2a/4c/big-belly-restaurant.jpg",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/90/01/6a/101-restaurant.jpg?w=600&h=400&s=1"
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-[var(--color-coconut-brown)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-sunset-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
                        Visual Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] text-white">
                        Moments at REO Paragon
                    </h2>
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`overflow-hidden rounded-xl relative group ${index === 2 || index === 3 ? "col-span-2 lg:col-span-1" : ""
                                } ${index === 0 ? 'row-span-2 h-[calc(100%+1.5rem)]' : 'h-64 md:h-80'}`}
                            style={index === 0 ? { gridRowEnd: "span 2" } : {}}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#"
                        className="inline-block border border-[var(--color-sunset-gold)] text-[var(--color-sunset-gold)] px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-sunset-gold)] hover:text-white transition-colors duration-300"
                    >
                        View Full Gallery
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
