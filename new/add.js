function X(){
              $.ajax({
             			url:'./add.php',
             			type:'POST',
             			data:{
             				  'email':$('#email').val(),
             				  'password':$('#password').val(),
             			}
              })
               .done( (data) => {
					$('#res').html(data);
					console.log(data);
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
}