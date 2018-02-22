package com.dao;

import com.domain.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IUserDao {

    public List<User> loginUser(User user);

    public long getCountUser(User user);

    public List<User> queryUserByPage(User user);

    public int saveUser(User user);

    public int updateUser(User user);

    public int deleteUser(User user);

    public String getName(User user);

    public String isAdmin(String userName);

}