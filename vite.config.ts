// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler'],tailwindcss(), ], 
//       },
//     }),
//   ],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     // 1. Plugin React
//     react(),

//     // 2. Plugin Tailwind
//     // Tempatkan di sini (sebagai plugin Vite), BUKAN di dalam 'babel'.
//     tailwindcss(),
//   ],
// })



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     // 1. Plugin React
//     react({
//       // AKTIFKAN BARIS INI:
//       // Ini memberi tahu Vite untuk menggunakan React Compiler
//       // (yang sudah Anda install)
//       compiler: true,
//     }),

//     // 2. Plugin Tailwind
//     tailwindcss(),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.config/
export default defineConfig({
  plugins: [
    // 1. Plugin React
    react({
      // Tambahkan baris ini untuk mengaktifkan React Compiler
      compiler: true, 
    }),

    // 2. Plugin Tailwind
    tailwindcss(),
  ],
})

