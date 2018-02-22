<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>报表系统</title>
    <script type="text/javascript" src="js/login/jQuery.js"></script>
    <script type="text/javascript" src="js/login/fun.base.js"></script>
    <script type="text/javascript" src="js/login/script.js"></script>
    <script src="js/login/DD_belatedPNG.js" type="text/javascript"></script>
    <script>DD_belatedPNG.fix('.png')</script>
    <link href="css/main.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/login.js"></script>
</head>
<body>
<div class="login">
    <div class="box png">
        <div class="logo png"></div>
        <div class="input">
            <div class="log">
                <div class="name">
                    <label>用户名</label><input type="text" class="text" id="user" placeholder="用户名" tabindex="1">
                </div>
                <div class="pwd">
                    <label>密　码</label><input type="password" class="text" id="pwd" placeholder="密码" tabindex="2">
                    <input type="button" class="submit" tabindex="3" value="登录" onclick="login();">
                    <div class="check"></div>
                </div>
                <div class="tip"></div>
            </div>
        </div>
    </div>
    <div class="air-balloon ab-1 png"></div>
    <div class="air-balloon ab-2 png"></div>
    <div class="footer"></div>
</div>
</body>
</html>