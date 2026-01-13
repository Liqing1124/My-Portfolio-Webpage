"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Home, User, Mail, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();

    const links = [
        { name: t("nav.home"), icon: Home, href: "#" },
        { name: t("nav.about"), icon: User, href: "#about" },
        { name: t("nav.skills"), icon: Cpu, href: "#skills" },
        { name: t("nav.projects"), icon: Code, href: "#projects" },
        { name: t("nav.contact"), icon: Mail, href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4"
        >
            <div className="glass-nav rounded-full px-8 py-3 flex items-center gap-6 shadow-lg shadow-purple-500/10 backdrop-blur-md">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex flex-col items-center gap-1 group"
                    >
                        <div className="relative p-2 rounded-full transition-all duration-300 group-hover:bg-purple-500/10 group-hover:text-purple-500 text-gray-500">
                            <link.icon size={20} />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {link.name}
                            </span>
                        </div>
                    </a>
                ))}

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                        className="p-2 rounded-full hover:bg-purple-500/10 text-gray-500 hover:text-purple-500 transition-all duration-300 font-bold text-sm min-w-[34px]"
                        aria-label="Toggle Language"
                    >
                        {language.toUpperCase()}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
