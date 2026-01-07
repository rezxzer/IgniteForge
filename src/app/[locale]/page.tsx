"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Sparkles, Zap, Globe, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
    const t = useTranslations();

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-medium">{t("hero.badge")}</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            {t("hero.title")}
                            <br />
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                {t("hero.titleHighlight")}
                            </span>
                            <br />
                            instantly.
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t("hero.subtitle")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link href="/dashboard">
                                <Button size="lg" className="text-lg px-8">
                                    <Rocket className="mr-2 h-5 w-5" />
                                    {t("hero.ctaPrimary")}
                                </Button>
                            </Link>
                            <Link href="/templates">
                                <Button size="lg" variant="outline" className="text-lg px-8">
                                    {t("hero.ctaSecondary")}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 py-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t("features.title")}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t("features.subtitle")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Zap,
                                key: "lightningFast",
                            },
                            {
                                icon: Globe,
                                key: "bilingual",
                            },
                            {
                                icon: Code,
                                key: "beautifulUI",
                            },
                            {
                                icon: Sparkles,
                                key: "freeUnlimited",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {t(`features.${feature.key}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {t(`features.${feature.key}.description`)}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

