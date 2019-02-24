const regtelhtml=require('../view/id-login.html');

const rander=()=>{
    let template=Handlebars.compile(regtelhtml);
    let html=template();
    $('.input-box').html(html);
}


module.exports={
    rander
}