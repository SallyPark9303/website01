$(document).ready(function(){
	$("#container").addClass("start");
	$("nav li").click(function(){
		$("#container").css("max-width","100%");
		var id=$(this).attr("data-rol");
	$("nav li").removeClass("on");
	$(this).addClass("on");
	$(".content").removeClass("prev this next");
	$("#"+id).addClass("this").prevAll().addClass("prev");
	$("#"+id).addClass("this").nextAll().addClass("next");
	//alert($(this).attr("data-rol")); ->얘를 선택자로 사용
	});
	
	$(".logo_box").click(function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev next this");
		$("#container").css("max-width","1200px");
	});
	
});

