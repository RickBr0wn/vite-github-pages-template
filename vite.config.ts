import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	// edit `base` with the name of the repo to be hosted on gh-pages
	base: '/vite-github-pages-template/',
	plugins: [react()]
})
