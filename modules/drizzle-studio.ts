import { addCustomTab, startSubprocess } from '@nuxt/devtools-kit';
import { defineNuxtModule } from 'nuxt/kit';
export default defineNuxtModule({
  meta: {
    name: 'drizzle-studio',
  },
  setup() {
    addCustomTab({
      name: 'drizzle-studio',
      title: 'Drizzle Studio',
      icon: 'simple-icons:drizzle',
      view: {
        type: 'iframe',
        src: 'https://local.drizzle.studio',
      },
    });

    startSubprocess(
      {
        command: 'pnpm drizzle-kit studio',
      },
      {
        id: 'devtools:studio',
        name: 'Drizzle-Kit Studio',
      }
    );
  },
});
