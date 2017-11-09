$(function() {
	$("#btn").click(function(e){
		e.preventDefault();

		$.get({
			url: 'http://localhost:8080/enroll',
			data: {
				name: $('#username').val()
			},
			success: function(response) {
				console.log(response);
				$('.panel-body').html(JSON.stringify(response));
			}
		});
	});
});
