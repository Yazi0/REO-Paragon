import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-coconut-brown)] text-[var(--color-sandy-beige)] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand/Logo Column */}
                    <div className="lg:col-span-1 border-b md:border-b-0 border-white/10 pb-10 md:pb-0">
                        <a href="#" className="font-[var(--font-heading)] text-3xl font-bold tracking-wider text-white mb-6 inline-block">
                            REO PARAGON
                        </a>
                        <p className="text-white/60 font-light text-sm leading-relaxed mb-8 max-w-sm">
                            Discover the soul of REO Paragon through fresh elegant flavors, tropical cocktails, and an unforgettable experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white uppercase tracking-widest text-sm mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Menu', 'Gallery', 'Reservations', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-[var(--color-sunset-gold)] font-light text-sm transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="font-semibold text-white uppercase tracking-widest text-sm mb-6">Visit</h4>
                        <ul className="space-y-4 text-white/60 font-light text-sm">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Mon - Thu</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Fri - Sun</span>
                                <span>8:00 AM - 11:30 PM</span>
                            </li>
                            <li className="flex justify-between pt-2">
                                <span className="text-[var(--color-sunset-gold)]">Happy Hour Daily</span>
                                <span className="text-[var(--color-sunset-gold)]">5:00 PM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Connect */}
                    <div>
                        <h4 className="font-semibold text-white uppercase tracking-widest text-sm mb-6">Stay Connected</h4>
                        <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                            Subscribe to receive exclusive offers and updates on special events.
                        </p>
                        <form className="flex border border-white/20 rounded-full overflow-hidden focus-within:border-[var(--color-sunset-gold)] focus-within:ring-1 focus-within:ring-[var(--color-sunset-gold)] transition-all">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none text-white px-6 py-3 w-full text-sm font-light focus:outline-none placeholder:text-white/30"
                            />
                            <button
                                type="submit"
                                className="bg-[var(--color-sunset-gold)] text-white px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#b08022] transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs font-light text-center md:text-left">
                        &copy; {new Date().getFullYear()} REO Paragon. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-white/40 text-xs font-light">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
