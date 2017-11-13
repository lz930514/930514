var gulp = require('gulp');
var bs = require('browser-sync');
var path = require('path');

// task任务
gulp.task('default',function(){
	
})
bs({
	server:{
		baseDir:"./"
	}
})

//监听html文件
gulp.watch("./*.html").on("change",function(){
	bs.reload(); //重新加载浏览器
})

//监听css文件
gulp.watch("./css/*.css").on("change",function(){
	bs.reload(); //重新加载浏览器
})

//监听js文件
gulp.watch("./js/*.js").on("change",function(){
	bs.reload(); //重新加载浏览器
})