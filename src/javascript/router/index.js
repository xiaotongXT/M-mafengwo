const router=require('./router');

//router
class Router{
    constructor(initial){
        this.router=router;
        this.initial=initial;//默认路由
        this.init();
    }
    init(){
        this.hashChange();
        this.refreshHandler();
    }
    refreshHandler(){
        let url=(location.hash.slice(1));
        if(url){
            Router.addActive(url);
            this.router[url]();
        }
    }
    hashChange(){
        window.addEventListener('hashchange',()=>{
            let url=location.hash.slice(1);
            if(url){
                Router.addActive(url);
                this.router[url]();
            }
        })
    }
    static addActive(path){
        $('.signup-tab-item').removeClass('active');
        $('.signup-tab-item').each((i,element) => {
            if($(element).children().attr('class')===path){
                $(element).addClass('active');
            }
        });
    }
}



module.exports={
    Router,
}