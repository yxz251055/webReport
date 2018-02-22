package com.service;

import com.domain.InvoiceIssuedInformation;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
public interface InvoiceIssuedInformationService {

    public long getCountInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);

    public List<InvoiceIssuedInformation> queryInvoiceIssuedInformationByPage(InvoiceIssuedInformation invoiceIssuedInformation);

    public String saveInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);

    public String updateInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);

    public String deleteInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation);
}
