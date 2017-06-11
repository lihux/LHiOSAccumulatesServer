#!/bin/bash

#首先登陆到root
expect -c "
spawn su - root
expect \"Password:\"
send \"lihui20021955\r\"
interact
"
git  stash
git checkout master
git pull --rebase
