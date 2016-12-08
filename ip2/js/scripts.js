$(document).ready(function(){
	$("form#subscribe").submit(function  () {
    event.preventDefault();

		var input=$("#emailInput").val();

		$(".unsubscribed").hide();
		$(".subscribed").append(input + " has been successfully added to our email list. Thank you.")
		$(".subscribed").show();

	});

	$(".hamberger-menu").click(function(){
	document.getElementById("myNav").style.width = "100%";
	});


	/* Close when someone clicks on the "x" symbol inside the overlay */
	$(".closebtn").click(function() {
	document.getElementById("myNav").style.width = "0%";
	});
});
