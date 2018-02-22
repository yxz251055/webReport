package com.controller;

import com.domain.ProjectNode;
import com.service.IProjectNodeService;
import com.util.ExcelUtil;
import com.util.TempletUtil;
import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.*;
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
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.*;

/**
 * Created by yuxingzheng on 2018/1/28.
 */
@Controller
@RequestMapping("/projectNode")
public class ProjectNodeController {

    private Logger logger  =  Logger.getLogger(ProjectNodeController.class);

    @Resource
    private IProjectNodeService projectNodeService;

    /*
    查询列表
     */
    @RequestMapping("/queryProjectNode")
    @ResponseBody
    public Map queryProjectNode(HttpServletRequest request,Model model,ProjectNode projectNode){
        //获取总数
        long total = projectNodeService.getCountProjectNode(projectNode);
        //获取list
        List<ProjectNode> list =  projectNodeService.queryProjectNodeByPage(projectNode);
        Map map = new HashMap();
        map.put("rows",list);
        map.put("total", total);
        return map;
    }

    /*
        新增
     */

    @RequestMapping("/saveProjectNode")
    @ResponseBody
    public String saveProjectNode(HttpServletRequest request,Model model,ProjectNode projectNode){
        String result = "";
        result = projectNodeService.saveProjectNode(projectNode);
        return result;
    }

    /*
        修改
     */

    @RequestMapping("/updateProjectNode")
    @ResponseBody
    public String updateProjectNode(HttpServletRequest request,Model model,ProjectNode projectNode){
        String result = "";
        result = projectNodeService.updateProjectNode(projectNode);
        return result;
    }

    /*
        删除
     */

    @RequestMapping("/deleteProjectNode")
    @ResponseBody
    public String deleteProjectNode(HttpServletRequest request,Model model,ProjectNode projectNode){
        String result = "";
        result = projectNodeService.deleteProjectNode(projectNode);
        return result;
    }

    /*
    下载模板
     */
    @RequestMapping("/downloadTemplet")
    public void downloadLocal(HttpServletRequest req,HttpServletResponse response) throws IOException {

        String path = req.getSession().getServletContext().getRealPath("/template/工程项目基础信息模板.xlsx");
        TempletUtil.downloadTemplet(response, path, "工程项目基础信息模板.xlsx");
    }

