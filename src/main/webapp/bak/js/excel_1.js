//以下属性先不用管，等我们在下面定义方法的时候，需要用到什么属性，在来定义全局变量（属性）就可以了
var startX;
var startY;
var moveSwitch = false;
var currentLeft;
var currentTop;
var loginTag ;
var type = "save";
var Rowid;
$(function () {
    $('#startDate').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#startDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#startDate').datetimebox('hidePanel');
        }
    });
    $('#endDate').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#endDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#endDate').datetimebox('hidePanel');
        }
    });
    $('#signingDateAdd').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#signingDateAdd').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#signingDateAdd').datetimebox('hidePanel');
        }
    });
    $('#warrantyStartDate').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#warrantyStartDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#warrantyStartDate').datetimebox('hidePanel');
        }
    });
    $('#warrantyDueDate').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#warrantyDueDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#warrantyDueDate').datetimebox('hidePanel');
        }
    });
    $('#projectEntryDate').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#projectEntryDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#projectEntryDate').datetimebox('hidePanel');
        }
    });
    $('#projectCompletionDate').datetimebox({
        onSelect: function (date) {
            $('#projectCompletionDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#projectCompletionDate').datetimebox('hidePanel');
        }
    });
    $('#projectSettlementDate').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#projectSettlementDate').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#projectSettlementDate').datetimebox('hidePanel');
        }
    });
    loginTag = document.getElementById("excel_1_Form");
    document.onmousemove = function(e){　　　//定义一个方法，用来捕捉鼠标的坐标位置
        if(moveSwitch){　　　　　　　　　    //类似于if(true);　　　　　　　　　　　　　　　
            var x = e.clientX;　　　　　　　　//e.clientX是一个触摸事件，即是鼠标点击时的X轴上的坐标
            var y = e.clientY;　　　　　　　　//e.clientY是一个触摸事件，即是鼠标点击时的Y轴上的坐标
            var distanceX = x-startX;　　　　//X轴上获得移动的实际距离
            var distanceY = y-startY;　　　　　//Y轴上获得移动的实际距离
            loginTag.style.left = (distanceX+currentLeft)+"px";　　//currentLeft下面的方法会有解释，需要注意最后要添加PX单位，如果给left赋值会破坏文档流，不加单位就会无效
            loginTag.style.top = (distanceY+currentTop)+"px";　　
        }
    }
})
function queryBtn(){
    var contractId = document.getElementById("contractId").value;
    var partyAName = document.getElementById("partyANameQuery").value;
    var contractName = document.getElementById("contractName").value;
    var startDate = $('#startDate').datetimebox('getText');
    var endDate = $('#endDate').datetimebox('getText');
    $('#datagridProjectBasic').datagrid('options').url = "/projectBasic/queryProjectBasic.do";
    $("#datagridProjectBasic").datagrid("load",{
        pageSize : 10,
        pageNumber : 1,
        contractId : contractId,
        partyAName : partyAName,
        contractName : contractName,
        startDate : startDate,
        endDate : endDate
    });
    var p = $('#datagridProjectBasic').datagrid('getPager');
    $(p).pagination('refresh',{
        pageNumber:1
    });
}
function resetBtn(){
    $('#startDate').combo("setText","");
    $('#endDate').combo("setText","");
    document.getElementById("contractId").value = "";
    document.getElementById("partyANameQuery").value = "";
    document.getElementById("contractName").value = "";
}
function addBtn(){
    setNUll();
    type = "save";
    document.getElementById('excel_1_Form').style.display='block'
}
function deleteBtn(index){
    $('#datagridProjectBasic').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridProjectBasic').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $.messager.confirm("确认", "确认删除此记录！！", function (r) {
            if (r) {
                jQuery.ajax({
                    url:"/projectBasic/deleteProjectBasic.do",
                    type:'post',
                    async:false,
                    data:{
                        id:Rowid
                    },
                    dataType:"json",
                    success:function(data) {
                        if (data == "success") {
                            alert("删除成功！");
                            queryBtn()
                        }else{
                            alert("系统异常，删除出错!");
                        }
                    },
                    error:function(result){
                        alert("系统异常，删除出错!");
                    }
                });
            }
        });
        return false;
    }
}
function editBtn(index){
    type = "update";
    $('#datagridProjectBasic').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridProjectBasic').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $('#signingDateAdd').combo("setText",delDate(row.signingDate));
        $('#warrantyStartDate').combo("setText",delDate(row.warrantyStartDate));
        $('#warrantyDueDate').combo("setText",delDate(row.warrantyDueDate));
        $('#projectEntryDate').combo("setText",delDate(row.projectEntryDate));
        $('#projectCompletionDate').combo("setText",delDate(row.projectCompletionDate));
        $('#projectSettlementDate').combo("setText",delDate(row.projectSettlementDate));
        document.getElementById("contractIdAdd").value = row.contractId;
        document.getElementById("easCodeAdd").value = row.easCode;
        document.getElementById("projectNameAdd").value = row.projectName;
        document.getElementById("contractNameAdd").value = row.contractName;
        document.getElementById("sectionTypeAdd").value = row.sectionType;
        document.getElementById("partyAName").value = row.partyAName;
        document.getElementById("partyAArea").value = row.partyAArea;
        document.getElementById("projectDepartment").value = row.projectDepartment;
        document.getElementById("taxMethod").value = row.taxMethod;
        document.getElementById("invoiceType").value = row.invoiceType;
        document.getElementById("contractAmount").value = row.contractAmount;
        document.getElementById("settlementAmount").value = row.settlementAmount;
        document.getElementById("dedWarrantyProportion").value = row.dedWarrantyProportion;
        document.getElementById("backPaymentConditions").value = row.backPaymentConditions;
        document.getElementById('excel_1_Form').style.display='block'
    }
}
function cancal(){
    document.getElementById('excel_1_Form').style.display='none'
}
function cz(val,row,index){
    var str = '<a href="#" onclick="editBtn('+index+')">修改</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    str += '<a href="#" onclick="deleteBtn('+index+')">删除</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    return str;
}
function saveProjectBasic(){
    var contractIdAdd = document.getElementById("contractIdAdd").value;
    var easCodeAdd = document.getElementById("easCodeAdd").value;
    var projectNameAdd = document.getElementById("projectNameAdd").value;
    var contractNameAdd = document.getElementById("contractNameAdd").value;
    var sectionTypeAdd = document.getElementById("sectionTypeAdd").value;
    var partyAName = document.getElementById("partyAName").value;
    var partyAArea = document.getElementById("partyAArea").value;
    var projectDepartment = document.getElementById("projectDepartment").value;
    var taxMethod = document.getElementById("taxMethod").value;
    var invoiceType = document.getElementById("invoiceType").value;
    var contractAmount = document.getElementById("contractAmount").value;
    var settlementAmount = document.getElementById("settlementAmount").value;
    var dedWarrantyProportion = document.getElementById("dedWarrantyProportion").value;
    var backPaymentConditions = document.getElementById("backPaymentConditions").value;
    var signingDateAdd = $('#signingDateAdd').datebox('getText');
    var warrantyStartDate = $('#warrantyStartDate').datetimebox('getText');
    var warrantyDueDate = $('#warrantyDueDate').datetimebox('getText');
    var projectEntryDate = $('#projectEntryDate').datetimebox('getText');
    var projectCompletionDate = $('#projectCompletionDate').datetimebox('getText');
    var projectSettlementDate = $('#projectSettlementDate').datetimebox('getText');
    if(signingDateAdd==""){
        alert("合同签订日期 不能为空！！")
        return;
    }
    if(type.indexOf("save")>=0) {
        jQuery.ajax({
            url: "/projectBasic/saveProjectBasic.do",
            type: 'post',
            async: false,
            data: {
                signingDate: signingDateAdd==""?new Object():strToDate(signingDateAdd),
                contractId: contractIdAdd,
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                contractName: contractNameAdd,
                sectionType: sectionTypeAdd,
                partyAName: partyAName,
                partyAArea: partyAArea,
                projectDepartment: projectDepartment,
                taxMethod: taxMethod,
                invoiceType: invoiceType,
                contractAmount: contractAmount==""?"0.0":contractAmount,
                settlementAmount: settlementAmount==""?"0.0":settlementAmount,
                dedWarrantyProportion: dedWarrantyProportion,
                warrantyStartDate: warrantyStartDate==""?new Object():strToDate(warrantyStartDate),
                warrantyDueDate: warrantyDueDate==""?new Object():strToDate(warrantyDueDate),
                projectEntryDate: projectEntryDate==""?new Object():strToDate(projectEntryDate),
                projectCompletionDate: projectCompletionDate==""?new Object():strToDate(projectCompletionDate),
                projectSettlementDate: projectSettlementDate==""?new Object():strToDate(projectSettlementDate),
                backPaymentConditions: backPaymentConditions
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("保存成功！");
                    cancal();
                    queryBtn();
                } else {
                    alert("系统异常，删除出错!");
                }
            },
            error: function (result) {
                alert("系统异常，删除出错!");
            }
        });
    }else{
        jQuery.ajax({
            url: "/projectBasic/updateProjectBasic.do",
            type: 'post',
            async: false,
            data: {
                id:Rowid,
                signingDate: signingDateAdd==""?new Object():strToDate(signingDateAdd),
                contractId: contractIdAdd,
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                contractName: contractNameAdd,
                sectionType: sectionTypeAdd,
                partyAName: partyAName,
                partyAArea: partyAArea,
                projectDepartment: projectDepartment,
                taxMethod: taxMethod,
                invoiceType: invoiceType,
                contractAmount: contractAmount==""?"0.0":contractAmount,
                settlementAmount: settlementAmount==""?"0.0":settlementAmount,
                dedWarrantyProportion: dedWarrantyProportion,
                warrantyStartDate: warrantyStartDate==""?new Object():strToDate(warrantyStartDate),
                warrantyDueDate: warrantyDueDate==""?new Object():strToDate(warrantyDueDate),
                projectEntryDate: projectEntryDate==""?new Object():strToDate(projectEntryDate),
                projectCompletionDate: projectCompletionDate==""?new Object():strToDate(projectCompletionDate),
                projectSettlementDate: projectSettlementDate==""?new Object():strToDate(projectSettlementDate),
                backPaymentConditions: backPaymentConditions
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("更新成功！");
                    cancal();
                    queryBtn();
                } else {
                    alert("系统异常，删除出错!");
                }
            },
            error: function (result) {
                alert("系统异常，删除出错!");
            }
        });
    }
}

function setNUll(){
    $('#signingDateAdd').combo("setText","");
    $('#warrantyStartDate').combo("setText","");
    $('#warrantyDueDate').combo("setText","");
    $('#projectEntryDate').combo("setText","");
    $('#projectCompletionDate').combo("setText","");
    $('#projectSettlementDate').combo("setText","");
    document.getElementById("contractIdAdd").value = "";
    document.getElementById("easCodeAdd").value = "";
    document.getElementById("projectNameAdd").value = "";
    document.getElementById("contractNameAdd").value = "";
    document.getElementById("sectionTypeAdd").value = "";
    document.getElementById("partyAName").value = "";
    document.getElementById("partyAArea").value = "";
    document.getElementById("projectDepartment").value = "";
    document.getElementById("taxMethod").value = "";
    document.getElementById("invoiceType").value = "";
    document.getElementById("contractAmount").value = "";
    document.getElementById("settlementAmount").value = "";
    document.getElementById("dedWarrantyProportion").value = "";
    document.getElementById("backPaymentConditions").value = "";
}
