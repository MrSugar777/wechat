
              $.ajax({
             			url:'./frend.php',
             			type:'POST',
             			data:{

             			}
              })
               .done( (data) => {
               console.log(data);
                var d = data.split("|");

                var str = '';
                 for(var i=0; i<d.length-1; i=i+1){
                 str = str + "<a href='ms.html?email="+d[i]+"' target='_brank'>"+d[i]+'</a><br>';
                 }
					$('#res').html(str);


					console.log(data);
				})
				.fail( (data) => {
					$('.result').html(data);
					console.log(data);
				})
				.always( (data) => {

				});
