package com.service.impl;

import com.dao.IProjectBasicDao;
import com.domain.ProjectBasic;
import com.service.IProjectBasicService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/25.
 */
@Service("projectBasicService")
public class ProjectBasicServiceImpl implements IProjectBasicService{

    @Resource
    private IProjectBasicDao projectBasicDao;

    @Override
    public long getCountProjectBasic(ProjectBasic projectBasic) {
        long total = projectBasicDao.getCountProjectBasic(projectBasic);
        return total;
    }

    @Override
    public List<ProjectBasic> queryProjectBasicByPage(ProjectBasic projectBasic) {
        List<ProjectBasic> list = new ArrayList<ProjectBasic>();
        list = projectBasicDao.queryProjectBasicByPage(projectBasic);
        return list;
    }

    @Override
    public String saveProjectBasic(ProjectBasic projectBasic) {
        int i = projectBasicDao.saveProjectBasic(projectBasic);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String updateProjectBasic(ProjectBasic projectBasic) {
        int i = projectBasicDao.updateProjectBasic(projectBasic);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String deleteProjectBasic(ProjectBasic projectBasic) {
        int i = projectBasicDao.deleteProjectBasic(projectBasic);
        if(1==i){
            return "success";
        }
        return null;
    }
}
