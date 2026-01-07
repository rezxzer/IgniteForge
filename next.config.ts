import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
    /* config options here */
    // Allow cross-origin requests in development
    allowedDevOrigins: ["192.168.1.13:3000"],
};

export default withNextIntl(nextConfig);

