import request from '@/utils/request/index.js'
const baseUrl = "https://www.gzamon.wang/api"
export function apiGetNavList(data) {
	return uni.request({
		url: baseUrl + '/minemock',
		method: 'GET',
		data: data,
		authType: 'None'
	})
}
