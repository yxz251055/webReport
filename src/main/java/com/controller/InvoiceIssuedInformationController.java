package com.controller;

import com.domain.InvoiceIssuedInformation;
import com.service.InvoiceIssuedInformationService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
@Controller
@RequestMapping("/invoiceIssuedInformation")
public class InvoiceIssuedInformationController {

    @Resource
    private InvoiceIssuedInformationService invoiceIssuedInformationService;

    /*
    查询列表
     */
    @RequestMapping("/queryInvoiceIssuedInformation")
    @ResponseBody
    public Map queryInvoiceIssuedInformation(HttpServletRequest request,Model model,InvoiceIssuedInformation invoiceIssuedInformation){
        String role = (String)request.getSession().getAttribute("role");
        if("admin".equals(role)){
            invoiceIssuedInformation.setOperateId("");
        }
        //获取总数
        long total = invoiceIssuedInformationService.getCountInvoiceIssuedInformation(invoiceIssuedInformation);
        //获取list
        List<InvoiceIssuedInformation> list =  invoiceIssuedInformationService.queryInvoiceIssuedInformationByPage(invoiceIssuedInformation);
//        long total = 1;
//        List<ProjectBasic> list = new ArrayList<ProjectBasic>();
//        ProjectBasic projectBasic1 = new ProjectBasic();
//        projectBasic1.setId(1);
//        String string = "2016-10-24";
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date df = sdf.parse(string);
//        projectBasic1.setSigningDate(new Date());
//        projectBasic1.setContractId("370");
//        projectBasic1.setEasCode("JX-16-0165");
//        projectBasic1.setProjectName("集团新办公大楼一、九、十楼局部改造装饰装修工程（公建）");
//        projectBasic1.setPartyAName("建业住宅集团（中国)有限公司");
//        projectBasic1.setContractName("集团新办公大楼一、九、十楼局部改造装饰装修工程");
//        list.add(projectBasic1);
        Map map = new HashMap();
        map.put("rows",list);
        map.put("total", total);
        return map;
    }

    /*
        新增
     */

    @RequestMapping("/saveInvoiceIssuedInformation")
    @ResponseBody
    public String saveInvoiceIssuedInformation(HttpServletRequest request,Model model,InvoiceIssuedInformation invoiceIssuedInformation){
        String result = "";
        result = invoiceIssuedInformationService.saveInvoiceIssuedInformation(invoiceIssuedInformation);
        return result;
    }

    /*
        修改
     */

    @RequestMapping("/updateInvoiceIssuedInformation")
    @ResponseBody
    public String updateInvoiceIssuedInformation(HttpServletRequest request,Model model,InvoiceIssuedInformation invoiceIssuedInformation){
        String result = "";
        result = invoiceIssuedInformationService.updateInvoiceIssuedInformation(invoiceIssuedInformation);
        return result;
    }

    /*
        删除
     */

    @RequestMapping("/deleteInvoiceIssuedInformation")
    @ResponseBody
    public String deleteInvoiceIssuedInformation(HttpServletRequest request,Model model,InvoiceIssuedInformation invoiceIssuedInformation){
        String result = "";
        result = invoiceIssuedInformationService.deleteInvoiceIssuedInformation(invoiceIssuedInformation);
        return result;
    }
}
