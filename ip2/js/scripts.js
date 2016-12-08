$(document).ready(function(){
	$("form#subscribe").submit(function  () {
    event.preventDefault();

		var input=$("#emailInput").val();

		$(".unsubscribed").hide();
		$(".subscribed").append(input + " is now subscribed.")
		$(".subscribed").show();

		$
	});
});
