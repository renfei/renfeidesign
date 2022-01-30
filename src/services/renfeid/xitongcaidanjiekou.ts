// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 修改系统菜单 修改系统菜单 PUT /_/api/sys/menu/${param0} */
export async function updateSysMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSysMenuParams,
  body: API.SysMenu,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.APIResult>(`/_/api/sys/menu/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除系统菜单 删除系统菜单，下面的子菜单不会被删除，而是会断开树形链接 DELETE /_/api/sys/menu/${param0} */
export async function deleteSysMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSysMenuParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.APIResult>(`/_/api/sys/menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取系统菜单列表 获取后台菜单列表，超管和安全管理员可以获取全部，其他人只能获取到自己拥有的菜单 GET /_/api/sys/menu */
export async function getMenuList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMenuListParams,
  options?: { [key: string]: any },
) {
  return request<API.APIResultListDataSysMenu>('/_/api/sys/menu', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加系统菜单 添加系统菜单 POST /_/api/sys/menu */
export async function addSysMenu(body: API.SysMenu, options?: { [key: string]: any }) {
  return request<API.APIResult>('/_/api/sys/menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取系统菜单树 获取后台左侧菜单树 GET /_/api/sys/menu/tree */
export async function getMenuTreeByUser(options?: { [key: string]: any }) {
  return request<API.APIResultListMenuDataItemVo>('/_/api/sys/menu/tree', {
    method: 'GET',
    ...(options || {}),
  });
}
