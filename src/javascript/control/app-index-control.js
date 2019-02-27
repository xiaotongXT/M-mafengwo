const data=require('./add-data');
const appMain=require('../view/main.html');
const bannerhtml=require('../view/banner.html');

//加载数据列表
const rander=async(url)=>{
	let list=await data.ToobtainData(url);
	let newlist=JSON.parse(list).data.list;
	let maintemplate = Handlebars.compile(appMain);
	$('#app .app-main-content').append(maintemplate({ films: newlist }));
	$('#app .app-main-content').children().eq(0).find('.content-title img').attr('src','https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png');

}

//加载轮播图
const banner=async()=>{
	let bannerimg=await data.bannerimg();
	let bannertemplate = Handlebars.compile(bannerhtml);
	$('#app-banner .swiper-wrapper').append(bannertemplate({ banner: bannerimg.bannerimg }));
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		loop:true,//循环模式
		pagination: {
			el: '.swiper-pagination',
		}
})
}


module.exports={rander,banner}