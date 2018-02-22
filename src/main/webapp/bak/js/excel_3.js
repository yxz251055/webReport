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
    loginTag = document.getElementById("excel_3_Form");
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
function queryBtn3(){
    var contractId = document.getElementById("contractId").value;
    var easCode = document.getElementById("easCode").value;
    var projectName = document.getElementById("projectName").value;
    var startDate = $('#startDate').datetimebox('getText');
    var endDate = $('#endDate').datetimebox('getText');
    $('#datagridCollection').datagrid('options').url = "/projectController/queryProjectController.do";
    $("#datagridCollection").datagrid("load",{
        pageSize : 10,
        pageNumber : 1,
        contractId : contractId,
        easCode : easCode,
        projectName : projectName,
        startDate : startDate,
        endDate : endDate
    });
    var p = $('#datagridCollection').datagrid('getPager');
    $(p).pagination('refresh',{
        pageNumber:1
    });
}
function resetBtn3(){
    $('#startDate').combo("setText","");
    $('#endDate').combo("setText","");
    document.getElementById("contractId").value = "";
    document.getElementById("easCode").value = "";
    document.getElementById("projectName").value = "";
}
function addBtn3(){
    setNUll();
    type = "save";
    document.getElementById('excel_3_Form').style.display='block'
}
function deleteBtn(index){
    $('#datagridCollection').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridCollection').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $.messager.confirm("确认", "确认删除此记录！！", function (r) {
            if (r) {
                jQuery.ajax({
                    url:"/projectController/deleteProjectController.do",
                    type:'post',
                    async:false,
                    data:{
                        id:Rowid
                    },
                    dataType:"json",
                    success:function(data) {
                        if (data == "success") {
                            alert("删除成功！");
                            queryBtn3()
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
    $('#datagridCollection').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridCollection').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $('#warrantyStartDate').combo("setText",delDate(row.warrantyStartDate));
        $('#warrantyDueDate').combo("setText",delDate(row.warrantyDueDate));
        document.getElementById("contractIdAdd").value = row.contractId;
        document.getElementById("easCodeAdd").value = row.easCode;
        document.getElementById("projectNameAdd").value = row.projectName;
        document.getElementById("contractNameAdd").value = row.contractName;
        document.getElementById("sectionTypeAdd").value = row.sectionType;
        document.getElementById("partyAName").value = row.partyAName;
        document.getElementById("partyAArea").value = row.partyAArea;
        document.getElementById("projectDepartment").value = row.projectDepartment;
        document.getElementById("contractAmount").value = row.contractAmount;
        document.getElementById("settlementAmount").value = row.settlementAmount;
        document.getElementById("dedWarrantyProportion").value = row.dedWarrantyProportion;
        document.getElementById("backPaymentConditions").value = row.backPaymentConditions;
        document.getElementById("completionProgress").value = row.completionProgress;
        document.getElementById("completionPercentage").value = row.completionPercentage;
        document.getElementById("projectOutput").value = row.projectOutput;
        document.getElementById("backPaymentNodeProportion").value = row.backPaymentNodeProportion;
        document.getElementById("contractNodeReceivables").value = row.contractNodeReceivables;
        document.getElementById("InvoiceAmount").value = row.InvoiceAmount;
        document.getElementById('excel_3_Form').style.display='block'
    }
}
function cancal(){
    document.getElementById('excel_3_Form').style.display='none'
}
function cz(val,row,index){
    var str = '<a href="#" onclick="editBtn('+index+')">修改</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    str += '<a href="#" onclick="deleteBtn('+index+')">删除</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    return str;
}
function saveProjectCollection(){
    var contractIdAdd = document.getElementById("contractIdAdd").value;
    var easCodeAdd = document.getElementById("easCodeAdd").value;
    var projectNameAdd = document.getElementById("projectNameAdd").value;
    var contractNameAdd = document.getElementById("contractNameAdd").value;
    var sectionTypeAdd = document.getElementById("sectionTypeAdd").value;
    var partyAName = document.getElementById("partyAName").value;
    var partyAArea = document.getElementById("partyAArea").value;
    var projectDepartment = document.getElementById("projectDepartment").value;
    var contractAmount = document.getElementById("contractAmount").value;
    var settlementAmount = document.getElementById("settlementAmount").value;
    var dedWarrantyProportion = document.getElementById("dedWarrantyProportion").value;
    var backPaymentConditions = document.getElementById("backPaymentConditions").value;
    var completionProgress = document.getElementById("completionProgress").value;
    var completionPercentage = document.getElementById("completionPercentage").value;
    var projectOutput = document.getElementById("projectOutput").value;
    var backPaymentNodeProportion = document.getElementById("backPaymentNodeProportion").value;
    var contractNodeReceivables = document.getElementById("contractNodeReceivables").value;
    var InvoiceAmount = document.getElementById("InvoiceAmount").value;
    var warrantyStartDate = $('#warrantyStartDate').datetimebox('getText');
    var warrantyDueDate = $('#warrantyDueDate').datetimebox('getText');
    if(contractIdAdd==""){
        alert("合同序号 不能为空！！")
        return;
    }
    if(type.indexOf("save")>=0) {
        jQuery.ajax({
            url: "/projectCollection/saveProjectCollection.do",
            type: 'post',
            async: false,
            data: {
                contractId: contractIdAdd,
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                contractName: contractNameAdd,
                sectionType: sectionTypeAdd,
                partyAName: partyAName,
                partyAArea: partyAArea,
                projectDepartment: projectDepartment,
                contractAmount: contractAmount==""?"0.0":contractAmount,
                settlementAmount: settlementAmount==""?"0.0":settlementAmount,
                dedWarrantyProportion: dedWarrantyProportion,
                completionProgress:completionProgress,
                completionPercentage:completionPercentage,
                projectOutput:projectOutput,
                backPaymentNodeProportion:backPaymentNodeProportion,
                contractNodeReceivables:contractNodeReceivables,
                InvoiceAmount:InvoiceAmount,
                warrantyStartDate: warrantyStartDate==""?new Object():strToDate(warrantyStartDate),
                warrantyDueDate: warrantyDueDate==""?new Object():strToDate(warrantyDueDate),
                backPaymentConditions: backPaymentConditions
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("保存成功！");
                    cancal();
                    queryBtn3();
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
            url: "/projectCollection/updateProjectCollection.do",
            type: 'post',
            async: false,
            data: {
                id:Rowid,
                contractId: contractIdAdd,
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                contractName: contractNameAdd,
                sectionType: sectionTypeAdd,
                partyAName: partyAName,
                partyAArea: partyAArea,
                projectDepartment: projectDepartment,
                contractAmount: contractAmount==""?"0.0":contractAmount,
                settlementAmount: settlementAmount==""?"0.0":settlementAmount,
                dedWarrantyProportion: dedWarrantyProportion,
                completionProgress:completionProgress,
                completionPercentage:completionPercentage,
                projectOutput:projectOutput,
                backPaymentNodeProportion:backPaymentNodeProportion,
                contractNodeReceivables:contractNodeReceivables,
                InvoiceAmount:InvoiceAmount,
                warrantyStartDate: warrantyStartDate==""?new Object():strToDate(warrantyStartDate),
                warrantyDueDate: warrantyDueDate==""?new Object():strToDate(warrantyDueDate),
                backPaymentConditions: backPaymentConditions
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("更新成功！");
                    cancal();
                    queryBtn3();
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
    $('#warrantyStartDate').combo("setText","");
    $('#warrantyDueDate').combo("setText","");
    document.getElementById("contractIdAdd").value = "";
    document.getElementById("easCodeAdd").value = "";
    document.getElementById("projectNameAdd").value = "";
    document.getElementById("contractNameAdd").value = "";
    document.getElementById("sectionTypeAdd").value = "";
    document.getElementById("partyAName").value = "";
    document.getElementById("partyAArea").value = "";
    document.getElementById("projectDepartment").value = "";
    document.getElementById("contractAmount").value = "";
    document.getElementById("settlementAmount").value = "";
    document.getElementById("dedWarrantyProportion").value = "";
    document.getElementById("backPaymentConditions").value = "";
    document.getElementById("completionProgress").value = "";
    document.getElementById("completionPercentage").value = "";
    document.getElementById("projectOutput").value = "";
    document.getElementById("backPaymentNodeProportion").value = "";
    document.getElementById("contractNodeReceivables").value = "";
    document.getElementById("InvoiceAmount").value = "";
}
