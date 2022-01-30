declare namespace API {
  type SysRole = {
    id?: number;
    zhName?: string;
    enName?: string;
    builtInRole?: boolean;
  };

  type APIResult = {
    code?: number;
    message?: string;
    timestamp?: number;
    signature?: string;
    nonce?: string;
    data?: Record<string, any>;
  };

  type SysMenu = {
    id?: number;
    parentId?: number;
    menuText?: string;
    menuLink?: string;
    menuIcon?: string;
    newWindow?: boolean;
    orderNumber?: number;
  };

  type QuartzJob = {
    jobName?: string;
    reference?: string;
    jobGroup?: string;
    cron?: string;
    param?: Record<string, any>;
  };

  type APIResultListDataSysRole = {
    code?: number;
    message?: string;
    timestamp?: number;
    signature?: string;
    nonce?: string;
    data?: ListDataSysRole;
  };

  type ListDataSysRole = {
    pageNum?: number;
    pageSize?: number;
    startRow?: number;
    endRow?: number;
    total?: number;
    pages?: number;
    data?: SysRole[];
  };

  type APIResultListDataSysMenu = {
    code?: number;
    message?: string;
    timestamp?: number;
    signature?: string;
    nonce?: string;
    data?: ListDataSysMenu;
  };

  type ListDataSysMenu = {
    pageNum?: number;
    pageSize?: number;
    startRow?: number;
    endRow?: number;
    total?: number;
    pages?: number;
    data?: SysMenu[];
  };

  type APIResultListMenuDataItemVo = {
    code?: number;
    message?: string;
    timestamp?: number;
    signature?: string;
    nonce?: string;
    data?: MenuDataItemVo[];
  };

  type MenuDataItemVo = {
    id?: number;
    authority?: string[];
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    locale?: string;
    name?: string;
    path?: string;
  };

  type APIResultListDataSysApi = {
    code?: number;
    message?: string;
    timestamp?: number;
    signature?: string;
    nonce?: string;
    data?: ListDataSysApi;
  };

  type ListDataSysApi = {
    pageNum?: number;
    pageSize?: number;
    startRow?: number;
    endRow?: number;
    total?: number;
    pages?: number;
    data?: SysApi[];
  };

  type SysApi = {
    id?: number;
    urlPath?: string;
    methodName?: string;
    summary?: string;
    description?: string;
  };

  type updateSysRoleParams = {
    id: number;
  };

  type deleteSysRoleParams = {
    id: number;
  };

  type updateSysMenuParams = {
    id: number;
  };

  type deleteSysMenuParams = {
    id: number;
  };

  type updateJobParams = {
    jobName: string;
    jobGroup: string;
    cron: string;
  };

  type resumeJobParams = {
    jobName: string;
    jobGroup: string;
  };

  type pauseJobParams = {
    jobName: string;
    jobGroup: string;
  };

  type getSysRoleListParams = {
    pages?: string;
    rows?: string;
  };

  type getMenuListParams = {
    pages?: string;
    rows?: string;
  };

  type getSysApiListParams = {
    pages?: string;
    rows?: string;
  };
}
