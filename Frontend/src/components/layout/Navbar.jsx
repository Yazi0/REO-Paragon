import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Experience', href: '#experience' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/40 backdrop-blur-xl font-medium shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/30 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className={`text-4xl tracking-wider ${isScrolled ? 'text-[var(--color-sunset-gold)]' : 'text-white'} transition-colors duration-300`} style={{ fontFamily: "'Algerian', serif" }}>
                            REO PARAGON
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[var(--color-sunset-gold)] ${isScrolled ? 'text-[var(--color-deep-ocean)]' : 'text-white/90'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#reservation"
                            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${isScrolled
                                ? 'bg-[var(--color-coconut-brown)] text-white hover:bg-[var(--color-deep-ocean)]'
                                : 'bg-white text-[var(--color-coconut-brown)] hover:bg-white/90'
                                }`}
                        >
                            Reserve a Table
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={isScrolled ? 'text-[var(--color-coconut-brown)]' : 'text-white'}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-[var(--color-deep-ocean)] font-medium tracking-wide border-b border-gray-100 uppercase text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#reservation"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center mt-6 px-6 py-3 bg-[var(--color-coconut-brown)] text-white rounded-full font-medium uppercase text-sm"
                    >
                        Reserve a Table
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
