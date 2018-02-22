package com.dao;

import com.domain.ProjectBasic;
import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/25.
 */
public interface IProjectBasicDao {

    public long getCountProjectBasic(ProjectBasic projectBasic);

    public List<ProjectBasic> queryProjectBasicByPage(ProjectBasic projectBasic);

    public int saveProjectBasic(ProjectBasic projectBasic);

    public int updateProjectBasic(ProjectBasic projectBasic);

    public int deleteProjectBasic(ProjectBasic projectBasic);

}
