const api=require('../api/api.js')


const ToobtainData=()=>{
    return api.request({url:'/hahaha?category=get_info_flow_list&page=1'})
}
const bannerimg=()=>{
    return api.request({url:' http://localhost:5001/bannerimg'})
}


module.exports= {
    ToobtainData,bannerimg
}
