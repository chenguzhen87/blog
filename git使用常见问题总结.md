# git使用常见问题总结

* Git 默认不区分大小写
React开发过程中executoryCosts.js文件改成ExecutoryCosts.js,但发现push后，git服务器的文件名为executoryCosts.js，没有变化。

解决方案：

git默认是不区分大小写的，意思是你修改一个文件名/文件夹的时候，git status 是不会提示你有修改的 

可以通过git config --get core.ignorecase 查看默认配置

通过git config core.ignorecase false设置为区分大小写

然后git status 就可以看到变动

然后push到远程服务器