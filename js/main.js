$(document).ready(function(){

//trigger click event for hidden input[type=file]
$(".js-upload-file").on("click", function(e){
    e.preventDefault();
    $(".upload-file").trigger("click");
})

//magnific popup for save window
$('.popupSave').magnificPopup({
    items: {
        src: '#save-popup',
        type: 'inline'
    }
});
$('.popupSend').magnificPopup({
    items: {
        src: '#sendNotification-popup',
        type: 'inline'
    }
});



//custom close popup button
$(".closePopup").click(function(e){
    e.preventDefault();
    $.magnificPopup.close();
})



})// end of ready