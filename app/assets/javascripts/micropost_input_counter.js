$(function(){
	var div_id = '#micropost_content'
	displayInputableTextCount(div_id);
	$(div_id).bind('keyup',function(){
		displayInputableTextCount(div_id);
	});
});

function displayInputableTextCount(div_id){
	var ret_text;
	var left_len = 140 - $(div_id).val().length;
	if(left_len<0)
		ret_text = "<font color='#ff0000'>" + left_len + "</font>"
	else
		ret_text = left_len.toString(10);
	$('.count').html(ret_text);
}
