<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<jsp:include page="excel_1Add.jsp" flush="true"/>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="../jquery-easyui-1.5.4.1/themes/icon.css" />
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="../jquery-easyui-1.5.4.1/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="../js/excel_1.js"></script>
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
            <form method="post" action="" id="demandForm">
                <span>合同序号：</span>
                <input id = "contractId" type = "text"  style="width:180px;"/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp甲方公司：</span>
                <input id = "partyANameQuery" type = "text"  style="width:180px;"/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp合同名称：</span>
                <input id = "contractName" type = "text"  style="width:180px;"/>
                <br>
                <sapn>开始时间：</sapn>
                <span>
            　　    <input type="text" id="startDate"  class="easyui-datetimebox">
                </span>
                    <sapn>&nbsp;&nbsp;&nbsp;&nbsp结束时间：</sapn>
                <span>
                    <input type="text" id="endDate" class="easyui-datetimebox" data-options="validType:'testDate[\'#startDate\']'"/>
                </span>
                <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="resetBtn();">重置</a>
                <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="queryBtn();">查询</a>
                <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="addBtn();">新增</a>
                <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="downLoadTemplete();">下载模板</a>
                <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="width:80px" onclick="showUpload();">导入</a>
            </form>
            <table id ="datagridProjectBasic" class="easyui-datagrid" style="width:98%;height:80%" data-options="
            rownumbers:true,
            autoRowHeight:false,pagination:true">
                <thead>
                    <tr>
                        <th data-options="field:'signingDate',width:150,formatter:crtTimeFtt">合同签订日期</th>
                        <th data-options="field:'contractId',width:100">合同序号</th>
                        <th data-options="field:'easCode',width:100">项目EAS代码</th>
                        <th data-options="field:'projectName',width:100">工程项目名称</th>
                        <th data-options="field:'partyAName',width:300">甲方公司名称</th>
                        <th data-options="field:'contractName',width:100">合同工程名称</th>
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