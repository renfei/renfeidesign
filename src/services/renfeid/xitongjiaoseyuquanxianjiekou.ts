// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 修改系统角色 只有超管和安全管理员可以修改系统角色 PUT /_/api/sys/role/${param0} */
export async function updateSysRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSysRoleParams,
  body: API.SysRole,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.APIResult>(`/_/api/sys/role/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除系统角色 只有超管和安全管理员可以删除系统角色 DELETE /_/api/sys/role/${param0} */
export async function deleteSysRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSysRoleParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.APIResult>(`/_/api/sys/role/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取系统角色列表 只能获取到登陆用户自己拥有的角色，超管和安全管理员可以获取所有角色 GET /_/api/sys/role */
export async function getSysRoleList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSysRoleListParams,
  options?: { [key: string]: any },
) {
  return request<API.APIResultListDataSysRole>('/_/api/sys/role', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加系统角色 只有超管和安全管理员可以添加角色 POST /_/api/sys/role */
export async function addSysRole(body: API.SysRole, options?: { [key: string]: any }) {
  return request<API.APIResult>('/_/api/sys/role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
