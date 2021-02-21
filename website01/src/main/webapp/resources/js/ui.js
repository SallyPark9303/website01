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
	
 //롤링 배너
	$(".roll_left").click(function(){
		$(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
		
	});
	$(".roll_right").click(function(){
		(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
		
	});
	
	$(".book_roll li").click(function(){
		var _this =$(this);
		var liurl = this.dataset.url; //책 this.data("url")
		$(".notebook").html();
		$.ajax({
			url: liurl,
			dataType: 'html',
			success :function(data){
				$(".notebook").html(data);
			}
		});
	
		
	});
	// 아코디언 기능 
	$(".accordio_box ol li").click(function(){
		$(".accordio_box ol li").removeClass("on");
		$(this).addClass("on");
	});
});

