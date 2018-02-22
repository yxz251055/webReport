function login(){
    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;
    if(user==""||pwd==""){
        alert("用户名或密码 不能为空！！")
        return;
    }
    jQuery.ajax({
        url: "/user/login.do",
        type: 'post',
        async: false,
        data: {
            userName:user,
            password:pwd
        },
        dataType: "json",
        success: function (data) {
            if (data!=null && !jQuery.isEmptyObject(data)) {
                //alert("登录成功！");
                //window.location.href = '../jsp/main.jsp';
                document.write("<form action='jsp/main.jsp' method=post name=form1 style='display:none'>");
                document.write("<input type=hidden name='name' value='"+data.name+"'/>");
                document.write("<input type=hidden name='role' value='"+data.role+"'/>");
                document.write("<input type=hidden name='userName' value='"+data.userName+"'/>");
                document.write("</form>");
                document.form1.submit();

            } else {
                alert("登录失败!用户名或密码错误！！");
            }
        },
        error: function (result) {
            alert("系统异常，登录失败!");
        }
    });
}