import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})


// npm install react-icons --save 
// this to install icons

// https://react-icons.github.io/react-icons/
// here are the icons
// search for your desired icon.
// include the import link in the correct jsx file
// then include the component wherever you need