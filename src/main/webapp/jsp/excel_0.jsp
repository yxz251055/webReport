<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<jsp:include page="excel_0Add.jsp" flush="true"/>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/icon.css" />
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="../js/excel_0.js"></script>
    <script type="text/javascript" src="../js/util.js"></script>
</head>
<%
    HttpSession sessionName = request.getSession();
    String loginUserId = (String)sessionName.getAttribute("loginUserId");
%>
<script>
    var loginUserId="<%=loginUserId %>";
</script>
<body class="easyui-layout" style="width:100%;height:100%">
<div data-options="region:'center'" style="padding:5px;background:#eee;">
    <div id="p" class="easyui-panel" style="width:100%;height:100%;padding:10px;background:#fafafa;">
        <form method="post">
            <span>账号：</span>
            <input id = "userName" type = "text"  style="width:180px;"/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp名称：</span>
            <input id = "name" type = "text"  style="width:180px;"/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp角色：</span>
            <input id = "role" type = "text"  style="width:180px;"/>
            <br>
            <sapn>开始时间：</sapn>
                <span>
            　　    <input type="text" id="startDate"  class="easyui-datetimebox">
                </span>
            <sapn>&nbsp;&nbsp;&nbsp;&nbsp结束时间：</sapn>
                <span>
                    <input type="text" id="endDate" class="easyui-datetimebox" data-options="validType:'testDate[\'#startDate\']'"/>
                </span>
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="resetBtn0();">重置</a>
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="queryBtn0();">查询</a>
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="addBtn0();">新增</a>
        </form>
        <table id ="datagridUser" class="easyui-datagrid" style="width:98%;height:80%" data-options="
            rownumbers:true,
            autoRowHeight:false,pagination:true">
            <thead>
            <tr>
                <th data-options="field:'userName',width:100">账号</th>
                <th data-options="field:'password',width:100">密码</th>
                <th data-options="field:'name',width:100">名称</th>
                <th data-options="field:'role',width:100">角色</th>
                <th data-options="field:'createDate',width:150,formatter:crtTimeFtt">创建日期</th>
                <th data-options="field:'updateDate',width:150,formatter:crtTimeFtt">更新日期</th>
                <th data-options="field:'name',width:100">最后操作人</th>
                <th data-options="field:'cz',width:100,formatter:cz">操作</th>
            </tr>
            </thead>
        </table>
    </div>
</div>
</body>
</html>