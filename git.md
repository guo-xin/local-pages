
// 查看某个命令
git help [-a | --all] 查看所有可用help的命令和概念
git help [-g | --guide] 有用的指南列表
git help [command | accept] = git [command | accept] --help 查看某个命令的help
**举例**
git branch --help 查看branch命令的一些帮助信息
git help push     查看push命令的一些帮助信息
git help checkout -m 

**git一些概念**
stash           缓存（分支共享）
staged          暂存（文件修改已放入暂存区，尚未存入版本库，分支共享）
modified        文件已修改
both modified   本地和远程都有修改
push            推送
pull            拉取
fetch           获取（不影响本地仓库）
repository      仓库



**创建仓库**

1，代码托管平台先创建远程仓库
2，本地仓库通过 git clone repository 拉取远程仓库
3，创建分支，本地开发

1，本地建立仓库，git init初始化本地项目并生成.git目录
2，通过 git remote add <> <> 与远程仓库相关联
3，创建分支，本地开发



**clone操作**

**options选项**
[-o] = [--origin]       指定主机名
[-b] = [--branch]       指定克隆并在本地创建的远程分支名称（默认是只克隆HEAD指向的分支，默认是master分支）
[--no-tags]             不克隆任何标签（tag），默认克隆
[--[no-]single-branch]  是否克隆所有分支（默认是克隆所有分支，克隆单个分支速度会变快）
[--depth=num]           深度克隆（创建一个历史截断为指定数目的提交的浅表克隆）
[<directory>]           本地项目名称（默认为远程项目名称）

git clone [-o <name>] [-b <name>] <repository> [<directory>]

**举例**
// 建立本地项目目录test-object，设置远程主机名为test-origin，克隆远程test-branch分支
git clone -o test-origin -b test-branch git@github.com:guo-xin/local-h5.git test-object
// 只克隆远程test-branch到本地
git clone -b test-branch --single-branch git@github.com:guo-xin/local-h5.git



**remote相关操作**

git remote  查看所有远程仓库
git remote [-v | --verbose]  查看远程主机详细信息
git remote add <name> <url> 设置远程仓库
git remote set-url <name> <url>  更换远程仓库地址。把<url>更换为新的url地址。
git remote set-url --add <name> <url>  增加远程仓库
git remote get-url  [--all | -a] <name> 检索远程仓库的url
git remote rename <old> <new> 重命名远程仓库
git remote rm <name> 删除远程name仓库
git remote show <name>  可以查看name主机remote地址，远程分支，还有本地分支与之相对应关系等信息
git remote prune <name> 删除与name关联的陈旧引用（比如本地版本库中远程仓库不存在的分支）
git remote set-head <name> (-d | --delete) 删除head默认分支
git remote set-head <name> <branch> 添加name分支为head默认分支

**举例**
// 设置远程origin仓库
git remote add origin git@github.com:guo-xin/local-h5.git
// 增加远程test仓库地址
git remote set-url --add test git@github.com:guo-xin/local-h5.git



**branch相关操作**
// Git 的分支，其实本质上仅仅是指向提交对象的可变指针

**options选项**
[<start-point>] = [<branchname> | <commit> | <tag>] 提交点，可以是分支、tag、commit
[-r] = [--remote]           远程
[-a] = [--all]              所有
[-v] = [--verbose]          详细信息
[-f] = [--force]            强制执行
[-t] = [--track]            追踪关系
[-d] = [--delete]           删除
[-D] = [-d -f] = [-df]      强制删除（比如有未提交的commit）
[-m] = [--move]             重命名或移动
[-M] =  = [-m -f] = [-mf]   强制重命名或移动（比如已经存在的分支名）
[-c] = [--copy]             复制
[-C] = [-c -f] = [-cf]      强制复制（比如已经存在的分支名）
[--sort=<key>]              以某种规则排序，默认是字母,committerdate提交日期排序

**概要**

// 拉取某个提交点并创建本地分支，省略提交点则以当前分支为基础创建本地分支
git branch [<branchname>] [<start-point>] 
**举例**
git branch test-branch origin/develop 以远程develop分支创建test-branch分支并自动关联

git branch (-m | --move | (-M | -m --f)) [<oldbranch>] <newbranch> 重命名分支
git branch (-c | --copy | -C) [<oldbranch>] <newbranch> 复制分支（追踪关系不会复制）

// 当前分支不能删除,-d时有未提交的commit时不能删除，-r删除远程分支（不推荐）
git branch (-d | --delete | -D) [-r] <branchname>... 删除分支（多个用空格分隔）
**举例**
git branch -dr origin/test 删除远程test分支

