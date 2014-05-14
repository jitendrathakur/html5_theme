(function ($) {
    $.fn.rtbox = function (options) {
        var settings = 
            $.extend({}, {
                delay: 1000,
                loader: "assets/images/loader.gif",
                close_icon: "assets/images/close.png"
            }, options);
        var mainthis = this;    
        function init()
        {
            var modal = '<div class="modal fade" id="rtbox_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><a type="button" class="close_out" data-dismiss="modal" aria-hidden="true"><img class="close_out_img" src="'+settings.close_icon+'"></a><div class="inner_d_panel"></div></div></div></div>';
            $("body").append(modal);
            $(mainthis).each(function(){
                var _this = this;
                $(this).bind("click",function(e){
                    e.preventDefault();
                    $("#rtbox_modal .inner_d_panel").empty();
                    var this_url = $(this).attr("href");
                    var image = $("<img>");
                    image.addClass("loading-cl loading").attr("src",settings.loader);
                    image.attr("data-src",this_url);
                    image.appendTo("#rtbox_modal .inner_d_panel");
                    $("#rtbox_modal").modal("show");
                    $("#rtbox_modal .loading").rtloady({
                        delay: 1000
                    }); 
                });
            });
        }
        return init();
   };
}(jQuery));