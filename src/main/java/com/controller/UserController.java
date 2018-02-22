package com.controller;

import com.domain.User;
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
 * Created by yuxingzheng on 2018/1/22.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private IUserService userService;

    /*
    判断是否登录成功,并返回登录用户名
     */
    @RequestMapping("/login")
    @ResponseBody
    public Map<String,String> login(HttpServletRequest request,Model model,User user){
        Map<String,String> result = new HashMap<String,String>();
        result = userService.loginUser(user);
        return result;
    }

    /*
    查询列表
     */
    @RequestMapping("/queryUser")
    @ResponseBody
    public Map queryProjectNode(HttpServletRequest request,Model model,User user){
        //获取总数
        long total = userService.getCountUser(user);
        //获取list
        List<User> list =  userService.queryUserByPage(user);
        Map map = new HashMap();
        map.put("rows",list);
        map.put("total", total);
        return map;
    }

    /*
        新增
     */

    @RequestMapping("/saveUser")
    @ResponseBody
    public String saveUser(HttpServletRequest request,Model model,User user){
        String result = "";
        result = userService.saveUser(user);
        return result;
    }

    /*
        修改
     */

    @RequestMapping("/updateUser")
    @ResponseBody
    public String updateUser(HttpServletRequest request,Model model,User user){
        String result = "";
        result = userService.updateUser(user);
        return result;
    }

    /*
        删除
     */

    @RequestMapping("/deleteUser")
    @ResponseBody
    public String deleteUser(HttpServletRequest request,Model model,User user){
        String result = "";
        result = userService.deleteUser(user);
        return result;
    }
}