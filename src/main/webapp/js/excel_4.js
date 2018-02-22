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
    loginTag = document.getElementById("excel_4_Form");
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
function queryBtn4(){
    var InvoiceAmount = document.getElementById("InvoiceAmount").value;
    var easCode = document.getElementById("easCode").value;
    var projectName = document.getElementById("projectName").value;
    var startDate = $('#startDate').datetimebox('getText');
    var endDate = $('#endDate').datetimebox('getText');
    $('#datagridInvoiceIssuedInformation').datagrid('options').url = "/invoiceIssuedInformation/queryInvoiceIssuedInformation.do";
    $("#datagridInvoiceIssuedInformation").datagrid("load",{
        pageSize : 10,
        pageNumber : 1,
        InvoiceAmount : InvoiceAmount,
        easCode : easCode,
        projectName : projectName,
        operateId:loginUserId,
        startDate : startDate,
        endDate : endDate
    });
    var p = $('#datagridInvoiceIssuedInformation').datagrid('getPager');
    $(p).pagination('refresh',{
        pageNumber:1
    });
}
function resetBtn4(){
    $('#startDate').combo("setText","");
    $('#endDate').combo("setText","");
    document.getElementById("InvoiceAmount").value = "";
    document.getElementById("easCode").value = "";
    document.getElementById("projectName").value = "";
}
function addBtn4(){
    setNUll();
    type = "save";
    document.getElementById('excel_4_Form').style.display='block'
}
function deleteBtn(index){
    $('#datagridInvoiceIssuedInformation').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridInvoiceIssuedInformation').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $.messager.confirm("确认", "确认删除此记录！！", function (r) {
            if (r) {
                jQuery.ajax({
                    url:"/invoiceIssuedInformation/deleteInvoiceIssuedInformation.do",
                    type:'post',
                    async:false,
                    data:{
                        id:Rowid,
                        operateId:loginUserId
                    },
                    dataType:"json",
                    success:function(data) {
                        if (data == "success") {
                            alert("删除成功！");
                            queryBtn4()
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
    $('#datagridInvoiceIssuedInformation').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridInvoiceIssuedInformation').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $('#signingDateAdd').combo("setText",delDate(row.signingDate));
        document.getElementById("InvoiceAmountAdd").value = row.invoiceAmount;
        document.getElementById("easCodeAdd").value = row.easCode;
        document.getElementById("projectNameAdd").value = row.projectName;
        document.getElementById('excel_4_Form').style.display='block'
    }
}
function cancal(){
    document.getElementById('excel_4_Form').style.display='none'
}
function cz(val,row,index){
    var str = '<a href="#" onclick="editBtn('+index+')">修改</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    str += '<a href="#" onclick="deleteBtn('+index+')">删除</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    return str;
}
function saveInvoiceIssuedInformation(){
    var InvoiceAmountAdd = document.getElementById("InvoiceAmountAdd").value;
    var easCodeAdd = document.getElementById("easCodeAdd").value;
    var projectNameAdd = document.getElementById("projectNameAdd").value;
    var signingDateAdd = $('#signingDateAdd').datetimebox('getText');
    if(signingDateAdd==""){
        alert("合同签订日期 不能为空！！")
        return;
    }
    if(type.indexOf("save")>=0) {
        jQuery.ajax({
            url: "/invoiceIssuedInformation/saveInvoiceIssuedInformation.do",
            type: 'post',
            async: false,
            data: {
                signingDate: signingDateAdd==""?new Object():strToDate(signingDateAdd),
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                InvoiceAmountAdd: InvoiceAmountAdd,
                operateId:loginUserId
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("保存成功！");
                    cancal();
                    queryBtn4();
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
            url: "/invoiceIssuedInformation/updateInvoiceIssuedInformation.do",
            type: 'post',
            async: false,
            data: {
                id:Rowid,
                signingDate: signingDateAdd==""?new Object():strToDate(signingDateAdd),
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                InvoiceAmountAdd: InvoiceAmountAdd,
                operateId:loginUserId
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("更新成功！");
                    cancal();
                    queryBtn4();
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
    document.getElementById("easCodeAdd").value = "";
    document.getElementById("projectNameAdd").value = "";
    document.getElementById("InvoiceAmountAdd").value = "";
}
