package com.service;

import com.domain.User;

import java.util.List;
import java.util.Map;

/**
 * Created by yuxingzheng on 2018/1/22.
 */
public interface IUserService {

    public Map<String,String> loginUser(User user);

    public long getCountUser(User user);

    public List<User> queryUserByPage(User user);

    public String saveUser(User user);

    public String updateUser(User user);

    public String deleteUser(User user);

    public boolean isAdmin(String userName);

}