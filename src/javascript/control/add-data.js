const api=require('../api/api.js')


const ToobtainData=()=>{///hahaha?category=get_info_flow_list&page=1
    return api.request({url:'/hahaha?category=get_info_flow_list&page=1'})
}


module.exports= ToobtainData;
