import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    assetsDir: 'static',
  },
  publicDir: 'static',
  plugins: [
    VitePWA({
      strategies: 'generateSW',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Learn Vite',
        short_name: 'Learn Vite',
        description: 'Simple App build With Vite',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
