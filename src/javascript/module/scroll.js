const scrolldata=require('../control/app-index-control');


class Scroll{
    constructor(){
        this.index=0;
        this.backtop=document.querySelector('.backtop');
        this.clientHeight=document.documentElement.clientHeight;
    }
    init(){
        document.self=this;
        document.addEventListener('scroll',this.scrollHandler);
        this.backtop.addEventListener('click',this.clickHandler);
    }
    scrollHandler(e){
        if(document.documentElement.scrollTop>800){
            this.self.backtop.style.display='block';
        }else{
            this.self.backtop.style.display='none';
        }
        if(document.body.clientHeight-document.documentElement.scrollTop<this.self.clientHeight){
            this.self.index++;
            if(this.self.index>1){
                this.self.index=0;
                return;
            }
            scrolldata.rander();
        }
    }
    clickHandler(e){   
        Scroll.animations();
    }
    static animations(){
        if(document.documentElement.scrollTop<10){
            document.documentElement.scrollTop=0;
            return;
        }
        if(document.documentElement.scrollTop>1000){
            window.scrollBy(0,800-document.documentElement.scrollTop);
        }
        requestAnimationFrame(Scroll.animations);
       window.scrollBy(0,-40);
    }
}
module.exports=Scroll