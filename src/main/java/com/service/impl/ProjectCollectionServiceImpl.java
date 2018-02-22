package com.service.impl;

import com.dao.IProjectCollectionDao;
import com.domain.ProjectCollection;
import com.service.IProjectCollectionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
@Service("projectCollectionService")
public class ProjectCollectionServiceImpl implements IProjectCollectionService{

    @Resource
    private IProjectCollectionDao iProjectCollectionDao;

    @Override
    public long getCountProjectCollection(ProjectCollection projectCollection) {
        long total = iProjectCollectionDao.getCountProjectCollection(projectCollection);
        return total;
    }

    @Override
    public List<ProjectCollection> queryProjectCollectionByPage(ProjectCollection projectCollection) {
        List<ProjectCollection> list = new ArrayList<ProjectCollection>();
        list = iProjectCollectionDao.queryProjectCollectionByPage(projectCollection);
        return list;
    }

    @Override
    public String saveProjectCollection(ProjectCollection projectCollection) {
        int i = iProjectCollectionDao.saveProjectCollection(projectCollection);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String updateProjectCollection(ProjectCollection projectCollection) {
        int i = iProjectCollectionDao.updateProjectCollection(projectCollection);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String deleteProjectCollection(ProjectCollection projectCollection) {
        int i = iProjectCollectionDao.deleteProjectCollection(projectCollection);
        if(1==i){
            return "success";
        }
        return null;
    }
}
