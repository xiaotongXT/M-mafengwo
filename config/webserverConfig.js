const webserverConfig={
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,//端口
    host:'10.60.18.151',
    proxies: [ // 让开发服务器去请求其他服务器的数据，避免了本地请求的跨域问题
       {
       source: '/hahaha', // 暗号
       target: 'https://m.mafengwo.cn/', // 真正的目标https://m.mafengwo.cn/
        }
    ]
}
module.exports=webserverConfig;

