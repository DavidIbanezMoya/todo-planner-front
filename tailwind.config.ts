import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function({ addUtilities}: {addUtilities: (utils: Record<string, Record<string, string>>) => void }) {
        addUtilities({
            ".clip-diagonal": {
                clipPath: "polygon(0 0, 100% 0, 100% 70, 0% 100%)",
            },
        });
    }

  ],
};
export default config;