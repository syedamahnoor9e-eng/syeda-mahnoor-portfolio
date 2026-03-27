const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a0b2e]/70 backdrop-blur-lg border-b border-white/5">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                {/* LOGO */}
                <a href="#home" className="text-xl font-bold tracking-tighter text-white transition hover:text-purple-400">
                    Mahnoor<span className="text-purple-500">.</span>
                </a>

                {/* LINKS */}
                <div className="flex items-center gap-8 text-sm font-medium">
                    {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-slate-400 transition duration-300 hover:text-white relative group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;