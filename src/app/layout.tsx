import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IgniteForge - AI-Powered Web App Builder",
    description: "Ignite your ideas. Create beautiful apps instantly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

