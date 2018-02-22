package com.service;

import com.domain.ProjectCollection;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/29.
 */
public interface IProjectCollectionService {

    public long getCountProjectCollection(ProjectCollection projectCollection);

    public List<ProjectCollection> queryProjectCollectionByPage(ProjectCollection projectCollection);

    public String saveProjectCollection(ProjectCollection projectCollection);

    public String updateProjectCollection(ProjectCollection projectCollection);

    public String deleteProjectCollection(ProjectCollection projectCollection);
}
