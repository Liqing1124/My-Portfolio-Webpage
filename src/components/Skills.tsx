"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Layout, Terminal, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        {
            category: t("skills.cat.languages"),
            items: [
                t("skills.item.java"),
                t("skills.item.csharp"),
                t("skills.item.htmlcss"),
            ],
            icon: Code,
        },
        {
            category: t("skills.cat.database"),
            items: [
                t("skills.item.mysql"),
                t("skills.item.mssql"),
            ],
            icon: Database,
        },
        {
            category: t("skills.cat.frameworks"),
            items: [
                t("skills.item.springboot"),
                t("skills.item.winforms"),
            ],
            icon: Cpu, // Changed icon to fit frameworks better or reuse Cpu/Server
        },
        {
            category: t("skills.cat.tools"),
            items: [
                t("skills.item.restapi"),
                t("skills.item.git"),
                t("skills.item.vscode"),
                t("skills.item.antigravity"),
            ],
            icon: Terminal,
        },
        {
            category: t("skills.cat.others"),
            items: [
                t("skills.item.aicoding"),
                t("skills.item.ocr"),
            ],
            icon: Layout, // Generic icon for others
        },
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
                >
                    {t("skills.technical")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{t("skills.title")}</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-xl hover:shadow-purple-500/5 transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                    <skillGroup.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300 hover:border-purple-500/20 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
