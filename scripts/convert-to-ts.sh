#!/bin/bash

# 确保脚本在错误时退出
set -e

# 处理每个包
for package in packages/*; do
  if [ -d "$package" ]; then
    echo "处理包: $package"

    # 创建 tsconfig.json
    cat > "$package/tsconfig.json" << EOF
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "."
  },
  "include": ["./**/*.ts"]
}
EOF

    # 将 index.js 转换为 index.ts
    if [ -f "$package/index.js" ]; then
      echo "  转换 index.js 到 index.ts"
      mv "$package/index.js" "$package/index.ts"
    fi

    # 更新 package.json
    echo "  更新 package.json"
    # 添加 TypeScript 相关配置
    # 注意: 这里使用简单文本处理，实际情况可能需要更复杂的 JSON 处理
    packageJson="$package/package.json"

    # 使用 node 进行 JSON 处理
    node -e "
      const fs = require('fs');
      const path = require('path');
      const packageJson = JSON.parse(fs.readFileSync('$packageJson', 'utf8'));

      // 更新文件类型
      if (packageJson.type !== 'module') {
        packageJson.type = 'module';
      }

      // 添加 TypeScript 相关字段
      packageJson.main = 'dist/index.js';
      packageJson.types = 'dist/index.d.ts';
      packageJson.files = packageJson.files || [];
      if (!packageJson.files.includes('dist')) {
        packageJson.files.push('dist');
      }

      // 添加构建脚本
      packageJson.scripts = packageJson.scripts || {};
      packageJson.scripts.build = 'tsup';
      packageJson.scripts.dev = 'tsup --watch';

      // 写入文件
      fs.writeFileSync('$packageJson', JSON.stringify(packageJson, null, 2) + '\\n');
    "

    # 创建 tsup.config.ts
    cat > "$package/tsup.config.ts" << EOF
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
});
EOF
  fi
done

echo "所有包已转换为 TypeScript!"
