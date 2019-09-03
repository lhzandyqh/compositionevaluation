import request from '@/utils/request'

// 获取作文列表里面的数据
export function getCompositionListData (parems) {
  return request({
    url: '/zihui/AllEssays',
    method: 'get',
    params: parems
  })
}

// 获取推荐列表数据
export function getRecommandListData (parems) {
  return request({
    url: '/zihui/allCommend',
    method: 'get',
    params: parems
  })
}

// 搜索关键字获取相关作文数据
export function getResearchListData (parems) {
  return request({
    url: '/zihui/plat/searchwithWord',
    method: 'get',
    params: parems
  })
}

// 获得作文详情
export function getContentData (parems) {
  return request({
    url: '/zihui/show',
    method: 'get',
    params: parems
  })
}
