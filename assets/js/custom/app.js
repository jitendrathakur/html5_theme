$(function() {
    $('#da-slider').cslider({
        autoplay: true,
        bgincrement: 450
    });

    var digi_top = {
                        "#digit-t-1":[0,0],
                        '#digit-t-2':[0,0],
                        '#digit-t-3':[0,0]
                    };
    var div_eff = {
                        ".service-tab-in":[0,0]
                    };
                    
    init_digitals();
    init_div_eff();
    check_scrolls();
    function init_digitals()
    {
        $.each(digi_top,function(k,v){
            var pos = $(k).position();
            
            if(typeof pos !="undefined")
                digi_top[k][0] = pos.top;
        });
    }
    
    function init_div_eff()
    {
        $.each(div_eff,function(k,v){
            var pos = $(k).position();
            
            if(typeof pos !="undefined")
                div_eff[k][0] = pos.top;
        });
    }
    
    function check_scrolls()
    {
        $(window).scroll(function(e){
            var top = window.pageYOffset || document.documentElement.scrollTop
            top -= 150; 
            $.each(digi_top,function(k,v){
                if(v[0] <= top && v[1] == 0)
                {
                    $(k).digitaltext({delay:100});
                    digi_top[k][1] = 1;
                }
            });
            $.each(div_eff,function(k,v){
                if(v[0] <= top && v[1] == 0)
                {
                    $(k).addClass("thumbnail-eff");
                    setTimeout(function(){
                        $(k).removeClass("thumbnail-eff");
                    },1000);
                    div_eff[k][1] = 1;
                }
            });
        });
    }
    
    $(".rt-box-load").rtbox({
        loader: HTTP_PATH + "assets/images/icons/sky-load.gif",
        close_icon: HTTP_PATH + "assets/images/icons/close.png"
    });
    
    
    $(".img-responsive").rtloady({delay:1000});
    /*
    |--------------------------------------------------------------------------
    | MAIN ROLLOVER EFFECTS
    |--------------------------------------------------------------------------
    */     

    if($('.imgHover').length){

        $('.imgHover article').hover(
            function () {

                var $this=$(this);

                var fromTop = ($('.imgWrapper', $this).height()/2 - $('.iconLinks', $this).height()/2);
                $('.iconLinks', $this).css('margin-top',fromTop);

                $('.mediaHover', $this).height($('.imgWrapper', $this).height());   

                $('.mask', this).css('height', $('.imgWrapper', this).height());
                $('.mask', this).css('width', $('.imgWrapper', this).width());
                $('.mask', this).css('margin-top', $('.imgWrapper', this).height());


                $('.mask', this).stop(1).show().css('margin-top', $('.imgWrapper', this).height()).animate({marginTop: 0},200, function() {

                    $('.iconLinks', $this).css('display', 'block');
                    if(Modernizr.csstransitions) {
                        $('.iconLinks a').addClass('animated');


                        $('.iconLinks a', $this).removeClass('flipOutX'); 
                        $('.iconLinks a', $this).addClass('bounceInDown'); 

                    }else{

                        $('.iconLinks', $this).stop(true, false).fadeIn('fast');
                    }


                });



            },function () {

                var $this=$(this);


                $('.mask', this).stop(1).show().animate({marginTop: $('.imgWrapper', $this).height()},200, function() {

                    if(Modernizr.csstransitions) {
                        $('.iconLinks a', $this).removeClass('bounceInDown'); 
                        $('.iconLinks a', $this).addClass('flipOutX'); 

                    }else{
                        $('.iconLinks', $this).stop(true, false).fadeOut('fast');
                    }

                });

            });
    }
});