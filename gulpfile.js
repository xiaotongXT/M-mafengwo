
//引入模块
const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
const Path=require("path");
const del=require('del');
const webserver=require("gulp-webserver");
const webpack=require('webpack-stream')
const {webserverConfig,webpackConfig}=require('./config');



//创建任务

//拷贝html文件
gulp.task("copy-html",()=>{
    return gulp.src('./src/*.html')
    .pipe(gulp.dest("dist"))
});

//拷贝static文件
gulp.task("copy-static",()=>{
    return gulp.src('./src/static/**/*')
    .pipe(gulp.dest('dist/static'))
});

//拷贝html文件夹
gulp.task("html-file",()=>{
    return gulp.src('./src/html/**/*')
    .pipe(gulp.dest('dist/html'))
});

//处理sass文件
gulp.task('compile-sass',()=>{
    return gulp.src('./src/stylesheet/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
    .pipe(gulp.dest('./dist/stylesheet'))
})

//创建服务器
gulp.task("webserver",()=>{
    return gulp.src('dist')
    .pipe(webserver(webserverConfig))
})


//处理js文件
gulp.task('pack-js',()=>{
    return gulp.src('./src/javascript/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist/javascript'))
})

//监听文件变化
gulp.task('watch',()=>{
    gulp.watch('./src/*.html',['copy-html']);
    gulp.watch('./src/stylesheet/**/*.scss',['compile-sass']);
    gulp.watch('./src/javascript/**/*',['pack-js'])
    watch('./src/static/**/*',(v)=>{
        if(v.event==='unlink'){
            let _path = Path.resolve('./dist/static/', v.path.split('\\static\\')[1]);
            del(_path);
        }else{
            gulp.start(['copy-static'])
        }
    })
    watch('./src/html/**/*',(v)=>{
        if(v.event==='unlink'){
            let _path = Path.resolve('./dist/html/', v.path.split('\\html\\')[1]);
            del(_path);
        }else{
            gulp.start(['html-file'])
        }
    })
})

gulp.task('default',['copy-static','html-file','copy-html','compile-sass','pack-js','watch','webserver']);