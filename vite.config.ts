// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler'] ],
//       },
//     }),
//   ],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 1. Plugin React
    react(),

    // 2. Plugin Tailwind
    // Tempatkan di sini (sebagai plugin Vite), BUKAN di dalam 'babel'.
    tailwindcss(),
  ],
})