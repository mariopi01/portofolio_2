// // import type { Config } from 'tailwindcss'

// // export default {
// //   // Array 'content' ini adalah bagian yang paling penting.
// //   // Ini memberitahu Tailwind untuk memindai semua file .ts, .tsx, dan .html
// //   // di dalam folder 'src' dan juga file index.html utama.
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       // Nanti, Anda harus menambahkan warna kustom 'primary' Anda di sini
// //       // agar `bg-primary` berfungsi. Contoh:
// //       // colors: {
// //       //   primary: '#4F46E5', // Ganti dengan kode hex warna Anda
// //       // }
// //     },
// //   },
// //   plugins: [],
// // } satisfies Config


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#3b82f6',
//         secondary: '#60a5fa',
//         darkBg: '#1f2937',
//         lightBg: '#f9fafb',
//         darkText: '#111827',
//         lightText: '#f9fafb',
//       },
//       fontFamily: {
//         display: ['Mulish', 'sans-serif'],
//         body: ['Raleway', 'sans-serif'],
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in-up": "fade-in-up 0.6s ease-out",
//         "slide-in-left": "slide-in-left 0.6s ease-out",
//         "slide-in-right": "slide-in-right 0.6s ease-out",
//         "scale-in": "scale-in 0.5s ease-out",
//         "stagger-fade-in": "stagger-fade-in 0.8s ease-out forwards",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         "fade-in-up": {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "slide-in-left": {
//           "0%": { opacity: "0", transform: "translateX(-20px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "slide-in-right": {
//           "0%": { opacity: "0", transform: "translateX(20px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "scale-in": {
//           "0%": { opacity: "0", transform: "scale(0.9)" },
//           "100%": { opacity: "1", transform: "scale(1)" },
//         },
//         "stagger-fade-in": {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };


import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate' // 1. Impor plugin di sini

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#60a5fa',
        darkBg: '#1f2937',
        lightBg: '#f9fafb',
        darkText: '#111827',
        lightText: '#f9fafb',
      },
      fontFamily: {
        // Ini akan mengambil font dari `src/index.css`
        display: ['Mulish', 'sans-serif'], 
        body: ['Raleway', 'sans-serif'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "stagger-fade-in": "stagger-fade-in 0.8s ease-out forwards",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "stagger-fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  // 2. Gunakan variabel yang sudah diimpor di sini
  plugins: [tailwindcssAnimate],
} satisfies Config // `satisfies Config` memberikan autocomplete yang lebih baik
