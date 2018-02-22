package com.service.impl;

import com.dao.IInvoiceIssuedInformationDao;
import com.domain.InvoiceIssuedInformation;
import com.service.InvoiceIssuedInformationService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
@Service("invoiceIssuedInformationService")
public class InvoiceIssuedInformationServiceImpl implements InvoiceIssuedInformationService{

    @Resource
    private IInvoiceIssuedInformationDao iInvoiceIssuedInformationDao;

    @Override
    public long getCountInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation) {
        long total = iInvoiceIssuedInformationDao.getCountInvoiceIssuedInformation(invoiceIssuedInformation);
        return total;
    }

    @Override
    public List<InvoiceIssuedInformation> queryInvoiceIssuedInformationByPage(InvoiceIssuedInformation invoiceIssuedInformation) {
        List<InvoiceIssuedInformation> list = new ArrayList<InvoiceIssuedInformation>();
        list = iInvoiceIssuedInformationDao.queryInvoiceIssuedInformationByPage(invoiceIssuedInformation);
        return list;
    }

    @Override
    public String saveInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation) {
        int i = iInvoiceIssuedInformationDao.saveInvoiceIssuedInformation(invoiceIssuedInformation);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String updateInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation) {
        int i = iInvoiceIssuedInformationDao.updateInvoiceIssuedInformation(invoiceIssuedInformation);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String deleteInvoiceIssuedInformation(InvoiceIssuedInformation invoiceIssuedInformation) {
        int i = iInvoiceIssuedInformationDao.deleteInvoiceIssuedInformation(invoiceIssuedInformation);
        if(1==i){
            return "success";
        }
        return null;
    }
}
