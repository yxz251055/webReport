package com.domain;

import java.util.Date;

/**
 * Created by yuxingzheng on 2018/1/25.
 */
public class ProjectBasic {

    private Integer id;
    private Date signingDate;				//合同签订日期
    private String contractId;				//合同序号
    private String easCode;					//项目EAS代码
    private String projectName;				//工程项目名称
    private String contractName;			//合同工程名称
    private String sectionType;				//项目分类
    private String partyAName;				//甲方公司名称
    private String partyAArea;				//甲方所属区域
    private String projectDepartment;		//所属项目部
    private String taxMethod;				//计税方式
    private String invoiceType;				//发票类型
    private double contractAmount;			//合同金额
    private double settlementAmount;		//结算金额
    private String backPaymentConditions;	//合同约定回款进度条件
    private Integer dedWarrantyProportion;	//扣除质保金比例
    private Date warrantyStartDate;			//质保期开始日期
    private Date warrantyDueDate;			//质保金到期日
    private Date projectEntryDate;			//项目进场日期
    private Date projectCompletionDate;		//项目竣工日期
    private Date projectSettlementDate;		//项目结算日期
    private String operateId;				//操作人
    private Date createDate;				//创建日期
    private Date updateDate;				//更新日期
    private Integer yn;                     //是否有效

    private String startDate;
    private String endDate;
    private String pageSize;
    private String pageNumber;

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getPageSize() {
        return pageSize;
    }

    public void setPageSize(String pageSize) {
        this.pageSize = pageSize;
    }

    public String getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getSigningDate() {
        return signingDate;
    }

    public void setSigningDate(Date signingDate) {
        this.signingDate = signingDate;
    }

    public String getContractId() {
        return contractId;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public String getEasCode() {
        return easCode;
    }

    public void setEasCode(String easCode) {
        this.easCode = easCode;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getContractName() {
        return contractName;
    }

    public void setContractName(String contractName) {
        this.contractName = contractName;
    }

    public String getSectionType() {
        return sectionType;
    }

    public void setSectionType(String sectionType) {
        this.sectionType = sectionType;
    }

    public String getPartyAName() {
        return partyAName;
    }

    public void setPartyAName(String partyAName) {
        this.partyAName = partyAName;
    }

    public String getPartyAArea() {
        return partyAArea;
    }

    public void setPartyAArea(String partyAArea) {
        this.partyAArea = partyAArea;
    }

    public String getProjectDepartment() {
        return projectDepartment;
    }

    public void setProjectDepartment(String projectDepartment) {
        this.projectDepartment = projectDepartment;
    }

    public String getTaxMethod() {
        return taxMethod;
    }

    public void setTaxMethod(String taxMethod) {
        this.taxMethod = taxMethod;
    }

    public String getInvoiceType() {
        return invoiceType;
    }

    public void setInvoiceType(String invoiceType) {
        this.invoiceType = invoiceType;
    }

    public double getContractAmount() {
        return contractAmount;
    }

    public void setContractAmount(double contractAmount) {
        this.contractAmount = contractAmount;
    }

    public double getSettlementAmount() {
        return settlementAmount;
    }

    public void setSettlementAmount(double settlementAmount) {
        this.settlementAmount = settlementAmount;
    }

    public String getBackPaymentConditions() {
        return backPaymentConditions;
    }

    public void setBackPaymentConditions(String backPaymentConditions) {
        this.backPaymentConditions = backPaymentConditions;
    }

    public Integer getDedWarrantyProportion() {
        return dedWarrantyProportion;
    }

    public void setDedWarrantyProportion(Integer dedWarrantyProportion) {
        this.dedWarrantyProportion = dedWarrantyProportion;
    }

    public Date getWarrantyStartDate() {
        return warrantyStartDate;
    }

    public void setWarrantyStartDate(Date warrantyStartDate) {
        this.warrantyStartDate = warrantyStartDate;
    }

    public Date getWarrantyDueDate() {
        return warrantyDueDate;
    }

    public void setWarrantyDueDate(Date warrantyDueDate) {
        this.warrantyDueDate = warrantyDueDate;
    }

    public Date getProjectEntryDate() {
        return projectEntryDate;
    }

    public void setProjectEntryDate(Date projectEntryDate) {
        this.projectEntryDate = projectEntryDate;
    }

    public Date getProjectCompletionDate() {
        return projectCompletionDate;
    }

    public void setProjectCompletionDate(Date projectCompletionDate) {
        this.projectCompletionDate = projectCompletionDate;
    }

    public Date getProjectSettlementDate() {
        return projectSettlementDate;
    }

    public void setProjectSettlementDate(Date projectSettlementDate) {
        this.projectSettlementDate = projectSettlementDate;
    }

    public String getOperateId() {
        return operateId;
    }

    public void setOperateId(String operateId) {
        this.operateId = operateId;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Integer getYn() {
        return yn;
    }

    public void setYn(Integer yn) {
        this.yn = yn;
    }
}
