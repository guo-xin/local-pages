# iTerm配置

## 1. [下载iTerm](https://iterm2.com/index.html)
## 2. on my zsh
```
// 安装
# via curl
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# via wget
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

// 或者
# 下载 oh-my-zsh 源码
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
# 并且把 .zshrc 配置文件拷贝到根目录下
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
# 让 .zshrc 配置文件生效
source ~/.zshrc

```
**.zshrc这个文件非常关键，是 oh-my-zsh 的配置文件，它的位置在根目录下，可以通过 vim ~/.zshrc 查看。每一次修改它之后，如果想要立即生效需要手动执行 source ~/.zshrc。**

## 3. 修改配色方案
打开 .zshrc，就可以看到关于配色方案的配置：
```
ZSH_THEME="af-magic"
```

oh-my-zsh 提供了很多内置的配色方案，可以通过命令来查看:
```
ls ~/.oh-my-zsh/themes
```
也可以打开 👉https://github.com/ohmyzsh/ohmyzsh/wiki/Themes 更为直观的查看所有的配色方案。

只要修改 ZSH_THEME 的值就可以设置对应的配色方案了。

## 4. 自动补全插件-zsh-autosuggestions

1. 把插件仓库克隆到plugins (~/.oh-my-zsh/plugins)
```
// 使用https
git clone https://github.com/zsh-users/zsh-autosuggestions.git
```
2. 设置~/.zshrc，把zsh-autosuggestions添加到 Oh My Zsh 要加载的插件列表中
```
plugins=(git zsh-autosuggestions)
source ~/.zshrc
```
