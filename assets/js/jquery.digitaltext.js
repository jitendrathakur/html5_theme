(function ($) {
    $.fn.digitaltext = function (options) {
        var settings = 
            $.extend({}, {
                delay: 100
            }, options);
        var a = this;    
        function init() {
            a.hide();
            var c = $.trim(a.text());
            var d = c.length;
            var e = "";
            for (var i = 0; i <= d; i++) {
                e = e + "<span class='inner-text-e'>" + (c.substring(i, i + 1)) + "</span>"
            }
            a.html(e);
            var b = $(".inner-text-e",a);
            b.hide();
            a.show();
            var f = 0;
            fadeInText(f);
        }
        
        function fadeInText(c) {
            $(".inner-text-e:eq(" + c + ")",a).fadeIn(10);
            c++;
            setTimeout(function () {
                fadeInText(c);
            }, settings.delay);
        }
        return init();
   };
}(jQuery));