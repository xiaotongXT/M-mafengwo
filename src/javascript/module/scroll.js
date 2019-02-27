const scrolldata=require('../control/app-index-control');


class Scroll{
    constructor(){
        this.index=0;
        this.backtop=document.querySelector('.backtop');
        this.page=1;
        this.clientHeight=document.documentElement.clientHeight;
    }
    init(){
        document.self=this;
        document.addEventListener('touchmove',this.scrollHandler);
        this.backtop.addEventListener('click',this.clickHandler);
    }
    scrollHandler(e){
        let scrolltop= document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrolltop>1000){
            this.self.backtop.style.display='block';
        }else{
            this.self.backtop.style.display='none';
        }
        if(document.body.clientHeight-scrolltop<window.innerHeight+100){
            this.self.index++;
            if(this.self.index>1){ 
                this.self.index=0;
                return;
            }
            this.self.page++
            scrolldata.rander('/hahaha?category=get_info_flow_list&page='+this.self.page);
        }
    }
    clickHandler(e){   
        Scroll.animations();
    }
    static animations(){
        let st=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(st<10){
            st=0;
            return;
        }
        if(st>1000){
            window.scrollBy(0,800-st);
        }
        requestAnimationFrame(Scroll.animations);
       window.scrollBy(0,-40);
    }
}
module.exports=Scroll