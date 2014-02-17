$(function(){
	$('#micropost_content').bind('keyup',function(){
		var left_len = 140 - $(this).val().length;
		$('.count').html(left_len);
	});
});
