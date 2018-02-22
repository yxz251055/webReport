package com.dao;

import com.domain.ProjectCollection;

import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
public interface IProjectCollectionDao {

    public long getCountProjectCollection(ProjectCollection projectCollection);

    public List<ProjectCollection> queryProjectCollectionByPage(ProjectCollection projectCollection);

    public int saveProjectCollection(ProjectCollection projectCollection);

    public int updateProjectCollection(ProjectCollection projectCollection);

    public int deleteProjectCollection(ProjectCollection projectCollection);
}
