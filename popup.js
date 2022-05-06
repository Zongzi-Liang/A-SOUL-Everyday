
    $(function () {

        $(".king li").mouseenter(function () {

            $(this).stop().animate({
                width: 224
            }, 200).find(".small").fadeOut().siblings(".big").fadeIn();

            $(this).siblings("li").stop().animate({
                width: 69
            }).find(".small").fadeIn().siblings(".big").fadeOut();
        })

    })

    