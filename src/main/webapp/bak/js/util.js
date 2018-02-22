function crtTimeFtt(value,row,index){
    var crtTime = new Date(value);
    return dateFtt("yyyy-MM-dd",crtTime);//直接调用公共JS里面的时间类处理的办法
}
function dateFtt(fmt,date)
{
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

function mouseDown(e){　　　　      //鼠标按下事件
    e = e?e:window.event;　　　　   //因为兼容问题，event可能在隐藏参数中，如果隐藏参数没有event事件，则可以使用全局的事件window.event（大家记住写法就可以了）
    moveSwitch = true;
    startX = e.clientX;
    startY = e.clientY;
    currentLeft = loginTag.offsetLeft;　　//通过对象获取对象的坐标
    currentTop = loginTag.offsetTop;
}
function mouseUp(){
    moveSwitch = false;
}

function delDate(da){
    if(da ==""||da==null){
        return "";
    }else{
        da = new Date(da);
        var year = da.getFullYear();
        var month = da.getMonth()+1;
        var date = da.getDate();
        return [year,month,date].join('-');
    }
}
function strToDate(str){
    var fullDate = str.split("-");
    return new Date(fullDate[0], fullDate[1]-1, fullDate[2], 0, 0, 0);
}
