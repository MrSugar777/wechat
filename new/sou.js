function X(){
              $.ajax({
             			url:'./sou.php',
             			type:'POST',
             			data:{
             				  'email':$('#email').val()
             			}
              })
               .done( (data) => {

					console.log(data);
					if(data!="ng") {
					data.splic
                    				$('#res').html(data + "<button onclick='y()'>加好友</button>");
                    					}
                    					else{
                    					$('#res').html(data);
                    					}
				})
}

function y(){
              $.ajax({
             			url:'./addfriends.php',
             			type:'POST',
             			data:{
             				  'email':$('#email').val()
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