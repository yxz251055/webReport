<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<jsp:include page="excel_2Add.jsp" flush="true"/>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head2">
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/icon.css" />
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="../js/excel_2.js"></script>
    <script type="text/javascript" src="../js/util.js"></script>
</head>

<body class="easyui-layout" style="width:100%;height:100%">
<div data-options="region:'center'" style="padding:5px;background:#eee;">
    <div class="easyui-panel" style="width:100%;height:100%;padding:10px;background:#fafafa;">
        <form method="post">
            <span>合同序号：</span>
            <input id = "contractId_ProjectNode" type = "text"  style="width:180px;"/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp项目EAS代码：</span>
            <input id = "easCode_ProjectNode" type = "text"  style="width:180px;"/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp所属项目部：</span>
            <input id = "projectDepartment_ProjectNode" type = "text"  style="width:180px;"/>
            <br>
            <sapn>开始时间：</sapn>
                <span>
            　　    <input type="text" id="startDate_ProjectNode"  class="easyui-datetimebox">
                </span>
            <sapn>&nbsp;&nbsp;&nbsp;&nbsp结束时间：</sapn>
                <span>
                    <input type="text" id="endDate_ProjectNode" class="easyui-datetimebox" data-options="validType:'testDate[\'#startDate_ProjectNode\']'"/>
                </span>
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="resetBtn_ProjectNode();">重置</a>
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="queryBtn_ProjectNode();">查询</a>
            <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="addBtn_ProjectNode();">新增</a>
        </form>
        <table id ="datagridProjectNode" class="easyui-datagrid" style="width:98%;height:80%" data-options="
            rownumbers:true,
            autoRowHeight:false,pagination:true">
            <thead>
            <tr>
                <th data-options="field:'contractId',width:100">合同序号</th>
                <th data-options="field:'easCode',width:100">项目EAS代码</th>
                <th data-options="field:'projectName',width:400">工程项目名称</th>
                <th data-options="field:'projectDepartment',width:100">所属项目部</th>
                <th data-options="field:'createDate',width:150,formatter:crtTimeFtt">创建日期</th>
                <th data-options="field:'updateDate',width:150,formatter:crtTimeFtt">更新日期</th>
                <th data-options="field:'operateId',width:150">操作人</th>
                <th data-options="field:'cz',width:100,formatter:cz">操作</th>
            </tr>
            </thead>
        </table>
    </div>
</div>
</body>
</html>