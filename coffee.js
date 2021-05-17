// $(function(){
    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset();
        $('html,body').animate({
            'scrollTop':position.top
        },500);
    });
    $('.header-list h1').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },500)
    });
// });
