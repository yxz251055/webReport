package com.util;

import org.apache.poi.ss.usermodel.DateUtil;
import java.util.Calendar;

/**
 * Created by yuxingzheng on 2018/2/2.
 */
public class XSSFDateUtil extends DateUtil {

    protected static int absoluteDay(Calendar cal, boolean use1904windowing) {
        return DateUtil.absoluteDay(cal, use1904windowing);
    }
}
