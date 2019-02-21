const allContrall=require('./control/app-control');
const Scroll=require('./api/scroll')

//轮播图
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,//可选选项，自动滑动
	loop:true,//循环模式
	pagination: {
		el: '.swiper-pagination',
	}
})
allContrall.rander();

let scroll=new Scroll();
scroll.init()