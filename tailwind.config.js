import fluid, { extract } from "fluid-tailwind";
export default {
  content: { files: ["./src/**/*.{jsx,tsx,ts,js}"], extract },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: ["23.4375rem", "90rem"],
    }),
    extend: {
      colors: {
        darkViolet: "#2D0C47",
        grayishBlue: "#9698A6",
        veryDarkViolet: "#1D1B29",
        darkGrayishViolet: "#6D6875",
        veryLightGray: "#FAFAFA",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        DM: ["DM Serif Display", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
};
