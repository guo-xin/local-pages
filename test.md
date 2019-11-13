

**branch相关操作**

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

// 拉取某个提交点并创建本地分支，省略提交点则以当前分支为基础创建本地分支，如果是远程存在的分支则自动关联
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

 


