import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {},
    plugins: [],
    safelist: [
        "bg-blue-200",
        "bg-yellow-200",
        "bg-orange-200",
        "text-blue-200",
        "text-yellow-200",
        "text-orange-200",
    ],
};
export default config;
