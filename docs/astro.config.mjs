import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.coursebuilder.dev/',
  integrations: [starlight({
    title: 'Course Builder',
    logo: {
      src: './src/assets/badass.svg',
      replacesTitle: true,
    },
    editLink: {
      baseUrl: 'https://github.com/joelhooks/course-builder/edit/main/docs/',
    },
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en',
      }
    },
    social: {
      github: 'https://github.com/joelhooks/course-builder',
      'x.com': 'https://x.com/badass_courses',
    },
    customCss: [
      // Path to your Tailwind base styles:
      './src/tailwind.css',
    ],
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })]
});