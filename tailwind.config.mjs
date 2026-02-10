/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0E0E0E",
        antracita: "#1C1C1C",
        roto: "#F5F5F5",
        suave: "#9A9A9A"
      }
    }
  },
  plugins: []
};
