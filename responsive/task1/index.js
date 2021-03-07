$(function() {
    $(".icon > img:last-child").click(function(e) {
        e.preventDefault();
        $(".w-container > a").not(".icon").slideToggle(800)
    })
    $(window).resize(function() {
        var size_windown = $(window).width();
        if (size_windown >= 700) {
            $(".w-container > a").show();
        }
    })
})