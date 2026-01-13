"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert("Message sent! (Simulation)");
    };

    return (
        <section id="contact" className="py-12 relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            {t("contact.lets")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{t("contact.connect")}</span>
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            {t("contact.text")}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600 mt-1">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t("contact.email")}</h3>
                                    <p className="text-gray-600">chinhle6030@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600 mt-1">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t("contact.location")}</h3>
                                    <p className="text-gray-600">Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.name")}</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    placeholder={t("contact.placeholder.name")}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")}</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                    placeholder={t("contact.placeholder.email")}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.message")}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder={t("contact.placeholder.message")}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                {t("contact.form.send")} <Send size={20} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
