const baseUrl = "https://www.gzamon.wang/api"
// 获取轮播图
export function apiGetBanner(data) {
	return uni.request({
		url: baseUrl + '/banner',
		method: 'GET',
		data,
	})
}
// 获取推荐歌单
export function apiGetRecommendSongs(data) {
	return uni.request({
		url: baseUrl + '/personalized',
		method: 'GET',
		data,
	})
}
// 获取index
// export function apiGetIndexData(data) {
// 	return request.request({
// 		url: '/aaIndex',
// 		method: 'GET',
// 		data,
// 	})
// }
// 获取新碟
export function apiGetTopAlbum(data) {
	return uni.request({
		url: baseUrl + '/album/newest',
		method: 'GET',
		data,
	})
}

export function apiGetRelatedVideo(data) {
	return uni.request({
		url: baseUrl + '/top/mv',
		method: 'GET',
		data,
		hideLoading: true
	})
}

export function apiGetHotList(data) {
	return uni.request({
		url: baseUrl + '/top/playlist',
		method: 'GET',
		data,
	})
}

// 获取歌单详情
export function apiAlbumDetail(data) {
	return uni.request({
		url: baseUrl + '/playlist/detail',
		method: 'GET',
		data,
	})
}

// 获取搜索
export function apiSearch(data) {
	return uni.request({
		url: baseUrl + '/search',
		method: 'GET',
		data,
	})
}

// 获取排行榜
export function apiToplist(data) {
	return uni.request({
		url: baseUrl + '/toplist',
		method: 'GET',
		data,
	})
}

// 获取排行榜
export function apiTopSinglelist(data) {
	return uni.request({
		url: baseUrl + '/top/list',
		method: 'GET',
		data,
	})
}

// 获取歌曲链接
export function apiSongUrl(data) {
	return uni.request({
		url: baseUrl + '/song/url',
		method: 'GET',
		data,
	})
}

// 获取歌曲详情
export function apiSongDetail(data) {
	return uni.request({
		url: baseUrl + '/song/detail',
		method: 'GET',
		data,
	})
}