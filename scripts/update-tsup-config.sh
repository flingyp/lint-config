#!/bin/bash

# 更新所有包的 tsup.config.ts
for package in packages/*; do
  if [ -d "$package" ]; then
    echo "更新 tsup 配置: $package"

    cat > "$package/tsup.config.ts" << EOF
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm'], // 只使用 ESM 格式
  dts: true,
  clean: true,
  target: 'es2020',
});
EOF
  fi
done

echo "所有 tsup 配置已更新!"
