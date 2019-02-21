const data=require('./add-data');
const appMain=require('../view/main.html')

const rander=async()=>{
	let list=await data();
	let template = Handlebars.compile(appMain);
	$('#app .app-main-content').append(template({ films: JSON.parse(list).data.list }))
	//console.log(JSON.parse(list).data.list);
	
	
}

module.exports={rander}