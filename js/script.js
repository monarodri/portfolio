//this will open overlay
$("img.hamburger").click(function(){
    //$("div.overlay").show();
    $("div.overlay").fadeIn();
    //$("div.overlay").slideDown();
});

//this will close overlay
$("img.close").click(function(){
    //$("div.overlay").hide();
    $("div.overlay").fadeOut();
    //$("div.overlay").slideUp();
});

