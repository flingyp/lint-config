import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm'], // 只使用 ESM 格式
  dts: true,
  clean: true,
  target: 'es2020',
});
