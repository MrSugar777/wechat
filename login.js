function X(){
              $.ajax({
             			url:'./login.php',
             			type:'POST',
             			data:{
             				  'email':$('#email').val(),
             				  'password':$('#password').val(),
             			}
              })
               .done( (data) => {
					$('#res').html(data);
					if(data=="ok") {
					 window.location.href = "sh.html";
					}
					console.log(data);
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
}