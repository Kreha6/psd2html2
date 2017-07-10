$(document).ready(function(){
    $(window).scroll(function() {
        var $header = $(".header");
        if ($header.offset().top > 50) {
            $header.addClass("scrolled");
        } else {
            $header.removeClass("scrolled");
        }

        var top = $header.offset().top;
        for(var i = 1;i<6;i++){
            var $anchor = $("li:nth-child(" + i +")");
            var a = $anchor.children( ".page-scroll");
            var topEl = $(a.attr('href')).offset().top;
            console.log(topEl);
            var bottomEl = $(a.attr('href')).offset().top + $(a.attr('href')).height();
            $anchor.removeClass('current');
            if(((top+300)>topEl) && ((top+150)<bottomEl)){
                $anchor.addClass('current');
            }
        }
    });

    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        var top = $($anchor.attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: top-70,
        }, 1500);
        event.preventDefault();

    });

});