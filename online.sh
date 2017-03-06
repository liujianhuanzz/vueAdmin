#!/bin/bash
npm run build

rsync -avug dist/* root@58.64.204.134:~/vue_deploy

ssh -t root@58.64.204.134 'cd ~; sudo cp -Rf ~/vue_deploy/* /home/liujianhuan/vueAdmin/; sudo rm -rf ~/vue_deploy;'
