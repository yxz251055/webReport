package com.service;

import com.domain.ProjectBasic;

import java.util.List;

/**
 * Created by yuxingzheng on 2018/1/25.
 */
public interface IProjectBasicService {

    public long getCountProjectBasic(ProjectBasic projectBasic);

    public List<ProjectBasic> queryProjectBasicByPage(ProjectBasic projectBasic);

    public String saveProjectBasic(ProjectBasic projectBasic);

    public String updateProjectBasic(ProjectBasic projectBasic);

    public String deleteProjectBasic(ProjectBasic projectBasic);
}