    /*
    导入excel
     */
    @RequestMapping("/uploadExcel")
    @ResponseBody
    public String uploadExcel(@RequestParam("uploadExcel") CommonsMultipartFile uploadExcel,
                              HttpServletRequest request,HttpServletResponse response) {
        HttpSession sessionName = request.getSession();
        sessionName.setAttribute("exportedFlag",false);
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
                ProjectNode projectNode = new ProjectNode();
                projectNode.setOperateId(loginUserId);
                Map<String,Object> map = (HashMap<String,Object>)obj;
                Set<String> set = map.keySet();
                for(String str:set){
                    Object valueObj = map.get(str);
                    if("日期".equals(str)){projectNode.setSigningDate((Date)valueObj);}
                    else if("合同序号".equals(str)){
                        String tmp = valueObj.toString();
                        if(tmp.contains(".")){
                            tmp = tmp.substring(0,tmp.indexOf("."));
                        }
                        projectNode.setContractId(tmp);
                    }
                    else if("项目EAS代码".equals(str)){projectNode.setEasCode((String)valueObj);}
                    else if("工程项目名称".equals(str)){projectNode.setProjectName((String)valueObj);}
                    else if("合同工程名称".equals(str)){projectNode.setContractName((String)valueObj);}
                    else if("所属项目部".equals(str)){projectNode.setProjectDepartment((String) valueObj);}

                    else if("完工进度依据".equals(str)){projectNode.setCompletionProgress((String) valueObj);}
                    else if("完工百分比".equals(str)){projectNode.setCompletionPercentage((String) valueObj);}
                    else if("可开票金额百分比".equals(str)){projectNode.setOpenedAmountPercentage((String) valueObj);}
                    else if("合同约定回款节点百分比".equals(str)){projectNode.setBackPaymentPercentage((String) valueObj);}
                }
                //ProjectBasic类存储入库
                result = projectNodeService.saveProjectNode(projectNode);
            }
            logger.info(list);
            logger.info(title);
        } catch (IOException e) {
            e.printStackTrace();
        }
        sessionName.removeAttribute("exportedFlag");
        return result;
    }

    /*
    判断是否导入完毕
     */
    @RequestMapping("/isUploadExcel")
    @ResponseBody
    public String isUploadExcel(HttpServletRequest request,HttpServletResponse response){
        Object exportedFlag = request.getSession().getAttribute("exportedFlag");
        if(exportedFlag == null){
            logger.info("已经导完");
            return "true";
        }else{
            logger.info("还未导完");
            return "false";
        }
    }

    /*
    导入excel
     */
    @RequestMapping("/exportExcel")
    public void exportExcel(HttpServletRequest request,HttpServletResponse response,ProjectNode projectNode) {

        //获取list
        List<ProjectNode> list =  projectNodeService.queryProjectNodeByPage(projectNode);

        Workbook wb = new XSSFWorkbook();
        Sheet sheet = wb.createSheet("工程节点");

        CellStyle cellStyle = wb.createCellStyle();
        DataFormat format= wb.createDataFormat();
        cellStyle.setDataFormat(format.getFormat("yyyy-MM-dd"));

        Row rowTitle = sheet.createRow(0);
        rowTitle.setHeightInPoints(30);// 设备标题的高度
        String[] titleName = { "项目EAS代码", "工程项目名称", "所属项目部" , "日期"
                , "合同序号", "完工进度依据", "完工百分比", "可开票金额百分比"
                , "合同约定回款节点百分比", "合同工程名称"};
        //设置表头
        for (int i = 0; i < titleName.length; i++)
        {
            Cell cell = rowTitle.createCell(i);
            cell.setCellValue(titleName[i]);
            sheet.setColumnWidth(i, 4000);//设置列宽
        }
        // 第五步，创建单元格，并设置值
        for (int i = 0; i < list.size(); i++){
            Row row = sheet.createRow(i+1);
            ProjectNode projectNodeTmp = list.get(i);
            for (int j = 0; j < titleName.length; j++) {
                Cell datacell = row.createCell(j);
                if("日期".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getSigningDate());
                    datacell.setCellStyle(cellStyle);
                }
                else if("合同序号".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getContractId());
                }
                else if("项目EAS代码".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getEasCode());
                }
                else if("工程项目名称".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getProjectName());
                }
                else if("合同工程名称".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getContractName());
                }
                else if("所属项目部".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getProjectDepartment());
                }
                else if("完工进度依据".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getCompletionProgress());
                }
                else if("完工百分比".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getCompletionPercentage());
                }
                else if("可开票金额百分比".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getOpenedAmountPercentage());
                }
                else if("合同约定回款节点百分比".equals(titleName[j])){
                    datacell.setCellValue(projectNodeTmp.getBackPaymentPercentage());
                }
            }
        }
        // 第六步，将文件存到浏览器设置的下载位置
        String filename = "工程节点.xlsx";
        response.setContentType("application/ms-excel;charset=UTF-8");
        try {
            response.setHeader("Content-Disposition", "attachment;filename="
                    .concat(String.valueOf(URLEncoder.encode(filename, "UTF-8"))));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        OutputStream out = null;
        try {
            out = response.getOutputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            wb.write(out);// 将数据写出去
            String str = "导出" + filename + "成功！";
            logger.info(str);
        } catch (Exception e) {
            e.printStackTrace();
            String str1 = "导出" + filename + "失败！";
            logger.info(str1);
        } finally {
            try {
                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}
