package com.dao;

import com.domain.ProjectNode;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/28.
 */
public interface IProjectNodeDao {

    public long getCountProjectNode(ProjectNode projectNode);

    public List<ProjectNode> queryProjectNodeByPage(ProjectNode projectNode);

    public int saveProjectNode(ProjectNode projectNode);

    public int updateProjectNode(ProjectNode projectNode);

    public int deleteProjectNode(ProjectNode projectNode);
}
