$(document).ready(function(){
    /* ======================================================= *
     ...........................SLIDE IN...........................
     ==========================================================*/
    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    /* ======================================================= *
     ...........................SCROLL...........................
     ==========================================================*/

    $(window).scroll(function() {
        var $header = $(".header");
        var $logo = $(".logo");
        if ($header.offset().top > 50) {
            $header.addClass("scrolled");
            $logo.fadeIn(1000);
            if($(window).width()<340){
                $( ".logo__phone,.logo__number" ).css("display", "none");
            }
            else{
                $( ".logo__phone,.logo__number" ).css("display", "inline-block");
            }

        } else {
            $header.removeClass("scrolled");
            $logo.fadeOut(1000);
        }
        var set = false;
        var top = $header.offset().top;
        for(var i = 1;i<6;i++){
            var $anchor = $("li:nth-child(" + i +")");
            var a = $anchor.children( ".page-scroll");
            var topEl = $(a.attr('href')).offset().top;
            var bottomEl = $(a.attr('href')).offset().top + $(a.attr('href')).height();
            var botWin = top+winHeight ;
            var winHeight = $( window ).height();
            if(!set){
                if(((botWin-100)<bottomEl) && (botWin>topEl)){
                    $(".current").removeClass('current');
                    $anchor.addClass('current');
                    set = true;
                }
            }

            if(top<100){
                $(".current").removeClass('current');
                $("li:nth-child(1)").addClass('current');
            }
        }

        $(".module:not(.already-visible)").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
                el.addClass('already-visible');
            }
        });

    });
    /* ======================================================= *
     ...........................LINKS...........................
     ==========================================================*/
    $(document).on('click', 'a.page-scroll', function(event) {

        var $anchor = $(this);
        var top = $($anchor.attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: top-70,
        }, 1500);
        event.preventDefault();
        $(".current").removeClass('current');
        $anchor.addClass('current');
        if($(window).width()<768){
            $( ".checkbox-toggle" ).trigger( "click" );
        }
    });
    $(document).on('click', '.logo__logo', function(event) {
        $('html, body').stop().animate({
            scrollTop: 0,
        }, 1500);
    });


    /* ======================================================= *
     ...........................PRICING...........................
     ==========================================================*/

    $(document).on('click', '.pricing__plans__plan__info__button:not(.active)', function(event) {
        $('.pricing__plans__plan__info__button.active').removeClass('active');
        $(this).addClass('active');


    });


});