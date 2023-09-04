/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      jbExtrabolditalic: ["JetBrainsMono-ExtraBoldItalic", "mono"],
      jbExtrabold: ["JetBrainsMono-ExtraBold", "mono"],
      jbBold: ["JetBrainsMono-Bold", "mono"],
      jbMedium: ["JetBrainsMono-Medium", "mono"],
      jbRegular: ["JetBrainsMono-Regular", "mono"],
    },
  },
  plugins: [],
};
