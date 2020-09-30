//The variable takes the value of the new position each time
var scrollp=0;
    (function ($) {
        $(document).ready(function(){
            $(function () {
                $(window).scroll(function () {
                // ask about the position of scroll 

                    if ($(this).scrollTop() < scrollp) {
                        $('.navbar').removeClass("navbar-hide");
                        scrollp= $(this).scrollTop();
                    } else {
                        $('.navbar').addClass("navbar-hide");
                        scrollp= $(this).scrollTop();
                    }
                });
            });

        });
    }(jQuery));

