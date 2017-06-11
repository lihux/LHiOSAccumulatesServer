#!/bin/bash

#首先登陆到root
#可能是因为之前没有进入到这个目录导致的无法正确的二次拉取代码：
cd /home/ec2-user/restify
echo "开始调用更新服务脚本拉取最新代码（从而触发app.js服务器重启)"
echo "首先登陆到root，登录前，我是谁呢？"
echo $(whoami)
expect -c "
spawn su - root
expect \"Password:\"
send \"lihui20021955\r\"
interact
"
echo "登录完成之后，我是谁："
echo $(whoami)
echo "开始处理git拉取前的准备工作："
git  stash
echo "我在那个分支呢："

git checkout master
git pull --rebase

git checkout master

