package com.domain;

import java.util.Date;

/**
 * Created by yuxingzheng on 2018/1/28.
 */
public class ProjectNode extends ProjectBasic{

    private String completionProgress;      //完工进度依据
    private String completionPercentage;    //完工百分比
    private String openedAmountPercentage;  //可开票金额百分比
    private String backPaymentPercentage;	//合同约定回款节点百分比

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

    public String getOpenedAmountPercentage() {
        return openedAmountPercentage;
    }

    public void setOpenedAmountPercentage(String openedAmountPercentage) {
        this.openedAmountPercentage = openedAmountPercentage;
    }

    public String getBackPaymentPercentage() {
        return backPaymentPercentage;
    }

    public void setBackPaymentPercentage(String backPaymentPercentage) {
        this.backPaymentPercentage = backPaymentPercentage;
    }
}
