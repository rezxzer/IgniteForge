"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const t = useTranslations("common");
    const locale = useLocale();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Page not found</p>
            <Link href={`/${locale}`}>
                <Button>{t("getStarted")}</Button>
            </Link>
        </div>
    );
}

