package com.service.impl;

import com.dao.IUserDao;
import com.domain.User;
import com.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yuxingzheng on 2018/1/22.
 */
@Service("userService")
public class UserServiceImpl implements IUserService {
    @Resource
    private IUserDao userDao;

    @Override
    public Map<String,String> loginUser(User user) {
        Map<String,String> result = new HashMap<String, String>();
        List<User> list = new ArrayList<User>();
        list = userDao.loginUser(user);
        if(list!=null&&list.size()>0){
            result.put("name", list.get(0).getName());
            result.put("role", list.get(0).getRole());
            result.put("userName", list.get(0).getUserName());
        }
        return result;
    }

    @Override
    public long getCountUser(User user) {
        long total = userDao.getCountUser(user);
        return total;
    }

    @Override
    public List<User> queryUserByPage(User user) {
        List<User> list = new ArrayList<User>();
        list = userDao.queryUserByPage(user);
        return list;
    }

    @Override
    public String saveUser(User user) {
        int i = userDao.saveUser(user);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String updateUser(User user) {
        int i = userDao.updateUser(user);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String deleteUser(User user) {
        int i = userDao.deleteUser(user);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public boolean isAdmin(String userName) {
        String role = userDao.isAdmin(userName);
        if("admin".equals(role)){
            return true;
        }
        return false;
    }

}
