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
    loginTag = document.getElementById("excel_0_Form");
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
function queryBtn0(){
    var userName = document.getElementById("userName").value;
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var startDate = $('#startDate').datetimebox('getText');
    var endDate = $('#endDate').datetimebox('getText');
    $('#datagridUser').datagrid('options').url = "/user/queryUser.do";
    $("#datagridUser").datagrid("load",{
        pageSize : 10,
        pageNumber : 1,
        userName : userName,
        name : name,
        role : role,
        startDate : startDate,
        operateId:loginUserId,
        endDate : endDate
    });
    var p = $('#datagridUser').datagrid('getPager');
    $(p).pagination('refresh',{
        pageNumber:1
    });
}
function resetBtn0(){
    $('#startDate').combo("setText","");
    $('#endDate').combo("setText","");
    document.getElementById("userName").value = "";
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
}
function addBtn0(){
    setNUll();
    type = "save";
    document.getElementById('excel_0_Form').style.display='block'
}
function deleteBtn(index){
    $('#datagridUser').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridUser').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        $.messager.confirm("确认", "确认删除此记录！！", function (r) {
            if (r) {
                jQuery.ajax({
                    url:"/user/deleteUser.do",
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
                            queryBtn0()
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
    $('#datagridUser').datagrid('selectRow',index);// 关键在这里
    var row = $('#datagridUser').datagrid('getSelected');
    if (row){
        Rowid = row.id;
        document.getElementById("userNameAdd").value = row.userName;
        document.getElementById("nameAdd").value = row.name;
        document.getElementById("passwordAdd").value = row.password;
        document.getElementById("roleAdd").value = row.role;
        document.getElementById('excel_0_Form').style.display='block'
    }
}
function cancal(){
    document.getElementById('excel_0_Form').style.display='none'
}
function cz(val,row,index){
    var str = '<a href="#" onclick="editBtn('+index+')">修改</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    str += '<a href="#" onclick="deleteBtn('+index+')">删除</a>';
    str += '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'
    return str;
}
function saveUser(){
    var userName = document.getElementById("userNameAdd").value;
    var name = document.getElementById("nameAdd").value;
    var password = document.getElementById("passwordAdd").value;
    var role = document.getElementById("roleAdd").value;
    if(userName==""||password==""){
        alert("用户名密码 不能为空！！")
        return;
    }
    if(type.indexOf("save")>=0) {
        jQuery.ajax({
            url: "/user/saveUser.do",
            type: 'post',
            async: false,
            data: {
                userName : userName,
                name : name,
                role : role,
                password:password,
                operateId:loginUserId
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("保存成功！");
                    cancal();
                    queryBtn0();
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
            url: "/user/updateUser.do",
            type: 'post',
            async: false,
            data: {
                id:Rowid,
                userName : userName,
                name : name,
                role : role,
                password:password,
                operateId:loginUserId
            },
            dataType: "json",
            success: function (data) {
                if (data == "success") {
                    alert("更新成功！");
                    cancal();
                    queryBtn0();
                } else {
                    alert("系统异常，更新出错!");
                }
            },
            error: function (result) {
                alert("系统异常，更新出错!");
            }
        });
    }
}

function setNUll(){
    document.getElementById("userNameAdd").value = "";
    document.getElementById("nameAdd").value = "";
    document.getElementById("passwordAdd").value = "";
    document.getElementById("roleAdd").value = "";
}
