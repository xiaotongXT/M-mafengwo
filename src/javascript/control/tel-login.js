const telLoginhtml=require('../view/tel-login.html');


const rander=()=>{
    let template=Handlebars.compile(telLoginhtml);
    var html=template();
    $('.signup-txt').html(html);
    $('.speediness').html('快速注册')
}



module.exports={
    rander
}