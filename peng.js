getpeng();

function X(){
let url = new URL(window.location.href);
let params = url.searchParams;


              $.ajax({
             			url:'./peng.php',
             			type:'POST',
             			data:{
             				  'text':$('#text').val()

             			}
              })
               .done( (data) => {
				    getpeng();
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
}


function getpeng(){
 $.ajax({
             			url:'./getpeng.php',
             			type:'POST',
             			data:{


             			}
              })
               .done( (data) => {
					$('#res').html(data);

				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
				}