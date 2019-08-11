import request from '@/utils/request';

/**
 * 获取推荐歌单
 */
export async function queryPersonalizeList(): Promise<any> {
  return request('/personalized');
}

// export async function queryCurrent(): Promise<any> {
//   return request('/api/currentUser');
// }

// export async function queryNotices(): Promise<any> {
//   return request('/api/notices');
// }