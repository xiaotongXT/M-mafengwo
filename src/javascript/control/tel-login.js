const telLoginhtml=require('../view/tel-login.html');


const rander=()=>{
    let template=Handlebars.compile(telLoginhtml);
    var html=template();
    $('.input-box').html(html);
}



module.exports={
    rander
}
