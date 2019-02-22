const allContrall=require('./control/app-control');
const Scroll=require('./module/scroll')


allContrall.rander();

let scroll=new Scroll();
scroll.init();
window.addEventListener('hashchange',()=>{
	console.log(location.hash);
	
})