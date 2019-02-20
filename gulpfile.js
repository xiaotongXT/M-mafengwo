
//引入模块
const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
const Path=require("path");
const del=require('del');
const webserver=require("gulp-webserver");
const webserverConfig=require('./config/webserverConfig');



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


//监听文件变化
gulp.task('watch',()=>{
    gulp.watch('./src/*.html',['copy-html']);
    gulp.watch('./src/stylesheet/**/*.scss',['compile-sass']);
    watch('./src/static/**/*',(v)=>{
        if(v.event==='unlink'){
            let _path = Path.resolve('./dist/static/', v.path.split('\\static\\')[1]);
            del(_path);
        }else{
            gulp.start(['copy-static'])
        }
    })
})

gulp.task('default',['copy-static','copy-html','compile-sass','watch','webserver']);