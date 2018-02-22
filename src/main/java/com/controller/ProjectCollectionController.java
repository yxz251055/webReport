package com.controller;

import com.domain.ProjectCollection;
import com.domain.User;
import com.service.IProjectCollectionService;
import com.service.IUserService;
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
@RequestMapping("/projectController")
public class ProjectCollectionController {

    @Resource
    private IProjectCollectionService projectCollectionService;

    @Resource
    private IUserService userService;

    /*
    查询列表
     */
    @RequestMapping("/queryProjectController")
    @ResponseBody
    public Map queryProjectCollection(HttpServletRequest request,Model model,ProjectCollection projectCollection){
        String role = (String)request.getSession().getAttribute("role");
        if("admin".equals(role)){
            projectCollection.setOperateId("");
        }
        //获取总数
        long total = projectCollectionService.getCountProjectCollection(projectCollection);
        //获取list
        List<ProjectCollection> list =  projectCollectionService.queryProjectCollectionByPage(projectCollection);
        Map map = new HashMap();
        map.put("rows",list);
        map.put("total", total);
        return map;
    }

    /*
        新增
     */

    @RequestMapping("/saveProjectController")
    @ResponseBody
    public String saveProjectBasic(HttpServletRequest request,Model model,ProjectCollection projectCollection){
        String result = "";
        result = projectCollectionService.saveProjectCollection(projectCollection);
        return result;
    }

    /*
        修改
     */

    @RequestMapping("/updateProjectController")
    @ResponseBody
    public String updateProjectBasic(HttpServletRequest request,Model model,ProjectCollection projectCollection){
        String result = "";
        result = projectCollectionService.updateProjectCollection(projectCollection);
        return result;
    }

    /*
        删除
     */

    @RequestMapping("/deleteProjectController")
    @ResponseBody
    public String deleteProjectBasic(HttpServletRequest request,Model model,ProjectCollection projectCollection){
        String result = "";
        result = projectCollectionService.deleteProjectCollection(projectCollection);
        return result;
    }
}
