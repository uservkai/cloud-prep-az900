/* eslint-disable prettier/prettier */

// Lovable's configuration already includes TanStack Start,
// React, Tailwind CSS, and Nitro. Do not add these plugins again.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  // Use the Vercel deployment target on Vercel.
  // Keep the existing build target elsewhere.
  nitro: isVercel ? { preset: "vercel" } : true,
});