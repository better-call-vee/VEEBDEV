/*
npm install tailwindcss @tailwindcss/vite 
- this to install tailwindcss on the main directory

vite.config.js 
adding the following line at import:
import tailwindcss from '@tailwindcss/vite'

adding tailwindcss() in the plugins:
export default defineConfig({
  plugins: [ 
    react(),
    tailwindcss()
  ],
})



in index.css, write:
@import "tailwindcss";


now daisyUI:
npm i -D daisyui@latest 
- this to install daisyUI on the main directory

in index.css, write:
@plugin "daisyui";



https://react-icons.github.io/react-icons/
npm install react-icons --save 
- to install

then just search the icon you need.
click on it.
copy the import line
then just simply take the component and use <"icon_name"/>
you can use props in it, like <IoLogoWhatsapp size={25} />


https://github.com/programming-hero-web-course1/b11a7-auction-gallery-better-call-vee
react-toastify. notification 
 */