/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A2463",
        navyMid: "#173A8C",
        navyLight: "#3567C9",
        accent: "#2E6BE6",
        sky: "#A9C5F5",
        sage: "#D5E0F5",
        sageLight: "#EEF3FC",
        amber: "#D4A017",
        amberSoft: "#FBF3DE",
        ink: "#0E1726",
        muted: "#6B7689",
        bg: "#F4F7FC",
        bgDeep: "#051236",
        success: "#16A34A",
        bordr: "#E4EAF4",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["'Hanken Grotesk'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(10,36,99,0.18)",
        soft: "0 4px 14px -6px rgba(10,36,99,0.16)",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        floatUp: "floatUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        pulseRing: "pulseRing 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
