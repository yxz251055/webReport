package com.util;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by yuxingzheng on 2018/1/31.
 */
public class ExcelUtil  {

    /*
    获取第一行标题
     */
    public static String[] getTitles(Sheet sheet){
        Row row = sheet.getRow(0);
        int colNum = row.getPhysicalNumberOfCells();
        String[] titles = new String[colNum];
        for (int i = 0; i < colNum; i++) {
            titles[i] = row.getCell(i).getStringCellValue();
        }
        return titles;
    }

    /**
     *
     * 根据Cell类型设置数据
     *
     * @param colNum:列数,rowTitle：表头，row：每一行数据
     * @return
     * @author yuxingzheng
     */
    public static Map<String,Object> excelRowToList(int colNum,Row rowTitle,Row row){
        Map<String,Object> map = new HashMap<String, Object>();
        Cell cell0 = row.getCell(0);
        if("".equals(((XSSFCell) cell0).getRawValue())){
            return map;
        }
        //循环每一列
        for(int j=0;j<colNum;j++){
            String key = rowTitle.getCell(j).getStringCellValue();
            if("".equals(key) || null == key){
                break;
            }
            //获取单元格
            Cell cell = row.getCell(j);
            if(cell != null){
                Object value = getCellFormatValue(cell);
                map.put(key, value);
            }
        }
        return map;
    }
    /*
        将exce内的数据转化为list,每一行数据为一个list
         */
    public static List<Object> excelToList(Sheet sheet){
        List<Object> resultList = new ArrayList<Object>();

        //获取第一行
        Row row = sheet.getRow(0);
        int lastRowNum = sheet.getLastRowNum();
        //获取列数
        int colNum = row.getPhysicalNumberOfCells();
        //循环所有行
        for(int i=1;i<=lastRowNum;i++){
            Row rowTmp = sheet.getRow(i);
            Map<String,Object> map = excelRowToList(colNum,row,rowTmp);
            if(map!=null && map.size()!=0) {
                resultList.add(map);
            }
        }
        return resultList;
    }
    /**
     *
     * 根据Cell类型设置数据
     *
     * @param cell
     * @return
     * @author yuxingzheng
     */
    private static Object getCellFormatValue(Cell cell) {
        Object cellvalue = "";
        if (cell != null) {
            // 判断当前Cell的Type
            switch (cell.getCellType()) {
                case Cell.CELL_TYPE_NUMERIC:// 如果当前Cell的Type为NUMERIC
                case Cell.CELL_TYPE_FORMULA: {
                    // 判断当前的cell是否为Date
                    if (DateUtil.isCellDateFormatted(cell)) {
                        Date date = cell.getDateCellValue();
                        cellvalue = date;
                    } else {// 如果是纯数字
                        // 取得当前Cell的数值
                        cellvalue = String.valueOf(cell.getNumericCellValue());
                    }
                    break;
                }
                case Cell.CELL_TYPE_STRING:// 如果当前Cell的Type为STRING
                    // 取得当前的Cell字符串
                    cellvalue = cell.getRichStringCellValue().getString();
                    break;
                default:// 默认的Cell值
                    cellvalue = "";
            }
        } else {
            cellvalue = "";
        }
        return cellvalue;
    }

    /*
    public static void main(String args[]){
        String filePath = "E:\\_git_code\\工程项目基础信息.xlsx";
        File file = new File(filePath);
        FileInputStream fs = null;
        try {
            fs = new FileInputStream(file);
            Workbook wb = null;
            try {
                wb = new XSSFWorkbook(fs);
            } catch (IOException e) {
                e.printStackTrace();
            }
            Sheet sheet = wb.getSheetAt(0);
            List<Object> list = excelToList(sheet);
            System.out.print(list.toString());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
    */
}
/*
第四种：百分比格式

s

            cell.setCellValue(20);

            HSSFCellStyle cellStyle = demoWorkBook.createCellStyle();

            cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00%"));

            cell.setCellStyle(cellStyle);

  此种情况跟第二种一样

  HSSFCellStyle cellStyle = demoWorkBook.createCellStyle();

            HSSFDataFormat format= demoWorkBook.createDataFormat();

            cellStyle.setDataFormat(format.getFormat("yyyy年m月d日"));

            cell.setCellStyle(cellStyle);
 */
