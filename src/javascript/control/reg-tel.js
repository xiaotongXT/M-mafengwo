const regtelhtml=require('../view/reg-tel.html');
var fillinmessage=require('../view/fillin-message.html');
var fillinempty=require('../view/fillin-empty.html');
var username;
var userpsd;
var verifycode;
const rander=()=>{
    let template=Handlebars.compile(regtelhtml);
    let html=template();
    $('.input-box').html(html);
    init();
}

function init(){
    let dom=document.querySelector('#register');
    dom.addEventListener('click',clickHandler);
   
}

function clickHandler(e){
    let reg=/^[1]\d{10,10}/;
    let tel=document.querySelector('.reg-tel').value;
    if(!(reg.test(tel)&&tel.length===11)){
        $('.hint-meaasge').html('账号不合法，请重新输入。');
        $('.hint-meaasge').show();
        $('.reg-tel').get(0).value='';
    }
    if(reg.test(tel)&&tel.length===11){
        let template = Handlebars.compile(fillinmessage);
        let html=template();
        $('#main').html(html);
        verification();
    }
    
}

function verification(){
    let btn=document.querySelector('.accomplish');
    username=document.querySelector('.username')
    userpsd=document.querySelector('.userpsd')
    verifycode=document.querySelector('.verifycode')
    btn.addEventListener('click',btnClick);
}
function btnClick(e){
    if(username.value.trim().length===0||userpsd.value.trim().lengt===0||verifycode.value.trim().length===0){
        let html = Handlebars.compile(fillinempty)
        $('#main').html(html());
        $('.hint-meaasge').show();
        init();
    }
     
}

module.exports={
    rander
}