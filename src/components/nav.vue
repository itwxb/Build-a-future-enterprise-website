<template>
	<div>
		<div class="wrap">
			<div class="logo">
				<img :src="logoimg" />
			</div>

			<div class="nav">
				<div class="dropdown">
					<button class="dropbtn" @click="funRouter">集团产业</button>
					<div class="dropdown-content">
						<router-link to="/keji">科技</router-link>
						<router-link to="/zhijiao">职教</router-link>
						<router-link to="/youjiao">幼教</router-link>
						<router-link to="/dianshang">电商</router-link>

						<router-link to="/jinrong">金融</router-link>
					</div>
				</div>
				<ul>
					<li
						v-for="(item, index) in navList"
						:key="index"
						@click="funyuming(item.url)"
					>
						{{ item.title }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Nav",
	data() {
		return {
			navList: [
				{ title: "首页", url: "/" },
				{ title: "集团概括", url: "/jituangaikuo" },
				{ title: "集团产业", url: "/keji" },
				{ title: "集团新闻", url: "/xinwen" },
				{ title: "招聘详情", url: "/zhaopinxiangqing0_0" },
				{ title: "联系我们", url: "/lianxi" },
				{ title: "招聘信息", url: "/zhaopinxinxi0" },
			],
			logoimg: require("../assets/img/lALPDhmOw39u8LZszQFq_362_108.png_720x720q90g.jpg"),
		};
	},
	methods: {
		funyuming(msg) {
			this.$router.push(msg);
		},
		funRouter() {
			this.$router.push("/keji");
		},
	},
};
</script>
<style scoped>
.wrap {
	position: relative;
	width: 100vw;
	height: 101px;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
}

.wrap > .logo > img {
	position: absolute;
	left: 360px;
	top: 23px;
	width: 181px;
	height: 54px;
}

.nav {
	width: 556px;
	position: absolute;
	left: 1000px;
	top: -9px;
}

.nav ul {
	height: 100%;
}

.nav ul li {
	height: 46px;
	float: left;
	display: flex;
	list-style-type: none;
	color: rgba(68, 68, 68, 1);
	font-size: 16px;
	margin-right: 20px;
	line-height: 50%;
	cursor: pointer;
}

.nav ul li:hover {
	color: rgba(35, 51, 127, 1);
	border-bottom: 2px solid rgba(35, 51, 127, 1);
}
.dropbtn {
	background-color: #fff;
	color: rgba(68, 68, 68, 1);
	padding: 16px;
	font-size: 16px;
	border: none;
	cursor: pointer;
}

.dropdown {
	top: 30px;
	left: 120px;
	position: relative;
	display: inline-block;
}

.dropdown-content {
	z-index: 999;
	text-align: center;
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 95px;
	min-height: 120px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
}

.dropdown-content a:hover {
	background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
	display: block;
}
</style>
