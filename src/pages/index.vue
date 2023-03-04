<template>
	<div class="container p12 flex fc ac">
		<div class="mb_20 font_color fw-500 f16">广育仓库</div>
		<div class="content flex flex-1 fc ac p20">
			<img class="result_icon mt_30" src="../static/result_success.png" v-if="result == 1">
			<img class="result_icon mt_30" src="../static/result_fail.png" v-else>
			<div class="f16 fw-500 mt_20 mb_100">扫码{{result == 1?'成功':'失败'}}</div>
			<div class="width-100 flex jsb f14 mb_20" v-if="result == 1">
				<div>姓名</div>
				<div>赵子龙</div>
			</div>
			<div class="width-100 flex jsb f14 mb_20" v-if="result == 1">
				<div>部门</div>
				<div>仓储部</div>
			</div>
			<div class="width-100 flex jsb f14 mb_20" v-if="result == 1">
				<div>扫码时间</div>
				<div>2023/03/09 11:09:09</div>
			</div>
			<div class="f14" v-if="result == 2">{{warning_text}}</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				result:2,			//1:成功；2:失败
				warning_text:"系统错误，请重新扫码！",		//失败提示
			}
		}
	}
</script>
<style lang="less" scoped>
.content{
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0px 0px 8px 2px #F2F7FF;
	border-radius: 8px;
	.result_icon{
		width: 80px;
		height: 100px;
	}
}
</style>