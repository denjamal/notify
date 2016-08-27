$(document).ready(function(){
	
$(".js-upload-file").on("click", function(e){
    e.preventDefault();
    $(".upload-file").trigger("click");
})


}) // end of ready