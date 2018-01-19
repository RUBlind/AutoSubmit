# AutoSubmit
## How to install the chrome extension
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

## A tip
- The box of name must be the name of input element in page.
### Simple
```
<input id="u_user" name="username" type="text"/>
Which you need to input the "username" on the left in the option page,and the value you want to submit on the right.
<input id="u_user" name="l_submit" type="submit"/>
Which you need to input the "l_submit" on the last lable in the option page.
```

## A bug
- If the page load slowly, the monitor to run on page will failed because of the timer will reload the page on 200 ms.

## Some suggestions for developer
- The extension need a ICON to beautify.
- The latest version only support the name.But, somtimes the submit button only have a id.
- The information which need to submit maybe more than two.
- Sometimes,we need to save different information to submit in different page.
