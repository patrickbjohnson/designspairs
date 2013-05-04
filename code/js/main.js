$(document).ready(function(){
	 $("#form").validate({
        submitHandler : function(){
            $("#form").delay(500).fadeOut("slow", function(){
                $(".message").fadeIn("slow");
                return false;	
            });
        }
    }); 
});