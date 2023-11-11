import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
// import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://t2del.github.io/fhg/',
    base: '/fhg/',
    // output: 'server',
    // adapter: nodejs(),
    integrations: [
        partytown({
          // Adds dataLayer.push as a forwarding-event.
          config: {
            forward: ["dataLayer.push"],
          },
        }),
      ],
});
