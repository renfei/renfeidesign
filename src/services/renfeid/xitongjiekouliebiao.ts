// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取系统接口列表 此接口只能获取用户拥有的接口权限，超管和安全管理员可以获取全部接口 GET /_/api/sys/api */
export async function getSysApiList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSysApiListParams,
  options?: { [key: string]: any },
) {
  return request<API.APIResultListDataSysApi>('/_/api/sys/api', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
