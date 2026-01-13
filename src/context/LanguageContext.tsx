"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    vi: {
        // Navbar
        "nav.home": "Trang Chủ",
        "nav.about": "Giới Thiệu",
        "nav.skills": "Kỹ Năng",
        "nav.projects": "Dự Án",
        "nav.contact": "Liên Hệ",

        // Hero
        "hero.badge": "Sẵn Sàng Đổi Mới",
        "hero.title": "Kỹ Sư Phần Mềm",
        "hero.subtitle": "Tương Lai",
        "hero.description": "Sinh viên mới tốt nghiệp với nền tảng vững chắc về Java và C#. Tôi xây dựng các giải pháp hiệu quả, có khả năng mở rộng và mong muốn đóng góp vào các dự án có ý nghĩa.",
        "hero.viewProjects": "Xem Dự Án",
        "hero.contactMe": "Liên Hệ Với Tôi",

        // About
        "about.title": "Về",
        "about.developer": "Lập Trình Viên",
        "about.description": "Tôi là một sinh viên mới tốt nghiệp đam mê phát triển phần mềm, đặc biệt là Java và C#. Tôi đang tích cực tìm kiếm cơ hội để áp dụng kỹ năng của mình vào việc xây dựng các ứng dụng mạnh mẽ. Trọng tâm của tôi là viết mã sạch, hiệu quả và liên tục học hỏi công nghệ mới.",
        "about.yearsExp": "Năm Kinh Nghiệm",
        "about.projectsCompleted": "Dự Án Hoàn Thành",
        "about.coreSkill": "Kỹ Năng Cốt Lõi",

        // Skills
        "skills.title": "Kỹ Năng",
        "skills.technical": "Chuyên Môn",

        // Skill Categories & Items
        "skills.cat.languages": "Ngôn ngữ",
        "skills.cat.database": "Cơ sở dữ liệu",
        "skills.cat.frameworks": "Frameworks",
        "skills.cat.tools": "Công cụ và công nghệ",
        "skills.cat.others": "Khác",

        // Skill Items (Text that needs translation if any, most are proper nouns)
        "skills.item.java": "Java",
        "skills.item.csharp": "C#",
        "skills.item.htmlcss": "HTML & CSS",
        "skills.item.mysql": "MySQL",
        "skills.item.mssql": "MS SQL Server",
        "skills.item.springboot": "Spring boot",
        "skills.item.winforms": "Winforms",
        "skills.item.restapi": "RESTful APIs",
        "skills.item.git": "Git",
        "skills.item.vscode": "Visual Studio Code",
        "skills.item.antigravity": "Antigravity",
        "skills.item.aicoding": "AI coding",

        // Projects
        "projects.title": "Dự Án",
        "projects.featured": "Nổi Bật",
        "projects.viewCode": "Xem Code",
        "projects.liveDemo": "Demo Trực Tiếp",

        // Contact
        "contact.title": "Liên Hệ",
        "contact.getInTouch": "Kết Nối",
        "contact.text": "Tôi luôn mở lòng với những cơ hội mới. Hãy liên hệ qua email hoặc mạng xã hội.",
        "contact.email": "Email",
        "contact.facebook": "Facebook",
        "contact.btn": "Gửi Tin Nhắn",
        "contact.lets": "Hãy",
        "contact.connect": "Kết Nối",
        "contact.location": "Địa Chỉ",
        "contact.form.name": "Tên",
        "contact.form.email": "Email",
        "contact.form.message": "Tin Nhắn",
        "contact.form.send": "Gửi Tin Nhắn",
        "contact.placeholder.name": "Tên của bạn",
        "contact.placeholder.email": "email@cua.ban",
        "contact.placeholder.message": "Hãy kể về dự án của bạn...",
    },
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero
        "hero.badge": "Ready to Innovate",
        "hero.title": "Aspiring Software",
        "hero.subtitle": "Engineer",
        "hero.description": "Fresh graduate with a strong foundation in Java and C#. I build efficient, scalable solutions and am eager to contribute to impactful projects.",
        "hero.viewProjects": "View Projects",
        "hero.contactMe": "Contact Me",

        // About
        "about.title": "About the",
        "about.developer": "Developer",
        "about.description": "I'm a recent graduate passionate about software development, specifically in Java and C#. I am actively seeking opportunities to apply my skills in building robust applications. My focus is on writing clean, efficient code and continuously learning new technologies.",
        "about.yearsExp": "Year Experience",
        "about.projectsCompleted": "Projects Completed",
        "about.coreSkill": "Core Skill",

        // Skills
        "skills.title": "Technical",
        "skills.technical": "Skills",

        // Skill Categories & Items
        "skills.cat.languages": "Languages",
        "skills.cat.database": "Databases",
        "skills.cat.frameworks": "Frameworks",
        "skills.cat.tools": "Tools & Technologies",
        "skills.cat.others": "Others",

        // Skill Items
        "skills.item.java": "Java",
        "skills.item.csharp": "C#",
        "skills.item.htmlcss": "HTML & CSS",
        "skills.item.mysql": "MySQL",
        "skills.item.mssql": "MS SQL Server",
        "skills.item.springboot": "Spring boot",
        "skills.item.winforms": "Winforms",
        "skills.item.restapi": "RESTful APIs",
        "skills.item.git": "Git",
        "skills.item.vscode": "Visual Studio Code",
        "skills.item.antigravity": "Antigravity",
        "skills.item.aicoding": "AI coding",

        // Projects
        "projects.title": "Featured",
        "projects.featured": "Projects",
        "projects.viewCode": "View Code",
        "projects.liveDemo": "Live Demo",

        // Contact
        "contact.title": "Get in",
        "contact.getInTouch": "Touch",
        "contact.text": "I'm always open to new opportunities. Reach out via email or social media.",
        "contact.email": "Email",
        "contact.facebook": "Facebook",
        "contact.btn": "Send Message",
        "contact.lets": "Let's",
        "contact.connect": "Connect",
        "contact.location": "Location",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message",
        "contact.placeholder.name": "Your Name",
        "contact.placeholder.email": "your@email.com",
        "contact.placeholder.message": "Tell me about your project...",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>("vi");

    // Optional: Persist language (simple implementation)
    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string) => {
        const keys = key.split(".");
        let value: any = translations[language];

        // Simple flat lookup for now as keys are "nav.home"
        if (value[key]) return value[key];

        // Fallback if key missing
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
