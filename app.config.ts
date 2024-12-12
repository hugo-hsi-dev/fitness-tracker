// app.config.ts
import { defineConfig } from '@tanstack/start/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const ReactCompilerConfig = {
  target: '19',
};

export default defineConfig({
  react: {
    babel: { plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]] },
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
