const regtelhtml=require('../view/id-login.html');

const rander=()=>{
    let template=Handlebars.compile(regtelhtml);
    let html=template();
    $('.signup-txt').html(html);
    $('.speediness').html('快速注册');
    $('.speediness').attr('href','#reg-tel');
}


module.exports={
    rander
}