const regtelhtml=require('../view/reg-tel.html');

const rander=()=>{
    let template=Handlebars.compile(regtelhtml);
    let html=template();
    $('.signup-txt').html(html);
    $('.speediness').html('登陆')
    $('.speediness').attr('href','#id-login');
}


module.exports={
    rander
}