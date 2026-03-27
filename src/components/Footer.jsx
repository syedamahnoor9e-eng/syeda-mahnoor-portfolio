import { Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative mt-32 border-t border-white/10 bg-[#0a0a0a]">
            {/* 🌌 Atmospheric Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.03),transparent_50%)] top-0" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">

                    {/* 🆔 Brand Identity */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                            Syeda Mahnoor<span className="text-purple-500">.</span>
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                            Software Engineer specializing in building scalable MERN stack applications and high-performance digital solutions.
                        </p>
                    </div>

                    {/* 🔗 Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">Navigation</h4>
                        <div className="flex flex-col gap-2.5">
                            {["About", "Tech Stack", "Projects", "Experience", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 📡 Social & Status */}
                    <div className="space-y-6 flex flex-col items-center md:items-end">
                        <div className="flex gap-5">
                            {[
                                { icon: <Github size={20} />, href: "#" },
                                { icon: <Linkedin size={20} />, href: "#" },
                                { icon: <Mail size={20} />, href: "mailto:your@email.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* System Status - A nice "Software Engineer" touch */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-mono text-green-500/80 uppercase tracking-widest">System Online</span>
                        </div>
                    </div>
                </div>

                {/* 📜 Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                        © {new Date().getFullYear()} Syeda Mahnoor. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-purple-400 transition-colors"
                    >
                        Back to Top
                        <ArrowUpCircle size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;