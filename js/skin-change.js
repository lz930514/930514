function ShowImgBox(){
	$("#dimgbox").slideDown();
}

function hideImgBox(){
	$("#dimgbox").slideUp();
}

$(function(){
	if($.cookie("bg-pic") == "" || $.cookie("bg-pic") == null){
		$("body").css("background-image","url(img/timg6.jpeg)");
	}else{
		$("body").css("background-image","url("+ $.cookie("bg-pic") +")");
	}
	$(".imgitem img").click(function(){
		var src = $(this).attr("src");
//		alert($(this).attr("src"));
		$("body").css("background-image","url("+ src +")");
		$.cookie("bg-pic",src,{expires:7});
	});
});
