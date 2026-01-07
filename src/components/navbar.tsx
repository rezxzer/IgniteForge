"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Sparkles, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations("common");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const switchLocale = (newLocale: string) => {
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
    };

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span>{t("appName")}</span>
                </Link>

                <div className="flex items-center gap-2">
                    <Link href={`/${locale}/dashboard`}>
                        <Button variant="ghost">{t("dashboard")}</Button>
                    </Link>
                    <Link href={`/${locale}/templates`}>
                        <Button variant="ghost">{t("templates")}</Button>
                    </Link>

                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Change language">
                                <Languages className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => switchLocale("en")}
                                className={locale === "en" ? "bg-accent" : ""}
                            >
                                English
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => switchLocale("ru")}
                                className={locale === "ru" ? "bg-accent" : ""}
                            >
                                Русский
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                    )}

                    <Link href={`/${locale}/dashboard`}>
                        <Button>{t("getStarted")}</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

