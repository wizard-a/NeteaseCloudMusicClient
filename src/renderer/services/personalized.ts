import request from '@/utils/request';

/**
 * 获取推荐歌单
 */
export async function queryPersonalizeList(): Promise<any> {
  return request('/personalized');
}


/**
 * 获取歌单列表
 */
export async function queryPlayList(id: string): Promise<any> {
  return request(`/playlist/detail?id=${id}`);
}

/**
 * 根据ids获取歌曲想起
 */
export async function querySongDetail(ids): Promise<any> {
  return request(`/song/detail?ids=${ids}`);
}




// export async function queryCurrent(): Promise<any> {
//   return request('/api/currentUser');
// }

// export async function queryNotices(): Promise<any> {
//   return request('/api/notices');
// }