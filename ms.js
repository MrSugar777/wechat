
let url = new URL(window.location.href);
let params = url.searchParams;

window.onload = function() {
    getms()
};


setInterval(getms, 1000);

function X(){
let url = new URL(window.location.href);
let params = url.searchParams;


              $.ajax({
             			url:'./ms.php',
             			type:'POST',
             			data:{
             				  'text':$('#text').val(),
             				  'email':params.get('email')

             			}
              })
               .done( (data) => {
				getms();
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
}


function getms(){
 $.ajax({
             			url:'./getms.php',
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