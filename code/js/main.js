$(document).ready(function(){
	// $(".btn button").on("click", function(){
	// 	$(".info").delay(400).fadeOut("slow");
	// 	$(".message").delay(1000).fadeIn("fast");
	// })

	// happy form validation

	$('#signupform').isHappy({
    fields: {
      // reference the field you're talking about, probably by `id`
      // but you could certainly do $('[name=name]') as well.
      '#name': {
        required: true,
        message: 'Please give name'
      },
      '#profession': {
        required: true,
        message: 'What do you do?'
      },
      '#pairprofession': {
        required: true,
        message: 'Who do you want to meet?'
      },
      '#location': {
        required: true,
        message: 'Where do you live?'
      },
      '#email': {
        required: true,
        message: 'Your email tells us you are'
      }
    }
  });
});

