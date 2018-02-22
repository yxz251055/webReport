package com.controller;

import com.domain.ProjectBasic;
import com.service.IProjectBasicService;
import com.service.IUserService;
import com.util.ExcelUtil;
import com.util.TempletUtil;
import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.util.*;

/**
 * Created by yuxingzheng on 2018/1/25.
 */
@Controller
@RequestMapping("/projectBasic")
public class ProjectBasicController {

    private Logger logger  =  Logger.getLogger(ProjectBasicController.class);

    @Resource
    private IProjectBasicService projectBasicService;

    @Resource
    private IUserService userService;

    /*
    查询列表
     */
    @RequestMapping("/queryProjectBasic")
    @ResponseBody
    public Map queryProjectBasic(HttpServletRequest request,Model model,ProjectBasic projectBasic){
        boolean flag = userService.isAdmin(projectBasic.getOperateId());
        if(flag){
            projectBasic.setOperateId("");
        }
        //获取总数
        long total = projectBasicService.getCountProjectBasic(projectBasic);
        //获取list
        List<ProjectBasic> list =  projectBasicService.queryProjectBasicByPage(projectBasic);
        Map map = new HashMap();
        map.put("rows",list);
        map.put("total", total);
        return map;
    }

    /*
        新增
     */

    @RequestMapping("/saveProjectBasic")
    @ResponseBody
    public String saveProjectBasic(HttpServletRequest request,Model model,ProjectBasic projectBasic){
        String result = "";
        result = projectBasicService.saveProjectBasic(projectBasic);
        return result;
    }

    /*
        修改
     */

    @RequestMapping("/updateProjectBasic")
    @ResponseBody
    public String updateProjectBasic(HttpServletRequest request,Model model,ProjectBasic projectBasic){
        String result = "";
        result = projectBasicService.updateProjectBasic(projectBasic);
        return result;
    }

    /*
        删除
     */

    @RequestMapping("/deleteProjectBasic")
    @ResponseBody
    public String deleteProjectBasic(HttpServletRequest request,Model model,ProjectBasic projectBasic){
        String result = "";
        result = projectBasicService.deleteProjectBasic(projectBasic);
        return result;
    }

    @RequestMapping("/downloadTemplet")
    public void downloadLocal(HttpServletRequest req,HttpServletResponse response) throws IOException {

        String path = req.getSession().getServletContext().getRealPath("/template/工程项目基础信息模板.xlsx");
        TempletUtil.downloadTemplet(response,path,"工程项目基础信息模板.xlsx");
//        String path = req.getSession().getServletContext().getRealPath("/template/工程项目基础信息模板.xlsx");
//        File f = new File(path);
//        // 设置response参数，可以打开下载页面
//        response.reset();
//        response.setContentType("application/vnd.ms-excel;charset=utf-8");
//        try {
//            response.setHeader("Content-Disposition", "attachment;filename="+ new String(("工程项目基础信息模板" + ".xlsx").getBytes(), "iso-8859-1"));   //下载文件的名称
//        } catch (UnsupportedEncodingException e) {
//            e.printStackTrace();
//        }
//        ServletOutputStream out = response.getOutputStream();
//        BufferedInputStream bis = null;
//        BufferedOutputStream bos = null;
//        try {
//            bis = new BufferedInputStream(new FileInputStream(f));
//            bos = new BufferedOutputStream(out);
//            byte[] buff = new byte[2048];
//            int bytesRead;
//            while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
//                bos.write(buff, 0, bytesRead);
//            }
//        } catch (final IOException e) {
//            throw e;
//        } finally {
//            if (bis != null)
//                bis.close();
//            if (bos != null)
//                bos.close();
//        }
    }

    @RequestMapping("/uploadExcel")
    public String uploadExcel(@RequestParam("uploadExcel") CommonsMultipartFile uploadExcel,
                            HttpServletRequest request,HttpServletResponse response) {
        HttpSession sessionName = request.getSession();
        String loginUserId = (String)sessionName.getAttribute("loginUserId");
        String result = "";
        InputStream is;
        try {
            is = uploadExcel.getInputStream();
            Workbook wb = null;
            try {
                wb = new XSSFWorkbook(is);
            } catch (IOException e) {
                e.printStackTrace();
            }
            Sheet sheet = wb.getSheetAt(0);
            String[] title = ExcelUtil.getTitles(sheet);
            List<Object> list = ExcelUtil.excelToList(sheet);
            //每一行是一个类
            for(Object obj:list){
                ProjectBasic projectBasic = new ProjectBasic();
                projectBasic.setOperateId(loginUserId);
                Map<String,Object> map = (HashMap<String,Object>)obj;
                Set<String> set = map.keySet();
                for(String str:set){
                    Object valueObj = map.get(str);
                    if("合同签订日期".equals(str)){projectBasic.setSigningDate((Date)valueObj);}
                    else if("合同序号".equals(str)){
                        String tmp = valueObj.toString();
                        if(tmp.contains(".")){
                            tmp = tmp.substring(0,tmp.indexOf("."));
                        }
                        projectBasic.setContractId(tmp);
                    }
                    else if("项目EAS代码".equals(str)){projectBasic.setEasCode((String)valueObj);}
                    else if("工程项目名称".equals(str)){projectBasic.setProjectName((String)valueObj);}
                    else if("合同工程名称".equals(str)){projectBasic.setContractName((String)valueObj);}
                    else if("项目分类".equals(str)){projectBasic.setSectionType((String)valueObj);}
                    else if("甲方公司名称".equals(str)){projectBasic.setPartyAName((String)valueObj);}
                    else if("甲方所属区域".equals(str)){projectBasic.setPartyAArea((String)valueObj);}
                    else if("所属项目部".equals(str)){projectBasic.setProjectDepartment((String)valueObj);}
                    else if("计税方式".equals(str)){projectBasic.setTaxMethod((String)valueObj);}
                    else if("发票类型".equals(str)){projectBasic.setInvoiceType((String)valueObj);}
                    else if("合同金额".equals(str)){projectBasic.setContractAmount(Double.parseDouble(valueObj.toString()));}
                    else if("结算金额".equals(str)){projectBasic.setSettlementAmount(Double.parseDouble(valueObj.toString()));}
                    else if("合同约定回款进度条件".equals(str)){projectBasic.setBackPaymentConditions((String)valueObj);}
                    else if("扣除质保金比例".equals(str)){
                        Integer dedWarrantyProportion =  0;
                        String tmp = valueObj.toString();
                        if(tmp.contains(".")){
                            double d = Double.parseDouble(tmp);
                            d = d * 100;
                            dedWarrantyProportion = (int)d;
                        }
                        projectBasic.setDedWarrantyProportion(dedWarrantyProportion);
                    }
                    else if("质保期开始日期".equals(str)){projectBasic.setWarrantyStartDate((Date)valueObj);}
                    else if("质保金到期日".equals(str)){projectBasic.setWarrantyDueDate((Date)valueObj);}
                    else if("项目进场日期".equals(str)){projectBasic.setProjectEntryDate((Date)valueObj);}
                    else if("项目竣工日期".equals(str)){projectBasic.setProjectCompletionDate((Date)valueObj);}
                    else if("项目结算日期".equals(str)){projectBasic.setProjectSettlementDate((Date)valueObj);}
                }
                //ProjectBasic类存储入库
                result = projectBasicService.saveProjectBasic(projectBasic);
            }
            logger.info(list);
            logger.info(title);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}
