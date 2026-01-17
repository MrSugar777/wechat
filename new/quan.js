getquan();

function X(){
let url = new URL(window.location.href);
let params = url.searchParams;


              $.ajax({
             			url:'./quan.php',
             			type:'POST',
             			data:{
             				  'text':$('#text').val()

             			}
              })
               .done( (data) => {
				    getquan();
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
}


function getquan(){
 $.ajax({
             			url:'./getquan.php',
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