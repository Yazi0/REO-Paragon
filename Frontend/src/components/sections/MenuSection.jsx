import { motion } from 'framer-motion';

const MenuSection = () => {
    const menuItems = [
        {
            id: 1,
            name: "REO Paragon Seafood Platter",
            price: "$45",
            description: "Jumbo prawns, calamari, fresh catch of the day, garlic butter sauce, served with Sri Lankan coconut sambol.",
            image: "/images/seafood_platter.png",
            category: "Seafood"
        },
        {
            id: 2,
            name: "Grilled Tiger Prawns",
            price: "$28",
            description: "Char-grilled local tiger prawns marinated in indigenous spices, served with fresh tropical mango salsa.",
            image: "/images/tiger_prawns.png",
            category: "Seafood"
        },
        {
            id: 3,
            name: "Tropical Sunrise Bowl",
            price: "$14",
            description: "Fresh passionfruit, mango, dragon fruit, homemade granola, local organic honey, and rich coconut yogurt.",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
            category: "Breakfast"
        },
        {
            id: 4,
            name: "Ceylon Spiced Coffee",
            price: "$6",
            description: "Premium hill-country Arabica coffee slow-brewed with a hint of Ceylon cinnamon and cardamom.",
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
            category: "Beverage"
        },
        {
            id: 5,
            name: "Sunset Coconut Cocktail",
            price: "$12",
            description: "A refreshing blend of local Arrack, king coconut water, fresh lime, and a dash of tropical bitters.",
            image: "https://thumbs.dreamstime.com/b/refreshing-summer-cocktail-coconut-shell-garnished-tropical-fruit-sunset-beach-enjoy-vibrant-served-ice-372582364.jpg",
            category: "Drinks"
        },
        {
            id: 6,
            name: "Watalappan Delight",
            price: "$9",
            description: "Traditional Sri Lankan coastal dessert made from coconut milk, cashew nuts, egg, jaggery, and vibrant spices.",
            image: "https://www.milkmaid.lk/sites/default/files/styles/large/public/2024-03/Watalappan-image-WS-%287%29.jpg?itok=S575GkS_",
            category: "Dessert"
        }
    ];

    return (
        <section id="menu" className="py-24 md:py-32 bg-[var(--color-sandy-beige)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[var(--color-sunset-gold)] font-medium font-medium tracking-widest uppercase text-sm mb-4 block">
                        Signature Flavors
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] text-[var(--color-coconut-brown)]">
                        A Taste of the Tropics
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[var(--color-coconut-brown)]">
                                    {item.price}
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-sunset-gold)] mb-3 block">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-[var(--font-heading)] text-[var(--color-deep-ocean)] mb-3">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 font-light text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a
                        href="#reservation"
                        className="inline-block border-2 border-[var(--color-coconut-brown)] text-[var(--color-coconut-brown)] px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-coconut-brown)] hover:text-white transition-colors duration-300"
                    >
                        Explore Full Menu
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MenuSection;
