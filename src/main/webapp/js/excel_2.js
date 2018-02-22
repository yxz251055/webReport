//以下属性先不用管，等我们在下面定义方法的时候，需要用到什么属性，在来定义全局变量（属性）就可以了
var startX;
var startY;
var moveSwitch = false;
var currentLeft;
var currentTop;
var loginTag ;
var type = "save";
var id;
$(function () {
    $('#startDate_ProjectNode').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#startDate_ProjectNode').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#startDate_ProjectNode').datetimebox('hidePanel');
        }
    });
    $('#endDate_ProjectNode').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#endDate_ProjectNode').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#endDate_ProjectNode').datetimebox('hidePanel');
        }
    });
    $('#signingDateAdd').datetimebox({
        editable:false,
        onSelect: function (date) {
            $('#signingDateAdd').datetimebox('setText', date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + ((date.getDate()) < 10 ? ('0' + (date.getDate())) : (date.getDate())));
            $('#signingDateAdd').datetimebox('hidePanel');
        }
    });
    loginTag = document.getElementById("excel_2_Form");
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

function queryBtn_ProjectNode(){
    var contractId = document.getElementById("contractId_ProjectNode").value;
    var easCode = document.getElementById("easCode_ProjectNode").value;
    var projectDepartment = document.getElementById("projectDepartment_ProjectNode").value;
    var startDate = $('#startDate_ProjectNode').datetimebox('getText');
    var endDate = $('#endDate_ProjectNode').datetimebox('getText');
    $('#datagridProjectNode').datagrid('options').url = "/projectNode/queryProjectNode.do";
    $("#datagridProjectNode").datagrid("load",{
        pageSize : 10,
        pageNumber : 1,
        contractId : contractId,
        easCode : easCode,
        projectDepartment : projectDepartment,
        operateId:loginUserId,
        startDate : startDate,
        endDate : endDate
    });
    var p = $('#datagridProjectNode').datagrid('getPager');
    $(p).pagination('refresh',{
        pageNumber:1
    });
}
function resetBtn_ProjectNode(){
    $('#startDate_ProjectNode').combo("setText","");
    $('#endDate_ProjectNode').combo("setText","");
    document.getElementById("contractId_ProjectNode").value = "";
    document.getElementById("easCode_ProjectNode").value = "";
    document.getElementById("projectDepartment_ProjectNode").value = "";
}
function addBtn_ProjectNode(){
    type = "save"
    setNUll_ProjectNode();
    document.getElementById('excel_2_Form').style.display='block'
}
function deleteBtn_ProjectNode(index){
    $('#datagridProjectNode').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridProjectNode').datagrid('getSelected');
    if (row){
        id = row.id;
        $.messager.confirm("确认", "确认删除此记录！！", function (r) {
            if (r) {
                jQuery.ajax({
                    url:"/projectNode/deleteProjectNode.do",
                    type:'post',
                    async:false,
                    data:{
                        id:id,
                        operateId:loginUserId
                    },
                    dataType:"json",
                    success:function(data) {
                        if (data == "success") {
                            alert("删除成功！");
                            queryBtn_ProjectNode()
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
function editBtn_ProjectNode(index){
    type = "update";
    $('#datagridProjectNode').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridProjectNode').datagrid('getSelected');
    if (row){
        id = row.id;
        $('#signingDateAdd').combo("setText",delDate(row.signingDate));
        document.getElementById("easCodeAdd").value = row.easCode;
        document.getElementById("projectNameAdd").value = row.projectName;
        document.getElementById("projectDepartment").value = row.projectDepartment;
        document.getElementById("contractIdAdd").value = row.contractId;
        document.getElementById("contractNameAdd").value = row.contractName;
        document.getElementById("completionProgress").value = row.completionProgress;
        document.getElementById("completionPercentage").value = row.completionPercentage;
        document.getElementById("openedAmountPercentage").value = row.openedAmountPercentage;
        document.getElementById("backPaymentPercentage").value = row.backPaymentPercentage;
        document.getElementById('excel_2_Form').style.display='block'
    }
}
function cancal_ProjectNode(){
    document.getElementById('excel_2_Form').style.display='none'
}
function cz(val,row,index){
    var str = '<a href="#" onclick="editBtn_ProjectNode('+index+')">修改</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    str += '<a href="#" onclick="deleteBtn_ProjectNode('+index+')">删除</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    return str;
}
function saveProjectNode(){
    var signingDateAdd = $('#signingDateAdd').datetimebox('getText');
    var easCodeAdd = document.getElementById("easCodeAdd").value;
    var projectNameAdd = document.getElementById("projectNameAdd").value;
    var projectDepartment = document.getElementById("projectDepartment").value;
    var contractIdAdd = document.getElementById("contractIdAdd").value;
    var contractNameAdd = document.getElementById("contractNameAdd").value;
    var completionProgress = document.getElementById("completionProgress").value;
    var completionPercentage = document.getElementById("completionPercentage").value;
    var openedAmountPercentage = document.getElementById("openedAmountPercentage").value;
    var backPaymentPercentage = document.getElementById("backPaymentPercentage").value;
    if(signingDateAdd==""){
        alert("合同签订日期 不能为空！！")
        return;
    }
    if(type.indexOf("save")>=0) {
        jQuery.ajax({
            url: "/projectNode/saveProjectNode.do",
            type: 'post',
            async: false,
            data: {
                signingDate: signingDateAdd==""?new Object():strToDate(signingDateAdd),
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                contractName: contractNameAdd,
                contractId: contractIdAdd,
                projectDepartment:projectDepartment,
                completionProgress:completionProgress,
                completionPercentage:completionPercentage,
                openedAmountPercentage:openedAmountPercentage,
                backPaymentPercentage:backPaymentPercentage,
                operateId:loginUserId
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("保存成功！");
                    cancal_ProjectNode();
                    queryBtn_ProjectNode();
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
            url:"/projectNode/updateProjectNode.do",
            type:'post',
            async:false,
            data:{
                id : id,
                signingDate: signingDateAdd==""?new Object():strToDate(signingDateAdd),
                easCode: easCodeAdd,
                projectName: projectNameAdd,
                contractName: contractNameAdd,
                contractId: contractIdAdd,
                projectDepartment:projectDepartment,
                completionProgress:completionProgress,
                completionPercentage:completionPercentage,
                openedAmountPercentage:openedAmountPercentage,
                backPaymentPercentage:backPaymentPercentage,
                operateId:loginUserId
            },
            dataType:"json",
            success:function(data) {
                if (data == "success") {
                    alert("更新成功！");
                    cancal_ProjectNode();
                    queryBtn_ProjectNode();
                }else{
                    alert("系统异常，删除出错!");
                }
            },
            error:function(result){
                alert("系统异常，删除出错!");
            }
        });
    }
}

function setNUll_ProjectNode(){
    $('#signingDateAdd').combo("setText","");
    document.getElementById("easCodeAdd").value = "";
    document.getElementById("projectNameAdd").value = "";
    document.getElementById("contractNameAdd").value = "";
    document.getElementById("contractIdAdd").value = "";
    document.getElementById("projectDepartment").value = "";
    document.getElementById("completionProgress").value = "";
    document.getElementById("completionPercentage").value = "";
    document.getElementById("openedAmountPercentage").value = "";
    document.getElementById("backPaymentPercentage").value = "";
}

function downLoadTemplete2(){
    var url = basePath+"projectNode/downloadTemplet.do";
    url = encodeURI(url);
    location.href = url;
}
function showUpload2() {
    document.getElementById('importExcel2').style.display='block'
    $('#uploadFileid2').filebox({
        buttonText: "请选择",
        prompt:'选择文件',
        buttonAlign:'left'
    });
}
function cancalUpload2(){
    document.getElementById('importExcel2').style.display='none';
}
function uploadExcel2(){
//    var fileName= $('#uploadFileid2').filebox('getValue');
//    //对文件格式进行校验
//    var d1=/\.[^\.]+$/.exec(fileName);
//    if (fileName == "") {
//        $.messager.alert('Excel批量用户导入', '请选择将要上传的文件!');
//        return;
//    }else if(d1!=".xlsx"){
//        $.messager.alert('提示','请选择xlsx格式文件！','info');
//        return;
//    }
//    //$("#uploadForm").form('submit');
//
    exportExcWithprogress(undefined ,500);
    //var form = new FormData(document.getElementById("uploadForm2"));
    //$.ajax({
    //    url:"/projectNode/uploadExcel.do",
    //    type:"post",
    //    data:form,
    //    processData:false,
    //    contentType:false,
    //    success:function(data) {
    //        if (data.indexOf("success") >= 0) {
    //            alert("导入成功！！")
    //            cancalUpload2();
    //        }else{
    //            alert("导入失败！！")
    //            cancalUpload2();
    //        }
    //    },
    //    error:function(e){
    //        alert("系统出错！！");
    //    }
    //});
}
function exportExcWithprogress(scanTime,interval){
    if(scanTime<1000 || scanTime == undefined){
        scanTime = 1000;
    }
    $.messager.progress({
        title:'导入中,请等待...',
        msg:'导入进度：',
        interval: interval
    });
    $.messager.progress('bar').progressbar({
        onChange: function(value){
            if(value == 100){
                $.messager.show({
                    title:'导入完毕',
                    msg:'导入完毕，请保存！',
                    timeout:2000,
                    showType:'fade',
                    style:{
                        top:'45%'
                    }
                });
                $.messager.progress('close');
                cancalUpload2();
            }
        }
    });
    var form = new FormData(document.getElementById("uploadForm2"));
    $.ajax({
        url:"/projectNode/uploadExcel.do",
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        success:function(data) {
            //if (data.indexOf("success") >= 0) {
            //    alert("导入成功！！")
            //    cancalUpload2();
            //}else{
            //    alert("导入失败！！")
            //    cancalUpload2();
            //}
        },
        error:function(e){
            alert("系统出错！！");
        }
    });
    var timer = setInterval(function(){
        $.ajax({
            url: "/projectNode/isUploadExcel.do?id="+Math.random(),
            success: function(data){
                console.log(data);
                if(data.indexOf("true")>=0){
                    $.messager.progress('bar').progressbar('setValue','100');
                    clearInterval(timer);
                }
            },
            error:function(e){
                console.log(e.responseText);
            }
        });
    }, scanTime);
}

function exportExcel(){
    $.messager.confirm('确认', '确认把该搜索结果导出Excel表格 ？', function(r) {
        if (r) {
            var contractId = document.getElementById("contractId_ProjectNode").value;
            var easCode = document.getElementById("easCode_ProjectNode").value;
            var projectDepartment = document.getElementById("projectDepartment_ProjectNode").value;
            var startDate = $('#startDate_ProjectNode').datetimebox('getText');
            var endDate = $('#endDate_ProjectNode').datetimebox('getText');
            $.messager.progress({
                title : '处理中',
                msg : '请稍后',
            });
            $.messager.progress('close');
            var url = basePath+"projectNode/exportExcel.do?contractId="+contractId+"&easCode="+easCode+
                "&projectDepartment="+projectDepartment+"&startDate="+startDate+"&endDate="+endDate;
            url = encodeURI(url);
            location.href = url;
        }
    });
}