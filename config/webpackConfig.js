const pathUtil=require('path');

const webpackConfig = {
    mode: 'development',//配置打包模式
    entry: {//入口
        index: pathUtil.join(__dirname, '../src/javascript/index.js'),
        login: pathUtil.join(__dirname, '../src/javascript/module/login.js')
    },
    output: {//出口
        filename: '[name].js'
    },
    module: {//配置各个loader
        rules: [//放入规则
            {
                test: /\.html$/, // 找到引入到js中的html文件
                use: ['string-loader']//对这些模块是用什么loader
            }
        ]
    }
}
module.exports=webpackConfig;