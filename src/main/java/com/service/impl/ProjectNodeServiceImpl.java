package com.service.impl;

import com.dao.IProjectNodeDao;
import com.domain.ProjectNode;
import com.service.IProjectNodeService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/28.
 */
@Service("projectNodeService")
public class ProjectNodeServiceImpl implements IProjectNodeService{

    @Resource
    private IProjectNodeDao projectNodeDao;

    @Override
    public long getCountProjectNode(ProjectNode projectNode) {
        long total = projectNodeDao.getCountProjectNode(projectNode);
        return total;
    }

    @Override
    public List<ProjectNode> queryProjectNodeByPage(ProjectNode projectNode) {
        List<ProjectNode> list = new ArrayList<ProjectNode>();
        list = projectNodeDao.queryProjectNodeByPage(projectNode);
        return list;
    }

    @Override
    public String saveProjectNode(ProjectNode projectNode) {
        int i = projectNodeDao.saveProjectNode(projectNode);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String updateProjectNode(ProjectNode projectNode) {
        int i = projectNodeDao.updateProjectNode(projectNode);
        if(1==i){
            return "success";
        }
        return null;
    }

    @Override
    public String deleteProjectNode(ProjectNode projectNode) {
        int i = projectNodeDao.deleteProjectNode(projectNode);
        if(1==i){
            return "success";
        }
        return null;
    }
}
