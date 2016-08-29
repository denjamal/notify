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
    });

    //Plugin
    (function(title, text, img){

        if (!$) return;

        //creating html elements

        var title = title ||  "We would like to send you push notifications";
        var text = text || "You can choose “Turn Off” notifications later anytime using browser settings.";
        var img = img || "img/logo.jpg";

        var plugin = $("<div></div>").addClass("plugin");
        var pluginContainer = $("<div></div>").addClass("plugin__container");
        var textDiv = $("<div></div>").addClass("plugin__text");
        var img = $("<img>",{src: img, width: 76});
        var title = $("<h3></h3>").text(title);
        var paragraph = $("<p></p>").text(text);
        var submit = $("<input>").attr("type", "submit").val("Allow").addClass("form-control");
        var spanClose = $("<span></span>").addClass("plugin__close").text("x");
        var spanTriangle = $("<span></span>").addClass("plugin__triangle");
        var divImg  = $("<div></div>").addClass("plugin__img");
        var badge = $("<span></span>").text("1").addClass("badge hidden");

        //appending html element into page
        plugin
            .append(pluginContainer)
            .append(divImg);

        pluginContainer
            .append(img)
            .append(textDiv)
            .append(spanClose)
            .append(spanTriangle);

        textDiv
            .append(title)
            .append(paragraph)
            .append(submit);

        divImg
            .append(badge);

        //adding click events

        spanClose.click(function(){
            pluginContainer.toggleClass("hidden");
            badge.toggleClass("hidden");
        });

        divImg.hover(function(){
            pluginContainer.removeClass("hidden");
            badge.addClass("hidden");
        });

        submit.click(function(){
            var win = window.open("test.html", "google", "width=520,height=440, left=0, top=0");
        });

        var timer = setTimeout(function(){plugin.appendTo("html")}, 2000);




    })();

})// end of ready