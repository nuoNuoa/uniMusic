<script>
	import { mapMutations } from 'vuex';
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			let adShowTime = (10 * 60 * 1000) //10分钟
			let nowTime = (new Date()).getTime()
			let leaveTime = this.$store.state.leaveTime
			if((nowTime - leaveTime) > adShowTime) {
				console.log('出现广告吧');
				setTimeout(() => {
					uni.navigateTo({
						url:'/pages/account/ad'
					});
				},10);
			}
		},
		onHide: function() {
			console.log('App Hide')
			// 记录离开时间
			this.$store.commit('storeLeaveTime')
		},
		methods: {
			...mapMutations(['storeLogin','storeLogout','storeMessage'])
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'common/css/common.scss';
	@import './common/css/iconfont.css';
	view {
		font-size: 30rpx ;
	}
</style>
