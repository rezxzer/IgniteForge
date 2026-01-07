"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export function Footer() {
    const t = useTranslations("common");
    const tFooter = useTranslations("footer");
    const locale = useLocale();

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-2">
                        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-lg">
                            <Sparkles className="h-5 w-5 text-primary" />
                            <span>{t("appName")}</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            {tFooter("description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{tFooter("product")}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href={`/${locale}/features`} className="hover:text-foreground">
                                    {t("features")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/templates`} className="hover:text-foreground">
                                    {t("templates")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{tFooter("resources")}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href={`/${locale}/docs`} className="hover:text-foreground">
                                    {t("documentation")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/blog`} className="hover:text-foreground">
                                    {t("blog")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/support`} className="hover:text-foreground">
                                    {t("support")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{tFooter("legal")}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href={`/${locale}/privacy`} className="hover:text-foreground">
                                    {t("privacy")}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/terms`} className="hover:text-foreground">
                                    {t("terms")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {t("appName")}. {tFooter("copyright")}</p>
                </div>
            </div>
        </footer>
    );
}

