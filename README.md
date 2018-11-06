# AutoSubmit
A Chrome Extension To Submit Infomation Automatically
# How to install the chrome extension
- Step 1:
Install a Google Chrome
- Step 2:
Download the project on your computer.
- Step 3:
Open the URL 'chrome://extensions/' on Google Chrome.
- Step 4:
Turn on the developer button and load the project which you downloaded just now.
- Step 5:
Open the option page to input your data which need to submit automatically.
- Step 6:
Save your options and reload your page([Simple Page](https://github.com/login)), and the script will run at background.

# A tip
- The box of name must be the name of input element in page.
## Simple
```
<input id="u_user" name="username" type="text"/>
Which you need to input the "username" on the left in the option page,and the value you want to submit on the right.
<input id="u_user" name="l_submit" type="submit"/>
Which you need to input the "l_submit" on the last lable in the option page.
```

# A bug
- If the page load slowly, the monitor to run on page will failed because of the timer will reload the page on 200 ms.

# 后期任务需求
- [ ] 为插件设计一个好看的图标
- [ ] 修复由于时间计时器造成的BUG（等待页面加载完成后，检索提交按钮是否存在，不存在就直接刷新，删除原有计时器功能）
- [ ] 配置页面在加载时根据已保存的配置自动生成
- [ ] 配置页面有纵向排列的网址列表
- [ ] 配置页面中每个网址可点击向下展开显示配置内容
- [ ] 网址列表拥有增加修改删除的功能
- [ ] 网址配置拥有增加修改删除的功能
- [ ] 指定网址展开后可查看设置配置内容
