const webserverConfig={
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    //proxies: [ // 让开发服务器去请求其他服务器的数据，避免了本地请求的跨域问题
       // {
       // source: '/maoyan', // 暗号
       // target: 'http://m.maoyan.com/', // 真正的目标
        //}
    //]
}
module.exports=webserverConfig;