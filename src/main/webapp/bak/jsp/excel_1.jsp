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
<!--
<script>
    function initDatagridAddressMap(){
        var datagridAddressMap = $('#datagridAddressMap');
        datagridAddressMap.datagrid({
            title: '地址库列表',
            pagination: true,//显示分页工具栏
            url: null,
            queryParams: {
                pageNumber: 1,
                pageSize: 10
            },onLoadSuccess:function(data){
                //要判断或者执行的代码
            }
        });
        var p = datagridAddressMap.datagrid('getPager');
        $(p).pagination({
            pageSize: 10,//每页显示的记录条数，默认为10
            pageList: [5, 10, 15],//可以设置每页记录条数的列表
            beforePageText: '第',//页数文本框前显示的汉字
            afterPageText: '页    共 {pages} 页',
            displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录',
            onSelectPage: function (pageNumber, pageSize) {
                var queryParams = datagridAddressMap.datagrid('options').queryParams;
                queryParams.pageSize = pageSize;
                queryParams.pageNumber = pageNumber;
                datagridAddressMap.datagrid('options').queryParams = queryParams;//传递值
                datagridAddressMap.datagrid("reload");
            },
            onChangePageSize: function (pageSize) {
                var queryParams = datagridAddressMap.datagrid('options').queryParams;
                queryParams.pageSize = pageSize;
                queryParams.pageNumber = 1;
                datagridAddressMap.datagrid('options').queryParams = queryParams;//传递值
                datagridAddressMap.datagrid("reload");
                $(this).pagination('refresh',{
                    pageNumber:1
                });
            },
            onRefresh: function (pageNumber, pageSize) {
                var queryParams = datagridAddressMap.datagrid('options').queryParams;
                queryParams.pageSize = pageSize;
                queryParams.pageNumber = 1;
                datagridAddressMap.datagrid('options').queryParams = queryParams;//传递值
                datagridAddressMap.datagrid("reload");
                $(this).pagination('refresh',{
                    pageNumber:1
                });
            }
        });
    }
    $(function () {
        initDatagridAddressMap();
    })
</script>-->