git branch [--list ] [pattern] 列表展示满足pattern模式的本地分支（默认展示所有）
git branch [(-v | --verbose)] 展示本地分支列表及最后一次提交信息
git branch [-v [--abbrev=<length> | --no-abbrev]] 是否显示完整的sha1
git branch [-vv] 本地分支列表、最后一次提交信息、及远程追踪关系
git branch [(-r | --remote) | (-a | --all)] -r显示远程分支，-a是线上本地和远程所有分支
 
// 设置/解除上游追踪关系（创建分支的时候设置）   
git branch [(-t | --track) | --no-track] [-l] [(-f | --force)] <branchname> [<start-point>]
**举例**
git branch -t test-track origin/develop 将test-track的上游追踪信息设置为远程develop分支

设置<branchname>上游信息<upstream>，如果为指定分支，则默认为当前分支（远程分支不存在时则无效）
git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>] 
**举例**
git branch -u origin/develop test-upstream 将本地test-upstream分支与远程develop分支相关联

git branch --unset-upstream [<branchname>] 删除<branchname>上游信息，如果为指定分支，则默认为当前分支

git branch [(--merged | --no-merged) [<commit>]]          
git branch [--contains [<commit]] [--no-contains [<commit>]] 包含/不包含commit的分支
git branch --edit-description [<branchname>] 添加分支描述信息
git branch [--color[=<when>] | --no-color] 是否突出显示某个分支
git branch [--column[=<options>] | --no-column] 表格的形式展示本地分支

**举例**
git branch --column --sort=committerdate 用表格性格按提交日期顺序展示分支



**checkout相关操作**

git checkout [<branch>] 切换分支
git checkout -b [new_branch] [start_point] 切换并新建分支（默认从当前分支，可以接提交点）
git checkout -b [new_branch] [-t | --track] <origin-branch> 拉取远程分支并自动关联
git checkout [--] <paths> 丢弃本地修改文件（多个空格隔开）
git checkout . 丢弃本地所有修改
git checkout [-d | --ours | --their] <paths> 合并代码有冲突时，用本地还是远程修改
git checkout --orphan <branch> 新建一个干净的branch，不指向任何提交
git checkout [-m | --merge] <branch> 切换分支时，如果当前分支的本地修改和目标分支有冲突，则拒绝切换分支

**举例**
// 拉取某个提交切换并新建text-branch分支
git checkout -b test-branch commit-id



**status相关操作**

git status 用于显示工作目录额暂存区的状态
git status [<options>] [--] [<pathspec>]

**举例**
// 显示pages目录下状态
git status pages/

// 文件三种状态
modified   已修改（both modified本地远程都有修改）
staged     已暂存
committed  已提交



**add相关操作**

git add 是添加本地修改到暂存区

git add [<pathspec>]  选择性添加本地修改文件（多个用空格隔开）
git add .  添加所有本地修改文件

**options选项**
[-f | --force]    强制添加（被忽略的文件也可添加）
[-A | --all]      添加所有本地修改文件

**举例**
// 添加pages目录下所有修改到本地暂存区
git add pages/



**commit相关操作**
git commit -a -m <msg> 创建一个提交信息（将stage文件放入repository）

**options选项**
[-a | --all]   将所有已知文件添加到修改
[-m <msg>]     提交信息
[--amend]      启动编译器，重新编写提交信息

**举例**
// 重新编写提交信息
git add .
git commit -m '提交1'
git commit --amend



**stash相关操作**
git stash 命令用于操作缓存区（stash的修改不会在本地展示，分支可共用stash）

git stash  本地修改放入缓存区
git stash list 当前分支本地缓存列表
git stash pop [<stash>]  从缓存列表释放一个缓存状态到本地工作目录（默认最新一个）
git stash apply [<stash>] 恢复缓存到本地（默认是所有，缓存列表还在）
git stash drop [<stash>] 从缓存中删除一个存储条目（默认删除最新一个）
git stash clear 清除当前分支所有缓存

**举例**
// 释放名称为stash@{1}的缓存到本地工作目录
git stash pop stash@{0}



**fetch相关操作**
// 获取远程仓库的更新信息（不影响本地代码）

git fetch --all 获取远程所有更新信息
git fetch [<options>] [<repository>]

**举例**
// 获取远程origin主机test-branch分支的更新信息
git fetch origin test-branch



**pull相关操作**
git pull从一个仓库或者本地的分支拉取并且整合代码。相当于git fetch之后git merge

git pull [options] [<repository> | <refspec>]   <repository>仓库名称，<refspec>分支名字
git pull <远程主机名> <远程分支名>:<本地分支名>  拉取远程指定分支的更新（默认按照git branch 设置的默认跟踪的服务器和分支来拉取。）

