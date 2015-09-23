 $(document).ready(function(){
  
	$(".back").click(function(){
		$("#formail, .info").css("display", "block");
		$("#alertmsg").css("display", "none");
	});
	
	$("#sendmail").click(function(){
		var valid = '';
		var isr = ' is required.';
		var name = $("#name").val();
		var mail = $("#mail").val();
		//var subject = $("#subject").val();
		var text = $("#text").val();
		if (name.length<1) {
			valid += '<br />Name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />A valid Email'+isr;
		}
		/*if (subject.length<1) {
			valid += '<br />Subject'+isr;
		}*/
		if (text.length<1) {
			valid += '<br />Text'+isr;
		}
		if (valid!='') {
			$("#alertmsg").css("display", "block");
			$("#response").fadeIn("slow");
			$("#response").html(valid);
			$("#formail, .info").css("display", "none");
			
		}
		else {
			var datastr ='name=' + name + '&mail=' + mail /*+ '&subject=' + subject*/ + '&text=' + text;
			$("#alertmsg").css("display", "block");
			$("#response").css("display", "block");
			$("#formail, .info").css("display", "none");
			$("#response").html("<br />Sending message .... ");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html("<br />"+html);
		$("#formail").css("display", "none");
	}
	});
}
