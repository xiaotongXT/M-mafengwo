const data=require('./add-data');
const appMain=require('../view/main.html')

const rander=async()=>{
	let list=await data();
	let newlist=JSON.parse(list).data.list;
	let template = Handlebars.compile(appMain);
	$('#app .app-main-content').append(template({ films: newlist }));
	$('#app .app-main-content').children().eq(0).find('.content-title img').attr('src','https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png')

	console.log(newlist);
}


module.exports={rander}