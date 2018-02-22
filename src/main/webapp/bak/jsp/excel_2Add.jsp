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
<div id="excel_2_Form" class="panel window " style="display: none;width: 688px;left: 219px; top: 60px; z-index: 9002;"
     onmousedown="mouseDown()" onmouseup="mouseUp()">

    <div class="panel-header panel-header-noborder window-header" style="width: 688px;">
        <div class="panel-title">添加/修改</div>
    </div>
    <div style="padding: 10px; width: 666px; height: 360px;" class="panel-body panel-body-noborder window-body">
        <div class="row1">
            <div class="col1">
                <sapn>合同签订日期：</sapn>
            </div>
            <div class="col2">
                <span style="float: right">
        　　          <input id="signingDateAdd" type="text" class="easyui-datebox" required="required">
                </span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;合同序号：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="contractIdAdd" type="text" class="textbox-text">
                </span>
            </div>
        </div>
        <div class="row1">
            <div class="col1">
                <sapn>项目EAS代码：</sapn>
            </div>
            <div class="col2">
                <span style="float: right" class="textbox easyui-fluid">
                    <input id="easCodeAdd" type="text" class="textbox-text">
                </span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;所属项目部：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="projectDepartment" type="text" class="textbox-text">
                </span>
            </div>
        </div>
        <div class="row1">
            <div class="col1">
                <sapn>合同工程名称：</sapn>
            </div>
            <div class="col2">
                <span style="float: right" class="textbox easyui-fluid">
                    <input id="contractNameAdd" type="text" class="textbox-text">
                </span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;工程项目名称：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="projectNameAdd" type="text" class="textbox-text">
                </span>
            </div>
        </div>

        <div class="row1">
            <div class="col1">
                <sapn>完工进度依据：</sapn>
            </div>
            <div class="col2">
		<span style="float: right" class="textbox easyui-fluid">
			<input id="completionProgress" type="text" class="textbox-text">
		</span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;完工百分比：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="completionPercentage" type="text" class="textbox-text">
                </span>
            </div>
        </div>
        <div class="row1">
            <div class="col1">
                <sapn>可开票金额百分比：</sapn>
            </div>
            <div class="col2">
                <span style="float: right" class="textbox easyui-fluid">
                    <input id="openedAmountPercentage" type="text" class="textbox-text">
                </span>
            </div>
            <div class="col3">
                <sapn>&nbsp;&nbsp;&nbsp;合同约定回款节点百分比：</sapn>
            </div>
            <div class="col4">
                <span class="textbox easyui-fluid">
                    <input id="backPaymentPercentage" type="text" class="textbox-text">
                </span>
            </div>
        </div>
    </div>
    <div class="dialog-button" style="position: relative; top: -1px; width: 676px;">
        <a href="javascript:void(0)" class="l-btn l-btn-small" onclick="saveProjectNode();">
            <span class="l-btn-left l-btn-icon-left">
                <span class="l-btn-text">确定</span>
                <span class="l-btn-icon icon-ok">&nbsp;</span>
            </span>
        </a>
        <a href="javascript:void(0)" class="l-btn l-btn-small" onclick="cancal_ProjectNode();">
            <span class="l-btn-left l-btn-icon-left">
                <span class="l-btn-text">取消</span>
                <span class="l-btn-icon icon-cancel">&nbsp;</span>
            </span>
        </a>
    </div>
</div>