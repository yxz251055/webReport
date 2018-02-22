<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>系统</title>
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/icon.css" />
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="../js/tabmenus.js"></script>
</head>
<%
    //获取用户名
    String name = request.getParameter("name");
    String role = request.getParameter("role");
    String loginUserId = request.getParameter("userName");
    HttpSession sessionName = request.getSession();
    sessionName.setAttribute("loginUserId",loginUserId);
    sessionName.setAttribute("role",role);
%>
<body class="easyui-layout">
<!-- 北 -->
<div data-options="region:'north',split:true"style="overflow: hidden;height:30px;
        background:url(../images/layout-browser-hd-bg.gif) #7f99be repeat-x center 50%;
        line-height: 20px;color: #fff;font-family: Verdana, 微软雅黑,黑体">
        <span style="padding-left:10px; font-size: 16px; ">
            <img src="../images/blocks.gif" width="20" height="20" />
            系统
        </span>
        <span style="float:right; padding-right:20px;">
            欢迎: <%=name %>
            <%--<a href="#" id="loginOut">退出</a>--%>
            <a href="../index.jsp" onclick="javascript:location.replace(this.href); event.returnValue=false;">退出</a>
        </span>
</div>
<!-- 南 -->
<div data-options="region:'south',split:true" style="height:30px; background: #D2E0F2;">
    <div class="footer">系统</div>
</div>
<!-- 西 -->
<div data-options="region:'west',title:'导航目录',split:true" style="width:200px;">
    <div id="nav" class="easyui-accordion" style="width:100%;"data-options="fit:true,border:false">
        <div title="操作使用" data-options="iconCls:'icon-reload',selected:true" style="overflow:auto;padding:10px;">
            <ul>
                <%
                    if("admin".equals(role)){
                %>
                <li style="list-style: none;">
                    <div>
                        <a id="userManager" href="#">
                            <span class="icon-mans" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="nav">用户管理</span>
                        </a>
                    </div>
                </li>
                <br><br>
                <%
                    }
                %>
                <li style="list-style: none;">
                    <div>
                        <a id="excel_1" href="#">
                            <span class="icon-mans" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="nav">工程项目基础信息</span>
                        </a>
                    </div>
                </li>
                <br><br>
                <li style="list-style: none;">
                    <div>
                        <a id="excel_2" href="#">
                            <span class="icon-mans" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="nav">工程节点</span>
                        </a>
                    </div>
                </li>
                <br><br>
                <li style="list-style: none;">
                    <div>
                        <a id="excel_3" href="#">
                            <span class="icon-mans" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="nav">汇总表</span>
                        </a>
                    </div>
                </li>
                <br><br>
                <li style="list-style: none;">
                    <div>
                        <a id="excel_4" href="#">
                            <span class="icon-mans" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="nav">发票开具信息表</span>
                        </a>
                    </div>
                </li>
                <%--<a id="btn" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width: 100px">easyui</a>--%>
                <%--<br>--%>
                <%--<br>--%>
                <%--<a id="btn1" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width: 100px">easyui</a>--%>
            </ul>
        </div>
        <div title="Title2" data-options="iconCls:'icon-reload'" style="padding:10px;">
            content2
        </div>
    </div>
</div>
<!-- 中 -->
<div data-options="region:'center'" style="padding:5px;background:#eee;">
    <div id="tabs" class="easyui-tabs"  fit="true" border="false" >
        <div title="欢迎使用" style="padding:20px;overflow:hidden; color:red; " >
            <h1 style="font-size:24px;">欢迎光临</h1>
        </div>
    </div>
</div>
<div id="mm" class="easyui-menu" style="width:150px;">
    <div id="mm-tabupdate">刷新</div>
    <div class="menu-sep"></div>
    <div id="mm-tabclose">关闭</div>
    <div id="mm-tabcloseall">全部关闭</div>
    <div id="mm-tabcloseother">除此之外全部关闭</div>
    <div class="menu-sep"></div>
    <div id="mm-tabcloseright">当前页右侧全部关闭</div>
    <div id="mm-tabcloseleft">当前页左侧全部关闭</div>
    <div class="menu-sep"></div>
    <div id="mm-exit">退出</div>
</div>
</body>
</html>