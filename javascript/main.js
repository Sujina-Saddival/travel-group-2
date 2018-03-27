$(document).ready(function() {
			<!-- Real-time Validation -->
				$('#contact_name').on('input', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
				<!--Email must be an email -->
				$('#contact_email').on('input', function() {
					var input=$(this);
					var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					var is_email=re.test(input.val());
					if(is_email){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
						$("#contact_submit").click(function(){
        				if ($(phone.length != 10)){
        					$("#phone").css("border-color" , "red");
        				}
        				else{
            			$("#phone").css("border-color" ,"initial");
            			
        				}
        			});
					});
   				
			