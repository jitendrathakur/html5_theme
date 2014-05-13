(function ($) {
    $.fn.rtloady = function (options) {
        var settings = 
            $.extend({}, {
                delay: 1000
            }, options);
        var mainthis = this;    
        function loadImages()
        {
            $(mainthis).each(function(){
                var _this = this;
                var orig_src = $(this).attr("data-src");
                var date = new Date();
                $(this).append("<img class='dep_loader' src='"+orig_src+"?t="+date.getTime()+"' style='display:none;'>");
            });

            $(".dep_loader").load(function(){
                var parent = $(this).parent();
                if(parent.length == 0)
                    return;
                var src = $(this).attr("src");
                $(parent).hide().fadeIn(1000);
                $(parent).attr("src",src).show(1000);
                $(this).remove();
                $(parent).removeClass("loading-cl");
            });
        }
        setTimeout(function(){
            return loadImages();
        },settings.delay);

   };
}(jQuery));