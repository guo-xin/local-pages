## vscode 配置

**新版 vscode 默认不会展示代码冲突选项，需设置"git.mergeEditor": false**

```
{
    "editor.fontSize": 18,
    "workbench.colorTheme": "One Dark Pro",
    "workbench.colorCustomizations": {
        "titleBar.activeForeground": "#fff",
        "titleBar.activeBackground": "#ff009d",
        "tab.activeBackground": "#a200ff",
        "breadcrumb.foreground": "#ff009d",
        "list.activeSelectionBackground": "#a200ff",
        "list.inactiveSelectionBackground": "#a200ff",
        "list.hoverBackground": "#ff009d"
    },
    "window.zoomLevel": 0,
    "files.autoSave": "afterDelay",
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "prettier.tabWidth": 4,
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "terminal.integrated.fontSize": 16,
    "editor.formatOnPaste": true,
    "editor.hover.delay": 500,
    "workbench.startupEditor": "newUntitledFile",
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "window.openFilesInNewWindow": "on",
    "window.openFoldersInNewWindow": "on",
    "window.newWindowDimensions": "maximized",
    "editor.tokenColorCustomizations": {
        "comments": "#4a9c4a", // 注释
    },
    "editor.snippetSuggestions": "top",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "workbench.iconTheme": "vscode-icons",
    "explorer.confirmDelete": false,
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.updateImportsOnFileMove.enabled": "never",
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[wxml]": {
        "editor.defaultFormatter": "qiu8310.minapp-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "eslint.codeAction.showDocumentation": {

        "enable": true
    },
    "[less]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "stylelint.config": {},
    "explorer.compactFolders": false,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "terminal.integrated.tabs.location": "left",
    "terminal.integrated.tabs.enabled": false,
    "vetur.ignoreProjectWarning": true,
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.minimap.enabled": false,
    "editor.tabSize": 2,
    "git.mergeEditor": false
}
```

## [相关插件](https://juejin.im/post/5ad13d8a6fb9a028ce7c0721)

1. git 历史提交提示-GitLens — Git supercharged
2. eslint-js 代码格式校验
3. Stylelint-css 代码格式
4. Auto Close Tag-html 标签自动补全
5. Auto Rename Tag-重命名 html 标签自动补全
6. Code Spell Checker-单词拼写校验
7. IntelliJ IDEA Keybindings-设置成 webstorm 快捷键
8. JavaScript (ES6) code snippets-es6 语法提示
9. One Dark Pro-vscode 主题
10. Prettier - Code formatter-代码格式化
11. Vetur-vue 语法高亮
12. vscode-icons-vscode 文件图标
13. Vue 3 Snippets-vue 语法提示
14. Auto Rename Tag-小程序语法高亮
15. @types/minapp-env-微信 api 提示

## 自定义注释

```
"Print to des": {
    "prefix": "des",
    "body": [
      "/**",
      " * @desc: ",
      " */",
      "$1"
    ],
    "description": ""
  },
  "Print to desc": {
    "prefix": "desc",
    "body": [
      "/**",
      " * @desc: ",
      " * @params ",
      " */",
      "$1"
    ],
    "description": ""
  },
  "Print to descs": {
    "prefix": "descs",
    "body": [
      "/**",
      " * @desc: ",
      " * @author guoxin",
      " * @date ${CURRENT_YEAR}/${CURRENT_MONTH}/${CURRENT_DATE}",
      " */",
      "$1"
    ],
    "description": ""
  }
```

## [主题](https://blog.csdn.net/dscn15848078969/article/details/107578108)