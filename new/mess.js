
let url = new URL(window.location.href);
let params = url.searchParams;

window.onload = function() {
    getmess()
};


setInterval(getmess, 1000);

function X(){
let url = new URL(window.location.href);
let params = url.searchParams;


              $.ajax({
             			url:'./mess.php',
             			type:'POST',
             			data:{
             				  'text':$('#text').val(),
             				  'email':params.get('email')

             			}
              })
               .done( (data) => {
				getmess();
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
}


function getmess(){
 $.ajax({
             			url:'./getmess.php',
             			type:'POST',
             			data:{

             				  'email':params.get('email')

             			}
              })
               .done( (data) => {
					$('#res').html(data);
					 const res = document.getElementById("res");
                        res.scrollTop = res.scrollHeight;

				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
				}