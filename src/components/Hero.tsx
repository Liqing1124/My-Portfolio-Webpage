"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/40 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/40 blur-[120px]" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-cyan-900/20 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-sm mb-6"
                >
                    <Sparkles size={14} />
                    <span>{t("hero.badge")}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-700 to-purple-500 dark:from-white dark:via-purple-200 dark:to-purple-400 mb-6 glow-text tracking-tight pb-2"
                >
                    {t("hero.title")} <br /> {t("hero.subtitle")}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {t("hero.description")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                        {t("hero.viewProjects")} <ArrowRight size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        {t("hero.contactMe")}
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
