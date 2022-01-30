// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 更新定时任务 PUT /_/api/quartz/job */
export async function updateJob(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJobParams,
  options?: { [key: string]: any },
) {
  return request<API.APIResult>('/_/api/quartz/job', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加定时任务 POST /_/api/quartz/job */
export async function addJob(body: API.QuartzJob, options?: { [key: string]: any }) {
  return request<API.APIResult>('/_/api/quartz/job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 继续定时任务 PUT /_/api/quartz/job/resume */
export async function resumeJob(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.resumeJobParams,
  options?: { [key: string]: any },
) {
  return request<API.APIResult>('/_/api/quartz/job/resume', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 暂停定时任务 PUT /_/api/quartz/job/pause */
export async function pauseJob(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pauseJobParams,
  options?: { [key: string]: any },
) {
  return request<API.APIResult>('/_/api/quartz/job/pause', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
