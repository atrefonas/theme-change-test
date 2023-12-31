import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      "dark", "cmyk", "cupcake",
      {
        mytheme: {
          "primary": "#ff0000",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
        dark: {
          "primary": "#004400",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
        pink: {
          "primary": "#0044FF",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
  
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          // "primary": "#FF4400",
          // "secondary": "#f6d860",
          // "accent": "#37cdbe",
          // "neutral": "#3d4451",
          // "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
