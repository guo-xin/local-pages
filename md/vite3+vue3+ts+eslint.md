## 1. 创建项目

```
yarn create vite vue3-vite-ts --template
yarn create vite project-name --template vue-ts
```

## 2. 项目配置

```
// 设置别名
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> yarn add @types/node -D
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}

// tsconfig.json增加
"baseUrl": "./",
"paths": {
  "@/*": ["src/*"]
}
```

## 3. 样式配置

```
// css 预处理器
yarn add sass-loader -D
yarn add dart-sass -D
yarn add sass -D

// 全局样式文件
src/styles/index.scss

// config配置
css:{
  preprocessorOptions:{
    scss:{
      additionalData:'@import "@/styles/index.scss";'
    }
  }
}

// 页面使用
.card {
  color: blue;
}
```

## 4. eslint配置
```
// 初始化 eslint 配置
npx eslint --init

// package.json 文件
"lint": "eslint src --ext .js,.ts,.vue --cache --fix"

// .eslintrc.cjs 文件
parser: 'vue-eslint-parser',
parserOptions.parser: '@typescript-eslint/parser'
```

## 5. prettier 配置
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
// eslint-config-prettier 关闭 eslint 可能与 prettier 冲突的规则
// eslint-plugin-prettier 使用 prettier 代替 eslint 格式化

// package.json
"prettier": "prettier --write ."

// .eslintrc.cjs
extends和plugins增加prettier
```

## 6. husky+lint-staged配置
```
// 先安装 mrm
yarn add mrm -D
// 安装 lint-staged 会自动把 husky 安装
npx mrm lint-staged -D

// package.json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx,vue,ts,tsx}": [
    "yarn lint",
    "prettier --write",
    "git add"
  ]
}
```

