import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/94770000000"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            {/* Decorative pulse ring */}
            <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-60 pointer-events-none"></span>
            <MessageCircle className="w-7 h-7 relative z-10" />
        </a>
    );
};

export default FloatingWhatsApp;
