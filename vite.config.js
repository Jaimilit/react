import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allow access from external URLs
    port: 8000, // Set your desired port
    strictPort: true, // Ensure it always uses this port
    allowedHosts: ['8000-jaimilit-react-t64qicdpsuy.ws-eu118.gitpod.io'] // Add your Gitpod URL
  },
  preview: {
    port: 8000, // Also set 8000 for preview mode
    allowedHosts: [
      "8000-jaimilit-react-t64qicdpsuy.ws-eu118.gitpod.io" // Your Gitpod URL
    ]
  }
});