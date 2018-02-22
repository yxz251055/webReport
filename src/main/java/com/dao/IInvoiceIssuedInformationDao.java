package com.dao;

import com.domain.InvoiceIssuedInformation;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
public interface IInvoiceIssuedInformationDao {

    public long getCountInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);

    public List<InvoiceIssuedInformation> queryInvoiceIssuedInformationByPage(InvoiceIssuedInformation invoiceIssuedInformation);

    public int saveInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);

    public int updateInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);

    public int deleteInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);
}
