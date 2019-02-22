const indexControl=require('./app-index-control');
const searchPage=require('../module/searchpage');

const rander=()=>{
    indexControl.rander();
    indexControl.banner();
    searchPage.rander();
}

module.exports={rander}