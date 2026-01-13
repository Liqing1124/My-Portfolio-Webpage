"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t("about.title")} <span className="text-purple-600 dark:text-purple-400">{t("about.developer")}</span></h2>
                    <p className="text-lg text-gray-600 dark:text-gray-200 mb-8 leading-relaxed">
                        {t("about.description")}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">&lt; 1</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t("about.yearsExp")}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">5+</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t("about.projectsCompleted")}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400">Java</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t("about.coreSkill")}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-400">C#</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t("about.coreSkill")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
