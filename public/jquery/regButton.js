$(function(){
	$("#submit").on("click", function(event){
		event.preventDefault();
		userData={
			email: $("#email").val(),
			username: $("#username").val(),
			password: $("#pwd").val()
		}
		console.log(userData);
	})
})
