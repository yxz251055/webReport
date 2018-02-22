package com.domain;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
public class InvoiceIssuedInformation extends ProjectBasic{

    private String InvoiceAmount;			//开具发票金额

    public String getInvoiceAmount() {
        return InvoiceAmount;
    }

    public void setInvoiceAmount(String invoiceAmount) {
        InvoiceAmount = invoiceAmount;
    }
}
