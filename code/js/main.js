$(document).ready(function(){

	$("#form").validate({
        submitHandler : function(form){
        	$("#form").delay(500).fadeOut("slow");
	 		$(".message").delay(1000).fadeIn("slow");
        }
    });





    
});
	// $("#form").validate();
	// 	$("#form").submit(function(){
	// 		$("button").click(function(){
	// 			$("#form").delay(500).fadeOut("slow");
	// 			$(".message").delay(1000).fadeIn("slow");
	// 			return false;
	// 		})
			
	// 	})

	    // $('#form').on("submit", function(){
	    // 	return false;
	    //     if ($("#form").valid()){
	    //         console.log("works");
	    //         form.submit();
	    //     } else {
	    //         console.log("didn't work");
	    //     }

	    // });
// s


// $("#form").delay(400).fadeOut("slow");
// $(".message").delay(1000).fadeIn("slow");

		// $("#form").submit(function(){

		// 	return false;
			

		// $("button").click(function(){
		// 		$("#form").submit();
		// });
