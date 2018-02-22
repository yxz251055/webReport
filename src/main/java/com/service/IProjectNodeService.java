package com.service;

import com.domain.ProjectNode;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/28.
 */
public interface IProjectNodeService {

    public long getCountProjectNode(ProjectNode projectNode);

    public List<ProjectNode> queryProjectNodeByPage(ProjectNode projectNode);

    public String saveProjectNode(ProjectNode projectNode);

    public String updateProjectNode(ProjectNode projectNode);

    public String deleteProjectNode(ProjectNode projectNode);
}
