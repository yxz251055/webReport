<%@page pageEncoding="UTF-8" %>
<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<style type="text/css">
    .row1 {
        width: 100%;
        height: 8%;
    }

    .col1 {
        width: 20%;
        float: left;
    }

    .col2 {
        width: 30%;
        float: left;
    }
    .col3 {
        width: 25%;
        float: left;
    }
    .col4 {
        width: 15%;
        float: left;
    }
</style>
<div id="excel_0_Form" class="panel window " style="display: none;width: 688px;left: 219px; top: 60px; z-index: 9002;"
     onmousedown="mouseDown()" onmouseup="mouseUp()">

    <div class="panel-header panel-header-noborder window-header" style="width: 688px;">
        <div class="panel-title">添加/修改</div>
    </div>
    <div style="padding: 10px; width: 666px; height: 360px;" class="panel-body panel-body-noborder window-body">
        <div class="row1">
            <div class="col1">
                <sapn>账号：</sapn>
            </div>
            <div class="col2">
                <span style="float: right" class="textbox easyui-fluid">
                    <input id="userNameAdd" type="text" class="textbox-text" required="required" >
                </span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;密码：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="passwordAdd" type="text" class="textbox-text" required="required" >
                </span>
            </div>
        </div>
        <div class="row1">
            <div class="col1">
                <sapn>姓名：</sapn>
            </div>
            <div class="col2">
                <span style="float: right" class="textbox easyui-fluid">
                    <input id="nameAdd" type="text" class="textbox-text" required="required" >
                </span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;角色：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="roleAdd" type="text" class="textbox-text" required="required" >
                </span>
            </div>
        </div>
    </div>
    <div class="dialog-button" style="position: relative; top: -1px; width: 676px;">
        <a href="javascript:void(0)" class="l-btn l-btn-small" onclick="saveUser();">
            <span class="l-btn-left l-btn-icon-left">
                <span class="l-btn-text">确定</span>
                <span class="l-btn-icon icon-ok">&nbsp;</span>
            </span>
        </a>
        <a href="javascript:void(0)" class="l-btn l-btn-small" onclick="cancal();">
            <span class="l-btn-left l-btn-icon-left">
                <span class="l-btn-text">取消</span>
                <span class="l-btn-icon icon-cancel">&nbsp;</span>
            </span>
        </a>
    </div>
</div>