**举例**
// 拉取远程master分支并合并到本地test-branch分支
git pull origin master:test-branch
 


**push相关操作**
git push命令用于将本地分支的更新，推送到远程主机（默认不推送tag）

git push <远程主机名> <本地分支名>:<远程分支名>
git push [<repository>] (--tags | tag) 推送本地标签（tag）到远程仓库
git push [-u | --set-upstream] [<repository> [<refspec>]] 关联本地分支与远程分支
git push [<repository>] [: | -d | --delete] <branch|tag>  删除远程分支或tag

git push 默认只推送当前分支（默认是simple模式，可以修改config配置为matching模式，会推送所有的关联分支到远程）
git config --global push.default matching

**举例**
// 提交本地dev分支代码到远程develop分支
git push origin dev:develop
// 推送本地所有标签（tag）到主机名origin的远程仓库
git push origin --tags



**tag相关操作**
// git tag命令用于创建，列出，删除或验证使用GPG签名的标签对象，tag与commit相对应，

**options选项**
[-a | --annotate]           制作一个未签名的带注释的标签对象
[-n<num>]                   num指定使用-l时打印多少行
[--sort=<key>]              根据给定的关键字进行排序
[-m <msg>, --message=<msg>] 给标签增加备注信息（提交信息）

git tag -a <tagname> -m <msg> [<commit> | <object>...] 创建tag，可以是一个commit、分支
git tag [-d | --delete] <tagname> 删除本地标签
git tag [--sort=<key>] 按关键字排序（默认是字母排序）

**举例**
// 从本地develop分支创建标签（tag）v1.0.0，备注信息为 '创建tag'
git tag -a 'v1.0.0' -m '创建tag' develop
// 删除本地标签
git tag -d v1.0.0
// 本地标签按提交时间倒序
git tag --sort=taggerdate



**diff相关操作**

git diff [options] [<commit>] [<path>] 可比较文件，也可比较commit之间的差异


**git三个区域**
Working Tree  当前的工作区域
Index/Stage   暂存区域，和git stash命令暂存的地方不一样。使用git add xx，就可以将xx添加近Stage里面
Repository    git仓库，也叫提交的历史，即使用git commit提交后的结果


**reset相关操作**
git reset命令用于将当前HEAD复位到指定状态。一般用于撤消之前的一些操作(如：git add,git commit等)。

git reset [--soft | --hard --merge] [<commit>] 回退到某个提交点
git reset HEAD [<path>] 取消暂存文件（git add之后，默认全部）


**options选项**
--hard：重设(reset) 索引和工作目录，自<commit>以来在工作目录和暂存区中的任何改变都被丢弃，并把HEAD指向<commit>
--soft  回滚最近一次提交，并且保留工作目录修改，已提交的会放回暂存区
--mixed （默认）保留工作目录，并清空暂存区（所有差异都放在工作目录中）

**举例**
// 撤回commit之后push之前的提交
git reset --soft HEAD^



**revert相关操作**
git revert 用于反转提交，用一个新的commit来回滚之前的commit

git revert [-e | --edit] <commit> 回滚某个提交，多个空格隔开，可以接一个范围

// 如果想把B，C，D都给revert，除了一个一个revert之外，还可以使用range revert
git revert B^..D

**options选项**
[-e | --edit] 提交恢复之前编写提交信息



**rebase相关操作**
rebase 合并某几次提交，可以将几条提交记录合并成一条，也可以用来修改提交过的信息，还可以用来合并分支


git rebase <branch> 合并当前分支到branch
git rebase [-i] [--onto <newbase>] 合并提交（commit-id 需要合并提交的前一次提交id， head~num 合并最近num次提交）
pick：正常选中，提交信息还在（p）
reword：选中，并且修改提交信息（r）
edit：选中，rebase时会暂停，允许你修改这个commit注释信息
squash：选中，会将当前commit与上一个commit合并（s）
fixup：与squash相同，但不会保存当前commit的提交信息
exec：执行其他shell命令

git rebase --todo  继续
git rebase --abort 丢弃合并，回到最开始
git rebase --continue 继续，写新注释
git push -f 因为rebase之后，分支历史改变，跟远程可能不一致，需要强制提交
rebase时最新的提交在最下面，将pick改为s，则提交会与上一次提交合并，如果连续的s，则会合并多个提交，但是如果将第一个pick改为了s。则会报错，因为其上面没有commit
cannot 'squash' without a previous commit
此时执行 rm -fr "[REPO PATH]/.git/rebase-merge”
或 git rebase —abort 
之后执行 git rebase --continue  可提交新的注释

**options选项**
[-i | --interactive]   列出将要重新分配的提交列表。
[--onto <newbase>]     创建新提交的起点




