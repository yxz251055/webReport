package com.domain;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
public class ProjectCollection extends ProjectBasic{

    private String completionProgress;          //完工进度依据
    private String completionPercentage;        //完工百分比
    private String projectOutput;  			    //项目产值
    private String backPaymentNodeProportion;   //合同约定回款节点比例
    private String contractNodeReceivables;	    //合同节点应收款
    private String InvoiceAmount;			    //开具发票金额

    public String getCompletionProgress() {
        return completionProgress;
    }

    public void setCompletionProgress(String completionProgress) {
        this.completionProgress = completionProgress;
    }

    public String getCompletionPercentage() {
        return completionPercentage;
    }

    public void setCompletionPercentage(String completionPercentage) {
        this.completionPercentage = completionPercentage;
    }

    public String getProjectOutput() {
        return projectOutput;
    }

    public void setProjectOutput(String projectOutput) {
        this.projectOutput = projectOutput;
    }

    public String getBackPaymentNodeProportion() {
        return backPaymentNodeProportion;
    }

    public void setBackPaymentNodeProportion(String backPaymentNodeProportion) {
        this.backPaymentNodeProportion = backPaymentNodeProportion;
    }

    public String getContractNodeReceivables() {
        return contractNodeReceivables;
    }

    public void setContractNodeReceivables(String contractNodeReceivables) {
        this.contractNodeReceivables = contractNodeReceivables;
    }

    public String getInvoiceAmount() {
        return InvoiceAmount;
    }

    public void setInvoiceAmount(String invoiceAmount) {
        InvoiceAmount = invoiceAmount;
    }
}
